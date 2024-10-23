import { useParams } from "react-router-dom";
import Header from "../common/Header";
import RightSide from "../common/RightSide";
import Navbar from "../common/Navbar";

const SingleNews = () => {
  const { id } = useParams();
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Navbar></Navbar>

      <section className="grid md:grid-cols-4">
        <div className=" col-span-3">

            <h1>Your News : {id}</h1>
        </div>
        
        <div className=" col-span-1">
          {/* <RightSide></RightSide> */}
        </div>
      </section>
    </div>
  );
};

export default SingleNews;
