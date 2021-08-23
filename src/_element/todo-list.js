import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import { updateTodo } from '../service/todo';

/**
 * @customElement
 * @polymer
 */
class TodoList extends PolymerElement {
  constructor(){
    super();
  }
  static get template() {
    return html`
      <style>
        :host {
          display:block;
        }
        .strike-through {
          text-decoration:line-through;
        }
        .todo-element {
            margin-left: 10px;
          }
        .todo-text {
            margin-left: 3px;
          }
      </style>
      <template is = "dom-repeat" items="[[todos]]">
      <div class = "todo-element">
        <input type="checkbox" checked="[[item.isComplete]]" value="[[item.isComplete]]" on-change="toggleComplete"/>
        <template is = "dom-if" if="[[item.isComplete]]">
        <span class="todo-text strike-through">[[item.text]] </span>
        </template>
        <template is = "dom-if" if="[[!item.isComplete]]">
        <span class="todo-text">[[item.text]] </span>
        </template>
      </div>
      </template>
    `;
  }

  toggleComplete(event){
    event.preventDefault();
    const index = event.model.index;
    updateTodo(this.todos[index].id,{isComplete:!this.todos[index].isComplete})

  }

  static get properties() {
    return {
      todos:{
        type:Array,
        notify:true,
        reflectToAttribute:true,
      }
    };
  }
}

window.customElements.define('todo-list', TodoList);
