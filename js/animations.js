const INCREASE_NUMBER_ANIMATION_SPEED = 50;

/*
i — счетчик анимации. Будет принимать значение от 0 до 5000 и каждый кадр анимации увеличиваться на 1.
element — HTML-элемент тега с числом. За один кадр анимации значение внутри element меняется на i.
endNumber — значение, когда анимация остановится. В нашем случае — 5000.
*/
function increaseNumberAnimationStep(i, element, endNumber) {
  if (i <= endNumber) {
    if (i === element) {
      element.innerText = i + "+";
    } else {
      element.innerText = i;
    }
    i += 100;

    setTimeout(function() {
      increaseNumberAnimationStep(i, element, endNumber);
    }, INCREASE_NUMBER_ANIMATION_SPEED);
  }
}

function initIncreaseNumberAnimation() {
  const element = document.querySelector(".features__clients-count");
  increaseNumberAnimationStep(0, element, 5000);
}

initIncreaseNumberAnimation();
