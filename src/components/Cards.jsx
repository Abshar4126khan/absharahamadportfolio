import { TextCards } from "./TextCards";
export const Cards = () => {

    const data = [
        {
            icon: "https://credesign.vercel.app/onePage/onePageOne/img/serviceOne.png",
            title: "UI/UX Design",
            description: "Hen our power of choice is untrammelled and when nothing prevents our being able",
        },
        {
            icon: "https://credesign.vercel.app/onePage/onePageOne/img/serviceTwo.png",
            title: "Mobile App",
            description: "Hen our power of choice is untrammelled and when nothing prevents our being able",
        },
        {
            icon: "https://credesign.vercel.app/onePage/onePageOne/img/serviceThree.png",
            title: "Graphic Design",
            description: "Hen our power of choice is untrammelled and when nothing prevents our being able",
        },
        {
            icon: "https://credesign.vercel.app/onePage/onePageOne/img/serviceFour.png",
            title: "Web Developer",
            description: "Hen our power of choice is untrammelled and when nothing prevents our being able",
        },
        {
            icon: "	https://credesign.vercel.app/onePage/onePageOne/img/serviceFive.png",
            title: "SEO Optimisation",
            description: "Hen our power of choice is untrammelled and when nothing prevents our being able",
        },
        {
            icon: "https://credesign.vercel.app/onePage/onePageOne/img/serviceSix.png",
            title: "WordPress Developer",
            description: "Hen our power of choice is untrammelled and when nothing prevents our being able",
        },
        {
            icon: "	https://credesign.vercel.app/onePage/onePageOne/img//serviceSeven.png",
            title: "App Development",
            description: "Hen our power of choice is untrammelled and when nothing prevents our being able",
        },
        {
            icon: "https://credesign.vercel.app/onePage/onePageOne/img/serviceEight.png",
            title: "Business Strategy",
            description: "Hen our power of choice is untrammelled and when nothing prevents our being able",
        },
    ];
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto " id="Services">
            <div className="text-center mb-15">
                <div className="flex justify-center gap-2">
                    <img src="https://credesign.vercel.app/onePage/onePageOne/img/orangeDot.png" />
                    <p className="text-sm text-[#606060]">My Service</p>
                </div>

                <h2 className="text-5xl font-extrabold mt-1">SERVICES I OFFER</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6 w-full">
                {data.map((datas, index) => (
                    <TextCards
                        key={index}
                        icon={datas.icon}
                        title={datas.title}
                        description={datas.description}
                    />


                ))}
            </div>
        </section>
    )
}