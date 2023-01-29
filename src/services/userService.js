import {axiosService} from "./axiosService";
import {urls} from "../configs";

const userService = {
    getAll:()=>axiosService.get(urls.users),
    create:(data)=>axiosService.post(urls.users, data)
}

export {
    userService
}