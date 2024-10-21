import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Navbar from "../../components/common/Navbar";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Header></Header>
      {/* <marquee behavior="" direction="">mell</marquee> */}
      <div className="flex items-center bg-gray-300 p-2">
        <button className="btn btn-primary rounded text-lg">Latest</button>

        <Marquee speed={80} >
          I can be a React component, multiple React components, or just some
          components, or just some text.
        </Marquee>
      </div>
      <Navbar></Navbar>
      <h1>This is home</h1>

      <div className="grid grid-cols-4 gap-6">
        <div className=" col-span-1 border bg-white">left</div>
        <div className=" col-span-2 border bg-white">center</div>
        <div className=" col-span-1 border bg-white">left</div>
      </div>
    </div>
  );
};

export default Home;
