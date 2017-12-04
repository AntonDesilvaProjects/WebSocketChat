Ext.define('WebSocketChat.controller.ChatPanelController',{
    extend : 'Ext.app.ViewController',
    alias : 'controller.chatPanelController',
    init : function()
    {
        this.chatGrid = this.lookupReference('chatGrid');
        this.callParent( arguments );
    },
    onBtnConnectClick : function( button )
    {
        var me = this;
        var txtWebSocketURL = button.up().down('#txtWebSocketURL');
        if( txtWebSocketURL )
        {
            var webSockUrl = txtWebSocketURL.getValue();
            if( Ext.isEmpty( webSockUrl ) )
            {
                Ext.Msg.alert("Error", "Please enter a Websocket URL!");
                return;
            }
            //Add any other regex based validation...

            //Make a connection
            me.createWebSocketConnection( webSockUrl, me.onSocketMessageRecieve,
                                                      me.onSocketError,
                                                      me.onSocketOpen,
                                                      me.onSocketClose  );
        }
    },
    createWebSocketConnection( url, messageHandler, errorHandler, openHandler, closeHandler )
    {
        var me = this;
        if( me.activeWSConnection ) //Chat client should only have one active connection
            me.activeWSConnection.close();

        var emptyFn = function(){};
        me.activeWSConnection = Ext.create('Ext.ux.WebSocket', {
            url : url,
            listeners : {
                message : messageHandler ? messageHandler : emptyFn,
                error : errorHandler ? errorHandler : emptyFn,
                open : openHandler ? openHandler : emptyFn,
                close : closeHandler ? closeHandler : emptyFn,
                scope : me
            }
        });
    },
    onSocketMessageRecieve : function( websocket, message )
    {
        console.log('message recieved');
        console.log( message );
        var me = this;
        message = Ext.JSON.decode( message );
        var messageModel = Ext.create('WebSocketChat.model.ChatGridModel');
        messageModel.set('messageSender', message.messageSender );
        messageModel.set('message', message.message );
        messageModel.set('me', messageModel.get('messageSender') === me.userName );

        this.chatGrid.store.loadData([
            messageModel
        ], true);
    },
    onSocketError : function( websocket, error)
    {
        console.log('socket error');
        console.log(error);
        console.log(websocket);
    },
    onSocketOpen : function( websocket )
    {
        console.log('socket open');
        this.getView().disableMessageComponents( false );
    },
    onSocketClose : function( websocket )
    {
        console.log('socket close');
        console.log(websocket);
    },
    onBtnSendClick : function( button )
    {
        var me = this;
        var txtMessage = button.up().down('#txtMessage');
        var message = txtMessage.getValue();
        if( Ext.isEmpty( message ) )
        {
            Ext.Msg.alert("Error", "Please enter a message to send!");
            return;
        }

        var clientName = me.getUserName();
        if( !clientName )
            return;
        var messageObj = {
            clientName : clientName,
            message : message
        };
        me.activeWSConnection.send( JSON.stringify( messageObj) );
        txtMessage.setValue("");
        txtMessage.focus();
    },
    getUserName : function()
    {
        var me = this;
        if( !me.userName )
        {
            Ext.widget('window', {
                title : 'Username',
                padding : 5,
                items : [
                    {
                        xtype : 'textfield',
                        itemId : 'txtUsername',
                        fieldLabel : 'Enter username for chat'
                    }
                ],
                buttons : [
                    {
                        text : 'OK',
                        handler : function( button )
                        {
                            var popup = button.up('window');
                            me.userName = popup.down('#txtUsername').getValue();
                            popup.close();

                            var btnSend = Ext.ComponentQuery.query('#btnSend')[0];
                            me.onBtnSendClick( btnSend );
                        }
                    }
                ]
            }).show();
        }
        return me.userName;
    }
});
