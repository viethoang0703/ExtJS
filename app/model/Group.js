Ext.define('MyApp.model.Group', {
    extend: 'Ext.data.Model',
    alias: 'model.group',
    fields: [{
        name: 'cat_name',
        type: 'string'
    }, {
        name: 'cat_status',
        type: 'string'
    }, {
        name: 'cat_url',
        type: 'string'
    }]
});