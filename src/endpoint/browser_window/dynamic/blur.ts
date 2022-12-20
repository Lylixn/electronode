import {BrowserWindow} from "../../../api/browserWindow";

export function blur(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    window.blur();
    res.send(true);
    next();
}