FlowRouter.route('/', {
    name: 'home',
    action: function() {
        BlazeLayout.render('MainLayout', { content: 'ViewDebts' });
        //BlazeLayout.render("HomeLayout");
    }
});

FlowRouter.route('/add_person', {
    action: function(params, queryParams) {
        BlazeLayout.render("MainLayout", { content: "add_person" });
    }
});

FlowRouter.route('/addIOU', {
    name: 'add-iou',
    action: function(params, queryParams) {
        BlazeLayout.render("MainLayout", { content: "AddIOU" });
    }
});

FlowRouter.route('/ViewCredits', {
    name: 'add-iou',
    action: function(params, queryParams) {
        BlazeLayout.render("MainLayout", { content: "ViewCredits" });
    }
});
