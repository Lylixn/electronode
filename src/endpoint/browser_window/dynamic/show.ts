import {BrowserWindow} from "../../../api/browserWindow";

export function show(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    window.show();
    res.send(true);
    next();
}