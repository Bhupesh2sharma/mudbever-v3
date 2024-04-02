const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: "dvioldntl",
    api_key: "984391433885796",
    api_secret: "LBpeK5EjUozyX3HmDnhDBw3XrwI",
})

const imageUploader = async (imagePath, folderName) => {
    try {
        const result = await cloudinary.uploader.upload(imagePath, {
            folder: `${folderName}`,
        })
        return result
    } catch (error) {
        throw Error(error.message)
    }
}

module.exports = imageUploader
