import * as electron from "electron";
import Size = Electron.Size;
import {setBackgroundColor} from "../endpoint/browser_window/dynamic/post/setBackgroundColor";

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

        // remove the window from the windows array when it is destroyed
        this._window.on('close', () => {
            this.removeWindow();
        })
    }

    // create a new window
    private createWindow(): void {
        this._window = new electron.BrowserWindow(this._options);
    }
    // remove a window from the windows array
    private removeWindow(): void {
        BrowserWindow.windows.splice(this._id, 1);
    }


    // return if the window is destroyed
    public isDestroyed(): boolean {
        return this._window.isDestroyed();
    }
    // return if the window is focused
    public isFocused(): boolean {
        return this._window.isFocused();
    }
    // return if the window is visible
    public isVisible(): boolean {
        return this._window.isVisible();
    }
    // return if the window is a modal
    public isModal(): boolean {
        return this._window.isModal();
    }
    // return if the window is maximized
    public isMaximized(): boolean {
        return this._window.isMaximized();
    }
    // return if the window is minimized
    public isMinimized(): boolean {
        return this._window.isMinimized();
    }
    // return if the window is in fullscreen
    public isFullScreen(): boolean {
        return this._window.isFullScreen();
    }
    // return if the window is in simple fullscreen
    public isSimpleFullScreen(): boolean {
        return this._window.isSimpleFullScreen();
    }
    // return if the window is normal
    public isNormal(): boolean {
        return this._window.isNormal();
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
    // show a window
    public show(): boolean {
        this._window.show();
        return true;
    }
    // show a window inactive
    public showInactive(): boolean {
        this._window.showInactive();
        return true;
    }
    // hide a window
    public hide(): boolean {
        this._window.hide();
        return true;
    }
    // maximize a window
    public maximize(): boolean {
        this._window.maximize();
        return true;
    }
    // unmaximize a window
    public unmaximize(): boolean {
        this._window.unmaximize();
        return true;
    }
    // minimize a window
    public minimize(): boolean {
        this._window.minimize();
        return true;
    }
    // restore a window
    public restore(): boolean {
        this._window.restore();
        return true;
    }
    // set the fullscreen state of a window
    public setFullScreen(flag: boolean): boolean {
        this._window.setFullScreen(flag);
        return true;
    }
    // set simple fullscreen state of a window
    public setSimpleFullScreen(flag: boolean): boolean {
        this._window.setSimpleFullScreen(flag);
        return true;
    }
    // set the aspect ratio of a window
    public setAspectRatio(aspectRatio: number, extraSize?: Size): boolean {
        this._window.setAspectRatio(aspectRatio, extraSize);
        return true;
    }
    // set the background color of a window
    public setBackgroundColor(color: string): boolean {
        this._window.setBackgroundColor(color);
        return true;
    }
}