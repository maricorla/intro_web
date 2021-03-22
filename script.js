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
      
     } 
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

    }*/
  


    let addTodo = document.querySelector(".btn-add")
      addTodo.addEventListener('click', (event)=>{
        addTodoTitle(insertedTodo.value)
      })
      

      let insertedTodo= document.querySelector(".inserted-todo")
      insertedTodo.addEventListener('keyup', (event)=>{
        if(event.key==='Enter'){
          addTodoTitle(insertedTodo.value)
        }
      })

      let checkButtons= document.querySelector(".btn-check")
      if (checkButtons) {
        for(var i=0; i<checkButtons.length;i++){
            var button=checkButtons[i]
            button.addEventListener('click', checkTodo)
        }
      }


    let deleteButtons= document.querySelector(".btn-delete")
    if (deleteButtons) {
        for(var i=0; i<deleteButtons.length;i++){
            var button=deleteButtons[i]
            button.addEventListener('click', removeTodo)
        }
    }


      function checkTodo(event){
    let button=event.target
    let divContainer = button.parentElement.parentElement;
    divContainer.getElementsByClassName("list-item")[0].setAttribute("style", "text-decoration: line-through; color:green")
    
      }

    
    
      function removeTodo(event){
          let button =event.target
          button.parentElement.parentElement.parentElement.remove() 
      
       }


      function addTodoTitle(text){ 
       
          let textTodo = text 
         addRow(textTodo)
         clearText()
      
         todos.push(textTodo);
      
        saveLocalStorage()

      }

      function addRow(textOfTodo){
          let listRow = document.createElement('div')
        
          let rowTodoInList = document.querySelector(".list-todo")
          let listRowContent = `<div class="addedRow">
          <span class="list-item">${textOfTodo}</span>
          <button class="btn-delete" role="button" data-tooltip="Rimuovi"> <img class="add" src="images/delete.png"></button>
          <button class="btn-check" role="button" data-tooltip="Seleziona"> <img class="add" src="images/check.png"></button>
          </div>`
          listRow.innerHTML = listRowContent
          rowTodoInList.append(listRow)
          listRow.getElementsByClassName("btn-check")[0].addEventListener('click', checkTodo)
          listRow.getElementsByClassName("btn-delete")[0].addEventListener('click', removeTodo)


         
      }

      function clearText() {
        insertedTodo.value = "";
    }   

    function saveLocalStorage(){

      localStorage.setItem("todos", JSON.stringify(todos));

    }

    var todos = [] 
    
    var storageTodos = JSON.parse(localStorage.getItem("todos"));
    
    if (storageTodos) {
      localStorage.removeItem("todos")

      storageTodos.forEach(text => {
        addTodoTitle(text)
      });
    }

console.log(todos)

   

    

      

     
        
        

      


     