import * as electron from "electron";
import Size = Electron.Size;

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
    // return if the window is enabled
    public isEnabled(): boolean {
        return this._window.isEnabled();
    }
    // return if the window is enabled
    public isResizable(): boolean {
        return this._window.isResizable();
    }
    // return if the window is enabled
    public isMovable(): boolean {
        return this._window.isMovable();
    }
    // return if the window is minimizable
    public isMinimizable(): boolean {
        return this._window.isMinimizable();
    }
    // return if the window is maximizable
    public isMaximizable(): boolean {
        return this._window.isMaximizable();
    }
    // return if the window is fullscreenable
    public isFullScreenable(): boolean {
        return this._window.isFullScreenable();
    }
    // return if the window is fullscreenable
    public isAlwaysOnTop(): boolean {
        return this._window.isAlwaysOnTop();
    }
    // return if the window is kiosk
    public isKiosk(): boolean {
        return this._window.isKiosk();
    }

    // get the bounds of a window
    public getBounds(): electron.Rectangle {
        return this._window.getBounds();
    }
    // get the bounds of a window
    public getBackgroundColor(): string {
        return this._window.getBackgroundColor();
    }
    // get the bounds of a window
    public getContentBounds(): Electron.Rectangle {
        return this._window.getContentBounds();
    }
    // get the normal bounds of a window
    public getNormalBounds(): Electron.Rectangle {
        return this._window.getNormalBounds();
    }
    // get the size of a window
    public getSize(): number[] {
        return this._window.getSize();
    }
    // get the content size of a window
    public getContentSize(): number[] {
        return this._window.getContentSize();
    }
    // get the minimum size of a window
    public getMinimumSize(): number[] {
        return this._window.getMinimumSize();
    }
    // get the maximum size of a window
    public getMaximumSize(): number[] {
        return this._window.getMaximumSize();
    }
    // get the position of a window
    public getPosition(): number[] {
        return this._window.getPosition();
    }
    // get the title of a window
    public getTitle(): string {
        return this._window.getTitle();
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
    // preview a file in a window
    public previewFile(path: string, displayName?: string): boolean {
        this._window.previewFile(path, displayName);
        return true;
    }
    // set the background color of a window
    public closeFilePreview(): boolean {
        this._window.closeFilePreview();
        return true;
    }
    // move a window above all others window
    public moveAbove(mediaSourceId: string): boolean {
        this._window.moveAbove(mediaSourceId);
        return true;
    }
    // move a window on top
    public moveTop(): boolean {
        this._window.moveTop();
        return true;
    }
    // center a window
    public center(): boolean {
        this._window.center();
        return true;
    }
    // center a window
    public flashFrame(flag: boolean): boolean {
        this._window.flashFrame(flag);
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
    // set the bounds of a window
    public setBounds(bounds: Partial<electron.Rectangle>, animate?: boolean): boolean {
        this._window.setBounds(bounds, animate);
        return true;
    }
    // set the bounds of a window
    public setContentBounds(bounds: electron.Rectangle, animate?: boolean): boolean {
        this._window.setContentBounds(bounds, animate);
        return true;
    }
    // enable or disable a window
    public setEnabled(enable: boolean): boolean {
        this._window.setEnabled(enable);
        return true;
    }
    // set the size of a window
    public setSize(width: number, height: number, animate?: boolean): boolean {
        this._window.setSize(width, height, animate);
        return true;
    }
    // set the content size of a window
    public setContentSize(width: number, height: number, animate?: boolean): boolean {
        this._window.setContentSize(width, height, animate);
        return true;
    }
    // set the minimum size of a window
    public setMinimumSize(width: number, height: number): boolean {
        this._window.setMinimumSize(width, height);
        return true;
    }
    // set the maximum size of a window
    public setMaximumSize(width: number, height: number): boolean {
        this._window.setMaximumSize(width, height);
        return true;
    }
    // set if a window is resizable
    public setResizable(resizable: boolean): boolean {
        this._window.setResizable(resizable);
        return true;
    }
    // set if a window is movable
    public setMovable(movable: boolean): boolean {
        this._window.setMovable(movable);
        return true;
    }
    // set if a window is minimizable
    public setMinimizable(minimizable: boolean): boolean {
        this._window.setMinimizable(minimizable);
        return true;
    }
    // set if a window is maximizable
    public setMaximizable(maximizable: boolean): boolean {
        this._window.setMaximizable(maximizable);
        return true;
    }
    // set if a window is fullscreenable
    public setFullScreenable(fullscreenable: boolean): boolean {
        this._window.setFullScreenable(fullscreenable);
        return true;
    }
    // set if a window is closable
    public setClosable(closable : boolean): boolean {
        this._window.setClosable(closable);
        return true;
    }
    // set a window's always on top state
    public setAlwaysOnTop(flag : boolean, level?: 'normal' | 'floating' | 'torn-off-menu' | 'modal-panel' | 'main-menu' | 'status' | 'pop-up-menu' | 'screen-saver', relativeLevel?: number): boolean {
        this._window.setAlwaysOnTop(flag, level, relativeLevel);
        return true;
    }
    // set a window's always on top state
    public setPosition(x: number, y: number, animate?:boolean): boolean {
        this._window.setPosition(x, y, animate);
        return true;
    }
    // set a window's title
    public setTitle(title: string): boolean {
        this._window.setTitle(title);
        return true;
    }
    // set a window's title
    public setSheetOffset(offsetY: number, offsetX?: number): boolean {
        this._window.setSheetOffset(offsetY, offsetX);
        return true;
    }
    // set skip taskbar state
    public setSkipTaskbar(skip: boolean): boolean {
        this._window.setSkipTaskbar(skip);
        return true;
    }
    // set kiosk state
    public setKiosk(flag: boolean): boolean {
        this._window.setKiosk(flag);
        return true;
    }
}