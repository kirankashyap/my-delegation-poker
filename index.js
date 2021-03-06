const express = require('express')
const app = express()
const port = process.env.PORT
const { v4: uuidv4 } = require('uuid');

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'qurlzfihpwsqxu',
  host: 'ec2-54-205-61-191.compute-1.amazonaws.com',
  database: 'dfj6r8g7brmitl',
  password: '53a1f88bac93164232745d51cb7fc0e86f302fe78f7a801a406cd1f3f313fd52',
  port: 5432,
  ssl: true
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/createboard', (req,res) => {
  pool.query("INSERT into public.\"BOARD\" (board_id,title,url) values ($1,$2,$3) returning *",[uuidv4(),req.query.boardName,'abc'] ,(error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
})
})
  

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})
