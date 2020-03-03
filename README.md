# The largest heading
## The second largest heading
###### The smallest heading


This site was built using [Yelp API](https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search).



<form method="get" action="https://api.yelp.com/v3/businesses/search"> 
       <label for="site-search">Search the site:</label>
       <input type="search" id="site-search" name="q"
       placeholder="Search restaurants, cafes, diners..."
       aria-label="Search through site content">
       <input type="submit" value="search">
</form>
       


<div class="row">
    <div class="col-sm-5 col-sm-offset-1 portfolio-item">
        <div class="input-group" display="inline">
            <input id="searchone" name="search" type="search" value="<?php echo $search_word;?>" class="form-control" placeholder="Name">
        </div>
    </div>
    <div class="col-sm-5 col-sm-pull-1 portfolio-item">
        <div class="input-group" display="inline">
            <input id="searchtwo" name="search" type="search" value="<?php echo $search_word;?>" class="form-control" placeholder="Location">
            <div class="input-group-btn">
                <button class="btn btn-default btn" name="submit" type="submit"> <span id="glyph" class="glyphicon glyphicon-search" name="submit"></span>

                </button>
            </div>
        </div>
    </div>
