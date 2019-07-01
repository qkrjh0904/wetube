import mongoose from "mongoose";

//video를 db에 저장하는것이 아니라 서버(아마존)에 저장함
//db에는 video의 link를 저장하는것임 db는 그냥 text db임
//안그럼 db가 너무 무거워짐

const VideoSchema = new mongoose.Schema({
    fileUrl:{
        type: String,
        required: "File URL is required"    //file URL이 없으면 error message생성
    },
    title:{
        type: String,
        required: "Title is required"
    },
    description: String,
    views:{
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

const model = mongoose.model("Video", VideoSchema);
export default model;