const express = require('express');
const router = express.Router();
const cors = require('cors')
const multer = require('multer')
const fs = require('fs');

const Response = require('../models/response')

router.use(cors())

var corsOptions = {
    origin: 'http://188.40.170.11:3001'
  }

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/response/");
    },
    filename: (req, file, cb) => {
        let editFilles = file.originalname.toLowerCase().indexOf('.jpg') || file.originalname.toLowerCase().indexOf('.jpeg') || file.originalname.toLowerCase().indexOf('.png')
        let prodImgID = Math.random().toString(36).substring(2)
        if (editFilles) {
            cb(null, `${prodImgID}${file.originalname.slice(editFilles)}`);
        }
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg") {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
}
router.use(multer({ storage: storageConfig, fileFilter: fileFilter }).single("file"));

router.get('/', cors(), (req, res) => {
    Response.find((err, docs) => {
        if (!err) { res.send(docs); }
    })
});
router.post('/', cors(), function (req, res) {
    console.log('norm')
    const date = req.body;
    let emp = new Response({
        'response': date.response,
        'author': date.author,
        'idImg': req.file.filename,
        'idImgUrl': 'http://188.40.170.11:3001/uploads/response/'
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
    })
})
router.put('/edit/:editId', cors(), (req, res) => {
    Response.findByIdAndUpdate(req.params.editId, {$set: req.body})
        .then((list) => res.send(list))
        .catch((error) => console.log(error))
})
router.delete('/delete/:deleteId', (req, res) => {
    Response.findById(req.params.deleteId)
        .then(list => {
            Response.findByIdAndRemove(req.params.deleteId)
                .then(list => {
                    fs.unlinkSync(`./uploads/response/${list.idImg}`);
                    res.send(list)
                })
                .catch((error) => console.log(error))
        })
})
module.exports = router;