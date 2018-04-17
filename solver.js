let min;
let max;
let avg;
let ich;

const eps = 0.01;

let valid_possibilities = [];

const feld_min = document.getElementById('min');
const feld_max = document.getElementById('max');
const feld_ich = document.getElementById('ich');
const feld_avg = document.getElementById('avg');

// function run() {
//   console.log(feld_ich.value);
// }

//run();

function run() {
  min = feld_min.value;
  max = feld_max.value;
  ich = feld_ich.value;
  avg = feld_avg.value;
  console.log('Start run with ', min, max, ich, avg);
  for (let i = min; i <= max; i++) {
    for (let j = i; j <= max; j++) {
      for (let k = j; k <= max; k++) {
        for (let l = k; l <= max; l++) {
          for (let m = l; m <= max; m++) {
            for (let n = m; n <= max; n++) {
              for (let o = n; o <= max; o++) {
                const array = [i, j, k, l, m, n, o, ich];
                const current_avg = get_average(array);
                if (Math.abs(current_avg - avg) < eps) {
                  valid_possibilities.push(array);
                }
              }
            }
          }
        }
      }
    }
  }
  console.log(valid_possibilities);
}

function get_average(arr) {
  const n = arr.length;
  let sum = 0;
  arr.forEach(x => {
    sum += x;
  })
  return sum / n;
}