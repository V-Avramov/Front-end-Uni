//1.
const A = new Array(10,5,13,18,51);
function Ex1 (nums) {
    for(let i=0; i<nums.length;i++){
        console.log(nums[i]);
    }
}
//Ex1(A);

function Ex2(){
    let nums = new Array();
    for(let i=0; i<A.length;i++){
        nums[i]=A[i]*2;
    }
    return nums;
}
//let B;
//B=Ex2();
//console.log(B);

function Ex3(){
    let arr = new Array();
    for(let i = 0; i < A.length; i++){
        if(A[i]%2===0){
            arr.push(A[i]);
        }
    }
    return arr;
}

//console.log(Ex3());

function Ex4(arr){
    for(let i = 0; i<arr.length; i++){
        if(arr[i]<10){
            return true;
        }
    }
    return false;
}

//console.log(Ex4(B));

function Ex5(arr){
    let result = new Array;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%3 == 0){
            result.push(arr[i]);
        }
    }
    return result;
}

//console.log(Ex5(A));

const Ex6 = A.reduce(function(a, b){
    return a + b;
}, 0)

//console.log(Ex6);

    //Ex7
//const B = A.slice(A.length-2, A.length)

//console.log(B);

//2.
    //1
const curr = new Date();

let dateArray = [curr];
    //2
const december8th = new Date(2018, 11, 8, 21);

dateArray.push(december8th);

const getDaysInMonth = date =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    //3
function getMonthLenWeekDay(d){
    arr = new Array();
    daysinmonth=getDaysInMonth(d);
    arr.push(daysinmonth);
    arr.push(d.getDay());
    return arr;
}

let Ex23 = new Array();

Ex23.push(getMonthLenWeekDay(curr));
Ex23.push(getMonthLenWeekDay(december8th));

//console.log(Ex23);
    //4
function merge(arr1, arr2){
    let result = new Array();
    
    result.push(`Date: ${arr1.getDate()}.${arr1.getMonth()+1}.${arr1.getFullYear()}`);
    result.push(`time: ${arr1.getHours()}:${arr1.getMinutes()}:${arr1.getSeconds()}`);
    switch (arr2[1]){
        case 0 :
            result.push("Sunday");
            break;
        case 1 :
            result.push("Monday");
            break;
        case 2 :
            result.push("Tuesday");
            break;
        case 3 :
            result.push("Wednesday");
            break;
        case 4 :
            result.push("Thursday");
            break;
        case 5 :
            result.push("Friday");
            break;
        default:
            result.push("Saturday");
            break;
    }
    result.push(`${arr2[0]} days`);
    return result;
}

let Ex24 = new Array();
Ex24.push(merge(curr, Ex23[0]));
Ex24.push(merge(december8th, Ex23[1]));

console.log(Ex24);