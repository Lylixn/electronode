import {BrowserWindow} from "../../../../api/browserWindow";

export function setContentBounds(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.setContentBounds(req.body.bounds, req.body.animate);
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}