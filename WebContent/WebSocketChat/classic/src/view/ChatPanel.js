Ext.define('WebSocketChat.view.ChatPanel',{
  extend : 'Ext.panel.Panel',
  requires : [
      'WebSocketChat.view.ConnectionPanel',
      'WebSocketChat.view.ChatGrid',
      'WebSocketChat.view.MessagePanel',
      'WebSocketChat.controller.ChatPanelController'
  ],
  alias : 'widget.chatPanel',
  controller : 'chatPanelController',
  title : 'The WebSocket Chat',
  layout : {
    type : 'vbox',
    align : 'stretch'
  },
  padding : 10,
  referenceHolder : true,
  initComponent : function()
  {
    var me = this;
    //Chat Grid - displays the ongoing chat
    me.items = [
        {
            //Connection - used to enter the WS url + connect to the server
            xtype : 'connectionPanel',
            reference : 'connectionPanel',
            padding : 5
        },
        {
            xtype : 'displayfield',
            value : 'Connected participants: Peprika, Anton',
            reference : 'statusField',
            padding : 5,
            disabled : true
        },
        {
            xtype : 'chatGrid',
            reference : 'chatGrid',
            padding : 5,
            disabled : true
        },
        {
            xtype : 'messagePanel',
            reference : 'messagePanel',
            padding : 5,
            disabled : true
        }
    ];
    this.callParent( arguments );
},
disableMessageComponents : function( disable )
{
    Ext.Array.forEach( this.items.getRange(), function( cmp ){
        if( cmp.xtype !== 'connectionPanel')
            cmp.setDisabled( disable );
    });
}
});
