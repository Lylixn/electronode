import {BrowserWindow} from "../../../../api/browserWindow";

export function blur(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.blur();
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}