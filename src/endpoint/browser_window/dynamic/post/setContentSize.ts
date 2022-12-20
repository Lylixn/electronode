import {BrowserWindow} from "../../../../api/browserWindow";

export function setContentSize(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.setContentSize(req.body.width, req.body.height, req.body.animate);
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}