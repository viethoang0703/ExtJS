Ext.define('MyApp.view.main.FeedBackForm', {
    extend: 'Ext.window.Window',
    requires: [
        'Ext.form.Panel'
    ],
    margin: 20,
    width: 600,
    scrollable: true,
    modal: true,
    bodyPadding: 20,
    title: 'FeedBack',
    items: [{
        xtype: 'form',
        defaultType: 'textfield',
        defaults: {
            allowBlank: false,
            flex: 1
        },
        items: [{
            xtype: 'fieldcontainer',
            layout: 'hbox',
            fieldLabel: 'Name',
            combineErrors: true,
            defaultType: 'textfield',
            defaults: {
                allowBlank: false,
                flex: 1
            },
            items: [{
                name: 'firstName',
                emptyText: 'First Name'
            }, {
                name: 'lastName',
                margin: '0 0 0 5',
                emptyText: 'Last Name'
            }]
        }, {
            xtype: 'datefield',
            fieldLabel: 'Date of Birth',
            name: 'dob',
            maxValue: new Date()
        }, {
            fieldLabel: 'Email Address',
            name: 'email',
            vtype: 'email',
            xtype: 'textfield',
            allowBlank: false
        }, {
            fieldLabel: 'Phone Number',
            xtype: 'textfield',
            labelWidth: 100,
            name: 'phone',
            emptyText: 'xxx-xxx-xxxx',
            maskRe: /[\d\-]/,
            regex: /^\d{3}-\d{3}-\d{4}$/,
            regexText: 'The format must be xxx-xxx-xxxx'
        }, {
            xtype: 'numberfield',
            name: 'productsPurchased',
            fieldLabel: 'How many times have you purchased our product?',
            value: 0,
            maxValue: 1000,
            minValue: 0
        }, {
            xtype: 'radiogroup',
            fieldLabel: 'How satisfied with our service?',
            vertical: true,
            columns: 1,
            items: [{
                boxLabel: 'Very satisfied',
                name: 'rb',
                inputValue: '1'
            }, {
                boxLabel: 'Satisfied',
                name: 'rb',
                inputValue: '2'
            }, {
                boxLabel: 'Didn\'t care',
                name: 'rb',
                inputValue: '3'
            }, {
                boxLabel: 'Dissatisfied',
                name: 'rb',
                inputValue: '4'
            }, {
                boxLabel: 'Very Dissatisfied',
                name: 'rb',
                inputValue: '5'
            }]
        }, {
            xtype: 'checkboxgroup',
            fieldLabel: 'Which of these words would you use to describe our products? Select all that apply',
            vertical: true,
            columns: 1,
            items: [{
                boxLabel: 'Reliable',
                name: 'ch',
                inputValue: '1'
            }, {
                boxLabel: 'High quality',
                name: 'ch',
                inputValue: '2'
            }, {
                boxLabel: 'Good value for money',
                name: 'ch',
                inputValue: '3'
            }, {
                boxLabel: 'Overpriced',
                name: 'ch',
                inputValue: '4'
            }, {
                boxLabel: 'Poor quality',
                name: 'ch',
                inputValue: '5'
            }]
        }, {
            xtype: 'radiogroup',
            fieldLabel: 'How likely is it that you would recommend this company to a friend or colleague?',
            vertical: true,
            defaults: {
                padding: 20
            },
            items: [{
                boxLabel: '1',
                name: 'recommend',
                inputValue: '1'
            }, {
                boxLabel: '2',
                name: 'recommend',
                inputValue: '2'
            }, {
                boxLabel: '3',
                name: 'recommend',
                inputValue: '3'
            }, {
                boxLabel: '4',
                name: 'recommend',
                inputValue: '4'
            }, {
                boxLabel: '5',
                name: 'recommend',
                inputValue: '5'
            }]
        }, {
            xtype: 'textareafield',
            fieldLabel: 'Comments',
            labelAlign: 'top',
            name: 'comments',
            width: '100%',
            height: 100
        }]
    }],
    buttons: [{
        text: 'Submit',
        handler: function() {
            var win = this.up('window');
            console.log(win);
            var form = win.down('form');
            console.log(form);
            var test = form.getForm();
            //var form = this.up('form').getForm();
            console.log(test);
            if (form.isValid()) {
                form.submit({
                    url: 'customer/feedback',
                    success: function() {
                        alert('OK!');
                    },
                    failure: function() {
                        alert('Not OK!');
                    }
                });
            } else {
                Ext.Msg.alert('Error', 'Fix the errors in the form');
            }
        }
    }]
});