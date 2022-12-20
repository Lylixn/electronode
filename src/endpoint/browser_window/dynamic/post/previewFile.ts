import {BrowserWindow} from "../../../../api/browserWindow";

export function previewFile(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.previewFile(req.body.path, req.body.displayName);
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}