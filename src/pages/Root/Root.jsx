import { Outlet } from "react-router-dom";
import Home from "../Home/Home";

const Root = () => {
  return (
    <div className="font-Popins">
    
      <Outlet></Outlet>
      {/* <Home></Home> */}
    </div>
  );
};

export default Root;
