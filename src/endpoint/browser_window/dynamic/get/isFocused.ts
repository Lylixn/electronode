import {BrowserWindow} from "../../../../api/browserWindow";

export function isFocused(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        res.send(window.isFocused());
    } else {
        res.send("Window not found");
    }
    next();
}