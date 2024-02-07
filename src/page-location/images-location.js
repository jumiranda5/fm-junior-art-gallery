'use-strict';

import { createPicture, setObserver } from '../utils/img-utils';

// svg
import ArrowLeft from '../assets/images/icon-arrow-left.svg';
import Logo from '../assets/images/logo-dark.svg';

document.getElementById('link-arrow').src = ArrowLeft;
document.getElementById('footer-logo').src = Logo;

// mobile
import Map from '../assets/images/mobile/image-map.png';
import Map_2x from '../assets/images/mobile/image-map@2x.png';

// tablet
import Map_tablet from '../assets/images/tablet/image-map.png';
import Map_tablet_2x from '../assets/images/tablet/image-map@2x.png';

// desktop
import Map_desk from '../assets/images/desktop/image-map.png';
import Map_desk_2x from '../assets/images/desktop/image-map@2x.png';

// tiny
import map_tn from '../assets/images/tiny/tn-image-map.png';

// Create objects with images variations

const map = {
    mob: Map,
    mob2x: Map_2x,
    tablet: Map_tablet,
    tablet2x: Map_tablet_2x,
    desk: Map_desk,
    desk2x: Map_desk_2x,
    tn: map_tn
};

// Set pictures
createPicture('map-img-container', map, '');

// Init observer
setObserver();