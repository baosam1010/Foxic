
import bannerfull from './../../assets/images/banner-fashion2-full.webp';

function TrendSummer() {
    return (
        <div className="max-w-7xl m-auto">
            <div className="mt-20 w-full h-500 overflow-hidden relative">
                <img className="absolute transform transition duration-500 ease-in-out hover:scale-105" 
                    src={bannerfull} 
                    alt="trendsummer"  
                />
                <div className=" w-6/12 absolute  text-center right-0 transform translate-y-125/100">
                    <h2 className="text-3xl mb-4 font-semibold">
                        The Best Trend Of Summer 2021
                    </h2>
                    <p className="text-sm text-gray-500 ">
                        E-commerce-Sam
                    </p>
                    <button className="bg-yellow-400 px-8 py-2 rounded mt-4 hover:bg-black hover:text-white">
                        Buy Now
                    </button>
                </div>

            </div>
        </div>
    )
}

export default TrendSummer
