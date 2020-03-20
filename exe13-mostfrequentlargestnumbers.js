function sorting(arrNumber) {
    // code di sini
    for (let i = 0; i < arrNumber.length; i++) {
        for (let j = 0; j < arrNumber.length; j++) {
            if (arrNumber[i] < arrNumber[j]) {
                let temp = arrNumber[i]
                arrNumber[i] = arrNumber[j]
                arrNumber[j] = temp
            }
        }
    }
    return arrNumber
}

function getTotal(arrNumber) {
    // code di sini
    if (arrNumber == null || arrNumber == false) {
        return "''"
    }

    var temp2 = {}
    for (let i = 0; i < arrNumber.length; i++) {
        temp2[arrNumber[i]] = 0
    }
    for (let j = 0; j < arrNumber.length; j++) {
        temp2[arrNumber[j]]++
    }

    var highestVal = 0
    var display = 0
    for (let key in temp2) {
        if (key > highestVal) {
            highestVal = key
        }
    }
    for (let keys in temp2) {
        if (keys == highestVal) {
            display = temp2[keys]
        }
    }
    return "angka paling besar adalah " + highestVal + " dan jumlah kemunculan sebanyak " + display + " kali"
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
  //''