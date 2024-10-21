import moment from "moment";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="text-center space-y-2.5 mt-10 mb-6">
      <div>
        <img className="mx-auto" src={logo} alt="" />
      </div>
      <p className="text-gray-500">Journalism Without Fear of Favoure</p>
      {/* <h3>{moment().format("dddd, MMMM D, YYYY")}</h3> */}
      <h3>
        <span className="font-semibold">{moment().format("dddd")},</span>
        {moment().format(" MMMM D, YYYY")}
      </h3>
    </div>
  );
};

export default Header;
