import banner1 from './../../assets/images/banner-fashion-2-02.webp';
import banner2 from './../../assets/images/banner-fashion-2-04.webp';



function Banner() {
    return (
        <div className="max-w-sm md:max-w-7xl m-auto mb-20 block">
            <div className="gird grid-cols-1 md:grid-cols-2 md:gap-8 md:flex mx-2 md:mt-8 md:mx-4  ">
                <div className="w-full mt-8 flex items-center justify-center relative">
                    <div className="w-full  overflow-hidden ">
                        <img className=" transition duration-500 ease-in-out transform hover:scale-105 " src={banner1} alt="banner1" />
                    </div>
                    <button type="button" className="absolute bg-gray-100  rounded p-2 hover:bg-indigo-500  ">
                        <h4 className="text-lg font-semibold">Accessories</h4>
                        <p className="text-sm text-gray-400 font-normal">The Best Look AnyWhere</p>
                    </button>
                </div>
                <div className="w-full flex mt-8 items-center justify-center relative">
                    <div className="w-full  overflow-hidden ">
                        <img className=" transition duration-500 ease-in-out transform hover:scale-105 " src={banner2} alt="banner1" />
                    </div>
                    <button type="button" className="absolute bg-gray-100  rounded p-2 hover:bg-indigo-500  ">
                        <h4 className="text-lg font-semibold">Fashion</h4>
                        <p className="text-sm text-gray-400 font-normal">Live According To Fashion</p>
                    </button>
                </div>
            </div>
           
        </div>
    )
}

export default Banner
