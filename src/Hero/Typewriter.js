// import { UseTypewriter } from "./hooks";
// import { useEffect, useState, useRef } from "react";

// const dataText = [
//     "latina",
//     "great",
//     "fun",
//     "woman",
//     "front-end",
//     "back-end",
// ]

// function Typewriter() {
//     const [displayText, setDisplayText] = useState(" ");
//     const [textIndex, setTextIndex] = useState(0);

//     function StartTypewriter(array) {
//         //iterate through dataText array
//         for(let i = 0; i < array.length; i++) {
//             //if current dataText element doesn't exist, restart
//             if( i === array.length) {
//                 i = -1;
//             }
//             //if current dataText element does exist
//             else {
//                UseTypewriter(array[i]);

//             }

//         }
//     }
    
//     // useEffect(() => {
//     //     setDisplayText('hi');
//     // }, []);


//     // startTypewriter();

//     return (
//       <div className="Typewriter">
//         <h2>i'm a&nbsp;</h2>
//         <h2 className="dynamicText">{displayText}</h2>
//         <h2>&nbsp;software engineer.</h2>
//       </div>
//     );
//   }
  
//   export default Typewriter;
