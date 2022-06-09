const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const cfg = {
    images: {
        loader: 'imgix',
        path: '/'
    }
}

module.exports = withPlugins([
    [optimizedImages, {
    }]
], cfg);
