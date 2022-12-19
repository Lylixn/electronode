import * as restify from "restify";
import {BrowserWindow} from "../api/BrowserWindow";

function getAllWindow(req: any, res: any, next: () => void) {
    res.send({
        "windows": BrowserWindow.windows
    });
    next();
}
function createWindow(req: any, res: any, next: () => void) {
    const window = new BrowserWindow(req.body);
    res.send({
        "id": window.getId()
    });
    next();
}
function loadUrl(req: any, res: any, next: () => void) {
    const window = BrowserWindow.getWindow(req.params.id);
    window.loadUrl(req.body.url, req.body.options);
    res.send(true);
    next();
}
function loadFile(req: any, res: any, next: () => void) {
    const window = BrowserWindow.getWindow(req.params.id);
    window.loadFile(req.body.path, req.body.options);
    res.send(true);
    next();
}

// Init all the endpoint
export function BrowserWindowInit(server: restify.Server): boolean {
    console.log("Browser init");

    // static api
    server.get('/api/browser_window/get_all_window', getAllWindow);
    server.post('/api/browser_window/create', createWindow);

    // dynamic API
    server.post('/api/browser_window/:id/load_url', loadUrl);
    server.post('/api/browser_window/:id/load_file', loadFile);

    return true;
}