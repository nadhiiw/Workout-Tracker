const db = require("../models");
const router = require('express').Router();



// get the workout
router.get("/api/workouts",(req,res)=>{
    db.workout.find({}).then(dbWorkout=>{
        dbWorkout.forEach(workout =>{
            var total = 0;
            workout.exercises.forEach(e => {
                total += e.duration;
            });
            workout.totalDuration = total;
        })
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    })
})

// add the exercise
router.get("/api/workouts/:id",(req,res)=>{
    db.workout.findOneAndUPdate(
        {_id:req.params.id},
        {
            $inc:{totalDuration: req.body.duration},
            $push:{ exercises: req.body}
        },
        { new: true}).then(dbWorkout =>{
            res.json(dbWorkout);
        }).catch(err =>{
            res.json(err);
        });
});

// create the workout
router.post("/api/workouts", ({body}, res) =>{
    db.workout.create(body).then((dbWorkout =>{
        res.json(dbWorkout);
    })).catch(err =>{
        res.json(err);
    });
});

// get the workouts in range 
router.get("api/workouts/range",(req,res) =>{
    db.workout.find({}).then(dbWorkout => {
        console.log("ALL WORKOUT");
        console.log(dbWorkout);

        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;