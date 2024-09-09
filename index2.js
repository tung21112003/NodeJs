// //  let go = (naem) =>{
// //     console.log(naem +"hehe");
// //  }
//  go("huhi");
//  function go(naem){
//     console.log(naem +" huhe");
//  }

// let go =  ( a ,b )=>{
//    console.log((a + b )/2);
// }
// go( 3, 5);

// let go = ( a,b) => ( a + b )/2;
// let tex = go( 3,5);
// console.log(tex);
 
// let obj = {
//     name :"111",
//     age : 25,
//     school :"hhwhw",
//     gender:"nam"
// }
// let name = obj.name;
// let age = obj.age;
// let school = obj.school;
// let gender = obj.gender;
// console.log(name,age,school,gender);

// let obj3={
//     name: "huhi",
//     charAtage:31,
//     school:"codeGym"
// }

// let obj2 ={...obj,score:10 ,gender : "Nam ", ...obj3};// sử dụng đẻ copy 1 obj và thường để tránh tham chiếu
// obj2.name = " Nhân";
// console.log("obj",obj2);
// console.log("obj2",obj2);
let arr = [1,4,5,6];
let newArr =[...arr ,101];
newArr.push(100);
console.log("arr" +arr);
console.log("newArrr"+newArr);