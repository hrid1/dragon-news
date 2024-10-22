import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import swiming from "../../assets/qZone1.png";
import classr from "../../assets/qZone2.png";
import playgrd from "../../assets/qZone3.png";
import add from "../../assets/bg1.png";

const RightSide = () => {
  return (
    <div className="bg-base-100 space-y-6 ">
      <section className="">
        <h2 className="text-xl font-bold mb-4 ">Login With</h2>
        <div className=" space-y-4">
          <button className="w-full border border-blue-500 text-blue-600 bg-gray-200 rounded btn ">
            <FaGoogle></FaGoogle> Login With Google
          </button>
          <button className="w-full border border-gray-800 text-gray-600 bg-gray-200 rounded btn">
            <FaGithub /> Login With Github
          </button>
        </div>
      </section>

      {/* find us on */}
      <section className="w-11/12">
        <h2 className="text-xl font-bold mb-4">Find Us On</h2>
        <div className="border border-b-0 rounded-t border-gray-400 p-4 flex items-center gap-2">
          <FaFacebook className="text-lg text-blue-600 "></FaFacebook>
          <h4>Facebook</h4>
        </div>
        <div className="border border-gray-400 p-4 flex items-center gap-2 ">
          <FaTwitter className="text-lg text-blue-400"></FaTwitter>
          <h4>Twitter</h4>
        </div>
        <div className="border border-t-0 rounded-b border-gray-400 p-4 flex items-center gap-2">
          <FaInstagram className="text-lg text-red-500"></FaInstagram>
          <h4>Instagram</h4>
        </div>
      </section>

      {/* Q zone */}
      <section className=" bg-gray-200 w-full p-1 rounded ">
        <h2 className="text-xl font-bold mb-4 ">Q-Zone</h2>
        <div className=" space-y-4">
          <img src={swiming} alt="" />
          <img src={classr} alt="" />
          <img src={playgrd} alt="" />
        </div>
      </section>

      {/* add  */}
      <section className="relative w-11/12 mx-auto">
        <div
          className="bg-cover bg-center w-full min-h-[35vh] "
          style={{ backgroundImage: `url(${add})`, height: "100%" }}
        ></div>

        <div className="absolute inset-0  bg-black opacity-60 flex items-center justify-center text-center">
          <div className="space-y-8 px-5">
            <h1 className="text-white text-2xl font-semibold">Create an Amazing NewsPaper</h1>
            <p className="text-white px-4">Lorem iplor lorme4
              Lorem ipsum dolor sit. Lorem ipsum dolor sit amet. okayb boss Lorem ipsum dolor sit amet.</p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RightSide;
