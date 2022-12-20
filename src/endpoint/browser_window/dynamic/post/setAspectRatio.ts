import {BrowserWindow} from "../../../../api/browserWindow";

export function setAspectRatio(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.setAspectRatio(req.body.aspectRatio, req.body.extraSize);
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}