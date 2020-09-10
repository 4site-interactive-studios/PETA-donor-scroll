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
    var styles = `#ticker {
        min-width: 800px;
        height: 1.1rem;
        overflow: hidden;
        position: relative;
    } 
    
    #ticker ul {
        float: left;
        padding-left: 20px;
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
      line-height: 1rem;
      list-style: none;
    }
    
    
    @-webkit-keyframes ticker {
      0%   {margin-top: 0;}
      2%  {margin-top: -1rem;}
      4%  {margin-top: -2rem;}
      6%  {margin-top: -3rem;}
      8%  {margin-top: -4rem;}
      10%  {margin-top: -5rem;}
      12%  {margin-top: -6rem;}
      14%  {margin-top: -7rem;}
      16%  {margin-top: -8rem;}
      18%  {margin-top: -9rem;}
      20%  {margin-top: -10rem;}
      22%  {margin-top: -11rem;}
      24%  {margin-top: -12rem;}
      26%  {margin-top: -13rem;}
      28%  {margin-top: -14rem;}
      30%  {margin-top: -15rem;}
      32%  {margin-top: -16rem;}
      34%  {margin-top: -17rem;}
      36%  {margin-top: -18rem;}
      38%  {margin-top: -19rem;}
      40%  {margin-top: -20rem;}
      42%  {margin-top: -21rem;}
      44%  {margin-top: -22rem;}
      46%  {margin-top: -23rem;}
      48%  {margin-top: -24rem;}
      50%  {margin-top: -25rem;}
      52%  {margin-top: -26rem;}
      54%  {margin-top: -27rem;}
      56%  {margin-top: -28rem;}
      58%  {margin-top: -29rem;}
      60%  {margin-top: -30rem;}
      62%  {margin-top: -31rem;}
      64%  {margin-top: -32rem;}
      66%  {margin-top: -33rem;}
      68%  {margin-top: -34rem;}
      70%  {margin-top: -35rem;}
      72%  {margin-top: -36rem;}
      74%  {margin-top: -37rem;}
      76%  {margin-top: -38rem;}
      78%  {margin-top: -39rem;}
      80%  {margin-top: -40rem;}
      82%  {margin-top: -41rem;}
      84%  {margin-top: -42rem;}
      86%  {margin-top: -43rem;}
      88%  {margin-top: -44rem;}
      90%  {margin-top: -45rem;}
      92%  {margin-top: -46rem;}
      94%  {margin-top: -47rem;}
      96%  {margin-top: -48rem;}
      98%  {margin-top: -49rem;}
      100% {margin-top: 0;}
    }
    @-moz-keyframes ticker {
      0%   {margin-top: 0;}
      2%  {margin-top: -1rem;}
      4%  {margin-top: -2rem;}
      6%  {margin-top: -3rem;}
      8%  {margin-top: -4rem;}
      10%  {margin-top: -5rem;}
      12%  {margin-top: -6rem;}
      14%  {margin-top: -7rem;}
      16%  {margin-top: -8rem;}
      18%  {margin-top: -9rem;}
      20%  {margin-top: -10rem;}
      22%  {margin-top: -11rem;}
      24%  {margin-top: -12rem;}
      26%  {margin-top: -13rem;}
      28%  {margin-top: -14rem;}
      30%  {margin-top: -15rem;}
      32%  {margin-top: -16rem;}
      34%  {margin-top: -17rem;}
      36%  {margin-top: -18rem;}
      38%  {margin-top: -19rem;}
      40%  {margin-top: -20rem;}
      42%  {margin-top: -21rem;}
      44%  {margin-top: -22rem;}
      46%  {margin-top: -23rem;}
      48%  {margin-top: -24rem;}
      50%  {margin-top: -25rem;}
      52%  {margin-top: -26rem;}
      54%  {margin-top: -27rem;}
      56%  {margin-top: -28rem;}
      58%  {margin-top: -29rem;}
      60%  {margin-top: -30rem;}
      62%  {margin-top: -31rem;}
      64%  {margin-top: -32rem;}
      66%  {margin-top: -33rem;}
      68%  {margin-top: -34rem;}
      70%  {margin-top: -35rem;}
      72%  {margin-top: -36rem;}
      74%  {margin-top: -37rem;}
      76%  {margin-top: -38rem;}
      78%  {margin-top: -39rem;}
      80%  {margin-top: -40rem;}
      82%  {margin-top: -41rem;}
      84%  {margin-top: -42rem;}
      86%  {margin-top: -43rem;}
      88%  {margin-top: -44rem;}
      90%  {margin-top: -45rem;}
      92%  {margin-top: -46rem;}
      94%  {margin-top: -47rem;}
      96%  {margin-top: -48rem;}
      98%  {margin-top: -49rem;}
      100% {margin-top: 0;}
    }
    @-ms-keyframes ticker {
      0%   {margin-top: 0;}
      2%  {margin-top: -1rem;}
      4%  {margin-top: -2rem;}
      6%  {margin-top: -3rem;}
      8%  {margin-top: -4rem;}
      10%  {margin-top: -5rem;}
      12%  {margin-top: -6rem;}
      14%  {margin-top: -7rem;}
      16%  {margin-top: -8rem;}
      18%  {margin-top: -9rem;}
      20%  {margin-top: -10rem;}
      22%  {margin-top: -11rem;}
      24%  {margin-top: -12rem;}
      26%  {margin-top: -13rem;}
      28%  {margin-top: -14rem;}
      30%  {margin-top: -15rem;}
      32%  {margin-top: -16rem;}
      34%  {margin-top: -17rem;}
      36%  {margin-top: -18rem;}
      38%  {margin-top: -19rem;}
      40%  {margin-top: -20rem;}
      42%  {margin-top: -21rem;}
      44%  {margin-top: -22rem;}
      46%  {margin-top: -23rem;}
      48%  {margin-top: -24rem;}
      50%  {margin-top: -25rem;}
      52%  {margin-top: -26rem;}
      54%  {margin-top: -27rem;}
      56%  {margin-top: -28rem;}
      58%  {margin-top: -29rem;}
      60%  {margin-top: -30rem;}
      62%  {margin-top: -31rem;}
      64%  {margin-top: -32rem;}
      66%  {margin-top: -33rem;}
      68%  {margin-top: -34rem;}
      70%  {margin-top: -35rem;}
      72%  {margin-top: -36rem;}
      74%  {margin-top: -37rem;}
      76%  {margin-top: -38rem;}
      78%  {margin-top: -39rem;}
      80%  {margin-top: -40rem;}
      82%  {margin-top: -41rem;}
      84%  {margin-top: -42rem;}
      86%  {margin-top: -43rem;}
      88%  {margin-top: -44rem;}
      90%  {margin-top: -45rem;}
      92%  {margin-top: -46rem;}
      94%  {margin-top: -47rem;}
      96%  {margin-top: -48rem;}
      98%  {margin-top: -49rem;}
      100% {margin-top: 0;}
    }
    @keyframes ticker {
      0%   {margin-top: 0;}
      2%  {margin-top: -1rem;}
      4%  {margin-top: -2rem;}
      6%  {margin-top: -3rem;}
      8%  {margin-top: -4rem;}
      10%  {margin-top: -5rem;}
      12%  {margin-top: -6rem;}
      14%  {margin-top: -7rem;}
      16%  {margin-top: -8rem;}
      18%  {margin-top: -9rem;}
      20%  {margin-top: -10rem;}
      22%  {margin-top: -11rem;}
      24%  {margin-top: -12rem;}
      26%  {margin-top: -13rem;}
      28%  {margin-top: -14rem;}
      30%  {margin-top: -15rem;}
      32%  {margin-top: -16rem;}
      34%  {margin-top: -17rem;}
      36%  {margin-top: -18rem;}
      38%  {margin-top: -19rem;}
      40%  {margin-top: -20rem;}
      42%  {margin-top: -21rem;}
      44%  {margin-top: -22rem;}
      46%  {margin-top: -23rem;}
      48%  {margin-top: -24rem;}
      50%  {margin-top: -25rem;}
      52%  {margin-top: -26rem;}
      54%  {margin-top: -27rem;}
      56%  {margin-top: -28rem;}
      58%  {margin-top: -29rem;}
      60%  {margin-top: -30rem;}
      62%  {margin-top: -31rem;}
      64%  {margin-top: -32rem;}
      66%  {margin-top: -33rem;}
      68%  {margin-top: -34rem;}
      70%  {margin-top: -35rem;}
      72%  {margin-top: -36rem;}
      74%  {margin-top: -37rem;}
      76%  {margin-top: -38rem;}
      78%  {margin-top: -39rem;}
      80%  {margin-top: -40rem;}
      82%  {margin-top: -41rem;}
      84%  {margin-top: -42rem;}
      86%  {margin-top: -43rem;}
      88%  {margin-top: -44rem;}
      90%  {margin-top: -45rem;}
      92%  {margin-top: -46rem;}
      94%  {margin-top: -47rem;}
      96%  {margin-top: -48rem;}
      98%  {margin-top: -49rem;}
      100% {margin-top: 0;}
    }`;
  
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
          height: 4rem;
          background-color: #e8e8e8;
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
  xmlhttp.open("GET", "donations.json", true);
  xmlhttp.send();