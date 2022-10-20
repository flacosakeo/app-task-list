import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../servicios/task.service';
import {task} from '../../task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: task[] = [];
  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks)=>(
      this.tasks = tasks
    ));
  }

  deleteTask(task:task){
    this.taskService.deleteTask(task).subscribe(()=>(
      this.tasks = this.tasks.filter ((t) => {return t.id !== task.id})
    ))
  }

  toggleReminder(task:task){
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe();
  }
  addTask(task:task){
    this.taskService.addTask(task).subscribe((task)=>{this.tasks.push(task)})
  }
}
