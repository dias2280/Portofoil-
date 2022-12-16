function validateForm() {
    var name =  document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Campo do nome nao pode estar vazio";
        return false;
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Campo do email nao pode estar vazio";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.querySelector('.status').innerHTML = "Formato do email nao é valido";
            return false;
        }
    }
    var subject =  document.getElementById('subject').value;
    if (subject == "") {
        document.querySelector('.status').innerHTML = "Campo do Titulo nao pode estar vazio";
        return false;
    }
    var message =  document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Campo da mensagem nao pode estar vazio";
        return false;
    }
    document.querySelector('.status').innerHTML = "Enviando...";
  }