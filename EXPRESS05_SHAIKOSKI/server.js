
const express = require("express")
const mysql = require ("mysql2")

const mysql_config=require('./mysql_config')

const app=express()

//subir o server
app.listen(3000,()=>{
    console.log(" Servidor WEB em execução")
})

//criar a conexão com o BD
const connection =mysql.createConnection(mysql_config)

//escrever as rotas
app.get('/',(req,res)=>{
    //criar um objeto result para todos os endpoints da api
    let result = {
        status: 'sucesso',
        message: null,
        data: null
    }
})

//executar a conexão
   connection.querry("SELECT * FROM tasks",(err,results)=>{
    if(err){
        result.status="Erro";
        result.message="Erro na Obtenção das tarefas";
        result.data=[];
        //res.send(result);
        res.json(results);
    } else{
        result.status = "Sucesso";
        result.message="Tarefas obtidas com sucesso";
        result.data=results;
        //res.send(result);
        res.json(results);
    }

   })