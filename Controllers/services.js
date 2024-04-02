const serviceSchema = require("../Model/services")

const services = (req, res) => {
    res.render("pages/services")
}

const servicesPost = (req, res) => {
    const { name, email, mobile, service_type, message } = req.body
    if (!name || !email || !mobile || !service_type || !message)
        return res.status(404).json({ message: "Fill All The Credentials" })
    const servicesData = new serviceSchema({
        name,
        email,
        mobile,
        service_type,
        message,
    })
    const result = servicesData.save()
    if (!result) return res.status(400).json({ message: "Error" })
    res.status(200).json({ message: "Successful" })
}

module.exports = { services, servicesPost }
