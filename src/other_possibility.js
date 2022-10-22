const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const webscrape = express();

const url = 'https://menus.sodexomyway.com/BiteMenu/Menu?menuId=14740&locationId=10395001&whereami=https://simpsondining-preview.sodexomyway.com/dining-near-me/pfieffer-dining-hall'
axios(url)
    .then(response => {
        const html = response.data
        console.log(html)
        const names = []
        const $ = cheerio.load(html)
        $('.get-nutritioncalculator', html).each(function(){
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            names.push({
                title
            })
        });
        //console.log(names)

        for(let i = 0; i < names.length; i++){
            console.log(names[i])
        }
    }).catch(err => console.log(err))

webscrape.listen(PORT, () => console.log('server running on PORT ' + PORT))
webscrape.listen(PORT, () => console.log('server running on PORT ' + PORT))