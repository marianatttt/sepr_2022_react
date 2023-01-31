
import {useLocation, useParams} from "react-router-dom";
import {PostDetail} from "../../components";

const DetailsPage = () => {
 const {postId} = useParams();
  const {state} = useLocation()
 return (
  <div>
       <PostDetail postId={postId} state={state}/>
  </div>
 );
};

export {DetailsPage};