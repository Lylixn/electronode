import {BrowserWindow} from "../../../api/browserWindow";

// blur a window
export function isDestroyed(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    res.send(window.isDestroyed());
    next();
}