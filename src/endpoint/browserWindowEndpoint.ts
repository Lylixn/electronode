import * as restify from "restify";

import {getAllWindow} from "./browser_window/static/getAllWindow";
import {createWindow} from "./browser_window/static/createWindow";

import {loadUrl} from "./browser_window/dynamic/loadUrl";
import {loadFile} from "./browser_window/dynamic/loadFile";
import {destroy} from "./browser_window/dynamic/destroy";
import {close} from "./browser_window/dynamic/close";
import {focus} from "./browser_window/dynamic/focus";
import {blur} from "./browser_window/dynamic/blur";
import {isDestroyed} from "./browser_window/dynamic/isDestroyed";
import {isFocused} from "./browser_window/dynamic/isFocused";
import {show} from "./browser_window/dynamic/show";
import {showInactive} from "./browser_window/dynamic/showInactive";
import {hide} from "./browser_window/dynamic/hide";

// Init all the endpoint
export function BrowserWindowInit(server: restify.Server): boolean {
    console.log("Browser init");

    // static api
    server.get('/api/browser_window/get_all_window', getAllWindow);
    server.post('/api/browser_window/create', createWindow);

    // dynamic API
    server.post('/api/browser_window/:id/load_url', loadUrl);
    server.post('/api/browser_window/:id/load_file', loadFile);
    server.post('/api/browser_window/:id/destroy', destroy);
    server.post('/api/browser_window/:id/close', close);
    server.post('/api/browser_window/:id/focus', focus);
    server.post('/api/browser_window/:id/blur', blur);
    server.get('/api/browser_window/:id/is_focused', isFocused);
    server.get('/api/browser_window/:id/is_destroyed', isDestroyed);
    server.post('/api/browser_window/:id/show', show);
    server.post('/api/browser_window/:id/show_inactive', showInactive);
    server.post('/api/browser_window/:id/hide', hide);

    return true;
}