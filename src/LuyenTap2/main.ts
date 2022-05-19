
/*
1,
Hãy copy các array, object sau để khi chỉnh sửa bản copy không ảnh hưởng đến bản gốc
a, [3,5,4,9,8]
b, {name:’tung’, age:20}
c, [
	{name:’tung’, age:20},
	{name:’cuong’, age:21}
]

d, {
	name: ‘trung’,
	friend:[‘hai’, ‘vinh’]
	address:{number: 20, street:’nguyen trai’}
}
 */
interface nameList{
    name:string
}
interface age{
    age:number
}
interface contact {

    friend?:string[];
    addRess?:{number:number,street:string};
}
export type nameAgeList= nameList & age
export type contacts = nameList & contact

//a
export const array:Array<number>=[3,4,5,6,7];
//b
export const objcetAgeName:nameAgeList={
    name:"chiendau",
    age:25
}
//c
export const arrayListAgename:nameAgeList[]=[
    {name:"chienbinh",age:45},
    {name:"phapsu",age:35}
]

//d
export const abc:contacts={
    name:"thanh",
    friend:["chien","van"],
    addRess:{number:5,street:"that"},
}
//Hãy copy các array, object a,b,c,d để khi chỉnh sửa bản copy không ảnh hưởng đến bản gốc;

function check(arr?:nameAgeList[],arr2?:number[], obj?:nameAgeList,obj2?:contacts) {
    let newArray:any[]=[];
    if (arr?.length ){
        newArray.push(arr)
    }
    if (arr2?.length){
        newArray.push(arr2)
    }
    if (obj?.age !== undefined || obj?.name !==undefined){
        newArray.push(obj);
    }
    if (obj2?.name !== undefined || obj2?.addRess !==undefined || obj2?.friend !==undefined){
        newArray.push(obj2);
    }
    return newArray
}
let arr=check(arrayListAgename,array,objcetAgeName,abc);
console.log("1\t"+arr[0])
console.log("2\t"+arr[1])
console.log("3\t"+arr[2])
console.log("4\t"+arr[3])
