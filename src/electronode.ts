import * as electron from "electron";
import * as restify from "restify";
import * as process from "process";

export class Electronode {
  private _server: restify.Server;
  private readonly _port: number;
  private readonly _debug: boolean;

  constructor(port: number, debug: boolean) {
    this._port = port;
    this._debug = debug;
    this._server = restify.createServer();

    this.start();
  }

  start(): void {
    this._server.listen(this._port, () => {
      console.log('%s listening at %s', this._server.name, this._server.url);
    });
  }

}

const arg = process.execArgv[0]

if ((arg != null) && (arg !== '') && !isNaN(Number(arg.toString()))){
  new Electronode(Number(process.execArgv[0]), true);
} else {
  console.log('You dont set the port number');
}

