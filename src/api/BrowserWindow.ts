import * as electron from "electron";
import * as restify from "restify";

//Static API
function getAllWindow(req: any, res: any, next: () => void) {
    res.send({
        "windows": BrowserWindow.getAllWindow()
    });
    next();
}

function createWindow(req: any, res: any, next: () => void) {
    const id = BrowserWindow.createWindow(req.body)
    res.send({
        "id": id
    });
    next();
}

class BrowserWindow {
    ////// Static part of the class
    
    public static createWindow(options: electron.BrowserWindowConstructorOptions): number {
        const window = new BrowserWindow(options);
        return window.getId();
    }
    
    public static getAllWindow(): Array<number> {
        return this.windows;
    }
    
    private static windows: Array<number> = []
    
    ////// Dynamic part of the class for browser window object

    // the options of the electron BrowserWindow
    private readonly _options: Electron.CrossProcessExports.BrowserWindowConstructorOptions;
    // the window id
    private readonly _id: number;


    constructor(options: electron.BrowserWindowConstructorOptions) {
        this._options = options;
        this._id = BrowserWindow.windows.push(BrowserWindow.windows.length);

        this.createWindow();
    }

    // get the id of the window
    private getId(): number {
        return this._id;
    }

    // create a new window
    private createWindow(): electron.BrowserWindow {
        return new electron.BrowserWindow(this._options);
    }
}

// Init all the endpoint
export function BrowserWindowInit(server: restify.Server): boolean {
    console.log("Browser init");

    server.get('/api/browser_window/get_all_window', getAllWindow);
    server.post('/api/browser_window/create', createWindow);

    return true;
}