import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  console.log(project);
  const { id, projectName, imageOne, details } = project;
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src={imageOne} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{projectName}</div>
        <p class="text-gray-700 text-base">
          {details?.length > 100 ? details.slice(0, 100) + "..." : details}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <Link to={`/project/${id}`}>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            View Details
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
