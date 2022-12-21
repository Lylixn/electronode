import {BrowserWindow} from "../../../../api/browserWindow";

export function setMinimizable(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.setMinimizable(req.body.minimizable);
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}