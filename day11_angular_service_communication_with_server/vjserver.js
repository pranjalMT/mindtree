var express = require("express");
var app = express();
var heros = {
    "heros": [
        {
            "id": 1,
            "movies": 3,
            "title": "Batman",
            "city": "Gothem",
            "power": 8,
            "photo": "images/batman.jpg",
            "movieslist": [
                {
                    "sl": 1,
                    "title": "Batman Begins",
                    "poster": "images/bat1_tn.jpg"
                },
                {
                    "sl": 2,
                    "title": "Dark Knight",
                    "poster": "images/bat2_tn.jpg"
                },
                {
                    "sl": 3,
                    "title": "Dark Knight Raises",
                    "poster": "images/bat3_tn.jpg"
                }
            ]
        },
        {
            "id": 2,
            "movies": 3,
            "title": "Superman",
            "city": "Metropolis",
            "power": 8,
            "photo": "images/superman.jpg",
            "movieslist": [
                {
                    "sl": 1,
                    "title": "Superman The Movie",
                    "poster": "images/super1_tn.jpg"
                },
                {
                    "sl": 2,
                    "title": "Superman Returns",
                    "poster": "images/super2_tn.jpg"
                },
                {
                    "sl": 3,
                    "title": "Superman Man of Steel",
                    "poster": "images/super3_tn.jpg"
                }
            ]
        },
        {
            "id": 3,
            "movies": 3,
            "title": "Ironman",
            "city": "New York",
            "power": 3,
            "photo": "images/ironman.jpg",
            "movieslist": [
                {
                    "sl": 1,
                    "title": "Ironman",
                    "poster": "images/iron1_tn.jpg"
                },
                {
                    "sl": 2,
                    "title": "Ironman 2",
                    "poster": "images/iron2_tn.jpg"
                },
                {
                    "sl": 3,
                    "title": "Ironman 3",
                    "poster": "images/iron3_tn.jpg"
                }
            ]
        },
        {
            "id": 4,
            "movies": 1,
            "title": "Phantom",
            "city": "Bhangala",
            "power": 6,
            "photo": "images/phantom.jpg",
            "movieslist": [
                {
                    "sl": 1,
                    "title": "The Phantom Slam Evil",
                    "poster": "images/phantom1_tn.jpg"
                }
            ]
        },
        {
            "id": 5,
            "movies": 3,
            "title": "Spiderman",
            "city": "New York",
            "power": 8,
            "photo": "images/spiderman.jpg",
            "movieslist": [
                {
                    "sl": 1,
                    "title": "Spiderman",
                    "poster": "images/spider1_tn.jpg"
                },
                {
                    "sl": 2,
                    "title": "Spiderman 2",
                    "poster": "images/spider2_tn.jpg"
                },
                {
                    "sl": 3,
                    "title": "Spiderman 3",
                    "poster": "images/spider3_tn.jpg"
                }
            ]
        }
    ]
};
			
app.get("/",function(req,res){
	res.header("Access-Control-Allow-Origin","*")
	res.jsonp(heros)
})

app.listen("9999");
console.log("your server is now running on 9999");


