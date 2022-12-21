import {BrowserWindow} from "../../../../api/browserWindow";

export function moveTop(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.moveTop();
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}