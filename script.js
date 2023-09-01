
const detailsButton = document.getElementById("detailsButton");
const details = document.getElementById("details");

let showDetails = false;

detailsButton.addEventListener("click", () => {
  showDetails = !showDetails;
  if (showDetails) {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
});

// 
secret: einfjnefn

user_name= postgres 
password= postgres
database= bancodedados
hoost=localhost
port=5432
dialect=postgres

post= uma informação do cliente para servidor, envia algo
get = algo do servidor para o cliente, resposta do servidor 

res= uma resposta do servidor para o cliente
req= um requisição de filtragem do servidor, exempllo abaixo ele esta criando as inforamção do cliente no banco de dados
body= colocar body para pegar coisas do usuario que esta no banco de dados


Rotas get= sempre vai ser res.render e uma rota 
Rotas post= uma funtion sempre primeiro vai fazer uma req e depois vai ser mandando um res para o cliente. 


app.post("/usuario/cadastrar") async function(res,req){
  try{
    await usuario.creat(req.body)
    res.redirect("usuario/logado")
  } catch (err) {
    console.error(err)
    res.status(500).json({mensagem: 'ocorreu um erro'})
  }
}

app.post("/usuario/cadastrar") async function(res,req){
  if(req.body.senha == res.body.confirmaS)
    res.render({mensagem: 'vc conseguiu'})
}

app.get("/usuario/cadastrar") async function (res, req) {
  res.render("usuario/logar")
}


