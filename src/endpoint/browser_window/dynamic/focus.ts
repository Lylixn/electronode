import {BrowserWindow} from "../../../api/browserWindow";

export function focus(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    window.focus();
    res.send(true);
    next();
}