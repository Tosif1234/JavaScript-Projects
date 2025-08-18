let choice;
let totalBill = 0;
let totalItems = 0;

let highestPrice = 0;
let lowestPrice = 101;
let gst = 0, discount = 0, itemPrice=0;

let output = document.getElementById("output");

do {
  console.log("==== Smart Cafe Billing System ====");
  console.log("1. Coffee (₹50)");
  console.log("2. Tea (₹30)");
  console.log("3. Sandwich (₹80)");
  console.log("4. Pastry (₹100)");
  console.log("0. Exit....\n");

  choice = Number(prompt("Enter Your Choice : "));

  if (choice === 1) {
    itemPrice = 50;
    totalBill += itemPrice;
    totalItems++;
    console.log("You Ordered Coffe... Price: ₹80");
    console.log(`Current Total : ₹${totalBill}`);
  } else if (choice === 2) {
    itemPrice = 30;
    totalBill += itemPrice;
    totalItems++;
    console.log("You Ordered Tea... Price: ₹30");
    console.log(`Current Total : ₹${totalBill}`);
  } else if (choice === 3) {
    itemPrice = 80;
    totalBill += itemPrice;
    totalItems++;
    console.log("You Ordered Sandwitch... Price: ₹80");
    console.log(`Current Total : ₹${totalBill}`);
  } else if (choice === 4) {
    itemPrice = 100;
    totalBill += itemPrice;
    totalItems++;
    console.log("You Ordered Pastry... Price: ₹100");
    console.log(`Current Total : ₹${totalBill}`);
  } else if (choice === 0) {
    if(lowestPrice == 101){
      lowestPrice = 0;
    }
    if (totalBill > 1000) {
      discount = (totalBill * 20) / 100;
    } 
    else if (totalBill > 500) {
      discount = (totalBill * 10) / 100;
    } 
    else {
      discount = 0;
    }

    let finalAmount = totalBill - discount;
    gst = (finalAmount * 5) / 100;
    let grandTotal = finalAmount + gst;
    
    console.log(`Thank You... Your Total Bill is ₹${totalBill}`);
    console.log(`Total Items Sold: ${totalItems}`);
    console.log(`Highest priced item : ${highestPrice}`);
    console.log(`Lowest priced item : ${lowestPrice}`);

    document.write(`<h2>Thank You... Your Total Bill is ₹${totalBill}</h2>`);
    document.write(`<p>Total Items Sold: ${totalItems}</p>`);
    document.write(`<p>Highest priced item: ₹${highestPrice}</p>`);
    document.write(`<p>Lowest priced item: ₹${lowestPrice}</p>`);

    document.write(`<h3>GST & Discount</h3>`);
    document.write(`<p>Subtotal: ₹${totalBill}</p>`);
    document.write(`<p>Discount: ₹${discount}</p>`);
    document.write(`<p>After Discount: ₹${finalAmount}</p>`);
    document.write(`<p>GST (5%): ₹${gst}</p>`);
    document.write(`<b>Grand Total: ₹${grandTotal}</b><br>`);

    let avgPrice = totalBill / totalItems;

    document.write(`<h3>Report</h3>`);
    document.write(`<p>Total Items Sold: ${totalItems}</p>`);
    document.write(`<p>Highest priced item: ₹${highestPrice}</p>`);
    document.write(`<p>Lowest priced item: ₹${lowestPrice}</p>`);
    document.write(`<p>Average priced item: ₹${avgPrice}</p>`);

    document.write(`<br><b>Cafe Password Changed Successfully...</b>`);



  } else {
    console.log("Invalid Choice...");
  }
  if (itemPrice > highestPrice) {
      highestPrice = itemPrice;
    }

  if (itemPrice < lowestPrice) {
      lowestPrice = itemPrice;
    }
} while (choice !== 0);

let password = "1234";

let oldPassword = prompt("Enter old password:");
let newPassword = prompt("Enter new password:");

if (oldPassword === password) {
 
    if (newPassword.length >= 8 && /[A-Z]/.test(newPassword) && /[!@#$%^&*]/.test(newPassword) && /\d/.test(newPassword)) 
      {
        password = newPassword;
        console.log("Cafe Password changed successfully.");
        document.write(`<br><b>Cafe Password Changed Successfully...</b>`);
    } 
    else {
        console.log("New password must be at least 8 characters, contain one uppercase letter, one number, and one special character.");
        document.write(`<br><b>New password must be at least 8 characters, contain one uppercase letter, one number, and one special character.</b>`);
    }
} 
else {
    console.log("Incorrect old password.");
    document.write(`Incorrect old password`);
}

