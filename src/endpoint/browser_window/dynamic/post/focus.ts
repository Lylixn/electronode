import {BrowserWindow} from "../../../../api/browserWindow";

export function focus(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.focus();
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}