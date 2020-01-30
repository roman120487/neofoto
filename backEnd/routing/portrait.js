const express = require('express');
const fileUpload = require('express-fileupload');
const router = express.Router();
const cors = require('cors')
const multer = require('multer')

const fs = require('fs');
const Portrait = require('../models/portrait')

router.use(cors())
router.use(fileUpload({parseNested: true}));

router.get('/', cors(), (req, res) => {
    Portrait.find((err, docs) => {
        if (!err) { res.send(docs); }
    })
});

router.patch('/edit-upd/:editId', cors(), (req, res) => {
    console.log(req.body)
    console.log(req.params.editId)
    Portrait.findByIdAndUpdate(req.params.editId, { $pull: { "arrayImg": { "filename": req.body.response } } })
        .then(list => {
            fs.unlinkSync(`./uploads/project/${req.body.dirPhoto}/${req.body.response}`);
            res.send(list)
        })
        .catch((error) => console.log(error))
})
router.patch('/edit-updAll/:editId', cors(), (req, res) => {
    let obj = [];
    let oneimg = [];
    if(req.files.filesUpdate.length === undefined){
        console.log('undefined')
        oneimg.push(req.files.filesUpdate)
    }
    else{
        console.log('lenght')
        for(let i=0; i<req.files.filesUpdate.length; i++){
            oneimg.push(req.files.filesUpdate[i])
        }
    }
    console.log(oneimg)
    if(req.files.filesUpdate){
        for (let i = 0; i < oneimg.length; i++) {
            oneimg[i].name = Math.random().toString(36).substring(2);
            console.log(oneimg[i].mimetype)
            let editFilles = oneimg[i].mimetype.indexOf('/');
            let img = `${oneimg[i].name}.${oneimg[i].mimetype.slice(editFilles + 1)}`
            obj.push({ filename: img, path: `http://45.128.204.73:8080/uploads/project/${req.body.dirPhoto}/` })
    
            oneimg[i].mv(`./uploads/project/${req.body.dirPhoto}/${img}`, function (error) {
                if (error)
                    return console.log(error)
            });
        }
    }
    Portrait.findByIdAndUpdate(req.params.editId, { $set: req.body, $addToSet: { 'arrayImg': obj } })
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
router.delete('/delete/:deleteId', (req, res) => {
    Portrait.findById(req.params.deleteId)
        .then(list => {
            Portrait.findByIdAndRemove(req.params.deleteId)
                .then(list => {
                    fs.rmdirSync(`./uploads/project/${list.dirPhoto}`, { recursive: true });
                    res.send(list)
                })
                .catch((error) => console.log(error))
        })
})
router.post('/', cors(), function (req, res) {
    const date = req.body;
    let obj = [];
    let oneImgArray = [];
    if(req.files.files.length === undefined){
        console.log('undefined')
        oneImgArray.push(req.files.files)
    }
    else{
        console.log('lenght')
        for(let i=0; i<req.files.files.length; i++){
            oneImgArray.push(req.files.files[i])
        }
    }
    console.log(oneImgArray)
    const renderMkr = Math.random().toString(36).substring(2);
    fs.mkdir(`./uploads/project/${renderMkr}`, function (err) {
        if (err) {
            console.log(err.stack)
        } else {
            for (let i = 0; i < oneImgArray.length; i++) {
                oneImgArray[i].name = Math.random().toString(36).substring(2);
                let editFilles = oneImgArray[i].mimetype.indexOf('/');
                let img = `${oneImgArray[i].name}.${oneImgArray[i].mimetype.slice(editFilles + 1)}`
                obj.push({ filename: img, path: `http://45.128.204.73:8080/uploads/project/${renderMkr}/` })

                oneImgArray[i].mv(`./uploads/project/${renderMkr}/${img}`, function (error) {
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