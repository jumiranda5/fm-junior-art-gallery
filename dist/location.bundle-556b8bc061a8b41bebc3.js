/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/utils/img-utils.js
'use-strict';

// Create picture tag and append to lazy container
const createPicture = (containerId, imgObj, altText) => {
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

const setObserver = () => {
  /* eslint-disable no-console*/

  const options = {
    root: null,
    // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1
  };
  const lazy = document.querySelectorAll(".lazy-img");
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const div = entry.target;
        const pic = div.firstElementChild;
        const img = pic.lastElementChild;

        // Replace the placeholder with the actual image source
        pic.childNodes.forEach(element => {
          const src = element.dataset.src;
          if (element.tagName === "SOURCE") element.srcset = src;else element.src = src;
        });

        // remove blur after the img is loaded
        if (img.complete) {
          div.classList.add("loaded");
        } else {
          img.addEventListener("load", () => div.classList.add("loaded"));
        }

        // Stop observing the image
        observer.unobserve(div);
      }
    });
  };
  const observer = new IntersectionObserver(handleIntersection, options);
  lazy.forEach(div => {
    observer.observe(div);
  });
};
;// CONCATENATED MODULE: ./src/assets/images/icon-arrow-left.svg
const icon_arrow_left_namespaceObject = __webpack_require__.p + "images/icon-arrow-left-c674d53cbd0fd2833649.svg";
;// CONCATENATED MODULE: ./src/assets/images/logo-dark.svg
const logo_dark_namespaceObject = __webpack_require__.p + "images/logo-dark-1cee720a4188b5bf7816.svg";
;// CONCATENATED MODULE: ./src/assets/images/mobile/image-map.png
const image_map_namespaceObject = __webpack_require__.p + "images/image-map-5bc228ba5ba1250ac1cd.png";
;// CONCATENATED MODULE: ./src/assets/images/mobile/image-map@2x.png
const image_map_2x_namespaceObject = __webpack_require__.p + "images/image-map@2x-fdee1a036b21b0244926.png";
;// CONCATENATED MODULE: ./src/assets/images/tablet/image-map.png
const tablet_image_map_namespaceObject = __webpack_require__.p + "images/image-map-cbf0671c8a7988006f1a.png";
;// CONCATENATED MODULE: ./src/assets/images/tablet/image-map@2x.png
const tablet_image_map_2x_namespaceObject = __webpack_require__.p + "images/image-map@2x-f53d54a5f330309b3eaf.png";
;// CONCATENATED MODULE: ./src/assets/images/desktop/image-map.png
const desktop_image_map_namespaceObject = __webpack_require__.p + "images/image-map-7b4a26caa14f67f7b42e.png";
;// CONCATENATED MODULE: ./src/assets/images/desktop/image-map@2x.png
const desktop_image_map_2x_namespaceObject = __webpack_require__.p + "images/image-map@2x-a2eb70122fd614b5f2f7.png";
;// CONCATENATED MODULE: ./src/assets/images/tiny/tn-image-map.png
const tn_image_map_namespaceObject = __webpack_require__.p + "images/tn-image-map-1210c9efde7b872267ed.png";
;// CONCATENATED MODULE: ./src/page-location/images-location.js
'use-strict';



// svg


document.getElementById('link-arrow').src = icon_arrow_left_namespaceObject;
document.getElementById('footer-logo').src = logo_dark_namespaceObject;

// mobile



// tablet



// desktop



// tiny


// Create objects with images variations

const map = {
  mob: image_map_namespaceObject,
  mob2x: image_map_2x_namespaceObject,
  tablet: tablet_image_map_namespaceObject,
  tablet2x: tablet_image_map_2x_namespaceObject,
  desk: desktop_image_map_namespaceObject,
  desk2x: desktop_image_map_2x_namespaceObject,
  tn: tn_image_map_namespaceObject
};

// Set pictures
createPicture('map-img-container', map, '');

// Init observer
setObserver();
;// CONCATENATED MODULE: ./src/page-location/main-location.js
'use-strict';




/******/ })()
;
//# sourceMappingURL=location.bundle-556b8bc061a8b41bebc3.js.map