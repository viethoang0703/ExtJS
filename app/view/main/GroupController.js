Ext.define('MyApp.view.main.GroupController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.group',

    onAdd: function(btn) {
        Ext.create('MyApp.view.main.Form').show();
        console.log(this.getStore('allgroup'));
    },

    onCancel: function(btn) {
        btn.up('window').close();
    },

    onSave: function(btn) {

        var win = btn.up('window');
        form = win.down('form');
        var rec = form.getForm().getValues();
        // var myStore = Ext.create('MyApp.store.Group');
        // myStore.add(rec);
        console.log(rec);
        var store = Ext.create('MyApp.view.main.GroupViewModel');
        var allStore = store.getStore('allgroup');
        allStore.add(rec);
        btn.up('window').close();
    },

    onRemoveClick: function(btn) {
        var rec = btn.getWidgetRecord();
        var del = this.getStore('allgroup');
        console.log(rec);
        //confirm messagebox
        Ext.Msg.confirm("Confirmation", "Do you want to Delete?", function(btnText) {
            if (btnText === "no") {
                //
            } else if (btnText === "yes") {
                del.remove(rec);
            }
        });
    },

    onItemSelected: function(view, record) {
        var win = Ext.create('MyApp.view.main.Form');
        win.show();
        var form = win.down('form');
        form.loadRecord(record);
    },

    onAddFeedBack: function(btn) {
        Ext.create('MyApp.view.main.FeedBackForm').show();
    }
});