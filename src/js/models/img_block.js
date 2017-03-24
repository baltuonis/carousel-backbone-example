import 'backbone';

let ImgBlockModel = Backbone.Model.extend({
    url: '/img_blocks/1',
    defaults: {
        id: null,
        title: null,
        images: null,
    },
    getRandomImgUrl: function() {
        let images = this.get('images');
        return images[Math.floor(Math.random() * images.length)];
    },
});

let ImgBlocksCollection = Backbone.Collection.extend({
    url: '/img_blocks/',
    model: ImgBlockModel,
});

export { ImgBlockModel, ImgBlocksCollection };
