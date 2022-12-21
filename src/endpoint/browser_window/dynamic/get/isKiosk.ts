import {BrowserWindow} from "../../../../api/browserWindow";

export function isKiosk(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        res.send(window.isKiosk());
    } else {
        res.send("Window not found");
    }
    next();
}