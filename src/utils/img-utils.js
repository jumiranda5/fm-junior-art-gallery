'use-strict';

// Create picture tag and append to lazy container

export const createPicture = (containerId, imgObj, altText) => {

    // get lazy container from the dom
    const container = document.getElementById(containerId);

    // create picture tag
    const picture = document.createElement('PICTURE');

    // create picture sources
    const srcDesk = document.createElement('SOURCE');
    const srcTablet = document.createElement('SOURCE');
    const srcMob = document.createElement('SOURCE');
    const img = document.createElement('IMG');

    // Desktop
    srcDesk.media = "(min-width: 1200px)";
    srcDesk.srcset = `${imgObj.desk} 1x, ${imgObj.desk2x} 2x`;

    // Tablet
    srcTablet.media = "(min-width: 768px)";
    srcTablet.srcset = `${imgObj.tablet} 1x, ${imgObj.tablet2x} 2x`;

    // Mobile
    srcMob.srcset = `${imgObj.mob} 1x, ${imgObj.mob2x} 2x`;

    // Default
    img.src = imgObj.mob;
    img.alt = altText;

    // Append
    picture.appendChild(srcDesk);
    picture.appendChild(srcTablet);
    picture.appendChild(srcMob);
    picture.appendChild(img);
    container.appendChild(picture);
};