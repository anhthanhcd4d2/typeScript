// Bài 1:
// nhanSU = [
//     {ten: 'nguyen the su', phong: 'Hanh Chinh'},
//     {ten: 'nguyen van duc', phong: 'coder'},
//     {ten: 'lai the van', phong: 'coder'},
//     {ten: 'le van luong', phong: 'coder'},
//     {ten: 'ngo thi thao', phong: 'tester'},
//     {ten: 'dao linh huong', phong: 'tester'},
//     {ten: 'nguyen thi tra my', phong: 'Hanh Chinh'},
// ]

// chiTieu = [
//     {tenPhong: 'Hanh Chinh', chiTieu: 1200, luongCB: 1800},
//     {tenPhong: 'coder', chiTieu: 2000, luongCB: 2500},
//     {tenPhong: 'tester', chiTieu: 1300, luongCB: 1500},
// ]

// baoCaoCV = [
//     {tenNV: 'nguyen the su', soHT:300},
//     {tenNV: 'nguyen van duc', soHT:500},
//     {tenNV: 'nguyen the su', soHT:150},
//     {tenNV: 'lai the van', soHT:300},
//     {tenNV: 'nguyen the su', soHT:300},
//     {tenNV: 'ngo thi thao', soHT:240},
//     {tenNV: 'dao linh huong', soHT:500},
//     {tenNV: 'nguyen thi tra my', soHT:120},
//     {tenNV: 'dao linh huong', son HT:300},
//     {tenNV: 'ngo thi thao', soHT:360},
// ]

// Hãy dựa vào các bảng trên để tính lương cuối cùng của mỗi người trong array nhanSU biết nếu mà phòng ban của những
// người đó hoàn thành được chỉ tiêu trong bảng chiTieu thì lương của mỗi người được cộng 10% lương
// Nếu k hoàn thành chỉ tiêu thì bị trừ đi 2% lương
// Biết tổng chỉ tiêu của mỗi phòng đạt được bằng tổng số phần công việc của từng thành viên trong phòng đó đã thực hiện được khai báo
// là soHT trong array baoCaoCV
interface NameRoom {
    name:string;
    room:string
}
interface Targets{
    targets:number
}
interface CVnameHt{
    name:string
    soHT:number
}

type nameHtRom= NameRoom & CVnameHt
type  TargetsRoom = Targets & NameRoom

let checkRoom=(array:CVnameHt[], array2:NameRoom[])=>{
    let arr: nameHtRom[]=[]
        array.forEach((value, index) => {
        for (let i = 0; i < array2.length; i++) {
            if(value.name === array2[i].name ){
                let a:nameHtRom={
                    name:array2[i].name,
                    room:array2[i].room,
                    soHT:value.soHT
                }
                arr.push(a);
            }
        }
    })
    return arr;
}


const baoCaoCV:CVnameHt[] = [
    {name: 'nguyen the su', soHT:300},
    {name: 'nguyen van duc', soHT:500},
    {name: 'nguyen the su', soHT:150},
    {name: 'lai the van', soHT:300},
    {name: 'nguyen the su', soHT:300},
    {name: 'ngo thi thao', soHT:240},
    {name: 'dao linh huong', soHT:500},
    {name: 'nguyen thi tra my', soHT:120},
    {name: 'dao linh huong', soHT : 300},
    {name: 'ngo thi thao', soHT:360},
]
const nhanSU:NameRoom[] = [
    {name: 'nguyen the su', room: 'Hanh Chinh'},
    {name: 'nguyen van duc', room: 'coder'},
    {name: 'lai the van', room: 'coder'},
    {name: 'le van luong', room: 'coder'},
    {name: 'ngo thi thao', room: 'tester'},
    {name: 'dao linh huong', room: 'tester'},
    {name: 'nguyen thi tra my', room: 'Hanh Chinh'},
]
let arraylist=checkRoom(baoCaoCV,nhanSU);
console.log(arraylist)
let newArrayList=arraylist.map((value, index) => {
    let newarray:NameRoom[]=[]
    for (const valu of arraylist) {
        if (value.room === valu.room){
            newarray.push(value)
        }
    }
    return newarray;
})
let checkMoney=(array:CVnameHt[])=>{

}


