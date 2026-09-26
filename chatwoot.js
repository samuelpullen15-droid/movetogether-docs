// Chatwoot live chat, the same widget movetogetherfitness.com uses
// (website/src/lib/chatwoot.ts in the app repo). Mintlify runs every .js
// file in this directory on every page.
//
// The website token is public by design: it ships in every visitor's page.
// Visitors here are strangers, so no setUser call.
(function () {
  var BASE_URL = 'https://app.chatwoot.com';
  var WEBSITE_TOKEN = 'gajRhrtTdeF6dfVguVAUwwkT';
  if (document.getElementById('chatwoot-sdk')) return;

  window.chatwootSettings = { darkMode: 'auto' };

  var script = document.createElement('script');
  script.id = 'chatwoot-sdk';
  script.async = true;
  script.src = BASE_URL + '/packs/js/sdk.js';
  script.onload = function () {
    window.chatwootSDK.run({ websiteToken: WEBSITE_TOKEN, baseUrl: BASE_URL });
  };
  document.head.appendChild(script);
})();
