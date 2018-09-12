import sum from './utils/sum';
function goRun(a, b) {
    let t = sum(a,b)
    return a + b - 1
}

// console.log(goRun(4,5));
export default goRun;