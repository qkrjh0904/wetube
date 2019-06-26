// Global Router
//render의 첫 번째 인자는 templete이고, 두 번째 인자는 템플릿에 추가할 정보가 담긴 객체임
export const home = (req, res) => res.render("home", { pageTitle : 'Home'});
export const search = (req, res) => {
    const {query : { term : searchingBy }} = req;
    res.render("search", { pageTitle : 'Search', searchingBy});
};

// Video Router
export const videos = (req, res) => res.render("videos", { pageTitle : 'Videos'});
export const upload = (req, res) => res.render("upload", { pageTitle : 'Upload'});
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle : 'Video Detail'});
export const editVideo = (req, res) => res.render("editVideo", { pageTitle : 'Edit Video'});
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle : 'Delete Video'});