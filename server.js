const express = require("express");
const app = express();
const hbs = require("hbs");

require('./hbs/helper');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//express hbs
hbs.registerPartials(__dirname + "/views/partials", function (err) {});
app.set("view engine", "hbs");



app.get("/", (req, res) => {
    res.render('home',{
        nombre: 'Chubeto'
    });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, () => {
  console.log(`Peticiones por el puerto ${port}`);
});
