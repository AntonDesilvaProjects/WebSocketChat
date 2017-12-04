Ext.define('WebSocketChat.view.MessagePanel',{
    extend : 'Ext.container.Container',
    alias : 'widget.messagePanel',
    requires : [],
    layout : 'hbox',
    initComponent : function()
    {
        var me = this;
        var txtMessage = Ext.widget('textarea', {
            itemId : 'txtMessage',
            emptyText : 'Enter your message here...',
            padding : '0 5 0 0',
            enableKeyEvents : true,
            listeners : {
                keypress : function(field, event, eOpts)
                {
                    if( event.getKey() === event.ENTER )
                        btnSend.click();
                }
            },
            flex : 9
        });
        var btnSend = Ext.widget('button',{
            itemId : 'btnSend',
            text : 'Send',
            flex : 1,
            handler : 'onBtnSendClick'
        });

        me.items = [
            txtMessage,
            btnSend
        ];
        this.callParent( arguments );
    }
});
