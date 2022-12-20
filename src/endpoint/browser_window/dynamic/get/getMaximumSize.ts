import {BrowserWindow} from "../../../../api/browserWindow";

export function getMaximumSize(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        res.send(window.getMaximumSize());
    } else {
        res.send("Window not found");
    }
    next();
}