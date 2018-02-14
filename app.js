/**
 * Create the map
 */
var map = AmCharts.makeChart("chartdiv", {
  "type": "map",
  "theme": "light",
  "projection": "eckert3",
  "dataProvider": {
    "map": "worldLow",
    "getAreasFromMap": true
  },
  "areasSettings": {
    "selectedColor": "#CC0000",
    "selectable": true
  },
  /**
   * Add click event to track country selection/unselection
   */
  "listeners": [{
    "event": "clickMapObject",
    "method": function(e) {
      
      // Ignore any click not on area
      if (e.mapObject.objectType !== "MapArea")
        return;
      
      var area = e.mapObject;
      
      // Toggle showAsSelected
      area.showAsSelected = !area.showAsSelected;
      e.chart.returnInitialColor(area);
      // Update the list
      document.getElementById("selected").innerHTML = JSON.stringify(getSelectedCountries());
    }
  }]
});

/**
 * Function which extracts currently selected country list.
 * Returns array consisting of country ISO2 codes
 */
function getSelectedCountries() {
  var selected = "";
  console.log(map.dataProvider.areas);
  for(var i = 0; i < map.dataProvider.areas.length; i++) {
    if(map.dataProvider.areas[i].showAsSelected)
      selected = map.dataProvider.areas[i].title;
  }
  for(var i = 0; i < map.dataProvider.areas.length; i++) {
    if(map.dataProvider.areas[i].showAsSelected)
      map.dataProvider.areas[i].showAsSelected = false;
  }
  return selected;
}




$(function() {
    // Calling Login Form
    $("#login_form").click(function() {
        $(".social_login").hide();
        $(".user_login").show();
        return false;
    });

    // Calling Register Form
    $("#register_form").click(function() {
        $(".social_login").hide();
        $(".user_register").show();
        $(".header_title").text('Register');
        return false;
    });

    // Going back to Social Forms
    $(".back_btn").click(function() {
        $(".user_login").hide();
        $(".user_register").hide();
        $(".social_login").show();
        $(".header_title").text('Login');
        return false;
    });
});


$(document).ready(function(){
    $('.psw').on('click',function(){
        $('.container').css("display","none");
        $('.signup').css("display","block")
    });
});