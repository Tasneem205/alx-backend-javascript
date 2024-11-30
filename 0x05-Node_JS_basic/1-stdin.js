function stdinFunction () {
    console.log("Welcome to Holberton School, what is your name?");
    process.stdin.on("data", (data) => {
      const name = data.toString().trim();
      console.log(`Your name is: ${name}`);
      console.log("This important software is now closing");
      process.exit(0);
    });
    process.on("SIGINT", () => {
        console.log("This important software is now closing");
        process.exit(0);
    });
}

stdinFunction();