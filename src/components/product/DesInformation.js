import classNames from 'classnames';
import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";


function DesInformation() {
    const [isOpen, setIsOpen] = useState({ des: false, size: false, globalTag: false, reviews: false })
    const ratingChanged = (newRating) => {
        console.log("StarsProduct:", newRating);
    };
    const handleChange = (e, id) => {
        let a = document.getElementsByClassName("addActiveBorder");
        let b = document.getElementsByClassName("tabcontent");
        let c = document.getElementById(id);
        // console.log("c:", c)
        
        for (let i = 0; i < a.length; i++) {
            // console.log("a0:", a[0].classList.value)
            if (a[i].classList.value.includes('border-black')) {
                a[i].classList.remove('border-black');
            }
        };
        for (let i = 0; i < b.length; i++) {
            if (b[i].classList.value.includes('lg:block')) {
                b[i].classList.remove('lg:block');
            }
        };
        
        e.target.classList.add("border-black");
        c.classList.remove("lg:hidden");
        c.classList.add("lg:block");
    };

    return (
        <div className=" max-w-7xl m-auto">
            <ol id="infor" className="w-full hidden lg:flex flex-col items-center mt-10 lg:flex-row lg:items-center lg:mt-20">
                <li
                    className="-ml-5 mt-2 group relative hover:cursor-pointer"
                    onClick={(e) => { handleChange(e, "Description") }}
                >
                    
                        <div className=" font-semibold px-5/20 py-2 ">
                            <span className="addActiveBorder  text-xl lg:border-b-2 lg:pb-2 border-transparent border-black lg:group-hover:border-black">
                                Description
                            </span>                            
                        </div>
                                        
                </li>
                <li
                    className=" -ml-5 mt-2 group relative hover:cursor-pointer"
                    onClick={(e) => { handleChange(e, "Sizing") }}
                >
                    
                        <div className="font-semibold  px-5/20 py-2 ">
                            <span className="addActiveBorder text-xl lg:border-b-2 lg:pb-2 border-transparent lg:group-hover:border-black">
                                Sizing guide
                            </span>                           
                        </div>
                                       
                </li>
                <li
                    className="-ml-5 mt-2 group relative  hover:cursor-pointer"
                    onClick={(e) => { handleChange(e, "GlobalTag") }}
                >
                   
                        <div className="font-semibold px-5/20 py-2 ">
                            <span className="addActiveBorder text-xl lg:border-b-2 lg:pb-2 border-transparent lg:group-hover:border-black">
                                Global Tag
                            </span>                           
                        </div>
                                        
                </li>
                <li
                    className="-ml-5 mt-2 group relative hover:cursor-pointer"
                    onClick={(e) => { handleChange(e, "Reviews") }}
                >
                        <div className="font-semibold  px-5/20 py-2 ">
                            <span className="addActiveBorder text-xl lg:border-b-2 lg:pb-2 border-transparent lg:group-hover:border-black">
                                Reviews
                            </span>                           
                        </div>                  
                </li>
            </ol>

            {/* tab moblie */}
            <div className="w-full block mt-10 lg:hidden">
                <ul className="w-full px-2">
                    {/* Description */}
                    <li className="w-full mb-2">
                        <div className="w-full bg-gray-300">
                            <div
                                className="w-full flex items-center justify-between  px-3 py-2"
                                onClick={() => { setIsOpen({ ...isOpen, des: !isOpen.des }) }}
                            >
                                <span className="text-xl font-medium">Description</span>
                                <i className={classNames(isOpen.des ? "fas fa-minus" : "fas fa-plus", "block text-xl ")}></i>
                            </div>
                        </div>
                        <div className={classNames(isOpen.des ? "block" : "hidden", "w-full px-2")} >

                            <h3 className="mb-3 text-18 font-semibold leading-7 mt-4">
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
                    </li>
                    {/* Sizing guide */}
                    <li className="w-full mb-2">
                        <div className="w-full bg-gray-300">
                            <div
                                className="w-full flex items-center justify-between  px-3 py-2"
                                onClick={() => { setIsOpen({ ...isOpen, size: !isOpen.size }) }}
                            >
                                <span className="text-xl font-medium">Sizing Guide</span>
                                <i className={classNames(isOpen.size ? "fas fa-minus" : "fas fa-plus", "block text-xl ")}></i>

                            </div>
                        </div>
                        <div className={classNames(isOpen.size ? "block" : "hidden", "w-full px-2")}>
                            <h3 className="w-full mb-3 text-18 font-semibold leading-7 mt-4">
                                Single Size Conversion
                            </h3>
                            <div className="w-full table ">
                                <div className="w-90vw m-auto overflow-x-scroll   md:table-row-group">
                                    <div className="table-row">
                                        <div className="table-cell font-medium">US SIZES</div>
                                        <div className="table-cell ">6</div>
                                        <div className="table-cell ">6.5</div>
                                        <div className="table-cell ">7</div>
                                        <div className="table-cell ">7.5</div>
                                        <div className="table-cell ">8</div>
                                        <div className="table-cell ">8.5</div>
                                        <div className="table-cell ">9</div>
                                        <div className="table-cell ">9.5</div>
                                        <div className="table-cell ">10</div>
                                        <div className="table-cell ">10.5</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell font-medium">Euro Sizes</div>
                                        <div className="table-cell ">39</div>
                                        <div className="table-cell ">39</div>
                                        <div className="table-cell ">40</div>
                                        <div className="table-cell whitespace-nowrap">40-41</div>
                                        <div className="table-cell ">41</div>
                                        <div className="table-cell whitespace-nowrap">41-42</div>
                                        <div className="table-cell ">42</div>
                                        <div className="table-cell whitespace-nowrap">42-43</div>
                                        <div className="table-cell ">43</div>
                                        <div className="table-cell whitespace-nowrap">43-44</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell font-medium">UK Sizes</div>
                                        <div className="table-cell ">5.5</div>
                                        <div className="table-cell ">6</div>
                                        <div className="table-cell ">6.5</div>
                                        <div className="table-cell ">7</div>
                                        <div className="table-cell ">7.5</div>
                                        <div className="table-cell ">8</div>
                                        <div className="table-cell ">8.5</div>
                                        <div className="table-cell ">9</div>
                                        <div className="table-cell ">9.5</div>
                                        <div className="table-cell ">10</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell font-medium">Inches</div>
                                        <div className="table-cell ">9.25"</div>
                                        <div className="table-cell ">9.5"</div>
                                        <div className="table-cell ">9.625"</div>
                                        <div className="table-cell ">9.75"</div>
                                        <div className="table-cell ">9.9375"</div>
                                        <div className="table-cell ">10.125"</div>
                                        <div className="table-cell ">10.25</div>
                                        <div className="table-cell ">10.5"</div>
                                        <div className="table-cell ">10.625"</div>
                                        <div className="table-cell ">10.75"</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell font-medium">CM</div>
                                        <div className="table-cell ">23.5</div>
                                        <div className="table-cell ">24.1</div>
                                        <div className="table-cell ">24.4</div>
                                        <div className="table-cell ">24.8</div>
                                        <div className="table-cell ">25.4</div>
                                        <div className="table-cell ">25.7</div>
                                        <div className="table-cell ">26</div>
                                        <div className="table-cell ">26.7</div>
                                        <div className="table-cell ">27</div>
                                        <div className="table-cell ">27.3</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* GlobalTag */}
                    <li className="w-full mb-2">
                        <div className="w-full bg-gray-300">
                            <div
                                className="w-full flex items-center justify-between  px-3 py-2"
                                onClick={() => { setIsOpen({ ...isOpen, globalTag: !isOpen.globalTag }) }}
                            >
                                <span className="text-xl font-medium">Global Tag</span>
                                <i className={classNames(isOpen.globalTag ? "fas fa-minus" : "fas fa-plus", "block text-xl ")}></i>

                            </div>
                        </div>
                        <div className={classNames(isOpen.globalTag ? "block" : "hidden", "w-full px-2")}>
                            <h3 className="mb-3 text-18 font-semibold leading-7 mt-4">
                                Take a trivial example which of us ever undertakes
                            </h3>

                            <div>
                                <p className="mb-4">{`Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
                     because it is pain, but because occasionally circumstances occur in which toil and pain
                      can procure him some great pleasure. To take a trivial example, which of us ever
                       undertakes laborious physical exercise, except to obtain some advantage from it?
                        But who has any right to find fault with a man who chooses to enjoy a pleasure
                         that has no annoying consequences, or one who avoids a pain that produces no 
                         resultant pleasure
                    `}</p>
                                <p className="mb-4">{`But I must explain to you how all this mistaken idea of denouncing pleasure 
                    and praising pain was born and I will give you a complete account of the system,
                     and expound the actual teachings of the great explorer of the truth, the master-builder
                      of human happiness. No one rejects, dislikes, or avoids pleasure itself, 
                      because it is pleasure, but because those who do not know how to pursue pleasure
                       rationally encounter consequences that are extremely painful
                    `}</p>
                                <ul>
                                    <li><i className="mr-2 fas fa-check"></i> Nam liberempore</li>
                                    <li><i className="mr-2 fas fa-check"></i> Cumsoluta nobisest</li>
                                    <li><i className="mr-2 fas fa-check"></i> Eligendptio cumque</li>
                                    <li><i className="mr-2 fas fa-check"></i> Cumsoluta nobisest</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    {/* Reviews */}
                    <li className="w-full mb-2">
                        <div className="w-full bg-gray-300">
                            <div
                                className="w-full flex items-center justify-between  px-3 py-2"
                                onClick={() => { setIsOpen({ ...isOpen, reviews: !isOpen.reviews }) }}
                            >
                                <span className="text-xl font-medium">Reviews</span>
                                <i className={classNames(isOpen.reviews ? "fas fa-minus" : "fas fa-plus", "block text-xl ")}></i>

                            </div>
                        </div>
                        <div className={classNames(isOpen.reviews ? "block" : "hidden", "w-full px-2")}>
                            <div className="w-full mb-3 flex flex-col">
                                <h3 className="w-full text-2xl font-semibold leading-7 mt-4 mb-2">
                                    CUSTOMER REVIEWS
                                </h3>
                                <div className="w-full hover:text-green-400" >
                                    <i className=" mr-2 fas fa-pen"></i>
                                    <span className="text-lg font-medium">Write review</span>
                                </div>
                            </div>
                            <ul>
                                <li className="">
                                    <ReactStars
                                        className="w-full text-2xl mb-2"
                                        count={5}
                                        onChange={ratingChanged}
                                        size={24}
                                        value={4}
                                        activeColor="#ffd700"
                                    />
                                    <h4 className="w-full text-sm text-gray-400 mb-2">Jaden Ngo on May 25, 2018</h4>
                                    <p className="w-full text-lg font-medium mb-2">Good ball and company</p>
                                    <p>{`I recently bought this ball and this is the first ball that I actually buy 
                            based on quality and material, I always been playing my friend ball and one of 
                            them recommended me this, read some review online and decided to buy it, the ball 
                            feel sticky at first but quality is nice and the hand wrote letter was awesome
                             because it shows how much season creator actually care about their customers.
                            `}</p>
                                </li>
                                <li className="">
                                    <ReactStars
                                        className="w-full text-2xl mb-2"
                                        count={5}
                                        onChange={ratingChanged}
                                        size={24}
                                        value={4}
                                        activeColor="#ffd700"
                                    />
                                    <h4 className="w-full text-sm text-gray-400 mb-2">Jaden Ngo on May 25, 2018</h4>
                                    <p className="w-full text-lg font-medium mb-2">Good ball and company</p>
                                    <p>{`I recently bought this ball and this is the first ball that I actually buy 
                            based on quality and material, I always been playing my friend ball and one of 
                            them recommended me this, read some review online and decided to buy it, the ball 
                            feel sticky at first but quality is nice and the hand wrote letter was awesome
                             because it shows how much season creator actually care about their customers.
                            `}</p>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

            {/* content large*/}
            <div className="w-full hidden lg:block">

                <div id="Description" className="tabcontent hidden lg:block mb-20 mt-6">
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

                <div id="Sizing" className="tabcontent hidden lg:hidden w-full mb-20 mt-6">
                    <h3 className="mb-3 text-18 font-semibold leading-7">
                        Single Size Conversion
                    </h3>
                    <div className="w-full table">
                        <div className="table-row-group">
                            <div className="table-row">
                                <div className="table-cell font-medium">US SIZES</div>
                                <div className="table-cell ">6</div>
                                <div className="table-cell ">6.5</div>
                                <div className="table-cell ">7</div>
                                <div className="table-cell ">7.5</div>
                                <div className="table-cell ">8</div>
                                <div className="table-cell ">8.5</div>
                                <div className="table-cell ">9</div>
                                <div className="table-cell ">9.5</div>
                                <div className="table-cell ">10</div>
                                <div className="table-cell ">10.5</div>
                            </div>
                            <div className="table-row">
                                <div className="table-cell font-medium">Euro Sizes</div>
                                <div className="table-cell ">39</div>
                                <div className="table-cell ">39</div>
                                <div className="table-cell ">40</div>
                                <div className="table-cell ">40-41</div>
                                <div className="table-cell ">41</div>
                                <div className="table-cell ">41-42</div>
                                <div className="table-cell ">42</div>
                                <div className="table-cell ">42-43</div>
                                <div className="table-cell ">43</div>
                                <div className="table-cell ">43-44</div>
                            </div>
                            <div className="table-row">
                                <div className="table-cell font-medium">UK Sizes</div>
                                <div className="table-cell ">5.5</div>
                                <div className="table-cell ">6</div>
                                <div className="table-cell ">6.5</div>
                                <div className="table-cell ">7</div>
                                <div className="table-cell ">7.5</div>
                                <div className="table-cell ">8</div>
                                <div className="table-cell ">8.5</div>
                                <div className="table-cell ">9</div>
                                <div className="table-cell ">9.5</div>
                                <div className="table-cell ">10</div>
                            </div>
                            <div className="table-row">
                                <div className="table-cell font-medium">Inches</div>
                                <div className="table-cell ">9.25"</div>
                                <div className="table-cell ">9.5"</div>
                                <div className="table-cell ">9.625"</div>
                                <div className="table-cell ">9.75"</div>
                                <div className="table-cell ">9.9375"</div>
                                <div className="table-cell ">10.125"</div>
                                <div className="table-cell ">10.25</div>
                                <div className="table-cell ">10.5"</div>
                                <div className="table-cell ">10.625"</div>
                                <div className="table-cell ">10.75"</div>
                            </div>
                            <div className="table-row">
                                <div className="table-cell font-medium">CM</div>
                                <div className="table-cell ">23.5</div>
                                <div className="table-cell ">24.1</div>
                                <div className="table-cell ">24.4</div>
                                <div className="table-cell ">24.8</div>
                                <div className="table-cell ">25.4</div>
                                <div className="table-cell ">25.7</div>
                                <div className="table-cell ">26</div>
                                <div className="table-cell ">26.7</div>
                                <div className="table-cell ">27</div>
                                <div className="table-cell ">27.3</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="GlobalTag" className="tabcontent hidden lg:hidden w-full mb-20 mt-6">
                    <h3 className="mb-3 text-18 font-semibold leading-7">
                        Take a trivial example which of us ever undertakes
                    </h3>
                    <div>
                        <p className="mb-4">{`Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
                     because it is pain, but because occasionally circumstances occur in which toil and pain
                      can procure him some great pleasure. To take a trivial example, which of us ever
                       undertakes laborious physical exercise, except to obtain some advantage from it?
                        But who has any right to find fault with a man who chooses to enjoy a pleasure
                         that has no annoying consequences, or one who avoids a pain that produces no 
                         resultant pleasure
                    `}</p>
                        <p className="mb-4">{`But I must explain to you how all this mistaken idea of denouncing pleasure 
                    and praising pain was born and I will give you a complete account of the system,
                     and expound the actual teachings of the great explorer of the truth, the master-builder
                      of human happiness. No one rejects, dislikes, or avoids pleasure itself, 
                      because it is pleasure, but because those who do not know how to pursue pleasure
                       rationally encounter consequences that are extremely painful
                    `}</p>
                        <ul>
                            <li><i className="mr-2 fas fa-check"></i> Nam liberempore</li>
                            <li><i className="mr-2 fas fa-check"></i> Cumsoluta nobisest</li>
                            <li><i className="mr-2 fas fa-check"></i> Eligendptio cumque</li>
                            <li><i className="mr-2 fas fa-check"></i> Cumsoluta nobisest</li>
                        </ul>
                    </div>
                </div>

                <div id="Reviews" className="tabcontent hidden lg:hidden w-full mb-20 mt-6">
                    <div className="mb-3 flex justify-between">
                        <h3 className=" text-2xl font-semibold leading-7">
                            CUSTOMER REVIEWS
                        </h3>
                        <div className="hover:text-green-400" >
                            <i className=" mr-2 fas fa-pen"></i>
                            <span className="text-lg font-medium">Write review</span>
                        </div>
                    </div>
                    <ul>
                        <li className="">
                            <ReactStars
                                className="w-full text-2xl mb-2"
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                value={4}
                                activeColor="#ffd700"
                            />
                            <h4 className="w-full text-sm text-gray-400 mb-2">Jaden Ngo on May 25, 2018</h4>
                            <p className="w-full text-lg font-medium mb-2">Good ball and company</p>
                            <p>{`I recently bought this ball and this is the first ball that I actually buy 
                            based on quality and material, I always been playing my friend ball and one of 
                            them recommended me this, read some review online and decided to buy it, the ball 
                            feel sticky at first but quality is nice and the hand wrote letter was awesome
                             because it shows how much season creator actually care about their customers.
                            `}</p>
                        </li>
                        <li className="">
                            <ReactStars
                                className="w-full text-2xl mb-2"
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                value={4}
                                activeColor="#ffd700"
                            />
                            <h4 className="w-full text-sm text-gray-400 mb-2">Jaden Ngo on May 25, 2018</h4>
                            <p className="w-full text-lg font-medium mb-2">Good ball and company</p>
                            <p>{`I recently bought this ball and this is the first ball that I actually buy 
                            based on quality and material, I always been playing my friend ball and one of 
                            them recommended me this, read some review online and decided to buy it, the ball 
                            feel sticky at first but quality is nice and the hand wrote letter was awesome
                             because it shows how much season creator actually care about their customers.
                            `}</p>
                        </li>
                    </ul>


                </div>

            </div>


        </div>
    )
}

export default DesInformation
