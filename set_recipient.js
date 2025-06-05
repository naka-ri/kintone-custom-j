(() => {
  "use strict";

  // Boost! Injector で送信された時のレコード作成イベント
  kb.event.on('kb.record.create.submit', (event) => {
    event.record['送信先'].value = 'r.nakamura@tryan.co.jp';
    return event;
  });

})();
