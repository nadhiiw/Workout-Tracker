const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
    day:{
        type:Date,
        default:Date.now
    },
    exercises:[
        {
            type:{
                type: string,
                trim:true,
            },
            name: {
                type:String,
                trim:true,
            },
            duration: Number,
            weight: {
                type:Number,
                default:0
            },
            reps:{
                type:Number,
                default:0
            },
            sets:{
                type:NUmber,
                default:0
            },
            distance: {
                type:Number,
                default:0
            }

        }
    ],
    totalDuration:{
        type:Number,
        default:0,
    }
});

const Workout = mongoose.module ("Workout", WorkoutSchema);

module.exports = Workout;