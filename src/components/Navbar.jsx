import { useState } from "react"

export const Navbar = () => {
    let navarray = ["Home", "About", "Services", "Resume", "Testimonial", "Blog", "Contact"]
    const [opennave, setopennave] = useState(false)
    return (
        <div className="fixed top-0 w-full  bg-white h-25 container-navbar">
            <nav className="flex items-center justify-evenly contain  desktop-navbar">

                <img className="mt-10 logo" src="https://credesign.vercel.app/onePage/onePageOne/img/Logo.png" />
                <ul className="flex justify-center items-center gap-10 mt-10 text-sm font-serif cursor-pointer nav-link">
                    {navarray.map((i) => {
                        return (<a href={`#` + i}>{i}</a>)
                    })}
                </ul>

                <button className="mt-10 text-2xl font-semibold bg-[#ff6a00] px-6 py-2 rounded-sm cursor-pointer" >Contact Us</button>

            </nav>

            <div className="mobile-nav">
                <button onClick={() => { setopennave(!opennave) }}><img className="w-5" src="/src/assets/bar.svg" /></button> </div>
            {opennave && <div className=" flex flex-col bg-white navb">
                {navarray.map((i) => {
                    return (<a href={`#` + i}>{i}</a>)
                })}
            </div>}

        </div>
    )
}