import {BrowserWindow} from "../../../api/browserWindow";

// destroy a window
export function destroy(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    window.destroy();
    res.send(true);
    next();
}