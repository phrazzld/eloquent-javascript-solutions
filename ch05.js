// Eloquent JavaScript
// Chapter 05
//
// Solutions by Phaedrus
// 2018.06.05

// Flattening
let arrays = [[1, 2, 3], [4, 5], [6]]
let arr = arrays.reduce((a, b) => a.concat(b))
console.log(arr)

// Your Own Loop
const loop = (val, test, update, bod) => {
    for (let i = val; test(i); i = update(i)) {
        bod(i)
    }
}

// Everything
const everyLoop = (array, test) => {
    while (array.length > 0) {
        let x = array.shift()
        if (!test(x)) {
            return false
        }
    }
    return true
}

const everySome = (array, test) => {
    // I don't fookin' know mate
}

const dominantDirection = text => {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0))
        return script ? script.name : "none"
    }).filter(({name}) => name !== "none")

    let dominant = scripts.reduce((a, b) => a > b ? a : )

    return SCRIPTS.filter(s => s.name === dominant.name)[0].direction
}
