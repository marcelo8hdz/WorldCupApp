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
    Games.findByIdAndUpdate(req.params.id, req.body, {new: true},
        (err, game) => {
            if (err)  res.status(500).json(err);
            updatePlayOffGames(req);
            res.status(500).json(game);
        }
    )
})

async function updatePlayOffGames(req){
    if (req.body.winner == null && req.body.looser == null){
        return;
    }
    // A B C D E F G H
    let arrGroups = ['635207232eaec69376424231', 
    '635207272eaec6937642423b', '635207282eaec69376424245', 
    '635207282eaec6937642424f', '635207292eaec69376424259', 
    '635207292eaec69376424263', '635207292eaec6937642426d', 
    '6352072a2eaec69376424277'];
    // AB BA CD DC EF FE GH HG
    let arrR16 = ['6372ce3973760422aff533ef', 
    '6372ce3a73760422aff533f3', '6372ce3b73760422aff533f6', 
    '6372ce3b73760422aff533f8', '6372ce3b73760422aff533fa', 
    '6372ce3b73760422aff533fc', '6372ce3b73760422aff533fe', 
    '6372ce3b73760422aff53400'];
    //ABCD BADC EFGH FEHG 
    let arrQF = ['6372ce3b73760422aff53402', '6372ce3b73760422aff53404',
    '6372ce3b73760422aff53406', '6372ce3b73760422aff53408'];
    //ABCDEFGH BADCFEHG
    let arrSF = ['6372ce3b73760422aff5340a', '6372ce3b73760422aff5340c'];
    let final = '6372ce3b73760422aff5340e';

    //Loop reads Groups and updates Round of 16
    for (let i = 0; i < arrGroups.length; i++){
        if (req.params.id == arrGroups[i]){
            let game = await Games.findById(arrR16[i]);
            let arr = game.teams;
            if (req.body.winner != null) {arr.push(req.body.winner);}
            game.teams = arr;
            game.save()
            if (req.body.looser != null) {
                if (i % 2 == 0){
                    game = await Games.findById(arrR16[i + 1]);
                    arr = game.teams;
                    arr.push(req.body.looser);
                    game.teams = arr;
                    game.save()
                }else {
                    game = await Games.findById(arrR16[i - 1]);
                    arr = game.teams;
                    arr.push(req.body.looser);
                    game.teams = arr;
                    game.save()
                }
            }
        }
    }
    //Loop reads Ro16 and updates QF of 16
    for (let i = 0; i < arrR16.length; i++){
        if (req.params.id == arrR16[i]){
            if (i < arrQF.length / 2){
                let game = await Games.findById(arrQF[i]);
            }else{
                let game = await Games.findById(arrQF[i - (arrQF.length / 2)]);
            }
            let arr = game.teams;
            if (req.body.winner != null) {arr.push(req.body.winner);}
            game.teams = arr;
            game.save()
        }
    }
    //Loop reads QF and updates SF of 16
    for (let i = 0; i < arrQF.length; i++){
        if (req.params.id == arrQF[i]){
            if (i < arrSF.length / 2){
                let game = await Games.findById(arrSF[i]);
            }else{
                let game = await Games.findById(arrSF[i - (arrSF.length / 2)]);
            }
            let arr = game.teams;
            if (req.body.winner != null) {arr.push(req.body.winner);}
            game.teams = arr;
            game.save()
        }
    }
    //Loop reads Semifinals and updates Final
    for (let i = 0; i < arrSF.length; i++){
        if (req.params.id == arrSF[i]){
            let game = await Games.findById(final);
            let arr = game.teams;
            if (req.body.winner != null) {arr.push(req.body.winner);}
            game.teams = arr;
            game.save()
        }
    }
}



export default gameRoutes;
