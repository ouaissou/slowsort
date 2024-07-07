// pigeonsort.js

async function run() {
    runBtn(pigeonholeSort, elements);
}

async function pigeonholeSort(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let range = max - min + 1;

    let holes = new Array(range).fill(0);

    for (let i = 0; i < arr.length; i++) {
        holes[arr[i] - min]++;
    }

    let index = 0;
    for (let j = 0; j < range; j++) {
        while (holes[j] > 0) {
            arr[index++] = j + min;
            holes[j]--;
            await swap(index - 1, j, 0);
        }
    }
}
