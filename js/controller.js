'use strict';


function init() {
    gCanvas = document.querySelector('.canvas');
    gCtx = gCanvas.getContext('2d');
}

function drawImg(img) {
    gCurrImg = img;
    var elImg = document.querySelector(`.${img.classList}`);
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
    openEditor();
}


function drawText() {
    gMeme.lines.forEach(function(line) {
        gCtx.lineWidth = 2
        gCtx.strokeStyle = `${line.color}`
        gCtx.fillStyle = `${line.fillColor}`;
        gCtx.font = `${line.size}px Impact`
        gCtx.textAlign = line.align
        gCtx.fillText(line.txt, line.offsetX, line.offsetY)
        gCtx.strokeText(line.txt, line.offsetX, line.offsetY)
    })
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
}

function openGallery() {
    var elEditor = document.querySelector('.editor-container');
    var elGallry = document.querySelector('.gallery-container');
    if (!elGallry.classList.contains('grid')) {
        elEditor.classList.remove('flex');
        elGallry.classList.add('grid');
    }
}

function openFill() {
    document.querySelector('.text-fill').click();
}

function openStroke() {
    document.querySelector('.text-stroke').click();
}

function fillColor(color) {
    gMeme.lines[gN].fillColor = color.value;
    drawImg(gCurrImg);
    draw();
}

function strokeColor(color) {
    gMeme.lines[gN].color = color.value;
    drawImg(gCurrImg);
    draw();
}

function onAlignLeft() {
    gMeme.lines[gN].align = 'left';
    gMeme.lines[gN].offsetX = 20;
    drawImg(gCurrImg);
    draw();
}

function onAlignCenter() {
    gMeme.lines[gN].align = 'center';
    gMeme.lines[gN].offsetX = 225;
    drawImg(gCurrImg);
    draw();
}

function onAlignRight() {
    gMeme.lines[gN].align = 'right';
    gMeme.lines[gN].offsetX = 430;
    drawImg(gCurrImg);
    draw();
}

function onGrowFont() {
    gMeme.lines[gN].size++
        drawImg(gCurrImg);
    draw();
}

function onShrinkFont() {
    gMeme.lines[gN].size--
        drawImg(gCurrImg);
    draw();
}

function cleanTextLine() {
    clearInput();
    gMeme.lines[gN].txt = '';
    drawImg(gCurrImg);
    draw();
}

function draw() {
    drawText();
}

function selesctDrawLine() {
    clearInput();
    if (gN === 0) {
        gN = 1
    } else if (gN === 1) {
        gN = 2;
    } else gN = 0;
}