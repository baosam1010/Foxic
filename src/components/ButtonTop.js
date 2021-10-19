import {useState} from 'react';
import classNames from 'classnames';


function ButtonTop() {
    // var mybutton = document.getElementById("myBtn");
    const [showTop,setShowTop] =useState(false)
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        // mybutton.style.display = "block";
        // console.log("scroll:",document.body.scrollTop +"&&" + document.documentElement.scrollTop )
        setShowTop(true);
      } else {
        // mybutton.style.display = "none";
        setShowTop(false);

      }
    };
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };


    return (
        <div  className="fixed bottom-32 right-6 z-10 ">
            <button id="myBtn" onClick={topFunction} type="button" className={classNames(showTop ? "block" : "hidden","rounded-full bg-gray-300 w-16 h-16 text-white hover:bg-indigo-500")} >
                <i className="text-2xl fas fa-chevron-up"></i>
            </button>
        </div>
    )
}

export default ButtonTop
