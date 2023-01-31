import {Outlet, useNavigate} from "react-router-dom";
import {Header} from "../Header/Header";

const MainLayouts = () => {
    const navigete = useNavigate()
 return (
  <div>
      <Header/>
      <button onClick={()=>navigete(-1)}>back</button>
      <button onClick={()=>navigete(1)}>next</button>
      <Outlet/>
  </div>
 );
};

export {MainLayouts};