let worker = new Worker('worker.js');

function calculate() {
  const numberField = document.querySelector('#inputNumber');
  const resultField = document.querySelector('#result');

  if (resultField.innerText === 'Calculating...') {
    worker.terminate();
    worker = new Worker('worker.js');
  }
  resultField.innerText = 'Calculating...';
  worker.onmessage = ({data}) => {
    resultField.innerText = `Result: ${+data}`;
  };
  worker.postMessage({data: +numberField.value});
}
