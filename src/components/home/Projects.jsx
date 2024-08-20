import seeall from "../../assets/seeall.svg";
import ViewProjectButton from "../../assets/ViewProjectButton.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_projects } from "../../../store/reducers/homeReducer";
const Projects = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.home);
  useEffect(() => {
    dispatch(get_projects());
  }, []);
  return (
    <div className="w-[62.2661rem] mx-auto">
      <h2 className=" text-white text-center font-syne text-[2.5rem] font-bold w-[53.5625rem] mx-auto mb-[6.25rem]">
        We Work to Craft Solid Products <br /> &{" "}
        <span className=" text-jaguar bg-white px-2">Project</span> For You
      </h2>
      <div className="flex flex-wrap justify-between items-start grid-bg pb-[8.67rem]">
        {projects.length > 5
          ? projects.slice(0, 5).map((p, i) => (
              <div
                key={i}
                className={`relative group w-[25.375rem] ${
                  i % 2 === 0 ? "mt-0" : "mt-20"
                }`}
              >
                <div className="mb-[1.5rem]">
                  <img src={p.images[0]} alt="" className="h-[38rem]" />
                </div>
                <h4 className=" text-white font-syne text-[1.875rem] font-medium mb-[0.12rem]">
                  {p.projectName}
                </h4>
                <p className=" text-white font-nunito text-lg">{p.service}</p>
                <Link
                  to={`/project/${p._id}`}
                  className=" group-hover:opacity-100 group-hover:-right-[14%] group-hover:visible opacity-0 transition-all duration-200 ease-linear absolute top-[150px] -right-[20%] invisible"
                >
                  <img src={ViewProjectButton} alt="" />
                </Link>
              </div>
            ))
          : projects.map((p, i) => (
              <div
                key={i}
                className={`relative group w-[25.375rem] ${
                  i % 2 === 0 ? "mt-0" : "mt-20"
                }`}
              >
                <div className="mb-[1.5rem]">
                  <img src={p.images[0]} alt="" className="h-[38rem]" />
                </div>
                <h4 className=" text-white font-syne text-[1.875rem] font-medium mb-[0.12rem]">
                  Website Design
                </h4>
                <p className=" text-white font-nunito text-lg">Web Design</p>
                <Link
                  to={`/project/${p._id}`}
                  className=" group-hover:opacity-100 group-hover:-right-[14%] group-hover:visible opacity-0 transition-all duration-200 ease-linear absolute top-[150px] -right-[20%] invisible"
                >
                  <img src={ViewProjectButton} alt="" />
                </Link>
              </div>
            ))}

        <div
          className={`w-[406px] cursor-pointer ${
            projects.length > 5 ? "pt-[147px]" : "pt-0"
          }`}
        >
          <Link to={"/work"}>
            <img src={seeall} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
