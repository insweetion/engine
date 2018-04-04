/****************************************************************************
 Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
 
let EventTarget = require('./EventTarget')
let Event = require('./Event')

class FontFaceSet extends EventTarget {
    constructor() {
        super()
        this._status = 'loading'
    }

    get status() {
        return this._status
    }

    set onloading(listener) {
        this.addEventListener('loading', listener)
    }

    set onloadingdone(listener) {
        this.addEventListener('loadingdone', listener)
    }

    set onloadingerror(listener) {
        this.addEventListener('loadingerror', listener)
    }

    add(fontFace) {
        this._status = fontFace._status = 'loading'
        this.dispatchEvent(new Event('loading'))
        // Call native binding method to set the ttf font to native platform.
        let family = jsb.loadFont(fontFace.family, fontFace.source)
        setTimeout(() => {
            if (family) {
                fontFace._status = this._status = 'loaded'
                fontFace._resolveCB()
                this.dispatchEvent(new Event('loadingdone'))
            }
            else {
                fontFace._status = this._status = 'error'
                fontFace._rejectCB()
                this.dispatchEvent(new Event('loadingerror'))
            } 
        }, 0)
    }

    clear() {

    }

    delete() {

    }

    load() {

    }

    ready() {

    }
}

module.exports = FontFaceSet
