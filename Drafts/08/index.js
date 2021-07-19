const arr = [1, 1, 2, 3, 5, 5, 6, 7, 8, 8, 9, 10, 10];



const withoutRepeat = (arr) => {
    const repeated = [];
    arr.forEach((elem, index) => {
        const temp = [...arr];
        temp.splice(index,  1);
        console.log(temp);
    })
    return repeated;
};

console.log(withoutRepeat(arr));