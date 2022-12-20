import {BrowserWindow} from "../../../../api/browserWindow";

export function isVisible(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        res.send(window.isVisible());
    } else {
        res.send("Window not found");
    }
    next();
}