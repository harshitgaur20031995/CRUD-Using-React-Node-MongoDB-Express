const User = require('../model/User');
const router = require('express').Router();


// get user

router.get('/', (req, res) => {
    User.find().then(doc => {
        res.send({
            status: true,
            message: 'user fetch successfully', body: doc
        })
    });
})


// create user
router.post('/', (req, res) => {

    const user = new User({
        username: req.body.user_name,
        email: req.body.email
    });
    if (user) {
        User.findOne({ email: req.body.email }).then(doc => {

            if (doc != null) {
                res.send({ status: false, message: 'user already added', body: [] })
            } else {
                user.save().then(docs => {
                    res.send({
                        status: true,
                        message: 'user register successfully', body: docs
                    })
                }).catch(err => { res.send({ status: false, err: err }); })

            }
        }).catch(err => {
            res.send({ status: false, err: err });
        });
    }
})

// Delete item

router.delete('/:id', (req, res) => {

    User.findByIdAndRemove(req.params.id).then(docs => {

        if (docs) {
            res.send({ status: true, message: 'item is delete' });
        } else {
            res.send({ status: false, message: 'item is not found' });
        }

    }).catch(err => {
        res.send({ status: false, message: 'somthing went wrong' });
    })

})

//Item Updated

router.patch('/:id', (req, res) => {
    
    User.findByIdAndUpdate(req.params.id, {
        username: req.body.user_name,
        email: req.body.email
    }).then((doc) => {
        //console.log(doc+req.params.id);
        res.send({ status: true, message: 'item updated' });
    }).catch(err => {
        res.send({ status: false, message: 'somthing went wrong' });
    })

})


module.exports = router;