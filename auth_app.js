/**
 * http://usejsdoc.org/
 */
var request = require("request")

var auth_token;

exports.init = function(app) {
    var get_token = {
        method: 'POST',
        url: 'https://api.yelp.com/oauth2/token',
        qs: {
            client_id: 'nonR3YmhUMYW3W_aZ-F5Mw',
//            api_key: 'A2-N3J6Bb6n_K5b5UH9JUTFpZjApYj_vaLHS2sNmlc_ZhqqH3iH4T4BRbnnMMNTrn4OgzNrdX1KIsgSwlJbWtXyu7l_lYktrl9bRETKK-YgKHJKfLOV-eI6b9pdcXnYx'
        },
        headers: { 
            'content-type': 'application/x-www-form-urlencoded'
         }
     }

    request(get_token, function (error, response, body) {
        if (error) throw new Error(error)
        body = JSON.parse(body)      
        auth_token = body.auth_token

    })    
}

exports.search = function(req, res) {
    var options = {
        method: 'GET',
        url: 'https://api.yelp.com/v3/businesses/search?limit=10&term=' + req.query.term + 
             '&latitude=' + req.query.latitude + 
             '&longitude=' + req.query.longitude,
        headers:  {
             authorization: 'Bearer ' + 'A2-N3J6Bb6n_K5b5UH9JUTFpZjApYj_vaLHS2sNmlc_ZhqqH3iH4T4BRbnnMMNTrn4OgzNrdX1KIsgSwlJbWtXyu7l_lYktrl9bRETKK-YgKHJKfLOV-eI6b9pdcXnYx'
         }
     }

    request(options, function (err, response, body) {
        if (err) throw new Error(err);

        res.send(body)
    })

}

exports.makeRecommendation = (req, res) => {
    console.log(req.body)

    var options = {
        method: 'GET',
        url: 'https://api.yelp.com/v3/businesses/search?term=' + req.body.food + 
             '&latitude=' + req.query.latitude + 
             '&longitude=' + req.query.longitude + 
             '&radius=' + req.body.radius + 
             '&price=' + req.body.price + 
             '&open_now=' + req.body.group,
        headers:  {
             authorization: 'Bearer ' + access_token
         }
     }

    res.render("search_results", {restaurants: req.body})
}