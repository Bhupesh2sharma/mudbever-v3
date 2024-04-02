const mongoose = require("mongoose")

const appointmentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        mobile: {
            type: Number,
            require: true,
        },
        service_type: {
            type: String,
            require: true,
        },
        message: {
            type: String,
            require: true,
        },

        date: {
            type: Date,
            default: new Date(),
        },
    },
    { timestamps: true },
)

module.exports = new mongoose.model("appointment", appointmentSchema)
