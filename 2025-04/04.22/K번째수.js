function solution(array, commands) {
  return commands.map((command) => {
    const interests = array
      .slice(command[0] - 1, command[1])
      .sort((a, b) => a - b);
    return interests[command[2] - 1];
  });
}
