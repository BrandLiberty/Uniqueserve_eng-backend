import mongoose from "mongoose"; //ODM Object Document Mapper

const contactSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    contactNumber: {
        type: String
    },
    message: {
        type: String
    },
}, {
    timestamps: true,
})

const Contact = mongoose.model('Contact', contactSchema)

export default Contact