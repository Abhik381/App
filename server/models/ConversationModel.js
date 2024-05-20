const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({
    text: {
        type: String,
        default: ""
    },
    imageUrl: {
        type: String,
        default: ""
    },
    videoUrl: {
        type: String,
        default: ""
    },
    seen: {
        type: Boolean,
        default: false
    }
},{timestamps: true})

const ConversationSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    recever: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message"
        }
    ]
},{timestamps: true})

const ConversationModel = mongoose.model("Conversation", ConversationSchema)
const MessageModel = mongoose.model("Message", MessageSchema)

module.exports = {ConversationModel,MessageModel}