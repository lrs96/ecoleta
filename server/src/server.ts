import express from 'express';

const app = express()

app.get('/users', (req, res) => {
    console.log('listagem de usuários')
    res.json([
        'luan',
        'william',
        'Felipe'
    ])
})

app.listen(3333)