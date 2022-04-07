/* MILESTONE 1:
stampare su console le informazioni di nome, ruolo e la stringa della foto */

const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

//creo un ciclo for per estrapolare le singole liste di oggetti e stampo a schermo i valori all'interno

/* for (i = 0; i < team.length; i++) {
    let member = team[i];
    //console.log("NAME", member.name);
    //console.log("ROLE", member.role);
    //console.log("IMAGE", member.image);
}
 */
/* MILESTONE 2:
stampare le stesse informazioni su DOM sottoforma di stringhe */

// 1 - seleziono l'elemento della DOM in cui andrò a creare altri elementi in cui inserirò i dati dei membri

let div = document.querySelector(".team");

for (i = 0; i < team.length; i++) {
    let member = team[i];
    let memberName = document.createElement("h3");
    let memberRole = document.createElement("h5");
    let memberPhoto = document.createElement("img");
    memberPhoto.src = "./assets/img/" + member.image;
    //console.log(member);
    memberName.append(member.name);
    memberRole.append(member.role);
    memberPhoto.append(member.image);
    //console.log(memberInfo);
    div.append(memberName, memberRole, memberPhoto);
}