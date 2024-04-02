const internshipModel = require("../Model/internship")
const imageUploader = require("../utils/uploader")

const internship = (req, res) => {
    res.render("pages/internship")
}

const internshipData = async (req, res, next) => {
    try {
        const {
            name,
            date_of_birth,
            email,
            phone,
            address,
            city,
            region,
            zip_code,
            institution,
        } = req.body
        if (
            !name ||
            !date_of_birth ||
            !email ||
            !phone ||
            !address ||
            !city ||
            !region ||
            !zip_code ||
            !institution ||
            !req.file
        )
            return res.json({ message: "Fill All The Fields" })
        const imagePath = req.file.path
        const result = await imageUploader(imagePath, "MudBeaverSikkim")
        const internData = new internshipModel({
            name,
            date_of_birth,
            email,
            phone,
            address,
            city,
            region,
            zip_code,
            institution,
            screenshot: result.secure_url,
        })
        await internData.save()
        res.status(201).send(
            "<h1>Thankyou for enrolling in this training 🙌 Now you'll be shortly directed to you respective batch on WhatsApp by one of our Admin!Hope you'll have a great time learning all about Natural Building & Sustainability🌱</h1>",
        )
    } catch (error) {
        next(error.message)
    }
}

const getInternshipData = async (req, res, next) => {
    try {
        const result = await internshipModel.find({})
        res.render("pages/internship_data", { result })
    } catch (error) {
        next(error.message)
    }
}

module.exports = { internship, internshipData, getInternshipData }
