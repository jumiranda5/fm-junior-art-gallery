'use-strict';

// Create picture tag and append to lazy container

export const createPicture = (containerId, imgObj, altText) => {

    // get lazy container from the dom and add background
    const container = document.getElementById(containerId);
    container.style.backgroundImage = `url(${imgObj.tn})`;

    // create picture tag
    const picture = document.createElement('PICTURE');

    // create picture sources
    const srcDesk = document.createElement('SOURCE');
    const srcTablet = document.createElement('SOURCE');
    const srcMob = document.createElement('SOURCE');
    const img = document.createElement('IMG');

    // Desktop
    srcDesk.media = "(min-width: 1200px)";
    srcDesk.dataset.src = `${imgObj.desk} 1x, ${imgObj.desk2x} 2x`;

    // Tablet
    srcTablet.media = "(min-width: 768px)";
    srcTablet.dataset.src = `${imgObj.tablet} 1x, ${imgObj.tablet2x} 2x`;

    // Mobile
    srcMob.dataset.src = `${imgObj.mob} 1x, ${imgObj.mob2x} 2x`;

    // Default
    img.dataset.src = imgObj.mob;
    img.alt = altText;

    // Append
    picture.appendChild(srcDesk);
    picture.appendChild(srcTablet);
    picture.appendChild(srcMob);
    picture.appendChild(img);
    container.appendChild(picture);
};


// Set observer (loading=lazy does not work with imgs added via js)

export const setObserver = () => {

    /* eslint-disable no-console*/

    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const lazy = document.querySelectorAll(".lazy-img");
    
    const handleIntersection = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {

                const div = entry.target;
                const pic = div.firstElementChild;
                const img = pic.lastElementChild;

                // Replace the placeholder with the actual image source
                pic.childNodes.forEach((element) => {
                    const src = element.dataset.src;
                    if (element.tagName === "SOURCE") element.srcset = src;
                    else element.src = src;
                });
                
                // remove blur after the img is loaded
                if (img.complete) {
                    div.classList.add("loaded");
                } 
                else {
                    img.addEventListener("load", () => div.classList.add("loaded"));
                }
    
                // Stop observing the image
                observer.unobserve(div);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    
    lazy.forEach((div) => {
        observer.observe(div);
    });

};