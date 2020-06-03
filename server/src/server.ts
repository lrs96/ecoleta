import express, { response } from 'express';
import path from 'path'
import routes from './routes';


const app = express()
app.use(express.json())
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

// app.get('/users', (req, res) => {
//     const search = String(req.query.search);

//     const filteredUsers = search ? users.filter(user => user.includes(search)) : users
//     console.log('listagem de usuários')
//     res.json(filteredUsers)
// })

app.listen(3333)