import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input ({required: true}) userId!: string;
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  private taskService = inject(TasksService);
  
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.taskService.addTasks({
        title: this.enteredTitle,
      summary: this.enteredSummary,
      date : this.enteredDate
    },
     this.userId)
  
  }
}
