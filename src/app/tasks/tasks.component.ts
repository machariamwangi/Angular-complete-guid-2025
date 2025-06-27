import { Component, Input } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({}) userId!: string;
  @Input({}) name!: string;
  isAddingTask = false;


  constructor(private tasksService: TasksService) { }

  tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }


  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId: this.userId,
    }); 

    this.isAddingTask = false;
  }
}
