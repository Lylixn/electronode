import {BrowserWindow} from "../../../../api/browserWindow";

export function setSize(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.setSize(req.body.width, req.body.height, req.body.animate);
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}