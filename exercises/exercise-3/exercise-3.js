let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printReceipt(array){
  let totalPrice=0;
  console.log(`QTY      ITEM              TOTAL`);
  array.forEach(({ itemName, quantity, unitPrice })=> {
    console.table(`${quantity}       ${itemName}           ${(unitPrice*quantity).toFixed(2)}`);
    totalPrice+=unitPrice*quantity;
  });
  console.log(`Total=${totalPrice.toFixed(2)}`)
}
printReceipt(order);
