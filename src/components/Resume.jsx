export const Resume = () => {
    return (
        <div className=" bg-[#fff5ef] flex flex-col items-center py-10 mt-20 " id="Resume">

            <div className="flex justify-center gap-2 mt-10 mb-20">
                <img src="https://credesign.vercel.app/onePage/onePageOne/img/orangeDot.png" />
                <p className="text-sm text-[#606060]">MY Resume</p>
            </div>

            {/* Header */}
            <div className="bg-white rounded-lg shadow-lg p-8 w-190 text-center">
                <img
                    src="https://credesign.vercel.app/onePage/onePageOne/img/bannerImg.png"
                    alt="Profile"
                    className="w-33  h-33 rounded-[200px] mx-auto mb-5 object-contain"
                />
                <h1 className="text-3xl font-bold">MD Abshar AHAMAD</h1>
                <p className="text-orange-600 text-lg">Frontend Developer</p>
                <p className="mt-2 text-gray-600">mdabsharkhan786@gmail.com | +91 9334114539 | India</p>
            </div>

            {/* About */}
            <div className="bg-white rounded-lg shadow-lg p-8 w-190 mt-8">
                <h2 className="text-2xl font-semibold text-orange-600 mb-4">About Me</h2>
                <p className="text-gray-700 leading-7">
                    I am a creative frontend developer specializing in React and Tailwind CSS, passionate about crafting clean user interfaces and seamless user experiences. I love building responsive and interactive web applications while continuously improving my skills and staying updated with modern web technologies.
                </p>
            </div>

            {/* Education */}
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full mt-8">
                <h2 className="text-2xl font-semibold text-orange-600 mb-4">Education</h2>
                <div className="">
                    <div className="text-gray-700">
                        <h3 className="font-semibold">Bachelor of Technology in Computer Science</h3>
                        <p>Vishveshwarya Group of Instituitions Greater Noida, 2021 - 2025</p>
                    </div>
                    <div className="text-gray-700">
                        <h3 className="font-semibold">Higher Secondary School(CBSE) </h3>
                        <p>DAV Centenary Public School,Dhanbad,Jharkhand, 2019 - 2020</p>
                    </div>
                </div>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full mt-8">
                <h2 className="text-2xl font-semibold text-orange-600 mb-4">Experience</h2>
                <div className="text-gray-700 space-y-4">
                    <div>
                        <h3 className="font-semibold">Frontend Developer - Codsoft Pvt Ltd Company</h3>
                        <p className="text-sm text-gray-500">June 2024 - July 2024</p>
                        <p>Worked on building responsive websites with React and Tailwind, collaborating with designers to bring mockups to production.</p>
                    </div>
                </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full mt-8 mb-10">
                <h2 className="text-2xl font-semibold text-orange-600 mb-4">Skills</h2>
                <div className="space-y-4">
                    {[
                        { skill: "React", level: "90" },
                        { skill: "Tailwind CSS", level: "85" },
                        { skill: "JavaScript", level: "80" },
                        { skill: "HTML & CSS", level: "95" },
                    ].map(({ skill, level }) => (
                        <div key={skill}>
                            <div className="flex justify-between mb-1">
                                <span>{skill}</span>
                                <span>{level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: `${level}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};
