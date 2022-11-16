const app = require("./app")
const port = 3000

app.listen(port, () => {
    console.log(`servidor conectado, escuchando en el puerto ${port}...`)
})