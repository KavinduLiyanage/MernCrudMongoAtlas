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

router.route('/:id').get((req, res) => {
    Discount.findById(req.params.id)
        .then(discount => res.json(discount))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Discount.findByIdAndDelete(req.params.id)
        .then(() => res.json('Discount deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Discount.findById(req.params.id)
        .then(discount => {
            discount.productName = req.body.productName;
            discount.description = req.body.description;
            discount.duration = Number(req.body.duration);
            discount.date = Date.parse(req.body.date);

            discount.save()
                .then(() => res.json('Discount updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
