const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        name: {
            type: String,
            required: 'Please enter an exercise name'
        },
        type: {
            type: String,
            required: 'Please enter an exercise type'
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        duration: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
},
    {
        toJSON: {
            virtuals: true
        }
    });

// Show total duration
WorkoutSchema.virtual('totalDuration').get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

// Show total distance
WorkoutSchema.virtual('totalDistance').get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.distance;
    }, 0);
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;