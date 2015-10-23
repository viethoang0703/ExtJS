Ext.define('MyApp.store.Group', {
    extend: 'Ext.data.Store',

    alias: 'store.group',
    requires: [
        'MyApp.model.Group'
    ],
    dataType: 'json',
    autoLoad: true,
    autoSync: true,
    model: 'MyApp.model.Group',
    // sorters: {
    //     property: 'cat_name',
    //     direction: 'ASC'
    // },
    proxy: {
        type: 'rest',
        url: 'http://localhost/blogs/public/admin/category',
        //dataType: 'json',
        reader: {
            type: 'json',
            rootProperty: 'group'
        },
        writer: {
            type: 'json'
        },
        autoLoad: true,
        autoSync: true
    }
});