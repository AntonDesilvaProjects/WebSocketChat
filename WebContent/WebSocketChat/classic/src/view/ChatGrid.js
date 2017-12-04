Ext.define('WebSocketChat.view.ChatGrid',{
    extend : 'Ext.grid.Panel',
    requires : ['WebSocketChat.store.ChatGridStore'],
    alias : 'widget.chatGrid',
    store : Ext.create('WebSocketChat.store.ChatGridStore'),
    height : 400,
    viewConfig : {
        emptyText : '<html><div style="padding: 10px;color: gray;background-color: beige;font: bold 13px helvetica, arial, verdana, sans-serif;">Go ahead...type something!</div></html>',
        deferEmptyText: false,
        markDirty : false,
    },
    initComponent : function()
    {
        var me = this;
        me.columns = [
            {
                text : '',
                dataIndex : 'messageSender',
                renderer : function( value, meta, record )
                {
                    if( record.get('me') )
                        return '';
                    return value;
                },
                flex : 1
            },
            {
                text : '',
                dataIndex : 'message',
                renderer : function( value, meta, record )
                {
                    if( record.get('me') )
                        meta.style = 'text-align : right';
                    return value;
                },
                flex : 8
            },
            {
                text : '',
                dataIndex : 'me',
                renderer : function( value, meta )
                {
                    if( value )
                    {
                        meta.tdStyle = 'background-color: #00FF00';
                        return 'me';
                    }
                    return '';
                },
                flex : 1
            }
        ];
        this.callParent( arguments );
    }
});
