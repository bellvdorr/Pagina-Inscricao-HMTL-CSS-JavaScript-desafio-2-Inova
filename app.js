
    
    function enviarInfo() {
        
        let name = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let senha = document.getElementById("senha").value;
        let cpf = document.getElementById("cpf").value;
        let tel = document.getElementById("telefone").value;

        console.log(name);
        console.log(cpf);
        console.log(email);
        console.log(senha);
        console.log(tel);
    }
    
    function apagarInfo(){
        
        let campo = document.querySelector('input#nome');
        let campo2 = document.querySelector('input#cpf');
        let campo3 = document.querySelector('input#email');
        let campo4 = document.querySelector('input#senha');
        let campo5 = document.querySelector('input#telefone');

        campo.value = '';
        campo2.value = '';
        campo3.value = '';
        campo4.value = '';
        campo5.value = '';
        
    }

