function encriptar(){
    oculta();
    var arreglo=[];
    var arreglo2=[];
    var texto_encriptado=document.getElementById("escribe").value.toLowerCase();
    for (let i of texto_encriptado){
        arreglo.push(i);
    } 
    for(let i=0;i<arreglo.length;i++){

        if (arreglo[i]=="a"){
            arreglo2[i]="ai";

        }
        else if (arreglo[i]=="e"){
            arreglo2[i]="enter";

        }
        else if (arreglo[i]=="i"){
            arreglo2[i]="imes";

        }else if (arreglo[i]=="o"){
            arreglo2[i]="ober";


        }
        else if (arreglo[i]=="u"){
            arreglo2[i]="ufat";

        }
        else{
            arreglo2[i]=arreglo[i];
        }

    }
    var textoDesencriptado=arreglo2.join("");
    document.getElementById("muestra").innerHTML=textoDesencriptado;
    document.getElementById("escribe").value="";
   

    }

  
    function desencriptar(){
        oculta();
        var vocales=["a","e","i","o","u"];
        var clave=["ai","enter","imes","ober","ufat"];
        var texto_desencriptado=document.getElementById("escribe").value.toLowerCase();
        for(var i=0;i<vocales.length;i++){
            texto_desencriptado=texto_desencriptado.replaceAll(clave[i],vocales[i]);
                }
        document.getElementById("muestra").innerHTML=texto_desencriptado;

    }
    function oculta(){
        document.getElementById("muestra").style.backgroundImage="none";
        document.getElementById("botonC").style.display="block";
        document.getElementById("ocultar1").style.display="none";
        document.getElementById("ocultar2").style.display="none";
           }
             
    function botonCopiar(){

        document.getElementById("escribe").value="";    
        var aux=document.createElement("input");
        aux.setAttribute("value",document.getElementById("muestra").innerHTML);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);                
      
        }
