import Predictions from "../models/predictionModel.js";
import {Router} from "express";
import userRoutes from "./userController.js";

const predictionRoutes = Router();

predictionRoutes.route('/new').post((req, res) => {
	const newPrediction = new Predictions(req.body)
    newPrediction.save()
        .then(success => res.json(success))
        .catch(err => res.status(400).json('Error! ' + err))
})

predictionRoutes.route('/').get((req, res) => {
    // using .find() without a parameter will match on all team instances
	Predictions.find({})
        .then(allPredictions => res.json(allPredictions))
        .catch(err => res.status(400).json('Error! ' + err))
})

predictionRoutes.route('/delete/:id').delete((req, res) => {
	
    Predictions.deleteOne({ _id: req.params.id })
        .then(success => res.json('Success! Prediction deleted.'))
        .catch(err => res.status(400).json('Error! ' + err))
})

predictionRoutes.route('/:id').get((req, res) => {
	Predictions.find({_id: req.params.id}, (err, prediction) => {
        if (err) res.status(500).send(error)
        res.status(200).json(prediction);
    });
})

predictionRoutes.route('/update/:id').post((req, res) => {
    
    Predictions.findByIdAndUpdate(req.params.id, req.body, {new: true},
        (err, prediction) => {
            if (err)  res.status(500).json(err);
            res.status(500).json(prediction);
        }
    )    
})


predictionRoutes.route('/updatemany/:game/:winner').post((req, res) => {
    updateUsersPoints()
    
    Predictions.updateMany(req.params, req.body, {new: true},
        (err, prediction) => {
            if (err)  res.status(500).json(err);
            res.status(500).json(prediction);
        }
    )
})

import Users from "../models/userModel.js"
async function updateUsersPoints(){
    let users = await Users.find({})
    let count = 0
    
    for (let i = 0; i < users.length; i++){
        count = 0
        for (let j = 0; j < users[i].predictions.length; j++){
            let prediction = await Predictions.findById(users[i].predictions[j].toString())
            count += prediction.points
        }
        users[i].points = count
        users[i].save()
    }
    
}




export default predictionRoutes;