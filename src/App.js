// import React, {useEffect, useState} from 'react';
// import {UserForm, Users} from "./components";
// import {userService} from "./services";
//
//
// const App = () => {
//
//     const [users, setUsers] = useState([]);
//
//     useEffect(() => {
//         userService.getAll().then(({data}) => setUsers([...data]))
//     }, [])
//
//     return (
//         <div>
//           <UserForm setUsers={setUsers}/>
//             <hr/>
//             <Users users={users}/>
//         </div>
//     );
// };
//
// export {App};



import {CommentForm, Comments} from "./components";
import {useEffect, useState} from "react";
import {commentService} from "./services";

const App = () => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments([...data]))
    }, [])

 return (
  <div>
      <CommentForm setComments={setComments}/>
      <hr/>
      <Comments comments={comments}/>
  </div>
 );
};

export {App};