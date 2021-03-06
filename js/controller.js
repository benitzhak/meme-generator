'use strict';



function init() {
    gCanvas = document.querySelector('.canvas');
    gCtx = gCanvas.getContext('2d');
    renderSavedImg();
}


function drawImg(img) {
    if (img) {
        gCurrImg = img;
        gMeme.selectedImgId = img.id;
        var elImg = document.getElementById(`${img.id}`);
        gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
        openEditor();
    }
}


function drawText() {
    gMeme.lines.forEach(function(line) {
        gCtx.lineWidth = 2
        gCtx.strokeStyle = `${line.color}`;
        gCtx.fillStyle = `${line.fillColor}`;
        gCtx.font = `${line.size}px ${line.font}`
        gCtx.textAlign = line.align
        gCtx.fillText(line.txt, line.offsetX, line.offsetY)
        gCtx.strokeText(line.txt, line.offsetX, line.offsetY)
    })
}

function drawRect() {
    var idx = gMeme.selectedLineIdx;
    var hight = gMeme.lines[idx].offsetY
    var fontSize = gMeme.lines[idx].size;
    drawImg(gCurrImg);
    draw();
    gCtx.strokeRect(20, hight - fontSize, 400, fontSize + 10);
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
}

function saveCanvas(elImg) {
    const data = gCanvas.toDataURL()
    elImg.src = data
    saveToStorage(`meme${gMeme.selectedImgId}`, elImg.src)
    renderSavedImg();
}

function renderSavedImg() {
    document.querySelector('.saved-imges').innerHTML = '';
    for (var i = 0; i < 18; i++) {
        if (loadFromStorage(`meme${i}`)) {
            document.querySelector('.saved-imges').innerHTML += `
            <img class="img" src="${loadFromStorage(`meme${i}`)}">`
        }
    }
}



function openGallery() {
    var elEditor = document.querySelector('.editor-container');
    var elGallry = document.querySelector('.gallery-container');
    var elMemes = document.querySelector('.saved-imges');
    cleanTextLine();
    if (!elGallry.classList.contains('grid')) {
        elMemes.classList.remove('grid');
        elEditor.classList.remove('flex');
        elGallry.classList.add('grid');
    }
}

function openMemes() {
    var elEditor = document.querySelector('.editor-container');
    var elGallry = document.querySelector('.gallery-container');
    var elMemes = document.querySelector('.saved-imges');
    cleanTextLine();
    if (!elMemes.classList.contains('grid')) {
        elMemes.classList.add('grid');
        elEditor.classList.remove('flex');
        elGallry.classList.remove('grid');
    }
}

function chooseFont(font) {
    if (font === 'impact') gMeme.lines[gMeme.selectedLineIdx].font = 'impact'
    else if (font === 'ariel') gMeme.lines[gMeme.selectedLineIdx].font = 'ariel'
    drawRect();
}

function textUp() {
    var idx = gMeme.selectedLineIdx;
    if (gMeme.lines[idx].offsetY === 35) return
    else
        gMeme.lines[idx].offsetY--;
        drawRect();
}

function textDown() {
    var idx = gMeme.selectedLineIdx;
    if (gMeme.lines[idx].offsetY === 445) return
    else
        gMeme.lines[idx].offsetY++
        drawRect();
}

function openFill() {
    document.querySelector('.text-fill').click();
}

function openStroke() {
    document.querySelector('.text-stroke').click();
}

function fillColor(color) {
    var idx = gMeme.selectedLineIdx;
    gMeme.lines[idx].fillColor = color.value;
    drawRect();
}

function strokeColor(color) {
    var idx = gMeme.selectedLineIdx;
    gMeme.lines[idx].color = color.value;
    drawRect();
}

function onAlignLeft() {
    var idx = gMeme.selectedLineIdx;
    gMeme.lines[idx].align = 'left';
    gMeme.lines[idx].offsetX = 20;
    drawRect();
}

function onAlignCenter() {
    var idx = gMeme.selectedLineIdx;
    gMeme.lines[idx].align = 'center';
    gMeme.lines[idx].offsetX = 225;
    drawRect();
}

function onAlignRight() {
    var idx = gMeme.selectedLineIdx;
    gMeme.lines[idx].align = 'right';
    gMeme.lines[idx].offsetX = 410;
    drawRect();
}

function onGrowFont() {
    var idx = gMeme.selectedLineIdx;
    gMeme.lines[idx].size++
        drawRect();
}

function onShrinkFont() {
    var idx = gMeme.selectedLineIdx;
    gMeme.lines[idx].size--
        drawRect();
}

function cleanTextLine() {
        var idx = gMeme.selectedLineIdx;
        clearInput();
        gMeme.lines[idx].txt = '';
        drawImg(gCurrImg);
        draw();
}

function removeRect() {
    drawImg(gCurrImg);
    draw();
}

function draw() {
    drawText();
}


function selesctDrawLine() {
    clearInput();
    if (gMeme.selectedLineIdx === 0) {
        gMeme.selectedLineIdx = 1
        drawImg(gCurrImg);
        draw();
        gCtx.strokeRect(20, gMeme.lines[gMeme.selectedLineIdx].offsetY - 40, 400, 50);
    } else if (gMeme.selectedLineIdx === 1) {
        gMeme.selectedLineIdx = 2;
        drawImg(gCurrImg);
        draw();
        gCtx.strokeRect(20, gMeme.lines[gMeme.selectedLineIdx].offsetY - 40, 400, 50);
    } else {
        gMeme.selectedLineIdx = 0
        drawImg(gCurrImg);
        draw();
        gCtx.strokeRect(20, gMeme.lines[gMeme.selectedLineIdx].offsetY - 40, 400, 50)
    };
}

function toggleMenu() {
    var elMenu = document.querySelector('.menu');
    elMenu.classList.toggle('open');
}