import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private httpClinet: HttpClient) {}

  private apiUrl = 'http://localhost:5002/tasks';
  // getTasks(): Task[] {
  //   return TASKS;
  // }

  getTasks(): Observable<Task[]> {
    // const tasks = of(TASKS);
    // return tasks;

    return this.httpClinet.get<Task[]>(this.apiUrl);
  }

  addTask(task: Task): Observable<Task> {
    return this.httpClinet.post<Task>(this.apiUrl, task, httpOptions);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.httpClinet.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.httpClinet.put<Task>(url, task, httpOptions);
  }
}
