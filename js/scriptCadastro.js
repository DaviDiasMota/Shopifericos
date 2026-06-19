function login(){
    usuario = document.getElementById("username").value
    senha = document.getElementById("password").value

    if(usuario == "admin" && senha == "1234"){
        alert("Login realizado com sucesso!")
        location.href="homeLogado.html"
    }else{
        alert("usuário ou senha incorretos")
    }
}

