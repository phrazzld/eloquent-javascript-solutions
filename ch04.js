// Eloquent JavaScript
// Chapter 04
//
// Solutions by Phaedrus
// 2018.06.01

const reverseArray = arr => {
    let newArr = []
    for (let i = 1; i <= arr.length; i++) {
        newArr.push(arr.slice(arr.length-i, arr.length-i+1))
    }
    return newArr
}

const reverseArrayInPlace = arr => {
    let hold
    for (let i = 0; i < Math.floor(arr.length/2); i++) {
        hold = arr[i]
        arr[i] = arr[arr.length-(1+i)]
        arr[arr.length-(1+i)] = hold
    }
    return arr
}

const arrayToList = arr => {
    if (arr.length === 1) {
        return { value: arr.shift(), rest: null }
    } else {
        return { value: arr.shift(), rest: arrayToList(arr) }
    }
}

const listToArray = list => {
    let arr = []
    while (list.rest != null) {
        arr.push(list.value)
        list = list.rest
    }
    return arr
}

const prepend = (elem, list) => {
    return { value: elem, rest: list }
}

const nth = (list, num) => {
    let elem, i = 0
    while (list.rest != null) {
        if (i === num) {
            return list.value
        }
        i += 1
        list = list.rest
    }
}

const deepEqual = (a, b) => {
    if (typeof a === "object" && typeof b === "object") {
        if (a === null || b === null) {
            return false
        } else {
            let aKeys = Object.keys(a), bKeys = Object.keys(b)
            if (aKeys.length !== bKeys.length) {
                return false
            } else {
                for (let i = 0; i < aKeys.length; i++) {
                    if (!deepEqual(a[aKeys[i]], b[bKeys[i]])) {
                        return false
                    }
                }
                return true
            }
        }
    } else if (typeof a !== "object" && typeof b !== "object") {
        return a === b ? true : false
    } else {
        return false
    }
}
}

