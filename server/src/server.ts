import express, { response } from 'express';
import routes from './routes';


const app = express()
app.use(express.json())
app.use(routes)


// app.get('/users', (req, res) => {
//     const search = String(req.query.search);

//     const filteredUsers = search ? users.filter(user => user.includes(search)) : users
//     console.log('listagem de usuários')
//     res.json(filteredUsers)
// })

app.listen(3333)