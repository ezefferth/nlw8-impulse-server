

import express from 'express';

const app = express();

app.use(express.json()); //para que seja entendido que a req vai vir em formato json

app.post('/feedbacks', (req, res) => {

  console.log(req.body);

  return res.send('Hello World');
})

app.listen(3333 , () => {
  console.log('server running');
})