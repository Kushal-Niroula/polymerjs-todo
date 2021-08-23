import '@polymer/polymer/lib/elements/dom-if'
import '@polymer/polymer/lib/elements/dom-repeat'
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import db from "../config.js"
import '../_element/todo-form.js'
import '../_element/todo-list.js'

/**
 * @customElement
 * @polymer
 */
class TodoApp extends PolymerElement {

  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

      </style>
      <todo-form todos="{{todos}}"></todo-form>
      <todo-list todos="{{todos}}"></todo-list>
    `;
  }

 async getData(){
    db.collection("todos").onSnapshot(snapShot=>{
      let changes = snapShot.docChanges()
      let newTodos = [...this.todos]
       changes.forEach(change=>{
         if(change.type === "added"){
           newTodos.push({...change.doc.data(),id:change.doc.id});
         }
         if(change.type ==="modified"){
           newTodos = newTodos.map((todo)=> todo.id === change.doc.id?
            {...change.doc.data(),id:change.doc.id}:todo
            );
         }
       })
       this.set("todos",newTodos)
    })
  }

  static get properties() {
    return {
      todos:{
        type:Array,
        value:[],
        notify:true,
      },
      check:{
        type:Boolean,
        value:true
      }
    };
  }

  ready(){
    super.ready();
    this.getData()
  }
}

window.customElements.define('todo-app', TodoApp);
