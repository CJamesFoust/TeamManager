const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minlength: [
            2,
            "Name requires a minimum of 3 characters"
        ]
    },

    position: {
        type: String
    }
}, { timestamps: true });

PlayerSchema.pre('findOneAndUpdate', function(next) {
    this.options.runValidators = true;
    next();
});

module.exports.Player = mongoose.model('Player', PlayerSchema);