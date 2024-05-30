#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todo :string[] =[];

;
let condition:boolean = true;


while(condition){
    let todoOperations = await inquirer.prompt(
        {
            name:"operations",
            type:"list",
            choices:["add","update","view","delete"],
            message:"What do want in todos ?"} )

if(todoOperations.operations=="add"){

const todoTask = await inquirer.prompt(
    [{
        name:"Task1",
        type:"input",
        message:"What would you like to add in todo ? "
    },
    {   name:"confirmation",
        type:"confirm",
        default:true,
        message:"Do you want to add more ?"},])

    todo.push(todoTask.Task1)
    condition = todoTask.confirmation
    for(let i =0;i<todo.length;i++){

        todo.map(items => items);
        console.log(todo[i])};}

if(todoOperations.operations=="update"){
if(condition==true){
    let updateAns= await inquirer.prompt({
        name:"update",
        type:"list",
        message:"What You want to update ? ",
        choices:todo.map(item=>item)})

    let addTodo = await inquirer.prompt(
        {
        name:"add",
        type:"input",
        message:"what do you want to add in todos ?"})
        let confirmation = await inquirer.prompt({   
        name:"final",
        type:"confirm",
        default:false,
        message:"Do you confirm this ?"},)

let newTodo:string[] = todo.filter(val => val !== updateAns.update)
        todo = [...newTodo,addTodo.add]
        condition = confirmation.final
        for(let i =0;i<todo.length;i++){
            todo.map(items => items);
            console.log(chalk.yellow(todo[i]))};}}


        

// if(todoOperations.operations == "delete")
    if(todoOperations.operations=="delete"){
        if(condition==true){
     
            let del = await inquirer.prompt({
                name:"delete",
                type:'list',
                message:"Do you want to delete this from your todo: ",
                choices:todo.map(items=>items)
            })


            let confirm2 = await inquirer.prompt({
                name:"confirm",
                type:"confirm",
                message:"Do you want to confirm this",
                default:false
            })

            condition= confirm2.confirm
            
            if(condition==true){
                let newTodo:string[]=todo.filter(val => val !== del.delete)
                todo = [...newTodo]
                for(let i =0;i<todo.length;i++){
                    todo.map(items => items);
                    console.log(chalk.yellow(todo[i]))}
                
            }else{
                for(let i =0;i<todo.length;i++){
                    todo.map(items => items);
                    console.log(chalk.yellow(todo[i]))}
                    
            }}}
       
if(todoOperations.operations == "view"){
    for(let i =0;i<todo.length;i++){
        todo.map(items => items);
        console.log(chalk.greenBright(todo[i]))};}}




