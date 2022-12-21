import {BrowserWindow} from "../../../../api/browserWindow";

export function center(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.center();
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}