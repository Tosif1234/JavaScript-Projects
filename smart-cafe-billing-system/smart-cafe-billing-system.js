let choice;
let totalBill = 0;
let totalItems = 0;

let highestPrice = 0;
let lowestPrice = 101;
let gst = 0, discount = 0, itemPrice=0;

let output = document.getElementById("output");

do {
  console.log("==== Smart Cafe Billing System ====");
  console.log("1. Coffee (50/-)");
  console.log("2. Tea (30/-)");
  console.log("3. Sandwich (80/-)");
  console.log("4. Pastry (100/-)");
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

    output.innerHTML += `<br><b>Thank You... Your Total Bill is ₹${totalBill}</b><br>`;
    output.innerHTML += `Total Items Sold: ${totalItems}<br>`;
    output.innerHTML += `Highest priced item: ₹${highestPrice}<br>`;
    output.innerHTML += `Lowest priced item: ₹${lowestPrice}<br>`;

    output.innerHTML += `<br><b>GST & Discount</b><br>`;
    output.innerHTML += `Subtotal: ₹${totalBill}<br>`;
    output.innerHTML += `Discount: ₹${discount}<br>`;
    output.innerHTML += `After Discount: ₹${finalAmount}<br>`;
    output.innerHTML += `GST (5%): ₹${gst}<br>`;
    output.innerHTML += `<b>Grand Total: ₹${grandTotal}</b><br>`;

    let avgPrice = totalBill / totalItems;

    output.innerHTML += `<br><b>Report</b><br>`;
    output.innerHTML += `Total Items Sold: ${totalItems}<br>`;
    output.innerHTML += `Highest priced item: ₹${highestPrice}<br>`;
    output.innerHTML += `Lowest priced item: ₹${lowestPrice}<br>`;
    output.innerHTML += `Average priced item: ₹${avgPrice}<br>`;

    output.innerHTML += `<br><b>Cafe Password Changed Successfully...</b><br>`;


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
            password = newPassword;
            console.log("Cafe Password changed successfully.");
        } 
        else {
            console.log("Incorrect old password.");
        }
