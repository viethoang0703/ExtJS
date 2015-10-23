Ext.define('MyApp.store.PracticeCategories', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.PracticeCategory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            model: 'MyApp.model.PracticeCategory'
        }, cfg)]);
    }
});