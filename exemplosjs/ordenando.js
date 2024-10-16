const swap = (array, pos1, pos2) => {
    
    if (pos1 < array.length && pos2 < array.length && pos1 >= 0 && pos2 >= 0) {
        [array[pos1], array[pos2]] = [array[pos2], array[pos1]];  
    } else {
        console.log("Posições inválidas.");
    }
};



const shuffle = (array, numSwaps) => {
    const getRandomIndex = (length) => Math.floor(Math.random() * length);

    for (let i = 0; i < numSwaps; i++) {
        const pos1 = getRandomIndex(array.length);
        const pos2 = getRandomIndex(array.length);
        swap(array, pos1, pos2); 
    }
};



const bubble_sort = (array) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1); 
                swapped = true;  
            }
        }
    } while (swapped);  
};



const selection_sort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }
};



const quick_sort = (array, start, end) => {
    if (start < end) {
        
        const pivotIndex = partition(array, start, end);
        
        
        quick_sort(array, start, pivotIndex - 1);
        quick_sort(array, pivotIndex + 1, end);
    }
};


const partition = (array, start, end) => {
    const pivot = array[end];  
    let i = start - 1;  

    for (let j = start; j < end; j++) {
        if (array[j] <= pivot) {
            i++;
            swap(array, i, j);  
        }
    }
    
    swap(array, i + 1, end);
    return i + 1;  
};


