import { FaBookmark, FaEye, FaShare } from "react-icons/fa";
import { auth } from "../../firebase/firebase.config";
import { FaShareNodes } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const NewsCard = ({ news }) => {
  const {
    _id,
    author,
    details,
    image_url,
    rating,
    thumbnail_url,
    title,
    total_view,
  } = news;

  return (
    <>
      <div className="border border-gray-300  mb-6 rounded-md shadow-md">
        <header className="bg-gray-200 p-2.5 flex justify-between items-center">
          <div className="flex gap-4">
            <img className="w-12 h-12 rounded-full" src={author.img} alt="" />
            <div>
              <div>
                <p className=" font-bold">{author?.name}</p>
                <p>{author?.published_date?.split(" ")[0]}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 opacity-70">
            <FaBookmark></FaBookmark>
            <FaShareNodes></FaShareNodes>
          </div>
        </header>

        <section className="p-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <img className="my-6" src={image_url} alt="" />
          <p>
            {details.length < 200 ? (
              <p>{details}</p>
            ) : (
              <>
                <p>{details.slice(0, 200)}...</p>
                <Link to={`/news/${_id}`} className="text-orange-500 font-bold text-lg">Read More</Link>
              </>
            )}
          </p>
        </section>

        {/* <div className="border bg-black h-1"></div> */}
        <hr className="bg-gray-300 my- h-[3px] w-11/12 mx-auto" />

        <div>
          <hr />
        </div>

        <footer className=" flex justify-between p-4 ">
          <div className="flex gap-3 ">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className=" font-semibold mt-0.5">4.7</p>
          </div>

          <div className="flex items-center gap-3">
            <FaEye></FaEye>
            <span>{total_view}</span>
          </div>
        </footer>
      </div>
    </>
  );
};

NewsCard.propTypes = {
    news: PropTypes.object.isRequired,
}


export default NewsCard;
