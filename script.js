const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

display.placeholder ="0";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "clear") {
      display.value = "";
    } else if (btn.id === "equals") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      } 
    }else if (btn.id==="delete") {
        display.value = display.value.slice(0, -1);
      }else if(btn.id){
      try{
        display.value=eval(display.value)/100;}
        catch{
          display.value = "Error";
        }
      
      
      }
      
      else {
      display.value += btn.dataset.value || "";
    }
  });
});

document.addEventListener("keydown", (e) => {
    const key = e.key;
    if ("0123456789.+-*/".includes(key)) {
      display.value += key;
    } else if (key === "Enter") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else if (key === "Backspace") {
      display.value = display.value.slice(0, -1);
    } else if (key.toLowerCase() === "c") {
      display.value = "";
    }
  });
  
  
