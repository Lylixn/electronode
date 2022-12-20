import {BrowserWindow} from "../../../api/browserWindow";

export function loadFile(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    window.loadFile(req.body.path, req.body.options);
    res.send(true);
    next();
}

