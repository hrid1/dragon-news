import { MdCheckBox } from "react-icons/md";
import Navbar from "../../components/common/Navbar";

const Register = () => {
  return (
    <>
      <Navbar></Navbar>

      <section className="flex items-center justify-center min-h-[calc(100vh-68px)]">
        <form className="w-4/5 md:w-3/5 lg:w-2/5 mx-auto space-y-5 bg-white rounded-md p-4 ">
          <h1 className="text-3xl font-bold text-center my-2">
            Register your account
          </h1>
          <hr />
          <div className=" space-y-3.5">
            <label className="text-lg font-bold" htmlFor="username">
              Your Name
            </label>
            <br />
            <input
              type="text"
              name="username"
              id="username"
              className="border bg-gray-100 p-3 w-full rounded"
              placeholder="Enter your name"
            />
          </div>
          <div className=" space-y-3.5">
            <label className="text-lg font-bold" htmlFor="username">
              Photo URL
            </label>
            <br />
            <input
              type="text"
              name="photo"
              id="photo"
              className="border bg-gray-100 p-3 w-full rounded"
              placeholder="Enter photo link"
            />
          </div>
          <div className=" space-y-3.5">
            <label className="text-lg font-bold" htmlFor="username">
              Email
            </label>
            <br />
            <input
              type="text"
              name="email"
              id="email"
              className="border bg-gray-100 p-3 w-full rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className=" space-y-3.5">
            <label className="text-lg font-bold" htmlFor="username">
              Password
            </label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              className="border bg-gray-100 p-3 w-full rounded"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex gap-2">
            <input type="checkbox" className="text-2xl w-5" />
            <p className=" text-gray-500 ">
              Accept <span className=" font-semibold">Term & Conditions</span>
            </p>
          </div>

          <button className="btn bg-black text-white w-full font-semibold">
            Register
          </button>
        </form>
      </section>
    </>
  );
};

export default Register;
