const express = require('express');
const router = express.Router();
const cors = require('cors')
const multer = require('multer')
const fs = require('fs');
// const uploadsFolder = './uploads/project/';  // defining real upload path
// const uploadsFolder = '';  // defining real upload path
const Portrait = require('../models/portrait')
const renderMkr = Math.random().toString(36).substring(2);

router.use(cors())
const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        let mkderi = renderMkr;
        if (!fs.existsSync(`./uploads/project/${mkderi}`)) {
            fs.mkdir(`./uploads/project/${mkderi}`, function(err) {
                if(err) {
                    console.log(err.stack)
                } else {
                    cb(null, `./uploads/project/${mkderi}`);
                }
            })
        }
        else{
            cb(null, `./uploads/project/${mkderi}`);
        }

        // fs.mkdir(`./uploads/project/${mkderi}`, function(err) {
        //     if(err) {
        //         console.log(err.stack)
        //     } else {
        //         cb(null, `./uploads/project/${mkderi}`);
        //     }
        // })

        // cb(null, './uploads/project/' + renderMkr);
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
const upload = multer({storage: storageConfig, fileFilter: fileFilter })

router.get('/', cors(), (req, res) => {
    Portrait.find({})
        .then(lists => {
            res.send(lists)
        })
        .catch((error) => console.log(error))
});
router.post('/', cors(), upload.array('files'), function (req, res) {
    const date = req.body;
    let obj = [];
    for (let i = 0; i < req.files.length; i++) {
        console.log(req.files[i].filename);
        obj.push({filename: req.files[i].filename, path: `http://localhost:3000/${req.files[i].path}`})
        // ещё какие-то выражения
        // { name: 'Джон' }
    }
    // console.log(obj)
    // console.log(req.files);
    new Portrait({
        'nameProject': date.nameProject,
        'categoryProject': date.categoryProject,
        'arrayImg': obj,
    })
        .save()
        .then((task) => {
            // res.send(task)
            console.log('nice')
        })
        .catch((error) => console.log(error));
})

module.exports = router;