import brand1 from './../../assets/images/brand-fashion-01.webp';
import brand2 from './../../assets/images/brand-fashion-02.webp';
import brand3 from './../../assets/images/brand-fashion-03.webp';
import brand4 from './../../assets/images/brand-fashion-04.webp';
import brand5 from './../../assets/images/brand-fashion-05.webp';
import brand6 from './../../assets/images/brand-fashion-06.webp';


function Brand() {
    return (
        <div className="max-w-7xl m-auto ">
            <ul className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 ">
                <li>
                    <a href="/">
                        <img className="max-w-full" src={brand6} alt="brand6" />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img className="max-w-full" src={brand5} alt="brand5" />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img className="max-w-full" src={brand4} alt="brand4" />

                    </a>
                </li>
                <li>
                    <a href="/">
                        <img className="max-w-full" src={brand3} alt="brand3" />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img className="max-w-full" src={brand2} alt="brand2" />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img className="max-w-full" src={brand1} alt="brand1" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Brand
