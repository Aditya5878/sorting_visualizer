
import React, { useState, useEffect } from 'react';
import { getMergeSortAnimations}  from '../sortingAlgorithms/MergesortAlgorithms';
import './SortingVisualizer.css';
import { getBubbleSortAnimations}  from '../sortingAlgorithms/BubblesortAlgorithms';
import { getQuickSortAnimations}  from '../sortingAlgorithms/QuicksortAlgorithms';
import { getInsertionSortAnimations}  from '../sortingAlgorithms/InsertionsortAlgorithms';
const ANIMATION_SPEED_MS = 5;
const NUMBER_OF_ARRAY_BARS = 50;
const PRIMARY_COLOR = 'rgb(249, 4, 45)';
const SECONDARY_COLOR = 'rgb(15, 15, 184)';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  //   // console.log("I am inside ");     // this will run first then useEffect will run and then resetArray will run and then again this will run and so on.
//   // if [] is not there then it will run in infinite loop . UseEffect is used to run the function when you refresh the page.
//   //  if [] is there then it will run only once when you refresh the page.
//   // if we are using useState then useffect will run after every render of component.
//   // if we are not using useState then useffect will run only once after the first render.

  useEffect(() => {
    resetArray();   // this will run after every render of component.
  }, []);
 // console.log("I am outside ");     // this will run first then useEffect will run and then resetArray will run and then again this will run and so on.
  const resetArray = () => {
    const newArray = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      newArray.push(randomIntFromInterval(5, 730));
    }
    setArray(newArray);
  };
 
// explaination of mergeSort function
// 1. we are calling getMergeSortAnimations function and passing array.slice() as parameter.
// 2. getMergeSortAnimations function is returning animations array.  
// 3. animations array contains all the animations that we need to perform to get the sorted array.
// 4. animations array contains 3 values in each index.
// 5. animations array contains index of two bars that we need to compare and color them red. 
// 6. animations array contains index of two bars that we need to compare and color them back to the original color.
// 7. animations array contains index of one bar and new height of that bar.  
// 8. we are iterating animations array and performing the animations one by one.
// 9. if i%3 is not equal to 2 then we are changing the color of two bars.
// 10. if i%3 is equal to 2 then we are changing the height of one bar.
// 11. we are using setTimeout function to perform the animations one by one. 
// 12. setTimeout function takes two parameters. First parameter is function and second parameter is time in milliseconds.
// 13. setTimeout function will run the function after the time specified in second parameter.  


  const mergeSort = () => {
    const animations = getMergeSortAnimations(array.slice());
    const arrayBars = document.getElementsByClassName('array-bar');

    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight/2}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };
  
// In this example, arrayBars represents the DOM elements (e.g., <div>) representing the bars in your visualization.
// The animations array is an array of arrays, where each sub-array represents a single animation. 
//Each sub-array contains three values: the indices of the two bars being compared, and the height of the bar being overwritten. 
//The first animation in the animations array will be performed first, the second animation will be performed second, and so on.
// The animationSpeed variable is used to adjust the speed of the animations. You can adjust this value as needed.
  




 const quickSort = () => {
  // Handles displaying quick sort animations
  const animations = getQuickSortAnimations(array.slice());
  for (let i = 0; i < animations.length; i++) {
    const isColorChange =  animations[i][0] === "comparison1" ||  animations[i][0] === "comparison2";     // this is also correct
    // const isColorChange =  animations[i][0];    // this is also correct

    const arrayBars = document.getElementsByClassName("array-bar");
    if (isColorChange ) {
      const color = animations[i][0] === "comparison1" ? SECONDARY_COLOR:PRIMARY_COLOR;
      
      const [, barOneIndex, barTwoIndex] = animations[i];
      const barOneStyle = arrayBars[barOneIndex].style;
      const barTwoStyle = arrayBars[barTwoIndex].style;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED_MS);
    } else {
      const [, barIndex, newHeight] = animations[i];
      if (barIndex === -1) {
        continue;
      }
      const barStyle = arrayBars[barIndex].style;
      setTimeout(() => {
        barStyle.height = `${newHeight/2}px`;
      }, i * ANIMATION_SPEED_MS);
    }
  }
}

const bubbleSort = () => {
  // Handles displaying quick sort animations
  const animations = getBubbleSortAnimations(array.slice());
  for (let i = 0; i < animations.length; i++) {
    const isColorChange =  animations[i][0] === "comparison1" ||  animations[i][0] === "comparison2";     // this is also correct
    // const isColorChange =  animations[i][0];    // this is also correct

    const arrayBars = document.getElementsByClassName("array-bar");
    if (isColorChange ) {
      const color = animations[i][0] === "comparison1" ? SECONDARY_COLOR:PRIMARY_COLOR;
      
      const [, barOneIndex, barTwoIndex] = animations[i];
      const barOneStyle = arrayBars[barOneIndex].style;
      const barTwoStyle = arrayBars[barTwoIndex].style;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED_MS);
    } else {
      const [, barIndex, newHeight] = animations[i];
      if (barIndex === -1) {
        continue;
      }
      const barStyle = arrayBars[barIndex].style;
      setTimeout(() => {
        barStyle.height = `${newHeight/2}px`;
      }, i * ANIMATION_SPEED_MS);
    }
  }
}



   const insertionSort=()  =>{
      // Handles displaying insertion sort animations
      const animations = getInsertionSortAnimations(array.slice());
      for (let i = 0; i < animations.length; i++) {
        const isColorChange = animations[i][0] === "comparison1" ||  animations[i][0] === "comparison2";
        const arrayBars = document.getElementsByClassName("array-bar");
        if (isColorChange === true) {
          const color = animations[i][0] === "comparison1"  ?  SECONDARY_COLOR:PRIMARY_COLOR;
          const [, barOneIndex, barTwoIndex] = animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } else {
          const [, barIndex, newHeight] = animations[i];
          const barStyle = arrayBars[barIndex].style;
          setTimeout(() => {
            barStyle.height = `${newHeight/2}px`;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }

  return (
    <>
    <div className="array-container">
      {array.map((value, idx) => (
        <div
          className="array-bar"
          key={idx}
          style={{
            backgroundColor: PRIMARY_COLOR,
            height: `${value/2}px`,
          }}
        >
         
        </div>
    
      ))}
      </div>
      <div className='Button'>
      <button className='btn' onClick={() => resetArray()}>Generate New Array</button>
      <button className='btn'  onClick={() => mergeSort()}>Merge Sort</button>
      <button className='btn' onClick={() => quickSort()}>Quick Sort</button>
      <button className='btn'  onClick={() => insertionSort()}>Insertion Sort</button>
      <button className='btn'  onClick={() => bubbleSort()}>Bubble Sort</button>
      </div>
       
      </>
  );
};



 //   // to generate random number between 5 and 1000
//   // Math.random() generates random number between 0 and 1
//   // Math.floor() rounds off the number to the nearest integer
//   // Math.floor(Math.random() * 100) generates random number between 0 and 99
//   // Math.floor(Math.random() * 100) + 1 generates random number between 1 and 100
//   // Math.floor(Math.random() * 100) + 5 generates random number between 5 and 104
//   // Math.floor(Math.random() * 100) + 5 generates random number between 5 and 1000
//   // Math.floor(Math.random() * (max - min + 1) + min) generates random number between min and ma   x
    export function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;

