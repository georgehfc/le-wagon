// Task: Go to Le Wagon website and hide/show the logo. Then make it green.

// this excerpt is needed to be loaded in the console before anything else...
// https://stackoverflow.com/questions/9624972/command-for-loading-jquery-on-google-chrome-inspector
// javascript:if(!window.jQuery||confirm('Overwrite\x20current\x20version?\x20v'+jQuery.fn.jquery))(function(d,s){s=d.createElement('script');s.src='https://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.js';(d.head||d.documentElement).appendChild(s)})(document);
// another way around:
// https://stackoverflow.com/questions/7474354/include-jquery-in-the-javascript-console

$(".navbar__logo").hide();
$(".navbar__logo").show();

// changing background-color
$(".navbar__logo").css("background-color", "green");

// rotating filter-
$(".navbar__logo").css("filter", "hue-rotate(92deg)");

// saunier's article on jQuery
// https://www.lewagon.com/blog/from-jquery-to-dom-and-es6
