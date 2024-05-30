import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    const todoOperations = await inquirer.prompt({
        name: "operations",
        type: "list",
        message: "What you want to do in todo? ",
        choices: ["Add", "Delete", "Update", "View"]
    });
    if (todoOperations.operations == "Add") {
        const addTodo = await inquirer.prompt({
            name: "add",
            type: "input",
            message: "What would you want to add in todo?"
        });
        const confirm1 = await inquirer.prompt({
            name: "confirm",
            type: "confirm",
            message: "Do you want to add more: ",
            default: true
        });
        todo.push(addTodo.add);
        condition = confirm1.confirm;
        console.log(todo);
    }
    if (todoOperations.operations == "Delete") {
        if (condition == true) {
            let del = await inquirer.prompt({
                name: "delete",
                type: 'list',
                message: "Do you want to delete this from your todo: ",
                choices: todo.map(items => items)
            });
            let confirm2 = await inquirer.prompt({
                name: "confirm",
                type: "confirm",
                message: "Do you want to confirm this",
                default: false
            });
            condition = confirm2.confirm;
            if (condition == true) {
                let newTodo = todo.filter(val => val !== del.delete);
                todo = [...newTodo];
                console.log(todo);
            }
            else {
                console.log(todo);
            }
        }
    }
}
