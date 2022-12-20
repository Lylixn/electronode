import {BrowserWindow} from "../../../../api/browserWindow";

export function loadUrl(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.loadUrl(req.body.url, req.body.options);
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}
