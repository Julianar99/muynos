var nom;
nom=prompt("Escribe tu nombre","Nombre");
alert("Mucho gusto" +  nom);


window:alert("Bienvenida a nuestra web");

alert =false;
const interval = setInterval(()=>{

    document.title=alert?'Muy Nosotras':'(1) New follower';
    alert=!alert;
},1000);

