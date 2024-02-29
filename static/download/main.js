/**
 * This script will redirect the user to the appropriate store. It will display the page if openened on an non-Apple, non-Android platform.
 * The utm_source and utm_campagin parameters from the URL will be passed through to the store. If no utm_source param is present, it will default to "download_page".
 * Use the param ?debug=1 to prevent the redirect and alert debug info.
 */
(function () {
  var APPLE_APP_ID = "1624518847";
  var APPLE_PROVIDER_ID = "118991325";
  var APPLE_MEDIA_TYPE_PARAM = "mt=8";
  var GOOGLE_APP_ID = "nl.amsterdam.app";
  var APP_STORE_BASE_URL =
    "https://apps.apple.com/nl/app/de-amsterdam-app/id" + APPLE_APP_ID;
  var PLAY_STORE_BASE_URL =
    "https://play.google.com/store/apps/details?id=" + GOOGLE_APP_ID;
  var DEFAULT_SOURCE = "download_page";

  function getPlatform() {
    if (navigator) {
      if (navigator.userAgentData && navigator.userAgentData.platform) {
        return navigator.userAgentData.platform.toUpperCase();
      }
      if (navigator.platform) {
        return navigator.platform.toUpperCase();
      }
    }
  }

  function getUtmQueryStringAndroid() {
    var params = new URLSearchParams(document.location.search);

    var source = params.get("utm_source") ?? DEFAULT_SOURCE;
    var campaign = params.get("utm_campaign");

    var queryString = "utm_source=" + source;

    if (!campaign) {
      return queryString;
    }

    return queryString + "&utm_campaign=" + campaign;
  }


  function getUtmQueryStringApple() {
    var params = new URLSearchParams(document.location.search);

    var source = params.get("utm_source") ?? DEFAULT_SOURCE;
    var campaign = params.get("utm_campaign");

    var queryStringSource = "ct=" + source;

    if (!campaign) {
      return queryStringSource;
    }

    var queryStringCampaign = "ct=" + campaign + ":" + source;

    return queryStringCampaign.substring(0, 30);
  }

  function addUtmParamsToLink(selector, href) {
    var link = document.querySelector(selector);

    if (!link) {
      return;
    }

    link.setAttribute("href", href);
  }

  function isDebug() {
    var params = new URLSearchParams(document.location.search);

    return params.get("debug");
  }

  var currentPlatform = getPlatform();
  var queryStringAndroid = getUtmQueryStringAndroid();
  var queryStringApple = getUtmQueryStringApple();
  var debug = isDebug();
  var appStoreUrl = APP_STORE_BASE_URL + "?" + queryStringApple + "&pt=" + APPLE_PROVIDER_ID + "&" + APPLE_MEDIA_TYPE_PARAM;
  var playStoreUrl = PLAY_STORE_BASE_URL + "&" + queryStringAndroid;

  if (debug) {
    alert(
      [currentPlatform, queryStringApple, queryStringAndroid, appStoreUrl, playStoreUrl].join("\n\n")
    );
  }

  if (
    currentPlatform &&
    !debug &&
    (currentPlatform.includes("MAC") ||
      currentPlatform.includes("IPHONE") ||
      currentPlatform.includes("IPAD"))
  ) {
    window.location.replace(appStoreUrl);
    return;
  }

  if (currentPlatform && !debug && currentPlatform.includes("ANDROID")) {
    window.location.replace(playStoreUrl);
    return;
  }

  addUtmParamsToLink("#appstorelink", appStoreUrl);
  addUtmParamsToLink("#playstorelink", playStoreUrl);
})();
