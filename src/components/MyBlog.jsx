export const MyBlog = () => {
    let data = [
        {
            img: "https://credesign.vercel.app/onePage/onePageOne/img/blogOne.png",
            para: "20 january, 2025",
            head: "Become a UX/UI Designer With Carrer Foundry",
            lastpara: "Read More"
        },
        {
            img: "https://credesign.vercel.app/onePage/onePageOne/img/blogOne.png",
            para: "20 january, 2025",
            head: "Become a UX/UI Designer With Carrer Foundry",
            lastpara: "Read More"
        },
        {
            img: "https://credesign.vercel.app/onePage/onePageOne/img/blogOne.png",
            para: "20 january, 2025",
            head: "Become a UX/UI Designer With Carrer Foundry",
            lastpara: "Read More"
        }
    ]
    return (
        <div id="Blog">
            <div className="mt-24">
                <div className="flex justify-center gap-2">
                    <img src="https://credesign.vercel.app/onePage/onePageOne/img/orangeDot.png" />
                    <p className="text-sm text-[#606060]">My Blog</p>
                </div>
                <h1 className="text-center text-4xl font-bold mt-2">LATEST BLOG</h1>
            </div>

            <div className="flex justify-center gap-7 mt-16 ">
                {data.map((i, index) => (
                    <div
                        key={index}
                        className="w-[400px]   cursor-pointer bg-white border-1 text-orange-100"
                    >
                        <img
                            src={i.img}
                            alt={i.head}
                            className="w-full rounded-sm hover:shadow-xl transition-all duration-300"
                        />
                        <div className="p-5">
                            <p className="text-sm text-[#606060] mb-2">{i.para}</p>
                            <h2 className="text-[20px] w-[300px] font-bold mb-4 text-black hover:text-[#ff6b00]">{i.head}</h2>
                            <p className="text-[#ff6b00] font-medium flex items-center gap-2">
                                {i.lastpara}
                                <span className="text-[#ff5546] text-lg">➔</span>
                            </p>
                        </div>
                    </div>
                ))}      </div>
        </div>
    )
}