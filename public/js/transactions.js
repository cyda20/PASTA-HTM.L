const myModal =new bootstrap.Modal("#transactions-modal");
let logged=sessionStorage.getItem("logged");
const session =localStorage.getItem("session");

let data={
    transactions: []
};
document.getElementById("button-logout").addEventListener("click", logout);


//ADICIONA LANCAMENTO

document.getElementById("transaction-form").addEventListener("submit",function(e){
    e.preventDefault();

    const value=parseFloat(document.getElementById("value-input").value);
    const description=document.getElementById("description-input").value;
    const date=document.getElementById("date-input").value;
   

    data.transactions.unshift({ 
        value: value, type: type, description:description, date:date
    });
     
    saveData(data);
     e.target.reset();
     myModal.hide();

      getTransactions();
      checkBalance();

      function checkBalance() {
    const totalBalance = data.transactions.reduce((acc, item) => acc + (item.type === "1" ? item.value : -item.value), 0);
    console.log(totalBalance)
    if (totalBalance < 0) {
        alert("Atenção. Seu saldo após cadastrar essa despesa será negativo, deseja continuar ?");
    }
}


     alert("Lançamento adicionado com sucesso.");

    });

      checkLogged();

    function checkLogged(){
    if(session){
        sessionStorage.setItem("logged",session);
        logged=session;
    }

         if(!logged){
        
        window.location.href= "index.html";
        return;

    }
        const dataUser=localStorage.getItem(logged);
           if(dataUser){
             data=JSON.parse(dataUser);
        }
        getTransactions();

    }

    function logout() {
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");
    
    window.location.href="index.html";
  
     }

    function getTransactions() {
    const transactions=data.transactions;
    let transactionsHtml=``;
      
     
    if(transactions.length){
     transactions.forEach((item)=>{
        let type="entrada";

        if(item.type==="2"){
            type ="Saida";

        }
   
            transactionsHtml+=` 
         <tr>
          <th scope="row">${item.date}</th>
          <td>${item.value.toFixed(2)}</td>
          <td>${type}</td>
          <td>${item.description}</td>
        </tr>
        ` 
         
     })
    }
    document.getElementById("transactions-list").innerHTML= transactionsHtml;
     }

    function saveData(data){
    localStorage.setItem(data.login, JSON.stringify(data));
}


