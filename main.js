$(document).ready(function () {

    $("#mon_tableau").hide();

    $("#retour").hide();

    $("#supp").hide();

    $("#afficher").click(function () {


        $("form").hide();

        $("#retour").show();

        $("#supp").show();

        $("#mon_tableau").show();

    });

    $("#retour").click(function () {

        $("form").show();

        $("#supp").hide();

        $("#mon_tableau").hide();

        $("#retour").hide();

    });


});

var obj = [
    { "Cin": "", "Nom": "", "Prenom": "", "Semestre": "", "Filiere": "" },
];

function cellule(content) {

    let c = document.createElement("td");
    c.innerHTML = content;
    return c;

};

function CreerLigne(i) {

    let parent = document.querySelector("table").firstElementChild;
    let ligne = document.createElement("tr");

    obj[i].Cin = document.getElementById('cin').value;
    obj[i].Nom = document.getElementById('nom').value;
    obj[i].Prenom = document.getElementById('prenom').value;
    obj[i].Semestre = document.getElementById('sems').value;
    obj[i].Filiere = document.getElementById('filiere').value;

    ligne.appendChild(cellule(obj[i].Cin));
    ligne.appendChild(cellule(obj[i].Nom));
    ligne.appendChild(cellule(obj[i].Prenom));
    ligne.appendChild(cellule(obj[i].Semestre));
    ligne.appendChild(cellule(obj[i].Filiere));
    parent.appendChild(ligne);

    ligne.addEventListener('click', () => {

        if (ligne.className == '') {

            ligne.className = 'tr-clicked';

        } else {

            ligne.className = '';

        };

    });

};


function addtab() {

    var checker = ''

    let cCin = document.getElementById('cin').value;
    let cNom = document.getElementById('nom').value;
    let cPrenom = document.getElementById('prenom').value;
    let cSemestre = document.getElementById('sems').value;
    let cFiliere = document.getElementById('filiere').value;

    if (cCin == '' || cNom == '' || cPrenom == '' || cSemestre == '' || cFiliere == '') {

        var checker = true

    }
    else {

        var checker = false

    };

    for (let i = 0; i < obj.length; i++) {

        if (checker == false) {

            CreerLigne(i);

        }
        else {

            alert("Svp Remplir Tous Les Champs!");

        };

    };

};

function deleteLigne() {

    const trsClicked = document.querySelectorAll('.tr-clicked');

    trsClicked.forEach(trClicked => {

        trClicked.remove();
    });

};