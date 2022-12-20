     
const button = document.querySelector('.left-side');
button.addEventListener ('click' , function(event) {

   var k = document.getElementById('big').innerText;
   if (k === "0") {
      document.getElementById('big').innerHTML = ""; // clears the screen if "0" is 
   }                                                //its only display on click of any button

   var buffer = event.target.innerText;   //number on the button  
   if (buffer == "C") {
     document.getElementById('big').innerHTML = "0"; // clears whatever is on the bigger screen and displays zero('0')
     document.getElementById('small').innerHTML = ""; // displays on the smaller screen
   }
   else {
   var first = document.getElementById('big').innerText; //takes whatever is on the screen
   first += buffer; // add buffer (what number is on the button) to it
   document.getElementById("big").innerHTML = first; // displays it on the screen
   }
});

const button2 = document.querySelector('.right-side');
button2.addEventListener ('click' , function(event){
   var holder = document.getElementById('big').innerText; 
   var buffer = event.target.innerText;
   var firstValue;

   if (parseInt(holder.length) === 1 && buffer === "←" ) {
    document.getElementById('big').innerHTML = "0";  
   }
   else if (buffer === "←" ) {
      document.getElementById('big').innerHTML =    holder.substring(0, holder.length - 1); // code for backspace
      document.getElementById('small').innerHTML =  "";
   }

   /*Sign Operator*/

   firstValue = Number(holder);
   if (buffer === "+") {
      previousSign = "+";
      document.getElementById('big').innerHTML = "0"; 
      document.getElementById('small').innerHTML = firstValue + " +"; //for smaller screen view 
      secondValue = new Big(Number(holder)); 
   }
   else if (buffer === "-") {
      previousSign = "-";
      document.getElementById('big').innerHTML = "0"; 
      document.getElementById('small').innerHTML = firstValue + " -"; //for smaller screen view 
      secondValue = new Big(Number(holder)); 
   }
   else if (buffer === "÷") {
      previousSign = "÷";
      document.getElementById('big').innerHTML = "0"; 
      document.getElementById('small').innerHTML = firstValue + " ÷";  //for smaller screen view 
      secondValue = new Big(Number(holder)); 
   }
   else if (buffer === "×") {
      previousSign = "×";
      document.getElementById('big').innerHTML = "0"; 
      document.getElementById('small').innerHTML = firstValue + " ×"; //for smaller screen view 
      secondValue = new Big(Number(holder)); 
   }
   else if (buffer === "%") {
      previousSign = "%";
      document.getElementById('big').innerHTML = firstValue + " ÷ 100"; 
      document.getElementById('small').innerHTML = firstValue + " ÷ 100"; //for smaller screen view 
      secondValue = new Big(Number(holder)); 
   }

   else if (buffer === "×²") {
      previousSign = "×²";
      document.getElementById('big').innerHTML = firstValue + "²"; 
      document.getElementById('small').innerHTML = firstValue + "²"; //for smaller screen view 
      secondValue = new Big(Number(holder)); 
   }
   

    if  (previousSign === "+" && buffer === "=") {
      document.getElementById('big').innerHTML =  secondValue.add(firstValue).valueOf();
      document.getElementById('small').innerHTML = 
      `${secondValue} + ${firstValue} =  ${secondValue.add(firstValue).valueOf()}`;
   }
   else if  (previousSign === "" && buffer === "=") {
      document.getElementById('big').innerHTML =  secondValue;
      document.getElementById('small').innerHTML = 
      `${secondValue}  =  ${secondValue}`;
   }
   else if  (previousSign === "-" && buffer === "=") {
      document.getElementById('big').innerHTML =  secondValue.minus(firstValue).valueOf();
      document.getElementById('small').innerHTML = 
       `${secondValue} - ${firstValue} =  ${secondValue.minus(firstValue).valueOf()}`;
   }
   else if  (previousSign === "÷" && buffer === "=") {
      document.getElementById('big').innerHTML =  secondValue.div(firstValue).valueOf();
      document.getElementById('small').innerHTML = 
      `${secondValue} ÷ ${firstValue} =  ${secondValue.div(firstValue).valueOf()}`;
   }
   else if  (previousSign === "×" && buffer === "=") {
      document.getElementById('big').innerHTML =  secondValue.times(firstValue).valueOf();
      document.getElementById('small').innerHTML = 
      `${secondValue} × ${firstValue} =  ${secondValue.times(firstValue).valueOf()}`;
      
   }
   else if  (previousSign === "%" && buffer === "=") {
      document.getElementById('big').innerHTML =  secondValue / 100;
      document.getElementById('small').innerHTML = 
      `${secondValue} ÷  100 =  ${secondValue / 100}`;
   }
   else if  (previousSign === "×²" && buffer === "=") {
      document.getElementById('big').innerHTML =  secondValue * secondValue;
      document.getElementById('small').innerHTML = 
      `${secondValue}²  =  ${secondValue * secondValue}`;
   }
})    

//The "new big()" object is working from the html page an external js file is linked to it to help with javascipt decimal function error
// The "new big()" object own the div,minus,times,add method and many others
//Glory be to God Omo i don tire 😒 hahhhhhh!!!!
// i build this but i dont still know the workings very well 😞 just having fun here