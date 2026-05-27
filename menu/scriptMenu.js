const positionContent = document.getElementById('menu-position-content');
const positionContent2 = document.getElementById('menu-position-content-2');
const positionContent3 = document.getElementById('menu-position-content-3');
const contentButton = document.getElementById('content-button');
const content2Button = document.getElementById('content-2-button');
const content3Button = document.getElementById('content-3-button');

function contentOpen(){
    positionContent.style.display = 'flex';
    positionContent2.style.display = 'none';
    positionContent3.style.display = 'none';
    contentButton.style.backgroundColor = 'var(--base-white)';
    contentButton.style.color = 'var(--black-3)';
    content2Button.style.backgroundColor = 'transparent';
    content2Button.style.color = 'var(--base-white)';
    content3Button.style.backgroundColor = 'transparent';
    content3Button.style.color = 'var(--base-white)';
}

function content2Open(){
    positionContent.style.display = 'none';
    positionContent2.style.display = 'flex';
    positionContent3.style.display = 'none';
    contentButton.style.backgroundColor = 'transparent';
    contentButton.style.color = 'var(--base-white)';
    content2Button.style.backgroundColor = 'var(--base-white)';
    content2Button.style.color = 'var(--black-3)';
    content3Button.style.backgroundColor = 'transparent';
    content3Button.style.color = 'var(--base-white)';
}

function content3Open(){
    positionContent.style.display = 'none';
    positionContent2.style.display = 'none';
    positionContent3.style.display = 'flex';
    contentButton.style.backgroundColor = 'transparent';
    contentButton.style.color = 'var(--base-white)';
    content2Button.style.backgroundColor = 'transparent';
    content2Button.style.color = 'var(--base-white)';
    content3Button.style.backgroundColor = 'var(--base-white)';
    content3Button.style.color = 'var(--black-3)';
}

contentButton.onclick = contentOpen;
content2Button.onclick = content2Open;
content3Button.onclick = content3Open;