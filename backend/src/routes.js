const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const htmlData = require('./getValues');

const routes = express.Router();


/********** Home **********/
routes.get('/', (req, res) => {
  res.send('Welcome to Crypto-API');
});


/********** Bitcoin **********/
routes.get('/bitcoin', async (req, res) => {
  const bitcoinValue = await htmlData('https://coinmarketcap.com/currencies/bitcoin/markets/', 'div.priceValue');
  res.send(`Bitcoin Value(USD): ${bitcoinValue}`);
});


/********** Test **********/
routes.get('/test', async (req, res) => {
  const text = await htmlData('http://www.pudim.com.br/', 'a');

  res.send(text);

});

module.exports = routes;
