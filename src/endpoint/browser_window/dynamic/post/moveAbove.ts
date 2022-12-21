import {BrowserWindow} from "../../../../api/browserWindow";

export function moveAbove(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.moveAbove(req.body.mediaSourceId);
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}