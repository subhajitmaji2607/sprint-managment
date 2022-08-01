export const toAppCurrency = (number) => {
   if(isNaN(number)) parseFloat(number)
    return number.toLocaleString('en-In',{
        style: 'currency',     
        currency: 'INR',     
        currencyDisplay: 'symbol' 
    })
};