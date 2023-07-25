import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.httpClinet.delete<Task>(url);
  }
}
