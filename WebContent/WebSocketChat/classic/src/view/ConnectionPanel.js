/*
    Connection - used to enter the WS url + connect to the server
*/
Ext.define('WebSocketChat.view.ConnectionPanel',{
    extend : 'Ext.container.Container',
    alias : 'widget.connectionPanel',
    layout : 'hbox',
    //width : '100%',
    initComponent : function()
    {
        var me = this;
        var txtWebSocketURL = Ext.widget('textfield', {
            itemId : 'txtWebSocketURL',
            emptyText : 'Enter web socket url',
            flex : 9,
            padding : '0 5 0 0',
            value : 'ws://localhost:8080/WebSocketChat/chat',
        });
        var btnConnect = Ext.widget('button',{
            itemId : 'btnConnect',
            text : 'Connect',
            flex : 1,
            handler : 'onBtnConnectClick'
        });

        me.items = [
            txtWebSocketURL,
            btnConnect
        ]
        this.callParent(arguments);
    }
});
