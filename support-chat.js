// The support chat from movetogetherfitness.com, the same one the website
// shows. Mintlify runs every .js file in this directory on every page.
//
// The chat is the website's own page, /embed/support-chat, in an iframe that
// covers the whole window, so the chat inside sizes itself to this window
// exactly as it does on the website: a floating panel on a laptop, full
// screen on a phone. The page tells us where the chat sits, and the iframe is
// clipped to that box. Clipping also stops the rest of the iframe from taking
// clicks, so this page stays usable around the chat.
//
// The website side is website/src/components/support-chat/embedFrame.ts in
// the app repo. The website only lets this site frame that page.
(function () {
  var ORIGIN = 'https://movetogetherfitness.com';
  var FRAME_ID = 'mt-support-chat-frame';
  var MESSAGE = 'mt-support-chat:frame';
  if (document.getElementById(FRAME_ID)) return;

  var frame = document.createElement('iframe');
  frame.id = FRAME_ID;
  frame.src = ORIGIN + '/embed/support-chat';
  frame.title = 'MoveTogether support chat';
  // `normal` on both sides keeps the iframe see-through in dark mode: a
  // browser paints an iframe opaque when the two color-schemes differ.
  frame.style.cssText = [
    'position: fixed',
    'inset: 0',
    'width: 100%',
    'height: 100%',
    'border: 0',
    'margin: 0',
    'padding: 0',
    'background: transparent',
    'color-scheme: normal',
    'z-index: 2147483000',
    // Nothing shows, or takes clicks, until the chat says where it is.
    'clip-path: inset(0 0 100% 0)',
  ].join(';');

  function px(n) {
    return typeof n === 'number' && isFinite(n) && n >= 0 ? n + 'px' : null;
  }

  window.addEventListener('message', function (event) {
    if (event.origin !== ORIGIN || event.source !== frame.contentWindow) return;
    var data = event.data;
    if (!data || data.type !== MESSAGE) return;
    var c = data.clip;
    var edges = c ? [px(c.top), px(c.right), px(c.bottom), px(c.left)] : null;
    frame.style.clipPath =
      edges && edges.indexOf(null) === -1 ? 'inset(' + edges.join(' ') + ')' : 'inset(0 0 100% 0)';
  });

  document.body.appendChild(frame);
})();
