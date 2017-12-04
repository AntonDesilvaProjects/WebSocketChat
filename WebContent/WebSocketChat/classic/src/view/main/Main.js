Ext.define('WebSocketChat.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    requires: [
        'WebSocketChat.view.main.MainController',
        'WebSocketChat.view.main.MainModel',
        'Ext.ux.WebSocket',
        'Ext.ux.WebSocketManager',
        'WebSocketChat.view.ChatPanel'
    ],
    controller: 'main',
    viewModel: 'main',
    items: [
      {
        xtype : 'chatPanel'
      }
    ]
});
