Ext.define('MyApp.view.main.GroupController', {

    extend: 'Ext.app.ViewController',
    requires: [
        'MyApp.view.main.CapsLockTooltip'
        //'MyApp.util.Util'
    ],
    alias: 'controller.group',

    onAdd: function(btn) {
        Ext.create('MyApp.view.main.Form').show();
        console.log(this.getStore('allgroup'));
    },

    onCancel: function(btn) {
        btn.up('window').close();
    },

    onSave: function(btn) {
        //var store = this.getViewModel().data;
        //console.log(store);
        // var dialog = this.dialog;
        // console.log(dialog);
        // form = this.lookupReference('form');
        // console.log(form);
        var win = btn.up('window');
        form = win.down('form');
        var rec = form.getForm().getValues();
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
    },

    onTextFieldKeyPress: function(field, e, options) {
        var charCode = e.getCharCode(),
            me = this;
        if ((e.shiftKey && charCode >= 97 && charCode <= 122) || //#2
            (!e.shiftKey && charCode >= 65 && charCode <= 90)) {
            if (me.capslockTooltip === undefined) { //#3
                me.capslockTooltip = Ext.widget('capslocktooltip'); //#4
            }
            me.capslockTooltip.show(); //#5
        } else {
            if (me.capslockTooltip !== undefined) { //#6
                me.capslockTooltip.hide(); //#7
            }
        }
    }
});