(function () {
  "use strict";

  kintone.events.on('app.record.create.submit', function (event) {
    event.record['送信先'].value = 'r.nakamura@tryan.co.jp';
    return event;
  });

})();
