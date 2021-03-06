Apps.module('Views', function (Views, App, Backbone, Marionette, $) {

    Views.ModerationLayout = Backbone.Marionette.LayoutView.extend({
        el: ".js-page-layout",
        regions: {
            pageContents: ".js-main"
        }
    });

    Views.topView = Marionette.ItemView.extend({
        template   : "#top-page-template",
        events: {
            "click .js-open-example" : "exampleShow"
        },
        exampleShow : function () {
            Apps.router.navigate("example", {trigger:true});
            return false;
        }
    });

    Views.exampleView = Marionette.ItemView.extend({
        template   : "#example-template",
        initialize: function () {},
        events: {},
        onShow : function () {}
    });

    Views.AppView = Marionette.ItemView.extend({
        tagName  : "li",
        template : "#app-template",
        initialize: function () {},
        events: {},
        onShow : function () {}
    });

    Views.AppsListView = Backbone.Marionette.CompositeView.extend({
        childView: this.AppView,
        childViewContainer: "ul",
        template: "#example-template",
        events: {
            "click .js-send-id" : "sendId"
        },
        sendId : function () {
            Apps.router.navigate("example/12", {trigger:true});
            return false;
        }
    });

});
