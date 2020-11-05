"use strict";

function displayFormat(display) {
  var displayOutput = "";

  if (display.anonymous == true) {
    displayOutput = "Anonymous chipped in $" + display.donationAmt;
  } else {
    displayOutput =
      display.firstName +
      " " +
      display.lastName.substring(0, 1) +
      ". chipped in $" +
      display.donationAmt;
  }

  return displayOutput;
}

function tickerStyleScroll() {
  /* Create style element */
  var css = document.createElement("style");
  css.type = "text/css";
  var styles =
    "\n    #ticker {\n        height: 1.1rem;\n        overflow: hidden;\n        position: relative;\n        height: 4rem;\n        text-align: center;\n        background-color: #e8e8e8;\n        font-size: 1.125rem;\n        font-family: open sans,Arial,Helvetica,sans-serif;\n        color: #555;\n        line-height: 1.4;\n        font-weight: 700;\n        margin: 0 0 1rem 0;\n    } \n    \n    #ticker ul {\n        margin-left: 0px !important;\n        float: left;\n        width: 100%;\n        -webkit-animation: ticker 100s cubic-bezier(1, 0, .5, 0) infinite;\n        -moz-animation: ticker 100s cubic-bezier(1, 0, .5, 0) infinite;\n        -ms-animation: ticker 100s cubic-bezier(1, 0, .5, 0) infinite;\n        animation: ticker 100s cubic-bezier(1, 0, .5, 0) infinite;\n    }\n    #ticker ul:hover {\n        -webkit-animation-play-state: paused;\n        -moz-animation-play-state: paused;\n        -ms-animation-play-state: paused;\n        animation-play-state: paused;\n    }\n    #ticker li {\n      line-height: 4rem;\n      list-style: none;\n    }\n    .en__field--donorScrollPreference > .en__field__label{\n      display: none;\n  }\n\n  .en__field--donorScrollPreference .en__field__label--item{\n      font-size: 1rem;\n      width: 100%;\n      vertical-align: top!important;\n  }\n  .Anonymous__alignment{\n      float: right;\n      width: 63%;\n      padding: 0 31px 0 20px;\n  }\n  @media (min-width:601px) and (max-width: 944px){\n      .Anonymous__alignment{\n          float: unset;\n          padding: 0px;\n      }\n  }\n  @media screen and (max-width: 472px){\n      .Anonymous__alignment{\n          float: unset;\n          padding: 0px;\n      }\n  }\n    "; //Webkit Keyframes

  styles += "@-webkit-keyframes ticker {0%   {margin-top: 0;}";
  var k = 1.98;
  var j = 0;

  for (var i = 1; i < 51; i++) {
    j += 4;
    styles += k * i + "% {margin-top: -" + j + "rem;}";
  }

  styles += "100% {margin-top: 0;}}"; //Moz Keyframes

  j = 0;
  styles += "@-moz-keyframes ticker {0%   {margin-top: 0;}";

  for (var _i = 1; _i < 51; _i++) {
    j += 4;
    styles += k * _i + "% {margin-top: -" + j + "rem;}";
  }

  styles += "100% {margin-top: 0;}}"; //MS Keyframes

  j = 0;
  styles += "@-ms-keyframes ticker {0%   {margin-top: 0;}";

  for (var _i2 = 1; _i2 < 51; _i2++) {
    j += 4;
    styles += k * _i2 + "% {margin-top: -" + j + "rem;}";
  }

  styles += "100% {margin-top: 0;}}"; //Keyframes

  j = 0;
  styles += "@keyframes ticker {0%   {margin-top: 0;}";

  for (var _i3 = 1; _i3 < 51; _i3++) {
    j += 4;
    styles += k * _i3 + "% {margin-top: -" + j + "rem;}";
  }

  styles += "100% {margin-top: 0;}}";
  if (css.styleSheet) css.styleSheet.cssText = styles;
  else css.appendChild(document.createTextNode(styles));
  /* Append style to the head element */

  document.getElementsByTagName("head")[0].appendChild(css);
}

