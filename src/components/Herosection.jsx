export const Herosection = () => {
    return (
        <>
            <div className="flex h-[500px] bg-[#fff4eb] mt-40 py-12 " id="Home">
                <div className="ml-40 mt-5 text-sm hero">
                    <div className="flex justify-center gap-2 mt-0 mr-140">
                        <img src="https://credesign.vercel.app/onePage/onePageOne/img/orangeDot.png" />
                        <p className="text-sm text-[#606060]">I AM DESIGNER</p>
                    </div>
                    <h1 className="mt-1 text-7xl font-extrabold w-2xl leading-22 heading">Creative Design and Web Solution</h1>
                    <p className="mt-5 leading-7 w-[650px] para">
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et.
                    </p>
                    <button type="submit" onClick={() => window.open('/src/Resume/AbsharResume.pdf', '')} className="mt-10 text-white cursor-pointer hover:bg-black text-2xl hover:text-orange-600 font-semibold bg-[#ff6a00] px-6 py-2 rounded-sm">Download My CV</button>
                </div>
                <img className="w-100  relative bottom-[40px] h-122.5 left-20  " src="https://credesign.vercel.app/onePage/onePageOne/img/bannerImg.png" alt="" />
            </div>
        </>
    )
}