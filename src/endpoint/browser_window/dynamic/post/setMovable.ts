import {BrowserWindow} from "../../../../api/browserWindow";

export function setMovable(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.setMovable(req.body.movable);
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}