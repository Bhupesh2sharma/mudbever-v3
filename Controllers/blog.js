const { BlogModel } = require("../Model/blog.model")
const blog = async (req, res) => {
    const blogs = await BlogModel.find({})
    res.render("pages/blog", {
        data: blogs,
    })
}

module.exports = { blog }
