let min = 0;
let max = 0;
let avg = 0;
let ich = 0;

const eps = 0.01;

let valid_possibilities = [];

const feld_min = document.getElementById('min');
const feld_max = document.getElementById('max');
const feld_ich = document.getElementById('ich');
const feld_avg = document.getElementById('avg');

function run() {
  min = Number(feld_min.value);
  max = Number(feld_max.value);
  ich = Number(feld_ich.value);
  avg = Number(feld_avg.value);
  console.log('Start run with ', min, max, ich, avg);
  for (let i = min; i <= max; i++) {
    for (let j = i; j <= max; j++) {
      for (let k = j; k <= max; k++) {
        for (let l = k; l <= max; l++) {
          for (let m = l; m <= max; m++) {
            for (let n = m; n <= max; n++) {
              for (let o = n; o <= max; o++) {
                const array = [i, j, k, l, m, n, o, ich];
                console.log('Testing array ', array);
                const current_avg = get_average(array);
                console.log('current_avg: ', current_avg);
                if (Math.abs(current_avg - avg) < eps) {
                  console.log('Solution found');
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