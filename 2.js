let div = document.getElementsByTagName('div')

for(let i=0; i < div.length; i++) {
  document.getElementsByTagName('div')[i].style.background = 'red';
  if (div[i] == div[2]) {
    break;
  }
};
for(let i=3; i < div.length; i++) {
  document.getElementsByTagName('div')[i].style.background = 'green';
  if (div[i] == div[5]) {
    break;
  }
};
  