import {BrowserWindow} from "../../../../api/browserWindow";

export function hide(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.hide();
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}