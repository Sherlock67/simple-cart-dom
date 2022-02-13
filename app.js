function updateCaseNumber(product,isIncreasing,price){
    const caseInput = document.getElementById(product + '-number');
  
    let caseNumber = caseInput.value ;
    if(isIncreasing){
        caseNumber = parseInt(caseNumber) + 1;
    }else if(caseNumber >0 ){
        caseNumber = parseInt(caseNumber) - 1;
        
    }
    caseInput.value = caseNumber;
    //update case total
   const caseTotal =  document.getElementById(product  +'-total');
   caseTotal.innerText = caseNumber * price;
   calculateTotal();
}
function getInput(product){
    const productInput = document.getElementById(product +'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
   
    const phoneTotal = getInput('phone')*1219;
    const caseTotal = getInput('case')*59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total-price').innerText = subTotal;
    document.getElementById('tax-total-price').innerText = tax;
    document.getElementById('full-total').innerText = totalPrice;
   
}
document.getElementById('case-plus').addEventListener('click',function(){
    updateCaseNumber('case',true,59);
    
});
document.getElementById('case-minus').addEventListener('click',function(){
    updateCaseNumber('case',false,59 );
  

});
document.getElementById('phone-plus').addEventListener('click',function(){
    updateCaseNumber('phone',true,1219);
});
document.getElementById('phone-minus').addEventListener('click',function(){
    updateCaseNumber('phone',false,1219);
});