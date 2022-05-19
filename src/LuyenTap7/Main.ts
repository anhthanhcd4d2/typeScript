
interface callback {
    (a: number, b: number, c: number[]): number
}

type MyCallback = (name: number) => number;
type MyCallback2 = (a: any,b:any)=> number;

function sort2(value: number[], fc: MyCallback) {
    let a: number[] = []
    for (const x in value) {
        a.push(fc(value[x]))
    }
    return a
}

class CallbackTest {
    constructor(private _a: number[]) {
    }

    public map2(mycallback: callback) {

        let newArray: number[] = []
        let size = this._a.length
        for (let i = 0; i < this._a.length; i++) {
            newArray.push(mycallback(this._a[i], i, this._a))
        }
        return newArray

    }

    public fiter2(mycallback: callback):number[] {
        let newArray: number[] = []
        for (let i = 0; i < this._a.length; i++) {
            if (mycallback(this._a[i], i, this._a)) {
                newArray.push(this._a[i]);
            }
        }
        return newArray
    }
    public findIndex(mycallback: callback) {
        for (let i = 0; i < this._a.length; i++) {
            if (mycallback(this._a[i], i, this._a)) {
              return  i;
            }
        }
    }

    public reduce2(mycallback: callback, count?: number) {
        let item: number;
        let i = 0
        if (count === undefined) {
            item = this._a[0];
            i = 1
        } else {
            item = count;
        }
        for (; i < this._a.length; i++) {
            item += (mycallback(this._a[i], i, this._a))
        }
        return item
    }

    public forEach2(mycallback: callback) {
        for (const aKey in this._a) {
            mycallback(this._a[aKey], parseInt(aKey), this._a)
        }
    }
    public sort2(mycallback: MyCallback2) {
        let a=1
        let b=2
        if ( mycallback(a,b)< 0){
            for (const aKey in this._a) {
                for (let i = parseInt(aKey)+1;  i < this._a.length ; i++) {
                    if (this._a[aKey]>this._a[i]){
                        [this._a[aKey],this._a[i]]=[this._a[i],this._a[aKey]]
                    }
                }
            }
        }else {
            for (const aKey in this._a) {
                for (let i = parseInt(aKey)+1;  i < this._a.length ; i++) {
                    if (this._a[aKey]<this._a[i]){
                        [this._a[aKey],this._a[i]]=[this._a[i],this._a[aKey]]
                    }
                }
            }
        }
    }
}

/*
Bai 1:
	cho arr = [1,3,5,4,7,9,8]
	a, Hãy viết function sum có đầu vào là array và callback
		function tính tổng các các phần tử theo điều kiện
		VD tính tổng các số chẵn, tổng các số lẻ, tổng các phần tử x2, x3

	b, hãy viết function tich có đầu vào là array và callback
		function tính tích các phần tử theo điều kiện
		VD tính tích các số chẵn, tích các số lẻ
		*/
let objcet1: CallbackTest = new CallbackTest([1, 3, 5, 4, 7, 9, 8]);
// @ts-ignore
let va1:number[]=objcet1.fiter2((a,b)=>{

})
/*
Bai 2:
var arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 17];
// viet function soNguyenTo có đầu vào là array và callback
// function này để trả ra các số nguyên tố trong array
// dung callback để kiểm tra số nguyên tố
// function để trả ra array các số nguyên tố
*/
/*
Bài 3
	Hãy viết function map tương tự map method có đầu vào là array và callback
		function trả ra array mới chứa kết quả là đầu ra của function callback
		*/
/*

Bai 4:	hãy viết function có chức năng tương tự findIndex có đầu vào là array và callback
		function trả ra vị trí của phần từ cần tìm theo điều kiện trong callback
*/

/*
Bài 5: 	hãy viết function có chức năng tương tự filter có đầu vào là array và callback
		function trả ra array mới chứa các phần tử được lọc theo điều kiện trong callback */


/*
Bai 6:	hãy viết function sort có chức năng tương tự sort có đầu vào là array và callback
		function trả  ra array mới chứa các phần tử được xắp xếp theo điều kiện trong callback
 */
