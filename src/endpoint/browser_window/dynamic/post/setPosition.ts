import {BrowserWindow} from "../../../../api/browserWindow";

export function setPosition(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.setPosition(req.body.x, req.body.y, req.body.animate);
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}