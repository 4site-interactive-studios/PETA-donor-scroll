const shuffleSeed = require("shuffle-seed");
export class DonorScroll {
  constructor() {
    if (
      !document.querySelector(".donor-list") &&
      !document.querySelector("#donor-ticker")
    )
      return;
    this.donors = [];
    this.hasDonors = false;
    const donorList = document.querySelectorAll(".donor-list li");
    if (donorList.length > 0) {
      this.hasDonors = true;
      for (let i = 0; i < donorList.length; i++) {
        this.donors.push(donorList[i].innerText);
      }
    } else {
      this.donors = [
        "Anonymous chipped in $15",
        "Marty F. chipped in $50",
        "Cynthia C. chipped in $3",
        "Mary G. chipped in $25",
        "Jenna W. chipped in $3",
        "Jean B. chipped in $20",
        "Connor E. chipped in $5",
        "Anonymous chipped in $150",
        "Sidni T. chipped in $25",
        "Lori R. chipped in $25",
        "Lavinia R. chipped in $5",
        "Astrid P. chipped in $25",
        "Anonymous chipped in $12",
        "Donna K. chipped in $25",
        "Joan L. chipped in $10",
        "Yuliya J. chipped in $5",
        "Audra M. chipped in $25",
        "Darlene B. chipped in $3",
        "Ana C. chipped in $35",
        "Marion A. chipped in $25",
        "Mark S. chipped in $50",
        "Sandy Z. chipped in $20",
        "Robin C. chipped in $25",
        "Joseph M. chipped in $15",
        "Miriam K. chipped in $50",
        "Jill W. chipped in $25",
        "Ramona F. chipped in $10",
        "Greg M. chipped in $25",
        "Shoshannah T. chipped in $15",
        "Raymond H. chipped in $10",
        "Vera T. chipped in $50",
        "Barbara Y. chipped in $35",
        "Kaoshi J. chipped in $5",
        "Pua A. chipped in $25",
        "Sheereen M. chipped in $5",
        "Anonymous chipped in $5",
        "Patrick G. chipped in $100",
        "Josephine A. chipped in $5",
        "Aldo C. chipped in $35",
        "Jude C. chipped in $35",
        "mariana w. chipped in $35",
        "Gail G. chipped in $35",
        "Mattie E. chipped in $25",
        "Zhixiao C. chipped in $10",
        "Karalyn S. chipped in $5",
        "Anonymous chipped in $3",
        "Anonymous chipped in $20",
        "Ember B. chipped in $25",
        "Dirk R. chipped in $5",
        "Pat L. chipped in $3",
        "Claudia M. chipped in $25",
        "Laurie W. chipped in $50",
        "Harry M. chipped in $16",
        "Cherry H. chipped in $10",
        "Patricia A. chipped in $10",
        "Anonymous chipped in $35",
        "Cristian P. chipped in $20",
        "Nell R. chipped in $25",
        "Donna R. chipped in $3",
        "Jean S. chipped in $10",
        "Vivian K. chipped in $25",
        "Anonymous chipped in $25",
        "Molly R. chipped in $50",
        "Janee T. chipped in $35",
        "Millie O. chipped in $25",
        "Anonymous chipped in $107",
        "Sally B. chipped in $25",
        "Brooke R. chipped in $20",
        "Sarah G. chipped in $50",
        "Abigail G. chipped in $35",
        "Anonymous chipped in $20",
        "Johanna D. chipped in $35",
        "Amaliya R. chipped in $3",
        "Carole R. chipped in $5",
        "Beth C. chipped in $15",
        "Danielle F. chipped in $50",
        "Ylva G. chipped in $3",
        "Terri T. chipped in $3",
        "Maria F. chipped in $35",
        "Myoung C. chipped in $10",
        "Roxanne S. chipped in $25",
        "Sara H. chipped in $3",
        "Erica P. chipped in $10",
        "Daniel F. chipped in $3",
        "Myles J. chipped in $4",
        "Loredana P. chipped in $10",
        "Evelin P. chipped in $15",
        "Barbaral L. chipped in $50",
        "Leilani M. chipped in $12",
        "Nicholas F. chipped in $25",
        "Sudha B. chipped in $50",
        "Anonymous chipped in $5",
        "Elisabeth R. chipped in $6",
        "Jaesung S. chipped in $6",
        "Doriane E. chipped in $25",
        "Debbie K. chipped in $25",
        "RondaM. B. chipped in $25",
        "Gioia M. chipped in $5",
        "Mahesh R. chipped in $5",
        "Teri S. chipped in $5",
        "Vanyoska G. chipped in $3",
        "Anonymous chipped in $100",
        "Zadina J. chipped in $3",
        "Renata K. chipped in $10",
        "Alison T. chipped in $10",
        "Sylvia W. chipped in $3",
        "Annie D. chipped in $5",
        "Vittoria V. chipped in $25",
        "Anonymous chipped in $50",
        "Sabrina C. chipped in $3",
        "Linda B. chipped in $10",
        "Melissa N. chipped in $15",
        "Barbara L. chipped in $35",
        "Adam T. chipped in $20",
        "Rain W. chipped in $5",
        "Melissa S. chipped in $4",
        "Gary M. chipped in $25",
        "Anonymous chipped in $35",
        "Anonymous chipped in $5",
        "Joanne M. chipped in $25",
        "Anonymous chipped in $3",
        "Anna U. chipped in $10",
        "Franklin C. chipped in $25",
        "Kara M. chipped in $25",
        "Anonymous chipped in $60",
        "Natalia S. chipped in $35",
        "Lyndsey B. chipped in $3",
        "Anonymous chipped in $25",
        "Anonymous chipped in $3",
        "Zana K. chipped in $7",
        "Dawn B. chipped in $35",
        "Anonymous chipped in $5",
        "Karen O. chipped in $25",
        "Bruno G. chipped in $2",
        "David H. chipped in $25",
        "Judith B. chipped in $35",
        "Thomas G. chipped in $10",
        "Julie P. chipped in $35",
        "Anonymous chipped in $35",
        "Lewis S. chipped in $35",
        "Debbie P. chipped in $20",
        "Sherry B. chipped in $15",
        "Adam B. chipped in $10",
        "Carol J. chipped in $5",
        "Anonymous chipped in $5",
        "Carole R. chipped in $5",
        "Vasil T. chipped in $35",
        "Carol K. chipped in $35",
        "Connie B. chipped in $10",
        "Anonymous chipped in $5",
        "Sherrel C. chipped in $10",
        "Brandy J. chipped in $3",
        "Redding O. chipped in $3",
        "Colin F. chipped in $5",
        "Christine M. chipped in $10",
        "Anonymous chipped in $10",
        "Kevin P. chipped in $35",
        "Robert T. chipped in $10",
        "Christian H. chipped in $25",
        "Peter H. chipped in $10",
        "Anil K. chipped in $35",
        "James C. chipped in $3",
        "Sharon B. chipped in $10",
        "Eleonora C. chipped in $35",
        "David D. chipped in $3",
        "Lynne E. chipped in $5",
        "Anne L. chipped in $5",
        "Jennifer O. chipped in $10",
        "Anonymous chipped in $100",
        "Annette S. chipped in $3",
        "Marilyne G. chipped in $5",
        "Jennifer A. chipped in $3",
        "Lonnell V. chipped in $1",
        "Lee K. chipped in $25",
        "Anonymous chipped in $25",
        "Elizabeth A. chipped in $150",
        "Diana V. chipped in $7",
        "Anonymous chipped in $100",
        "David H. chipped in $3",
        "Ana M. chipped in $20",
        "Erica M. chipped in $35",
        "Meg B. chipped in $20",
        "Marla D. chipped in $5",
        "Kaya S. chipped in $25",
        "Kimberly N. chipped in $25",
        "Ginger G. chipped in $5",
        "Jolanta D. chipped in $5",
        "Kara L. chipped in $3",
        "Marta C. chipped in $25",
        "Kalha l. chipped in $3",
        "Nomi D. chipped in $25",
        "Shelley T. chipped in $5",
        "Ellen M. chipped in $2",
        "Tracy R. chipped in $25",
        "Alicjia L. chipped in $3.5",
        "Brian L. chipped in $1",
        "Tracey H. chipped in $35",
        "Jonelle H. chipped in $5",
        "Kirsten L. chipped in $25",
        "Susan T. chipped in $10",
        "Viviana C. chipped in $25",
        "Rose M. chipped in $5",
        "Mariana B. chipped in $20",
        "Pam E. chipped in $25",
        "Catherine M. chipped in $50",
        "Audra M. chipped in $3",
        "Daniel R. chipped in $35",
        "Elina T. chipped in $25",
        "Joseph G. chipped in $5",
        "Valerie Y. chipped in $10",
        "Brandon B. chipped in $35",
        "Pilar C. chipped in $25",
        "Emilia T. chipped in $5",
        "Anonymous chipped in $25",
        "Luis L. chipped in $35",
        "Anna B. chipped in $25",
        "Aiyana A. chipped in $10",
        "Wendy O. chipped in $3",
        "Sarah D. chipped in $15",
        "Suzy L. chipped in $20",
        "Eugenia B. chipped in $25",
        "Elizabeth J. chipped in $35",
        "Anonymous chipped in $35",
        "Jim S. chipped in $3",
        "Kimberley B. chipped in $35",
        "Lisa B. chipped in $35",
        "Margo A. chipped in $10",
        "Hannah S. chipped in $25",
        "Kathryn J. chipped in $15",
        "Deborah C. chipped in $10",
        "Ashley A. chipped in $25",
        "Anonymous chipped in $25",
        "Alida W. chipped in $25",
        "Lynn P. chipped in $3",
        "Caroline C. chipped in $3",
        "Anonymous chipped in $5",
        "Anonymous chipped in $3",
        "Cristal L. chipped in $3",
        "Anonymous chipped in $3",
        "Beverly D. chipped in $10",
        "William H. chipped in $100",
        "Kerri L. chipped in $25",
        "Nancy C. chipped in $5",
        "Amy G. chipped in $25",
        "Neve B. chipped in $25",
        "Robyn B. chipped in $25",
        "Diane C. chipped in $10",
        "Paris P. chipped in $3",
        "Samantha F. chipped in $25",
        "Virginia J. chipped in $20",
        "Linda N. chipped in $5",
        "Katie C. chipped in $5",
        "Patrick S. chipped in $5",
        "Anonymous chipped in $35",
        "Anonymous chipped in $5",
        "Anonymous chipped in $3",
        "Glen B. chipped in $35",
        "Melanie K. chipped in $3",
        "Deborah K. chipped in $35",
        "Janet S. chipped in $25",
        "Gin S. chipped in $5",
        "Holly G. chipped in $10",
        "Mandy E. chipped in $10",
        "Richard L. chipped in $20",
        "Isabel T. chipped in $20",
        "Sophia A. chipped in $5",
        "Lesha E. chipped in $35",
        "Anonymous chipped in $25",
        "Jan K. chipped in $25",
        "Margot H. chipped in $5",
        "Edna D. chipped in $20",
        "Anna N. chipped in $100",
        "James M. chipped in $100",
        "Marie K. chipped in $10",
        "Patrice L. chipped in $100",
        "Catherine S. chipped in $35",
        "Anonymous chipped in $5",
        "Anonymous chipped in $10",
        "Faith F. chipped in $10",
        "Edh S. chipped in $2",
        "Anonymous chipped in $5",
        "Anna V. chipped in $10",
        "Anonymous chipped in $35",
        "Deeann B. chipped in $25",
        "Ann A. chipped in $100",
        "Anonymous chipped in $5",
        "Raphael S. chipped in $3",
        "Anonymous chipped in $3",
        "Angie B. chipped in $10",
        "Niani D. chipped in $3",
        "Anita E. chipped in $3",
        "Jean W. chipped in $3",
        "Kim B. chipped in $25",
        "Jonea B. chipped in $3",
        "Lydia R. chipped in $5",
        "Ruth K. chipped in $35",
        "Anonymous chipped in $10",
        "Kathy S. chipped in $25",
        "Alison B. chipped in $25",
        "Anonymous chipped in $25",
        "Maria C. chipped in $5",
        "Anonymous chipped in $10",
        "Tami F. chipped in $25",
        "Lynn R. chipped in $20",
        "Angela M. chipped in $35",
        "Jay T. chipped in $10",
        "Christina P. chipped in $10",
        "Lidia M. chipped in $25",
        "Anneli N. chipped in $3",
        "Piari K. chipped in $35",
        "Anonymous chipped in $50",
        "Jacinta A. chipped in $10",
        "Yolanda B. chipped in $35",
        "Deb S. chipped in $20",
        "Karen B. chipped in $35",
        "Anonymous chipped in $10",
        "Elnara K. chipped in $35",
        "Jose M. chipped in $10",
        "Anonymous chipped in $3",
        "Kathleen S. chipped in $100",
        "Marcella B. chipped in $35",
        "Carmen H. chipped in $25",
        "Sandra A. chipped in $25",
        "Carol P. chipped in $100",
        "Dixie P. chipped in $50",
        "April C. chipped in $10",
        "Anne M. chipped in $25",
        "Valerie O. chipped in $20",
        "Anonymous chipped in $15",
        "Ella H. chipped in $5",
        "Bonnie G. chipped in $3",
        "Deborah B. chipped in $5",
        "Lori K. chipped in $25",
        "Suzanne H. chipped in $10",
        "Jean M. chipped in $15",
        "Anonymous chipped in $35",
        "Kim K. chipped in $35",
        "Jill B. chipped in $25",
        "David W. chipped in $10",
        "Maria D. chipped in $7",
        "Anonymous chipped in $25",
        "Hudson S. chipped in $35",
        "Beverly C. chipped in $5",
        "Ann E. chipped in $5",
        "Anonymous chipped in $10",
        "Anonymous chipped in $25",
        "Elizabeth W. chipped in $35",
        "Anonymous chipped in $35",
        "Anonymous chipped in $25",
        "Tamela R. chipped in $35",
        "Chuck L. chipped in $25",
        "Michelle M. chipped in $5",
        "Leigh S. chipped in $35",
        "Dianne L. chipped in $10",
        "Krista S. chipped in $3",
        "Pille J. chipped in $25",
        "Kamiar M. chipped in $25",
        "Nicolas E. chipped in $25",
        "Patricia P. chipped in $20",
        "Burton W. chipped in $3",
        "Deborah D. chipped in $25",
        "Artur D. chipped in $25",
        "Peter W. chipped in $35",
        "Richard Z. chipped in $25",
        "Jane B. chipped in $25",
        "Camryn M. chipped in $5",
        "Kathleen T. chipped in $10",
        "Laura T. chipped in $50",
        "Elizabeth W. chipped in $3",
        "Anonymous chipped in $11",
        "Teresa W. chipped in $25",
        "Lucie B. chipped in $6",
        "Renee G. chipped in $25",
        "Anjala T. chipped in $25",
        "Abha S. chipped in $25",
        "Liana P. chipped in $10",
        "Marguerite W. chipped in $5",
        "Lynn H. chipped in $25",
        "Judy P. chipped in $3",
        "Jessica A. chipped in $25",
        "akram g. chipped in $25",
        "Susan M. chipped in $10",
        "Anonymous chipped in $20",
        "Linda G. chipped in $25",
        "Cosma F. chipped in $35",
        "Elaine R. chipped in $5",
        "Lisa G. chipped in $5",
        "Amy B. chipped in $25",
        "Radha B. chipped in $35",
        "Donna A. chipped in $35",
        "Gail F. chipped in $20",
        "Pamela K. chipped in $100",
        "Stacey R. chipped in $23",
        "Amelie B. chipped in $10",
        "Anonymous chipped in $5",
        "Elaine S. chipped in $25",
        "Stella K. chipped in $50",
        "Audra H. chipped in $10",
        "Carlos G. chipped in $10",
        "Lucy H. chipped in $10",
        "Marcus S. chipped in $10",
        "Lesley J. chipped in $5",
        "Thomas S. chipped in $35",
        "Mona A. chipped in $5",
        "Anonymous chipped in $25",
        "Ron M. chipped in $10",
        "Sajid A. chipped in $20",
        "Anonymous chipped in $2",
        "Trese B. chipped in $10",
        "Julia C. chipped in $2",
        "Tone D. chipped in $25",
        "Shannon T. chipped in $25",
        "Anonymous chipped in $5",
        "Sandi R. chipped in $5",
        "Lisa C. chipped in $5",
        "Nadine R. chipped in $10",
        "John B. chipped in $10",
        "Kenzie B. chipped in $5",
        "Alexandros V. chipped in $25",
        "Angelika Z. chipped in $5",
        "Lucia P. chipped in $35",
        "Sharae P. chipped in $25",
        "Melanie H. chipped in $35",
        "Paige R. chipped in $3",
        "Kevin M. chipped in $5",
        "Barry M. chipped in $3",
        "Pierre B. chipped in $35",
        "Kristin B. chipped in $3",
        "Suzanne V. chipped in $20",
        "Gord C. chipped in $35",
        "Celeste O. chipped in $35",
        "Kari B. chipped in $25",
        "Alan K. chipped in $10",
        "Daina O. chipped in $35",
        "Anonymous chipped in $10",
        "Dempsey H. chipped in $8",
        "Charlotte S. chipped in $25",
        "Sharine M. chipped in $35",
        "Regina B. chipped in $3",
        "Eva P. chipped in $30",
        "Margaret M. chipped in $25",
        "Harold P. chipped in $20",
        "Heidi M. chipped in $25",
        "Janey O. chipped in $35",
        "Bonita M. chipped in $5",
        "Sandra S. chipped in $3",
        "Eve M. chipped in $10",
        "Anonymous chipped in $3",
        "Camille S. chipped in $7",
        "Jeanne S. chipped in $25",
        "Marsha S. chipped in $10",
        "Maria P. chipped in $25",
        "Anonymous chipped in $10",
        "Syah J. chipped in $5",
        "Velda F. chipped in $10",
        "Anonymous chipped in $5",
        "Pierre B. chipped in $35",
        "Anna Y. chipped in $50",
        "Claire B. chipped in $15",
        "Susan H. chipped in $35",
        "Rosalee T. chipped in $25",
        "Rosemary A. chipped in $35",
        "Lydia C. chipped in $20",
        "Anonymous chipped in $10",
        "Dave R. chipped in $35",
        "Debra A. chipped in $10",
        "Michael W. chipped in $35",
        "Claire S. chipped in $15",
        "Moses R. chipped in $5",
        "Susan B. chipped in $5",
        "Bonny W. chipped in $25",
        "Susie A. chipped in $25",
        "Pierre B. chipped in $35",
        "Makayla A. chipped in $25",
        "Lori B. chipped in $25",
        "Michele M. chipped in $50",
        "Jennifer K. chipped in $35",
        "Anonymous chipped in $35",
        "Diane V. chipped in $25",
        "Mary U. chipped in $3",
        "Yasmin I. chipped in $25",
        "Francesca R. chipped in $5",
        "Rakhi K. chipped in $25",
        "Robin K. chipped in $10",
        "Christine C. chipped in $10",
        "Janice G. chipped in $25",
        "Doris B. chipped in $35",
        "Anonymous chipped in $82",
        "Robert M. chipped in $3",
        "Janice H. chipped in $10",
        "Tove K. chipped in $35",
        "Anonymous chipped in $1",
        "Delain P. chipped in $20",
        "Denise L. chipped in $5",
        "Jamie B. chipped in $25",
        "Anonymous chipped in $15",
        "Nora B. chipped in $25",
        "Anonymous chipped in $25",
        "Steve G. chipped in $35",
        "Anonymous chipped in $10",
      ];
    }

    this.init();
  }
  init() {
    if (document.readyState === "loading") {
      // DOM is still loading, so we add an event listener
      document.addEventListener("DOMContentLoaded", () => {
          this.displayDonations(this.getDonors());
      });
    } else {
      // DOMContentLoaded has already fired, so we execute immediately
      this.displayDonations(this.getDonors());
    }
  
  }
  getPageId() {
    if ("pageJson" in window && "campaignPageId" in window.pageJson) {
      return parseInt(window.pageJson.campaignPageId);
    }
    return 1;
  }
  getSeed() {
    let now = new Date();
    let day = now.getDate();
    return day + this.getPageId();
  }
  // Get Donors
  getDonors(total = 50) {
    if (this.donors.length < total) return this.donors;
    let seed = this.getSeed();
    let donors = shuffleSeed.shuffle(this.donors, seed);
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let pointer = Math.round((hour * 60 + minute) / 5);
    let ret = donors.slice(pointer, pointer + total).reverse();
    // console.log("DonorScroll: getDonors: ", ret);
    return ret.length > 0 ? ret : donors.slice(0, total);
  }
  displayCheckbox() {
    let rememberElement = document.querySelector('.rememberme-wrapper.en__field__item');
    let emailElement = document.querySelector(".en__field--emailAddress.en__field");
    let petaOptInElement = document.querySelector(".en__field--NOT_TAGGED_9.en__field");
    let peta2OptInElement = document.querySelector(".en__field--NOT_TAGGED_17.en__field");
    let mobileElement = document.querySelector(".en__field--NOT_TAGGED_69.en__field");

    if (rememberElement && rememberElement.parentElement  && rememberElement.parentElement.parentElement) 
      rememberElement = rememberElement.parentElement.parentElement;
    if ((petaOptInElement && petaOptInElement.parentElement) || (peta2OptInElement && peta2OptInElement.parentElement)) {
      petaOptInElement = petaOptInElement ? petaOptInElement.parentElement : peta2OptInElement.parentElement;
    }

    const checkbox = rememberElement || petaOptInElement || mobileElement || emailElement;

    if (checkbox) {
      const donorList = document.querySelector(".donor-list");
      const marginTop =
        donorList && donorList.classList.contains("margin-top")
          ? "margin-top"
          : "";
      const marginBottom =
        donorList && donorList.classList.contains("margin-bottom")
          ? "margin-bottom"
          : "";
      // Donor Recognition Translate
      const textTranslate =
        this.getLang() === "es"
          ? 'Pongan mi nombre como "Anónimo" en la lista de donantes.'
          : 'List my name as "Anonymous" on the donor scroll.';
      const element = document.createElement("div");
      const size = this.getSize();
      element.className =
        "en__field en__field--checkbox en__field--000000 en__field--donorScrollPreference scroll-" +
        size +
        " " +
        marginTop +
        " " +
        marginBottom;
      element.innerHTML = `
      <div class="en__field__item
      ">
        <div class="en__field__item">
          <input id="en__field_transaction_donor_scroll_preference" type="checkbox" class="en__field__input en__field__input--checkbox" name="transaction.donorScrollPreference" value="Y">
          <label for="en__field_transaction_donor_scroll_preference" class="en__field__label en__field__label--item">${textTranslate}</label>
        </div>
      </div>`;

      //str = document.createTextNode(str);

      checkbox.appendChild(element);
    }
  }
  appendScrollTicker(donors) {
    let str = "<ul>";
    for (let i = 0; i < donors.length; i++) {
      str += "<li>" + donors[i] + "</li>";
    }
    str = '<div id="ticker-scroll">' + str + "</ul></div>";
    return str;
  }
  appendNewsTicker(donors) {
    let str = '<div class="ticker">';
    for (let i = 0; i < donors.length; i++) {
      str += '<div class="ticker__item">' + donors[i] + "</div>";
    }
    str = '<div id="ticker-news">' + str + "</div></div>";
    return str;
  }
  displayDonations(donors) {
    if (this.hasDonors) {
      const donorList = document.querySelector(".donor-list");
      // Create a new div element
      const element = document.createElement("div");
      element.id = "donor-ticker";
      element.classList.add("donor-ticker");
      element.classList.add("scroll-" + this.getSize());
      element.setAttribute("data-style", "news");
      element.innerHTML = this.appendNewsTicker(donors);
      // Add element before donor-list
      donorList.parentNode.insertBefore(element, donorList);
    } else {
      let tickerElement = document.querySelector("#donor-ticker");

      //Ticker layout Type
      switch (tickerElement.dataset.style) {
        case "news":
          tickerElement.innerHTML = this.appendNewsTicker(donors);
          break;
        case "scroll":
          tickerElement.innerHTML = this.appendScrollTicker(donors);
          break;
        default:
          tickerElement.innerHTML = this.appendNewsTicker(donors);
          break;
      }
    }
    this.displayCheckbox();
  }
  getSize() {
    const donorList = document.querySelector(".donor-list");
    return donorList && !donorList.classList.contains("small")
      ? "large"
      : "small";
  }
  getLang() {
    return document.documentElement.lang === "es" ? "es" : "en";
  }
}
