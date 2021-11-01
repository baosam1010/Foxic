import classNames from "classnames";
// import React, { useState } from "react";

function SizeGuide(props) {
    const {isSizeGuide, setIsSizeGuide} =props;
  return (
    <div className={classNames(isSizeGuide ? 'block' : 'hidden', "fixed inset-0 bg-gray-400 bg-opacity-50 z-20 ")}>
      <div className="max-w-2xl m-auto bg-white my-5 rounded overflow-hidden">
        <div className="w-full relative  rounded-md">
          <button 
            onClick={() =>setIsSizeGuide(!isSizeGuide)}
            className="absolute right-0 bg-red-500 px-1 py-1  text-white text-base font-medium "
        >
            Close
          </button>
          <h1 className="w-full text-center text-2xl font-semibold uppercase mb-2 pt-4">
            Size Guide
          </h1>
          <div className="w-full px-2 lg:px-5 pb-5">
            <table className="w-full text-center ">
              <thead>
                <tr >
                  <td className="text-lg font-medium py-2 ">USA</td>
                  <td className="text-lg font-medium py-2 ">UK</td>
                  <td className="text-lg font-medium py-2 ">FRANCE</td>
                  <td className="text-lg font-medium py-2 ">JAPANESE</td>
                  <td className="text-lg font-medium py-2 ">BUST</td>
                  <td className="text-lg font-medium py-2 ">WAIST</td>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100">
                  <td className="py-2 ">4</td>
                  <td className="py-2 ">8</td>
                  <td className="py-2 ">36</td>
                  <td className="py-2 ">7</td>
                  <td className="py-2 ">32"</td>
                  <td className="py-2 ">61cm</td>
                </tr>
                <tr>
                  <td className="py-2 ">6</td>
                  <td className="py-2 ">10</td>
                  <td className="py-2 ">38</td>
                  <td className="py-2 ">11</td>
                  <td className="py-2 ">34"</td>
                  <td className="py-2 ">67cm</td>
                </tr>
                <tr  className="bg-gray-100">
                  <td className="py-2 ">8</td>
                  <td className="py-2 ">12</td>
                  <td className="py-2 ">40</td>
                  <td className="py-2 ">15</td>
                  <td className="py-2 ">36"</td>
                  <td className="py-2 ">71cm</td>
                </tr>
                <tr>
                  <td className="py-2 ">10</td>
                  <td className="py-2 ">14</td>
                  <td className="py-2 ">42</td>
                  <td className="py-2 ">17</td>
                  <td className="py-2 ">38"</td>
                  <td className="py-2 ">79cm</td>
                </tr>
                <tr  className="bg-gray-100">
                  <td className="py-2 ">12</td>
                  <td className="py-2 ">16</td>
                  <td className="py-2 ">44</td>
                  <td className="py-2 ">21</td>
                  <td className="py-2 ">40"</td>
                  <td className="py-2 ">84cm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SizeGuide;
