let textfeld = document.querySelector('#eingabe');
const knopf = document.querySelector('#hinzu');
let liste = document.getElementById('liste');

const machliste = () => {
  const eintrag = document.createElement('li');
  eintrag.innerHTML = textfeld.value;
  document.getElementById('liste').appendChild(eintrag);
  document.getElementById("liste").value="";
};

knopf.addEventListener ("click", machliste);




// neues li; innerHTML von li=textfeld.value; li an Liste anhängen