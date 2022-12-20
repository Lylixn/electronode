import {BrowserWindow} from "../../../api/browserWindow";

// return all the windows
export function getAllWindow(req: any, res: any, next: () => void): void {
    res.send({
        "windows": BrowserWindow.windows
    });
    next();
}