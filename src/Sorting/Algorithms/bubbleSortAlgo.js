export const getBubbleSortAnimations = (array) => {
    let animations  = [];
    let auxillaryArray = array.slice();
    array = bubbleSort(auxillaryArray, animations);
    return [animations, array];
}

function swap(array, first, last) {
    let temp = array[first];
    array[first] = array[last];
    array[last] = temp;
}


const bubbleSort = (array, animations) => {
    const N = array.length;

    for(let i=N-1; i>=0; i--) {
        let swapped = false;
        for(let j=0; j<i; j++) {
            animations.push(["comparision1", j, j + 1]);
            animations.push(["comparision2", j, j + 1]);
            if(array[j] > array[j+1]) {
                swapped = true;
                animations.push(["swap", j, array[j + 1]]);
                animations.push(["swap", j + 1, array[j]]);
                swap(array, j, j+1);
            }
        }
    }

    return array
}