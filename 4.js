let container = document.getElementById('container')
function onButtonClick() {
  let element = document.createElement('div');
  element.classList.add('element');
  element.innerText = 'Element'; 
  container.appendChild(element);
  console.log(container);
  console.log(input)
}

var input = document.getElementsByTagName('input')[0];
input.onclick = onButtonClick;