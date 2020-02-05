const express = require('express');
const router = express.Router();
const cors = require('cors')
const multer = require('multer')
const fs = require('fs')
const Team = require('../models/team')

router.use(cors())


const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/team/");
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
    Team.find((err, docs) => {
        if (!err) { res.send(docs); }
    })
});
router.post('/', cors(), function (req, res) {
    const date = req.body;
    let emp = new Team({
        'firstName': date.firstName,
        'lastName': date.lastName,
        'linkNetwork': date.linkNetwork,
        'imgID': req.file.filename,
        'idImgUrl': `http://${SERVERIP}:${SERVER_PORT}/uploads/team/`
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
    })
})

// router.put('/edit/:editId', cors(), (req, res) => {
//     Response.findByIdAndUpdate(req.params.editId, {$set: req.body})
//         .then((list) => res.send(list))
//         .catch((error) => console.log(error))
// })
router.delete('/delete/:deleteId', (req, res) => {
    Team.findById(req.params.deleteId)
        .then(list => {
            Team.findByIdAndRemove(req.params.deleteId)
                .then(list => {
                    fs.unlinkSync(`./uploads/team/${list.imgID}`);
                    res.send(list)
                })
                .catch((error) => console.log(error))
        })
})
module.exports = router;