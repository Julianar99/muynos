let helado = 30;
let topping = ['oreo','kitkat','kinder','nada'];
let precio;
let preciofinal;
let top1=10;
let top2=15;
let top3=25;
let top4=0
if (topping[0]) {
    let resultadosuma1= helado + top1;
    console.log("precio: ",resultadosuma1 );
} else if (topping[1]){ 
    let resultadosuma2= helado +top2;
    console.log("precio: ",resultadosuma2 );
} else if (topping[2]){
     let resultadosuma3= helado + top3;
    console.log("precio: ",resultadosuma3);
} 
else { 
    let resultadosma4= helado + top4;
    console.log("precio: ",resultadosma4 );
}



let comida="menu";
switch (comida) {
    case "carne":
    console.log("se le servira con vino tinto");
    break;
    case "percado":
        console.log("se le servira con vino blanco");
        break;
        case "verdura":
            console.log("se le servira con agua");
            break;
            default:
                console.log("elija en el menu carne , percado o verdura");
                for ( let i=0 ; i=4;){
                    console.log(menu[i])
                }
}