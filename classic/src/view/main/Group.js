Ext.define('MyApp.view.main.Group', {
    extend: 'Ext.grid.Panel',
    xtype: 'group',
    viewModel: 'groupViewModel',
    controller: 'group',
    requires: [
        'MyApp.store.Group',
        'MyApp.view.main.GroupViewModel'
    ],
    title: 'Group Test',
    iconCls: 'fa fa-refresh fa-spin',
    width: '100%',
    height: '100%',
    // store: {
    //     type: 'group'
    // },
    bind: '{allgroup}',
    autoLoad: true,
    autoSync: true,
    flex: 1,
    columns: [{
        text: 'Category Name',
        dataIndex: 'cat_name',
        flex: 1
    }, {
        text: 'Status',
        dataIndex: 'cat_status',
        flex: 1,
        renderer: function(dataIndex){
            if(dataIndex === '1'){
                return 'New';
            }else{
                return 'Old';
            }
        }
    }, {
        text: 'URL',
        dataIndex: 'cat_url',
        flex: 1
    }, {
        xtype: 'widgetcolumn',
        width: 110,
        widget: {
            xtype: 'button',
            text: 'Remove',
            handler: 'onRemoveClick'
        }
    }],
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: 'Add',
            iconCls: 'fa fa-cog fa-spin',
            listeners: {
                click: 'onAdd'
            }
        }]
    }],
    listeners: {
        select: 'onItemSelected'
    }
});