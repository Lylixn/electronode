import {BrowserWindow} from "../../../../api/browserWindow";

export function getNormalBounds(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        res.send(window.getNormalBounds());
    } else {
        res.send("Window not found");
    }
    next();
}