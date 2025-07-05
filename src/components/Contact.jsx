export const Contact = () => {

    let data = [
        {
            icon: "/src/assets/map.svg",
            head: "Address",
            para: "202 Dog Hill Lane Beloit, KS 67420"
        },
        {
            icon: "/src/assets/phone.svg",
            head: "Phone",
            para: "+12478415329"
        },
        {
            icon: "/src/assets/email.svg",
            head: "Email",
            para: "credesign@gmail.com"
        }
    ]
    return (
        <div id="Contact">
            <div className="mt-27">
                <div className="flex justify-center gap-2">
                    <img src="https://credesign.vercel.app/onePage/onePageOne/img/orangeDot.png" />
                    <p className="text-sm text-[#606060]">My Contact</p>
                </div>
                <h1 className="text-center text-4xl font-bold mt-10">I WANT TO HEAR FROM YOU</h1>
            </div>
            <div className="flex justify-between">
                <form className="max-w-2xl w-full ml-24 space-y-4 mt-10 px-4">

                    <div className="flex flex-row gap-5 w-190 ">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="border border-orange-300 rounded-lg px-10  focus:outline-none focus:border-[#acfb5c] transition-colors duration-300 w-160 "
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="border border-orange-300 rounded-lg px-10  py-5 focus:outline-none focus:border-[#acfb5c] transition-colors duration-300 w-160"
                        />
                    </div>

                    {/* Second Row */}
                    <div className="flex flex-row gap-5 w-190 h-17.5 ">
                        <input
                            type="text"
                            placeholder="Your Phone"
                            className="border border-orange-300 rounded-lg px-10  focus:outline-none focus:border-[#acfb5c] transition-colors duration-300 w-160 "
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="border border-orange-300 rounded-lg px-10  focus:outline-none focus:border-[#acfb5c] transition-colors duration-300 w-160 "
                        />
                    </div>

                    {/* Message */}
                    <textarea
                        placeholder="Message"
                        rows={5}
                        className="border border-orange-300 rounded-lg px-10 pt-5 h-25 focus:outline-none focus:border-[#acfb5c] transition-colors duration-300 w-190 "
                    ></textarea>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="border-1 px-15 rounded-[6px] bg-orange-600 font-semibold text-white text-lg py-2"
                    >
                        Send Me Message
                    </button>
                </form>

                <div className="flex flex-col gap-12 mt-8 mr-30 px-4">
                    {data.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                            {/* Icon Box */}
                            <div className="bg-[#f2b188] p-4 rounded-xl flex items-center justify-center">
                                <img src={item.icon} alt={item.head} className="w-6 h-6 object-contain" />
                            </div>

                            {/* Text */}
                            <div>
                                <h2 className="text-[20px] font-semibold">{item.head}</h2>
                                <p className="text-sm text-black mt-1">{item.para}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}