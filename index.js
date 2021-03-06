const express = require('express')
const app = express()
const port = process.env.PORT
const { v4: uuidv4 } = require('uuid');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/createboard', (req,res) => {
  var myBoardName=req.query.boardName;
  res.send({
    'boardId': uuidv4(),
    'boardName':myBoardName
  });
})

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})
