const Chance = require("chance");
export class DonorScroll {
  constructor() {
    this.init();
  }
  init() {
    this.displayDonations(this.getDonors());
  }
  getPageId() {
    if ("pageJson" in window && "campaignPageId" in window.pageJson) {
      return parseInt(window.pageJson.campaignPageId);
    }
    return 1;
  }
  getSeed() {
    let now = new Date();
    let hour = now.getHours();
    return hour + this.getPageId();
  }
  // Get Donors
  getDonors(total = 30) {
    let seed = this.getSeed();
    let ret = [];
    for (let i = 0; i < total; i++) {
      let chance = new Chance(seed - i);
      ret.push({
        firstName: chance.first(),
        lastName: chance.last(),
        anonymous: chance.bool(),
        donationAmt: chance.integer({
          min: 5,
          max: 75,
        }),
      });
    }
    // console.log("DonorScroll: getDonors: ", ret);
    return ret;
  }
  round5(num) {
    return Math.ceil(num / 5) * 5;
  }
  displayFormat(display) {
    var displayOutput = "";
    if (display.anonymous == true) {
      displayOutput =
        "Anonymous chipped in $" + this.round5(display.donationAmt);
    } else {
      displayOutput =
        display.firstName +
        " " +
        display.lastName.substring(0, 1) +
        ". chipped in $" +
        this.round5(display.donationAmt);
    }

    return displayOutput;
  }
  displayCheckbox() {
    const checkbox = document.getElementsByClassName(
      "en__component en__component--formblock en__donation--billing--info"
    );

    const str = `
    <div class="en__field en__field--checkbox en__field--000000 en__field--donorScrollPreference">
	  <label class="en__field__label" style="">Donor Recognition</label>
	  <div class="en__field__element en__field__element--checkbox	">
	  	<div class="en__field__item Anonymous__alignment">
	  		<input id="en__field_transaction_donor_scroll_preference" type="checkbox"   class="en__field__input en__field__input--checkbox" name="transaction.  donorScrollPreference">
	  		<label for="en__field_transaction_donor_scroll_preference"  class="en__field__label en__field__label--item">List my name as "Anonymous" on the donor scroll.</label>
	  	</div>
	  </div>
    </div>
  `;

    //str = document.createTextNode(str);

    checkbox[0].innerHTML += str;
  }
  appendScrollTicker(donation) {
    let ticker = document.querySelector("#donor-ticker");
    let str = "<ul>";
    for (let i = 0; i < donation.length; i++) {
      str += "<li>" + this.displayFormat(donation[i]) + "</li>";
    }
    str = '<div id="ticker-scroll">' + str + "</ul></div>";
    ticker.innerHTML += str;
  }
  appendNewsTicker(donors) {
    let ticker = document.querySelector("#donor-ticker");
    let str = '<div class="ticker">';
    for (let i = 0; i < donors.length; i++) {
      str +=
        '<div class="ticker__item">' + this.displayFormat(donors[i]) + "</div>";
    }
    str = '<div id="ticker-news">' + str + "</div></div>";
    ticker.innerHTML = str;
  }
  displayDonations(donors) {
    const tickerLayout = document.querySelector("#donor-ticker");

    //Ticker layout Type
    if (tickerLayout.dataset.layout == "horizontal") {
      switch (tickerLayout.dataset.style) {
        case "news":
          this.appendNewsTicker(donors);
          break;
        case "scroll":
          this.appendScrollTicker(donors);
          break;
        default:
          this.appendNewsTicker(donors);
          break;
      }
      this.displayCheckbox();
    }
  }
}
