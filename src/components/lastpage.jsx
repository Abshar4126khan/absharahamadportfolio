import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";

export const Lastpage = () => {
    return (
        <footer className="bg-black text-white mt-40  ">
            <div className="flex ml-30 gap-25">
                {/* 1 */}
                <div className="max-w-xs">
                    <img
                        src="https://credesign.vercel.app/onePage/onePageOne/img/Logo.png"
                        className="invert mb-12 mt-30"
                    />
                    <p className="text-sm font-semibold mb-9">At vero eos et accusamus et iusto odio dign ducimus qui blanditiis praesentium volup deleniti atque corrupti quos dolores et molestias excepturi sint occaecati</p>
                    <h2 className="text-lg font-semibold">credesign@gmail.com</h2>
                </div>
                {/* 2 */}
                <div className="mt-32">
                    <h3 className="font-semibold mb-12">Explore Link</h3>
                    <ul className="space-y-6 mt-5 text-sm">
                        <li>About</li>
                        <li>Resume</li>
                        <li>Portfolio</li>
                        <li>Blog</li>
                    </ul>
                </div>
                {/* 3 */}

                <div className="mt-32">
                    <h3 className="font-semibold mb-12">My Services</h3>
                    <ul className="space-y-6 mt-5 text-sm">
                        <li>UI/UX Design</li>
                        <li>Mobile App</li>
                        <li>Graphics Design</li>
                        <li>Web Developer</li>
                    </ul>
                </div>

                {/* 4 */}

                <div className="ml-4 mt-32">
                    <h3 className="text-lg font-semibold mb-12">Follow me</h3>
                    <div className="flex gap-3 mb-4">
                        <div className="bg-orange-500 p-3  rounded-sm flex items-center justify-center hover:bg-orange-600 transition cursor-pointer">
                            <i className="fab fa-facebook-f text-white text-lg"></i>
                        </div>
                        <div className="bg-orange-500 p-3 rounded-sm flex items-center justify-center hover:bg-orange-600 transition cursor-pointer">
                            <i className="fab fa-twitter text-white text-lg"></i>
                        </div>
                        <div className="bg-orange-500 p-3 rounded-sm flex items-center justify-center hover:bg-orange-600 transition cursor-pointer">
                            <i className="fas fa-basketball-ball text-white text-lg"></i>
                        </div>
                        <div className="bg-orange-500 p-3 rounded-sm flex items-center justify-center hover:bg-orange-600 transition cursor-pointer">
                            <i className="fab fa-behance text-white text-lg"></i>
                        </div>
                    </div>
                    <div className="flex mt-7 text-center">
                        <FaMapMarkerAlt className="text-orange-500 w-6 h-5" />
                        <span>202 Dog Hill Lane Beloit,KS 67420</span>
                    </div>
                    <div className="flex mt-5">
                        <MdOutlinePhoneInTalk className="text-orange-500 w-6 h-5" />
                        <span>1-800-915-6270</span>
                    </div>
                </div>

            </div>
            <div className="border-t border-gray-700  flex flex-col md:flex-row justify-between items-center px-6 py-4 text-sm mt-28 h-22">
                <p className="mb-2 md:mb-0 ml-20 text-[15px]">All rights reserved © 2023 Credesign</p>
                <div className="flex gap-20 mr-20 text-[15px]">
                    <p className="cursor-pointer hover:text-orange-500 transition">Terms & Condition</p>
                    <p className="cursor-pointer hover:text-orange-500 transition">Privacy Policy</p>
                </div>
            </div>

        </footer>
    )
}