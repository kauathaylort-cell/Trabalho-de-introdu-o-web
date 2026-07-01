const totalFila = 80;
function consultar(){
let senha = Number(document.getElementById("senha").value);
if(senha <=0){
alert("Digite sua senha.");
return;
}
let posicao = senha;
if(posicao > totalFila){
alert("Senha não encontrada.");
return;
}
let frente = posicao - 1;
let tempo = frente * 8;
document.getElementById("resultado").style.display="block";
document.getElementById("posicao").innerHTML=posicao+"º";
document.getElementById("frente").innerHTML=frente;
document.getElementById("tempo").innerHTML=tempo+" min";
let porcentagem=((totalFila-posicao)/totalFila)*100;
document.getElementById("progresso").style.width=porcentagem+"%";
}
setInterval(function(){
let numero=document.getElementById("posicao").innerHTML;
if(numero=="-") return;
let pos=parseInt(numero);
if(pos>1){
pos--;
document.getElementById("posicao").innerHTML=pos+"º";
document.getElementById("frente").innerHTML=pos-1;
document.getElementById("tempo").innerHTML=(pos-1)*8+" min";
let porcentagem=((totalFila-pos)/totalFila)*100;
document.getElementById("progresso").style.width=porcentagem+"%";
}
},10000);