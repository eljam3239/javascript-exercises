const removeFromArray = function(arr, ...args) {
    const newArray = [];
    for (let i =0;i<arr.length;i++){
        if (args.includes(arr[i])){
            continue;
        }
        newArray.push(arr[i]);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
