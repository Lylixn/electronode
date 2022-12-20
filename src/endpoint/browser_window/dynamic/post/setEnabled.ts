import {BrowserWindow} from "../../../../api/browserWindow";

export function setEnabled(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.setEnabled(req.body.enable);
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}