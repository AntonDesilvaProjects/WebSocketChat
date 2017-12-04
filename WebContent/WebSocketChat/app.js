/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'WebSocketChat.Application',

    name: 'WebSocketChat',

    requires: [
        // This will automatically load all classes in the WebSocketChat namespace
        // so that application classes do not need to require each other.
        'WebSocketChat.*'
    ],

    // The name of the initial view to create.
    mainView: 'WebSocketChat.view.main.Main'
});
