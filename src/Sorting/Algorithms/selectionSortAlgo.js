export function getSelectionSortAnimations(array) {
    let animations = [];
    let arrayCopy = array.slice();
    selectionSort(arrayCopy, animations);
    console.log("ads", animations.length)
    array = arrayCopy;
    return [animations, array];
}

function selectionSort(array, animations) {
    const N = array.length;
    for(let i = 0; i < N - 1; i++) {
        let idx = i;
        for(let j = i + 1; j < N; j++) {
            animations.push(["comparision1", j, idx]);
            animations.push(["comparision2", j, idx]);
            if(array[j] < array[idx]) {
                idx = j;
            }
        }
        animations.push(["swap", idx, array[i]]);
        animations.push(["swap", i, array[idx]]);
        swap(array, idx, i);
    }
}

function swap(array, first, second) {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}