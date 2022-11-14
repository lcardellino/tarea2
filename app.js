const express = require('express');
const app = express();
const port = 8080;

//========================================
//    EJERCICIO 1
//========================================
app.get('/:nombre/:apellido', (req, res) => {
  res.send(`Hola ${req.params.nombre} ${req.params.apellido}`)
});

//========================================
//    EJERCICIO 2
//========================================

app.get('/dividir/:dividendo/:divisor/', (req, res) => {
  let divisor = Number(req.params.divisor);
  let dividendo = Number(req.params.dividendo);
  
  if (divisor == 0) {
    res.json({ error: 'No se puede dividir por cero'})
  }
  else {
    let resultado = ( dividendo / divisor)
    res.json({resultado})  
  }
});

//========================================
//    EJERCICIO 3
//========================================

app.get('/suma/:num1/:num2/', (req, res) => {
  let num1= Number(req.params.num1)
  let num2= Number(req.params.num2)

  if (num1 < 0 || num2 < 0) {
    res.json({
      error: 'no se puede enviar numero menores a cero'
    })
  }
  else {
    let resultado = num1 + num2
    res.json({resultado})
  }
});

//========================================
//    EJERCICIO 4
//========================================

app.get('/autorizacion/', (req, res) => {

  let queryValue = Object.values(req.query)
  let queryNumber = Number(queryValue)

  if (queryNumber == 0 || queryNumber % 2 == 0) {
    res.send('Autorizado') 
  }
  else {
    res.send('No autorizado')
  }
});

//========================================
//    EJERCICIO 5
//========================================

app.get('/lista', (req, res) => {

  let productos = {
  producto1: req.query.product1,
  producto2: req.query.product2,
  producto3: req.query.product3,
  producto4: req.query.product4,
  producto5: req.query.product5,
}
res.json(productos)
});

//========================================

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})