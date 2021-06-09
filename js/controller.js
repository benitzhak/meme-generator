'use strict';


function init() {
    gCanvas = document.querySelector('.canvas');
    gCtx = gCanvas.getContext('2d');
}

function drawImg(img) {
    gCurrImg = img;
    var elImg = document.querySelector(`.${img.classList}`);
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
}

function drawText() {
    gMeme.lines.forEach(function(line) {
        gCtx.lineWidth = 2
        gCtx.strokeStyle = 'red'
        gCtx.fillStyle = 'white'
        gCtx.font = '40px Arial'
        gCtx.textAlign = 'center'
        gCtx.textBaseLine = 'hanging'
        gCtx.fillText(line.txt, 200, line.offsetY)
        gCtx.strokeText(line.txt, 200, line.offsetY)
    })
}


function cleanTextLine() {

    // var elInput = document.getElementById('input');
    // elInput.value = '';
    // drawImg(gCurrImg);
}

function draw() {
    // var elInput = document.getElementById('input');
    // elInput.value = '';
    drawText();
}

function selesctDrawLine() {
    if (gN === 0) {
        gN = 1
    } else gN = 0;
}