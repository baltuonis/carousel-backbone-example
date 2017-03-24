import 'backbone';
import template from '../templates/carousel.html';


let CarouselView = Backbone.View.extend({
    el: '#carousel-view',
    // template: _.template($('#carousel-template').html()),
    template: template,
    currentIndex: 0, // First visible block index
    maxVisibleCount: 4, // Max visible blocks at one moment
    stepSize: 4, // By how many blocks move
    events: {
        'click .carousel-prev': 'prev',
        'click .carousel-next': 'next',
    },
    initialize: function(options) {
        // Call Render when collection has been loaded/updated
        this.listenTo(this.collection, 'sync', this.render);
        this.collection.fetch();
    },
    render: function() {
        let html = this.template({
            'imgBlocks': this.collection.slice(
                this.currentIndex,
                this.currentIndex + this.maxVisibleCount
            ),
            'canGoNext': this.canGoNext(),
            'canGoPrev': this.canGoPrev(),
        });
        this.$el.html(html);
        return this;
    },
    prev: function() {
        this.moveBy(-this.stepSize);
    },
    next: function() {
        this.moveBy(this.stepSize);
    },
    canGoPrev: function() {
        return (this.currentIndex > 0);
    },
    canGoNext: function() {
        return (
            (this.currentIndex + this.maxVisibleCount) < this.collection.length
        );
    },
    moveBy: function(vector) {
        let maxLenght = this.collection.length;
        // If we are hitting the boundaries - just move as much as possible
        if (vector > 0) {
            if ((vector + this.currentIndex + this.maxVisibleCount) > maxLenght) {
                this.currentIndex = (maxLenght - this.maxVisibleCount);
            } else {
                this.currentIndex += vector;
            }
        } else {
            if ((vector + this.currentIndex) < 0) {
                this.currentIndex = 0;
            } else {
                this.currentIndex += vector;
            }
        }
        this.render();
        return this;
    },
});

export { CarouselView };
