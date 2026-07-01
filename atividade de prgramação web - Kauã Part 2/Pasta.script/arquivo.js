function mostrarMensagem(){

    const chat = document.getElementById("chatBox");
    chat.style.display = "block";
    chat.innerHTML = `
        <p><strong>Atendente:</strong> Olá! Seja bem-vindo à UPA.</p>
        <p>Para realizar seu agendamento, preencha os dados abaixo.</p>
    `;
    document.getElementById("formulario").style.display="block";
}
function agendar(){
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let cpf = document.getElementById("cpf").value;
    let sintomas = document.getElementById("sintomas").value;

    if(nome=="" || idade=="" || cpf=="" || sintomas==""){
        alert("Preencha todos os campos.");
        return;
    }
    document.getElementById("chatBox").innerHTML=`
        <div class="sucesso">
            ✅ Agendamento realizado com sucesso!<br><br>
            <strong>Paciente:</strong> ${nome}<br>
            <strong>Idade:</strong> ${idade}<br>
            <strong>CPF:</strong> ${cpf}<br>
            <strong>Sintomas:</strong> ${sintomas}<br><br>
            Nossa equipe entrará em contato em breve.
        </div>
    `;
    document.getElementById("formulario").reset();
}