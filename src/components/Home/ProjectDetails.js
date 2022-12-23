import React from "react";
import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const project = useLoaderData();
  const {
    projectName,
    imageOne,
    imageTwo,
    imageThree,
    details,
    projectLink,
    technologies,
  } = project;
  console.log(project);

  return (
    <div>
      <div>
        <div className="w-4/5 mx-auto mt-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="  shadow shadow-2xl rounded-lg">
              <img className="w-full" src={imageOne} alt="" />
            </div>
            <div className="  shadow shadow-2xl rounded-lg">
              <img className="w-full" src={imageTwo} alt="" />
            </div>
            <div className="  shadow shadow-2xl rounded-lg">
              <img className="w-full" src={imageThree} alt="" />
            </div>
          </div>
        </div>
        {/* details */}
        <div className="w-4/5 mx-auto mt-4 bg-purple-100 p-6 rounded-lg">
          <div>
            <h2 className="text-3xl font-semibold text-purple-900 mb-4">
              {projectName}
            </h2>
          </div>
          <div>
            <p className="text-medium text-slate-700">{details}</p>
            <h6 className="mt-2">
              <strong>Technologies: </strong>
              {technologies}
            </h6>
            <p className="mt-4">
              <a href={projectLink}>
                <button className="bg-purple-600 text-white hover:bg-purple-700 px-2 py-2 rounded-lg font-semibold ">
                  Visit Website
                </button>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
