export const Subherosection = () => {
    return (
        <>
            <section className="flex justify-center gap-25 px-15" id="About">
                <div className="w-[500px] h-[680px] bg-[#ebecf1] rounded-[10px] ml-10 mt-32 hover:bg-[#8c8d90]  overflow-hidden">
                    <img src="	https://credesign.vercel.app/onePage/onePageOne/img/about.png" />
                </div>
                <div>
                    <div className="flex justify-center gap-2 mt-50 mr-133">
                        <img src="https://credesign.vercel.app/onePage/onePageOne/img/orangeDot.png" />
                        <p className="text-sm text-[#606060]">About Me</p>
                    </div>
                    <h1 className="mt-4 text-4xl font-bold w-120 leading-12 text-[#101010]">I Can Design Anything You Want</h1>
                    <p className="mt-6 w-155 text-sm text-[#606060] leading-6">
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                        placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
                        et aut officiis. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.
                    </p>

                    <subsec className="flex mt-16 gap-25">
                        <div>
                            <div className="flex justify-center items-center gap-3">
                                <div className="bg-[#fff6f0] rounded-sm p-0.5 w-15">
                                    <img src="https://credesign.vercel.app/onePage/onePageOne/img/aboutIconOne.png" />
                                </div>
                                <div>
                                    <p className="font-bold text-xl text-orange-400">0+</p>
                                    <p className="font-bold text-xl ">Complete Project</p>
                                </div>
                            </div>

                            <ul className="mt-12 flex flex-col gap-4" >
                                <li className="flex items-center gap-2 text-[#3f4246] text-[14px]">
                                    <img src="/src/assets/tick.svg" className="w-4 h-4 bg-orange-500" />
                                    <span>Work simple and clean design</span>
                                </li>
                                <li className="flex items-center gap-2 text-[#3f4246] text-[14px]">
                                    <img src="/src/assets/tick.svg" className="w-4 h-4 bg-orange-500" />
                                    <span>New idea and user friendly design</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex justify-center items-center gap-3">
                                <div className="bg-[#fff6f0] rounded-sm p-0.5 w-15">
                                    <img src="https://credesign.vercel.app/onePage/onePageOne/img/aboutIconOne.png" />
                                </div>
                                <div>
                                    <p className="font-bold text-xl text-orange-400">0+</p>
                                    <p className="font-bold text-xl">Complete Project</p>
                                </div>
                            </div>

                            <ul className="mt-12 flex flex-col gap-4">
                                <li className="flex items-center gap-2 text-[#3f4246] text-[14px]">
                                    <img src="/src/assets/tick.svg" className="w-4 h-4 bg-orange-500" />
                                    <span>Work simple and clean design</span>
                                </li>
                                <li className="flex items-center gap-2 text-[#3f4246] text-[14px]">
                                    <img src="/src/assets/tick.svg" className="w-4 h-4 bg-orange-500" />
                                    <span>New idea and user friendly design</span>
                                </li>
                            </ul>
                            <button type="submit" onClick={() => window.open('/src/Resume/AbsharResume.pdf', '')} className="bg-[#ff6b00] text-white text-xl cursor-pointer  font-semibold px-10 py-3 relative top-[70px] right-[338px] rounded-sm  ">Download My CV</button>

                        </div>

                    </subsec>

                </div>


            </section>
        </>
    )
}