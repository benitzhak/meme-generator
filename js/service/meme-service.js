'use strict'
var gCanvas;
var gCtx;
var gCurrImg;
// var gOffsetY = 50;
var gN = 0;

var gKeywords = { 'happy': 12, 'funny puk': 1 }

var gImgs = [{ id: 1, url: 'img/popo.jpg', keywords: ['happy'] }];
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
            txt: '',
            size: 20,
            align: 'left',
            color: 'red',
            offsetY: 50
        },
        {
            txt: '',
            size: 20,
            align: 'left',
            color: 'red',
            offsetY: 400
        }
    ]
}

function setText(ev) {
    var elText = ev.target.value;
    gMeme.lines[gN].txt = elText;
    drawImg(gCurrImg)
    draw()
}