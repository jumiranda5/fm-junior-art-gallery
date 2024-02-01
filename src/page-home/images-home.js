'use-strict';

import { createPicture, setObserver } from '../utils/img-utils';

// svg
import ArrowRight from '../assets/images/icon-arrow-right.svg';
import Logo from '../assets/images/logo-light.svg';

document.getElementById('link-arrow').src = ArrowRight;
document.getElementById('footer-logo').src = Logo;

// mobile
import Img1 from '../assets/images/mobile/image-grid-1.jpg';
import Img1_2x from '../assets/images/mobile/image-grid-1@2x.jpg';
import Img2 from '../assets/images/mobile/image-grid-2.jpg';
import Img2_2x from '../assets/images/mobile/image-grid-2@2x.jpg';
import Img3 from '../assets/images/mobile/image-grid-3.jpg';
import Img3_2x from '../assets/images/mobile/image-grid-3@2x.jpg';
import Hero from '../assets/images/mobile/image-hero.jpg';
import Hero_2x from '../assets/images/mobile/image-hero@2x.jpg';

// tablet
import Img1_tablet from '../assets/images/tablet/image-grid-1.jpg';
import Img1_tablet_2x from '../assets/images/tablet/image-grid-1@2x.jpg';
import Img2_tablet from '../assets/images/tablet/image-grid-2.jpg';
import Img2_tablet_2x from '../assets/images/tablet/image-grid-2@2x.jpg';
import Img3_tablet from '../assets/images/tablet/image-grid-3.jpg';
import Img3_tablet_2x from '../assets/images/tablet/image-grid-3@2x.jpg';
import Hero_tablet from '../assets/images/tablet/image-hero.jpg';
import Hero_tablet_2x from '../assets/images/tablet/image-hero@2x.jpg';

// desktop
import Img1_desk from '../assets/images/desktop/image-grid-1.jpg';
import Img1_desk_2x from '../assets/images/desktop/image-grid-1@2x.jpg';
import Img2_desk from '../assets/images/desktop/image-grid-2.jpg';
import Img2_desk_2x from '../assets/images/desktop/image-grid-2@2x.jpg';
import Img3_desk from '../assets/images/desktop/image-grid-3.jpg';
import Img3_desk_2x from '../assets/images/desktop/image-grid-3@2x.jpg';
import Hero_desk from '../assets/images/desktop/image-hero.jpg';
import Hero_desk_2x from '../assets/images/desktop/image-hero@2x.jpg';

// tiny
import Img1_tn from '../assets/images/tiny/tn-image-grid-1.jpg';
import Img2_tn from '../assets/images/tiny/tn-image-grid-2.jpg';
import Img3_tn from '../assets/images/tiny/tn-image-grid-3.jpg';
import Hero_tn from '../assets/images/tiny/tn-image-hero.jpg';

// Create objects with images variations

const img1 = {
    mob: Img1,
    mob2x: Img1_2x,
    tablet: Img1_tablet,
    tablet2x: Img1_tablet_2x,
    desk: Img1_desk,
    desk2x: Img1_desk_2x,
    tn: Img1_tn
};

const img2 = {
    mob: Img2,
    mob2x: Img2_2x,
    tablet: Img2_tablet,
    tablet2x: Img2_tablet_2x,
    desk: Img2_desk,
    desk2x: Img2_desk_2x,
    tn: Img2_tn
};

const img3 = {
    mob: Img3,
    mob2x: Img3_2x,
    tablet: Img3_tablet,
    tablet2x: Img3_tablet_2x,
    desk: Img3_desk,
    desk2x: Img3_desk_2x,
    tn: Img3_tn
};

const hero = {
    mob: Hero,
    mob2x: Hero_2x,
    tablet: Hero_tablet,
    tablet2x: Hero_tablet_2x,
    desk: Hero_desk,
    desk2x: Hero_desk_2x,
    tn: Hero_tn
};

// Set pictures
createPicture('hero-img-container', hero, '');
createPicture('activities-img-container', img1, '');
createPicture('visit-img1-container', img2, '');
createPicture('visit-img2-container', img3, '');

// Init observer
setObserver();