import Games from "../models/gameModel.js";
import {Router} from "express";

const gameRoutes = Router();

gameRoutes.route('/new').post((req, res) => {
    const newGame = new Games(req.body)
    newGame.save()
        .then(success => res.json(success))
        .catch(err => res.status(400).json('Error! ' + err))
})

gameRoutes.route('/').get((req, res) => {
    // using .find() without a parameter will match on all Game instances
	Games.find({})
        .then(allGames => res.json(allGames))
        .catch(err => res.status(400).json('Error! ' + err))
})

gameRoutes.route('/finished').get((req, res) => {
    Games.getFinished()
        .then(finishedGames => res.json(finishedGames))
        .catch(err => res.status(400).json('Error! ' + err))
})

gameRoutes.route('/nextgames').get((req, res) => {
    Games.getNextGames()
        .then(finishedGames => res.json(finishedGames))
        .catch(err => res.status(400).json('Error! ' + err))
})

gameRoutes.route('/delete/:id').delete((req, res) => {
	
    Games.deleteOne({ _id: req.params.id })
        .then(success => res.json('Success! game deleted.'))
        .catch(err => res.status(400).json('Error! ' + err))
})


gameRoutes.route('/:id').get((req, res) => {
	Games.find({_id: req.params.id}, (err, game) => {
        if (err) res.status(500).send(error)
        res.status(200).json(game);
    });
})



gameRoutes.route('/update/:id').post((req,res) => {
    req.body.date = req.body.date +':00-06:00'
   
    Games.findByIdAndUpdate(req.params.id, req.body, {new: true},
        (err, game) => {
            if (err)  res.status(500).json(err);
            res.status(500).json(game);
        }
    )
})

export default gameRoutes;
