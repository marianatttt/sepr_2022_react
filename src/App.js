import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutPage, DetailsPage, HomePage, NotFoundPage, PostsPage, UsersPage} from "./pages";

import {MainLayouts} from "./layouts";


const App = () => {
    return (
    <div>
        <Routes>
                <Route pach = {'/'} element={<MainLayouts/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':postId'} element={<DetailsPage/>}/>
                    </Route>

                    <Route path={'about'} element={<AboutPage/>}/>
                </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    </div>
    );
};

export {
    App
}