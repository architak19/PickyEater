# The largest heading
## The second largest heading
###### The smallest heading


This site was built using [Yelp API](https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search).

<label for="site-search">Search the site:</label>
<input type="search" id="site-search" name="q"
placeholder="Search restaurants, cafes, diners..."
       aria-label="Search through site content">

<button>Search</button>


<form method="GET" action="https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search">
Search yelp: <input type="text" name="q" placeholder="Search yelp"/>
<input type="submit" value="Search"/>
</form>
