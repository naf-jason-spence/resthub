// Imports
const mongoose = require('mongoose');

// Setup schema
const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export contact model
var Contact = module.exports = mongoose.model('contact', contactSchema);

module.exports.get = function(callback, limit) {
    Contact.find(callback).limit(limit);
};