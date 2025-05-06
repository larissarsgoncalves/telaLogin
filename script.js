function login(){
    const username = document.getElementById("username").value;
    //então aqui em cima eu criei uma váriavel, que esta pagando o valor que esta dentro do elemento que tem a id = username
    const password = document.getElementById("password").value;

    if(username==="admin" && password==="1234"){
        window.location.href="bemvindo.html"
    } else{
        document.getElementById("mensagem").textContent="Usuário ou senha incorretos."
    }
}