// eslint-disable-next-line no-undef
process.stdout.write('Welcome to Holberton School, what is your name?\n');
// eslint-disable-next-line no-undef
process.stdin.on('readable', () => {
  // eslint-disable-next-line no-undef
  const chunk = process.stdin.read();

  if (chunk) {
    // eslint-disable-next-line no-undef
    process.stdout.write(`Your name is: ${chunk}`);
  }
});
// eslint-disable-next-line no-undef
process.stdin.on('end', () => {
  // eslint-disable-next-line no-undef
  process.stdout.write('This important software is now closing\n');
});