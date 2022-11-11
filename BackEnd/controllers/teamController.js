import Teams from "../models/teamModel.js";
import {Router} from "express";

const teamRoutes = Router();

teamRoutes.route('/new').post((req, res) => {
	const newTeam = new Teams(req.body)
    newTeam.save()
        .then(success => res.json(success))
        .catch(err => res.status(400).json('Error! ' + err))

})

teamRoutes.route('/').get((req, res) => {
    // using .find() without a parameter will match on all team instances
	Teams.find({})
        .then(allTeams => res.json(allTeams))
        .catch(err => res.status(400).json('Error! ' + err))
})

teamRoutes.route('/delete/:id').delete((req, res) => {
	
    Teams.deleteOne({ _id: req.params.id })
        .then(success => res.json('Success! Team deleted.'))
        .catch(err => res.status(400).json('Error! ' + err))
})

teamRoutes.route('/:id').get((req, res) => {
	Teams.find({_id: req.params.id}, (err, team) => {
        if (err) res.status(500).send(error)
        res.status(200).json(team);
    });
})

teamRoutes.route('/update/:id').post((req,res) => {
    Teams.findByIdAndUpdate(req.params.id, req.body, {new: true},
        (err, team) => {
            if (err)  res.status(500).json(err);
            res.status(500).json(team);
        }
    )    
})

export default teamRoutes;
