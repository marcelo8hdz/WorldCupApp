import Users from "../models/userModel.js";
import {Router} from "express";

const userRoutes = Router();

userRoutes.route('/new').post((req, res) => {
    const newUser = new Users(req.body)
    newUser.save()
        .then(success => res.json(success))
        .catch(err => res.status(400).json('Error! ' + err))

})

userRoutes.route('/').get((req, res) => {
    // using .find() without a parameter will match on all user instances
	Users.find({})
        .then(allUsers => res.json(allUsers))
        .catch(err => res.status(400).json('Error! ' + err))
})

userRoutes.route('/delete/:id').delete((req, res) => {
	
    Users.deleteOne({ _id: req.params.id })
        .then(success => res.json('Success! User deleted.'))
        .catch(err => res.status(400).json('Error! ' + err))
})

userRoutes.route('/rank').get((req, res) => {
    Users.getRanked()
        .then(rankedUsers => res.json(rankedUsers))
        .catch(err => res.status(400).json('Error! ' + err))
})

userRoutes.route('/rank/top5').get((req, res) => {
    Users.find({}).sort('-points').limit(5)
        .then(rankedUsers => res.json(rankedUsers))
        .catch(err => res.status(400).json('Error! ' + err))
})

userRoutes.route('/:id').get((req, res) => {
	Users.find({_id: req.params.id}, (err, user) => {
        if (err) res.status(500).send(err)
        res.status(200).json(user);
    });
})

userRoutes.route('/getUserByEmail/:mail').get((req, res) => {
	Users.find({mail: req.params.mail}, (err, user) => {
        if (err) res.status(500).json(err)
        res.status(200).json(user);
    });
})

userRoutes.route('/update/:id').post((req,res) => {
    Users.findByIdAndUpdate(req.params.id, req.body, {new: true},
        (err, user) => {
            if (err)  res.status(500).json(err);
            res.status(500).json(user);
        }
    )    
})




export default userRoutes;



