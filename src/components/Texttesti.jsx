export const Texttesti = ({ image, heading, para, lastpara }) => {
    return (
        <div>
            <div id="card1" className="rounded-xl m-1 bg-[#fffaf7] hover:bg-[#fff5ef]">
                <div className="flex gap-10">
                    <img className="ml-8 mt-5" src={image} />
                    <div className="mt-7">
                        <h3 className="text-[20px] font-semibold">{heading}</h3>
                        <p className="text-sm text-[#606060]">{para}</p>
                    </div>
                </div>
                <p className="w-[350px] m-5 leading-6 text-sm text-[#606060]">{lastpara}</p>
            </div>
        </div>
    )
}