import {Route, Routes} from "react-router-dom";
import {AlbumPage, CommentsPage, NotFoundPage, PostByIdPage, TodosPage} from "./pages";
import {MainLayot} from "./layouts";

const App = () => {

 return (
     <div>
     <Routes>
         <Route path={'/'} element={<MainLayot/>}>
            <Route path={'todos'} element={<TodosPage/>}/>
            <Route path={'albums'} element={<AlbumPage/>}/>
            <Route path={'comments'} element={<CommentsPage/>}>
               <Route path={'postId'} element={<PostByIdPage/>}/>
            </Route>
         </Route>
         <Route path={'*'} element={<NotFoundPage/>}/>
     </Routes>
     </div>
 );
};

export {App};