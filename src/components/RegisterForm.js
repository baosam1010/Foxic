import React, { useState } from "react";

function RegisterForm(props) {

    const {isRegister , setIsRegister, Register, error} = props;

  const [details, setDetais] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
    address: {
      street: "",
      city: "",
      country: "",
      zipcode: "",
    },
    default: false,
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    Register(details);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-40 z-20">
      <div className="p-2 bg-gradient-to-br from-red-400 to-yellow-600  w-full mx-2 lg:w-6/12 rounded ">
        <div className="h-90vh overflow-y-scroll scrollbar-hide">
          <form onSubmit={handleSubmitForm} className=" bg-white rounded  ">
            <h2 className="p-1 mb-2 text-xl text-center bg-yellow-400 text-white font-semibold w-full ">
              Register Form
            </h2>
            {/* error */}
            {error !== "" ? (
              <span className="my-2 italic text-red-500 text-sm ">{error}</span>
            ) : null}
            <div className="p-2 grid grid-cols-2 gap-2">
              <div className="flex flex-col mb-2 ">
                <label className="text-base font-medium mb-1" htmlFor="name">
                  Name:
                </label>
                <input
                  className="px-2 py-1 border-2 border-gray-400 rounded outline-none focus:border-yellow-400 "
                  type="text"
                  required
                  name="name"
                  id="name"
                  max={15}
                  onChange={(e) =>
                    setDetais({ ...details, name: e.target.value })
                  }
                  value={details.name}
                />
              </div>

              <div className="flex flex-col mb-2 ">
                <label className="text-base font-medium mb-1" htmlFor="username">
                  User Name:
                </label>
                <input
                  className="px-2 py-1 border-2 border-gray-400 rounded outline-none focus:border-yellow-400 "
                  type="text"
                  name="username"
                  id="username"
                  max={15}
                  onChange={(e) =>
                    setDetais({ ...details, username: e.target.value })
                  }
                  value={details.username}
                />
              </div>

              <div className="flex flex-col mb-2">
                <label className="text-base font-medium mb-1" htmlFor="email">
                  Email:
                </label>
                <input
                  className="px-2 py-1 border-2 border-gray-400 rounded outline-none focus:border-yellow-400 "
                  type="email"
                  name="email"
                  required
                  id="email"
                  onChange={(e) =>
                    setDetais({ ...details, email: e.target.value })
                  }
                  value={details.email}
                />
              </div>

              <div className="flex flex-col mb-2">
                <label className="text-base font-medium mb-1" htmlFor="phone">
                  Phone:
                </label>
                <input
                  className="px-2 py-1 border-2 border-gray-400 rounded outline-none focus:border-yellow-400 "
                  type="text"
                  name="phone"
                  id="phone"
                  max={15}
                  onChange={(e) =>
                    setDetais({ ...details, phone: e.target.value })
                  }
                  value={details.phone}
                />
              </div>

              <div className="flex flex-col mb-2">
                <label
                  className="text-base font-medium mb-1"
                  htmlFor="password"
                >
                  Password:
                </label>
                <input
                  className="px-2 py-1 border-2 border-gray-400 rounded outline-none focus:border-yellow-400 "
                  required
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) =>
                    setDetais({ ...details, password: e.target.value })
                  }
                  value={details.password}
                />
              </div>

              <div className="flex flex-col mb-2">
                <label className="text-base font-medium mb-1" htmlFor="confirmpassword">
                  Confirm Password:
                </label>
                <input
                  className="px-2 py-1 border-2 border-gray-400 rounded outline-none focus:border-yellow-400 "
                  type="password"
                  required
                  name="confirmpassword"
                  id="confirmpassword"
                  onChange={(e) =>
                    setDetais({ ...details, confirmpassword: e.target.value })
                  }
                  value={details.confirmpassword}
                />
              </div>
              
            </div>
            <div className="px-2 mb-2 grid grid-cols-2 gap-2">
              {/* <fieldset className=""> */}
              <legend className="block text-lg font-medium col-span-2">Address:</legend>
              <div className="flex flex-col mb-2 ">
                <label className="text-base font-medium mb-1" htmlFor="country">
                  Coutry:
                </label>
                <input
                  className="px-2 py-1 border-2 border-gray-400 rounded outline-none focus:border-yellow-400 "
                  type="text"
                  name="country"
                  id="country"
                  onChange={(e) =>
                    setDetais({
                      ...details,
                      address: { ...details.address, country: e.target.value },
                    })
                  }
                  value={details.address.country}
                />
              </div>
              <div className="flex flex-col mb-2 ">
                <label
                  className="text-base font-medium mb-1"
                  htmlFor="city"
                >
                  City:
                </label>
                <input
                  className="px-2 py-1 border-2 border-gray-400 rounded outline-none focus:border-yellow-400 "
                  type="text"
                  name="city"
                  id="city"
                  onChange={(e) =>
                    setDetais({
                      ...details,
                      address: { ...details.address, city: e.target.value },
                    })
                  }
                  value={details.address.city}
                />
              </div>
              <div className="flex flex-col mb-2 ">
                <label
                  className="text-base font-medium mb-1"
                  htmlFor="street"
                >
                  Street:
                </label>
                <input
                  className="px-2 py-1 border-2 border-gray-400 rounded outline-none focus:border-yellow-400 "
                  type="text"
                  name="street"
                  id="street"
                  onChange={(e) =>
                    setDetais({
                      ...details,
                      address: { ...details.address, street: e.target.value },
                    })
                  }
                  value={details.address.street}
                />
              </div>
              <div className="flex flex-col mb-2 ">
                <label
                  className="text-base font-medium mb-1"
                  htmlFor="zipcode"
                >
                  Zipcode:
                </label>
                <input
                  className="px-2 py-1 border-2 border-gray-400 rounded outline-none focus:border-yellow-400 "
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  onChange={(e) =>
                    setDetais({
                      ...details,
                      address: { ...details.address, zipcode: e.target.value },
                    })
                  }
                  value={details.address.zipcode}
                />
              </div>
              
              
              <div className="flex place-items-end   mb-2 ">
                <div className="flex flex-row items-center">
                  <input
                    className="mr-2 w-9 h-9 px-2  py-1 border-2 border-gray-400 rounded outline-none focus:border-yellow-400 "
                    type="checkbox"
                    id="default"
                    name="default"
                    defaultValue={details.default}
                    onChange={(e) =>
                      setDetais({
                        ...details,
                        default: !details.default
                      })
                    }
                    value={details.address.default}
                  />
                  <span className="block text-base ">
                    {" "}
                    Set address as default
                  </span>
                </div>
              </div>
              {/* </fieldset> */}
            </div>
            <div className="mx-2 pb-2 flex justify-between">
              <button
                className=" px-3 py-1 bg-yellow-400 text-white text-base uppercase font-medium rounded hover:bg-black "
                type="submit"
              >
                REGISTER
              </button>
              <button 
                onClick={() =>setIsRegister(!isRegister)}
                className=" px-3 py-1 bg-yellow-400 text-white text-base uppercase font-medium rounded hover:bg-black ">
                CLOSE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
