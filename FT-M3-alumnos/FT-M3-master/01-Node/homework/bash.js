const commands = require('./commands');

// Output un prompt
  process.stdout.write("\nprompt > ");

// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on("data", (data) => {
  const file = data.toString().toLowerCase().trim().split(' ');
  const cmd = file.shift();

  if(commands.hasOwnProperty(cmd))
    commands[cmd](done, file.join(' '));
  else
    commands.err(done);
});

function done(output){
  process.stdout.write(output);
  process.stdout.write("prompt > ");
}
