import classNames from "classnames";
import React from "react";

function Delivery(props) {
  const { isDelivery, setIsDelivery } = props;
  return (
    <div
      className={classNames(
        isDelivery ? "block" : "hidden",
        "fixed inset-0 bg-gray-300 bg-opacity-30 z-20 flex items-center justify-center"
      )}
    >
        <div className="max-w-3xl m-auto  bg-white  rounded-md ">
          <div className=" relative w-full h-90vh rounded-md overflow-y-scroll scrollbar-hide">
            <button
              onClick={() => setIsDelivery(!isDelivery)}
              className="absolute right-0 bg-red-500 px-1 py-1  text-white text-base font-medium "
            >
              Close
            </button>
            <h1 className="w-full text-center text-2xl font-semibold uppercase mb-2 pt-4">
              Delivery Service
            </h1>
            <div className="w-full px-5 pb-5">
              <div>
                <h2 className="mt-4">Our parcel courier service</h2>
                <p className="mt-4">{`
            Foxic is proud to offer an exceptional international parcel shipping service. 
            It is straightforward and very easy to organise international parcel shipping. 
            Our customer service team works around the clock to make sure that you receive 
            high quality courier service from start to finish.
            `}</p>
                <p className="mt-4">
                  {`
                Sending a parcel with us is simple. To start the process you will first need to
                 get a quote using our free online quotation service. From this, you’ll be able 
                 to navigate through the online form to book a collection date for your parcel,
                  selecting a shipping day suitable for you.
                `}
                </p>
              </div>
              <div className="mt-4">
                <h2 className="mt-4">Shipping Time</h2>
                <ul className="mt-4">
                  <li>
                    The shipping time is based on the shipping method you chose.
                  </li>
                  <li>EMS takes about 5-10 working days for delivery.</li>
                  <li>DHL takes about 2-5 working days for delivery.</li>
                  <li>DPEX takes about 2-8 working days for delivery.</li>
                  <li>JCEX takes about 3-7 working days for delivery.</li>
                  <li>
                    China Post Registered Mail takes 20-40 working days for
                    delivery.
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
