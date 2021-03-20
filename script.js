
    
    /* const grandparent = document.querySelector(".grandparent");
    const parent= document.querySelector(".parent");
    const child= document.querySelector(".child");
    console.log(grandparent);
    document.addEventListener("click", e => console.log(" doc Bubble"))
    
    grandparent.addEventListener("click", e =>{e.stopPropagation()
        console.log(" grand Bubble")})
    

   parent.addEventListener("click", e =>{e.stopPropagation()
    console.log(" parent Bubble")})
  
 child.addEventListener("click", e =>{e.stopPropagation()
    console.log(" child Bubble")})

    let rectangle = document.querySelector(".rectangle")
    let circle1= document.querySelector(".circle1")
    let circle2= document.querySelector(".circle2")
    let circle3= document.querySelector(".circle3")

    circle1.addEventListener("click",e=>{
        console.log(rectangle.style.backgroundColor)
        rectangle.style.backgroundColor='blueviolet'
    })
    circle2.addEventListener("click",e=>{
        console.log(rectangle.style.backgroundColor)
        rectangle.style.backgroundColor='greenyellow'
    })
    circle3.addEventListener("click",e=>{
        console.log(rectangle.style.backgroundColor)
        rectangle.style.backgroundColor='blue'
    })
 

     let btnPlus = document.querySelector('.plus')
     let btnMinus = document.querySelector('.minus')
     let number = document.querySelector('.number')
    
     btnPlus.addEventListener("click", addOne)
     btnMinus.addEventListener("click", minusOne)

     function addOne(){
        let num = parseInt(number.innerText)
        if(num<0 || num>=10){
            alert("Wrong number")
         }else{
             return number.innerHTML = (num+1).toString()
         }
     }

     function minusOne(){
        let num = parseInt(number.innerText)
        if(num<=0 || num>10){
           alert("Wrong number")
        }else{
            return number.innerHTML = (num-1).toString()
        }
      
     } */
     let billAmount = document.querySelector(".bill-amount")
       billAmount.addEventListener('change', updateAll)
    
     let tipPerc= document.querySelector(".tip-percentage")
       tipPerc.addEventListener('change',updateAll)

     let tipAmount = document.querySelector(".tip-amount")
     let totalAmount = document.querySelector(".total")
     
   

    function updateAll(){
        let billQuantity =  parseFloat(billAmount.value)
     let tipPercentage = parseFloat(tipPerc.value)
        let amountOfTip= (billQuantity*tipPercentage)/100
        amountOfTip = amountOfTip.toFixed(2)
        console.log(amountOfTip)
        tipAmount.value = amountOfTip
        console.log(tipAmount)
        let total = billQuantity - amountOfTip
        totalAmount.value = total.toFixed(2)
        console.log(total)

    }
   
     

/*


     function takeValue(){
      
       console.log(billQuantity)
       let tipPercentage = tipPerc.value
       console.log(tipPercentage)
       let amountOfTip= (billQuantity*tipPercentage)/100
       console.log(amountOfTip)
       let total = parseFloat(billQuantity) + parseFloat(amountOfTip)
       console.log(total)
     }
     takeValue()
      */
     