<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title></title>
    <script
            src="https://code.jquery.com/jquery-3.2.1.min.js"
            crossorigin="anonymous"></script>
    <script>
      var token = 'Bearer A2-N3J6Bb6n_K5b5UH9JUTFpZjApYj_vaLHS2sNmlc_ZhqqH3iH4T4BRbnnMMNTrn4OgzNrdX1KIsgSwlJbWtXyu7l_lYktrl9bRETKK-YgKHJKfLOV-eI6b9pdcXnYx'
      var cors_anywhere_url = 'https://cors-anywhere.herokuapp.com'
      var yelp_search_url = 'https://api.yelp.com/v3/businesses/search'
      function clientCallback() {
        console.log('made it to the client callback')
      }
      var requestObj = {
        'url': cors_anywhere_url + '/' + yelp_search_url,
        'data': {term: 'restaurants', location: '91741'},
        headers: {'Authorization': token},
        error: function(jqXHR, textStatus, errorThrown) {
          console.log('AJAX error, jqXHR = ', jqXHR, ', textStatus = ',
                      textStatus, ', errorThrown = ', errorThrown)
        }
      }
      $.ajax(requestObj)
        .done(function(response) {
          console.log('typeof response = ' + typeof response)
          console.log('response = ', response)
        })
    </script>
  </head>
  <body>
    <h1>Time to make a decision!</h1>
    <form id="my_form"> 
       <label for="site-search">Search the site:</label>
       <input type="search" id="site-search" name="q"
       placeholder="Search restaurants, cafes, diners..."
       aria-label="Search through site content">
       <input type="button" id="submit_button" value="search">
</form>
  </body>
</html>






This site was built using [Yelp API](https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search).


