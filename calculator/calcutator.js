const $calculator = document.querySelector(".calculator");

const $display = document.querySelector(".calculator__result");

const $btns = document.querySelectorAll(".calculator__btn");

const sound = new Audio("/calculator/sound/botton.mp3");

let variable = "";

$calculator.addEventListener("click", (event) => {
  event.preventDefault();
  const target = event.target.classList.contains("calculator__btn");

  const targetNumber = event.target.classList.contains(
    "calculator__btn--number"
  );

  const targetOperator = event.target.classList.contains(
    "calculator__btn--symbol"
  );

  const targetEquals = event.target.classList.contains(
    "calculator__btn--equals"
  );

  const targetDot = event.target.classList.contains("calculator__btn--dot");

  const targetDelete = event.target.classList.contains(
    "calculator__btn--delete"
  );

  const targetReset = event.target.classList.contains("calculator__btn--reset");

  let valueTarget = event.target.textContent.trim();

  let operation = () => {
    if (
      targetNumber ||
      targetDot ||
      targetOperator ||
      targetEquals ||
      targetReset ||
      targetDelete
    ) {
      $display.style.color = "black ";
      sound.play();
      if (targetNumber || targetDot || targetOperator) {
        variable += valueTarget;
        $display.innerText = variable;
      }
      if (targetEquals) {
        try {
          variable = eval(variable);
          $display.innerText = variable;
        } catch (error) {
          variable = "Syntax Error";
          $display.innerText = variable;
          $display.style.color = "tomato";
          variable = "";
        }
        if (variable == "Infinity") {
          console.log("Entro");
          variable = "Math Error";
          $display.innerText = variable;
          $display.style.color = "tomato";
          variable = "";
        }
        if (variable == "NaN") {
          variable = "Math Error";
          console.log("Entro1");
          $display.innerText = variable;
          $display.style.color = "tomato";
          variable = "";
        }
        if (variable == "undefined") {
          variable = "Math Error";
          $display.innerText = variable;
          $display.style.color = "tomato";
          variable = "";
        }
      }

      if (targetDelete) {
        variable = "";
        $display.innerText = variable;
      }

      if (targetReset) {
        if (variable.length < 1) {
          variable = "";
        }

        variable = variable.slice(0, variable.length - 1);
        $display.innerText = variable;
      }
    }
  };
  operation();
});
