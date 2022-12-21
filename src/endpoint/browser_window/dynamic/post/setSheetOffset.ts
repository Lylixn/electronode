import {BrowserWindow} from "../../../../api/browserWindow";

export function setSheetOffset(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.setSheetOffset(req.body.offsetY, req.body.offsetX);
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}