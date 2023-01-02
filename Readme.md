## Web Workers

You have an input field and a Caclulate button.
When user enters a number and presses Calculate button, the fibonacci value should be evaluated and displayed in the div with id 'result' (_innerText_) in a form **Result: evaluated_fibonacci**
While the value is being evaluated, please, display **Calculating...** in the div

Please, use web worker for the evaluation. It should receive a data in form of an object {data: someValue}. Result of its work should be a Number.

You have all the necessary files created, please, use them.

_Additional task:_ when evaluation lasts long and user does not wait till it ends, he should be able to start a new evaluation. Pressing Calculate button should stop ongoing calculation and start new.
