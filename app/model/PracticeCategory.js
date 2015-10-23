Ext.define('MyApp.model.PracticeCategory', {
    extend: 'Ext.data.Model',
    alias: 'store.practicecategoryeditor',
    requires: [
        'Ext.data.Field',
        'Ext.data.proxy.Rest'
    ],

    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'isActive',
        type: 'boolean'
    }],

    proxy: {
        type: 'rest',
        url: 'http://localhost/blogs/public/admin/user'
    }
});