var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('events', { title: 'Events' });
});



var jsondata = {
    "_links": {
        "self": {
            "href": "/discovery/v2/events.json?size=3&dmaId=602&classificationName=Music{&page,sort}",
            "templated": true
        },
        "next": {
            "href": "/discovery/v2/events.json?dmaId=602&classificationName=Music&page=1&size=3{&sort}",
            "templated": true
        }
    },
    "_embedded": {
        "events": [{
            "name": "Carnival Hangover",
            "type": "event",
            "id": "G5vHZfo2hMbbv",
            "test": false,
            "url": "http://ticketmaster.co.uk/event/1F005113DBDD8601",
            "locale": "en-us",
            "images": [{
                "ratio": "16_9",
                "url": "http://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": true
            }, {
                "ratio": "16_9",
                "url": "http://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": true
            }, {
                "ratio": "4_3",
                "url": "http://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": true
            }, {
                "ratio": "16_9",
                "url": "http://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": true
            }, {
                "ratio": "3_2",
                "url": "http://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": true
            }, {
                "ratio": "3_2",
                "url": "http://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": true
            }, {
                "ratio": "3_2",
                "url": "http://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": true
            }, {
                "ratio": "16_9",
                "url": "http://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": true
            }, {
                "ratio": "16_9",
                "url": "http://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": true
            }, {
                "ratio": "16_9",
                "url": "http://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": true
            }],
            "sales": {
                "public": {
                    "startDateTime": "2016-08-19T07:38:10Z",
                    "startTBD": false,
                    "endDateTime": "2016-08-29T17:00:00Z"
                }
            },
            "dates": {
                "start": {
                    "localDate": "2016-08-29",
                    "localTime": "19:00:00",
                    "dateTime": "2016-08-29T18:00:00Z",
                    "dateTBD": false,
                    "dateTBA": false,
                    "timeTBA": false,
                    "noSpecificTime": false
                },
                "timezone": "Europe/London",
                "status": {
                    "code": "offsale"
                }
            },
            "classifications": [{
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAed",
                    "name": "Reggae"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vknl",
                    "name": "Reggae"
                }
            }],
            "pleaseNote": "Age restriction is strictly 18+. The additional £20 (per person) for restaurant bookings serve as a non-refundable deposit, this will be redeemed against the bill at the end of your meal. Tables will be available from 19:00 until 22:30.(Menu is subject to change). All restaurant seating is located on the mezzanine floor. All downstairs(ground floor) tickets are general admission standing only.",
            "_links": {
                "self": {
                    "href": "/discovery/v2/events/G5vHZfo2hMbbv?locale=en-us"
                },
                "venues": [{
                    "href": "/discovery/v2/venues/KovZpZAnaJaA?locale=en-us"
                }]
            },
            "_embedded": {
                "venues": [{
                    "name": "Jazz Cafe",
                    "type": "venue",
                    "id": "KovZpZAnaJaA",
                    "test": false,
                    "url": "http://ticketmaster.co.uk/venue/255319",
                    "locale": "en-us",
                    "postalCode": "NW1 7PG",
                    "timezone": "Europe/London",
                    "city": {
                        "name": "London"
                    },
                    "country": {
                        "name": "Great Britain",
                        "countryCode": "GB"
                    },
                    "address": {
                        "line1": "5 Parkway"
                    },
                    "location": {
                        "longitude": "-0.14334300",
                        "latitude": "51.53859000"
                    },
                    "markets": [{
                        "id": "201"
                    }, {
                        "id": "202"
                    }],
                    "dmas": [{
                        "id": 601
                    }, {
                        "id": 602
                    }],
                    "_links": {
                        "self": {
                            "href": "/discovery/v2/venues/KovZpZAnaJaA?locale=en-us"
                        }
                    }
                }]
            }
        }, {
            "name": "Hoodie Allen",
            "type": "event",
            "id": "G5vHZfadnSN0B",
            "test": false,
            "url": "http://ticketmaster.co.uk/event/1F005090EACE393A",
            "locale": "en-us",
            "images": [{
                "ratio": "3_2",
                "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": true
            }, {
                "ratio": "16_9",
                "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": true
            }, {
                "ratio": "3_2",
                "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": true
            }, {
                "ratio": "4_3",
                "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": true
            }, {
                "ratio": "16_9",
                "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": true
            }, {
                "ratio": "16_9",
                "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": true
            }, {
                "ratio": "16_9",
                "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": true
            }, {
                "ratio": "3_2",
                "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": true
            }, {
                "ratio": "16_9",
                "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": true
            }, {
                "ratio": "16_9",
                "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": true
            }],
            "sales": {
                "public": {
                    "startDateTime": "2016-04-22T08:00:00Z",
                    "startTBD": false,
                    "endDateTime": "2016-08-30T18:00:00Z"
                },
                "presales": [{
                    "startDateTime": "2016-04-21T08:00:00Z",
                    "endDateTime": "2016-04-22T07:00:00Z",
                    "name": "Live Nation Presale"
                }]
            },
            "dates": {
                "start": {
                    "localDate": "2016-08-30",
                    "localTime": "19:00:00",
                    "dateTime": "2016-08-30T18:00:00Z",
                    "dateTBD": false,
                    "dateTBA": false,
                    "timeTBA": false,
                    "noSpecificTime": false
                },
                "timezone": "Europe/London",
                "status": {
                    "code": "offsale"
                }
            },
            "classifications": [{
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAv1",
                    "name": "Hip-Hop/Rap"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vkdA",
                    "name": "Urban"
                }
            }],
            "promoter": {
                "id": "4110",
                "name": "LIVE NATION (MUSIC) LTD",
                "description": "LIVE NATION (MUSIC) LTD / NTL / GBR"
            },
            "info": "Plus Bryce Vine and William Bolton",
            "pleaseNote": "Ages 8+. Under 14s must be accompanied by an adult.",
            "_links": {
                "self": {
                    "href": "/discovery/v2/events/G5vHZfadnSN0B?locale=en-us"
                },
                "attractions": [{
                    "href": "/discovery/v2/attractions/K8vZ9172mZ7?locale=en-us"
                }, {
                    "href": "/discovery/v2/attractions/K8vZ917ozL7?locale=en-us"
                }, {
                    "href": "/discovery/v2/attractions/K8vZ917KU47?locale=en-us"
                }],
                "venues": [{
                    "href": "/discovery/v2/venues/KovZ91771U0?locale=en-us"
                }]
            },
            "_embedded": {
                "venues": [{
                    "name": "O2 Academy Islington",
                    "type": "venue",
                    "id": "KovZ91771U0",
                    "test": false,
                    "url": "http://ticketmaster.co.uk/venue/256133",
                    "locale": "en-us",
                    "postalCode": "N1 0PS",
                    "timezone": "Europe/London",
                    "city": {
                        "name": "London"
                    },
                    "country": {
                        "name": "Great Britain",
                        "countryCode": "GB"
                    },
                    "address": {
                        "line1": "Angel Central",
                        "line2": "16 Parkfield Street, Islington"
                    },
                    "location": {
                        "longitude": "-0.10661300",
                        "latitude": "51.53446900"
                    },
                    "markets": [{
                        "id": "201"
                    }, {
                        "id": "202"
                    }],
                    "dmas": [{
                        "id": 601
                    }, {
                        "id": 602
                    }],
                    "_links": {
                        "self": {
                            "href": "/discovery/v2/venues/KovZ91771U0?locale=en-us"
                        }
                    }
                }],
                "attractions": [{
                    "name": "Hoodie Allen",
                    "type": "attraction",
                    "id": "K8vZ9172mZ7",
                    "test": false,
                    "url": "http://ticketmaster.co.uk/artist/1614512",
                    "locale": "en-us",
                    "images": [{
                        "ratio": "3_2",
                        "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": true
                    }, {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dbimages/183970a.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    }, {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dbimages/183969a.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }, {
                        "ratio": "16_9",
                        "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": true
                    }, {
                        "ratio": "3_2",
                        "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": true
                    }, {
                        "ratio": "16_9",
                        "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": true
                    }, {
                        "ratio": "16_9",
                        "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": true
                    }, {
                        "ratio": "16_9",
                        "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": true
                    }, {
                        "ratio": "3_2",
                        "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": true
                    }, {
                        "ratio": "16_9",
                        "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": true
                    }],
                    "classifications": [{
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAv1",
                            "name": "Hip-Hop/Rap"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vkdA",
                            "name": "Urban"
                        }
                    }],
                    "_links": {
                        "self": {
                            "href": "/discovery/v2/attractions/K8vZ9172mZ7?locale=en-us"
                        }
                    }
                }, {
                    "name": "Bryce Vine",
                    "type": "attraction",
                    "id": "K8vZ917ozL7",
                    "test": false,
                    "url": "http://ticketmaster.co.uk/artist/1932175",
                    "locale": "en-us",
                    "images": [{
                        "ratio": "16_9",
                        "url": "http://s1.ticketm.net/dam/a/fe4/970171e8-f6ae-4949-a343-5260a2ddcfe4_72261_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                    }, {
                        "ratio": "16_9",
                        "url": "http://s1.ticketm.net/dam/a/fe4/970171e8-f6ae-4949-a343-5260a2ddcfe4_72261_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                    }, {
                        "ratio": "3_2",
                        "url": "http://s1.ticketm.net/dam/a/fe4/970171e8-f6ae-4949-a343-5260a2ddcfe4_72261_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                    }, {
                        "ratio": "3_2",
                        "url": "http://s1.ticketm.net/dam/a/fe4/970171e8-f6ae-4949-a343-5260a2ddcfe4_72261_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                    }, {
                        "ratio": "16_9",
                        "url": "http://s1.ticketm.net/dam/a/fe4/970171e8-f6ae-4949-a343-5260a2ddcfe4_72261_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                    }, {
                        "ratio": "3_2",
                        "url": "http://s1.ticketm.net/dam/a/fe4/970171e8-f6ae-4949-a343-5260a2ddcfe4_72261_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                    }, {
                        "ratio": "16_9",
                        "url": "http://s1.ticketm.net/dam/a/fe4/970171e8-f6ae-4949-a343-5260a2ddcfe4_72261_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                    }, {
                        "ratio": "16_9",
                        "url": "http://s1.ticketm.net/dam/a/fe4/970171e8-f6ae-4949-a343-5260a2ddcfe4_72261_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                    }, {
                        "ratio": "16_9",
                        "url": "http://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": true
                    }, {
                        "ratio": "4_3",
                        "url": "http://s1.ticketm.net/dam/a/fe4/970171e8-f6ae-4949-a343-5260a2ddcfe4_72261_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                    }],
                    "classifications": [{
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAeA",
                            "name": "Rock"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7v6F1",
                            "name": "Pop"
                        }
                    }],
                    "_links": {
                        "self": {
                            "href": "/discovery/v2/attractions/K8vZ917ozL7?locale=en-us"
                        }
                    }
                }, {
                    "name": "William Bolton",
                    "type": "attraction",
                    "id": "K8vZ917KU47",
                    "test": false,
                    "url": "http://ticketmaster.co.uk/artist/2159962",
                    "locale": "en-us",
                    "images": [{
                        "ratio": "3_2",
                        "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": true
                    }, {
                        "ratio": "4_3",
                        "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": true
                    }, {
                        "ratio": "16_9",
                        "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": true
                    }, {
                        "ratio": "3_2",
                        "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": true
                    }, {
                        "ratio": "16_9",
                        "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": true
                    }, {
                        "ratio": "16_9",
                        "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": true
                    }, {
                        "ratio": "3_2",
                        "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": true
                    }, {
                        "ratio": "16_9",
                        "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": true
                    }, {
                        "ratio": "16_9",
                        "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": true
                    }, {
                        "ratio": "16_9",
                        "url": "http://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": true
                    }],
                    "classifications": [{
                        "primary": true,
                        "segment": {
                            "id": "KZFzniwnSyZfZ7v7nJ",
                            "name": "Music"
                        },
                        "genre": {
                            "id": "KnvZfZ7vAv1",
                            "name": "Hip-Hop/Rap"
                        },
                        "subGenre": {
                            "id": "KZazBEonSMnZfZ7vkvl",
                            "name": "Hip-Hop/Rap"
                        }
                    }],
                    "_links": {
                        "self": {
                            "href": "/discovery/v2/attractions/K8vZ917KU47?locale=en-us"
                        }
                    }
                }]
            }
        }, {
            "name": "A Tribute To Prince",
            "type": "event",
            "id": "G5vHZf2w3hxmy",
            "test": false,
            "url": "http://ticketmaster.co.uk/event/1F0050FC926E2BB9",
            "locale": "en-us",
            "images": [{
                "ratio": "16_9",
                "url": "http://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": true
            }, {
                "ratio": "16_9",
                "url": "http://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": true
            }, {
                "ratio": "4_3",
                "url": "http://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": true
            }, {
                "ratio": "16_9",
                "url": "http://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": true
            }, {
                "ratio": "3_2",
                "url": "http://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": true
            }, {
                "ratio": "3_2",
                "url": "http://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": true
            }, {
                "ratio": "3_2",
                "url": "http://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": true
            }, {
                "ratio": "16_9",
                "url": "http://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": true
            }, {
                "ratio": "16_9",
                "url": "http://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": true
            }, {
                "ratio": "16_9",
                "url": "http://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": true
            }],
            "sales": {
                "public": {
                    "startDateTime": "2016-07-28T16:00:00Z",
                    "startTBD": false,
                    "endDateTime": "2016-08-30T17:00:00Z"
                }
            },
            "dates": {
                "start": {
                    "localDate": "2016-08-30",
                    "localTime": "19:00:00",
                    "dateTime": "2016-08-30T18:00:00Z",
                    "dateTBD": false,
                    "dateTBA": false,
                    "timeTBA": false,
                    "noSpecificTime": false
                },
                "timezone": "Europe/London",
                "status": {
                    "code": "offsale"
                }
            },
            "classifications": [{
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAe6",
                    "name": "Undefined"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v6JI",
                    "name": "Undefined"
                }
            }],
            "pleaseNote": "Age restriction is strictly 18+. The additional £20 (per person) for restaurant bookings serve as a non-refundable deposit, this will be redeemed against the bill at the end of your meal. Tables will be available from 19:00 until 22:30.(Menu is subject to change). All restaurant seating is located on the mezzanine floor. All downstairs(ground floor) tickets are general admission standing only.",
            "_links": {
                "self": {
                    "href": "/discovery/v2/events/G5vHZf2w3hxmy?locale=en-us"
                },
                "venues": [{
                    "href": "/discovery/v2/venues/KovZpZAnaJaA?locale=en-us"
                }]
            },
            "_embedded": {
                "venues": [{
                    "name": "Jazz Cafe",
                    "type": "venue",
                    "id": "KovZpZAnaJaA",
                    "test": false,
                    "url": "http://ticketmaster.co.uk/venue/255319",
                    "locale": "en-us",
                    "postalCode": "NW1 7PG",
                    "timezone": "Europe/London",
                    "city": {
                        "name": "London"
                    },
                    "country": {
                        "name": "Great Britain",
                        "countryCode": "GB"
                    },
                    "address": {
                        "line1": "5 Parkway"
                    },
                    "location": {
                        "longitude": "-0.14334300",
                        "latitude": "51.53859000"
                    },
                    "markets": [{
                        "id": "201"
                    }, {
                        "id": "202"
                    }],
                    "dmas": [{
                        "id": 601
                    }, {
                        "id": 602
                    }],
                    "_links": {
                        "self": {
                            "href": "/discovery/v2/venues/KovZpZAnaJaA?locale=en-us"
                        }
                    }
                }]
            }
        }]
    },
    "page": {
        "size": 3,
        "totalElements": 1091,
        "totalPages": 364,
        "number": 0
    }
};


module.exports = router;