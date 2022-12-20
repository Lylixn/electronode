import {BrowserWindow} from "../../../../api/browserWindow";

export function isModal(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        res.send(window.isModal());
    } else {
        res.send("Window not found");
    }
    next();
}