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
import {setSimpleFullScreen} from "./browser_window/dynamic/post/setSimpleFullScreen";
import {isSimpleFullScreen} from "./browser_window/dynamic/get/isSimpleFullScreen";
import {isNormal} from "./browser_window/dynamic/get/isNormal";
import {setAspectRatio} from "./browser_window/dynamic/post/setAspectRatio";
import {setBackgroundColor} from "./browser_window/dynamic/post/setBackgroundColor";
import {previewFile} from "./browser_window/dynamic/post/previewFile";
import {closeFilePreview} from "./browser_window/dynamic/post/closeFilePreview";
import {setBounds} from "./browser_window/dynamic/post/setBounds";
import {getBounds} from "./browser_window/dynamic/get/getBounds";
import {getBackgroundColor} from "./browser_window/dynamic/get/getBackgroundColor";
import {setContentBounds} from "./browser_window/dynamic/post/setContentBounds";
import {getContentBounds} from "./browser_window/dynamic/get/getContentBounds";
import {getNormalBounds} from "./browser_window/dynamic/get/getNormalBounds";
import {setEnabled} from "./browser_window/dynamic/post/setEnabled";
import {isEnabled} from "./browser_window/dynamic/get/isEnabled";
import {setSize} from "./browser_window/dynamic/post/setSize";
import {getSize} from "./browser_window/dynamic/get/getSize";
import {setContentSize} from "./browser_window/dynamic/post/setContentSize";
import {getContentSize} from "./browser_window/dynamic/get/getContentSize";
import {setMinimumSize} from "./browser_window/dynamic/post/setMinimumSize";
import {getMinimumSize} from "./browser_window/dynamic/get/getMinimumSize";
import {setMaximumSize} from "./browser_window/dynamic/post/setMaximumSize";
import {getMaximumSize} from "./browser_window/dynamic/get/getMaximumSize";
import {setResizable} from "./browser_window/dynamic/post/setResizable";
import {isResizable} from "./browser_window/dynamic/get/isResizable";
import {setMovable} from "./browser_window/dynamic/post/setMovable";
import {isMovable} from "./browser_window/dynamic/get/isMovable";
import {setMinimizable} from "./browser_window/dynamic/post/setMinimizable";
import {isMinimizable} from "./browser_window/dynamic/get/isMinimizable";
import {setMaximizable} from "./browser_window/dynamic/post/setMaximizable";
import {isMaximizable} from "./browser_window/dynamic/get/isMaximizable";
import {setFullScreenable} from "./browser_window/dynamic/post/setFullScreenable";
import {isFullScreenable} from "./browser_window/dynamic/get/isFullScreenable";
import {setAlwaysOnTop} from "./browser_window/dynamic/post/setAlwaysOnTop";
import {isAlwaysOnTop} from "./browser_window/dynamic/get/isAlwaysOnTop";
import {moveAbove} from "./browser_window/dynamic/post/moveAbove";
import {moveTop} from "./browser_window/dynamic/post/moveTop";
import {center} from "./browser_window/dynamic/post/center";
import {setPosition} from "./browser_window/dynamic/post/setPosition";
import {getPosition} from "./browser_window/dynamic/get/getPosition";
import {setTitle} from "./browser_window/dynamic/post/setTitle";
import {getTitle} from "./browser_window/dynamic/get/getTitle";
import {setSheetOffset} from "./browser_window/dynamic/post/setSheetOffset";
import {flashFrame} from "./browser_window/dynamic/post/flashFrame";
import {setSkipTaskbar} from "./browser_window/dynamic/post/setSkipTaskbar";
import {setKiosk} from "./browser_window/dynamic/post/setKiosk";
import {isKiosk} from "./browser_window/dynamic/get/isKiosk";

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
    server.post('/api/browser_window/:id/preview_file', previewFile);
    server.post('/api/browser_window/:id/close_file_preview', closeFilePreview);
    server.post('/api/browser_window/:id/move_above', moveAbove);
    server.post('/api/browser_window/:id/move_top', moveTop);
    server.post('/api/browser_window/:id/center', center);
    server.post('/api/browser_window/:id/flash_frame', flashFrame);
    server.post('/api/browser_window/:id/hook_window_message', hookWindowMessage);
    server.post('/api/browser_window/:id/unhook_window_message', unhookWindowMessage);
    server.post('/api/browser_window/:id/unhook_all_window_messages', unhookAllWindowMessages);

    server.post('/api/browser_window/:id/set_full_screen', setFullScreen);
    server.post('/api/browser_window/:id/set_simple_full_screen', setSimpleFullScreen);
    server.post('/api/browser_window/:id/set_aspect_ratio', setAspectRatio);
    server.post('/api/browser_window/:id/set_background_color', setBackgroundColor);
    server.post('/api/browser_window/:id/set_bounds', setBounds);
    server.post('/api/browser_window/:id/set_content_bounds', setContentBounds);
    server.post('/api/browser_window/:id/set_enabled', setEnabled);
    server.post('/api/browser_window/:id/set_size', setSize);
    server.post('/api/browser_window/:id/set_content_size', setContentSize);
    server.post('/api/browser_window/:id/set_minimum_size', setMinimumSize);
    server.post('/api/browser_window/:id/set_maximum_size', setMaximumSize);
    server.post('/api/browser_window/:id/set_resizable', setResizable);
    server.post('/api/browser_window/:id/set_movable', setMovable);
    server.post('/api/browser_window/:id/set_minimizable', setMinimizable);
    server.post('/api/browser_window/:id/set_maximizable', setMaximizable);
    server.post('/api/browser_window/:id/set_full_screenable', setFullScreenable);
    server.post('/api/browser_window/:id/set_always_on_top', setAlwaysOnTop);
    server.post('/api/browser_window/:id/set_position', setPosition);
    server.post('/api/browser_window/:id/set_title', setTitle);
    server.post('/api/browser_window/:id/set_sheet_offset', setSheetOffset);
    server.post('/api/browser_window/:id/set_skip_taskbar', setSkipTaskbar);
    server.post('/api/browser_window/:id/set_kiosk', setKiosk);

    server.get('/api/browser_window/:id/is_focused', isFocused);
    server.get('/api/browser_window/:id/is_destroyed', isDestroyed);
    server.get('/api/browser_window/:id/is_visible', isVisible);
    server.get('/api/browser_window/:id/is_modal', isModal);
    server.get('/api/browser_window/:id/is_maximized', isMaximized);
    server.get('/api/browser_window/:id/is_minimized', isMinimized);
    server.get('/api/browser_window/:id/is_full_screen', isFullScreen);
    server.get('/api/browser_window/:id/is_simple_full_screen', isSimpleFullScreen);
    server.get('/api/browser_window/:id/is_normal', isNormal);
    server.get('/api/browser_window/:id/is_enabled', isEnabled);
    server.get('/api/browser_window/:id/is_resizable', isResizable);
    server.get('/api/browser_window/:id/is_movable', isMovable);
    server.get('/api/browser_window/:id/is_minimizable', isMinimizable);
    server.get('/api/browser_window/:id/is_maximizable', isMaximizable);
    server.get('/api/browser_window/:id/is_full_screenable', isFullScreenable);
    server.get('/api/browser_window/:id/is_always_on_top', isAlwaysOnTop);
    server.get('/api/browser_window/:id/is_kiosk', isKiosk);
    server.get('/api/browser_window/:id/is_tablet_mode', isTabletMode);
    server.get('/api/browser_window/:id/is_window_message_hooked', isWindowMessageHooked);

    server.get('/api/browser_window/:id/get_bounds', getBounds);
    server.get('/api/browser_window/:id/get_background_color', getBackgroundColor);
    server.get('/api/browser_window/:id/get_content_bounds', getContentBounds);
    server.get('/api/browser_window/:id/get_normal_bounds', getNormalBounds);
    server.get('/api/browser_window/:id/get_size', getSize);
    server.get('/api/browser_window/:id/get_content_size', getContentSize);
    server.get('/api/browser_window/:id/get_minimum_size', getMinimumSize);
    server.get('/api/browser_window/:id/get_maximum_size', getMaximumSize);
    server.get('/api/browser_window/:id/get_position', getPosition);
    server.get('/api/browser_window/:id/get_title', getTitle);
    server.get('/api/browser_window/:id/get_media_source_id', getMediaSourceId);
    server.get('/api/browser_window/:id/get_native_window_handle', getNativeWindowHandle);

    return true;
}