function tickerStyleNews() {
  /* Create style element */
  var css = document.createElement("style");
  css.type = "text/css";
  var styles =
    "\n      #ticker-wrap {\n          width: 99%;\n          overflow: hidden;\n          height: 5rem;\n          box-sizing: content-box;\n          margin: 0 0 1rem 0;\n          border: 3px solid #e9e9e9;\n          border-radius: 10px;\n        }\n        #ticker-wrap .ticker {\n          display: inline-block;\n          height: 5rem;\n          line-height: 5rem;\n          white-space: nowrap;\n          padding-right: 100%;\n          box-sizing: content-box;\n          -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n          -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n          -webkit-animation-name: ticker;\n          animation-name: ticker;\n          -webkit-animation-duration: 250s;\n          animation-duration: 250s;\n        }\n        #ticker-wrap .ticker__item {\n          display: inline-block;\n          padding: 0 2rem;\n          font-size: 1.125rem;\n          font-family: open sans,Arial,Helvetica,sans-serif;\n          color: #555;\n          line-height: 1.4;\n          font-weight: 700;\n        }\n        #ticker-wrap .ticker:hover {\n          -webkit-animation-play-state: paused;\n          -moz-animation-play-state: paused;\n          -ms-animation-play-state: paused;\n          animation-play-state: paused;\n        }\n        @-webkit-keyframes ticker {\n          0% {\n            -webkit-transform: translate3d(10%, 0, 0);\n            transform: translate3d(10%, 0, 0);\n            visibility: visible;\n          }\n          100% {\n            -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n          }\n        }\n        @keyframes ticker {\n          0% {\n            -webkit-transform: translate3d(10%, 0, 0);\n            transform: translate3d(0%, 0, 0);\n            visibility: visible;\n          }\n          90% {\n            -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-87.5%, 0%, 0);\n          }\n          90.01% {\n            -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-87.5%, 80%, 0);\n          }\n          90.02% {\n            -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(9%, 80%, 0);\n          }\n          90.03% {\n            -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(9%, 0, 0);\n          }\n          90.04% {\n            -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(9%, 0, 0);\n          }\n          100% {\n            -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(0%, 0, 0);\n          }\n        }\n        .en__field--donorScrollPreference > .en__field__label{\n          display: none;\n      }\n    \n      .en__field--donorScrollPreference .en__field__label--item{\n          font-size: 1rem;\n          width: 100%;\n          vertical-align: top!important;\n      }\n      .Anonymous__alignment{\n          float: right;\n          width: 63%;\n          padding: 0 31px 0 20px;\n      }\n      @media (min-width:601px) and (max-width: 944px){\n          .Anonymous__alignment{\n              float: unset;\n              padding: 0px;\n          }\n      }\n      @media screen and (max-width: 472px){\n          .Anonymous__alignment{\n              float: unset;\n              padding: 0px;\n          }\n      }\n      ";
  if (css.styleSheet) css.styleSheet.cssText = styles;
  else css.appendChild(document.createTextNode(styles));
  /* Append style to the head element */

  document.getElementsByTagName("head")[0].appendChild(css);
}

function appendScrollTicker(donation) {
  tickerStyleScroll();
  var ticker = document.querySelector("#donor-ticker");
  var str = "<ul>";

  for (var i = 0; i < 100; i++) {
    str += "<li>" + displayFormat(donation[i]) + "</li>";
  }

  str = '<div id="ticker">' + str + "</ul></div>";
  ticker.innerHTML += str;
}

function appendNewsTicker(donation) {
  tickerStyleNews();
  var ticker = document.querySelector("#donor-ticker");
  var str = '<div class="ticker">';

  for (var i = 0; i < 50; i++) {
    str += '<div class="ticker__item">' + displayFormat(donation[i]) + "</div>";
  }

  str = '<div id="ticker-wrap">' + str + "</div></div>";
  ticker.innerHTML += str;
}

function displayCheckbox() {
  var checkbox = document.getElementsByClassName(
    "en__component en__component--formblock en__donation--billing--info"
  );
  var str =
    '\n    <div class="en__field en__field--checkbox en__field--000000 en__field--donorScrollPreference">\n\t  <label class="en__field__label" style="">Donor Recognition</label>\n\t  <div class="en__field__element en__field__element--checkbox\t">\n\t  \t<div class="en__field__item Anonymous__alignment">\n\t  \t\t<input id="en__field_transaction_donor_scroll_preference" type="checkbox"   class="en__field__input en__field__input--checkbox" name="transaction.  donorScrollPreference">\n\t  \t\t<label for="en__field_transaction_donor_scroll_preference"  class="en__field__label en__field__label--item">List my name as "Anonymous"  on the donor scroll.</label>\n\t  \t</div>\n\t  </div>\n    </div>\n  '; //str = document.createTextNode(str);

  checkbox[0].innerHTML += str;
}

function displayDonations(donation) {
  var tickerLayout = document.querySelector("#donor-ticker"); //Ticker layout Type

  if ((tickerLayout.dataset.layout = "horizontal")) {
    switch (tickerLayout.dataset.style) {
      case "news":
        appendNewsTicker(donation);
        displayCheckbox();
        break;

      case "scroll":
        appendScrollTicker(donation);
        displayCheckbox();
        break;

      default:
        appendNewsTicker(donation);
        displayCheckbox();
        break;
    }
  }
}

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    displayDonations(myObj["donations"]);
  }
};

xmlhttp.open(
  "GET",
  "https://raw.githubusercontent.com/4site-interactive-studios/PETA-donor-scroll/1.0.2/Assets/donations.json",
  true
);
xmlhttp.send();
