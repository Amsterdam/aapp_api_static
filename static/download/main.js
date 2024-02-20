(function () {
  var appStoreUrl =
    "https://apps.apple.com/nl/app/de-amsterdam-app/id1624518847";
  var playStoreUrl =
    "https://play.google.com/store/apps/details?id=nl.amsterdam.app";

  function getPlatform() {
    let platform = "";
    if (navigator) {
      if (navigator.userAgentData && navigator.userAgentData.platform) {
        platform = navigator.userAgentData.platform.toUpperCase();
      } else if (navigator.platform) {
        platform = navigator.platform.toUpperCase();
      }
    }

    return platform;
  }

  function getStoreLink(platform) {
    if (
      platform.includes("MAC") ||
      platform.includes("IPHONE") ||
      platform.includes("IPAD")
    ) {
      return appStoreUrl;
    }

    if (platform.includes("ANDROID")) {
      return playStoreUrl;
    }

    return;
  }

  function getUtmParams() {
    var params = new URLSearchParams(document.location.search);
    var loc = document.location;
    var queryString =
      "?utm_source=" + params.get("utm_source") ??
      encodeURIComponent(loc.origin + loc.pathname);
    var campaign = params.get("utm_campaign");

    if (!campaign) {
      return queryString;
    }

    return queryString + "&utm_campaign=" + campaign;
  }

  function debug() {
    var params = new URLSearchParams(document.location.search);

    return params.get("debug");
  }

  var currentPlatform = getPlatform();

  if (!currentPlatform) {
    return;
  }

  var url = getStoreLink(currentPlatform);
  var params = getUtmParams();

  if (debug()) {
    alert([currentPlatform, url, params].join("\n"));
  }

  if (url) {
    window.location.replace(url + param);
  }
})();
