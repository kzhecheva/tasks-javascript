const cleanRoom2 = initialArray => {
    const newArray = [];
    const dict = {};

    for (let i = 0; i < initialArray.length; i++) {
        let current = initialArray[i];
        if (current in dict) {
            dict[current] += 1;
        } else {
            dict[current] = 1;
        }
    }

    for (let key in dict) {
        const tempArray = [];
        if (dict[key] > 1) {
            for (let i = 0; i < dict[key]; i++) {
                tempArray.push(key);
            }
            newArray.push(tempArray);
        } else {
            newArray.push(Number(key));
        }
    }
    return newArray;
}

console.log(cleanRoom2([1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]));



const cleanRoom1 = array =>
    Object
    .entries(array.reduce((a, e) => (a[e] = (a[e] || 0) + 1) && a, {}))
    .map(([key, count]) => [Number(key), count])
    .sort(([k1, o1], [k2, o2]) => k1 > k2)
    .map(([key, count]) => count == 1 ? key : Array(count).fill(key));

console.log(cleanRoom1([1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]));




const cleanRoom = array => {
    const countObj = array.reduce((a, num) => {
        a[num] = (a[num] || 0) + 1;
        return a;
    }, {});
    return Object.entries(countObj)
        .map(([num, count]) =>
            count === 1 ? Number(num) : new Array(count).fill(Number(num))
        );
};

console.log(cleanRoom([1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]));





const cleanRoomVariation = array => {
    let stringArray = array.filter(value => typeof value === "string").sort();
    let numArray = array.filter(value => typeof value === "number").sort((a, b) => a - b);
    let resultArray = [stringArray, numArray]
    return resultArray;
}

console.log(cleanRoomVariation([1, 2, "2", 4, 591, "10", "591", 392, 391, 2, 5, 10, 2, 1, "10", 1, 1, "15", 20, 20]));