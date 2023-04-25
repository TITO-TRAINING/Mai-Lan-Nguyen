function compareRobots(robot1, memory1, robot2, memory2) {
  // Define an array to store the number of steps taken by each robot for each task
  const steps1 = [];
  const steps2 = [];

  // Generate 100 tasks
  for (let i = 0; i < 100; i++) {
    const task = VillageState.random();

    // Run robot1 on the task
    let state = task;
    for (let turn = 0; ; turn++) {
      if (state.parcels.length == 0) {
        steps1.push(turn);
        break;
      }
      const action = robot1(state, memory1);
      state = state.move(action.direction);
      memory1 = action.memory;
    }

    // Run robot2 on the same task
    state = task;
    for (let turn = 0; ; turn++) {
      if (state.parcels.length == 0) {
        steps2.push(turn);
        break;
      }
      const action = robot2(state, memory2);
      state = state.move(action.direction);
      memory2 = action.memory;
    }
  }

  // Calculate the average number of steps taken by each robot per task
  const avgSteps1 = steps1.reduce((a, b) => a + b, 0) / steps1.length;
  const avgSteps2 = steps2.reduce((a, b) => a + b, 0) / steps2.length;

  // Output the results
  console.log(`Robot 1 took an average of ${avgSteps1} steps per task`);
  console.log(`Robot 2 took an average of ${avgSteps2} steps per task`);
}
