if (window == top) {
  chrome.extension.onRequest.addListener(function () {
    setTimeout(cacheRedirect, 300);
  });
}

let redirectDate = null;

function cacheRedirect() {
  const abb = jQuery('#salesposter-info-section').children().text();
  if (abb === "Bli abonnent for å lese videre.") {
    const now = new Date().getTime();
    console.log(redirectDate)
    if (redirectDate === null || ((now - redirectDate) > 50000)) {
      redirectDate = new Date().getTime();
      console.log(window.location.href);
      const currentUrl = window.location.href;

      const newUrl = 'https://webcache.googleusercontent.com/search?q=' + encodeURIComponent('cache:' + currentUrl);
      console.log(newUrl);

      window.location.href = newUrl;
    }
  }

}

