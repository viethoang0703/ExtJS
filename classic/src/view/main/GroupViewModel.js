Ext.define('MyApp.view.main.GroupViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.groupViewModel',
    requires: [
        'MyApp.store.Group',
        'MyApp.model.Group'
    ],
    // data: {

    // },
    stores: {
        allgroup: {
            type: 'group',
            autoLoad: true,
            autoSync: true
        }
    }
});