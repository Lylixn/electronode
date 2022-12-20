import * as electron from "electron";

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

    // create a new window
    private createWindow(): void {
        this._window = new electron.BrowserWindow(this._options);
    }
    // remove a window from the windows array
    private removeWindow(): void {
        BrowserWindow.windows.splice(this._id, 1);
    }

    // get the id of the window
    public getId(): number {
        return this._id;
    }
    // load a file into the window
    public loadFile(path: string, options?:electron.LoadFileOptions): void {
        this._window.loadFile(path, options).then(r => {
            console.log(r);
        });
    }
    // load an url into the window
    public loadUrl(url: string, options?:electron.LoadURLOptions): void {
        this._window.loadURL(url, options).then(r => {
            console.log(r);
        });
    }
    // destroy a window
    public destroy(): boolean {
        this._window.destroy();
        this.removeWindow();
        return true
    }
    // close a window
    public close(): boolean {
        this._window.close();
        this.removeWindow();
        return true
    }
    // focus a window
    public focus(): boolean {
        this._window.focus();
        return true
    }
    // blur a window
    public blur(): boolean {
        this._window.blur();
        return true
    }
    // return if the window is destroyed
    public isDestroyed(): boolean {
        return this._window.isDestroyed();
    }
    // return if the window is focused
    public isFocused(): boolean {
        return this._window.isFocused();
    }
}