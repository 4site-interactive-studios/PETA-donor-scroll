import DonorScroll from "./app/app";
import "./scss/main.scss";
//run();
window.addEventListener("load", function () {
  window.DonorScroll = DonorScroll;
  let donorScroll = new DonorScroll();
  // Set default options
  // if (typeof window.DonationLightboxOptions !== "undefined") {
  //   donationLightbox.setOptions(window.DonationLightboxOptions);
  // }
});
