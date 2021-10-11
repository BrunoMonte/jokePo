const express = require('express')
const app = express()
const port = 3000

const jogada = ['pedra', 'papel', 'tesoura']

const pc = () => {
    const jogadaPc = parseInt(Math.random()*3)
    return jogada[jogadaPc]
}

app.get('/', (req, res) => {
  res.send('JOKE PO !!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
