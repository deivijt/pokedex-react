import express from 'express'
import engine from 'react-engine'
import path from 'path'

const port = 8080
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

// Indicamos a express que el engine sea react-engine 
app.engine('.jsx', engine.server.create())

// Indicamos la ruta de las vistas
app.set('views', path.join(__dirname, 'views'))

// Indicamos para que el engine utilice archivos jsx
app.set('view engine', 'jsx')

// Indicamos que react-engine sea el engine de vistas de express
app.set('view', engine.expressView)

app.get('/', (req, res) => res.render('index', { title : 'Pokédex-React' }))

app.listen(port, () => console.log(`Server running in localhost:${port}`))