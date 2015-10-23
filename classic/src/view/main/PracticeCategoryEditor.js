Ext.define('MyApp.view.main.PracticeCategoryEditor', {
    extend: 'Ext.grid.Panel',
    xtype: 'feedback',
    controller: 'group',
    requires: [
        'MyApp.store.User'
    ],

    title: 'FeedBack',

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
    },
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: 'Add',
            iconCls: 'fa fa-plus-circle',
            listeners: {
                click: 'onAddFeedBack'
            }
        }]
    }]
});