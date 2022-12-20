import {BrowserWindow} from "../../../../api/browserWindow";

export function setMinimumSize(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.setMinimumSize(req.body.width, req.body.height);
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}