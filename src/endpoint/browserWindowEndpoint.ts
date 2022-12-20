import * as restify from "restify";

import {getAllWindow} from "./browser_window/static/getAllWindow";
import {createWindow} from "./browser_window/static/createWindow";

import {loadUrl} from "./browser_window/dynamic/post/loadUrl";
import {loadFile} from "./browser_window/dynamic/post/loadFile";
import {destroy} from "./browser_window/dynamic/post/destroy";
import {close} from "./browser_window/dynamic/post/close";
import {focus} from "./browser_window/dynamic/post/focus";
import {blur} from "./browser_window/dynamic/post/blur";
import {isDestroyed} from "./browser_window/dynamic/get/isDestroyed";
import {isFocused} from "./browser_window/dynamic/get/isFocused";
import {show} from "./browser_window/dynamic/post/show";
import {showInactive} from "./browser_window/dynamic/post/showInactive";
import {hide} from "./browser_window/dynamic/post/hide";
import {isVisible} from "./browser_window/dynamic/get/isVisible";
import {isModal} from "./browser_window/dynamic/get/isModal";
import {maximize} from "./browser_window/dynamic/post/maximize";
import {unmaximize} from "./browser_window/dynamic/post/unmaximize";
import {isMaximized} from "./browser_window/dynamic/get/isMaximized";
import {minimize} from "./browser_window/dynamic/post/minimize";
import {restore} from "./browser_window/dynamic/post/restore";
import {isMinimized} from "./browser_window/dynamic/get/isMinimized";
import {setFullScreen} from "./browser_window/dynamic/post/setFullScreen";
import {isFullScreen} from "./browser_window/dynamic/get/isFullScreen";

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
    server.post('/api/browser_window/:id/show', show);
    server.post('/api/browser_window/:id/show_inactive', showInactive);
    server.post('/api/browser_window/:id/hide', hide);
    server.post('/api/browser_window/:id/maximize', maximize);
    server.post('/api/browser_window/:id/unmaximize', unmaximize);
    server.post('/api/browser_window/:id/minimize', minimize);
    server.post('/api/browser_window/:id/restore', restore);
    server.post('/api/browser_window/:id/set_full_screen', setFullScreen);

    server.get('/api/browser_window/:id/is_focused', isFocused);
    server.get('/api/browser_window/:id/is_destroyed', isDestroyed);
    server.get('/api/browser_window/:id/is_visible', isVisible);
    server.get('/api/browser_window/:id/is_modal', isModal);
    server.get('/api/browser_window/:id/is_maximized', isMaximized);
    server.get('/api/browser_window/:id/is_minimized', isMinimized);
    server.get('/api/browser_window/:id/is_full_screen', isFullScreen);

    return true;
}