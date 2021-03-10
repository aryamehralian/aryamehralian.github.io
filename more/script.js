var country = "country";
$.get("https://ipinfo.io", function(response) {
    country = response.country;
}, "jsonp");

if(response.country == "IR") {
    // parsed JSON data from response
    var data = {
    "name": "آریا مهرعلیان",
    "bio": "Trader (Bitcoin, Forex, Stocks) by day. Programmer, Security Reseacher by night.",
    "Links": "Links",
    "buy": "My Products Online Shopping Website",
    "alpari": "Register in Alpari",
    "faq": "FAQ",
    "Contact-Me": "Contact Me",
    "phone": "+98 919 186 2055",
    "email": "Send me an email"
    "tel": "tel:+989191862055",
    "mailto": "Send me an email"
};

} else {
    // parsed JSON data from response
    var data = {
        "name": "Arya Mehralian",
        "bio": "Trader (Bitcoin, Forex, Stocks) by day. Programmer, Security Reseacher by night.",
        "Links": "Links",
        "buy": "My Products Online Shopping Website",
        "alpari": "Register in Alpari",
        "faq": "FAQ",
        "Contact-Me": "Contact Me",
        "phone": "+98 919 186 2055",
        "email": "Send me an email",
        "tel": "tel:+989191862055",
        "mailto": "mailto:aryamehralian@gmail.com"
    };
}




// find matching text in given nodeand apply the callback for replacement
var matchText = function(node, regex, callback, excludeElements) {
  excludeElements || (excludeElements = ['script', 'style', 'iframe', 'canvas']);
  var child = node.firstChild;
  do {
    switch (child.nodeType) {
      case 1: // other html elements
        if (excludeElements.indexOf(child.tagName.toLowerCase()) > -1) {
          continue;
        }
        // iterate next element
        matchText(child, regex, callback, excludeElements);
        break;
      case 3: // TextNode
        child.data = child.data.replace(regex, callback);
        break;
    }
  } while (!!(child = child.nextSibling));
  return node;
};

matchText(document.body, /\[(.*?)\]/gi, function(match) {
  var key = match.substring(1, match.length-1);
  return (!!data[key]) ? data[key] : match;
});