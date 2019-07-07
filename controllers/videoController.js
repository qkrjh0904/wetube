import routes from "../routes";
import Video from "../models/Video";
import Comment from "../models/Comment";

// Global Router
//render의 첫 번째 인자는 templete이고, 두 번째 인자는 템플릿에 추가할 정보가 담긴 객체임
export const home = async(req, res) => {
    try{
        const videos = await Video.find({});
        res.render("home", { pageTitle : "Home", videos});
    } catch(error){
        console.log(error);
        res.render("home", { pageTitle : "Home", videos: []});
    }
};
export const search = (req, res) => { 
    const {query : { term : searchingBy }} = req;
    res.render("search", { pageTitle : 'Search', searchingBy, videos});
};

// Video Router
export const getUpload = (req, res) => res.render("upload", { pageTitle : 'Upload'});
export const postUpload = async(req, res) => {
    const{
        body: { title, description },
        file:{ path }
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle : 'Video Detail'});
export const editVideo = (req, res) => res.render("editVideo", { pageTitle : 'Edit Video'});
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle : 'Delete Video'});