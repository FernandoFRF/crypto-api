const axios = require('axios');
const cheerio = require('cheerio');


const htmlData = async (url, selector) => {
  try {
    const response = await axios.get(url);
    const html = response.data
    const $ = await cheerio.load(html);

    const value = $(selector, html).text();
    console.log(value);
    return value;
  } catch (error) {
    console.log(error.response.body)
  }
};

module.exports = htmlData;
