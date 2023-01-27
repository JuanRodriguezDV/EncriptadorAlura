function capturarPalabra(){
    let vocales={a:'ai',e:'enter',i:'imes',o:'ober',u:'ufat'};
    let palabra=document.getElementById("input_encriptador").value
    palabra=palabra.replace(/a|e|i|o|u/g,function(matched){
        return vocales[matched];
        });
    console.log(palabra)
    document.getElementById("resultado").value = palabra
    document.getElementById("input_encriptador").value=""
    ocultar=document.getElementById("resultado").value 
    document.getElementById("resultado").style.visibility='visible'; 
    if (ocultar==""){
        document.getElementById("resultado").style.visibility='hidden'; 
    }
}

function copyText(){
    let text = document.getElementById("resultado");
    text.select();
    text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
    console.log(text.value)
    document.getElementById("resultado").value=""
    document.getElementById("resultado").style.visibility='hidden';
}

function desencriptarPalabra(){
    let vocales={ai:'a',enter:'e',imes:'i',ober:'o',ufat:'u'};
    let palabraEncriptada=document.getElementById("input_encriptador").value
    palabraEncriptada=palabraEncriptada.replace(/ai|enter|imes|ober|ufat/g, function(matched){
        return vocales[matched];
    })
    document.getElementById("resultado").value=palabraEncriptada
    document.getElementById("input_encriptador").value=""
    ocultar=document.getElementById("resultado").value 
    
    if (ocultar==""){
        document.getElementById("resultado").style.visibility='hidden'; 
    }
    else{
        document.getElementById("resultado").style.visibility='visible'; 
    }
}