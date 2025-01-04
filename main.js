 const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === '=') {
      calculate();
    } else if (button.textContent === 'C') {
      clearDisplay();
    } else {
      appendToDisplay(button.textContent);
    }
  });
});

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    let expression = display.value.replace(/×/g, '*').replace(/:/g, '/');
    if ('2+8'.includes(expression)) {
      display.value = 'I love you 💞💞';
    }
    else if ('8+2'.includes(expression))
    {
      display.value = 'manis banget si kamu';
    }
    else if ('2*8'.includes(expression))
    {
      display.value = 'kiw kiw Renataaa💞';
    }
    else if ('8*2'.includes(expression))
    {
      display.value = 'cantikknyaa akuu??';
    }
    else if ('2-8'.includes(expression))
    {
      display.value = 'u are so cutee';
    }
    else if ('8-2'.includes(expression))
    {
      display.value = 'miawww 💞';
    }
    else if ('2/8'.includes(expression))
    {
      display.value = 'manaa centilnyaa 😡';
    }
    else if ('8/2'.includes(expression))
    {
      display.value = 'can u be mine? 😘😘';
    }
    else {
      display.value = eval(expression);
    }
  } catch (error) {
    display.value = 'Error';
  }
}