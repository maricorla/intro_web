 if(document.readyState=='loading'){
    console.log('loading')
    document.addEventListener('DOMContentLoaded', ready)
}else{
    console.log('already loaded')
    ready()
}

function ready(){
    console.log('called ready func')
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    console.log(removeCartItemButtons)
    for(var i=0; i<removeCartItemButtons.length;i++){
        var button=removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for(var i=0; i<quantityInputs.length;i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartBottons = document.getElementsByClassName('shop-item-button')
    for(var i=0; i<addToCartBottons.length;i++){
        var button = addToCartBottons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)

   
}

function purchaseClicked(){
    alert('Thank you for purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while(cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function addToCartClicked(event){
var addToCartButton = event.target
var shopItem = addToCartButton.parentElement.parentElement
var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
var image = shopItem.getElementsByClassName('shop-item-image')[0].src
console.log(title, price, image)
addItemToCart(title, price,image)
updateCartTotal()

}

function addItemToCart(title, price,image){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for(var i = 0; i<cartItemNames.length;i++){
        if(cartItemNames[i].innerText ==title){
            alert('This is slraedy added to the cart')
            return
        }
    }
    var cartRowContents = `
            <div class="cart-item cart-header cart-column">
            <img class="cart-item-image" src="${image}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>.
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input  class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" role="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

}

function quantityChanged(event){
    var input = event.target
   if(isNaN(input.value) || input.value <=0){
      input.value = 1
      alert('Wrong quantity')
   }
   updateCartTotal()
}

function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remodive()
    updateCartTotal()

}


function updateCartTotal(){
var cartItemContainer = document.getElementsByClassName('cart-items')[0]
var cartRows = cartItemContainer.getElementsByClassName('cart-row')
var total = 0;
for(var i=0; i<cartRows.length;i++){
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('cart-price')[0]
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    var price = parseFloat(priceElement.innerText.replace('$',''))
    var quantity = quantityElement.value
    total = total + (price * quantity)
}
total =Math.round(total*100)/100
document.getElementsByClassName('cart-total-price')[0].innerText = '$'+total
}  

{		
    const scrollLinks = document.querySelectorAll('a.scroll-link')
    console.log('text',scrollLinks)
    
    for(let i=0; i < scrollLinks.length; i++){
        console.log('im here')
        scrollLinks[i].addEventListener('click', function(event){
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth',
            block:'start'
        })
        })
    }
}





