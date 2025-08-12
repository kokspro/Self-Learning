// SORTING ALGORITHMS BENCHMARK
// Comprehensive performance testing for different sorting algorithms

// Import sorting functions (copy them here since we can't import in browser)
// INSERTION SORT
function insertionSort(arr) {
    const sortedArray = [...arr];
    
    for (let i = 1; i < sortedArray.length; i++) {
        let current = sortedArray[i];
        let j = i - 1;
        
        while (j >= 0 && sortedArray[j] > current) {
            sortedArray[j + 1] = sortedArray[j];
            j--;
        }
        sortedArray[j + 1] = current;
    }
    
    return sortedArray;
}

// MERGE SORT
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
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
    
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// QUICK SORT
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// NATIVE SORT (for comparison)
function nativeSort(arr) {
    return [...arr].sort((a, b) => a - b);
}

// ARRAY GENERATORS
const ArrayGenerators = {
    random: (size) => Array.from({length: size}, () => Math.floor(Math.random() * size)),
    
    sorted: (size) => Array.from({length: size}, (_, i) => i),
    
    reversed: (size) => Array.from({length: size}, (_, i) => size - i),
    
    nearlySorted: (size) => {
        const arr = Array.from({length: size}, (_, i) => i);
        // Swap 5% of elements randomly
        const swaps = Math.floor(size * 0.05);
        for (let i = 0; i < swaps; i++) {
            const idx1 = Math.floor(Math.random() * size);
            const idx2 = Math.floor(Math.random() * size);
            [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
        }
        return arr;
    },
    
    manyDuplicates: (size) => Array.from({length: size}, () => Math.floor(Math.random() * 10))
};

// BENCHMARK RUNNER
function benchmarkSort(sortFunction, array, iterations = 5) {
    const times = [];
    
    for (let i = 0; i < iterations; i++) {
        const testArray = [...array]; // Fresh copy each time
        
        const start = performance.now();
        sortFunction(testArray);
        const end = performance.now();
        
        times.push(end - start);
    }
    
    return {
        average: times.reduce((a, b) => a + b, 0) / times.length,
        min: Math.min(...times),
        max: Math.max(...times),
        times: times
    };
}

// COMPREHENSIVE BENCHMARK
function runComprehensiveBenchmark() {
    const algorithms = [
        { name: 'Insertion Sort', func: insertionSort },
        { name: 'Merge Sort', func: mergeSort },
        { name: 'Quick Sort', func: quickSort },
        { name: 'Native Sort', func: nativeSort }
    ];
    
    const sizes = [100, 500, 1000, 2500, 5000];
    const arrayTypes = ['random', 'sorted', 'reversed', 'nearlySorted', 'manyDuplicates'];
    
    console.log("🚀 COMPREHENSIVE SORTING BENCHMARK");
    console.log("=" .repeat(60));
    
    arrayTypes.forEach(arrayType => {
        console.log(`\n📊 ARRAY TYPE: ${arrayType.toUpperCase()}`);
        console.log("-".repeat(50));
        
        sizes.forEach(size => {
            console.log(`\nSize: ${size} elements`);
            const testArray = ArrayGenerators[arrayType](size);
            
            algorithms.forEach(algo => {
                try {
                    const result = benchmarkSort(algo.func, testArray);
                    console.log(`  ${algo.name.padEnd(15)}: ${result.average.toFixed(2)}ms (${result.min.toFixed(2)}-${result.max.toFixed(2)}ms)`);
                } catch (error) {
                    console.log(`  ${algo.name.padEnd(15)}: ERROR (${error.message})`);
                }
            });
        });
    });
}

// QUICK BENCHMARK (smaller test)
function runQuickBenchmark() {
    const algorithms = [
        { name: 'Insertion', func: insertionSort },
        { name: 'Merge', func: mergeSort },
        { name: 'Quick', func: quickSort },
        { name: 'Native', func: nativeSort }
    ];
    
    console.log("⚡ QUICK BENCHMARK - Random Arrays");
    console.log("=" .repeat(40));
    
    [100, 1000, 5000].forEach(size => {
        console.log(`\n📏 Size: ${size}`);
        const testArray = ArrayGenerators.random(size);
        
        algorithms.forEach(algo => {
            const result = benchmarkSort(algo.func, testArray);
            console.log(`${algo.name.padEnd(10)}: ${result.average.toFixed(2)}ms`);
        });
    });
}

// BEST CASE VS WORST CASE
function runBestWorstCase() {
    console.log("\n🎯 BEST VS WORST CASE SCENARIOS");
    console.log("=" .repeat(45));
    
    const size = 1000;
    const scenarios = [
        { name: 'Best (Sorted)', array: ArrayGenerators.sorted(size) },
        { name: 'Worst (Reversed)', array: ArrayGenerators.reversed(size) },
        { name: 'Average (Random)', array: ArrayGenerators.random(size) }
    ];
    
    scenarios.forEach(scenario => {
        console.log(`\n${scenario.name}:`);
        
        const insertionResult = benchmarkSort(insertionSort, scenario.array);
        const quickResult = benchmarkSort(quickSort, scenario.array);
        const mergeResult = benchmarkSort(mergeSort, scenario.array);
        
        console.log(`  Insertion: ${insertionResult.average.toFixed(2)}ms`);
        console.log(`  Quick:     ${quickResult.average.toFixed(2)}ms`);
        console.log(`  Merge:     ${mergeResult.average.toFixed(2)}ms`);
    });
}

// MEMORY USAGE ESTIMATOR
function estimateMemoryUsage() {
    console.log("\n💾 ESTIMATED MEMORY USAGE");
    console.log("=" .repeat(30));
    
    const size = 1000;
    console.log(`For array of ${size} integers:`);
    console.log(`  Insertion Sort: ~${(size * 4)} bytes (in-place-ish)`);
    console.log(`  Merge Sort:     ~${(size * 4 * 2)} bytes (creates copies)`);
    console.log(`  Quick Sort:     ~${(size * 4 * 1.5)} bytes (filter creates copies)`);
    console.log(`  Native Sort:    ~${(size * 4)} bytes (in-place)`);
}

// RUN ALL BENCHMARKS
console.log("Starting sorting algorithm benchmarks...\n");

// Uncomment the benchmark you want to run:
runQuickBenchmark();
// runComprehensiveBenchmark();
// runBestWorstCase();
// estimateMemoryUsage();

console.log("\n✅ Benchmark complete!");
console.log("\nTip: Uncomment different functions to run specific benchmarks");
console.log("- runQuickBenchmark(): Fast overview");
console.log("- runComprehensiveBenchmark(): Detailed analysis");
console.log("- runBestWorstCase(): Algorithm behavior analysis");
console.log("- estimateMemoryUsage(): Memory footprint comparison");