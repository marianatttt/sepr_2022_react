import {axiosService} from "./axiosService";
import {urls} from "../configs";

const commentService = {
    getAll:()=>axiosService.get(urls.comments),
    create:(data)=>axiosService.post(urls.users, data)
}

export {
    commentService
}