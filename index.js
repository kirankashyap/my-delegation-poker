const express = require('express')
const app = express()
const port = process.env.PORT
const { v4: uuidv4 } = require('uuid');

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'qurlzfihpwsqxu',
  host: 'ec2-54-205-61-191.compute-1.amazonaws.com',
  database: 'api',
  password: '53a1f88bac93164232745d51cb7fc0e86f302fe78f7a801a406cd1f3f313fd52',
  port: 5432,
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/createboard', (req,res) => {
  pool.query('INSERT into BOARD (board_id,title,url) values ("14cb3f8e-714e-463d-98df-4ffa65d20c75","Vivek Board","abc") returning *', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
  
  

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})


/*var myBoardName=req.query.boardName;
  res.send({
    'boardId': uuidv4(),
    'boardName':myBoardName
  });
  */
