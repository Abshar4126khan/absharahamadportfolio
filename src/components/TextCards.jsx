export const TextCards = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center text-center  p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300 hover:bg-[#fff5ef]">
            <img src={icon} />
            <h3>{title}</h3>
            <p className="w-50">{description}</p>
        </div >
    )
}  