interface abc{
    value:number,
    rep:number
}
export let checkloop3 = (array: number[]) => {
    let newArray:abc[] = [];
    array.forEach((value1, index1) => {
        let count = 0
        for (let i = index1; i < array.length; i++) {
            if (index1 === array.indexOf(array[i])) {
                count++
            }
        }
        if (count > 1) {
            let a:abc = {
                value: value1,
                rep: count,
            }
            newArray.push(a)
        }
    })
    console.log(newArray)
    return newArray;
}
