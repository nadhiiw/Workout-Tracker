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