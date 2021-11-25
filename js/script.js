let xhr = new XMLHttpRequest();
xhr.open('GET', `https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture`, false);
xhr.send();

let result = [];
let card, elem, btn, modal, span, modalCont, clearModal;
let cont;
let sortMas = [];

// let sort_s;
// let sotr_val;

if (xhr.status != 200) {
  console.log(xhr.status + ': ' + xhr.statusText);
}
else {
  result = JSON.parse(xhr.responseText);
  for (let i = 0; i < result.results.length; i++) {
    cont = document.querySelector('.card');
    elem = document.createElement('div');
    elem.className = 'card-body' + i + ' ' + 'card-body';
    elem.style.boxShadow = '0 6px 4px -4px rgba(0, 0, 0, .2)';
    cont.appendChild(elem);

    el = document.querySelector('.card-body' + i);
    img = document.createElement('img');
    img.className = 'img_medium';
    img.src = result.results[i].picture.medium;
    el.appendChild(img);

    el = document.querySelector('.card-body' + i);
    par = document.createElement('p');
    elemText = document.createTextNode("Title: " + result.results[i].name.title);
    par.appendChild(elemText);
    el.appendChild(par);

    el = document.querySelector('div.card-body' + i);
    par = document.createElement('p');
    elemText = document.createTextNode("First: " + result.results[i].name.first);
    par.appendChild(elemText);
    el.appendChild(par);

    el = document.querySelector('div.card-body' + i);
    par = document.createElement('p');
    elemText = document.createTextNode("Last: " + result.results[i].name.last);
    par.appendChild(elemText);
    el.appendChild(par);

    el = document.querySelector('div.card-body' + i);
    btn = document.createElement('button');
    btn.className = 'btn btn-primary btn-lg';
    btn.id = 'myBtn' + i;
    elemText = document.createTextNode("More");
    btn.appendChild(elemText);
    el.appendChild(btn);
    modal = document.getElementById("myModal");
    btn = document.getElementById("myBtn" + i);

    btn.onclick = function () {
      modal.style.display = 'block'
      el = document.querySelector('.modal-content');
      img = document.createElement('img');
      img.src = result.results[i].picture.large;
      el.appendChild(img);

      el = document.querySelector('.modal-content');
      par = document.createElement('p');
      elemText = document.createTextNode("Street: " + result.results[i].location.street);
      par.appendChild(elemText);
      el.appendChild(par);

      el = document.querySelector('.modal-content');
      par = document.createElement('p');
      elemText = document.createTextNode("City: " + result.results[i].location.city);
      par.appendChild(elemText);
      el.appendChild(par);

      el = document.querySelector('.modal-content');
      par = document.createElement('p');
      elemText = document.createTextNode("State: " + result.results[i].location.state);
      par.appendChild(elemText);
      el.appendChild(par);

      el = document.querySelector('.modal-content');
      par = document.createElement('p');
      elemText = document.createTextNode("Postcode: " + result.results[i].location.postcode);
      par.appendChild(elemText);
      el.appendChild(par);

      el = document.querySelector('.modal-content');
      par = document.createElement('p');
      elemText = document.createTextNode("Email: " + result.results[i].email);
      par.appendChild(elemText);
      el.appendChild(par);

      el = document.querySelector('.modal-content');
      par = document.createElement('p');
      elemText = document.createTextNode("Phone: " + result.results[i].phone);
      par.appendChild(elemText);
      el.appendChild(par);
    }
    window.onclick = function (event) {
      if (event.target == modal) {
        document.getElementById('cModal').innerHTML = "";
        modal.style.display = "none";
      }
    }
  }

  sort_s = document.getElementById('selSort')
    sotr_val = sort_s.value
    if(sotr_val === 1) {
      alert(1)
      for(let i = 0; i < result.results.length; i++) {
        result.results[i].sort((a, b) => a.name.first > b.name.first ? 1 : -1)
      }
      window.location.reload();
    }
    // else {
    //   for(let i = 0; i < result.results.length; i++) {
    //     result.results[i].sort((a, b) => a.name.first < b.name.first ? 1 : -1)
    //   }
    // }
  
  console.log(result);
}