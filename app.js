var http = require("http");
http.createServer(function(request,response){
     
    response.end(greeting.getMessage(userName) +"." + " Let me introduce my first project !");
    
     
}).listen(5555, "127.0.0.1",function(){
    console.log("Сервер доступен на порту 5555");
});

var os = require("os");
// получим имя текущего пользователя
var userName = os.userInfo().username;
 
console.log("Имя пользователя :" + userName);

var greeting = require("./greeting");

var User = require("./user.js");
 
var andrew = new User("Andrew", 24);
andrew.sayHi();


console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));