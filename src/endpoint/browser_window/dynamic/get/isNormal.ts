import {BrowserWindow} from "../../../../api/browserWindow";

export function isNormal(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        res.send(window.isNormal());
    } else {
        res.send("Window not found");
    }
    next();
}