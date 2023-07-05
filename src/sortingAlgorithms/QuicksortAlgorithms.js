
import { randomIntFromInterval } from "../SortingVisualizer/SortingVisualizer";

export function getQuickSortAnimations(array) {
  const animations = [];
  const copyArray = array.slice();
  QuickSortHelper(copyArray, 0, copyArray.length - 1, animations);
  // array = copyArray;   // copyArray is sorted       ???????????
  return animations;      
}

function QuickSortHelper(copyArray, startIdx, endIdx, animations) {
  let pivotIdx;
  if (startIdx === endIdx) return;
  if (startIdx < endIdx) {
    pivotIdx = partitionArray(copyArray, startIdx, endIdx, animations);
    QuickSortHelper(copyArray, startIdx, pivotIdx - 1, animations);
    QuickSortHelper(copyArray, pivotIdx + 1, endIdx, animations);
  }
}

function partitionArray(copyArray, startIdx, endIdx, animations) {
  let pivotIdx = randomIntFromInterval(startIdx, endIdx); // get a random index in array for pivot

  animations.push(["comparison1", pivotIdx, endIdx]);
  animations.push(["swap", pivotIdx, copyArray[endIdx]]);
  animations.push(["swap", endIdx, copyArray[pivotIdx]]);
  animations.push(["comparison2", pivotIdx, endIdx]);
  swapEleInArray(copyArray, pivotIdx, endIdx);

  let lti = startIdx;

  for (let i = startIdx; i < endIdx; ++i) {
    animations.push(["comparison1", i, endIdx]);
    animations.push(["comparison2", i, endIdx]);
    if (copyArray[i] <= copyArray[endIdx]) {
      animations.push(["comparison1", i, lti]);
      animations.push(["swap", i, copyArray[lti]]);
      animations.push(["swap", lti, copyArray[i]]);
      animations.push(["comparison2", i, lti]);
      swapEleInArray(copyArray, i, lti);
      lti++;
    }
  }
  animations.push(["comparison1", lti, endIdx]);
  animations.push(["swap", endIdx, copyArray[lti]]);
  animations.push(["swap", lti, copyArray[endIdx]]);
  animations.push(["comparison2", lti, endIdx]);

  swapEleInArray(copyArray, lti, endIdx);
  return lti;
}

function swapEleInArray(copyArray, firstIdx, secondIdx) {
  let temp = copyArray[firstIdx];
  copyArray[firstIdx] = copyArray[secondIdx];
  copyArray[secondIdx] = temp;
}
