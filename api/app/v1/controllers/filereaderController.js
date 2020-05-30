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
  if (!!fileId) {
    const filePath = `./uploads/${fileId}`

    var fileContent = String(fs.readFileSync(filePath))
    fileContent = fileContent.split("\n")

    delimiter = !!delimiter ? delimiter: ','
    rowCount = !!rowCount || rowCount == 0 ? rowCount: 2
    rowCount = fileContent.length >= rowCount ? rowCount: fileContent.length

    for (var i = 0; i < rowCount; i++) {
      rec = fileContent[i]
      splittedWords = rec.split(delimiter)
      if (splittedWords[splittedWords.length - 1] == "") {
        splittedWords.splice(splittedWords.length - 1, 1)
      }

      if (splittedWords[0] == "") {
        splittedWords.splice(0, 1)
      }
      records.push(splittedWords)
    }
    
    highestSize = records.reduce((pre, cur) => {
      return cur.length > pre ? cur.length : pre
    }, 0)
    
    records = records.map((rec) => {
      for (let index = rec.length; index < highestSize; index++) {
        rec[index] = ""
      }
      return rec
    })
    console.log(highestSize)
  }

  res.json({ records: records });
}
