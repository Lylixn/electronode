import {BrowserWindow} from "../../../../api/browserWindow";

export function destroy(req: any, res: any, next: () => void): void {
    const window = BrowserWindow.getWindow(req.params.id);
    if (window) {
        window.destroy();
        res.send(true);
    } else {
        res.send("Window not found");
    }
    next();
}