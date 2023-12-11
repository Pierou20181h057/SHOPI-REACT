const Card = (data) => {
    return(
        <div className="dg-white cursor-pointer w-56 h-60 rounded-lg shadow-card">
            <figure className="relative mb-2 w-full h-5/6">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 font-medium">{data.data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.images[0]} alt={data.data.title}></img>
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
                    +
                </div>
            </figure>
            <p className="flex justify-between items-center">
                <span className="text-sm font-light ml-2">{data.data.title}</span>
                <span className="text-lg font-medium mr-2">${data.data.price}</span>
            </p>
        </div>
    )
}
export default   Card