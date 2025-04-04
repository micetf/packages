# @micetf/data

Package centralisant toutes les données descriptives des applications du domaine MiCetF. Il permet une gestion unifiée des informations partagées entre applications.

## Installation

```bash
# Avec npm
npm install @micetf/data

# Avec pnpm
pnpm add @micetf/data

# Avec yarn
yarn add @micetf/data
```

## Contenu du package

Ce package fournit:

- Catalogue des applications MiCetF avec métadonnées
- Liste des domaines thématiques
- Constantes partagées (version, URLs, contacts)
- Utilitaires pour la recherche et le filtrage
- Gestion des miniatures

## API

### Applications

```javascript
import {
    applications,
    getApplicationById,
    getApplicationsByDomain,
} from "@micetf/data";

// Récupérer toutes les applications
console.log(applications);

// Récupérer une application par son ID
const fractions = getApplicationById("fractions");
console.log(fractions);

// Récupérer les applications d'un domaine spécifique
const mathsApps = getApplicationsByDomain("maths");
console.log(mathsApps);
```

#### Structure d'une application

```javascript
{
  id: "fractions",              // Identifiant unique
  title: "Fractions",           // Titre
  description: "Application web permettant...", // Description
  url: "Fractions",             // URL relative ou absolue
  thumbnail: "fractions.png",   // Nom du fichier miniature
  keywords: ["maths", "numération", "fractions"], // Mots-clés/domaines
}
```

### Domaines

```javascript
import { domaines, getDomaineById, getAllDomaines } from "@micetf/data";

// Récupérer tous les domaines
console.log(domaines);
// Alternative
console.log(getAllDomaines());

// Récupérer un domaine par son ID
const maths = getDomaineById("maths");
console.log(maths);
```

#### Structure d'un domaine

```javascript
{
  name: "maths",             // Identifiant unique
  label: "Mathématiques",    // Libellé à afficher
  href: "#maths",            // Lien pour la navigation
  icon: "calculator"         // Nom de l'icône associée
}
```

### Miniatures et images

```javascript
import { getThumbnailUrl, thumbnailExists } from "@micetf/data";

// Obtenir l'URL d'une miniature
const thumbnailUrl = getThumbnailUrl("fractions.png");
console.log(thumbnailUrl);

// Vérifier si une miniature existe
const exists = thumbnailExists("fractions.png");
console.log(exists);
```

### Utilitaires

```javascript
import { filterToolsBySearchTerm, formatDate } from "@micetf/data";

// Filtrer les outils par terme de recherche
const filteredTools = filterToolsBySearchTerm(applications, "fraction");
console.log(filteredTools);

// Formater une date
console.log(formatDate("2024-03-31")); // Affiche "31/03/2024"
```

### Constantes

```javascript
import {
    VERSION,
    LAST_UPDATE,
    PAYPAL_ID,
    CONTACT_EMAIL,
    BASE_URL,
} from "@micetf/data";

console.log(`Version des données: ${VERSION}`);
console.log(`Dernière mise à jour: ${LAST_UPDATE}`);
console.log(`ID PayPal: ${PAYPAL_ID}`);
console.log(`Email de contact: ${CONTACT_EMAIL}`);
console.log(`URL de base: ${BASE_URL}`);
```

## Compatibilité avec le code existant

Ce package maintient certaines fonctions pour la compatibilité avec le code existant :

```javascript
import { outils, amis } from "@micetf/data";
import { getFullThumbnailPath, getThumbnailPath } from "@micetf/data";

// Récupérer les outils d'un domaine (alias de getApplicationsByDomain)
const mathsOutils = outils("maths");
console.log(mathsOutils);

// Récupérer les sites amis
console.log(amis);

// Utiliser les anciennes fonctions pour les miniatures
// (ces fonctions sont des alias de getThumbnailUrl)
const path1 = getFullThumbnailPath("fractions.png");
const path2 = getThumbnailPath("fractions.png");
```

## Intégration avec Vite

Ce package utilise `import.meta.glob` de Vite pour gérer les miniatures. Si vous n'utilisez pas Vite, vous pouvez toujours accéder aux images via les chemins renvoyés par `getThumbnailUrl()` mais vous devrez peut-être adapter la gestion des images.

## Développement

### Prérequis

- Node.js ≥ 18
- pnpm ≥ 8

### Installation des dépendances

```bash
pnpm install
```

### Build

```bash
pnpm build
```

### Développement en mode watch

```bash
pnpm dev
```

## Mise à jour des données

Pour ajouter ou mettre à jour des applications ou des domaines, modifiez les fichiers correspondants dans le dossier `src/`. N'oubliez pas d'incrémenter la version dans `src/constants.js` et de mettre à jour `LAST_UPDATE`.

## Licence

MIT
