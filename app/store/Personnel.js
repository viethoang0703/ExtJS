Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'name', 'email', 'phone'
    ],

    data: {
        items: [{
            name: 'Mr Bean',
            email: "jeanluc.picard@enterprise.com",
            phone: "555-111-xxxx"
        }, {
            name: 'Worf',
            email: "worf.moghsson@enterprise.com",
            phone: "555-222-yyyy"
        }, {
            name: 'Deanna',
            email: "deanna.troi@enterprise.com",
            phone: "555-333-zzzz"
        }, {
            name: 'Data',
            email: "mr.data@enterprise.com",
            phone: "555-444-tttt"
        }]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});