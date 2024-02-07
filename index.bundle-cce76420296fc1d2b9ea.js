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
;// CONCATENATED MODULE: ./src/assets/images/icon-arrow-right.svg
const icon_arrow_right_namespaceObject = __webpack_require__.p + "images/icon-arrow-right-a24cfbb84a44181bc4a7.svg";
;// CONCATENATED MODULE: ./src/assets/images/logo-light.svg
const logo_light_namespaceObject = __webpack_require__.p + "images/logo-light-31a7aa1fa294df64df01.svg";
;// CONCATENATED MODULE: ./src/assets/images/mobile/image-grid-1.jpg
const image_grid_1_namespaceObject = __webpack_require__.p + "images/image-grid-1-f2286f46982a7f4bb621.jpg";
;// CONCATENATED MODULE: ./src/assets/images/mobile/image-grid-1@2x.jpg
const image_grid_1_2x_namespaceObject = __webpack_require__.p + "images/image-grid-1@2x-80ca475ce5342b4ff5fe.jpg";
;// CONCATENATED MODULE: ./src/assets/images/mobile/image-grid-2.jpg
const image_grid_2_namespaceObject = __webpack_require__.p + "images/image-grid-2-62f3493eb974207c4168.jpg";
;// CONCATENATED MODULE: ./src/assets/images/mobile/image-grid-2@2x.jpg
const image_grid_2_2x_namespaceObject = __webpack_require__.p + "images/image-grid-2@2x-49d64d4d20f99d611191.jpg";
;// CONCATENATED MODULE: ./src/assets/images/mobile/image-grid-3.jpg
const image_grid_3_namespaceObject = __webpack_require__.p + "images/image-grid-3-df2fad5e8a83e41547f0.jpg";
;// CONCATENATED MODULE: ./src/assets/images/mobile/image-grid-3@2x.jpg
const image_grid_3_2x_namespaceObject = __webpack_require__.p + "images/image-grid-3@2x-03a24f07729045c9a478.jpg";
;// CONCATENATED MODULE: ./src/assets/images/mobile/image-hero.jpg
const image_hero_namespaceObject = __webpack_require__.p + "images/image-hero-4d9b483d8fdea021a845.jpg";
;// CONCATENATED MODULE: ./src/assets/images/mobile/image-hero@2x.jpg
const image_hero_2x_namespaceObject = __webpack_require__.p + "images/image-hero@2x-a89f72916333936e51fd.jpg";
;// CONCATENATED MODULE: ./src/assets/images/tablet/image-grid-1.jpg
const tablet_image_grid_1_namespaceObject = __webpack_require__.p + "images/image-grid-1-d7f6493edfa72737d6a4.jpg";
;// CONCATENATED MODULE: ./src/assets/images/tablet/image-grid-1@2x.jpg
const tablet_image_grid_1_2x_namespaceObject = __webpack_require__.p + "images/image-grid-1@2x-e50c0be3df58c4470ce1.jpg";
;// CONCATENATED MODULE: ./src/assets/images/tablet/image-grid-2.jpg
const tablet_image_grid_2_namespaceObject = __webpack_require__.p + "images/image-grid-2-77460e28f1d5467e3945.jpg";
;// CONCATENATED MODULE: ./src/assets/images/tablet/image-grid-2@2x.jpg
const tablet_image_grid_2_2x_namespaceObject = __webpack_require__.p + "images/image-grid-2@2x-25521e368b61859dfaad.jpg";
;// CONCATENATED MODULE: ./src/assets/images/tablet/image-grid-3.jpg
const tablet_image_grid_3_namespaceObject = __webpack_require__.p + "images/image-grid-3-fcbc79732f360f810e3d.jpg";
;// CONCATENATED MODULE: ./src/assets/images/tablet/image-grid-3@2x.jpg
const tablet_image_grid_3_2x_namespaceObject = __webpack_require__.p + "images/image-grid-3@2x-7467ce494a533300423c.jpg";
;// CONCATENATED MODULE: ./src/assets/images/tablet/image-hero.jpg
const tablet_image_hero_namespaceObject = __webpack_require__.p + "images/image-hero-ba3c6f1d14351beba284.jpg";
;// CONCATENATED MODULE: ./src/assets/images/tablet/image-hero@2x.jpg
const tablet_image_hero_2x_namespaceObject = __webpack_require__.p + "images/image-hero@2x-7382198c7adfaa1fd6fc.jpg";
;// CONCATENATED MODULE: ./src/assets/images/desktop/image-grid-1.jpg
const desktop_image_grid_1_namespaceObject = __webpack_require__.p + "images/image-grid-1-77f8062808a16f06518f.jpg";
;// CONCATENATED MODULE: ./src/assets/images/desktop/image-grid-1@2x.jpg
const desktop_image_grid_1_2x_namespaceObject = __webpack_require__.p + "images/image-grid-1@2x-92ba29ee61c4166ae4c6.jpg";
;// CONCATENATED MODULE: ./src/assets/images/desktop/image-grid-2.jpg
const desktop_image_grid_2_namespaceObject = __webpack_require__.p + "images/image-grid-2-180281b5d4e254931ea4.jpg";
;// CONCATENATED MODULE: ./src/assets/images/desktop/image-grid-2@2x.jpg
const desktop_image_grid_2_2x_namespaceObject = __webpack_require__.p + "images/image-grid-2@2x-f9d8b192e2a4b47b3b92.jpg";
;// CONCATENATED MODULE: ./src/assets/images/desktop/image-grid-3.jpg
const desktop_image_grid_3_namespaceObject = __webpack_require__.p + "images/image-grid-3-6550062d2e70fbba9a9b.jpg";
;// CONCATENATED MODULE: ./src/assets/images/desktop/image-grid-3@2x.jpg
const desktop_image_grid_3_2x_namespaceObject = __webpack_require__.p + "images/image-grid-3@2x-cba3400c9daaf83017c1.jpg";
;// CONCATENATED MODULE: ./src/assets/images/desktop/image-hero.jpg
const desktop_image_hero_namespaceObject = __webpack_require__.p + "images/image-hero-40346846d4c79300636b.jpg";
;// CONCATENATED MODULE: ./src/assets/images/desktop/image-hero@2x.jpg
const desktop_image_hero_2x_namespaceObject = __webpack_require__.p + "images/image-hero@2x-057e377c1530dc6b5498.jpg";
;// CONCATENATED MODULE: ./src/assets/images/tiny/tn-image-grid-1.jpg
const tn_image_grid_1_namespaceObject = __webpack_require__.p + "images/tn-image-grid-1-c77cea579473017a1124.jpg";
;// CONCATENATED MODULE: ./src/assets/images/tiny/tn-image-grid-2.jpg
const tn_image_grid_2_namespaceObject = __webpack_require__.p + "images/tn-image-grid-2-25397df6537402ff4512.jpg";
;// CONCATENATED MODULE: ./src/assets/images/tiny/tn-image-grid-3.jpg
const tn_image_grid_3_namespaceObject = __webpack_require__.p + "images/tn-image-grid-3-59e18b8e94f54c47573c.jpg";
;// CONCATENATED MODULE: ./src/assets/images/tiny/tn-image-hero.jpg
const tn_image_hero_namespaceObject = __webpack_require__.p + "images/tn-image-hero-172e569b8e863d646391.jpg";
;// CONCATENATED MODULE: ./src/page-home/images-home.js
'use-strict';



