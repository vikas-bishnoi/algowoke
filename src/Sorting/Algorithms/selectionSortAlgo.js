export function getSelectionSortAnimations(array) {
    let animations = [];
    let arrayCopy = array.slice();
    selectionSort(arrayCopy, animations);
    return [animations, arrayCopy];
}

function selectionSort(array, animations) {
    const N = array.length;
    for(let i=0; i<N; i++) {
        let idx = i;
        for(let j = i + 1; j < N; j++) {
            animations.push(["comparision1", j, idx]);
            animations.push(["comparision2", j, idx]);
            if(array[j] < array[i]) {
                idx = i;
            }
        }
        animations.push(["swap", idx, array[i]]);
        animations.push(["swap", i, array[idx]]);
        swap(array, idx, i);
    }
}