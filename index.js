// //1.
// let arr = [
//     1,2,3
// ];
// let [firstColor, secondColor, thirdColor ] =arr;
// console.log("firstColor",firstColor);
// console.log("secondColor",secondColor);
// console.log("thirdColor ",thirdColor);

// //2.
// let person1 = {
//    name: "Tung",
//    age:28,
// }
// let {age,name} =person1;
// console.log("name",name);
// console.log("age",age);

// //3.
// let arr1 =[1,2,5,6];
// let arr2 =[ 7,8,9,10];
// let arr3= [...arr1,...arr2, 122];
// console.log("arr3" ,arr3);
 
// //4.
// let originalArr =[ 1 ,2 ,3, 4];
// let originalArr1 = [...originalArr];
// console.log("originalArr1",originalArr1);

// //5.
// let newnewArr = [1,2,3,5];
// let newnewArr1 = [...newnewArr];
// newnewArr1.push(4);
// console.log("arr",newnewArr1);

// //6.
// let obj1 = {
//     school :"AB",
//     gender:" Nam"
// }

// let obj2 = {
//      name :"AC",
//      age:" 33"
  
// }
// let obj3 ={...obj1 ,...obj2}
// console.log("obj3",obj3);

// //7.
// let person = {
//   name : "Tung",
//   age: 21,
//   gender: "Nam"
// }
// let person2 = {...person , country:" VietNam"};
// console.log("person2",person2);

//8.
// let arr = [ 1,3,4,5,6,8,9];
// let arr2 =arr.filter(
//     (item )=>{
//         return item %2 == 0; 
//     }
// )
// console.log("arr2",arr2);

//9.
// let arr = [1,2,3,4,5,6,7];
// let arr2 = arr.filter(
//     (item)=>{
//         return item >3;
//     }
// )
// console.log("arr2",arr2);

//10.
// let arr = [1,2,3,4,5,6,7,8,9,10,11,23];
// let arr2 = arr.filter(
//     (item)=>{
//         return item >4 && item <11;
//     }
// )
// console.log("arr2",arr2);

//11.
// let arr = [1,2,3,4,5,6,7,8,9,10,11,23];
// let arr2 = arr.filter(
//     (item)=>{
//         return item >1 && item % item ==0 && item %2 ==1;
//     }
// )
// console.log("arr2",arr2);

//12.
//  let arr = [1,2,3,4,"hihi", "hehe", "haha","huhu"];
//  let arr2 = arr.filter(
//     (item )=>{
//         return typeof item == "string";
//     }
//  )
//  console.log('arr2',arr2);
 
 //13.
//  let arr = [1,2,3,4,5];
//  let arr2 = arr.reduce(
//     (item, arr2 =0 )=>{
//         return arr2 + item;
//     }
//  )
//  console.log("arr2",arr2);

//14.
// let arr = [1,2,4,5];
// let tich = arr.reduce(
//     (item, tich )=>{
//         return tich *item ;
//     }
// )

// console.log("tich",tich);

// 15.
//  let arr = [ 1, 3, 7, 8, 4,10];
//  let arr2= arr.reduce(
//     (a,b) =>{
//         return a > b ? a: b;
//     }
//  )
//  console.log("arr2",arr2);



