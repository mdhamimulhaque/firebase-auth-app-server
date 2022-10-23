const express = require('express');
const app = express();
var cors = require('cors');
const port = 5000;
const categories = require('./data/categotries.json');
const products = require('./data/products.json');
const { response } = require('express');

app.use(cors())

// ---> server test
app.get('/', (req, res) => {
    res.send("The server is running...")
})

// ---> categories
app.get('/categories', (req, res) => {
    res.send(categories)
})

// ---> single category
app.get('/category/:id', (req, res) => {
    const id = (req.params.id);

    if (id === '00') {
        res.send(products)
    } else {
        const currentCategory = products.filter(pd => pd.category_id === id);
        res.send(currentCategory)
    }

})


// ---> products
app.get('/products', (req, res) => {
    res.send(products)
})

// ---> single product data
app.get('/product-details/:id', (req, res) => {
    const id = (req.params.id);

    const currentCategory = products.find(pd => pd._id === id);
    res.send(currentCategory)

})




app.listen(port, () => {
    console.log(`The server is running from ${port}`)
})
