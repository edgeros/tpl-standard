const tape = require('@edgeros/jsre-tape')

tape('test', function (t) {
  const start = Date.now()
  setTimeout(function () {
    console.log('runing test', `test cost: ${Date.now() - start}`)
    t.end()
  }, 100)
})

require('iosched').forever()
