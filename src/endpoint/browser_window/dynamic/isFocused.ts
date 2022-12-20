import {BrowserWindow} from "../../../api/browserWindow";

// blur a window
export function isFocused(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    res.send(window.isFocused());
    next();
}