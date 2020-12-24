const express = require('express');
const router = express.Router();
const Candidate = require('../models/candidate');
const Score = require('../models/test_score');

router.post('/insert-candidate', (req, res) => {
    Candidate.findOne({ email: req.body.email }, function(err, candidate) {
        if (candidate) return res.send('Candidate Already Exists');    
        else{
            Candidate.create(req.body, function(err, candidate) {
                if (err) {console.log('err', err);}
                else res.send("Candidate inserted successfully \n"+ candidate);
            });
        }
    });
});

router.post('/assign-score', (req, res) => {
    const candidateEmail = req.body.email;
    Candidate.findOne({ email: candidateEmail }, (err, candidate) => {
        if(candidate) {
            Score.create(req.body, function(err, score) {
                if (err) {console.log('err', err);}
                else res.send("Score assigned successfully \n"+ score);
            });
        }
        else res.send("Candidate doesn't Exists");
    });
});

router.get('/highest-score', (req, res) => {
    Score.find({}, (err, scores) => {
        let maxMarks = 0;
        let emailId = "";
        scores.map(score => {
            let marks = score.first_round + score.second_round + score.third_round;
            if(marks > maxMarks){
                maxMarks = marks;
                emailId = score.email;
            }
        });
        res.send("Heighest Marks "+ maxMarks +" Out of 30 \n EmailId: "+ emailId);
    })
});

router.get('/average-score', (req, res) => {
    let first_round = 0;
    let second_round = 0;
    let third_round = 0;
    let length = 0;
    Score.find({}, (err, scores) => {
        length = scores.length;
        scores.map(score => {
            first_round += score.first_round;
            second_round += score.second_round;
            third_round += score.third_round;
        });
        first_round = first_round/length;
        second_round = second_round/length;
        third_round = third_round/length;

        res.send("Average Scores \n First Round "+ first_round + "\n Second Round " + second_round + "\n Third Round " + third_round);
    })
});

module.exports = router;