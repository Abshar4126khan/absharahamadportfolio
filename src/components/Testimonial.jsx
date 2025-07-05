import { Texttesti } from "./Texttesti"
import React, { useRef, useState } from 'react';


export const Testimonial = () => {
    const myDivRef = useRef(null);
    const [leftposition, setleftposition] = useState(500);

    let data = [
        {
            image: "https://credesign.vercel.app/onePage/onePageOne/img/testimonialThree.png",
            heading: "Robert E. Wolf",
            para: "Director, Techso",
            lastpara: "Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old"



        },
        {
            image: "https://credesign.vercel.app/onePage/onePageOne/img/testimonialThree.png",
            heading: "Robert E. Wolf",
            para: "Director, Techso",
            lastpara: "Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old"
        },
        {
            image: "https://credesign.vercel.app/onePage/onePageOne/img/testimonialThree.png",
            heading: "Robert E. Wolf",
            para: "Director, Techso",
            lastpara: "Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old"
        },
        {
            image: "https://credesign.vercel.app/onePage/onePageOne/img/testimonialThree.png",
            heading: "Robert E. Wolf",
            para: "Director, Techso",
            lastpara: "Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old"
        },
        {
            image: "https://credesign.vercel.app/onePage/onePageOne/img/testimonialThree.png",
            heading: "Robert E. Wolf",
            para: "Director, Techso",
            lastpara: "Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old"
        },
        {
            image: "https://credesign.vercel.app/onePage/onePageOne/img/testimonialThree.png",
            heading: "Robert E. Wolf",
            para: "Director, Techso",
            lastpara: "Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old"
        },
        {
            image: "https://credesign.vercel.app/onePage/onePageOne/img/testimonialThree.png",
            heading: "Robert E. Wolf",
            para: "Director, Techso",
            lastpara: "Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old"
        },
        {
            image: "https://credesign.vercel.app/onePage/onePageOne/img/testimonialThree.png",
            heading: "Robert E. Wolf",
            para: "Director, Techso",
            lastpara: "Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old"
        },
        {
            image: "https://credesign.vercel.app/onePage/onePageOne/img/testimonialThree.png",
            heading: "Robert E. Wolf",
            para: "Director, Techso",
            lastpara: "Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old"
        }
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
        <div className="mt-20">

            <div className="flex justify-center gap-2" id="Testimonial">
                < img src="https://credesign.vercel.app/onePage/onePageOne/img/orangeDot.png" />
                <p className="text-sm text-[#606060]">Testimonial</p>
            </div >

            <h1 className="text-center text-4xl font-bold mt-2">CLIENT FEEDBACK</h1>
            <div className="flex justify-center">
                <div ref={myDivRef} className="flex items-center justify-start m-5 gap-3 ml-7 mt-15 w-[1200px] overflow-auto">
                    {data.map((datas, index) => (
                        <Texttesti
                            key={index}
                            image={datas.image}
                            heading={datas.heading}
                            para={datas.para}
                            lastpara={datas.lastpara}
                        />
                    ))}
                </div>

            </div>
            <div className="flex justify-center gap-10 ">
                <a onClick={handleClick}><img className="w-4 cursor-pointer" src="/src/assets/leftScroll.svg" /></a> <br />
                <a onClick={handleRightClick}><img className="w-4 cursor-pointer" src="/src/assets/Rightscroll.svg" /></a> <br />
            </div>
        </div >
    )
}