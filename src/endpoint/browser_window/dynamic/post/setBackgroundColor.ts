import {BrowserWindow} from "../../../../api/browserWindow";

export function setBackgroundColor(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.setBackgroundColor(req.body.color);
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}