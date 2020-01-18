const express = require('express');
const router = express.Router();
const cors = require('cors')

const Portrait = require('../models/portrait')

router.use(cors())

router.get('/', cors(), (req, res) => {
    Portrait.find({})
        .then(lists => {
            res.send(lists)
        })
        .catch((error) => console.log(error))
});
router.post('/', cors(), function (req, res) {
    const date = req.body;
    console.log('good')
    new Portrait({
        'nameProject': date.nameProject,
        'categoryProject': date.categoryProject
    })
        .save()
        .then((task) => {
            // res.send(task)
            console.log('nice')
        })
        .catch((error) => console.log(error));
})

module.exports = router;