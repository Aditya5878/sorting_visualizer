export function getInsertionSortAnimations(array) {
  let animations = [];
  let copyArray = array.slice();
  insertionSort(copyArray, animations);
  return animations;
}

function insertionSort(copyArray, animations) {
  const length = copyArray.length;
  for (let i = 1; i < length; i++) {
    let position = copyArray[i];
    let j = i - 1;
    animations.push(["comparison1", j, i]);
    animations.push(["comparison2", j, i]);
    while (j >= 0 && copyArray[j] > position) {
      animations.push(["overwrite", j + 1, copyArray[j]]);
      copyArray[j + 1] = copyArray[j];
      j = j - 1;
      if (j >= 0) {
        animations.push(["comparison1", j, i]);
        animations.push(["comparison2", j, i]);
      }
    }
    animations.push(["overwrite", j + 1, position]);
    copyArray[j + 1] = position;
  }
}
