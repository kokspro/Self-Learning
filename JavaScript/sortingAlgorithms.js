// SORTING ALGORITHMS
// Implementation of common sorting algorithms for learning purposes

// INSERTION SORT
// Time Complexity: O(n²) average/worst case, O(n) best case
// Space Complexity: O(1)
// Good for: Small datasets, nearly sorted data
function insertionSort(arr) {
    const sortedArray = [...arr]; // Don't modify original array
    
    for (let i = 1; i < sortedArray.length; i++) {
        let current = sortedArray[i];
        let j = i - 1;
        
        // Move elements that are greater than current to one position ahead
        while (j >= 0 && sortedArray[j] > current) {
            sortedArray[j + 1] = sortedArray[j];
            j--;
        }
        sortedArray[j + 1] = current;
    }
    
    return sortedArray;
}

// MERGE SORT
// Time Complexity: O(n log n) all cases
// Space Complexity: O(n)
// Good for: Large datasets, stable sorting needed
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    // Add remaining elements
    return result
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

// QUICK SORT
// Time Complexity: O(n log n) average, O(n²) worst case
// Space Complexity: O(log n) average
// Good for: General purpose, in-place sorting
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// TESTING THE ALGORITHMS
console.log("=== SORTING ALGORITHMS TEST ===");

const testArray = [64, 34, 25, 12, 22, 11, 90, 5];
console.log("Original array:", testArray);

console.log("\nInsertion Sort:", insertionSort(testArray));
console.log("Merge Sort:", mergeSort(testArray));
console.log("Quick Sort:", quickSort(testArray));

// Performance comparison function
function comparePerformance(arr) {
    console.log("\n=== PERFORMANCE COMPARISON ===");
    console.log("Array size:", arr.length);
    
    const algorithms = [
        { name: "Insertion Sort", func: insertionSort },
        { name: "Merge Sort", func: mergeSort },
        { name: "Quick Sort", func: quickSort }
    ];
    
    algorithms.forEach(algo => {
        const start = performance.now();
        algo.func([...arr]); // Copy array to avoid modification
        const end = performance.now();
        console.log(`${algo.name}: ${(end - start).toFixed(4)}ms`);
    });
}

// Test with larger array
const largeArray = Array.from({length: 1000}, () => Math.floor(Math.random() * 1000));
comparePerformance(largeArray);