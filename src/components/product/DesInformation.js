import React from 'react'

function DesInformation() {
    return (
        <div className=" max-w-7xl m-auto">
            <ol className=" flex flex-col mt-10 lg:flex-row lg:items-center lg:mt-20">
                <li className="-ml-5 group  relative">
                    <div className=" ml-7 mr-2  bg-gray-300 lg:bg-transparent ">
                        <div className="font-semibold text-xl px-5/20 py-2 flex justify-between ">
                            <span className=" lg:border-b-2 lg:pb-2 border-transparent lg:group-hover:border-black">
                                Description
                            </span>
                            <div className="block lg:hidden">
                                <i className=" hidden fas fa-plus"></i>
                                <i className="  fas fa-minus"></i>
                            </div>
                        </div>
                    </div>
                    {/* content moblie */}
                    <div className="lg:hidden relative w-full mb-5 mt-6">
                        <div className="ml-9 mr-4">
                            <h3 className="mb-3 text-18 font-semibold leading-7">
                                Give you a complete account of the system
                            </h3>
                            <p className="lg:px-3.5 mb-5/20">
                                {`Nor again is there anyone who loves or pursues or desires to 
                        obtain pain of itself, because it is pain, but because occasionally
                         circumstances occur in which toil and pain can procure him some great pleasure.
                          To take a trivial example, which of us ever undertakes laborious physical exercise,
                           except to obtain some advantage from it? But who has any right to find fault
                            with a man who chooses to enjoy a pleasure that has no annoying consequences,
                             or one who avoids a pain that produces no resultant pleasure.
                        `}
                            </p>
                            <div className="">
                                <div className="grid grid-cols-12 sm:gap-6">
                                    <div className="col-span-12 sm:col-span-8">
                                        <p className="lg:px-3.5 mb-5/20">
                                            {`Nor again is there anyone who loves or pursues or desires to obtain
                                 pain of itself, because it is pain, but because occasionally circumstances
                                  occur in which toil and pain can procure him some great pleasure.
                                   Nor again is there anyone who loves or pursues.
                                `}
                                        </p>
                                        <div className="w-full ">
                                            <h4 className="px-3.5 mb-5/20 text-18 font-semibold">
                                                List heading
                                            </h4>
                                            <div className="lg:px-3.5 ">
                                                <ol className="list-decimal flex flex-col lg:flex-row lg:justify-between">
                                                    <div className="ml-4">
                                                        <li>
                                                            All this mistaken idea of denouncing pleasure
                                                        </li>
                                                        <li>Raising pain was born and I will give you</li>
                                                        <li>Complete account of the system</li>
                                                    </div>
                                                    <div className="ml-4 ">
                                                        <li>
                                                            All this mistaken idea of denouncing pleasure
                                                        </li>
                                                        <li>Raising pain was born and I will give you</li>
                                                        <li>Complete account of the system</li>
                                                    </div>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 mt-2 sm:col-span-4">
                                        <img
                                            className=""
                                            src="https://big-skins.com/frontend/foxic-html-demo/images/product-description-02.webp"
                                            alt="imgDescription2"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5/20 ">
                                <div className="grid grid-cols-12 md:gap-6">
                                    <div className="col-span-12 md:col-span-4 lg:col-span-3">
                                        <img className="" src="https://big-skins.com/frontend/foxic-html-demo/images/product-description-01.webp" alt="imgProDEs1" />
                                    </div>
                                    <div className="col-span-12 md:col-span-8 lg:col-span-9">
                                        <p className="mt-4">
                                            {`But I must explain to you how all this mistaken idea of denouncing
                                     pleasure and praising pain was born and I will give you a complete
                                      account of the system, and expound the actual teachings of the great
                                       explorer of the truth, the master-builder of human happiness.
                                    `}
                                        </p>
                                        <p className="mt-2">
                                            {`Nor again is there anyone who loves or pursues or desires to obtain 
                                    pain of itself, because it is pain, but because occasionally circumstances
                                     occur in which toil and pain can procure him some great pleasure. To take a 
                                     trivial example, which of us ever undertakes laborious physical exercise,
                                     except to obtain some advantage from it? But who has any right to find fault
                                      with a man who chooses to enjoy a pleasure that has no annoying consequences,
                                       or one who avoids a pain that produces no resultant pleasure
                                    `}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="-ml-5 mt-2 group  ">
                    <div className=" ml-7 mr-2  bg-gray-300 lg:bg-transparent ">
                        <div className="font-semibold text-xl px-5/20 py-2 flex justify-between ">
                            <span className=" lg:border-b-2 lg:pb-2 border-transparent lg:group-hover:border-black">
                                Sizing guide
                            </span>
                            <div className="block lg:hidden">
                                <i className="  fas fa-plus"></i>
                                <i className="hidden  fas fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="-ml-5 mt-2 group  ">
                    <div className=" ml-7 mr-2  bg-gray-300 lg:bg-transparent ">
                        <div className="font-semibold text-xl px-5/20 py-2 flex justify-between ">
                            <span className=" lg:border-b-2 lg:pb-2 border-transparent lg:group-hover:border-black">
                                Global Tag
                            </span>
                            <div className="block lg:hidden">
                                <i className="  fas fa-plus"></i>
                                <i className="hidden  fas fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="-ml-5 mt-2 group  ">
                    <div className=" ml-7 mr-2  bg-gray-300 lg:bg-transparent ">
                        <div className="font-semibold text-xl px-5/20 py-2 flex justify-between ">
                            <span className=" lg:border-b-2 lg:pb-2 border-transparent lg:group-hover:border-black">
                                Reviews
                            </span>
                            <div className="block lg:hidden">
                                <i className="  fas fa-plus"></i>
                                <i className="hidden  fas fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </li>
            </ol>

            {/* conttent 1*/}
            <div className="hidden lg:block mb-20 mt-6">
                <h3 className="mb-3 text-18 font-semibold leading-7">
                    Give you a complete account of the system
                </h3>
                <p className="px-3.5 mb-5/20">
                    {`Nor again is there anyone who loves or pursues or desires to 
                        obtain pain of itself, because it is pain, but because occasionally
                         circumstances occur in which toil and pain can procure him some great pleasure.
                          To take a trivial example, which of us ever undertakes laborious physical exercise,
                           except to obtain some advantage from it? But who has any right to find fault
                            with a man who chooses to enjoy a pleasure that has no annoying consequences,
                             or one who avoids a pain that produces no resultant pleasure.
                        `}
                </p>
                <div className="">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-9">
                            <p className="px-3.5 mb-5/20">
                                {`Nor again is there anyone who loves or pursues or desires to obtain
                                 pain of itself, because it is pain, but because occasionally circumstances
                                  occur in which toil and pain can procure him some great pleasure.
                                   Nor again is there anyone who loves or pursues.
                                `}
                            </p>
                            <div className="w-full ">
                                <h4 className="px-3.5 mb-5/20 text-18 font-semibold">
                                    List heading
                                </h4>
                                <div className="px-3.5 ">
                                    <ol className="list-decimal flex justify-between">
                                        <div className="ml-4">
                                            <li>All this mistaken idea of denouncing pleasure</li>
                                            <li>Raising pain was born and I will give you</li>
                                            <li>Complete account of the system</li>
                                        </div>
                                        <div>
                                            <li>All this mistaken idea of denouncing pleasure</li>
                                            <li>Raising pain was born and I will give you</li>
                                            <li>Complete account of the system</li>
                                        </div>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div>
                                <img className="" src="https://big-skins.com/frontend/foxic-html-demo/images/product-description-02.webp" alt="imgDescription2" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5/20 ">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-3">
                            <img className="" src="https://big-skins.com/frontend/foxic-html-demo/images/product-description-01.webp" alt="imgProDEs1" />
                        </div>
                        <div className="col-span-9">
                            <p>
                                {`But I must explain to you how all this mistaken idea of denouncing
                                     pleasure and praising pain was born and I will give you a complete
                                      account of the system, and expound the actual teachings of the great
                                       explorer of the truth, the master-builder of human happiness.
                                    `}
                            </p>
                            <p>
                                {`Nor again is there anyone who loves or pursues or desires to obtain 
                                    pain of itself, because it is pain, but because occasionally circumstances
                                     occur in which toil and pain can procure him some great pleasure. To take a 
                                     trivial example, which of us ever undertakes laborious physical exercise,
                                     except to obtain some advantage from it? But who has any right to find fault
                                      with a man who chooses to enjoy a pleasure that has no annoying consequences,
                                       or one who avoids a pain that produces no resultant pleasure
                                    `}
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default DesInformation
