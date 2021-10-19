import classNames from 'classnames'
import React from 'react'

function Languages(props) {

    return (
        <li className="relative h-10 group px-3 flex   ">
              <div className="">
                <span className="text-sm mr-2 hover:text-indigo-500 hover:cursor-pointer">English</span>
                <i className="text-xs hover:text-indigo-500 fas fa-chevron-down"></i>

              </div>
              <div className="hidden group-hover:block absolute top-0 right-0 transform translate-y-10 w-full z-10 bg-white rounded border border-gray-400">
                <ul className="w-full ">
                  <li
                    className={classNames("w-full flex items-center hover:bg-gray-400  ")}
                  >
                    <span
                      className="w-full text-black text-base  px-2 py-1 hover:cursor-pointer"
                    >
                      English
                    </span>
                  </li>
                  <li
                    className={classNames("w-full flex items-center hover:bg-gray-400")}
                  >
                    <span
                      className="w-full text-black text-base  px-2 py-1 hover:cursor-pointer"
                    >
                      Vietnamese
                    </span>
                  </li>
                </ul>
              </div>
            </li>
    )
}

export default Languages
