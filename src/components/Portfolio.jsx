export const Portfolio = () => {
    let list = ["All", "Ul / Ux Design", "Branding Design", "Graphic Design", "App Development", "Web Design"]
    let image = [
        "https://credesign.vercel.app/onePage/onePageOne/img/portfolioOne.png",
        "	https://credesign.vercel.app/onePage/onePageOne/img/portfolioTwo.png",
        " https://credesign.vercel.app/onePage/onePageOne/img/portfolioThree.png",
        "	https://credesign.vercel.app/onePage/onePageOne/img/portfolioFour.png",
        " 	https://credesign.vercel.app/onePage/onePageOne/img/portfolioFive.png",
        "https://credesign.vercel.app/onePage/onePageOne/img/portfolioSix.png",
        "	https://credesign.vercel.app/onePage/onePageOne/img/portfolioSeven.png",
        "	https://credesign.vercel.app/onePage/onePageOne/img/portfolioSeven.png",
        "	https://credesign.vercel.app/onePage/onePageOne/img/portfolioSeven.png"
    ]


    return (
        <div className="mt-50 flex flex-col justify-center text-center">
            <div>
                <div className="flex justify-center gap-2">
                    <img src="https://credesign.vercel.app/onePage/onePageOne/img/orangeDot.png" />
                    <p className="text-sm text-[#606060]">My Portfolio</p>
                </div>
                <h1 className="text-center text-4xl font-bold mt-2">VISIT MY PORTFOLIO</h1>
            </div>
            <ul className="mt-12 flex justify-center gap-10 text-[#606060] ">
                {list.map((i) => {
                    return (<li className="hover:font-bold hover:text-orange-600 cursor-pointer transition duration-1000">{i}</li>)
                })}
            </ul>
            <div className="flex flex-wrap ml-15 ">
                {image.map((src, index) => (
                    <img
                        key={index}
                        src={src.trim()}
                        alt={`Portfolio ${index + 1}`}
                        className="w-100 h-80 m-3 mt-10 rounded-lg shadow-md hover:scale-105 transition-transform duration-350 cursor-pointer"
                    />
                ))}
            </div>

        </div>
    )
}