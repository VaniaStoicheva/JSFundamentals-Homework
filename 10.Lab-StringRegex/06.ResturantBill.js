/**
 * Created by 1234 on 9.6.2017 г..
 */
function printBill(arr) {
    let product=arr.filter((a,i)=>i%2===0);
    let prices=arr.filter((a,i)=>i%2!==0).map(Number);
    let total=prices.reduce((a,b)=>a+b);
    console.log(`You purchased ${product.join(', ')} for a total sum of ${total}`);

}
printBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);