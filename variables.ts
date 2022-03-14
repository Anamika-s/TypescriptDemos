 
  
  let num1:number =1;
  let num2: number = 9;
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


  function SI (P : number , R : number , T :number= 9)
   {
     if(T != undefined)
  {
      console.log("T is povided");
      return P* R * T /100;
   }
      else 
      return P*R/100;
   }
   console.log(SI(12000,2,10));
   console.log(SI(12000,2)); // Here it will take 9 as def value 
