chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, (tabs0) => {
    const now_url = tabs0[0]['url'];
    // https?:// で始まらなければ終了
    const rs = now_url.match(/^(https?:\/\/[^\/]+)/);
    if (!rs) {
      return;
    }
    
    const open_url = rs[1] + '/robots.txt';
    // 開くべきURLのタブが存在する ? そのタブをactivate : 新しいタブをopen
    chrome.tabs.query({'url': open_url}, (tabs1) => {
      const tab = tabs1[0];
      if (tab) {
        chrome.tabs.update(tab.id, {'active': true});
      } else {
        window.open(open_url);
      }
    });
  });
});