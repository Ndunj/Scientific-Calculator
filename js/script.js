const buttonClick=(value)=>{
 const input = document.querySelector("input");

 
  input.value+=value;
};

const equalTo=()=>{
 try{
  const input = document.querySelector("input");
   const answer= input.value;
    const result=eval(answer);//eval is a risky function: should be used with abdolute caution!
     input.value= result;
     }
   catch(error){
alert(error +" "+ "enter number first");//"enter the number before clicking 5he squar root button");
  }
};
const log=(num)=>{
try{ const input=document.querySelector("input");
  num=input.value;
   const logx = Math.log10(num);
     input.value= logx.toFixed(5);
     }
     catch(err){
     alert(err);
     };
}
const reset=()=>{
 input = document.querySelector("input");
  input.value="";
};
//below is the sine function
const Sin =(angleInDegreese)=>{
try {const input=document.querySelector("input");
  angleInDegrees=input.value;
   let sineOfAngle= Math.sin(angleInDegrees*Math.PI/180);
     input.value= sineOfAngle.toFixed(5);
    if(angleInDegrees==90){
     input.value=1;
     };
  }
     catch(err){
     alert(err);
     };
};
//below is the cosine function
const Cos =(angleInDegrees)=>{
 try{ const input=document.querySelector("input");
  angleInDegrees=input.value;
   let cosineOfAngle= Math.cos(angleInDegrees*Math.PI/180);
     input.value= cosineOfAngle.toFixed(5);
  if(angleInDegrees==90){
    input.value=0;
  }

  
  }
  catch(error){
  alert(error);
  };
};
//below is the tangent function
const Tan =(angleInDegrees)=>{
 try{const input=document.querySelector("input");
   angleInDegrees=input.value;
     let tanOfAngle= Math.tan(angleInDegrees*Math.PI/180);
       input.value= tanOfAngle.toFixed(5);;
if(angleInDegrees==90){
 input.value="Maths Error";
  };
}
catch(error){
 alert(error);
  };
};
// below is the arcsine(sine inverse) function
const arcSine=(number)=>{
try{
const input=document.querySelector("input");
number= input.value;
if(number>=-1 && number<=1){
 const angleInRadians =Math.asin(number);
 input.value=((angleInRadians*180)/Math.PI).toFixed(2);

    }
   else{
   input.value="Math Error";
   }
}
catch(error){
alert(error);
  };

};
//below is the arcCosine(cosine inverse)function
const arcCosine=(number)=>{
 try{
  const input=document.querySelector("input");
   number= input.value;
    if(number>=-1 && number<=1){
      const angleInRadians =Math.acos(number);
         input.value=((angleInRadians*180)/Math.PI).toFixed(2) ;

   }
   else{
     input.value="Math Error";
   }
}
 catch(error){
   alert(error);
  };

};
//below is the arcTan(tangent inverse) function 

const arcTan=(number)=>{
 try{
  const input=document.querySelector("input");
   number= input.value;
     
        const angleInRadians =Math.atan(number);
           input.value=((angleInRadians*180)/Math.PI).toFixed(2);
        }
       catch(error){
         alert(error);
      };

    };

const squareRoot=(num)=>{
 try{const input=document.querySelector("input")
  num =input.value;
   const sqrt= Math.sqrt(num);
    input.value=sqrt;
}
 catch(err){
  alert(err);
 }
}
const del=(str)=>{
 const input= document.querySelector("input");
  str= input.value;
   const DEL=str.substring(0,str.length-1 );
    input.value= DEL;

}

