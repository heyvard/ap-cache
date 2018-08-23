if (window == top) {
  chrome.extension.onRequest.addListener(function () {
    setTimeout(cleanGoogle, 200);
  });
}

function cleanGoogle() {
  console.log('clean google')
  jQuery('body').find('div').first().remove();
  jQuery('body').find('div .psi-parent').first().remove();
}

  