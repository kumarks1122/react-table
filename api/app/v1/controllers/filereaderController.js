var fs = require('fs');

exports.upload = function(req, res) {
  console.log(req.file)
  if (!!req.file) {
    res.json({ fileId: req.file.filename });
  }
}

exports.search = function(req, res) {
  var records = []
  var { delimiter, rowCount, fileId } = req.body
  const filePath = `./uploads/${fileId}`

  var fileContent = String(fs.readFileSync(filePath))
  fileContent = fileContent.split("\n")

  delimiter = !!delimiter ? delimiter: ','
  rowCount = !!rowCount || rowCount == 0 ? rowCount: 2
  rowCount = fileContent.length >= rowCount ? rowCount: fileContent.length

  for (var i = 0; i < rowCount; i++) {
    rec = fileContent[i]
    records.push(rec.split(delimiter))
  }

  res.json({ records: records });
}
