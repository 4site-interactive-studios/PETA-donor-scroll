function appendTicker(donation) {
    var ticker = document.querySelector('#donor-ticker');
    var str ='<ul>'
    for (var i = 0; i < donation.length; i++) {

        if (i % 4 == 3){
            str += '<li>'+donation[i].firstname + '</li></ul><ul>'
        }
        else {
            str += '<li>' + donation[i].firstname + '</li>';
        }
    }
    str = '<div id="ticker">' + str + '</div>';
    console.log(str);
    ticker.innerHTML += str;
}

function tickerStyle() {

    /* Create style element */
    var css = document.createElement('style');
    css.type = 'text/css';
    var styles = `#ticker {
        min-width: 800px;
        height: 27px;
        overflow: hidden;
        position: relative;
    } 
    
    #ticker ul {
        float: left;
        padding-left: 20px;
        -webkit-animation: ticker 10s cubic-bezier(1, 0, .5, 0) infinite;
        -moz-animation: ticker 10s cubic-bezier(1, 0, .5, 0) infinite;
        -ms-animation: ticker 10s cubic-bezier(1, 0, .5, 0) infinite;
        animation: ticker 10s cubic-bezier(1, 0, .5, 0) infinite;
    }
    #ticker ul:hover {
        -webkit-animation-play-state: paused;
        -moz-animation-play-state: paused;
        -ms-animation-play-state: paused;
        animation-play-state: paused;
    }
    #ticker li {
      line-height: 26px;
      list-style: none;
    }
    
    
    @-webkit-keyframes ticker {
        0%   {margin-top: 0;}
        25%  {margin-top: -26px;}
        50%  {margin-top: -52px;}
        75%  {margin-top: -78px;}
        100% {margin-top: 0;}
    }
    @-moz-keyframes ticker {
        0%   {margin-top: 0;}
        25%  {margin-top: -26px;}
        50%  {margin-top: -52px;}
        75%  {margin-top: -78px;}
        100% {margin-top: 0;}
    }
    @-ms-keyframes ticker {
        0%   {margin-top: 0;}
        25%  {margin-top: -26px;}
        50%  {margin-top: -52px;}
        75%  {margin-top: -78px;}
        100% {margin-top: 0;}
    }
    @keyframes ticker {
        0%   {margin-top: 0;}
        25%  {margin-top: -26px;}
        50%  {margin-top: -52px;}
        75%  {margin-top: -78px;}
        100% {margin-top: 0;}
    }`;

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