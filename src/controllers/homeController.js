const getHomepage = (req, res) => {
    //process data
    //call model
    res.send('Hello World! & nodemon')
}

const getABC = (req, res) => {
    res.send('check ABC!')
}

// arrow function
const getTMD = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getABC,
    getTMD
}