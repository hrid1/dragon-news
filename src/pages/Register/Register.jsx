import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  console.log(createUser);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const username = form.get("username");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // console.log(form.get('email'));
    // console.log(username, photo, email, password)
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, {
          displayName: username,
          photoURL: photo,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Navbar></Navbar>

      <section className="flex items-center justify-center min-h-[calc(100vh-68px)]">
        <form
          onSubmit={handleRegister}
          className="w-4/5 md:w-3/5 lg:w-2/5 mx-auto space-y-4 bg-white rounded-md p-6 md:px-10 "
        >
          <h1 className="text-3xl font-semibold text-center ">
            Register your account
          </h1>
          <hr />
          <div className=" space-y-3.5">
            <label className="text-lg font-semibold" htmlFor="username">
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
            <label className="text-lg font-semibold" htmlFor="username">
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
            <label className="text-lg font-semibold" htmlFor="username">
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
            <label className="text-lg font-semibold" htmlFor="username">
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

          <div className=" text-center">
            <p className="text-sm">
              Already Have An Account?{" "}
              <Link to="/login" className="text-red-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
