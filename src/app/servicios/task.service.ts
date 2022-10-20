import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {task} from '../task';
import {TASKS} from '../mock-tasks';

const httpOptions = {
  headers : new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) {
    
   }

  getTask(): Observable<task[]>{
    
    return this.http.get<task[]>(this.apiUrl)
  }

  deleteTask(task:task): Observable<task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<task>(url)
  }

  updateTaskReminder(task:task): Observable<task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<task>(url, task, httpOptions)
  }

  addTask(task:task): Observable<task>{
    return this.http.post<task>(this.apiUrl, task, httpOptions);
  }
}
