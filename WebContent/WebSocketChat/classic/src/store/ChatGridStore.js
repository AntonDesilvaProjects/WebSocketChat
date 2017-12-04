Ext.define('WebSocketChat.store.ChatGridStore',{
    extend : 'Ext.data.Store',
    requires : [
        'WebSocketChat.model.ChatGridModel'
    ],
    model : 'WebSocketChat.model.ChatGridModel',
    // proxy : {
    //     type : 'ajax',
    //     url : '',
    //     reader : {
    //         type : 'json',
    //         rootProperty : ''
    //     }
    // }
});
