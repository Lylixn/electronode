import {app} from "electron";
import axios from "axios";

export class App {
    private _app: Electron.CrossProcessExports.App;
    
    constructor() {
        this._app = app

        this.event()
    }

    private event(){
        this._app.on('will-finish-launching', () => {
            axios.post('/api/callback/app/will-finish-launching')
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
        this._app.on('ready', () => {
            axios.post('/api/callback/app/ready')
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
        this._app.on('window-all-closed', () => {
            axios.post('/api/callback/app/window-all-closed')
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
    }
    
}