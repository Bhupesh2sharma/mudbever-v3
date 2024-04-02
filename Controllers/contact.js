const { log } = require("console")
const contactModel = require("../Model/contact")

const contact = (req, res) => {
    res.render("pages/contact")
}

const contactData = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body
        if (!name || !email || !subject || !message)
            return res.status(404).json({ message: "Fill All The Credentials" })
        const contactData = new contactModel({ name, email, subject, message })
        await contactData.save()
        res.status(200).json({ message: "Successful" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { contact, contactData }
