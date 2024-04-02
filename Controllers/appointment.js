const appointmentSchema = require("../Model/appointent")

const appointment = async (req, res) => {
    try {
        const { username, email, mobile, service_type, message } = req.body
        if (!username || !email || !mobile || !service_type || !message)
            return res.status(400).json({ message: "Fill All The Fields" })
        const appointData = new appointmentSchema({
            name: username,
            email,
            mobile,
            service_type,
            message,
        })
        await appointData.save()
        res.status(200).json({ message: "Your response is sent!!" })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = appointment
