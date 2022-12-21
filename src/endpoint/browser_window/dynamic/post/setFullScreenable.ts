import {BrowserWindow} from "../../../../api/browserWindow";

export function setFullScreenable(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.setFullScreenable(req.body.fullscreenable);
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}