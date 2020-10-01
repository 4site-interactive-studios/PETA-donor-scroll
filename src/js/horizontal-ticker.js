function displayFormat(display) {
  var displayOutput = '';
  if (display.anonymous == true) {
    displayOutput = 'Anonymous chipped in $' + display.donationAmt;
  } else {
    displayOutput = display.firstName + ' ' + display.lastName.substring(0, 1) + '. chipped in $' + display.donationAmt;
  }

  return displayOutput;
}

function tickerStyleScroll() {

  /* Create style element */
  var css = document.createElement('style');
  css.type = 'text/css';
  var styles = `
    #ticker {
        height: 1.1rem;
        overflow: hidden;
        position: relative;
        height: 4rem;
        text-align: center;
        background-color: #e8e8e8;
        font-size: 1.125rem;
        font-family: open sans,Arial,Helvetica,sans-serif;
        color: #555;
        line-height: 1.4;
        font-weight: 700;
        margin: 0 0 1rem 0;
    } 
    
    #ticker ul {
        margin-left: 0px !important;
        float: left;
        width: 100%;
        -webkit-animation: ticker 100s cubic-bezier(1, 0, .5, 0) infinite;
        -moz-animation: ticker 100s cubic-bezier(1, 0, .5, 0) infinite;
        -ms-animation: ticker 100s cubic-bezier(1, 0, .5, 0) infinite;
        animation: ticker 100s cubic-bezier(1, 0, .5, 0) infinite;
    }
    #ticker ul:hover {
        -webkit-animation-play-state: paused;
        -moz-animation-play-state: paused;
        -ms-animation-play-state: paused;
        animation-play-state: paused;
    }
    #ticker li {
      line-height: 4rem;
      list-style: none;
    }`;

  //Webkit Keyframes
  styles += '@-webkit-keyframes ticker {0%   {margin-top: 0;}';
  var k = 1.98;
  var j =0;
  for (let i = 1; i < 51; i++) {
    j+=4;
    styles += (k * i) + '% {margin-top: -' + j + 'rem;}';
  };
  styles += '100% {margin-top: 0;}}';

  //Moz Keyframes
  j=0;
  styles += '@-moz-keyframes ticker {0%   {margin-top: 0;}';
  for (let i = 1; i < 51; i++) {
    j+=4;
    styles += (k * i) + '% {margin-top: -' + j + 'rem;}';
  };
  styles += '100% {margin-top: 0;}}';

  //MS Keyframes
  j=0;
  styles += '@-ms-keyframes ticker {0%   {margin-top: 0;}';
  for (let i = 1; i < 51; i++) {
    j+=4;
    styles += (k * i) + '% {margin-top: -' + j + 'rem;}';
  };
  styles += '100% {margin-top: 0;}}';

  //Keyframes
  j=0;
  styles += '@keyframes ticker {0%   {margin-top: 0;}';
  for (let i = 1; i < 51; i++) {
    j+=4;
    styles += (k * i) + '% {margin-top: -' + (j) + 'rem;}';
  };
  styles += '100% {margin-top: 0;}}';

  if (css.styleSheet)
    css.styleSheet.cssText = styles;
  else
    css.appendChild(document.createTextNode(styles));

  /* Append style to the head element */
  document.getElementsByTagName("head")[0].appendChild(css);
}

function tickerStyleNews() {

  /* Create style element */
  var css = document.createElement('style');
  css.type = 'text/css';
  var styles = `
      #ticker-wrap {
          width: 100%;
          overflow: hidden;
          height: 5rem;
          box-sizing: content-box;
          margin: 0 0 1rem 0;
          border: 3px solid #e9e9e9;
          border-radius: 10px;
        }
        #ticker-wrap .ticker {
          display: inline-block;
          height: 5rem;
          line-height: 5rem;
          white-space: nowrap;
          padding-right: 100%;
          box-sizing: content-box;
          -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
          -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
          -webkit-animation-name: ticker;
          animation-name: ticker;
          -webkit-animation-duration: 250s;
          animation-duration: 250s;
        }
        #ticker-wrap .ticker__item {
          display: inline-block;
          padding: 0 2rem;
          font-size: 1.125rem;
          font-family: open sans,Arial,Helvetica,sans-serif;
          color: #555;
          line-height: 1.4;
          font-weight: 700;
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
            transform: translate3d(0%, 0, 0);
            visibility: visible;
          }
          90% {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-90%, 0%, 0);
          }
          90.01% {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(10%, 80%, 0);
          }
          90.02% {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(10%, 0, 0);
          }
          90.03% {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(10%, 0, 0);
          }
          100% {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(0%, 0, 0);
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

function appendScrollTicker(donation) {
  tickerStyleScroll();
  var ticker = document.querySelector('#donor-ticker');
  var str = '<ul>'
  for (var i = 0; i < 50; i++) {
    str += '<li>' + displayFormat(donation[i]) + '</li>';
  }
  str = '<div id="ticker">' + str + '</ul></div>';
  console.log(str);
  ticker.innerHTML += str;
}

function appendNewsTicker(donation) {
  tickerStyleNews();
  var ticker = document.querySelector('#donor-ticker');
  var str = '<div class="ticker">'
  for (var i = 0; i < 50; i++) {
    str += '<div class="ticker__item">' + displayFormat(donation[i]) + '</div>';
  }
  str = '<div id="ticker-wrap">' + str + '</div></div>';
  ticker.innerHTML += str;
  var itemwidth = document.getElementById("#ticker-wrap").offsetWidth;
  console.log(itemwidth);
}



function displayDonations(donation) {
  const tickerLayout = document.querySelector('#donor-ticker');
  console.log(donation);

  //Ticker layout Type
  if (tickerLayout.dataset.layout = 'horizontal') {
    switch (tickerLayout.dataset.style) {
      case 'news':
        appendNewsTicker(donation);
        break;
      case 'scroll':
        appendScrollTicker(donation);
        break;
      default:
        appendNewsTicker(donation);
        break;
    }
  }
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    displayDonations(myObj['donations']);
  }
};
xmlhttp.open("GET", "https://raw.githubusercontent.com/4site-interactive-studios/PETA-donor-scroll/1.0.2/Assets/donations.json", true);
xmlhttp.send();