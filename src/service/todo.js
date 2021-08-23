import db from "../config.js"

export async function getTodos(){
    const data  = await db.collection("todos").get();
    return data;
}

export async function setTodos(data){
    await db.collection("todos").add(data)
}

export async function updateTodo(id , data){
    await db.collection("todos").doc(id).update(data)
}