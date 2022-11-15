import Predictions from "../models/predictionModel.js";
import {Router} from "express";
import userRoutes from "./userController.js";

const predictionRoutes = Router();

predictionRoutes.route('/new').post((req, res) => {
	const newPrediction = new Predictions(req.body)
    updateUserPredictions(newPrediction)
    newPrediction.save()
        .then(success => res.json(success))
        .catch(err => res.status(400).send('Error! ' + err))
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
        if (err) {
            res.status(200).json([]);
        }else{
            res.status(200).json(prediction);
        }
    });
})

predictionRoutes.route('/find/:id').get((req, res) => {
	Predictions.find({_id: req.params.id}, (err, prediction) => {
        if (err) res.status(200).json([])
        else res.status(200).json(prediction);
    });
})

predictionRoutes.route('/update/:id').post((req, res) => {
    Predictions.findByIdAndUpdate(req.params.id, req.body, {new: true},
        (err, prediction) => {
            if (err)  res.status(500).json(err);
            res.status(200).json(prediction);
        }
    )    
})


import Users from "../models/userModel.js"

predictionRoutes.route('/updatemany/:game/:winner').post((req, res) => {
    if (req.params.winner != null){
        updateUsersPoints(req);
    }
})

async function updateUsersPoints(req){
    if (req.params.winner == null){
        return;
    }
    let preds = await Predictions.find({game: req.params.game, winner: req.params.winner});
    let points = 0;
    for (let i = 0; i < preds.length; i++){
        let user =  await Users.findById(preds[i].userId.toString());
        console.log(user)
        points = user.points + preds[i].points;
        user.points = points;
        console.log(user)
        user.save()
        

    }
}

async function updateUserPredictions(pred){
    let user = await Users.findById(pred.userId.toString())
    let arr = user.predictions
    arr.push(pred._id.toString())
    user.predictions = arr
    user.save()
}

export default predictionRoutes;
