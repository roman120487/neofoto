const express = require('express');
const fileUpload = require('express-fileupload');
const router = express.Router();
const cors = require('cors')
const multer = require('multer')
const fs = require('fs');
const Portrait = require('../models/portrait')

router.use(cors())
router.use(fileUpload());

router.get('/', cors(), (req, res) => {
    Portrait.find((err, docs) => {
        if (!err) { res.send(docs); }
    })
});

router.patch('/edit-upd/:editId', cors(), (req, res) => {
    Portrait.findByIdAndUpdate(req.params.editId, { $pull: { "arrayImg": { "filename": req.body.response } } })
        .then((list) => res.send(list))
        .catch((error) => console.log(error))
})
router.patch('/edit-updAll/:editId', cors(), (req, res) => {
    // console.log(req.body)
    // console.log(req.files.files)
    let obj = [];
    console.log(req.files.filesUpdate)
    for (let i = 0; i < req.files.filesUpdate.length; i++) {
        req.files.filesUpdate[i].name = Math.random().toString(36).substring(2);
        let editFilles = req.files.filesUpdate[i].mimetype.indexOf('/');
        let img = `${req.files.filesUpdate[i].name}.${req.files.filesUpdate[i].mimetype.slice(editFilles + 1)}`
        obj.push({ filename: img, path: `http://localhost:3000/uploads/project/${req.body.dirPhoto}/` })

        req.files.filesUpdate[i].mv(`./uploads/project/${req.body.dirPhoto}/${img}`, function (error) {
            if (error)
                return console.log(error)
        });
    }
    Portrait.findByIdAndUpdate(req.params.editId, {$set: req.body, $addToSet: {'arrayImg': obj}})
        .then((list) => res.send(list))
        .catch((error) => console.log(error))
})
router.get('/edit/:id', cors(), (req, res) => {
    Portrait.findById({ '_id': req.params.id })
        .then(lists => {
            res.send(lists)
        })
        .catch((error) => console.log(error))
});
router.post('/', cors(), function (req, res) {
    const date = req.body;
    let obj = [];
    const renderMkr = Math.random().toString(36).substring(2);
    fs.mkdir(`./uploads/project/${renderMkr}`, function (err) {
        if (err) {
            console.log(err.stack)
        } else {
            for (let i = 0; i < req.files.files.length; i++) {
                req.files.files[i].name = Math.random().toString(36).substring(2);
                let editFilles = req.files.files[i].mimetype.indexOf('/');
                let img = `${req.files.files[i].name}.${req.files.files[i].mimetype.slice(editFilles + 1)}`
                obj.push({ filename: img, path: `http://localhost:3000/uploads/project/${renderMkr}/` })

                req.files.files[i].mv(`./uploads/project/${renderMkr}/${img}`, function (error) {
                    if (error)
                        return console.log(error)
                });
            }
            new Portrait({
                'nameProject': date.nameProject,
                'categoryProject': date.categoryProject,
                'dirPhoto': renderMkr,
                'arrayImg': obj,
            })
                .save()
                .then((task) => {
                    // res.send(task)
                    console.log('nice')
                })
                .catch((error) => console.log(error));
        }
    })
})

module.exports = router;