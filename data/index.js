// packages/data/index.js

// Export des données et fonctionnalités
export {
    applications,
    getApplicationById,
    getApplicationsByDomain,
    outils,
    amis,
} from "./src/applications";
export { domaines, getDomaineById, getAllDomaines } from "./src/domaines";
export { THUMBNAIL_PATH, getFullThumbnailPath } from "./src/utils";
export { VERSION, LAST_UPDATE } from "./src/constants";
export { THUMBNAILS_PATH, getThumbnailPath } from "./src/thumbnails";
