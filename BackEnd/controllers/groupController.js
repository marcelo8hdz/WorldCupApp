import Groups from "../models/groupModel.js";
import {Router} from "express";

const groupRoutes = Router();

groupRoutes.route('/new').post((req, res) => {
    const newGroup = new Groups(req.body)
    newGroup.save()
        .then(success => res.json(success))
        .catch(err => res.status(400).json('Error! ' + err))

})

groupRoutes.route('/').get((req, res) => {
    // using .find() without a parameter will match on all group instances
	Groups.find({})
        .then(allGroups => res.json(allGroups))
        .catch(err => res.status(400).json('Error! ' + err))
})

groupRoutes.route('/delete/:id').delete((req, res) => {
	
    Groups.deleteOne({ _id: req.params.id })
        .then(success => res.json('Success! group deleted.'))
        .catch(err => res.status(400).json('Error! ' + err))
})

groupRoutes.route('/:id').get((req, res) => {
	Groups.find({_id: req.params.id}, (err, group) => {
        if (err) res.status(500).send(error)
        res.status(200).json(group);
    });
})

groupRoutes.route('/update/:id').post((req,res) => {
    
    Groups.findByIdAndUpdate(req.params.id, req.body, {new: true},
        (err, group) => {
            if (err)  res.status(500).json(err);
            res.status(500).json(group);
        }
    )    
})

export default groupRoutes;
