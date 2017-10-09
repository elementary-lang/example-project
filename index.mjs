import express from 'express'
import path from 'path'
import fs from 'fs'
import parser from 'elang-parser'

const app = express()

app.get('/*.js', function(req, res) {
  const srcFile = req.url.replace('.js', '.el')
  const src = fs.readFileSync(path.resolve('.' + srcFile), 'utf-8')
  console.log(src)
  parser(src, (err, code) => {
    if (err) {
      return res.send(err)
    }
    res.send(code)
  })
})

app.get('/', function(req, res) {
  res.sendFile(path.resolve('./index.html'))
})

app.listen(3000)
