function displayFormat (display) {
    var displayOutput ='';
    if (display.anonymous == true){
        displayOutput = 'Anonymous chipped in $' + display.donationAmt; 
    }
    else {
        displayOutput = display.firstName +' ' + display.lastName.substring(0,1) + '. chipped in $' + display.donationAmt;
    }

    return displayOutput;
}

function appendTicker(donation) {
    var ticker = document.querySelector('#donor-ticker');
    var str ='<div class="ticker">'
    for (var i = 0; i < 50; i++) {
        str += '<div class="ticker__item">'+displayFormat(donation[i]) + '</div>';
    }
    str = '<div id="ticker-wrap">' + str + '</div></div>';
    ticker.innerHTML += str;
}

function tickerStyle() {

    /* Create style element */
    var css = document.createElement('style');
    css.type = 'text/css';
    var styles = `
    #ticker-wrap {
        width: 100%;
        overflow: hidden;
        height: 4rem;
        background-color: #e41b17;
        box-sizing: content-box;
      }
      #ticker-wrap .ticker {
        display: inline-block;
        height: 4rem;
        line-height: 4rem;
        white-space: nowrap;
        padding-right: 100%;
        box-sizing: content-box;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-name: ticker;
        animation-name: ticker;
        -webkit-animation-duration: 120s;
        animation-duration: 120s;
      }
      #ticker-wrap .ticker__item {
        display: inline-block;
        padding: 0 2rem;
        font-size: 2rem;
        color: white;
      }
      #ticker-wrap .ticker:hover {
        -webkit-animation-play-state: paused;
        -moz-animation-play-state: paused;
        -ms-animation-play-state: paused;
        animation-play-state: paused;
      }
      @-webkit-keyframes ticker {
        0% {
          -webkit-transform: translate3d(10%, 0, 0);
          transform: translate3d(10%, 0, 0);
          visibility: visible;
        }
        100% {
          -webkit-transform: translate3d(-100%, 0, 0);
          transform: translate3d(-100%, 0, 0);
        }
      }
      @keyframes ticker {
        0% {
          -webkit-transform: translate3d(10%, 0, 0);
          transform: translate3d(10%, 0, 0);
          visibility: visible;
        }
        100% {
          -webkit-transform: translate3d(-100%, 0, 0);
          transform: translate3d(-100%, 0, 0);
        }
      }
    `;

    if (css.styleSheet)
        css.styleSheet.cssText = styles;
    else
        css.appendChild(document.createTextNode(styles));

    /* Append style to the head element */
    document.getElementsByTagName("head")[0].appendChild(css);
}

function displayDonations(donation) {
    const tickerLayout = document.querySelector('#donor-ticker');
    console.log(donation);

    //Ticker layout Type
    if (tickerLayout.dataset.layout = 'horizontal') {
        tickerStyle();
        appendTicker(donation);
    }
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        displayDonations(myObj['donations']);
    }
};
xmlhttp.open("GET", "donations.json", true);
xmlhttp.send();