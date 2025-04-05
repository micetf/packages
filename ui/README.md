# @micetf/ui

Bibliothèque de composants UI réutilisables pour les applications MiCetF, construite avec React et Tailwind CSS.

## Installation

```bash
# Avec npm
npm install @micetf/ui

# Avec pnpm
pnpm add @micetf/ui

# Avec yarn
yarn add @micetf/ui
```

## Fonctionnalités

- Composants React optimisés pour l'écosystème MiCetF
- Style cohérent avec Tailwind CSS
- Accessibilité prise en compte
- Composants adaptés aux besoins spécifiques des applications éducatives

## Composants disponibles

### Navbar

Barre de navigation avec fil d'Ariane pour une navigation cohérente entre les applications.

```jsx
import { Navbar } from "@micetf/ui";
import "@micetf/ui/index.css"; // Important: importez les styles

function App() {
    return (
        <div>
            <Navbar
                breadcrumb={["MiCetF", "mathematiques", "fractions"]}
                subtitle="Exercices"
                showHelp={true}
                onHelpClick={() => setShowHelp(true)}
            />
            {/* Contenu de votre application */}
        </div>
    );
}
```

#### Props

| Prop           | Type         | Default                 | Description                                                    |
| -------------- | ------------ | ----------------------- | -------------------------------------------------------------- |
| `breadcrumb`   | `string[]`   | (obligatoire)           | Tableau représentant le fil d'Ariane                           |
| `subtitle`     | `string`     | `undefined`             | Sous-titre à afficher après le dernier élément du fil d'Ariane |
| `showHelp`     | `boolean`    | `false`                 | Affiche le bouton d'aide si `true`                             |
| `onHelpClick`  | `() => void` | `undefined`             | Fonction appelée au clic sur le bouton d'aide                  |
| `showSearch`   | `boolean`    | `true`                  | Affiche le bouton de recherche si `true`                       |
| `baseUrl`      | `string`     | `"https://micetf.fr"`   | URL de base du site                                            |
| `paypalId`     | `string`     | `"Q2XYVFP4EEX2J"`       | ID PayPal pour le bouton de don                                |
| `contactEmail` | `string`     | `"webmaster@micetf.fr"` | Email de contact                                               |

### Icon

Composant pour afficher des icônes cohérentes dans toutes les applications.

```jsx
import { Icon, ICONS } from "@micetf/ui";
import "@micetf/ui/index.css"; // Important: importez les styles

function MyComponent() {
    return (
        <button className="bg-blue-500 p-2 rounded">
            <Icon name={ICONS.SEARCH} className="text-white" />
        </button>
    );
}
```

#### Props

| Prop        | Type     | Default       | Description                                      |
| ----------- | -------- | ------------- | ------------------------------------------------ |
| `name`      | `string` | (obligatoire) | Nom de l'icône (utiliser les constantes `ICONS`) |
| `className` | `string` | `""`          | Classes CSS additionnelles                       |
| `size`      | `string` | `"5"`         | Taille de l'icône (en unités Tailwind)           |

#### Icônes disponibles

```jsx
// Importez et utilisez ainsi
import { ICONS } from "@micetf/ui";

// Icônes disponibles
ICONS.CHEVRON_RIGHT; // Flèche vers la droite
ICONS.SEARCH; // Loupe de recherche
ICONS.HEART; // Cœur
ICONS.ENVELOPE; // Enveloppe (email)
ICONS.QUESTION; // Point d'interrogation
ICONS.HOME; // Maison
ICONS.FRACTION; // Fraction
```

## Intégration avec vos projets

### Configuration de Tailwind CSS

Pour utiliser cette bibliothèque avec Tailwind CSS dans votre projet, vous devez ajouter les chemins des composants dans votre configuration Tailwind :

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        // Ajoutez cette ligne pour scanner les composants de @micetf/ui
        "./node_modules/@micetf/ui/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // Vous pouvez étendre les couleurs pour correspondre à @micetf/ui
            colors: {
                primary: {
                    50: "#f0f9ff",
                    100: "#e0f2fe",
                    200: "#bae6fd",
                    300: "#7dd3fc",
                    400: "#38bdf8",
                    500: "#0ea5e9",
                    600: "#0284c7",
                    700: "#0369a1",
                    800: "#075985",
                    900: "#0c4a6e",
                    950: "#082f49",
                },
            },
        },
    },
    plugins: [],
};
```

### Import des styles

Pour que les composants s'affichent correctement, n'oubliez pas d'importer les styles CSS:

```jsx
// Dans votre fichier main.jsx ou index.jsx
import "@micetf/ui/index.css";
import "./index.css"; // Vos propres styles après pour pouvoir les surcharger
```

### Configuration de Vite

Si vous utilisez Vite, assurez-vous d'avoir la configuration minimale suivante :

```js
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
});
```

### Dépendances requises

Cette bibliothèque suppose que votre projet possède les dépendances suivantes :

```
react >= 18.2.0
react-dom >= 18.2.0
```

## Personnalisation des styles

Vous pouvez personnaliser l'apparence des composants de deux façons :

### 1. Utilisation des props `className`

La plupart des composants acceptent une prop `className` qui permet d'ajouter des classes Tailwind :

```jsx
<Icon name={ICONS.SEARCH} className="text-red-500 hover:text-red-700" />
```

### 2. Modification du thème Tailwind

Vous pouvez étendre le thème Tailwind dans votre application pour modifier les couleurs primaires et autres variables :

```js
// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            colors: {
                primary: {
                    // Les composants @micetf/ui utiliseront ces couleurs
                    600: "#0284c7", // Couleur principale
                    700: "#0369a1", // Couleur hover
                },
            },
        },
    },
};
```

## Utilisation avancée

### Workspace monorepo (pnpm, Yarn, npm)

Dans un monorepo, vous pouvez référencer le package localement :

```json
// package.json
{
    "dependencies": {
        "@micetf/ui": "workspace:*"
    }
}
```

### Utilisation avec TypeScript

Les types sont inclus dans le package. Pour TypeScript, aucune configuration supplémentaire n'est nécessaire :

```tsx
import { Navbar, Icon, ICONS } from "@micetf/ui";

// Les types sont automatiquement disponibles
const MyComponent: React.FC = () => {
    return (
        <div>
            <Navbar breadcrumb={["MiCetF", "App"]} />
            <Icon name={ICONS.SEARCH} size="6" />
        </div>
    );
};
```

## Développement

### Prérequis

- Node.js ≥ 18
- pnpm ≥ 8 (recommandé) ou npm/yarn

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

## Contribuer

1. Créez une branche pour votre fonctionnalité (`git checkout -b feature/ma-fonctionnalite`)
2. Committez vos changements (`git commit -m 'feat: ajout de ma fonctionnalité'`)
3. Poussez vers la branche (`git push origin feature/ma-fonctionnalite`)
4. Ouvrez une Pull Request

## Structure du projet

```
ui/
├── dist/               # Fichiers compilés
├── src/
│   ├── components/     # Composants React
│   │   ├── Icon/       # Composant Icon
│   │   ├── Navbar/     # Composant Navbar
│   │   └── ...
│   ├── styles/         # Styles globaux
│   │   └── global.css  # Styles Tailwind
│   └── index.js        # Point d'entrée
├── package.json
├── tailwind.config.js  # Config Tailwind
└── vite.config.js      # Config Vite
```

## Licence

MIT
