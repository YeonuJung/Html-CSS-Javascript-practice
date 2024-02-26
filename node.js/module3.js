function temAvg(array){
    let total = 0;
    let avg = 0;
    array.forEach(temp => {
        total += temp
    });
    avg = total / (array.length)
    return avg
}

module.exports = {temAvg};