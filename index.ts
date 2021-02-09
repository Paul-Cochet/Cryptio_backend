import express from "express";
const app = express();

app.get('/', (req, res) =>{
  res.send('Hello from express and typescript!');
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`APP listnening on port ${port}`));

/*
https://blockchain.info/rawaddr/1GY9ci8L4EK2U3baXnuvNtpFEiL4CMsVob
*/