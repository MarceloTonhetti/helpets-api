const { Schema, model } = require('mongoose')

const AdoptionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    publication_type: {
        type: String,
        required: true,
        trim: true
    },
    pet_name: {
        type: String,
        trim: true
    },
    species: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        trim: true
    },
    maturity: {
        type: String,
        trim: true
    },
    castred: {
        type: Boolean
    },
    quantity_male: {
        type: Number
    },
    quantity_female: {
        type: Number
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    rated: {
        type: Boolean
    },
    data_nascimento: {
        type: Date
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model('Adoption', AdoptionSchema);