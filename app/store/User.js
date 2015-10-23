Ext.define('MyApp.store.User', {
    extend: 'Ext.data.Store',

    alias: 'store.user',

    fields: [
        'name', 'email', 'phone', 'adress'
    ],
    data: {
        items: [{
            name: 'Mr Bean',
            email: "jeanluc.picard@enterprise.com",
            phone: "555-111-1111",
            adress: "Viet Nam"
        }, {
            name: 'Mr Bean 2',
            email: "worf.moghsson@enterprise.com",
            phone: "555-222-2222",
            adress: "Viet Nam"
        }, {
            name: 'Mr Bean 3',
            email: "deanna.troi@enterprise.com",
            phone: "555-333-3333",
            adress: "Viet Nam"
        }, {
            name: 'Mr Bean 4',
            email: "mr.data@enterprise.com",
            phone: "555-444-4444",
            adress: "Viet Nam"
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

// Ext.define('MyApp.store.User', {
//     storeId: 'simpsonsStore',
//     extend: 'Ext.data.Store',
//     alias: 'store.user',
//     fields: ['name', 'email', 'phone'],
//     data: {
//         'items': [{
//             "name": "Lisa",
//             "email": "lisa@simpsons.com",
//             "phone": "555-111-1224"
//         }, {
//             "name": "Bart",
//             "email": "bart@simpsons.com",
//             "phone": "555--222-1234"
//         }, {
//             "name": "Homer",
//             "email": "home@simpsons.com",
//             "phone": "555-222-1244"
//         }, {
//             "name": "Marge",
//             "email": "marge@simpsons.com",
//             "phone": "555-222-1254"
//         }]
//     },
//     proxy: {
//         type: 'memory',
//         reader: {
//             type: 'json',
//             root: 'items'
//         }
//     }
// });