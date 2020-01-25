// import * as fs from 'fs';
import * as express from 'express';
import * as http from 'http';
// import * as https from 'https';
import * as cluster from 'cluster';
import * as os from 'os';
import MiddlewaresBase from './config/middlewares/base/MiddlewaresBase';
import DataAccess from './app/dataAccess/DataAccess';
// import CronJob from './app/helpers/CronJob';
import * as dotenv from 'dotenv';
const numCPUs = os.cpus().length;
dotenv.config();

// var privateKey  = fs.readFileSync('certificates/key.pem', 'utf8');
// var certificate = fs.readFileSync('certificates/cert.pem', 'utf8');

// var credentials = {key: privateKey, cert: certificate};
var app = express();
var port = process.env.PORT ? Number(process.env.PORT) : 3000;
app.set("port", port);
app.use(MiddlewaresBase.configuration);


if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
  
    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
  
    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
    });
    // DataAccess.connect();
    // CronJob.insertDataJobEveryday();
  
    // CronJob.jobEverydaySendDataStartDateTime();
    // CronJob.jobEverydaySendDataEndDateTime();
    // CronJob.jobEverydaySendDataNotCompleted();
   
  } else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    var httpServer = http.createServer(app);
    // var httpsServer = https.createServer(app);
    DataAccess.connect();
    
    httpServer.listen(port, () => {
        console.log("Node app is running at localhost:" + port);
    });
  
    console.log(`Worker ${process.pid} started`);
  }