// svg


document.getElementById('link-arrow').src = icon_arrow_right_namespaceObject;
document.getElementById('footer-logo').src = logo_light_namespaceObject;

// mobile









// tablet









// desktop









// tiny





// Create objects with images variations

const img1 = {
  mob: image_grid_1_namespaceObject,
  mob2x: image_grid_1_2x_namespaceObject,
  tablet: tablet_image_grid_1_namespaceObject,
  tablet2x: tablet_image_grid_1_2x_namespaceObject,
  desk: desktop_image_grid_1_namespaceObject,
  desk2x: desktop_image_grid_1_2x_namespaceObject,
  tn: tn_image_grid_1_namespaceObject
};
const img2 = {
  mob: image_grid_2_namespaceObject,
  mob2x: image_grid_2_2x_namespaceObject,
  tablet: tablet_image_grid_2_namespaceObject,
  tablet2x: tablet_image_grid_2_2x_namespaceObject,
  desk: desktop_image_grid_2_namespaceObject,
  desk2x: desktop_image_grid_2_2x_namespaceObject,
  tn: tn_image_grid_2_namespaceObject
};
const img3 = {
  mob: image_grid_3_namespaceObject,
  mob2x: image_grid_3_2x_namespaceObject,
  tablet: tablet_image_grid_3_namespaceObject,
  tablet2x: tablet_image_grid_3_2x_namespaceObject,
  desk: desktop_image_grid_3_namespaceObject,
  desk2x: desktop_image_grid_3_2x_namespaceObject,
  tn: tn_image_grid_3_namespaceObject
};
const hero = {
  mob: image_hero_namespaceObject,
  mob2x: image_hero_2x_namespaceObject,
  tablet: tablet_image_hero_namespaceObject,
  tablet2x: tablet_image_hero_2x_namespaceObject,
  desk: desktop_image_hero_namespaceObject,
  desk2x: desktop_image_hero_2x_namespaceObject,
  tn: tn_image_hero_namespaceObject
};

// Set pictures
createPicture('hero-img-container', hero, '');
createPicture('activities-img-container', img1, '');
createPicture('visit-img1-container', img2, '');
createPicture('visit-img2-container', img3, '');

// Init observer
setObserver();
;// CONCATENATED MODULE: ./src/page-home/main-home.js
'use-strict';




/******/ })()
;
//# sourceMappingURL=index.bundle-cce76420296fc1d2b9ea.js.map