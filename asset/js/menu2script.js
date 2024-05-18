let x=4;
document.getElementById("menu").onclick= function onOff(){
    console.log();
    if(x==4){
        x=x+1;
        document.getElementById('navMenu').innerHTML= '<div class="navbar"><ul><li><a href="./../../index.html">Acceuil</a></li><li><a href="./about.html">A propos</a></li><li><a href="./service.html" >Projets</a></li><li><a href="./Contact.html" >Contact</a></li></div>';
    }
    else if(x==5){
        document.getElementById('navMenu').innerHTML= "";
        x=x-1;
    }
} 