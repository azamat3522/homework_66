let container = document.getElementById('container')
for(let i=1; i < 6; i++) {
  let element = document.createElement('div')
  element.classList.add('element');
  element.innerText = 'Element ' + i;
  container.appendChild(element);
};
console.log(container)