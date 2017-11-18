var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = {
    addPlayer: (req, res) =>{
        let newPlayer = new Player(req.body)
        newPlayer.save((err)=>{
            if(err){
            res.json(err);
        } else {
            res.json()
        }
    })
    },

    playerList: (req, res) =>{
        Player.find({}, (err, all_players)=>{
            if(err){
                res.json(err)
            } else {
                res.json(all_players)
            }
        })
    },

    gameStatus: (req, res)=> {
            if(req.body.game == 'game1'){
            Player.update({_id: req.body.player_id}, {game1: req.body.status}, (err)=>{
                if(err){
                    res.json(err);
                } else{
                    res.json({})
                }
            })
        } else if(req.body.game == 'game2'){
            Player.update({_id: req.body.player_id}, {game2: req.body.status}, (err)=>{
                if(err){
                    res.json(err);
                } else{
                    res.json({})
                }
            })
        } else {
            Player.update({_id: req.body.player_id}, {game3: req.body.status}, (err)=>{
                if(err){
                    res.json(err);
                } else{
                    res.json({})
                }
            })
        }
    },
    delete: (req, res)=>{
        Player.remove({_id: req.body.id}, (err)=>{
            if(err){
                res.json(err)
            } else {
                res.json({})
            }
        })
    }
}
