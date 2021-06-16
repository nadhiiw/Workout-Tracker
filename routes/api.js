const db = reuire("../models");
const routes = require('express').Router();



// get the workout
router.get("/api/workouts",(req,res)=>{
    db.Workout.find({}).then(dbWorkout=>{
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
    db.Workout.findOneAndUPdate(
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