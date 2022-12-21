import * as restify from "restify";
import * as electron from "electron";
import {BrowserWindowEndpoint} from "./endpoint/browserWindowEndpoint";

// Prevent script close when all windows are closed
electron.app.on('before-quit', (event: electron.Event) => {
  event.preventDefault();
})

export class Electronode {
  private readonly _server: restify.Server;
  private readonly _port: number;
  private readonly _debug: boolean;

  constructor() {
    this._port = 3000;
    this._debug = false;
    this._server = restify.createServer();

    this._server.use(restify.plugins.queryParser({mapParams: true}));
    this._server.use(restify.plugins.bodyParser({ mapParams: true }));
    this._server.use(restify.plugins.acceptParser(this._server.acceptable));

    this.start();

    this.init();
  }

  start(): void {
    this._server.listen(this._port, () => {
      console.log('%s listening at %s', this._server.name, this._server.url);
    });
  }

  init(): void {
    new BrowserWindowEndpoint(this._server)
  }

}

new Electronode();
