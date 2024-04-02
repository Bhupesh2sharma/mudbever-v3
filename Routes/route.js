const router = require("express").Router()
const homeController = require("../Controllers/home")
const contact = require("../Controllers/contact")
const aboutController = require("../Controllers/about")
const servicesController = require("../Controllers/services")
const internshipController = require("../Controllers/internship")
const requirementController = require("../Controllers/requirement")
const appointmentController = require("../Controllers/appointment")
const techniquesController = require("../Controllers/techniquesController")
const uploader = require("../utils/multer")
const { blog } = require("../Controllers/blog")

// Index Page

router.get("/", homeController)

// Contact Page

router.get("/contact", contact.contact)

// About Page

router.get("/about", aboutController)

// Services Page

router.get("/services", servicesController.services)

// Teams Page

router.get("/teams", (req, res) => {
    res.render("pages/team")
})

// Internship Page

router.get("/internship", internshipController.internship)

// Post Requests

//blog page route
router.get("/blog", blog)

// 1. Contact
router.post("/contact", contact.contactData)

// 2. Services

router.post("/services", servicesController.servicesPost)

// 3. Internship

router.post(
    "/internship",
    uploader.single("image"),
    internshipController.internshipData,
)

router.get("/internship-data", internshipController.getInternshipData)

// 4. Requirements

router.post("/requirements", requirementController)

// 5. Appointments

router.post("/appointment", appointmentController)

// End Post Requests

router.get("/techniques", (req, res) => {
    res.render("pages/techniques")
})

router.get("*", (req, res) => {
    res.render("pages/404")
})

module.exports = router
