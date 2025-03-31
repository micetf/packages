# Domaine Data

Ce package centralise toutes les données descriptives des applications du domaine. Il permet une gestion unifiée des informations qui peuvent être partagées entre toutes les applications.

## Installation

### Dans le monorepo

Si vous travaillez dans le monorepo, les dépendances sont déjà gérées par les workspaces npm.

### Dans un projet externe

Si vous souhaitez utiliser ces données dans un projet externe, vous pouvez les installer via npm :

```bash
# Si vous avez publié le package sur npm :
npm install @domaine/data

# Si vous utilisez un lien local :
npm install file:../path/to/packages/data
```

## Utilisation

### Accès aux applications

```javascript
import {
    applications,
    getApplicationById,
    getApplicationsByDomain,
} from "@domaine/data";

// Récupérer toutes les applications
console.log(applications);

// Récupérer une application par son ID
const fractions = getApplicationById("fractions");
console.log(fractions);

// Récupérer les applications d'un domaine spécifique
const mathsApps = getApplicationsByDomain("maths");
console.log(mathsApps);
```

### Accès aux domaines

```javascript
import { domaines, getDomaineById } from "@domaine/data";

// Récupérer tous les domaines
console.log(domaines);

// Récupérer un domaine par son ID
const maths = getDomaineById("maths");
console.log(maths);
```

### Fonctions utilitaires

```javascript
import { getFullThumbnailPath, filterToolsBySearchTerm } from "@domaine/data";

// Obtenir le chemin complet d'une miniature
const thumbnailPath = getFullThumbnailPath("appli1.jpg");
console.log(thumbnailPath);

// Filtrer les outils par terme de recherche
const filteredTools = filterToolsBySearchTerm(applications, "fraction");
console.log(filteredTools);
```

### Constantes

```javascript
import { VERSION, LAST_UPDATE, PAYPAL_ID } from "@domaine/data";

console.log(`Version des données: ${VERSION}`);
console.log(`Dernière mise à jour: ${LAST_UPDATE}`);
console.log(`ID PayPal: ${PAYPAL_ID}`);
```

## Mise à jour des données

Pour ajouter ou mettre à jour des applications ou des domaines, modifiez les fichiers correspondants dans le dossier `src/`. Ensuite, mettez à jour la version dans `src/constants.js`.

## Compatibilité avec le code existant

Ce package maintient les fonctions `outils` et `amis` pour la compatibilité avec le code existant. Vous pouvez les utiliser de la même manière qu'auparavant :

```javascript
import { outils, amis } from "@domaine/data";

// Récupérer les outils d'un domaine
const mathsOutils = outils("maths");
console.log(mathsOutils);

// Récupérer les sites amis
console.log(amis);
```

## Structure des données

### Application

```javascript
{
  id: "appli1",              // Identifiant unique
  title: "Application 1",    // Titre
  description: "Description de l'application 1", // Description
  url: "/appli1/",           // URL relative ou absolue
  thumbnail: "appli1.jpg",   // Nom du fichier miniature
  keywords: ["maths", "geometrie", "cm1", "cm2"], // Mots-clés/domaines
  isNew: false,              // Indique si l'application est nouvelle
  lastUpdated: "2024-01-15", // Date de dernière mise à jour
  version: "1.2.0"           // Version de l'application
}
```

### Domaine

```javascript
{
  name: "maths",             // Identifiant unique
  label: "Mathématiques",    // Libellé à afficher
  href: "#maths",            // Lien pour la navigation
  icon: "calculator"         // Nom de l'icône associée
}
```
