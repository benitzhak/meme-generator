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
            size: 40,
            align: 'center',
            color: 'black',
            fillColor: 'white',
            offsetY: 50,
            offsetX: 225
        },
        {
            txt: '',
            size: 40,
            align: 'center',
            color: 'black',
            fillColor: 'white',
            offsetY: 200,
            offsetX: 225
        },
        {
            txt: '',
            size: 40,
            align: 'center',
            color: 'black',
            fillColor: 'white',
            offsetY: 400,
            offsetX: 225
        }
    ]
}

function setText(ev) {
    var elText = ev.target.value;
    gMeme.lines[gN].txt = elText;
    drawImg(gCurrImg)
    draw()
}

function clearInput() {
    var elInput = document.getElementById('input');
    elInput.value = '';
}

function openEditor() {
    var elEditor = document.querySelector('.editor-container');
    var elGallry = document.querySelector('.gallery-container');
    if (!elEditor.classList.contains('flex')) {
        elEditor.classList.add('flex');
        elGallry.classList.remove('grid');
    }
}