const Card = () => {
    return(
        <div className="dg-white cursor-pointer w-56 h-60 rounded-lg shadow-card">
            <figure className="relative mb-2 w-full h-5/6">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 font-medium">Electronics</span>
                <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/17126918/pexels-photo-17126918/free-photo-of-mujer-ordenador-portatil-sentado-mesa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="headphones"></img>
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
                    +
                </div>
            </figure>
            <p className="flex justify-between items-center">
                <span className="text-sm font-light ml-2">Headphones</span>
                <span className="text-lg font-medium mr-2">$300</span>
            </p>
        </div>
    )
}
export default   Card