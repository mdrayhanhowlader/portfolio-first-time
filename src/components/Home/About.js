import React from "react";

const About = () => {
  return (
    <div className="w-4/5 mx-auto">
      <div class="overflow-hidden bg-white shadow sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg font-medium leading-6 text-gray-900">About Me</h3>
          <p class="mt-1 max-w-2xl text-md text-gray-500">Personal details.</p>
        </div>
        <div class="border-t border-gray-200 ">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-md font-medium text-gray-500">Full name</dt>
              <dd class="mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0">
                MD Rayhan Howlader
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-md font-medium text-gray-500">Profession</dt>
              <dd class="mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0">
                Junior Web Developer
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-md font-medium text-gray-500">Email address</dt>
              <dd class="mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0">
                rhowlader5314@gmail.com
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-md font-medium text-gray-500">Skills</dt>
              <dd class="mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0">
                HTML, CSS3, Bootstrap, Tailwind CSS, Javascript(ES6), React Js,
                React Router DOM, Express js, MongoDB, Node js, Firebase,
                Netlify, Vercel etc.
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-md font-medium text-gray-500">About</dt>
              <dd class="mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0">
                I'm MD Rayhan Howlader. I have been learning programming for 3
                years. But I seriously started to gather project based
                programming knowledge for a year. I have started seriously with
                programming hero this year 2022. I have learned so many things
                in just 5 months till learning day by day and improving myself.
                Before started with them I was totally unguided. But now I can
                create a full projects frontend and backend myself without
                getting helps other also without help of them. I have learned
                React js, Express js, MongoDB also Node js. Without these I have
                learned so many things like Html, CSS, Javascript(ES6),
                Bootstrap, Tailwind CSS, Tailwind Libraries like Daisy UI,
                Flowbite etc. I have comfortable with Firebase, Rest API's for
                doing my work easy. In These long learning session I have
                completed few more projects with React js, MongoDB, Node Js,
                Firebase, Express js, Tailwind and Bootstrap. Few of my projects
                link in my project area I uploaded for show you. You can explore
                them by clicking on top Project nav. Thank you for reading about
                me.
              </dd>
            </div>
            {/* <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-md font-medium text-gray-500">Attachments</dt>
              <dd class="mt-1 text-md text-gray-900 sm:col-span-2 sm:mt-0">
                <ul
                  role="list"
                  class="divide-y divide-gray-200 rounded-md border border-gray-200"
                >
                  <li class="flex items-center justify-between py-3 pl-3 pr-4 text-md">
                    <div class="flex w-0 flex-1 items-center">
                      <svg
                        class="h-5 w-5 flex-shrink-0 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="ml-2 w-0 flex-1 truncate">
                        resume_back_end_developer.pdf
                      </span>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <a
                        href="#"
                        class="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li class="flex items-center justify-between py-3 pl-3 pr-4 text-md">
                    <div class="flex w-0 flex-1 items-center">
                      <svg
                        class="h-5 w-5 flex-shrink-0 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="ml-2 w-0 flex-1 truncate">
                        coverletter_back_end_developer.pdf
                      </span>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <a
                        href="#"
                        class="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div> */}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default About;
