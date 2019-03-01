chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, (tabs) => {
    const now_url = tabs[0]['url'];
    const rs = now_url.match(/^(https?:\/\/[^\/]+)/);
    if (rs) {
      const open_url = rs[1] + '/robots.txt';
      window.open(open_url);
    }
  });
});