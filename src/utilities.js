import { EventKeyCodeToJSID, EventKeyCodeToJSID_inverse } from "./constants"


export function is_space(key){
    return key == "Space"
}

export function is_paragraph(key){
    return key == "Enter"
}

export function is_whitespace(key) {
    switch (key) {
        case "Tab":
        case "Space":
        case "Enter":
            return true;
        default:
            return false;
    }
}

export function is_backspace(key) {
    switch(key){
        case "Backspace":
            return true
        default:
            return false
    }
}

export function is_horizontalKey(key) {
    switch(key) {
        case "ArrowLeft":
        case "ArrowRight":
            return true
        default:
            return false
    }
}

export function is_char(key){
    return is_letter(key) | is_symbol(key)
}

export function is_letter(key) {
    switch (key) {
        case "Digit0":
        case "Digit1":
        case "Digit2":
        case "Digit3":
        case "Digit4":
        case "Digit5":
        case "Digit6":
        case "Digit7":
        case "Digit8":
        case "Digit9":
        case "KeyA":
        case "KeyB":
        case "KeyC":
        case "KeyD":
        case "KeyE":
        case "KeyF":
        case "KeyG":
        case "KeyH":
        case "KeyI":
        case "KeyJ":
        case "KeyK":
        case "KeyL":
        case "KeyM":
        case "KeyN":
        case "KeyO":
        case "KeyP":
        case "KeyQ":
        case "KeyR":
        case "KeyS":
        case "KeyT":
        case "KeyU":
        case "KeyV":
        case "KeyW":
        case "KeyX":
        case "KeyY":
        case "KeyZ":
            return true
        default:
            return false
    }
}

export function is_symbol(key) {
    switch (key) {
        case "Semicolon":
        case "Equal":
        case "Comma":
        case "Minus":
        case "Period":
        case "Slash":
        case "Backquote":
        case "BracketLeft":
        case "Backslash":
        case "BracketRight":
        case "Quote":
            return true
        default:
            return false
    }
}

export function is_modifierKey(key) {
    switch(key){
        case "ShiftLeft":
        case "ShiftRight":
        case "ControlLeft":
        case "ControlRight":
        case "AltLeft":
        case "AltRight":
        case "CapsLock":
            return true
        default:
            return false
    }

}



let _debugmap = new Map()
let prev_time = 0
function helper_GetEventKeyCodes(event) {
    // console.log(event)
    // if (event.location != "0" && event.location != "1" ) {
    //     return
    // }
    // _debugmap.set(event.code,event.which)
    // _debug_report_map()
}

function _debug_report_map() {
    let newmap = [..._debugmap.entries()].sort((a, b) => parseInt(a[1]) - parseInt(b[1]))

    let str = ""
    let counter = 0
    newmap.forEach(elem => {
        str += `["${elem[0]}","${counter++}"],\n`
    });
    console.log(str)
}

function _debug_print() {
    let newmap = [...EventKeyCodeToJSID.entries()].sort((a, b) => parseInt(a[0]) - parseInt(b[0]))

    let str = ""
    newmap.forEach(elem => {
        str += `case "${elem[0]}":\n`
    });
    console.log(str)
}

export function debug_init() {
    document.addEventListener("keydown", helper_GetEventKeyCodes)
}
