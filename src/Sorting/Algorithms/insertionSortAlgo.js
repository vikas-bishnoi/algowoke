export function getInsertionSortAnimations(array) {
    console.log('HI')
    let animations  = [];
    let auxillaryArray = array.slice();
    
    insertionSort(auxillaryArray, animations);
    array = auxillaryArray;
    return [animations, array];
}

function insertionSort(array, animations) {
    const N = array.length;
    for (let i = 1; i < N; i++) {
        let key = array[i];
        let j = i - 1;
        animations.push(["comparision1", j, i]);
        animations.push(["comparision2", j, i]);
        while(j >= 0 && array[j] > key) {
            animations.push(["overwrite", j + 1, array[j]]);
            array[j + 1] = array[j];
            j = j - 1;
            if(j >= 0) {
                animations.push(["comparision1", j, i]);
                animations.push(["comparision2", j, i]);
            }     
        }
        animations.push(["overwrite", j + 1, key]);
        array[j + 1] = key;
    }
}