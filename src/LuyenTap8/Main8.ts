

/*1, viết function replace có đầu vào là 1 string và 1 callback
function này sẽ tạo ra string mới đã thay thế các ký tự trong string gốc theo yêu cầu


VD: sửa 2 chữ a đầu tiên thành chữ e
sửa chữ hello chứ 3 , 4 ,5 thành chữ hi
sửa tất cả chữ ok thành nice


2, viết function sort có đầu vào là array và callback
function này trả ra array mới đã được xắp xếp theo yêu cầu
VD 	sắp xếp các số trong array , bỏ qua string
xắp xếp 10 phần tử đầu
sắp xếp từ phần tử thứ 3 - 20
sắp xếp các string trong array bỏ qua các number
*/
interface callback {
    value1:string;
    value2:string
}

class CallbackTest1 {
    constructor(private _value:string) {

    }
    replace2(value1:string,value2:string){
        let data=""
        if (this._value.includes(value1)){
            let left:string=this._value.slice(0,this._value.indexOf(value1)).concat(value2)
            console.log(left)
            console.log(this._value.indexOf(value1)+value1.length);
            let right:string=this._value.slice(this._value.indexOf(value1)+value1.length,)
            console.log(right)
            return left + right;
        }
    }
}
let str:CallbackTest1=new CallbackTest1("chung toi la người Việt Nam")
let a=str.replace2("toi","minh")
console.log(a)

function add(a:string, b:string):string;

function add(a:string, b:string): string;

function add(a: any, b:any): any {
    return a + b;
}
function abc(a:number,b:number):number;
function abc(a:string,b:string):string;
function abc(a:any,b:any):any{
    return a+b;
}


function display(a:string, b:string,...c:string[]):void //Compiler Error: Duplicate function implementation
function display(a:number,b:number,...c:number[]): void //Compiler Error: Duplicate function implementation
function display(a:any,b:any,...c:any[]): any //Compiler Error: Duplicate function implementation
{
    console.log(a);
}
