const text1 = 'Daqui a 2 anos pretendo já estar inserido no mercado de trabalho como desenvolvedor';

const resquisito01 = () => {
  const segundoParagrafo = document.getElementsByTagName('p')[1];
  segundoParagrafo.innerText = text1;
};

const resquisito02 = () => {
  const divMainContent = document.querySelector('.main-content');
  divMainContent.style.backgroundColor = 'rgb(76, 164, 109)';
};

const resquisito03 = () => {
  const divCenterContent = document.querySelector('.main-content .center-content');
  divCenterContent.style.backgroundColor = 'white';
};

const resquisito04 = () => {
  const primeiroTitulo = document.getElementsByTagName('h1')[0];
  primeiroTitulo.innerHTML = 'Desafio - JavaScript';
};

const resquisito05 = () => {
  const primeiroParagrafo = document.getElementsByTagName('p')[0];
  primeiroParagrafo.textContent = primeiroParagrafo.textContent.toUpperCase();
};

const resquisito06 = () => {
  const pCenterContent = document.querySelectorAll('.main-content .center-content p');
  const textos = [];

  for (let index = 0; index < pCenterContent.length; index += 1) {
    const element = pCenterContent[index];
    textos.push(element.innerHTML);
  }
  document.querySelector('footer p').innerHTML = textos.join(' ');
};

resquisito01();
resquisito02();
resquisito03();
resquisito04();
resquisito05();
resquisito06();
