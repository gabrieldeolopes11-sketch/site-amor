// ==========================
// ELEMENTOS
// ==========================

const envelope = document.getElementById("envelope");
const abrir = document.getElementById("abrir");
const hero = document.getElementById("hero");
const conteudo = document.getElementById("conteudo");
const textoCarta = document.getElementById("textoCarta");
const musica = document.getElementById("musica");

const estrelas = document.getElementById("estrelas");
const particulas = document.getElementById("particulas");

// ==========================
// CRIAR ESTRELAS
// ==========================

for(let i = 0; i < 180; i++){

    const estrela = document.createElement("div");

    estrela.className = "star";

    estrela.style.left = Math.random() * 100 + "vw";
    estrela.style.top = Math.random() * 100 + "vh";

    estrela.style.animationDelay = Math.random() * 3 + "s";
    estrela.style.animationDuration = (2 + Math.random() * 3) + "s";

    estrelas.appendChild(estrela);

}

// ==========================
// CRIAR PARTÍCULAS
// ==========================

for(let i = 0; i < 40; i++){

    const p = document.createElement("div");

    p.className = "particula";

    p.style.left = Math.random() * 100 + "vw";

    p.style.animationDuration =
    (12 + Math.random() * 12) + "s";

    p.style.animationDelay =
    Math.random() * 8 + "s";

    particulas.appendChild(p);

}

// ==========================
// TEXTO DA CARTA
// ==========================

const carta = `

Meu amor,

Se você está lendo isso,
é porque eu queria criar algo especial só para você.

Talvez este seja apenas um pequeno site...

Mas cada detalhe foi feito pensando em você.

Obrigado por cada sorriso,
por cada abraço,
por cada momento que vivemos juntos.

Você faz a minha vida mais feliz.

Espero que ainda possamos viver milhares de momentos incríveis lado a lado.

Eu te amo hoje,
amanhã
e sempre. ❤️

`;

let indice = 0;

function escreverCarta(){

    textoCarta.innerHTML = "";

    indice = 0;

    function escrever(){

        if(indice < carta.length){

            textoCarta.innerHTML += carta.charAt(indice);

            indice++;

            setTimeout(escrever,35);

        }

    }

    escrever();

}

// ==========================
// ABRIR ENVELOPE
// ==========================

abrir.onclick = ()=>{

    envelope.classList.add("aberto");

    setTimeout(()=>{

        hero.style.display="none";

        conteudo.style.display="block";

        escreverCarta();

        musica.play().catch(()=>{});

    },900);

};
// ==========================
// BOTÃO SURPRESA
// ==========================

const surpresa = document.getElementById("surpresa");
const mensagem = document.getElementById("mensagem");

surpresa.onclick = ()=>{

    mensagem.innerHTML =
    "❤️ Você é a melhor parte dos meus dias. Obrigado por existir. Eu te amo infinitamente! ❤️";

    for(let i=0;i<50;i++){

        setTimeout(criarCoracao,i*80);

        setTimeout(criarPetala,i*120);

    }

};

// ==========================
// CORAÇÕES
// ==========================

function criarCoracao(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=
    (16+Math.random()*20)+"px";

    heart.style.animationDuration=
    (4+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(criarCoracao,450);

// ==========================
// PÉTALAS
// ==========================

function criarPetala(){

    const petala=document.createElement("div");

    petala.className="petala";

    petala.innerHTML="🌹";

    petala.style.left=Math.random()*100+"vw";

    petala.style.fontSize=
    (18+Math.random()*18)+"px";

    petala.style.animationDuration=
    (5+Math.random()*4)+"s";

    document.body.appendChild(petala);

    setTimeout(()=>{

        petala.remove();

    },9000);

}

setInterval(criarPetala,900);

// ==========================
// ZOOM NAS FOTOS
// ==========================

const fotos=document.querySelectorAll(".galeria img");

fotos.forEach(foto=>{

    foto.addEventListener("click",()=>{

        if(foto.style.transform.includes("scale(1.8)")){

            foto.style.transform="scale(1)";

            foto.style.zIndex="1";

        }else{

            foto.style.transform="scale(1.8)";

            foto.style.zIndex="999";

        }

    });

});

// ==========================
// EFEITO FINAL
// ==========================

console.log("❤️ Site criado com amor ❤️");