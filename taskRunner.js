function TaskRunner() {
  this.queuedTasks = [];
  this.isTaskRunning = false;
  this.maxLength = 10;
}

TaskRunner.prototype.addTask = function(task) {
  var count = this.queuedTasks.length;

  if (count === this.maxLength) {
    console.log("The tasks queue is full");
    return;
  }

  this.queuedTasks.push(task);
  if (!this.isTaskRunning) {
    this.runTask();
  }

};


TaskRunner.prototype.runTask = function() {
  var task = this.queuedTasks.shift();
  if (!task) {
    console.log("No tasks to run");
    return;
  }
  if (!this.isTaskRunning) {
    this.isTaskRunning = true;
    task(function() {
      this.isTaskRunning = false;
      this.runTask();
    }.bind(this));
  }
}


var task1 = function(done) {
  done();
};

var task2 = function(done) {
  setTimeout(function() {
    done();
  }, 3000);
};

var task3 = function(done) {
  setTimeout(function() {
    done();
  }, 2000);
};


var taskRunner = new TaskRunner();
taskRunner.addTask(task1);
taskRunner.addTask(task2);
taskRunner.addTask(task3);
