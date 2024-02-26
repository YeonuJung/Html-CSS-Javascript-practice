function bigOfRandom(array){
    array.sort((a, b) => a - b);
    return array[array.length -1]
}


module.exports = {bigOfRandom};