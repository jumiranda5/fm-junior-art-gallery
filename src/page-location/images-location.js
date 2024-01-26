'use-strict';

import { createPicture } from '../utils/img-utils';

// mobile
import Map from '../assets/images/mobile/image-map.png';
import Map_2x from '../assets/images/mobile/image-map@2x.png';

// tablet
import Map_tablet from '../assets/images/tablet/image-map.png';
import Map_tablet_2x from '../assets/images/tablet/image-map@2x.png';

// desktop
import Map_desk from '../assets/images/desktop/image-map.png';
import Map_desk_2x from '../assets/images/desktop/image-map@2x.png';

const map = {
    mob: Map,
    mob2x: Map_2x,
    tablet: Map_tablet,
    tablet2x: Map_tablet_2x,
    desk: Map_desk,
    desk2x: Map_desk_2x
};

// Set pictures
createPicture('map-img-container', map, '');