import {BrowserWindow} from "../../../../api/browserWindow";

export function setKiosk(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.setKiosk(req.body.flag);
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}