import React, { useRef, useState } from 'react';
export const Partners = () => {

    const myDivRef = useRef(null);
    const [leftposition, setleftposition] = useState(500);


    let image = [
        "https://credesign.vercel.app/onePage/onePageOne/img/partnerOne.png",
        "	https://credesign.vercel.app/onePage/onePageOne/img/partnerTwo.png",
        "https://credesign.vercel.app/onePage/onePageOne/img/partnerFour.png",
        "	https://credesign.vercel.app/onePage/onePageOne/img/partnerThree.png",
        "	https://credesign.vercel.app/onePage/onePageOne/img/partnerFive.png",
        "https://credesign.vercel.app/onePage/onePageOne/img/partnerOne.png",
        "	https://credesign.vercel.app/onePage/onePageOne/img/partnerTwo.png",
        "https://credesign.vercel.app/onePage/onePageOne/img/partnerFour.png",
        "	https://credesign.vercel.app/onePage/onePageOne/img/partnerThree.png",
        "	https://credesign.vercel.app/onePage/onePageOne/img/partnerFive.png",
        "https://credesign.vercel.app/onePage/onePageOne/img/partnerOne.png",
        "	https://credesign.vercel.app/onePage/onePageOne/img/partnerTwo.png",
        "https://credesign.vercel.app/onePage/onePageOne/img/partnerFour.png",
        "	https://credesign.vercel.app/onePage/onePageOne/img/partnerThree.png",
        "	https://credesign.vercel.app/onePage/onePageOne/img/partnerFive.png",
        "https://credesign.vercel.app/onePage/onePageOne/img/partnerOne.png",
        "	https://credesign.vercel.app/onePage/onePageOne/img/partnerTwo.png",
        "https://credesign.vercel.app/onePage/onePageOne/img/partnerFour.png",
        "	https://credesign.vercel.app/onePage/onePageOne/img/partnerThree.png",
        "	https://credesign.vercel.app/onePage/onePageOne/img/partnerFive.png"
    ]
    const handleClick = () => {
        setleftposition(prev => {
            const newLeft = prev + 500;
            if (myDivRef.current) {
                myDivRef.current.scrollTo({
                    left: newLeft,
                    behavior: 'smooth',
                });
            }
            return newLeft;
        });
    };

    const handleRightClick = () => {
        setleftposition(prev => {
            const newLeft = Math.max(prev - 500, 0); // prevent negative scroll
            if (myDivRef.current) {
                myDivRef.current.scrollTo({
                    left: newLeft,
                    behavior: 'smooth',
                });
            }
            return newLeft;
        });
    };
    return (
        <div className="mt-26">
            <div>
                <div className="flex justify-center gap-2">
                    <img src="https://credesign.vercel.app/onePage/onePageOne/img/orangeDot.png" />
                    <p className="text-sm text-[#606060]">Partners</p>
                </div>
                <h1 className="text-center text-4xl font-bold mt-2">REPUTED PARTNER</h1>
            </div>
            <div className="flex justify-center">
                <div className="flex justify-center gap-5 mt-20 w-[1200px] overflow-auto whitespace-nowrap scrollbar-hide ">
                    {
                        image.map((src, index) => (
                            <img className="border-2 text-orange-100 w-100 py-2 px-14 rounded-[10px] hover:scale-75 cursor-pointer transition-transform duration-350"
                                key={index}
                                src={src.trim()}

                            />
                        ))
                    }
                </div>
            </div>
            <div className="flex justify-center gap-10 mt-2">
                <a onClick={handleClick}><img className="w-4 cursor-pointer" src="/src/assets/leftScroll.svg" /></a> <br />
                <a onClick={handleRightClick}><img className="w-4 cursor-pointer" src="/src/assets/Rightscroll.svg" /></a> <br />
            </div>
        </div>
    )
}