async function run() {
    runBtn(slowSort, elements, 0, elements.length - 1);
}

async function slowSort(array, left, right) {
    if (left >= right) return;

    let mid = Math.floor((left + right) / 2);

    await slowSort(array, left, mid);
    await slowSort(array, mid + 1, right);

    if (compare(mid, right)) {
        await swap(mid, right);
    }

    await slowSort(array, left, right - 1);
}
