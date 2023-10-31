// // console.log("Hallo");
// // document.getElementById('login-heading').innerHTML =" Enter your details";
// // document.getElementsByClassName('login-heading')[0].innerHTML = " Enter your details";
// // document.getElementsByClassName('login-heading')[1].innerHTML = " Enter your details";
// // document.getElementsByTagName('h3')[0].innerHTML= "p tag";

// // var myname="Muhammed Midlaj";
// // var hed = document.getElementById("login-heading");

// // hed.style.color = "red";
// // hed.style.fontSize =  "19px";
// // hed.style.fontFamily = "arial";
// // hed.style.fontWeight = "bold";

// // var hed0 = document.getElementsByClassName("login-heading")[0];

// // hed0.style.fontSize = "19px";
// // hed0.style.color = "blue";
// // hed0.style.fontFamily = "arial";
// // hed0.innerHTML = "Hallo How are you"

// // var hed2 = document.getElementsByClassName("login-heading")[1];
// // hed2.style.color ="red";

// // var tag1= document.getElementsByTagName("p")[0];

// // tag1.style.color = "yellow";
// // tag1.innerHTML = myname;
// // tag1.style.fontWeight = "bold";
// // tag1.style.fontSize = "20px";


// // var a,b;
// // a="6";
// // b="10";
// //  console.log(a === b);
// //  console.log( a+b-a);
// //  console.log( a*b+a);
// // function hallo(){
//     //     console.log(x);
//     //     this.x++;
//     //     hallo();
//     // }
// //     var x=document.getElementById('login-heading');
// //     x.innerHTML="Hallo How Are you";

// // //Arrow function

// // hallo = () => 
// // {
// //     console.log("hallo,its form Arrow function");
// // }

// // hallo();
// // //Object
// user ={
//     firstName : "Jhone",
//     secondName : "Wick",
//     age : 45,
// };
// user.age=65;
// // delete user.secondName;
// user.firstName="Ali";
// console.log( user);
// for ( let x in user)
// {
//     document.write("<br>"+x+' = '+user[x]);
// }


// // //array 

// // var my = "midla j m";
// //  console.log(my.indexOf("j"));
// //  let array = ["Midlaj","annath",myarray = ["A","B","C"];1,2];
// //  var i=0;
// //  do
// //  {
// //     console.log(array[i]);
// //     i++
// //  }while(i<4);
 
// //  var t="malidweeb";
// //  var y= t.slice(0 , 4);
// //  console.log(y);

// //  var a=Math.random()*1000000;
// //  let b="20";
// //  b=parseInt(b);
// //  a=a.toString();


// //  console.log(a);
// //  console.log(b);


// //Array
//    let myarray = ["A","B","C"];

//     myarray.push("D");
//     console.log(myarray);

//     myarray.pop();
//     console.log(myarray);

//     myarray.unshift("@");
//     console.log(myarray);

//     myarray.shift();
//     console.log(myarray);

//     console.log(myarray.length);

//     myarray.splice(4,0,"D");
    
//     console.log(myarray);

//     myarray = ["C","B","A"];
//     myarray.reverse();

//     let newArray = myarray.slice();

//    console.log(newArray);

//    for(let x of myarray)
//    {
//     document.write("<br>"+x );
//    }


var printl=document.getElementById('Label');
var label=true;
var operation=true;
var fNum;
var sNum;
var rerult;
var operat;


function cliked(val){
   
   
    if(label)
    {
        printl.innerHTML= "";
        label=false;
    }
    
    if(operation)
    {
         fNum=printl.innerHTML +=val;
         console.log(parseInt(fNum));

         

    }
        else
        {
            sNum=printl.innerHTML +=val;

            console.log( parseInt(sNum));
            // console.log("first  "+ fNum);

           
        
        }

    
        
        
    result = () =>{
        parseInt(fNum);
        parseInt(sNum);
        // console.log(typeof sNum);
     
        console.log(typeof operat);
        try{
            switch(operat)
        {
            case '+':
                printl.innerHTML=parseInt(fNum)+
        parseInt(sNum);
        fNum=parseInt(fNum)+
      parseInt(sNum);

                break;
    
                case '-':
                    printl.innerHTML=parseInt(fNum)-
                    parseInt(sNum);
                    fNum=parseInt(fNum)
                  parseInt(sNum);
                break;
    
                case '*':
                    printl.innerHTML=parseInt(fNum)*
                    parseInt(sNum);
                    fNum=parseInt(fNum)*
                  parseInt(sNum);
                break;
    
                case '/':
                    printl.innerHTML=parseInt(fNum)/
                    parseInt(sNum);
                    fNum=parseInt(fNum)/
                  parseInt(sNum);
                break;
    
               default:
                printl.innerHTML="error";
        }
        }
        catch(error)
        {
            printl.innerHTML="Sorry Its not possible";
        }
          operation=true;
          sNum=0;
      

    }
        
    operator = (opr) =>{
       
        
    
       operat=opr;
        console.log("operator succes");
        operation=false;
        printl.innerHTML= '';
    
       
        if(sNum!=null)
        {
            result();
        }
       
    }

   
}
clearall= () =>{
    fNum=null;
    sNum=null;

    printl.innerHTML= "0"; 
    operation=true;
    label=true;
    i=1;

}
