import {BrowserWindow} from "../../../../api/browserWindow";

export function setSkipTaskbar(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.setSkipTaskbar(req.body.skip);
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}