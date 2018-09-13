import sum from './utils/sum';

function playWithNumbers(a, b) {
    let t = sum(a,b)
    return t - 1
}

console.log(playWithNumbers(4,5));
export default playWithNumbers;

