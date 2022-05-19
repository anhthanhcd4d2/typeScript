import {nameAgeList,contacts} from "../main";

export let  testfunction=(arr?:nameAgeList[],arr2?:number[], obj?:nameAgeList,obj2?:contacts )=> {
    let newArray=[];
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
    return newArray;
}