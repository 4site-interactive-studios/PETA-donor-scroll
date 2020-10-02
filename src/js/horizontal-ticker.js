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
    }
    .en__field--donorScrollPreference > .en__field__label{
      display: none;
  }

  .en__field--donorScrollPreference .en__field__label--item{
      font-size: 1rem;
      width: 100%;
      vertical-align: top!important;
  }
  .Anonymous__alignment{
      float: right;
      width: 63%;
      padding: 0 31px 0 20px;
  }
  @media (min-width:601px) and (max-width: 944px){
      .Anonymous__alignment{
          float: unset;
          padding: 0px;
      }
  }
  @media screen and (max-width: 472px){
      .Anonymous__alignment{
          float: unset;
          padding: 0px;
      }
  }
    `;

  //Webkit Keyframes
  styles += '@-webkit-keyframes ticker {0%   {margin-top: 0;}';
  var k = 1.98;
  var j = 0;
  for (let i = 1; i < 51; i++) {
    j += 4;
    styles += (k * i) + '% {margin-top: -' + j + 'rem;}';
  };
  styles += '100% {margin-top: 0;}}';

  //Moz Keyframes
  j = 0;
  styles += '@-moz-keyframes ticker {0%   {margin-top: 0;}';
  for (let i = 1; i < 51; i++) {
    j += 4;
    styles += (k * i) + '% {margin-top: -' + j + 'rem;}';
  };
  styles += '100% {margin-top: 0;}}';

  //MS Keyframes
  j = 0;
  styles += '@-ms-keyframes ticker {0%   {margin-top: 0;}';
  for (let i = 1; i < 51; i++) {
    j += 4;
    styles += (k * i) + '% {margin-top: -' + j + 'rem;}';
  };
  styles += '100% {margin-top: 0;}}';

  //Keyframes
  j = 0;
  styles += '@keyframes ticker {0%   {margin-top: 0;}';
  for (let i = 1; i < 51; i++) {
    j += 4;
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
          width: 99%;
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
            transform: translate3d(-87.5%, 0%, 0);
          }
          90.01% {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-87.5%, 80%, 0);
          }
          90.02% {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(9%, 80%, 0);
          }
          90.03% {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(9%, 0, 0);
          }
          90.04% {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(9%, 0, 0);
          }
          100% {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(0%, 0, 0);
          }
        }
        .en__field--donorScrollPreference > .en__field__label{
          display: none;
      }
    
      .en__field--donorScrollPreference .en__field__label--item{
          font-size: 1rem;
          width: 100%;
          vertical-align: top!important;
      }
      .Anonymous__alignment{
          float: right;
          width: 63%;
          padding: 0 31px 0 20px;
      }
      @media (min-width:601px) and (max-width: 944px){
          .Anonymous__alignment{
              float: unset;
              padding: 0px;
          }
      }
      @media screen and (max-width: 472px){
          .Anonymous__alignment{
              float: unset;
              padding: 0px;
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
  for (var i = 0; i < 100; i++) {
    str += '<li>' + displayFormat(donation[i]) + '</li>';
  }
  str = '<div id="ticker">' + str + '</ul></div>';
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
  //var itemwidth = document.getElementById("#ticker-wrap").offsetWidth;
  //console.log(itemwidth);
}

function displayCheckbox() {
  const checkbox = document.getElementsByClassName('en__component en__component--formblock en__donation--billing--info');

  var str = `
    <div class="en__field en__field--checkbox en__field--000000 en__field--donorScrollPreference">
	  <label class="en__field__label" style="">Donor Recognition</label>
	  <div class="en__field__element en__field__element--checkbox	">
	  	<div class="en__field__item Anonymous__alignment">
	  		<input id="en__field_transaction_donor_scroll_preference" type="checkbox"   class="en__field__input en__field__input--checkbox" name="transaction.  donorScrollPreference">
	  		<label for="en__field_transaction_donor_scroll_preference"  class="en__field__label en__field__label--item">List my name as "Anonymous"  on the donor scroll.</label>
	  	</div>
	  </div>
    </div>
  `;

  //str = document.createTextNode(str);

  checkbox[0].innerHTML += str;
}

function displayDonations(donation) {
  const tickerLayout = document.querySelector('#donor-ticker');

  //Ticker layout Type
  if (tickerLayout.dataset.layout = 'horizontal') {
    switch (tickerLayout.dataset.style) {
      case 'news':
        appendNewsTicker(donation);
        displayCheckbox();
        break;
      case 'scroll':
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
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    displayDonations(myObj['donations']);
  }
};
xmlhttp.open("GET", "https://raw.githubusercontent.com/4site-interactive-studios/PETA-donor-scroll/1.0.2/Assets/donations.json", true);
xmlhttp.send();