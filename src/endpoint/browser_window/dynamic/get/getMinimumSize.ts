import {BrowserWindow} from "../../../../api/browserWindow";

export function getMinimumSize(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        res.send(window.getMinimumSize());
    } else {
        res.send("Window not found");
    }
    next();
}