let x=4;
document.getElementById("menu").onclick= function onOff(){
    console.log();
    if(x==4){
        x=x+1;
        document.getElementById('navMenu').innerHTML= '<div class="navbar"><a href="./../../index.html">Acceuil</a></br></br><a href="./about.html">A propos</a></br></br><a href="./service.html" >Projets</a></br></br><a href="./Contact.html" >Contact</a></div>';
        document.getElementById('menu').innerHTML="X"
    }
    else if(x==5){
        document.getElementById('navMenu').innerHTML= "";
        document.getElementById('menu').innerHTML="&#9776"
        x=x-1;
    }
} 