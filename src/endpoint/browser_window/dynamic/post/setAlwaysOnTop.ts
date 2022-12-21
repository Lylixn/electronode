import {BrowserWindow} from "../../../../api/browserWindow";

export function setAlwaysOnTop(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.setAlwaysOnTop(req.body.flag, req.body.level, req.body.relativeLevel);
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}