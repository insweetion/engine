/****************************************************************************
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 https://www.cocos.com/

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

require('./cocos2d/core');
require('./cocos2d/animation');

if (CC_EDITOR && Editor.isMainProcess) {
    require('./cocos2d/particle/CCParticleAsset');
    require('./cocos2d/tilemap/CCTiledMapAsset');
}
else {
    require('./cocos2d/particle');
    require('./cocos2d/tilemap');
    require('./cocos2d/videoplayer/CCVideoPlayer');
    require('./cocos2d/webview/CCWebView');
    require('./cocos2d/core/components/CCStudioComponent');
    require('./extensions/ccpool/CCNodePool');
    require('./cocos2d/actions');
}

require('./extensions/spine');
require('./extensions/dragonbones');
require('./extensions/insweetion');
require('./extensions/welove');

if (!CC_EDITOR || !Editor.isMainProcess) {
    require('./cocos2d/deprecated');
}
