import {BrowserWindow} from "../../../api/browserWindow";

//create a window
export function createWindow(req: any, res: any, next: () => void): void {
    const window = new BrowserWindow(req.body);
    res.send({
        "id": window.getId()
    });
    next();
}
