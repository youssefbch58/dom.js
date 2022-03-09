var btplus= document.getElementById('btplus');
var btmoins= document.getElementById('btmoins');
var coeur = document.getElementById('coeur');
var nb= document.getElementById('nb');
var cpt =parseInt(nb.innerText);
var somme = document.getElementById('somme');
var prix = document.getElementById('prix');

btplus.addEventListener('click',function(){
    cpt=cpt+1;
    nb.innerText=cpt;
    var som = 0;
    som = som + prix.innerText * cpt;
    somme.innerHTML = som;


})
btmoins.addEventListener('click',function(){
    if (cpt > 0){
        cpt -= 1;
        nb.innerText=cpt;
        var som = 0;
        som= som - prix.innerText * cpt;
        som = Math.abs(som);
        somme.innerHTML = som;
    }
    else{
        cpt =0;
        nb.innerText=cpt;
        

    }
})
coeur.addEventListener('click',function(){
    if (coeur.style.color == 'black'){
        coeur.style.color = "red";}
        else {
           coeur.style.color = "black";
        }
   
    
})
