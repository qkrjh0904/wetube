import multer from "multer";
import routes from "./routes";

export const multerVideo = multer({dest: "uploads/videos/"});

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 123
    }
    next();
};

export const uploadVideo = multerVideo.single("videoFile");