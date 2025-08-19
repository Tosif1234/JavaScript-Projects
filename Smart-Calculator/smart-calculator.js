let choice, subchoice;
let num1, num2;

let output = document.getElementById("output"); 

function showOutput(message) {
  console.log(message);
  output.innerHTML += message + "<br>";
}

function Addition(num1, num2) {
  let add = num1 + num2;
  showOutput(`Addition Of ${num1} + ${num2} = ${add}`);
  return;
}
function Subtraction(num1, num2) {
  let sub = num1 - num2;
  showOutput(`Subtraction of ${num1} - ${num2} = ${sub}`);
  return;
}
function Multiplication(num1, num2) {
  let multi = num1 * num2;
  showOutput(`Multiplication of ${num1} * ${num2} = ${multi}`);
  return;
}
function Division(num1, num2) {
  let divide = num1 / num2;
  showOutput(`Division of ${num1} / ${num2} = ${divide}`);
  return;
}
function Modules(num1, num2) {
  let module = num1 % num2;
  showOutput(`Modules of ${num1} % ${num2} = ${module}`);
  return;
}

function square(num1) {
  let square = num1 * num1;
  showOutput(`Square Of ${num1} = ${square}`);
  return;
}

function cube(num1) {
  let cube = num1 * num1 * num1;
  showOutput(`Cube Of ${num1} = ${cube}`);
  return;
}

function Factorial(num1) {
    if (num1 === 0 || num1 === 1) return 1;
    return num1 * Factorial(num1 - 1);
}
    
function numChecker(num1){
    if(num1 % 2 === 0){
        showOutput(`${num1} Is Even`);
    }
    else{
        showOutput(`${num1} Is Odd`);

    }
}
do {
  showOutput("==== Smart Calculator ====");
  showOutput("1. Arithmatic calculator");
  showOutput("2. Square & Cube calculator");
  showOutput("3. Factorial calculator");
  showOutput("4. Even/Odd Checker");
  showOutput("0. Exit....\n");

  choice = parseInt(prompt("Enter Your Choice : "));

  switch (choice) {
    case 1:
      num1 = parseInt(prompt("Enter First Number: "));
      num2 = parseInt(prompt("Enter Second Number: "));
      do {
        showOutput("==== Arithmatic calculator ====");
        showOutput("1. Addition(+)");
        showOutput("2. Subtraction(-)");
        showOutput("3. Multiplication(*)");
        showOutput("4. Division(/)");
        showOutput("5. Modules(%)");
        showOutput("0. Exit....\n");

        subchoice = parseInt(prompt("Enter Your Choice : "));

        switch (subchoice) {
          case 1:
            Addition(num1, num2);
            break;
          case 2:
            Subtraction(num1, num2);
            break;
          case 3:
            Multiplication(num1, num2);
            break;
          case 4:
            Division(num1, num2);
            break;
          case 5:
            Modules(num1, num2);
            break;
          case 0:
            showOutput("Thank You...");
            break;

          default:
            showOutput("Invalid choice....");
            break;
        }
      } while (subchoice != 0);
      break;
    case 2:
      num1 = parseInt(prompt("Enter A Number: "));

      do {
        showOutput("==== Square & Cube calculator ====");
        showOutput("1. Squre");
        showOutput("2. Cube");
        showOutput("0. Exit....\n");

        subchoice = parseInt(prompt("Enter Your Choice : ")); 

        switch (subchoice) {
          case 1:
            square(num1);
            break;
          case 2:
            cube(num1);
            break;
          case 0:
            showOutput("Thank You...");
            break;

          default:
            showOutput("Invalid choice....");
            break;
        }
      } while (subchoice != 0);

        break;
    case 3:
        num1 = parseInt(prompt("Enter A Number: "));
        Factorial(num1);
        showOutput(`Factorial of ${num1} = ${Factorial(num1)}`);
        break;
    case 4:
        num1 = parseInt(prompt("Enter A Number: "));
        numChecker(num1);
        break;

    case 0:
      showOutput("Thank You...");
      break;

    default:
      showOutput("Invalid choice....");
      break;
  }
} while (choice != 0);
