import {BrowserWindow} from "../../../../api/browserWindow";

export function setResizable(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.setResizable(req.body.resizable);
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}