
// explaination of the code below:
 // 1. getMeorgeSortAnimations(array) is the main functin that is called from SortingVisualizer.jsx
  // 2. getMergeSortAnimations(array) calls mergeSortHelper(array, 0, array.length - 1, copyArray, animations);
  // 3. mergeSortHelper(array, 0, array.length - 1, copyArray, animations) calls doMerge(mainArray, startIdx, middleIdx, endIdx, copyArray, animations);
  // 4. doMerge(mainArray, startIdx, middleIdx, endIdx, copyArray, animations) is the function that actually does the sorting
  // 5. doMerge(mainArray, startIdx, middleIdx, endIdx, copyArray, animations) calls mergeSortHelper(copyArray, startIdx, middleIdx, mainArray, animations);  
  // 6. mergeSortHelper(copyArray, startIdx, middleIdx, mainArray, animations) calls mergeSortHelper(copyArray, middleIdx + 1, endIdx, mainArray, animations);
  // 7. mergeSortHelper(copyArray, middleIdx + 1, endIdx, mainArray, animations) calls doMerge(mainArray, startIdx, middleIdx, endIdx, copyArray, animations);
  // 8. doMerge(mainArray, startIdx, middleIdx, endIdx, copyArray, animations) calls mergeSortHelper(copyArray, startIdx, middleIdx, mainArray, animations);  
  // 9. mergeSortHelper(copyArray, startIdx, middleIdx, mainArray, animations) calls mergeSortHelper(copyArray, middleIdx + 1, endIdx, mainArray, animations);
  // 10. mergeSortHelper(copyArray, middleIdx + 1, endIdx, mainArray, animations) calls doMerge(mainArray, startIdx, middleIdx, endIdx, copyArray, animations);

 
 export function getMergeSortAnimations(array) {                                                                          
    const animations = [];                                                                                                                                                      
    if (array.length <= 1) return array;
    const copyArray = array.slice();   // copyArray is a copy of array
    mergeSortHelper(array, 0, array.length - 1, copyArray, animations); 
    return animations;
  }
  function mergeSortHelper(mainArray, startIdx, endIdx, copyArray, animations) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(copyArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(copyArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, copyArray, animations);
  }                                                                                                             
  function doMerge(mainArray, startIdx, middleIdx, endIdx, copyArray, animations) {
    let k = startIdx;      // k is the index of the mainArray that we are going to overwrite(merge)                                                                                                                                                                                                                                                                                                                                                                         
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      animations.push([i, j]); // Values to compare; change color
      animations.push([i, j]); // Values to compare; revert color
      if (copyArray[i] <= copyArray[j]) {
        animations.push([k, copyArray[i]]); // Overwrite value at index k
        mainArray[k++] = copyArray[i++];
      } else {
        animations.push([k, copyArray[j]]); // Overwrite value at index k
        mainArray[k++] = copyArray[j++];
      }
    }
    while (i <= middleIdx) {
      animations.push([i, i]); // Values to compare; change color
      animations.push([i, i]); // Values to compare; revert color
      animations.push([k, copyArray[i]]); // Overwrite value at index k
      mainArray[k++] = copyArray[i++];
    }
    while (j <= endIdx) {
      animations.push([j, j]); // Values to compare; change color
      animations.push([j, j]); // Values to compare; revert color
      animations.push([k, copyArray[j]]); // Overwrite value at index k
      mainArray[k++] = copyArray[j++];
    }
  }

  

 
  // export function getInsertionSortAnimations(array) {


  