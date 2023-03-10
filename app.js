const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

//Error handling 
app.use(function(req, res, next){
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use(function (error, req, res, next){
    res.status(error.status || 500 );
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;