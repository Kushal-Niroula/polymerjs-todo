import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../_element/todo-form.js'
import '../_element/todo-list.js'
import '@polymer/polymer/lib/elements/dom-repeat'
import '@polymer/polymer/lib/elements/dom-if'

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
  static get properties() {
    return {
      todos:{
        type:Array,
        value:[],
        notify:true,
        reflectToAttribute:true,
      },
      check:{
        type:Boolean,
        value:true
      }
    };
  }
}

window.customElements.define('todo-app', TodoApp);
