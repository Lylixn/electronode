import {BrowserWindow} from "../../../../api/browserWindow";

export function isMovable(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        res.send(window.isMovable());
    } else {
        res.send("Window not found");
    }
    next();
}