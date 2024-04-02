const requirementSchema = require("../Model/requirements")

const requirements = async (req, res) => {
    try {
        const {
            username,
            message,
            services,
            category,
            budget,
            area,
            site_details,
            email,
            address,
            phone,
        } = req.body
        if (
            !username ||
            !message ||
            !services ||
            !category ||
            !budget ||
            !area ||
            !site_details ||
            !email ||
            !address ||
            !phone
        )
            return res.status(400).json({ message: "Fill all the fields" })
        const requirementsData = new requirementSchema({
            name: username,
            message,
            services,
            category,
            budget,
            area,
            site_details,
            email,
            address,
            phone,
        })
        await requirementsData.save()
        res.status(200).json({ message: "Your Response Is Saved" })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = requirements
