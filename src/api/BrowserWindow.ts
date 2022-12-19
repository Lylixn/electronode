import * as electron from "electron";
import * as restify from "restify";

export class BrowserWindow {
    // all windows instances
    public static windows: Array<BrowserWindow> = []

    // get a window by id
    public static getWindow(id: number): BrowserWindow {
        for (const window of BrowserWindow.windows) {
            if (window.getId() == id) {
                return window;
            }
        }
    }

    // the options of the electron BrowserWindow
    private readonly _options: Electron.CrossProcessExports.BrowserWindowConstructorOptions;
    // the window id
    public readonly _id: number;
    // electron window instance
    private _window: Electron.CrossProcessExports.BrowserWindow;

    constructor(options: electron.BrowserWindowConstructorOptions) {
        this._options = options;
        this._id = BrowserWindow.windows.push(this) - 1;

        this.createWindow();
    }

    // get the id of the window
    public getId(): number {
        return this._id;
    }

    public loadFile(path: string, options?:electron.LoadFileOptions): void {
        this._window.loadFile(path, options).then(r => {
            console.log(r);
        });
    }

    public loadUrl(url: string, options?:electron.LoadURLOptions): void {
        this._window.loadURL(url, options).then(r => {
            console.log(r);
        });
    }

    // create a new window
    private createWindow(): void {
        this._window = new electron.BrowserWindow(this._options);
    }
}