import { FaCalendar } from "react-icons/fa";
import editor1 from "../../assets/editorsInsight1.png";
import editor2 from "../../assets/editorsInsight2.png";
import editor3 from "../../assets/editorsInsight3.png";
import { useEffect, useState } from "react";

const LeftSide = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("categories.json")
        .then(res => res.json()
        .then(data => setCategories(data))
    )
    }, [])
    // console.log(categories)
  return (
    <div className="bg-b">
      {/* category */}
      <section>
        <h2 className="text-lg font-bold">All Category</h2>

        <div>
            <div className="p-4 font-semibold text-gray-500">National News</div>
            {
               categories.map(category => <p className="p-4 font-semibold text-gray-500 " key={category.id}>{category.name}</p> )
            }
        </div>
      </section>

      {/* suggest */}
      <section className=" p-1">
        <div className=" space-y-2 mb-6">
          <img src={editor1} alt="" />
          <h3 className="text-lg font-semibold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            maiores
          </h3>
          <div className="flex gap-4 ">
            <p>Sports</p>
            <span className="text-gray-500 flex items-center gap-2">
              <FaCalendar></FaCalendar>
              January 4, 2034
            </span>
          </div>
        </div>
        <div className=" space-y-2 mb-6">
          <img src={editor2} alt="" />
          <h3 className="text- font-semibold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            maiores
          </h3>
          <div className="flex gap-4">
            <p>Sports</p>
            <span className="text-gray-500 flex items-center gap-2">
              <FaCalendar></FaCalendar>
              January 4, 2034
            </span>
          </div>
        </div>
        <div className=" space-y-2 mb-6">
          <img src={editor3} alt="" />
          <h3 className="text-lg font-semibold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            maiores
          </h3>
          <div className="flex gap-4">
            <p>Sports</p>
            <span className="text-gray-500 flex items-center gap-2">
              <FaCalendar></FaCalendar>
              January 4, 2034
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeftSide;
