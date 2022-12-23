import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/resume.pdf";

const Home = () => {
  const onButtonClick = () => {
    fetch(Resume).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                  <Typewriter
                    options={{
                      strings: ["Hello, I'm MD Rayhan Howlader."],
                      autoStart: true,
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Hello, I'm MD Rayhan Howlader.")
                        .callFunction(() => {
                          console.log("String typed out!");
                        })
                        .pauseFor(2500)
                        .deleteAll()
                        .callFunction(() => {
                          console.log("All strings were deleted");
                        })
                        .pasteString("Hello, I'm MD Rayhan Howlader.")
                        .callFunction(() => {
                          console.log("String typed out!");
                        })
                        .pauseFor(2500)
                        .start();
                    }}
                  />
                </h1>
                <p className="mt-8 text-xl leading-8 text-gray-900 sm:text-center font-semibold">
                  Junior Web Developer
                </p>
                <div className="text-center mt-8">
                  <button
                    onClick={onButtonClick}
                    className="border border-purple-300 text-purple-500 rounded-lg px-4 py-4 text-semibold "
                  >
                    Download Resume
                  </button>
                </div>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fill-opacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9089FC"></stop>
                      <stop offset="1" stop-color="#FF80B5"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
