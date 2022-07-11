let a = ""; // first number
let b = ""; // second number
let sign = ""; // znak operacyi
let finish = false;

const digit = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", ",", "0"];
const action = ["AC", "+/-", "%", "/", "X", "-", "+"];

const out = document.querySelector(".screen p");

function clearAll() {
  a = ""; // first number
  b = ""; // second number
  sign = ""; // znak operacyi
  finish = false;
  out.textContent = 0;
}
document.querySelector(".ac").addEventListener("click", () => {
  clearAll();
});

document.querySelector(".button").addEventListener("click", (event) => {
  // нажата не кнопка
  if (!event.target.classList.contains("btn")) return;
  // нажата АС
  //   if (
  //     document.querySelector(".ac").addEventListener("click", () => {
  //       clearAll();
  //     })
  //   );
  if (event.target.classList.contains("ac")) return;
  out.textContent = "";

  const key = event.target.textContent;

  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }

    return;
  }
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    return;
  }
  if (key === "=") {
    if (b === "") b = a; // для того что бы считать 5+= получиться 10
    switch (sign) {
      case "+":
        a = (+a) + (+b);
        break;

      case "-":
        a = a - b;
        break;

      case "X":
        a = a * b;
        break;

      case "/":
        if (b === "0") {
          out.textContent = "Ошибка";
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = (a / b).toFixed(2);
        break;
        // не совсем понял что должна делать данная операция.
        // case '+/-':
        //     if (a=== '+/-'){
        //         a = (-a);
        //     }
        // break
        
      case "%":
        a = a + ((a/100)*b) ;
        break;

    }
    finish = true;
    out.textContent = a;
  }
  
});
