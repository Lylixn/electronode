import {BrowserWindow} from "../../../../api/browserWindow";

export function setTitle(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.setTitle(req.body.title);
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}