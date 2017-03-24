import 'underscore';

import 'bulma';
import './assets/stylesheets/application.css';

import { ImgBlockModel, ImgBlocksCollection } from './js/models/img_block.js';
import { CarouselView } from './js/views/carousel.js';

let imgBlocks = new ImgBlocksCollection();
let newCarousel = new CarouselView({
    el: '#carousel-view',
    collection: imgBlocks,
    maxBlocks: 4,
    stepSize: 4,
});
