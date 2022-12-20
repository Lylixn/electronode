import {BrowserWindow} from "../../../../api/browserWindow";

export function setFullScreen(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.setFullScreen(req.body.flag);
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}