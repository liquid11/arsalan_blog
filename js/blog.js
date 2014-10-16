/**
 * Created by ARSLAN on 10/16/2014.
 */
$(function  (){
    Parse.$ = jQuery;

    Parse.initialize("8sH8NKDErP4Eag9YwRzsmOGx4oEfgHup9BcR5SrD", "WCMXWSznpz2JjwCYu6by0RFE1FwWy95Lm516kauG");
    var Blog = Parse.Object.extend("Blog"),
        Blogs = Parse.Collection.extend({
            model: Blog
        }),
        BlogsView = Parse.View.extend({
            template: Handlebars.compile($('#blogs-tpl').html()),
            render: function() {
                var collection = { blog: this.collection.toJSON() };
                this.$el.html(this.template(collection));
            }
        });
    blogs = new Blogs();

    blogs.fetch({
        success: function(blogs) {
            var blogsView = new BlogsView({ collection: blogs });
            blogsView.render();
            $('.main-container').html(blogsView.el);
        },
        error: function(blogs, error) {
            console.log(error);
        }
    });


});

