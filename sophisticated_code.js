/*

Filename: sophisticated_code.js

Description: This code demonstrates a complex implementation of a task scheduler that manages tasks with priorities and deadlines. It includes various helper functions to manipulate the task list, add tasks with specific properties, sort tasks by priority and deadline, and display the task list. The code uses object-oriented programming principles and ES6 syntax, resulting in a professional and creative implementation.

*/

class Task {
  constructor(name, priority, deadline) {
    this.name = name;
    this.priority = priority;
    this.deadline = deadline;
  }
}

class TaskScheduler {
  constructor() {
    this.tasks = [];
  }

  addTask(name, priority, deadline) {
    const task = new Task(name, priority, deadline);
    this.tasks.push(task);
  }

  removeTask(taskName) {
    this.tasks = this.tasks.filter(task => task.name !== taskName);
  }

  sortTasksByPriority() {
    this.tasks.sort((a, b) => b.priority - a.priority);
  }

  sortTasksByDeadline() {
    this.tasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  }

  getTaskList() {
    return this.tasks.map(task => `Task: ${task.name} | Priority: ${task.priority} | Deadline: ${task.deadline}`);
  }
}

const taskScheduler = new TaskScheduler();

taskScheduler.addTask("Implement feature A", 2, "2022-01-10");
taskScheduler.addTask("Refactor code", 1, "2022-02-05");
taskScheduler.addTask("Write documentation", 3, "2022-03-20");
taskScheduler.addTask("Fix critical bug", 1, "2022-01-15");

console.log("Before sorting tasks by priority:");
console.log(taskScheduler.getTaskList());

taskScheduler.sortTasksByPriority();

console.log("\nAfter sorting tasks by priority:");
console.log(taskScheduler.getTaskList());

taskScheduler.removeTask("Fix critical bug");

console.log("\nAfter removing 'Fix critical bug' task:");
console.log(taskScheduler.getTaskList());

taskScheduler.sortTasksByDeadline();

console.log("\nAfter sorting tasks by deadline:");
console.log(taskScheduler.getTaskList());

// ... additional code and operations can be added here