Ext.define('WebSocketChat.model.ChatGridModel',{
    extend : 'Ext.data.Model',
    fields : [
        {
            name : 'messageSender',
            type : 'string',
            mapping : 'messageSender'
        },
        {
            name : 'messageTime',
            type : 'string',
            mapping : 'messageTime'
        },
        {
            name : 'message',
            type : 'string',
            mapping : 'message'
        },
        {
            name : 'me',
            type : 'boolean',
            mapping : 'me'
        }
    ]
});
