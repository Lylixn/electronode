import {BrowserWindow} from "../../../api/browserWindow";

// close a window
export function close(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    window.close();
    res.send(true);
    next();
}