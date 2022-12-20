import {BrowserWindow} from "../../../../api/browserWindow";

export function setMaximumSize(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.setMaximumSize(req.body.width, req.body.height);
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}