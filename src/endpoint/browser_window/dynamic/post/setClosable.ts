import {BrowserWindow} from "../../../../api/browserWindow";

export function setClosable(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.setClosable(req.body.closable);
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}