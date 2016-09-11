export function postJSON(url, data, callback) {
  let req = new global.XMLHttpRequest()
  let resObj = {}

  req.onreadystatechange = function () {
    if (req.readyState === 4) {
      try {
        resObj = JSON.parse(req.responseText)
      } finally {
        callback(req.status, resObj, req)
      }
    }
  }

  req.open('POST', url, true)
  req.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  req.setRequestHeader('Content-Type', 'application/json')
  req.send(JSON.stringify(data))
  return req
}
