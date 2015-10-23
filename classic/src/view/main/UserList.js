Ext.define('MyApp.view.main.UserList', {
    extend: 'Ext.grid.Panel',
    xtype: 'userlist',

    requires: [
        'MyApp.store.User'
    ],

    title: 'User List',

    store: {
        type: 'user'
    },

    columns: [{
        text: 'User Name',
        dataIndex: 'name',
        width: 300
    }, {
        text: 'Email',
        dataIndex: 'email',
        flex: 1,
        editor: {
            xtype: 'textfield',
            allowBlank: false
        }
    }, {
        text: 'Phone',
        dataIndex: 'phone',
        flex: 1,
        editor: {
            xtype: 'textfield',
            allowBlank: false
        }
    }, {
        xtype: 'checkcolumn',
        header: 'Active?',
        dataIndex: 'active',
        width: 90,
        editor: {
            xtype: 'checkbox',
            cls: 'x-grid-checkheader-editor'
        }
    }],
    selType: 'rowmodel',
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 1
        })
    ],
    listeners: {
        select: 'onItemSelected'
    }
});