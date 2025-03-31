/**
 * Liste complète des applications disponibles sur le domaine
 * Structure centralisée pour maintenir toutes les informations
 *
 * @module applications
 */

/**
 * Liste des applications avec leurs métadonnées
 * @type {Object[]}
 */
export const applications = [
    {
        id: "abaque",
        title: "Abaque",
        url: "abaque",
        description:
            "Abaque virtuel permettant de travailler la numération à l'école primaire.",
        thumbnail: "abaque.png",
        keywords: ["abaque", "maths", "mathématique", "numération", "nombre"],
    },
    {
        id: "abataquin",
        title: "Abaques-taquins",
        url: "abataquin",
        description:
            "Jeu interactif dont le but est de déplacer les boules d'un abaque de départ pour obtenir la même disposition que sur un abaque d'arrivée.",
        thumbnail: "abaques-taquins.png",
        keywords: ["abaques-taquins", "maths", "mathématique"],
    },
    {
        id: "acrostiche",
        title: "Acrostiches",
        url: "acrostiche",
        description:
            "Application web permettant de créer des images d'acrostiches.",
        thumbnail: "acrostiche.png",
        keywords: ["acrostiches", "français", "écrit"],
    },
    {
        id: "addigrille",
        title: "Addi-Grilles 2.0",
        url: "addigrille",
        description:
            "Application web permettant de travailler le calcul à l'école primaire en réalisant des Addi-Grilles en ligne.",
        thumbnail: "addigrille.png",
        keywords: ["addi-grilles", "calcul", "maths", "mathématique"],
    },
    {
        id: "addition",
        title: "Additions",
        url: "addition",
        description:
            "Application web permettant de s'exercer au calcul de sommes d'entiers inférieurs à 10.",
        thumbnail: "additions.png",
        keywords: ["additions", "calcul", "maths", "mathématique", "opération"],
    },
    {
        id: "agamographe",
        title: "Agamographe",
        url: "agamographe",
        description:
            "Application web permettant de générer des agamographes. Deux images sont découpées en bandes verticales placées alternativement pour former une image composite. Cette dernière, pliée en accordéon permet de révéler séparément les deux dessins selon l'angle sous lequel on regarde la feuille.",
        thumbnail: "agamographe.png",
        keywords: [
            "agamographe",
            "dessin",
            "divers",
            "générateur",
            "arts",
            "visuels",
            "plastiques",
            "APL",
            "Yaacov Agam",
            "Yaacov Gipshtein",
        ],
    },
    {
        id: "alphabet",
        title: "Alphabet",
        url: "alphabet",
        description:
            "Application web permettant de manipuler les lettres de l'alphabet.",
        thumbnail: "alphabet.png",
        keywords: ["alphabet", "lecture", "français", "écriture"],
    },
    {
        id: "anagrammes",
        title: "Anagrammes",
        url: "anagrammes",
        description:
            "Application web permettant de proposer des anagrammes à partir d'un corpus de mots.",
        thumbnail: "anagrammes.png",
        keywords: ["anagrammes", "lecture", "français", "écriture"],
    },
    {
        id: "angles",
        title: "Angles",
        url: "angles",
        description:
            "Application web permettant de générer des images d'angles.",
        thumbnail: "angles.png",
        keywords: [
            "angles",
            "maths",
            "mathématique",
            "générateur",
            "géométrie",
        ],
    },
    {
        id: "animations",
        title: "Animations",
        url: "animations",
        description: "Bilbliothèques d'animations réalisées en HTML5.",
        thumbnail: "animations.png",
        keywords: ["animations", "français", "récit", "poésie"],
    },
    {
        id: "arborescence",
        title: "Arborescence",
        url: "arborescence",
        description:
            "Application web permettant de générer un dossier contenant une arborescence donnée de dossiers.",
        thumbnail: "arborescence.png",
        keywords: ["arborescence", "informatique", "divers"],
    },
    {
        id: "ardoise",
        title: "Ardoise",
        url: "ardoise",
        description:
            "Application web proposant une ardoise utilisable sur une tablette.",
        thumbnail: "ardoise.png",
        keywords: ["ardoise", "tablette", "dessin", "divers"],
    },
    {
        id: "awarhol",
        title: "Andy Warhol",
        url: "awarhol",
        description:
            "Application web permettant de générer une image à la manière d'Andy Warhol à partir de sa propre image.",
        thumbnail: "awarhol.png",
        keywords: ["awarhol", "warhol", "andy", "arts", "divers"],
    },
    {
        id: "audio-tag",
        title: "Audio Tag",
        url: "audio-tag",
        description:
            "Application web permettant de générer automatiquement le code avec la balise <audio> nécessaire à l'insertion d'une vidéo dans une page html5.",
        thumbnail: "audio-tag.png",
        keywords: [
            "audio",
            "balise",
            "tag",
            "générateur",
            "outil",
            "html5",
            "divers",
        ],
    },
    {
        id: "barres-doigts",
        title: "Barres-doigts",
        url: "barres-doigts",
        description:
            "Application web permettant de manipuler les constellations de doigts barres de Stella Baruk.",
        thumbnail: "barres-doigts.png",
        keywords: [
            "barres-doigts",
            "numération",
            "stella",
            "baruk",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "bataille",
        title: "Bataille",
        url: "bataille",
        description:
            "Application web permettant de générer des jeux de bataille à partir d'une image de son ordinateur.",
        thumbnail: "bataille.png",
        keywords: ["bataille", "générateur", "carte", "divers"],
    },
    {
        id: "blog",
        title: "Blog",
        url: "blog",
        description: "Blog associé au site micetf.fr.",
        thumbnail: "blog.png",
        keywords: ["blog", "pratique", "théorique", "technique", "divers"],
    },
    {
        id: "boulierHTML5",
        title: "Boulier (1)",
        url: "boulierHTML5",
        description:
            "Boulier virtuel permettant de travailler la numération à l'école primaire.",
        thumbnail: "boulierHTML5.png",
        keywords: [
            "boulier",
            "maths",
            "mathématiques",
            "numération",
            "nombre",
            "opérations",
        ],
    },
    {
        id: "boulier",
        title: "Boulier (2)",
        url: "boulier",
        description:
            "Boulier virtuel permettant de travailler la numération à l'école primaire.",
        thumbnail: "boulier.png",
        keywords: [
            "boulier",
            "maths",
            "mathématiques",
            "numération",
            "nombre",
            "opérations",
        ],
    },
    {
        id: "rcn2017",
        title: "Compétences Numériques (Projet mars 2017)",
        url: "rcn2017",
        description:
            "Projet en consultation entre février et avril 2017 : Cadre de référence des compétences numériques.",
        thumbnail: "rcn2017.png",
        keywords: [
            "cadre",
            "référence",
            "divers",
            "compétences",
            "numériques",
            "information",
            "données",
            "communication",
            "collaboration",
            "création",
            "contenu",
            "protection",
            "sécurité",
            "environnement",
        ],
    },
    {
        id: "calculmental",
        title: "Calcul Mental",
        url: "calculmental",
        description:
            "Application web proposant des exercices de calcul mental du CP au CM2. Les élèves peuvent réaliser ces exercices en ligne. Les enseignants peuvent générer et imprimer ces exercices au format pdf.",
        thumbnail: "calculmental.png",
        keywords: [
            "calcul mental",
            "maths",
            "mathématiques",
            "numération",
            "nombre",
            "opérations",
        ],
    },
    {
        id: "cambridge",
        title: "Cambridge (Dégradation de)",
        url: "cambridge",
        description:
            "Application web permettant d'appliquer la dégradation de Cambridge à n'importe quel texte.",
        thumbnail: "cambridge.png",
        keywords: ["cambridge", "dégradation", "divers", "français"],
    },
    {
        id: "cartapoints",
        title: "Cartes à points",
        url: "cartapoints",
        description:
            "Application web permettant de générer des images de cartes à points pour travailler la numération à l'école primaire.",
        thumbnail: "cartapoints.png",
        keywords: [
            "cartes",
            "points",
            "générateur",
            "maths",
            "mathématiques",
            "numération",
            "nombre",
        ],
    },
    {
        id: "alea-cartes",
        title: "Cartes aléatoires",
        url: "alea-cartes",
        description:
            "Application web permettant de préparer des cartes et de gérer un tirage aléatoire interactif.",
        thumbnail: "alea-cartes.png",
        keywords: ["aléatoire", "cartes", "divers", "tirage", "outil"],
    },
    {
        id: "cases4bb",
        title: "cases4bb",
        url: "cases4bb",
        description:
            "Ce générateur permet de construire des cases pour travailler avec un robot Blue-Bot comme ceux proposés par EASITYS. A vérifier, mais cela doit aussi convenir pour le Bee-Bot.",
        thumbnail: "cases4bb.png",
        keywords: [
            "Blue-Bot",
            "cases",
            "robot",
            "maternelle",
            "élémentaire",
            "générateur",
            "easytis",
            "générateur",
        ],
    },
    {
        id: "chateau",
        title: "Château des nombres",
        url: "chateau",
        description:
            "Application web proposant un château des nombres interactif pour travailler la numération à l'école primaire.",
        thumbnail: "chateau.png",
        keywords: [
            "chateau des nombres",
            "maths",
            "mathématiques",
            "numération",
            "nombre",
        ],
    },
    {
        id: "chemins-de-phrases",
        title: "Chemins de phrases",
        url: "chemins-de-phrases",
        description:
            "Jeu interactif dont le but est de retrouver dans un tableau le chemin (multi-directions) qui permet de reconstruire une phrase juste.",
        thumbnail: "chemins-de-phrases.png",
        keywords: ["chemins de phrases", "français", "orthographe"],
    },
    {
        id: "choixpeau",
        title: "Choixpeau magique",
        url: "choixpeau",
        description:
            "Application web permettant de réaliser un tirage aléatoire à partir d'une liste de mots ou d'images.",
        thumbnail: "choixpeau.png",
        keywords: [
            "choixpeau magique",
            "divers",
            "magique",
            "aléatoire",
            "tirage",
        ],
    },
    {
        id: "cibles",
        title: "Cibles (Jeu des)",
        url: "cibles",
        description:
            "Jeu interactif pour travailler la décomposition additive des nombres à l'école primaire.",
        thumbnail: "cibles.png",
        keywords: [
            "cibles",
            "jeu",
            "maths",
            "mathématiques",
            "nombre",
            "numération",
        ],
    },
    {
        id: "classement",
        title: "Classement",
        url: "classement",
        description:
            "Application web permettant de réaliser des activités de tri au vidéo-projecteur et de conserver une trace numérique de ces travaux.",
        thumbnail: "classement.png",
        keywords: [
            "classement",
            "divers",
            "tbi",
            "vidéo-projecteur",
            "tni",
            "outil",
        ],
    },
    {
        id: "clavier",
        title: "Clavier (Les As du)",
        url: "clavier",
        description:
            "Jeu interactif permettant de travailler la maîtrise du clavier à l'école primaire.",
        thumbnail: "clavier.png",
        keywords: ["clavier", "as", "tuic", "divers", "saisie"],
    },
    {
        id: "cologrilles",
        title: "Coloriage sur Quadrillages",
        url: "cologrilles",
        description:
            "Application web proposant de reproduire des coloriages sur des quadrillages.",
        thumbnail: "cologrilles.png",
        keywords: [
            "cologrilles",
            "coloriage",
            "quadrillage",
            "maths",
            "mathématiques",
            "géométrie",
        ],
    },
    {
        id: "cologrillesgenerateur",
        title: "Coloriage sur Quadrillages (Générateur)",
        url: "cologrillesgenerateur",
        description:
            "Application web proposant de créer et d'imprimer des coloriages sur quadrillages.",
        thumbnail: "cologrillesgenerateur.png",
        keywords: [
            "cologrilles",
            "coloriage",
            "quadrillage",
            "générateur",
            "maths",
            "mathématiques",
            "géométrie",
        ],
    },
    {
        id: "complements",
        title: "Compléments à 10, 100 ou 1000",
        url: "complements",
        description:
            "Jeu interactif permettant de s'exercer au calcul des compléments à 10, 100 ou 1000.",
        thumbnail: "complements.png",
        keywords: [
            "compléments",
            "numération",
            "nombres",
            "calcul",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "compter",
        title: "Compter",
        url: "compter",
        description: "Livre des nombres.",
        thumbnail: "compter.png",
        keywords: [
            "compter",
            "numération",
            "nombres",
            "livre des nombres",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "Compteur",
        title: "Compteur",
        url: "Compteur",
        description: "Compteur interactif.",
        thumbnail: "compteur.png",
        keywords: [
            "compteur",
            "numération",
            "nombres",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "concatenator",
        title: "Picture Concatenator",
        url: "concatenator",
        description:
            "Cet outil permet de fusionner des images. L'ajout d'une image peut se faire au-dessus, au-dessous, à gauche ou à droite des précédentes. Les formats d'images acceptés sont le jpg et le png.",
        thumbnail: "concatenator.png",
        keywords: ["image", "fusion", "concaténer", "générateur", "divers"],
    },
    {
        id: "conjugaison",
        title: "Conjugaison (Générateur)",
        url: "conjugaison",
        description: "Générateur d'exercices de conjugaison au format pdf.",
        thumbnail: "conjugaison.png",
        keywords: [
            "conjugaison",
            "français",
            "maîtrise",
            "générateur",
            "verbes",
        ],
    },
    {
        id: "conservecart",
        title: "Conservation des écarts",
        url: "conservecart",
        description:
            "Application interactive permettant de visualiser le principe mathématique de conservation des écarts dans la soustraction. L'élève peut manipuler deux nombres et observer comment l'écart reste identique quand on ajoute ou soustrait la même valeur aux deux termes.",
        thumbnail: "conservecart.png",
        keywords: [
            "conservation",
            "écarts",
            "soustraction",
            "calcul",
            "maths",
            "mathématiques",
            "opérations",
            "ligne numérique",
        ],
    },
    {
        id: "Conversions",
        title: "Conversion (v1)",
        url: "Conversions",
        description:
            "Tableau de conversion (interactif) d'unités de mesure de longueur (m), de masse (g) et de volume (l).",
        thumbnail: "conversions.png",
        keywords: ["conversions", "maths", "unités", "mesures", "grandeur"],
    },
    {
        id: "conversion",
        title: "Conversion (v2)",
        url: "conversion",
        description:
            "Tableau de conversion (interactif) d'unités de mesure de longueur (m), de masse (g) et de volume (l).",
        thumbnail: "conversion.png",
        keywords: ["conversions", "maths", "unités", "mesures", "grandeur"],
    },
    {
        id: "conversion2",
        title: "Conversion (surfaces)",
        url: "conversion2",
        description:
            "Tableau de conversion (interactif) d'unité de mesures de surface (m²).",
        thumbnail: "conversion2.png",
        keywords: [
            "conversions",
            "maths",
            "unités",
            "mesures",
            "grandeur",
            "surfaces",
            "aires",
        ],
    },
    {
        id: "CourseAu21",
        title: "Course au 21",
        url: "CourseAu21",
        description:
            "Jeu interactif permettant de jouer à 2 personnes à la course au 21.",
        thumbnail: "courseau21.png",
        keywords: [
            "logique",
            "maths",
            "problème",
            "algorithme",
            "mathématiques",
            "course au 21",
        ],
    },
    {
        id: "decimaux",
        title: "Décimaux",
        url: "decimaux",
        description:
            "Application web permettant de travailler les écritures et les représentations des nombres décimaux.",
        thumbnail: "decimaux.png",
        keywords: [
            "décimaux",
            "maths",
            "numération",
            "nombres",
            "mathématiques",
            "représentations",
        ],
    },
    {
        id: "Denombrement",
        title: "Dénombrement",
        url: "Denombrement",
        description:
            "Application web permettant de s'exercer au dénombrement de petites quantités.",
        thumbnail: "denombrement.png",
        keywords: [
            "dénombrement",
            "maths",
            "numération",
            "nombres",
            "mathématiques",
        ],
    },
    {
        id: "Didapages",
        title: "Didapages (fusion)",
        url: "Didapages",
        description:
            "Application web (Première Version) permettant la fusion de plusieurs petits livres interactifs créés avec Didapages.",
        thumbnail: "didapages.png",
        keywords: [
            "didapages",
            "livres",
            "numériques",
            "divers",
            "fusion",
            "tuic",
        ],
    },
    {
        id: "divisator",
        title: "Divisator",
        url: "divisator",
        description:
            "Application web permettant de s'exercer à la recherche du quotient et du reste de divisions simples.",
        thumbnail: "divisator.png",
        keywords: [
            "divisator",
            "maths",
            "mathématiques",
            "calcul mental",
            "division",
            "tables",
            "multiplication",
        ],
    },
    {
        id: "Dominos",
        title: "Dominos",
        url: "Dominos",
        description:
            "Application web permettant la génération de jeux de dominos additifs ou multiplicatifs au format pdf.",
        thumbnail: "dominos.png",
        keywords: [
            "dominos",
            "maths",
            "mathématiques",
            "calcul mental",
            "addition",
            "tables",
            "multiplication",
        ],
    },
    {
        id: "dictee",
        title: "Dictées (Je crée mes dictées)",
        url: "dictee",
        description:
            "Application web permettant aux enseignants de créer des dictées.",
        thumbnail: "dictee.png",
        keywords: ["dictées", "orthographe", "français"],
    },
    {
        id: "dicteenombres",
        title: "Dictée de nombres",
        url: "dicteenombres",
        description:
            "Jeu interactif permettant de s'exercer à l'écriture chiffrée de nombres dictés.",
        thumbnail: "dicteenombres.png",
        keywords: [
            "dictées",
            "nombres",
            "numération",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "differences",
        title: "Différences en GS de maternelle",
        url: "differences",
        description:
            "Jeu interactif reprenant l'activité du même nom proposée par D. Valentin pour les GS.",
        thumbnail: "differences.png",
        keywords: [
            "différences",
            "logique",
            "résolution",
            "problèmes",
            "maths",
            "mathématiques",
            "valentin",
        ],
    },
    {
        id: "discrimination",
        title: "Discrimination visuelle",
        url: "discrimination",
        description:
            "Jeu interactif permettant d'exercer sa discrimination visuelle pour améliorer sa vitesse de lecture.",
        thumbnail: "discrimination.png",
        keywords: ["discrimination visuelle", "lecture", "français"],
    },
    {
        id: "eAcrostiches",
        title: "e-Acrostiches",
        url: "eAcrostiches",
        description:
            "Application web permettant de créer des images d'acrostiches.",
        thumbnail: "eacrostiches.png",
        keywords: ["acrostiche", "écrit", "français"],
    },
    {
        id: "eDidaFusion",
        title: "e-Didafusion",
        url: "eDidaFusion",
        description:
            "Application web (Deuxième Version) permettant la fusion de plusieurs petits livres interactifs créés avec Didapages.",
        thumbnail: "edidafusion.png",
        keywords: [
            "didapages",
            "livres",
            "numériques",
            "divers",
            "fusion",
            "tuic",
        ],
    },
    {
        id: "ecrans-ipad",
        title: "Ecrans pour iPad (Générateur)",
        url: "ecrans-ipad",
        description:
            "Générer des fonds d'écrans (écran verrouillé et/ou écran d'accueil) pour identifier les différentes tablettes de la classe.",
        thumbnail: "ecrans-ipad.png",
        keywords: [
            "générateur",
            "écran",
            "divers",
            "fond",
            "ipad",
            "iPad",
            "tablettes",
            "astuce",
        ],
    },
    {
        id: "Embouteillages",
        title: "Embouteillages en GS de maternelle",
        url: "Embouteillages",
        description:
            "Jeu interactif reprenant l'activité du même nom proposée par D. Valentin pour les GS.",
        thumbnail: "embouteillages.png",
        keywords: [
            "embouteillages",
            "logique",
            "résolution",
            "problèmes",
            "maths",
            "mathématiques",
            "valentin",
        ],
    },
    {
        id: "estimer-fraction",
        title: "Estimer une fraction",
        url: "Fractions/estimer",
        description:
            "Outil permettant de mettre en oeuvre une séance collective au cours de laquelle les élèves seront amenés à estimer la valeur d'une fraction représentée à l'aide de disques.",
        thumbnail: "estimer-fraction.png",
        keywords: [
            "fractions",
            "nombre",
            "numération",
            "mathématiques",
            "maths",
            "estimer",
        ],
    },
    {
        id: "estimheure",
        title: "Estim'Heure",
        url: "estimheure",
        description:
            "Cette application permet aux élèves d'entretenir leur capacité à estimer l'heure entière la plus proche d'une heure donnée. ",
        thumbnail: "estimheure.png",
        keywords: [
            "estimation",
            "maths",
            "mathématiques",
            "heure",
            "durée",
            "horaire",
            "duree",
            "grandeurs",
            "mesures",
        ],
    },
    {
        id: "Etiquettes",
        title: "Etiquettes",
        url: "Etiquettes",
        description:
            "Application web permettant, à partir d'une série de mots, de générer des étiquettes au format image archivées un dossier.",
        thumbnail: "etiquettes.png",
        keywords: ["etiquettes", "tuic", "divers", "générateur"],
    },
    {
        id: "eEtiquettes",
        title: "Etiquettes virtuelles",
        url: "eEtiquettes",
        description:
            "Application web permettant, à partir d'une série de mots, de générer des étiquettes au format image archivées un dossier. Cette version plus complexe que la précédente offre cependant plus de fonctionnalités.",
        thumbnail: "etiquettes-virtuelles.png",
        keywords: ["etiquettes", "tuic", "divers", "générateur"],
    },
    {
        id: "ecoute-et-range",
        title: "Ecoute et range",
        url: "ecoute-et-range",
        description:
            "Application web permettant d'entraînement à la compréhension d'histoire. Cette application aurait tout aussi bien s'appeler range et écoute.",
        thumbnail: "ecoute-et-range.png",
        keywords: ["lecture", "compréhension", "français"],
    },
    {
        id: "FaBriCaMo",
        title: "Fa Bri Ca Mo",
        url: "FaBriCaMo",
        description:
            "Prototype d'une application web permettant d'accompagner les élèves dans la découverte de l'encodage des mots au CP.",
        thumbnail: "fabricamo.png",
        keywords: [
            "fabricamo",
            "lecture",
            "syllabes",
            "décodage",
            "encodage",
            "français",
        ],
    },
    {
        id: "FabriqueHistoires",
        title: "FabriqueHistoires",
        url: "FabriqueHistoires",
        description:
            'Application web permettant la création de petits livres interactifs sur le principe de "Ma Petite Fabrique à Histoires" de Bruno Gibert.',
        thumbnail: "fabriquehistoires.png",
        keywords: ["écrit", "histoires", "gibert", "fabrique", "français"],
    },
    {
        id: "FabriquePourquoiParceque",
        title: 'Fabrique de "Pourquoi ? Parce que !"',
        url: "FabriquePourquoiParceque",
        description:
            'Application web permettant la création de petits livres interactifs sur le thème des "Pourquoi ? Parce que ?".',
        thumbnail: "pourquoiparceque.png",
        keywords: [
            "écrit",
            "histoires",
            "gibert",
            "fabrique",
            "français",
            "pourquoi",
            "parce que",
        ],
    },
    {
        id: "Flipflap",
        title: "Flip Flap Fred",
        url: "Flipflap",
        description:
            'Application web permettant d\'utiliser le principe du "flipflap" sur des images.',
        thumbnail: "flipflap.png",
        keywords: ["flipflap", "arts", "divers", "images"],
    },
    {
        id: "fluence",
        title: "Fluence",
        url: "fluence",
        description:
            "Application web permettant de générer ses propres fiches de fluence de lecture.",
        thumbnail: "fluence.png",
        keywords: ["fluence", "lecture", "français", "générateur"],
    },
    {
        id: "Fractions",
        title: "Fractions",
        url: "Fractions",
        description:
            "Banque d'outils pour travailler les fractions à l'école primaire (exercices, générateur, ...).",
        thumbnail: "fractions.png",
        keywords: [
            "fractions",
            "nombre",
            "numération",
            "mathématiques",
            "maths",
        ],
    },
    {
        id: "Fractions/generateur",
        title: "Fractions (Générateur)",
        url: "Fractions/generateur",
        description:
            "Générateur de représentations pour les fractions : quadrillage, pizza, lignes graduées.",
        thumbnail: "fractions-generateur.png",
        keywords: [
            "générateur",
            "fractions",
            "nombre",
            "numération",
            "mathématiques",
            "maths",
        ],
    },
    {
        id: "fracti-unit",
        title: "FractiUnit",
        url: "fracti-unit",
        description:
            "Application web interactive permettant de générer et manipuler des représentations visuelles de fractions mathématiques. Propose différentes formes (disque, carré, bande) fractionnables pour faciliter la compréhension des concepts de numérateur, dénominateur et équivalence de fractions.",
        thumbnail: "fracti-unit.png",
        keywords: [
            "fractions",
            "maths",
            "mathématiques",
            "numération",
            "nombres",
            "représentation",
            "manipulation",
            "interactive",
            "géométrie",
            "disque",
            "carré",
            "bande",
        ],
    },
    {
        id: "frise",
        title: "Frises chronologiques",
        url: "frise",
        description:
            "Application web permettant de générer des images de frises chronologiques.",
        thumbnail: "frise.png",
        keywords: ["générateur", "frise", "histoire", "chronologie", "divers"],
    },
    {
        id: "frise-circulaire",
        title: "Frise temporelle circulaire",
        url: "frise-circulaire",
        description:
            "Application web permettant de générer des images de frises temporelles circulaires.",
        thumbnail: "frise-circulaire.png",
        keywords: [
            "générateur",
            "frise",
            "circulaire",
            "histoire",
            "chronologie",
            "divers",
        ],
    },
    {
        id: "fusionddp",
        title: "Fusion de Didapages",
        url: "fusionddp",
        description:
            "Banque d'outils pour la fusion de petits livres interactifs créés avec Didapages.",
        thumbnail: "fusionddp.png",
        keywords: [
            "didapages",
            "livres",
            "numériques",
            "fusion",
            "tuic",
            "divers",
        ],
    },
    {
        id: "fusionLignes",
        title: "Fusion de lignes",
        url: "fusionLignes",
        description:
            "Application web permettant de concaténer les lignes d'un fichier texte. Par exemple, replacer le nom et le prénom sur une même ligne. (Aujourd'hui, je vous encourage à vous tourner vers Sublime Text qui doit permettre cela et encore plus...)",
        thumbnail: "fusionLignes.png",
        keywords: ["fusion", "tuic", "divers"],
    },
    {
        id: "gabuzomeu",
        title: "GaBuZoMeu",
        url: "gabuzomeu",
        description:
            "Application web permettant de travailler la numération Shadok ;).",
        thumbnail: "gabuzomeu.png",
        keywords: [
            "gabuzomeu",
            "shadok",
            "maths",
            "mathématiques",
            "numération",
            "base 2",
        ],
    },
    {
        id: "generateurs",
        title: "Générateurs pédagogiques",
        url: "generateurs",
        description:
            "Collection d'outils permettant de créer facilement du contenu pédagogique personnalisé. Inclut des générateurs pour les fractions, les jeux éducatifs, les leçons manipulables, et plus encore.",
        thumbnail: "generateurs.png",
        keywords: [
            "générateurs",
            "outils",
            "création",
            "contenu",
            "pédagogique",
            "personnalisation",
            "différenciation",
            "enseignants",
            "maths",
            "français",
            "divers",
        ],
    },
    {
        id: "graduations",
        title: "Graduations",
        url: "graduations",
        description: "Ligne graduée interactive à vidéo-projeter.",
        thumbnail: "graduations.png",
        keywords: [
            "graduations",
            "maths",
            "mathématiques",
            "numération",
            "ligne",
            "graduée",
        ],
    },
    {
        id: "grid4bot",
        title: "Grid4bot",
        url: "grid4bot",
        description:
            "Générateur de grilles permettant de proposer des situations pour la programmation de robots.",
        thumbnail: "grid4bot.png",
        keywords: [
            "robot",
            "maths",
            "mathématiques",
            "programmation",
            "code",
            "bluebot",
            "beebot",
            "quadrillage",
            "générateur",
        ],
    },
    {
        id: "groupements",
        title: "Groupements",
        url: "groupements",
        description:
            "Application web permettant de travailler la numération et les opérations à l'école primaire par la manipulation (groupement, cassage,...) de différentes représentations des nombres.",
        thumbnail: "groupements.png",
        keywords: [
            "groupements",
            "maths",
            "mathématiques",
            "numération",
            "opération",
        ],
    },
    {
        id: "hashtagfrom",
        title: "HashtagFrom",
        url: "hashtagfrom",
        description:
            "Application web permettant de lister les messages Twitter envoyés par un abonné et contenant un mot-clé donné.",
        thumbnail: "hashtagfrom.png",
        keywords: ["hashtagfrom", "twitter", "divers"],
    },
    {
        id: "homophones",
        title: "Homophones",
        url: "homophones",
        description:
            "Application web permettant de générer au format pdf et d'imprimer des exercices sur les homophones.",
        thumbnail: "homophones.png",
        keywords: [
            "homophones",
            "grammaire",
            "orthographe",
            "français",
            "générateur",
        ],
    },
    {
        id: "ImagesEtSons",
        title: "Images et sons (surtout images)",
        url: "ImagesEtSons",
        description: "Banque d'images.",
        thumbnail: "imagesetsons.png",
        keywords: ["images", "banque", "tuic", "divers"],
    },
    {
        id: "images-sequentielles",
        title: "Images séquentielles",
        url: "images-sequentielles",
        description:
            "Application web permettant de proposer des images séquentielles en ligne à partir des ses propres images.",
        thumbnail: "images-sequentielles.png",
        keywords: [
            "images",
            "séquentielles",
            "lecture",
            "compréhension",
            "français",
        ],
    },
    {
        id: "JeuxLecture",
        title: "Jeux de lecture",
        url: "JeuxLecture",
        description:
            "Banque de jeux en ligne permettant de se préparer et/ou de s'entraîner à la lecture.",
        thumbnail: "jeux-lecture.png",
        keywords: ["jeux", "lecture", "portail", "français"],
    },
    {
        id: "JeuxMathematiques",
        title: "Jeux de mathématiques (Ancienne présentation)",
        url: "JeuxMathematiques",
        description:
            "Banque de jeux en ligne permettant de s'entraîner aux mathématiques.",
        thumbnail: "jeux-mathematiques.png",
        keywords: ["jeux", "mathématiques", "portail", "maths"],
    },
    {
        id: "jeux-maths-1",
        title: "Jeux de mathématiques (1)",
        url: "jeux-maths-1",
        description:
            "Banque de jeux en ligne permettant de s'entraîner aux mathématiques.",
        thumbnail: "jeux-mathematiques-1.png",
        keywords: ["jeux", "mathématiques", "portail", "maths"],
    },
    {
        id: "jeux-maths-2",
        title: "Jeux de mathématiques (2)",
        url: "jeux-maths-2",
        description:
            "Banque de jeux en ligne permettant de s'entraîner aux mathématiques.",
        thumbnail: "jeux-mathematiques-2.png",
        keywords: ["jeux", "mathématiques", "portail", "maths"],
    },
    {
        id: "labyrinthes",
        title: "Les labyrinthes de MiCetF",
        url: "labyrinthes",
        description:
            "Activité en ligne permettant de parcourir des labyrinthes de plus en plus complexes en utilisant les touches directionnelles de son clavier ou le balayage avec le doigt sur un terminal tactile.",
        thumbnail: "labyrinthes.png",
        keywords: ["jeu", "maths", "mathématiques", "labyrinthe", "repérage"],
    },
    {
        id: "labyrinthes-pdf",
        title: "Labyrinthes (Générateur)",
        url: "labyrinthes-pdf",
        description:
            "Application web permettant de générer des fiches d'exercices comprenant un ou plusieurs labyrinthes.",
        thumbnail: "labyrinthes-pdf.png",
        keywords: [
            "générateur",
            "jeu",
            "maths",
            "mathématiques",
            "labyrinthe",
            "repérage",
        ],
    },
    {
        id: "la-bonne-image",
        title: "La bonne image",
        url: "la-bonne-image",
        description:
            "Application web permettant de travailler le vocabulaire en maternelle. L'élève doit cliquer sur l'image qui correspond au texte qu'il vient d'entendre.",
        thumbnail: "la-bonne-image.png",
        keywords: ["image", "jeu", "français", "vocabulaire"],
    },
    {
        id: "le-bon-mot",
        title: "Le bon mot",
        url: "le-bon-mot",
        description:
            "Application web permettant de s'exercer en lecture au cycle 2.",
        thumbnail: "le-bon-mot.png",
        keywords: ["mot", "jeu", "français", "vocabulaire"],
    },
    {
        id: "LectureFlash",
        title: "Lecture flash",
        url: "lecture-flash",
        description:
            "Application permettant de travailler la fluence de lecture. On colle son texte et les mots disparaissent à la vitesse désirée. Intérêts : limiter le nombre de régressions inutiles, favoriser l'anticipation, améliorer la vitesse de lecture et la motivation. (sur une idée de Julie Meunier : @ptitejulie89)",
        thumbnail: "lecture-flash.png",
        keywords: [
            "lecture",
            "flash",
            "fluence",
            "français",
            "régression",
            "anticipation",
            "prompteur",
        ],
    },
    {
        id: "LectureHeure",
        title: "Lecture de l'heure",
        url: "LectureHeure",
        description:
            "Banque d'outils permettant de travailler la lecture de l'heure à l'école primaire (exercices, générateurs).",
        thumbnail: "lecture-heure.png",
        keywords: [
            "banque",
            "heure",
            "maths",
            "mathématiques",
            "mesure",
            "temps",
        ],
    },
    {
        id: "LectureHeure/generateur",
        title: "Lecture de l'heure (Générateur)",
        url: "LectureHeure/generateur",
        description: "Générateur d'horloges.",
        thumbnail: "lecture-heure-generateur.png",
        keywords: [
            "horloge",
            "heure",
            "maths",
            "mathématiques",
            "mesure",
            "temps",
            "générateur",
        ],
    },
    {
        id: "littleChallengeBook",
        title: "Little Challenge Book (Générateur)",
        url: "littleChallengeBook",
        description:
            "Cet outil est un complément de l'application Grid4Bot. A partir des images créées par cette application, Little Challenge Book permet de générer un petit livre A4 au format pdf.",
        thumbnail: "little-challenge-book.png",
        keywords: [
            "programmation",
            "bluebot",
            "maths",
            "mathématiques",
            "livre",
            "a4",
            "générateur",
        ],
    },
    {
        id: "logitic",
        title: "Logitic - Logix",
        url: "logitic",
        description:
            "Application web permettant de conduire les activités proposées autour de Logix par D. Valentin pour les GS de maternelle.",
        thumbnail: "logitic.png",
        keywords: [
            "logix",
            "logitic",
            "logique",
            "résolution",
            "problèmes",
            "maths",
            "mathématiques",
            "valentin",
        ],
    },
    {
        id: "logixourriel",
        title: "Logitic et communication",
        url: "logixourriel",
        description:
            "Application web permettant de conduire à distance les activités proposées autour de Logix par D. Valentin pour les GS de maternelle.",
        thumbnail: "logixourriel.png",
        keywords: [
            "twitter",
            "logix",
            "logitic",
            "logique",
            "résolution",
            "problèmes",
            "maths",
            "mathématiques",
            "valentin",
        ],
    },
    {
        id: "loto",
        title: "Loto (Générateur)",
        url: "loto",
        description:
            "Application web permettant, à partir d'un corpus de mots ou d'images, de générer au format pdf et d'imprimer les planches et/ou les étiquettes (jetons) d'un jeu de loto.",
        thumbnail: "loto.png",
        keywords: ["loto", "jeu", "outil", "générateur", "divers"],
    },
    {
        id: "manege-en-chantier",
        title: "IA-traction Foraine",
        url: "manege-en-chantier",
        description:
            "Simulation interactive d'un manège virtuel entièrement personnalisable. Permet d'ajuster la vitesse, le nombre d'éléments et de visualiser une animation 3D fluide utilisant des transformations CSS. Projet illustrant l'utilisation créative du développement web pour des simulations ludiques.",
        thumbnail: "manege-en-chantier.png",
        keywords: [
            "manège",
            "simulation",
            "3D",
            "animation",
            "interactif",
            "divers",
            "CSS",
            "transformation",
            "React",
            "personnalisation",
            "ludique",
            "virtuel",
        ],
    },
    {
        id: "mastermind",
        title: "Mastermind",
        url: "mastermind",
        description: "Jeu en ligne.",
        thumbnail: "mastermind.png",
        keywords: ["mastermind", "jeu", "logique", "maths", "mathématiques"],
    },
    {
        id: "media-folder-generator",
        title: "Média Folder Générateur",
        url: "media-folder-generator",
        description:
            'Application web permettant la générations de dossiers de média destinés à un usage personnalisé des applications web "La Bonne Image" et "Ecoute et range".',
        thumbnail: "media-folder-generator.png",
        keywords: [
            "media-folder-generator",
            "bonne",
            "image",
            "mot",
            "outils",
            "générateur",
            "médias",
            "divers",
        ],
    },
    {
        id: "meme-indice",
        title: "Même indice",
        url: "meme-indice",
        description:
            "Application web permettant de générer au format pdf et d'imprimer des jeux de cartes pour travailler avec des élèves en difficulté d'apprentissage de la lecture : chaque paire de cartes à un indice commun (lettre, graphème,...) qu'il faut trouver.",
        thumbnail: "meme-indice.png",
        keywords: ["même indice", "jeu", "carte", "français", "générateur"],
    },
    {
        id: "memory",
        title: "Memory",
        url: "memory",
        description:
            "Application web permettant de jouer au mémory en ligne avec des jeux proposés ou avec des jeux générés à partir de son propre corpus d'images (cf. génerateur).",
        thumbnail: "memory.png",
        keywords: ["memory", "jeu", "mémoire", "divers"],
    },
    {
        id: "memory/generateur",
        title: "Memory (Générateur)",
        url: "memory/generateur",
        description:
            "Application web permettant de générer un memory à partir de son propre corpus d'images (cf. memory).",
        thumbnail: "memory-generateur.png",
        keywords: ["memory", "jeu", "mémoire", "générateur", "divers"],
    },
    {
        id: "memo-tables",
        title: "MemoTables",
        url: "memo-tables",
        description:
            "Application web d'apprentissage des tables de multiplication utilisant la méthode de répétition espacée (système des boîtes de Leitner). Permet aux élèves de mémoriser efficacement les tables grâce à des flashcards interactives et un suivi personnalisé de leur progression.",
        thumbnail: "memo-tables.png",
        keywords: [
            "tables",
            "multiplication",
            "flashcards",
            "répétition espacée",
            "leitner",
            "calcul",
            "maths",
            "mathématiques",
            "mémorisation",
        ],
    },
    {
        id: "messagerie",
        title: "Messagerie (défi)",
        url: "messagerie",
        description:
            "Application web permettant de générer les messages et les documents nécessaire à la conduite d'un rallye messagerie.",
        thumbnail: "messagerie.png",
        keywords: [
            "messagerie",
            "défi",
            "tuic",
            "communiquer",
            "générateur",
            "divers",
        ],
    },
    {
        id: "mesures",
        title: "Mesures (Périmètre et surface)",
        url: "mesures",
        description:
            "Application web permettant de mettre à l'épreuve les confusions qui peuvent se créer entre les notions de périmètre et de surface.",
        thumbnail: "mesures.png",
        keywords: [
            "mesures",
            "périmètre",
            "surface",
            "maths",
            "mathématiques",
            "grandeurs",
            "géométrie",
        ],
    },
    {
        id: "minuterie",
        title: "Minuterie",
        url: "minuterie",
        description:
            "Horloge virtuelle qui permet de visualiser le temps qu'il reste avant un événement distant de moins d'une heure.",
        thumbnail: "minuterie.png",
        keywords: [
            "temps",
            "mesure",
            "reste",
            "timetimer",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "mdp-gen",
        title: "Mot de passe (Générateur)",
        url: "mdp-gen",
        description: "Générateur de mot de passe.",
        thumbnail: "mdp-gen.png",
        keywords: ["mot", "passe", "password", "générateur", "outil", "divers"],
    },
    {
        id: "modelisation-rdp",
        title: "Modélisation (Résolution de problèmes)",
        url: "modelisation-rdp",
        description:
            "Cette application web permet de générer des schémas pour représenter/modéliser différents types de problèmes mathématiques.",
        thumbnail: "modelisation-rdp.png",
        keywords: [
            "générateur",
            "resolution de problemes",
            "résolution de problèmes",
            "rdp",
            "modélisation",
            "schéma",
            "schema",
            "modele",
            "modèle",
            "barre",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "montessori",
        title: "Montessori",
        url: "montessori",
        description:
            "Application web permettant de travailler la numération avec les cartons Montessori.",
        thumbnail: "montessori.png",
        keywords: [
            "montessori",
            "numération",
            "nombre",
            "maths",
            "mathématiques",
            "cartons",
        ],
    },
    {
        id: "mosaique",
        title: "Mosaïque express",
        url: "mosaique",
        description:
            "Ce jeu interactif est inspiré du Rubik'S Race, jeu éducatif dont le but est de reproduire une mosaïque modèle de 9 cases (3x3) au centre d'un taquin de 25 cases (5x5).",
        thumbnail: "mosaique.png",
        keywords: [
            "mosaïque",
            "logique",
            "problème",
            "maths",
            "mathématiques",
            "jeu",
        ],
    },
    {
        id: "multiplication",
        title: "Multiplication",
        url: "multiplication",
        description:
            "Jeu interactif permettant de s'exercer et de mémoriser les tables de multiplication.",
        thumbnail: "multiplication.png",
        keywords: [
            "multiplication",
            "tables",
            "calcul",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "mur-sonore",
        title: "Mur sonore (Générateur de cartes)",
        url: "mur-sonore",
        description:
            'Ce générateur permet de construire des cartes pour les "murs sonores" proposés par EASITYS.',
        thumbnail: "mur-sonore.png",
        keywords: [
            "mur",
            "sonore",
            "langage",
            "oral",
            "français",
            "maternelle",
            "C1",
            "générateur",
            "easytis",
        ],
    },
    {
        id: "NombrePense",
        title: "Nombre pensé",
        url: "NombrePense",
        description:
            "Tableau des nombres interactif conçu pour mettre les TIC au service de l'activité du nombre pensé. Le maître pense à un nombre. Par une série de questions, les élèves éliminent les nombres qui ne conviennent pas. Selon le scénario pédagogique envisagé par le professeur, le tableau peut être utilisé pour garder une trace des nombres éliminés, individuellement sur un ordinateur et/ou collectivement au moyen d'un vidéo-projecteur.",
        thumbnail: "nombre-pense.png",
        keywords: ["numération", "nombres", "maths", "mathématiques"],
    },
    {
        id: "nombres",
        title: "Nombre (construction du)",
        url: "nombres",
        description:
            "Banque d'outils (étendue) permettant de travailler la construction du nombre à l'école primaire.",
        thumbnail: "nombres.png",
        keywords: [
            "numération",
            "nombres",
            "maths",
            "mathématiques",
            "outils",
            "banque",
        ],
    },
    {
        id: "np2016",
        title: "Numérique et nouveaux programmes (2016)",
        url: "np2016",
        description:
            "Présentation des références au numérique dans les nouveaux programmes de 2016.",
        thumbnail: "np2016.png",
        keywords: [
            "nouveaux",
            "programmes",
            "2016",
            "numérique",
            "présentation",
            "divers",
        ],
    },
    {
        id: "Numeration",
        title: "Numération",
        url: "Numeration",
        description:
            "Banque d'outils (restreinte) permettant de travailler la numération à l'aide des représentations les plus utilisées à l'école primaire.",
        thumbnail: "numeration.png",
        keywords: [
            "numération",
            "nombres",
            "maths",
            "mathématiques",
            "outils",
            "banque",
        ],
    },
    {
        id: "numop",
        title: "Numération-Opération",
        url: "numop",
        description:
            "Application web permettant de travailler la numération et les opérations en manipulant les représentations les plus utilisées à l'école primaire.",
        thumbnail: "numop.png",
        keywords: [
            "numop",
            "numération",
            "opérations",
            "nombres",
            "maths",
            "mathématiques",
            "outils",
        ],
    },
    {
        id: "ORLF",
        title: "Observation réfléchie de la langue",
        url: "ORLF",
        description:
            "Application web proposant des exercices de grammaire, de conjugaison, d'orthographe ou de vocabulaire pour le cycle 3. Les élèves peuvent réaliser ces exercices en ligne. Les enseignants peuvent générer et imprimer ces exercices au format pdf.",
        thumbnail: "orlf.png",
        keywords: [
            "orlf",
            "français",
            "grammaire",
            "maîtrise",
            "maitrise",
            "langue",
            "conjugaison",
            "orthographe",
            "conjugaison",
            "générateur",
        ],
    },
    {
        id: "operations",
        title: "Opérations",
        url: "operations",
        description:
            "Banque d'outils permettant de générer au format pdf et d'imprimer des fiches d'exercices proposant des séries d'opérations posées.",
        thumbnail: "operations.png",
        keywords: [
            "opérations",
            "calcul",
            "posé",
            "maths",
            "mathématiques",
            "générateur",
        ],
    },
    {
        id: "ordonner",
        title: "Ordonner des nombres",
        url: "ordonner",
        description:
            "Application web permettant aux élèves de s'entraîner/évaluer au classement des nombres dans l'ordre croissant/décroissant.",
        thumbnail: "ordonner.png",
        keywords: [
            "ordonner",
            "ordre",
            "ranger",
            "croissant",
            "décroissant",
            "maths",
            "mathématiques",
            "numération",
        ],
    },
    {
        id: "ordonombres",
        title: "Ordo'Nombres",
        url: "ordonombres",
        description:
            "Application web permettant aux élèves de s'entraîner/évaluer au classement des nombres dans l'ordre croissant/décroissant.",
        thumbnail: "ordonombres.png",
        keywords: [
            "ordonner",
            "ordre",
            "ranger",
            "croissant",
            "décroissant",
            "maths",
            "mathématiques",
            "numération",
        ],
    },
    {
        id: "ordre-alpha",
        title: "Ordre alphabétique - La ruche des mots",
        url: "ordre-alpha",
        description:
            "Application web permettant de mémoriser l'orthographe lexicale des mots. L'enseignant peut s'incrire et gérer les listes de mots proposées à ses élèves.",
        thumbnail: "ordre-alpha.png",
        keywords: ["alphabet", "ordre", "vocabulaire", "français"],
    },
    {
        id: "orthographe",
        title: "Orthographe - Entraînement orthographique",
        url: "orthographe",
        description:
            "Application web permettant de mémoriser l'orthographe lexicale des mots. L'enseignant peut s'incrire et gérer les listes de mots proposées à ses élèves.",
        thumbnail: "orthographe.png",
        keywords: ["orthographe", "lexicale", "français"],
    },
    {
        id: "ortho-lex",
        title: "Orthographe Lexicale",
        url: "ortho-lex",
        description:
            "Pour chaque classe de la scolarité obligatoire (du CP à la 3ème), en s'appuyant sur l'échelle Dubois-Buysse, cette application web dicte des mots qu'il faut saisir au clavier.",
        thumbnail: "ortho-lex.png",
        keywords: ["orthographe", "lexicale", "français"],
    },
    {
        id: "OutilsTICE",
        title: "Outils TICE",
        url: "OutilsTICE",
        description: "Banque d'outils divers et variés.",
        thumbnail: "outilstice.png",
        keywords: ["outils", "tice", "divers"],
    },
    {
        id: "papota2",
        title: "P@pot'à 2",
        url: "papota2",
        description:
            'Application web "expérimentale" permettant à deux personnes de communiquer en temps réel.',
        thumbnail: "papota2.png",
        keywords: ["communiquer", "prototype", "divers"],
    },
    {
        id: "parachute",
        title: "Parachute",
        url: "parachute",
        description:
            "Jeu interactif permettant de travailler les nombres décimaux outour d'une ligne graduée.",
        thumbnail: "parachute.png",
        keywords: [
            "parachute",
            "nombres",
            "décimaux",
            "numération",
            "décimale",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "parapente",
        title: "Parapente",
        url: "parapente",
        description:
            "Jeu interactif permettant de travailler les nombres entiers autour d'une ligne graduée.",
        thumbnail: "parapente.png",
        keywords: [
            "parapente",
            "nombres",
            "entiers",
            "numération",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "parcours-de-phrases",
        title: "Parcours de phrases (Orthographe)",
        url: "parcours-de-phrases",
        description:
            "Jeu interactif dont le but est de retrouver dans un tableau le parcours (linéaire) qui permet de reconstruire une phrase juste.",
        thumbnail: "parcours-de-phrases.png",
        keywords: ["parcours de phrases", "français", "orthographe"],
    },
    {
        id: "pareil-pas-pareil",
        title: "Pareil, pas pareil ?",
        url: "pareil-pas-pareil",
        description:
            "Jeu interactif permettant de s'exercer, d'une part, à reconnaître si deux formes planes sont superposables ou non et, d'autre part, à distinguer entre superposition directe et superposition après retournement.",
        thumbnail: "pareil-pas-pareil.png",
        keywords: [
            "pareil",
            "pas pareil",
            "superposition",
            "superposable",
            "gépmétrie",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "parking",
        title: "Parking",
        url: "parking",
        description:
            "Version mobile du jeu interactif Embouteillages et qui reprend l'activité du même nom proposée par D. Valentin pour les GS.",
        thumbnail: "parking.png",
        keywords: [
            "embouteillages",
            "parking",
            "logique",
            "résolution",
            "problèmes",
            "maths",
            "mathématiques",
            "valentin",
        ],
    },
    {
        id: "pense",
        title: "Pense, pense..., le nombre pensé",
        url: "pense",
        description:
            'Jeu interactif dont le but est de retrouver le plus rapidement possible un nombre mystérieux. A chaque proposition, l\'application répond par "Trop petit" ou "Trop grand".',
        thumbnail: "pense.png",
        keywords: ["numération", "nombres", "maths", "mathématiques", "pensé"],
    },
    {
        id: "phonologie",
        title: "Phonologie",
        url: "phonologie",
        description:
            "Application web proposant des exercices de phonologie pour des élèves de CP. Les élèves peuvent réaliser ces exercices en ligne. Les enseignants peuvent générer et imprimer ces exercices au format pdf.",
        thumbnail: "phonologie.png",
        keywords: [
            "phonologie",
            "lecture",
            "sons",
            "français",
            "syllabes",
            "générateur",
        ],
    },
    {
        id: "phrases",
        title: "Phrases à reconstituer",
        url: "phrases",
        description:
            "Application web permettant de créer des exercices personnalisés de remise en ordre de phrases.",
        thumbnail: "phrases.png",
        keywords: ["phrases", "grammaire", "syntaxe", "français"],
    },
    {
        id: "picbille",
        title: "Picbille",
        url: "picbille",
        description:
            "Application web permettant de créer des images de boites Picbilles.",
        thumbnail: "picbille.png",
        keywords: [
            "picbille",
            "nombre",
            "numération",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "picturetopuzzle",
        title: "Picture To Puzzle",
        url: "picturetopuzzle",
        description:
            "Application web permettant de générer un puzzle en ligne à partir d'une image téléchargée.",
        thumbnail: "picturetopuzzle.png",
        keywords: ["picturetopuzzle", "puzzle", "générateur", "divers"],
    },
    {
        id: "polyedres",
        title: "Polyèdres",
        url: "polyedres",
        description:
            "Banque de vidéos présentant des polyèdres en rotation autour des 3 axes de l'espace.",
        thumbnail: "polyedres.png",
        keywords: [
            "polyèdres",
            "face",
            "sommet",
            "arête",
            "vidéo",
            "géométrie",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "PortraitChinois",
        title: "Petite Fabrique à Portraits Chinois",
        url: "PortraitChinois",
        description:
            'Application web permettant la créattion de petits livres interactifs sur le thème des "Portraits chinois".',
        thumbnail: "PortraitChinois.png",
        keywords: [
            "écrit",
            "histoires",
            "portraits",
            "chinois",
            "fabrique",
            "français",
        ],
    },
    {
        id: "presentations-educatives",
        title: "Présentations éducatives",
        url: "presentations-educatives",
        description:
            "Application web présentant des ressources pédagogiques interactives pour les enseignants et les élèves. Découvrez des contenus sur l'histoire, les sciences, le numérique éducatif et la robotique.",
        thumbnail: "presentations-educatives.png",
        keywords: [
            "présentations",
            "éducatif",
            "enseignants",
            "élèves",
            "divers",
            "numérique",
            "CRCN",
            "ENT",
            "robotique",
            "interactif",
            "histoire",
            "chimie",
            "CAREC",
        ],
    },
    {
        id: "Problemes",
        title: "Problèmes pour l'école",
        url: "Problemes",
        description:
            "Banque de problèmes pour l'école primaire. Les élèves peuvent résoudre ces problèmes en ligne. L'enseignant peut générer au format pdf et imprimer des fiches de 4 problèmes.",
        thumbnail: "Problemes.png",
        keywords: [
            "problèmes",
            "résolution",
            "typologie",
            "vergnaud",
            "générateur",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "ProdEcrits",
        title: "Production d'écrits",
        url: "ProdEcrits",
        description: "Banque d'outils d'aide à la production d'écrits.",
        thumbnail: "ProdEcrits.png",
        keywords: ["écrits", "production", "outils", "banque", "français"],
    },
    {
        id: "puissance10",
        title: "Puissance 10",
        url: "puissance10",
        description: "Multiplier ou diviser par 10, 100 ou 1000. Observation.",
        thumbnail: "puissance10.png",
        keywords: [
            "multiplier",
            "10",
            "100",
            "1000",
            "produit",
            "diviser",
            "puissance",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "qrcode",
        title: "QR Code (Générateur)",
        url: "qrcode",
        description:
            "Application web permettant la génération d'un QR Code à partir d'une URL.",
        thumbnail: "qrcode.png",
        keywords: ["qrcode", "outil", "générateur", "divers"],
    },
    {
        id: "quadrillage",
        title: "Quadrillage - Se repérer sur un quadrillage",
        url: "quadrillage",
        description:
            "Application web permettant de proposer une activité de repérage sur quadrillage à des élèves de cycle 2.",
        thumbnail: "quadrillage.png",
        keywords: [
            "quadrillage",
            "repérage",
            "géométrie",
            "espace",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "rallye-lecture",
        title: "Rallye lecture",
        url: "rallye-lecture",
        description:
            "Application web permettant de générer au format pdf et d'imprimer des fiches de lecture.",
        thumbnail: "rallye-lecture.png",
        keywords: ["rallye", "lecture", "français", "générateur"],
    },
    {
        id: "recadrer",
        title: "Recadrer une image.",
        url: "recadrer",
        description:
            "Application web permettant de recadrer une image sans passer par un logiciel de retouche. Bien utile pour les images utilisées avec les différents générateurs proposés sur ce site (loto, symbole commun, vocatego, écoute et range, la bonne image, ....)",
        thumbnail: "recadrer.png",
        keywords: ["image", "recadrer", "outil", "tuic", "divers"],
    },
    {
        id: "reperage",
        title: "Repérage sur quadrillage - La chasse au nuage",
        url: "reperage",
        description:
            "Jeu interactif permettant de s'entraîner aux déplacements sur un quadrillage.",
        thumbnail: "reperage.png",
        keywords: [
            "quadrillage",
            "repérage",
            "géométrie",
            "espace",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "reproduction-sur-quadrillage",
        title: "Reproduction sur quadrillage",
        url: "reproduction-sur-quadrillage",
        description:
            "Application web proposant des dessins à reproduire en utilisant un quadrillage (ou un pointage).",
        thumbnail: "rsq.png",
        keywords: [
            "quadrillage",
            "reproduction",
            "géométrie",
            "espace",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "rsqgenerateur",
        title: "Reproduction sur quadrillage (Générateur)",
        url: "rsqgenerateur",
        description:
            "Application web permettant de créer des dessins à reproduire en utilisant un quadrillage (ou un pointage).",
        thumbnail: "rsqgenerateur.png",
        keywords: [
            "quadrillage",
            "reproduction",
            "générateur",
            "géométrie",
            "espace",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "rounded-word",
        title: "Rounded Word",
        url: "rounded-word",
        description:
            "Application web proposant de lire des mots écrits en rond. Les mots sont écrits dans le sens des aiguilles d'une montre mais aussi parfois en sens inverse.\nLe jeu est multijoueurs et peut donner lieu à un défi en ligne entre élèves ou entre classes.",
        thumbnail: "rounded-word.png",
        keywords: ["rounded", "word", "lecture", "mots", "jeu", "français"],
    },
    {
        id: "rounded-word-cards",
        title: "Rounded Word (Générateur)",
        url: "rounded-word-cards",
        description:
            "Application web permettant de générer un jeu de cartes basé sur le même principe que le jeu en ligne précédent (Rounded Word).",
        thumbnail: "rounded-word-cards.png",
        keywords: [
            "rounded",
            "word",
            "lecture",
            "mots",
            "jeu",
            "français",
            "générateur",
            "cartes",
        ],
    },
    {
        id: "reussites",
        title: "Réussite des nombres (CP/CE1)",
        url: "reussites",
        description:
            "Jeu interactif dont l'objectif est de replacer des nombres à leur place sur une file numérique.",
        thumbnail: "reussites.png",
        keywords: [
            "réussite",
            "nombres",
            "numération",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "robots",
        title: "Robots (La fabrique de)",
        url: "robots",
        description:
            "Jeu interactif dont le but est de finir la copie d'un robot en utilisant des carrés de couleurs stockés dans un magasin. Destinée à des élèves de GS/CP, cette activité de numération vise à faire disparaître la procédure de correspondance un à un au profit du dénombrement.",
        thumbnail: "robots.png",
        keywords: ["robots", "nombres", "numération", "maths", "mathématiques"],
    },
    {
        id: "ruche-mots",
        title: "Ruche des mots",
        url: "ruche-mots",
        description:
            "Jeu interactif dont le but est de suivre l'ordre alphabétique pour traverser une ruche.",
        thumbnail: "ruche-mots.png",
        keywords: [
            "ruche",
            "mots",
            "alphabet",
            "ordre",
            "vocabulaire",
            "français",
        ],
    },
    {
        id: "ruche-nombres",
        title: "Ruche des nombres",
        url: "ruche-nombres",
        description:
            "Jeu interactif dont le but est de suivre l'ordre alphabétique pour traverser une ruche.",
        thumbnail: "ruche-nombres.png",
        keywords: [
            "ruche",
            "nombres",
            "ordre",
            "numération",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "sciences",
        title: "Sciences - Le thermomètre",
        url: "sciences",
        description:
            "Jeu interactif permettant de s'exercer à la lecture de la température sur un thermomètre à mercure.",
        thumbnail: "sciences.png",
        keywords: ["thermomètre", "sciences", "mesure", "découverte", "divers"],
    },
    {
        id: "scrabble",
        title: "Scrabble",
        url: "scrabble",
        description:
            "Plateau de scrabble pour conduire des activités de scrabble scolaire (Scrabble duplicate - plateau collectif vidéoprojeté, plateau individuel).",
        thumbnail: "scrabble.png",
        keywords: ["scrabble", "français", "jeu", "plateau"],
    },
    {
        id: "sept-familles",
        title: "Sept familles (Générateur)",
        url: "sept-familles",
        description:
            "Application web qui permet de générer un jeu de sept familles au format pdf à partir de son propre corpus d'images et/ou de mots.",
        thumbnail: "sept-familles.png",
        keywords: [
            "sept",
            "familles",
            "générateur",
            "vocabulaire",
            "français",
            "jeu",
            "cartes",
        ],
    },
    {
        id: "sig",
        title: "S.I.G.",
        url: "sig",
        description:
            "Application web permettant de se construire une première représentattion géographique du monde (Système d'Informations Géographiques).",
        thumbnail: "sig.png",
        keywords: ["sig", "géographie", "carte", "divers"],
    },
    {
        id: "similitexte",
        title: "SimiliTexte",
        url: "similitexte",
        description:
            "Application web permettant de générer des jeux de cartes basés sur le principe des cartes de Dobble. Chaque paire de cartes partage exactement un élément commun. Possibilité de créer des jeux personnalisés à partir de corpus prédéfinis ou de vos propres éléments textuels.",
        thumbnail: "similitexte.png",
        keywords: [
            "dobble",
            "symbole",
            "jeu",
            "cartes",
            "générateur",
            "divers",
            "français",
            "maths",
            "mathématiques",
            "vocabulaire",
            "tables",
            "multiplication",
        ],
    },
    {
        id: "soixante",
        title: "Soixante",
        url: "soixante",
        description:
            "Cette application web permet aux élèves d'entretenir leur capacité à calculer autour du nombre 60 (secondes, minutes).",
        thumbnail: "soixante.png",
        keywords: [
            "soixante",
            "math",
            "complement",
            "complément",
            "heure",
            "minute",
            "duree",
            "durée",
            "horaire",
        ],
    },
    {
        id: "sonometre",
        title: "Sonomètre de Classe",
        url: "sonometre",
        description:
            "Application web interactive (PWA) permettant aux enseignants de surveiller et visualiser le niveau sonore de leur classe en temps réel. L'application utilise le microphone de l'appareil pour une analyse en temps réel et affiche ce niveau de manière engageante pour les élèves.",
        thumbnail: "sonometre.png",
        keywords: [
            "sonomètre",
            "classe",
            "bruit",
            "son",
            "volume",
            "divers",
            "gestion",
            "comportement",
            "animation",
            "pwa",
        ],
    },
    {
        id: "souris",
        title: "Souris - Les rois de la souris",
        url: "souris",
        description:
            "Jeu interactif permettant de s'exercer au maniement de la souris.",
        thumbnail: "souris.png",
        keywords: ["souris", "rois", "tuic", "saisie", "divers"],
    },
    {
        id: "simulation-salaire",
        title: 'Simulation d\'un bulletin de paye "PE"',
        url: "simulation-salaire",
        description:
            "Application web permettant quelques simulations autour du salaire d'un PE.",
        thumbnail: "simulation-salaire.png",
        keywords: ["salaire", "simulation", "outil", "divers"],
    },
    {
        id: "superpositions",
        title: "Superpositions",
        url: "superpositions",
        description:
            "Travail de géométrie sur les différents plans, reconnaître des figures superposées, décrire une figure en superposant les formes, dictées, au cycle2",
        thumbnail: "superpositions.png",
        keywords: [
            "géométrie",
            "superpositions",
            "figures",
            "plans",
            "mathématiques",
        ],
    },
    {
        id: "Symetrie",
        title: "Symétrie",
        url: "Symetrie",
        description:
            "Jeu interactif permettant de travailler la symétrie axiale.",
        thumbnail: "symetrie.png",
        keywords: ["symétrie", "géométrie", "espace", "maths", "mathématiques"],
    },
    {
        id: "ssq",
        title: "Symétrie sur quadrillage",
        url: "ssq",
        description:
            "Application web permettant de s'exercer au tracé de figures géométriques sur un quadrillage.",
        thumbnail: "ssq.png",
        keywords: [
            "quadrillage",
            "symétrie",
            "géométrie",
            "espace",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "ssqgenerateur",
        title: "Symétrie sur quadrillage (Générateur)",
        url: "ssqgenerateur",
        description:
            "Application web permettant de créer des exercices de tracé de figures géométriques sur quadrillage.",
        thumbnail: "ssqgenerateur.png",
        keywords: [
            "quadrillage",
            "symétrie",
            "générateur",
            "géométrie",
            "espace",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "sudoku",
        title: "Sudoku (Générateur)",
        url: "sudoku",
        description: "Générateur de Sudoku en ligne.",
        thumbnail: "sudoku.png",
        keywords: ["sudoku", "logique", "maths", "mathématiques", "problèmes"],
    },
    {
        id: "symbole-commun",
        title: "Symbole Commun (Générateur)",
        url: "symbole-commun",
        description:
            "Application web permettant de chercher en ligne le symbole commun entre deux cartes mais surtout de générer et imprimer des jeux de cartes personnalisés en utilisant ses propres images. Cet outil est très intéressant pour travailler le langage avec des élèves de cycle 1.",
        thumbnail: "symbole-commun.png",
        keywords: [
            "dobble",
            "symbole",
            "langage",
            "jeu",
            "cartes",
            "générateur",
            "divers",
        ],
    },
    {
        id: "tableau-bavard",
        title: "Tableau bavard (Générateur de grilles)",
        url: "tableau-bavard",
        description:
            'Ce générateur permet de construire des grilles pour les "Tableaux bavards" proposés par EASITYS.',
        thumbnail: "tableau-bavard.png",
        keywords: [
            "tableau",
            "bavard",
            "langage",
            "oral",
            "français",
            "maternelle",
            "C1",
            "générateur",
            "easytis",
        ],
    },
    {
        id: "TablesAddition",
        title: "Tables d'addition",
        url: "TablesAddition",
        description:
            "Jeu interactif permettant de mémoriser les tables d'addition.",
        thumbnail: "tables-addition.png",
        keywords: ["addition", "tables", "calcul", "maths", "mathématiques"],
    },
    {
        id: "TablesDivision",
        title: "Tables de division",
        url: "TablesDivision",
        description:
            "Jeu interactif permettant de mémoriser les tables de division.",
        thumbnail: "tables-division.png",
        keywords: ["division", "tables", "calcul", "maths", "mathématiques"],
    },
    {
        id: "TablesMultiplication",
        title: "Tables de multiplication",
        url: "TablesMultiplication",
        description:
            "Jeu interactif permettant de mémoriser les tables de multiplication.",
        thumbnail: "tables-multiplication.png",
        keywords: [
            "multiplication",
            "tables",
            "calcul",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "TablesSoustraction",
        title: "Tables de soustraction",
        url: "TablesSoustraction",
        description:
            "Jeu interactif permettant de mémoriser les tables de soustraction.",
        thumbnail: "tables-soustraction.png",
        keywords: [
            "soustraction",
            "tables",
            "calcul",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "tempsquireste",
        title: "Temps qu'il reste",
        url: "tempsquireste",
        description:
            "Horloge virtuelle qui permet de visualiser le temps qu'il reste avant un événement distant de moins d'une heure.",
        thumbnail: "tempsquireste.png",
        keywords: [
            "temps",
            "mesure",
            "reste",
            "timetimer",
            "maths",
            "mathématiques",
        ],
    },
    {
        id: "thermometre",
        title: "Thermomètre",
        url: "thermometre",
        description: "Thermomètre virtuel interactif.",
        thumbnail: "thermometre.png",
        keywords: ["thermomètre", "sciences", "mesure", "découverte", "divers"],
    },
    {
        id: "vehicules",
        title: "Véhicules",
        url: "vehicules",
        description:
            "Application web permettant d'expérimenter le problème des véhicules (Des voitures et des vélos sont stationnés sur un parking. On connait le nombre de véhicules et le nombre de roues, mais on ne connait pas le détail. A toi de retrouver le nombre de voitures et de vélos.)",
        thumbnail: "vehicules.png",
        keywords: [
            "véhicules",
            "problème",
            "maths",
            "mathématiques",
            "recherche",
        ],
    },
    {
        id: "vocatego",
        title: "VoCaTeGo (Générateur)",
        url: "vocatego",
        description:
            "Vous jouez à Cache Tomate pour travailler le vocabulaire avec vos élèves ? Les catégories proposées dans le jeu ne vous suffisent plus ? Vous aimeriez en ajouter de nouvelles plus en rapport avec les thèmes actuels de la classe ? Cette application web est faite pour vous...",
        thumbnail: "vocatego.png",
        keywords: [
            "vocatego",
            "générateur",
            "cartes",
            "vocabulaire",
            "français",
        ],
    },
    {
        id: "video-tag",
        title: "Vidéo Tag",
        url: "video-tag",
        description:
            "Application web permettant de générer automatiquement le code avec la balise <video> nécessaire à l'insertion d'une vidéo dans une page html5.",
        thumbnail: "video-tag.png",
        keywords: [
            "video",
            "balise",
            "tag",
            "générateur",
            "outil",
            "html5",
            "divers",
        ],
    },
    {
        id: "wpprezi",
        title: "WP-Prezi",
        url: "wpprezi",
        description:
            "Application web permettant de générer automatiquement le shortcode nécessaire à l'insertion d'un Prezi dans un article sur un plog de la plateforme WordPress.com.",
        thumbnail: "wpprezi.png",
        keywords: [
            "wordpress",
            "prezi",
            "générateur",
            "outil",
            "shortcode",
            "divers",
        ],
    },
    {
        id: "ytsearch",
        title: "Youtube (SafeSearch Strict)",
        url: "ytsearch",
        description:
            "Application web permettant une recherche rapide sur Youtube avec le mode safeSearch à strict.",
        thumbnail: "ytsearch.png",
        keywords: ["youtube", "recherche", "outil", "divers"],
    },
    {
        id: "youtube",
        title: "Youtube (Les vidéos de MiCetF)",
        url: "youtube",
        description: "Chaîne YouTube de MiCetF.",
        thumbnail: "youtube.png",
        keywords: ["youtube", "chaîne", "vidéos", "tutoriels", "divers"],
    },
    {
        id: "4pions",
        title: "4 pions",
        url: "4pions",
        description:
            "Version mobile du jeu interactif Quatre pions et qui reprend l'activité du même nom proposée par D. Valentin pour les GS.",
        thumbnail: "4pions.png",
        keywords: [
            "pions",
            "orientation",
            "espace",
            "maths",
            "mathématiques",
            "problème",
            "résolution",
            "valentin",
        ],
    },
    {
        id: "natix",
        title: "Natix",
        url: "graduo/natix",
        description:
            "Application web permettant de manipuler les nombres entiers et leurs fractions sur une ligne graduée interactive. Idéale pour visualiser et comprendre la numération à l'école primaire.",
        thumbnail: "natix.png",
        keywords: [
            "ligne graduée",
            "nombres",
            "fractions",
            "numération",
            "maths",
            "mathématiques",
            "entiers",
        ],
    },
    {
        id: "crea-lecons",
        title: "Crea'Leçons",
        url: "crea-lecons",
        description:
            "Application web permettant de générer des fichiers PDF éducatifs pour créer des leçons manipulatives. Ces documents comprennent des calculs, des aides visuelles et des résultats, idéals pour un apprentissage interactif et différencié en mathématiques.",
        thumbnail: "crea-lecons.png",
        keywords: [
            "générateur",
            "leçons",
            "pdf",
            "manipulation",
            "maths",
            "mathématiques",
            "tables",
            "multiplication",
            "compléments",
            "calcul",
            "éducatif",
            "interactif",
        ],
    },
    {
        id: "chronix",
        title: "Chronix",
        url: "graduo/chronix",
        description:
            "Outil pédagogique pour visualiser et manipuler les durées et leurs fractions sur une ligne graduée temporelle. Permet de travailler les mesures de temps de façon interactive.",
        thumbnail: "chronix.png",
        keywords: [
            "temps",
            "durée",
            "mesure",
            "ligne graduée",
            "maths",
            "mathématiques",
            "heures",
            "minutes",
            "secondes",
        ],
    },
    {
        id: "zoomix",
        title: "Zoomix",
        url: "graduo/zoomix",
        description:
            "Application web proposant une ligne numérique zoomable et déplaçable pour explorer différentes échelles numériques. Permet de visualiser la continuité des nombres et de comprendre les relations entre nombres entiers et décimaux.",
        thumbnail: "zoomix.png",
        keywords: [
            "ligne graduée",
            "nombres",
            "échelles",
            "zoom",
            "maths",
            "mathématiques",
            "numération",
            "exploration",
        ],
    },
    {
        id: "graduo",
        title: "Graduo",
        url: "graduo",
        description:
            "Suite d'outils pédagogiques pour l'enseignement des mathématiques au primaire à travers des lignes graduées interactives. Comprend plusieurs applications spécialisées (Natix, Chronix, Zoomix) et d'autres en développement.",
        thumbnail: "graduo.png",
        keywords: [
            "ligne graduée",
            "suite",
            "collection",
            "maths",
            "mathématiques",
            "numération",
            "outils",
            "pédagogique",
        ],
    },
];

/**
 * Récupère une application par son identifiant
 *
 * @param {string} id - Identifiant de l'application
 * @returns {Object|null} L'application trouvée ou null
 */
export const getApplicationById = (id) => {
    return applications.find((app) => app.id === id) || null;
};

/**
 * Récupère les applications par domaine (mot-clé)
 *
 * @param {string} domaine - Le domaine/mot-clé à filtrer
 * @returns {Object[]} Liste des applications filtrées
 */
export const getApplicationsByDomain = (domaine) => {
    if (!domaine) return applications;
    return applications.filter((app) => app.keywords.includes(domaine));
};

/**
 * Fonction pour récupérer les outils par domaine
 * Maintenue pour la compatibilité avec le code existant
 *
 * @param {string} domaine - Le domaine à filtrer
 * @returns {Object[]} Outils filtrés par domaine
 */
export const outils = (domaine) => {
    return getApplicationsByDomain(domaine);
};

/**
 * Récupère les applications "amis" (partenaires)
 * Maintenue pour la compatibilité avec le code existant
 */
export const amis = [
    {
        id: "classetice",
        title: "Classe TICE",
        url: "https://classetice.fr/?lang=fr",
        description:
            "Portail des usages du numérique pour le premier degré, ce site a pour vocation de recenser et mutualiser des activités, des ressources et des outils numériques au service des disciplines de l'école primaire.",
        thumbnail: "classe_tice.png",
    },
    {
        id: "weblitoo",
        title: "Weblitoo",
        url: "https://weblitoo.net/favoris/",
        description:
            "Proposé par l'association PragmaTICE, ce site s'adresse aux élèves de cycle 3 et à leurs enseignants, qui peuvent en complément de l'annuaire collaboratif, créer leurs propres pages de liens via un espace \"Ma classe\".",
        thumbnail: "weblitoo.png",
    },
    {
        id: "clicouweb",
        title: "ClicouWeb",
        url: "https://clicouweb.net/",
        description:
            "Proposé par l'association PragmaTICE, ce site s'adresse aux élèves des cycles 1 & 2. Les sites référencés sont classés en 7 catégories selon les programmes 2008 de l'Education Nationale.",
        thumbnail: "clicouweb.png",
    },
    {
        id: "lakanal",
        title: "Lakanal",
        url: "http://lakanal.net/",
        description:
            "lakanal.net : site international de quartier. Ressources et outils pour le cycle 2 : GS - CP - CE1. Enseignant (suivant les années) en CP / CE1 / CE2 )",
        thumbnail: "lakanal.png",
    },
    {
        id: "moustache",
        title: "Maternelle de Moustache",
        url: "http://www.lamaternelledemoustache.net/",
        description:
            "Les enseignants trouveront ici des outils et des ressources pour l'école maternelle. Ni modèles, ni recettes, seulement quelques idées pour dépanner ou gagner du temps.",
        thumbnail: "moustache.png",
    },
    {
        id: "soutien67",
        title: "Soutien67",
        url: "http://soutien67.fr/",
        description:
            "Soutien scolaire gratuit - Ressources pour l'école élémentaire - Activités en ligne - Cours en ligne - Fiches imprimables. Niveaux : CP - CE1 - CE2 - CM1 - CM2. Domaines : Mathématiques - Français - Histoire - Géographie - Sciences",
        thumbnail: "soutien.png",
    },
    {
        id: "instit90",
        title: "Instit90",
        url: "http://sylvain.obholtz.free.fr",
        description:
            "Ce site est destiné aux professionnels de l'éducation, mais pourquoi pas aussi... aux parents de mes élèves !",
        thumbnail: "instit90.png",
    },
    {
        id: "monecole",
        title: "Mon école",
        url: "https://monecole.fr/",
        description:
            "Mon école | Plateforme pédagogique pour l'enseignant et ses élèves",
        thumbnail: "monecole.png",
    },
    {
        id: "scalpa",
        title: "SCALPA",
        url: "https://www.scalpa.info/",
        description:
            "Vous trouverez sur ce site de nombreuses ressources pour l'école primaire. : des leçons de grammaire, orthographe, conjugaison, accompagnées de matériels didatiques, Des logiciels simples de manipulation pour travailler des compétences en calcul mental, pour l'apprentissage des tables... La plupart d'entre eux permettent aussi de générer des exercices imprimables, ...",
        thumbnail: "scalpa.png",
    },
    {
        id: "lespareils",
        title: "Les petits dictionnaires des pareils",
        url: "http://www.pareils.fr/",
        description: "Du pareil au même, sur les chemins de l'abstraction...",
        thumbnail: "lespareils.png",
    },
    {
        id: "astro52",
        title: "Astro52",
        url: "https://astro52.com/",
        description:
            "Ressources pédagogiques pour l'école primaire : Logiciels, fiches, formation des enseignants.",
        thumbnail: "astro52.png",
    },
    {
        id: "logicieleducatif",
        title: "Logicieleducatif",
        url: "https://www.logicieleducatif.fr/",
        description:
            "Le site logicieleducatif.fr a pour objectif d'aider les élèves dans leurs apprentissages scolaires, grâce à des jeux éducatifs. Les jeux sont jouables en ligne, ils sont tous gratuits et aucune installation ni inscription n'est nécessaire. Tous les jeux ont été conçus par un enseignant spécialisé et formateur TUIC (Technique Usuelle de l'Information et de la Communication). D'autres enseignants (et techniciens) apportent régulièrement leur contribution.",
        thumbnail: "logicieleducatif.png",
    },
    {
        id: "ideesash",
        title: "Idées ASH",
        url: "https://sites.google.com/site/ideesash/",
        description:
            "Adaptations scolaires et Scolarisation des élèves porteurs de Handicap. Ce site témoigne de la réflexion d'un maître E sur ses pratiques, de ses remises en question, de Son cheminement professionnel et des valeurs qui sont les siennes.",
        thumbnail: "ideesash.png",
    },
    {
        id: "lasourisweb",
        title: "lasouris-web",
        url: "https://www.lasouris-web.org/",
        description:
            "Répertoire de sites éducatifs pour les élèves du préscolaire et du primaire. Le site lasouris-web vous propose des liens vers des sites, des exercices en ligne et des jeux éducatifs gratuits pour les élèves du préscolaire, du primaire et du secondaire.",
        thumbnail: "lasourisweb.png",
    },
];
