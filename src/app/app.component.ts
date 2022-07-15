import { Component } from '@angular/core';
import { Todo } from './todo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 todos :Todo[]=[];
 newTodo:string

  saveTodos(){
    if(this.newTodo){
      let todo =new Todo(); 
      todo.name = this.newTodo;
      todo.isCompleted=true
      this.todos.push(todo); 
      this.newTodo='';
    }else{
      alert('please enter todo list');
    }
  }

remove(id:number){
  this.todos = this.todos.filter((v,i)=>i!==id);
}
}