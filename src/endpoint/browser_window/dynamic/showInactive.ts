import {BrowserWindow} from "../../../api/browserWindow";

export function showInactive(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    window.showInactive();
    res.send(true);
    next();
}