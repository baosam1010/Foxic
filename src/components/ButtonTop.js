import {useEffect, useState} from 'react';
import classNames from 'classnames';


function ButtonTop() {

    const [showTop,setShowTop] =useState(false)

    // window.onscroll = function() {scrollFunction()};
    // function scrollFunction() {
    //   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    //     // mybutton.style.display = "block";
    //     // console.log("scroll:",document.body.scrollTop +"&&" + document.documentElement.scrollTop )
    //     setShowTop(true);
    //   } else {
    //     setShowTop(false);
    //   }
    // };
    
    useEffect(() => {
      let lastScroll = 0;
      window.addEventListener("scroll", () => {
          let currentScroll = document.documentElement.scrollTop;
          // console.log({currentScroll})
          if ( currentScroll < 400 ||  currentScroll > lastScroll ) {
            setShowTop(false);
          } else if (  currentScroll < lastScroll ) {
            setShowTop(true);
          };

          if (currentScroll <= 0) {
              lastScroll = 0
          } else { lastScroll = currentScroll }
      })

      return () => {
        setShowTop(false);
      }
  }, []);


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
