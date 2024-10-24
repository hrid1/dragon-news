import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Navbar from "../../components/common/Navbar";
import Marquee from "react-fast-marquee";
import RightSide from "../../components/common/RightSide";
import LeftSide from "../../components/others/LeftSide";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../../components/others/NewsCard";
import { useEffect, useState } from "react";

const Home = () => {
  const allnews = useLoaderData() || [];
  const [news, setNews] = useState(allnews);

  if (!Array.isArray(news)) {
    // return <h3>There is no news</h3>
    useEffect(() => {
      setNews(useLoaderData());
    }, [allnews]);
  }

  console.log(news);

  return (
    <div className="container mx-auto">
      <Header></Header>
      {/* <marquee behavior="" direction="">mell</marquee> */}
      <div className="flex items-center bg-gray-300 p-2">
        <button className="btn btn-primary rounded text-lg">Latest</button>

        <Marquee speed={80}>
          I can be a React component, multiple React components, or just some
          components, or just some text.
        </Marquee>
      </div>
      <Navbar></Navbar>

      <div className="grid grid-cols-4 gap-6">
        <div className=" col-span-1 border ">
          <LeftSide></LeftSide>
        </div>
        <div className=" col-span-2 ">
          <h2 className="text-xl font-semibold">Dragon News Home</h2>
          {/* news */}

          {news.map((anews) => (
            <NewsCard key={anews._id} news={anews}></NewsCard>
          ))}
        </div>
        <div className=" col-span-1 ">
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default Home;
