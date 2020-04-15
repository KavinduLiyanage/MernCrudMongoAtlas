const router = require('express').Router();
let Discount = require('../models/discount.model');

router.route('/').get((req, res) => {
    Discount.find()
        .then(discounts => res.json(discounts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const productName = req.body.productName;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newDiscount = new Discount({
        productName,
        description,
        duration,
        date,
    });

    newDiscount.save()
        .then(() => res.json('Discount added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
