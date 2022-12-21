import {BrowserWindow} from "../../../../api/browserWindow";

export function setMaximizable(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.setMaximizable(req.body.maximizable);
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}