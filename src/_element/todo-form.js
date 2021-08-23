import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import { setTodos } from '../service/todo';

/**
 * @customElement
 * @polymer
 */
class TodoFORM extends PolymerElement {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(){
    const inputText = this.shadowRoot.querySelector('#todoText').value.trim();
    if(inputText){
      setTodos({text:inputText,isComplete:false})
    } 
    this.shadowRoot.querySelector("#todoText").value = "";
  }
  static get template() {
    return html`
      <style>
        #todoText{
          width: 150px;
          padding: 12px 20px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
      }
      #addTodo {
          background-color: #4CAF50;
          border: none;
          color: white;
          padding: 12px 28px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
      }
      </style>
      <input type= "text" id="todoText" placeholder="What's on your mind"/>
      <button id="addTodo"> Add </button>
    `;
  }
  static get properties() {
    return {
      todoText: {
        type: String,
        value: ''
      },
      todos: {
        type:Array,
        notify:true
      }
    };
  }

  ready(){
    super.ready()
    this.shadowRoot.querySelector("#addTodo").addEventListener("click",this.handleSubmit)
  }
  disconnectedCallback(){
    this.shadowRoot.querySelector('#addTodo').removeEventListener("click",this.handleSubmit)
  }
}

window.customElements.define('todo-form', TodoFORM);
