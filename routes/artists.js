var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var topArtists = [

        {
            "id": "5I4eibDkC7gg0hmczTZuND",

            "name": "Mando Diao",

            "popularity": 56,

            "genres": [],

            "external_urls": { "spotify": "https://open.spotify.com/artist/5I4eibDkC7gg0hmczTZuND" },

            "images": [
                { "height": 643, "url": "https://i.scdn.co/image/b67ccc2d5956e902698fda822842772049233bc9", "width": 1000 },
                { "height": 412, "url": "https://i.scdn.co/image/7b7c11efd6cabe728be5bac53dc50e3c2fac5e14", "width": 640 },
                { "height": 129, "url": "https://i.scdn.co/image/32965afe45d6c51af01dd3f7cdcff790655d2ef1", "width": 200 },
                { "height": 41, "url": "https://i.scdn.co/image/fe10c6f91e6eab858687ee4627b4472b4d2b9079", "width": 64 }
            ],

            "notifiable": true
        }
    ];


    res.render('artists', { title: 'Artists', myArtists: topArtists });
});



module.exports = router;