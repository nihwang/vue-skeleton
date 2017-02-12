const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const express = require('express');
const fs = require('fs');

function startServer() {
  const app = express();
  const index = fs.readFileSync('./dist/index.html');

  app.use(express.static('dist'));
  app.get('/*', (req, res) => {
    res.end(index);
  });

  app.listen(process.env.PORT || 3000, () => {
    // eslint-disable-next-line no-console
    console.log(`Worker listening on ${process.env.PORT || 3000}.`);
  });
}

if (cluster.isMaster) {
  let recentFail = false;

  // Fork workers.
  for (let i = 0; i < numCPUs; i += 1) {
    cluster.fork();
  }

  cluster.on('exit', () => {
    if (!recentFail) {
      cluster.fork();
    }

    recentFail = true;

    setTimeout(() => { recentFail = false; }, 2000);
  });
} else {
  startServer();
}
