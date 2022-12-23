import React from "react";
import { useLoaderData } from "react-router-dom";
import ProjectCard from "./ProjectCard";
// import ProjectOne from "../../assets/project1.png";

const Projects = () => {
  const projects = useLoaderData([]);
  console.log(projects);
  return (
    // <div>
    //   <section class="text-gray-600 body-font">
    //     <div class="container px-5 py-24 mx-auto">
    //       <div class="flex flex-wrap -m-4">
    //         <div class="p-4 md:w-1/3">
    //           <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
    //             <img
    //               class="lg:h-48 md:h-36 w-full object-cover object-center"
    //               src={ProjectOne}
    //               alt="blog"
    //             />
    //             <div class="p-6">
    //               <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
    //               <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
    //                 Autolines
    //               </h1>
    //               <p class="leading-relaxed mb-3">
    //                 This is used car selling and buying website. people can sell
    //                 and buy their cars easily. Also they can make payment via
    //                 stripe. Admin will manage everything link payment etc.
    //               </p>
    //               <div class="flex items-center flex-wrap ">
    //                 <a
    //                   href="https://autolines-fcc93.web.app/"
    //                   class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
    //                 >
    //                   Visit Website
    //                   <svg
    //                     class="w-4 h-4 ml-2"
    //                     viewBox="0 0 24 24"
    //                     stroke="currentColor"
    //                     stroke-width="2"
    //                     fill="none"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                   >
    //                     <path d="M5 12h14"></path>
    //                     <path d="M12 5l7 7-7 7"></path>
    //                   </svg>
    //                 </a>
    //                 {/* <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
    //                   <svg
    //                     class="w-4 h-4 mr-1"
    //                     stroke="currentColor"
    //                     stroke-width="2"
    //                     fill="none"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    //                     <circle cx="12" cy="12" r="3"></circle>
    //                   </svg>
    //                   1.2K
    //                 </span> */}
    //                 {/* <span class="text-gray-400 inline-flex items-center leading-none text-sm">
    //                   <svg
    //                     class="w-4 h-4 mr-1"
    //                     stroke="currentColor"
    //                     stroke-width="2"
    //                     fill="none"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
    //                   </svg>
    //                   6
    //                 </span> */}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="p-4 md:w-1/3">
    //           <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
    //             <img
    //               class="lg:h-48 md:h-36 w-full object-cover object-center"
    //               src={ProjectTwo}
    //               alt="blog"
    //             />
    //             <div class="p-6">
    //               <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
    //               <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
    //                 Green Focus
    //               </h1>
    //               <p class="leading-relaxed mb-3">
    //                 This was a service selling website that I made with react
    //                 completely. This was made for personal photographer who
    //                 loved to take picture from nature
    //               </p>
    //               <div class="flex items-center flex-wrap">
    //                 <a
    //                   href="https://green-focus-auth.web.app/"
    //                   class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
    //                 >
    //                   Visit Website
    //                   <svg
    //                     class="w-4 h-4 ml-2"
    //                     viewBox="0 0 24 24"
    //                     stroke="currentColor"
    //                     stroke-width="2"
    //                     fill="none"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                   >
    //                     <path d="M5 12h14"></path>
    //                     <path d="M12 5l7 7-7 7"></path>
    //                   </svg>
    //                 </a>
    //                 {/* <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
    //                   <svg
    //                     class="w-4 h-4 mr-1"
    //                     stroke="currentColor"
    //                     stroke-width="2"
    //                     fill="none"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    //                     <circle cx="12" cy="12" r="3"></circle>
    //                   </svg>
    //                   1.2K
    //                 </span> */}
    //                 {/* <span class="text-gray-400 inline-flex items-center leading-none text-sm">
    //                   <svg
    //                     class="w-4 h-4 mr-1"
    //                     stroke="currentColor"
    //                     stroke-width="2"
    //                     fill="none"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
    //                   </svg>
    //                   6
    //                 </span> */}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="p-4 md:w-1/3">
    //           <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
    //             <img
    //               class="lg:h-48 md:h-36 w-full object-cover object-center"
    //               src={ProjectThree}
    //               alt="blog"
    //             />
    //             <div class="p-6">
    //               <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
    //               <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
    //                 Prussian Quiz
    //               </h1>
    //               <p class="leading-relaxed mb-3">
    //                 This Website was related to online quiz test. When you are
    //                 learning something but you are missing exam and test. For
    //                 This purpose I created this website.
    //               </p>
    //               <div class="flex items-center flex-wrap ">
    //                 <a
    //                   href="https://thunderous-bavarois-d602d1.netlify.app/"
    //                   class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
    //                 >
    //                   Visit Website
    //                   <svg
    //                     class="w-4 h-4 ml-2"
    //                     viewBox="0 0 24 24"
    //                     stroke="currentColor"
    //                     stroke-width="2"
    //                     fill="none"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                   >
    //                     <path d="M5 12h14"></path>
    //                     <path d="M12 5l7 7-7 7"></path>
    //                   </svg>
    //                 </a>
    //                 {/* <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
    //                   <svg
    //                     class="w-4 h-4 mr-1"
    //                     stroke="currentColor"
    //                     stroke-width="2"
    //                     fill="none"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    //                     <circle cx="12" cy="12" r="3"></circle>
    //                   </svg>
    //                   1.2K
    //                 </span> */}
    //                 {/* <span class="text-gray-400 inline-flex items-center leading-none text-sm">
    //                   <svg
    //                     class="w-4 h-4 mr-1"
    //                     stroke="currentColor"
    //                     stroke-width="2"
    //                     fill="none"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
    //                   </svg>
    //                   6
    //                 </span> */}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <div>
      <div className="w-4/5 mx-auto grid md:grid-cols-3 gap-6 py-16">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
