var num1 = 1;
var num2 = 9;
//  num1="Ajay";
//  function SI (P : number , R : number , T? :number)
//  {
//    if(T != undefined)
// {
//     console.log("T is povided");
//     return P* R * T /100;
//  }
//     else 
//     return P*R/100;
//  }
function SI(P, R, T) {
    if (T === void 0) { T = 9; }
    if (T != undefined) {
        console.log("T is povided");
        return P * R * T / 100;
    }
    else
        return P * R / 100;
}
console.log(SI(12000, 2));
