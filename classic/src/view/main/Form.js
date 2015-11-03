Ext.define('MyApp.view.main.Form', {
    extend: 'Ext.window.Window',
    title: 'Form',
    requires: [
        'Ext.form.Panel'
    ],
    // store: {
    //     type: 'form'
    // },
    bind: {
        title: '{title}'
    },
    bodyPadding: 10,
    modal: true,
    controller: 'group',
    //minHeight: 400,
    width: '40%',
    items: [{ // Let's put an empty grid in just to illustrate fit layout
        xtype: 'form',
        defaultType: 'textfield',
        reference: 'form',
        items: [{
            fieldLabel: 'Category Name',
            emptyText: 'Enter Category  Name',
            name: 'cat_name',
            width: '100%',
            reference: 'cat_name',
            bind: '{theCustomer.cat_name}'
        }, {
            xtype: 'fieldcontainer',
            fieldLabel: 'Status',
            defaultType: 'radiofield',
            bind: '{theCustomer.cat_status}',
            reference: 'cat_status',
            defaults: {
                margin: '0 70 0 0'
            },
            layout: 'hbox',
            items: [{
                boxLabel: 'New',
                name: 'cat_status',
                inputValue: '1',
                id: 'radio1',
                checked: true
            }, {
                boxLabel: 'Old',
                name: 'cat_status',
                inputValue: '0',
                id: 'radio2'
            }]
        }, {
            xtype: 'datefield',
            fieldLabel: 'Create At',
            name: 'createAt',
            width: '100%',
            value: new Date()
        }],

        buttons: [{
            text: 'Save',
            listeners: {
                click: 'onSave'
            }
        }, {
            text: 'Cancel',
            listeners: {
                click: 'onCancel'
            }
        }]
    }]
});