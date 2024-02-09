const myModal = new bootstrap.Modal("#register-modal");
let logged=sessionStorage.getItem("logged");
const session =localStorage.getItem("session");

checkLogged();

//LOGAR NO SISTEMA
document.getElementById("login-form").addEventListener("submit",function(e) {
    e.preventDefault();

    const email=document.getElementById("email-input").value;
    const password=document.getElementById("password-input").value;
    const session=document.getElementById("session-check").Checked;

    const account=getAccount(email);

    if (!account){
        alert("opss! verifique  o usuario ou senha.");
    return; 

    } 

     if(account){
      if(account.password !==password){
        alert("opss! Verifique o usuario ou senha.");
        return;
      }

      saveSession(email,session);

      window.location.href="home.html";
    }
    
});

//CRIAR CONTA
document.getElementById("create-form").addEventListener("submit",function(e){
    e.preventDefault();

    const email=document.getElementById("email-create-input").value;
    const password=document.getElementById("Password-create-input").value;
    const confirmPassword = document.getElementById("confirm-password-input").value;

    
  if(email.length <5) {
  alert("opps! preencha com e-mail valido.");
  return;
  }

  if(password.length <4){
    alert("preencha a senha com minino 4 digitos.");
    return;
  }
  if (password !== confirmPassword) {
    alert("As senhas não coincidem!");
    return;    
}
 

  saveAccount({
  login: email,
  password:password,
  transactions:[]
  });

  myModal.hide();

  alert("conta criada com sucesso")
});

function checkLogged(){
    if(session){
        sessionStorage.getItem("logged",session);
        logged=session;
    }
    if(logged){
        saveSession(logged,session);

        window.location.href= "home.html";

        }

}

function saveAccount(data){
    localStorage.setItem(data.login,JSON.stringify(data));
}

function saveSession(data,saveSession){
    if(saveSession){
        localStorage.setItem("session",data);

    }
    sessionStorage.setItem("logged",data)
}

function getAccount(key){
    const account= localStorage.getItem(key);

    if(account){
         return JSON.parse(account);
    }
    return"";
}

