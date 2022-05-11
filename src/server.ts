import express from 'express';



import { routes } from './routes';



const app = express();



//tem q vir antes, ordem sequencial
app.use(express.json()); //para que seja entendido que a req vai vir em formato json

app.use(routes)

app.listen(3333, () => {
  console.log('server running');
})