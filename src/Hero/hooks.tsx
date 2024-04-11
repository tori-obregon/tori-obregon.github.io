import { useEffect, useState } from "react";

export const UseTypewriter = (text) => {
    const [word, setWord] = useState(" ");
    const [textIndex, setTextIndex] = useState(0);

     // use useInterval to iterate through current text
     const textInterval = () => setInterval(() => {
        //if current text is not done
        if(textIndex < text.length) {
            //add another letter to displayText within a useEffect
            useEffect(() => {
                setWord(prevWord => prevWord + text.chartAt(textIndex));
            }, [])
            //move index to next element

        }
            //if current text is done
                //clear Interval
    }, 500)

  };