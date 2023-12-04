import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  projects = [
    {
      name: 'Club Café',
      image: 'assets/project1.png',
      frameworks: ['React', 'Symfony'],
      intro: 'Le projet "Club Café" a été conçu comme une plateforme dédiée aux habitués d\'un café associatif.',
      features: [
        'Grâce à cette interface, les utilisateurs peuvent :',
        'Consulter la liste des événements proposés par le café.',
        'Proposer un nouvel événement, en ajoutant simplement le nom de l\'événement, sa date, ainsi qu\'une brève description.',
        'Signifier leur participation à un événement spécifique. Pour ce faire, ils doivent renseigner leur nom, un numéro de téléphone, et sélectionner l\'événement auquel ils souhaitent participer.'
      ],
      additional: [
        'Le site a été développé en utilisant React pour la partie front-end et Symfony pour la partie back-end.',
        'L\'une des particularités du projet est qu\'il ne nécessite pas la création de compte pour les utilisateurs, ni un système de validation pour les événements.',
        'L\'objectif principal pour le gérant du café est de récolter les intentions de ses clients concernant les événements à venir.'
      ],
      gitLabLink: 'https://gitlab.com/labege_carbonne/labege-5/backend-cafe'
    },
    {
      name: 'Immo 3.0',
      image: 'assets/project2.png',
      frameworks: ['Vite', 'Symfony'],
      intro: 'Le projet "Immo 3.0" est une plateforme immobilière développée pour répondre aux besoins spécifiques de notre client.',
      features: [
        'Un espace back-office permettant au client de gérer ses annonces, les types de biens, les types de transactions, sa clientèle et son équipe.',
        'Une partie publique où les annonces de biens à vendre ou à louer sont diffusées pour le grand public.',
        'Un espace client sécurisé accessible via un login et un mot de passe. Les clients peuvent y visualiser les biens qu\'ils ont confiés à l\'agence, voir le nombre de consultations de l\'annonce, modifier le statut de l\'annonce (en ligne / hors ligne), et également mettre à jour leur profil.'
      ],
      additional: [
        'Le développement du site s\'est appuyé sur Vite pour le front-end et Symfony pour le back-end.',
        'Notre client a laissé libre cours à notre imagination pour la conception graphique, assurant une interface à la fois moderne et conviviale.'
      ],
      gitLabLink: 'https://gitlab.com/labege_carbonne/labege-5/imo-osama/-/blob/main/realstate_front+bck.zip'
    }
    ,
    {
      name: 'Mon Portfolio',
      image: 'assets/project3.png',
      frameworks: ['HTML5', 'CSS3', 'Font Awesome'],
      intro: 'Dans le cadre de ma formation de développeur web, j\'ai conçu et codé mon propre portfolio en tant que page statique.',
      features: [
        'Conception des wireframes pour les versions desktop et mobile avec l\'outil de mon choix.',
        'Réalisation des maquettes pour les versions desktop et mobile en utilisant un outil de ma sélection.',
        'Traduction de la maquette en code HTML et CSS tout en respectant les standards modernes et les balises sémantiques de l\'HTML5.',
        'Intégration de la bibliothèque Font Awesome pour incorporer des icônes de réseaux sociaux comme GitLab et LinkedIn.'
      ],
      additional: [
        'Le portfolio est structuré en trois pages essentielles : une page listant tous les projets, une page dédiée à un projet individuel, et une page de contact.',
        'La priorité a été mise sur une conception responsive afin d’assurer une compatibilité optimale sur tous les dispositifs, du desktop au mobile.'
      ],
      gitLabLink: 'https://gitlab.com/labege_carbonne/labege-5/mon-portfolio-osama/-/tree/master'
    }
    ,
    {
      name: 'Site Électricien - M. Ignicio Chavez',
      image: 'assets/project4.png',
      frameworks: ['Bootstrap'],
      intro: 'Conception d\'une page statique pour présenter l\'activité de M. Ignicio Chavez, un électricien renommé dans ma région.',
      features: [
        'Site réalisé sur une seule page en utilisant exclusivement Bootstrap.',
        'Intégration de la charte graphique basée sur un logo spécifique et deux couleurs principales.',
        'Présentation des activités professionnelles de M. Chavez : installations neuves, rénovation, vente de matériel, interventions d\'urgence, et expertise assurance.',
        'Intégration d\'un portrait de M. Chavez, ainsi qu\'un lien direct vers sa chaîne YouTube populaire.',
        'Organisation visuelle distincte pour chaque activité, avec accès rapide aux détails de chaque service.',
        'Inclusion d\'un carrousel d\'images montrant différentes réalisations de M. Chavez.',
        'Formulaire de contact détaillé pour des demandes de devis qualifiées.',
        'Pied de page informatif contenant les mentions légales, les coordonnées de contact, et une carte localisant le secteur d\'intervention de M. Chavez.'
      ],
      additional: [
        'Le design et la maquette du site ont été soumis à validation par mon formateur avant la finalisation, garantissant une conformité avec les attentes du client.',
        'Le site a été déployé en ligne en utilisant l\'outil surge.sh, répondant à la demande spécifique du client.',
        'https://macabre-idea.surge.sh/'
      ],
      gitLabLink: 'https://gitlab.com/labege_carbonne/labege-5/elec-ok'
    },
    {
      name: 'Simplon Website',
      image: 'assets/project5.png',
      frameworks: ['HTML5', 'CSS3', 'Javascript'],
      intro: 'Un projet d\'intégration d\'une nouvelle maquette pour le site web de Simplon, une mise à jour majeure pour rafraîchir leur présence en ligne.',
      features: [
        'Intégration stricte d\'une maquette fournie par les designers UX & UI de Simplon, assurant une réalisation fidèle à la vision initiale.',
        'Utilisation exclusive des langages HTML, CSS et Javascript pour l\'intégration.',
        'Mise en place d\'un menu burger avec un toggle en Javascript pour améliorer l\'expérience utilisateur sur les appareils mobiles.',
        'Intégration de deux carrousels : l\'un pour présenter les apprentis, nécessitant un clic pour passer au profil suivant, et l\'autre pour présenter les partenaires, défilant automatiquement.',
        'Optimisation pour une expérience utilisateur responsive, assurant une navigation fluide sur tous les appareils, du bureau au mobile.'
      ],
      additional: [
        'Développé avec l\'éditeur de code Visual Studio Code pour assurer un workflow efficace et organisé.',
        'Le code a été organisé méticuleusement pour garantir la maintenabilité et la lisibilité, respectant les meilleures pratiques de développement.',
        'Hébergement gratuit du site, en accord avec les spécifications du projet.',
        'L\'intégration vise la précision "Pixel perfect", assurant que le site final ressemble le plus possible à la maquette initiale.'
      ],
      gitLabLink: 'https://gitlab.com/labege_carbonne/labege-5/simplon-site-html-css/-/tree/master'
    },
    {
      name: "Aimantologue Website",
      image: "assets/project6.png",
      frameworks: ["WordPress"],
      intro: "Conception et mise en œuvre complète d'un site web pour Aimantologue, un projet client réalisé sur la plateforme CMS WordPress.",
      features: [
        "Mise en place de différentes sections et pages pour offrir une navigation complète et intuitive, incluant : Accueil, Articles, Contact, entre autres.",
        "Le site a été conçu en utilisant WordPress, permettant une gestion de contenu facile et une extensibilité future.",
        "Le thème du site a été soigneusement sélectionné par le client pour correspondre à la vision et à l'esthétique souhaitées.",
        "L'intégration du site a été optimisée pour assurer une expérience utilisateur fluide et réactive, quels que soient l'appareil et la taille de l'écran."
      ],
      additional: [
        "Le site est actuellement en ligne, reflétant la vision du client et offrant un espace numérique dédié à la spécialité de l'Aimantologie.",
        "Tout le développement a été effectué en étroite collaboration avec le client pour s'assurer que toutes les exigences et préférences sont prises en compte."
      ],
      gitLabLink: "https://www.aimantologue.com/"
    },
    

    {
      name: "Marka Ecommerce Application",
      image: "assets/markaapp.png",
      frameworks: ["Java Spring Boot", "React Native"],
      intro: "Développement en cours d'une application e-commerce complète pour Marka. Cette application est conçue pour offrir une solution globale pour les clients, les vendeurs, les super-administrateurs, ainsi que pour le système de livraison.",
      features: [
        "Mise en place d'un système robuste et évolutif avec Java Spring Boot pour la partie backend.",
        "Conception de l'application mobile avec React Native pour assurer une expérience utilisateur optimale sur les appareils mobiles.",
        "Intégration de divers rôles utilisateurs : client, vendeur, super-administrateur, et personnel de livraison. Chaque rôle possède des fonctionnalités et des permissions spécifiques pour une gestion efficace.",
        "Système de panier d'achat pour les clients, permettant une sélection et un achat fluides des produits.",
        "Zone dédiée pour les vendeurs afin qu'ils puissent gérer leurs produits, suivre les ventes et interagir avec les clients.",
        "Tableau de bord complet pour le super-administrateur pour superviser toutes les opérations, les vendeurs, les produits, et les transactions.",
        "Intégration d'un système de suivi des livraisons, permettant aux utilisateurs et aux livreurs de suivre l'état et l'emplacement des commandes en temps réel."
      ],
      additional: [
        "L'application est actuellement en phase de production, avec des tests continus pour assurer la qualité et la stabilité.",
        "Le développement s'effectue en étroite collaboration avec le client pour s'assurer que l'application répond à toutes ses exigences et préférences."
      ],
      gitLabLink: "https://gitlab.com/your_gitlab_repo_link_here"  // Replace with your actual link
    },
    {
      name: "Aldeka Health Company",
      image: "assets/dekahealth.png",
      frameworks: ["HTML", "CSS", "JavaScript"],
      intro: "Création d'un site web pour Aldeka Health Company, une entreprise de fournitures médicales. Il s'agit de l'un de mes premiers projets, réalisé en 2016, et le site est toujours en ligne et fonctionnel.",
      features: [
        "Développement du site à partir de zéro en utilisant les technologies de base du web : HTML, CSS, et JavaScript.",
        "Conception d'une interface utilisateur intuitive pour permettre une navigation fluide et présenter efficacement les produits médicaux de l'entreprise.",
        "Mise en œuvre de fonctionnalités interactives pour améliorer l'expérience utilisateur et faciliter la recherche de produits.",
        "Optimisation du site pour s'assurer qu'il soit rapide, réactif et compatible avec différents navigateurs web."
      ],
      additional: [
        "Ce projet représente un jalon important dans mon parcours en tant que développeur, soulignant mes compétences et mon engagement à produire un travail de qualité dès le début.",
        "Malgré les avancées technologiques depuis 2016, le site reste fonctionnel et pertinent, témoignant de la qualité et de la durabilité du code produit."
      ],
      gitLabLink: "https://www.dekahealth.net/"  // Replace with the actual link to the website or its repository if it's on GitLab or another platform.
    }

    ,
    {
      name: "Bibliothèque Personnelle de Livres",
      image: "assets/library.png",  // Mettre à jour avec l'image pertinente pour l'application de bibliothèque
      frameworks: ["Node.js", "Angular", "TypeScript", "Docker","SQL"],  // Inclure le framework front-end sélectionné et TypeScript
      "api": "GraphQL/REST",  // Spécifier le type d'API choisi
      intro: "Une application JavaScript full-stack pour gérer une bibliothèque personnelle de livres. Ce projet permet aux utilisateurs de maintenir une liste de livres avec des fonctionnalités telles qu'ajouter, modifier et supprimer des livres. Il est construit en utilisant des technologies web modernes et suit les meilleures pratiques de développement logiciel.",
      features: [
        "L'utilisateur peut voir une liste de ses livres avec des détails tels que le titre, l'auteur, des notes, la date de dernière modification, etc.",
        "Possibilité d'ajouter de nouveaux livres à la bibliothèque.",
        "Fonctionnalité pour modifier les propriétés des livres.",
        "Option pour supprimer des livres de la bibliothèque.",
        "Fonctionnalité de recherche pour filtrer les livres par titre.",
        "Design réactif pour une visualisation optimale sur différents appareils.",
        "Support multi-utilisateur (facultatif, sans authentification).",
        "Application Dockerisée pour un déploiement et une mise à l'échelle faciles."
      ],
      additional: [
        "Ce projet est un témoignage de mes compétences en développement full-stack, démontrant ma capacité à travailler avec une gamme de technologies et de frameworks.",
        "Il démontre ma capacité à construire des applications non seulement fonctionnelles mais aussi évolutives et conviviales."
      ],
      gitLabLink: "https://github.com/kabawn/Personal-library-full-stack"  // Remplacer par le lien réel vers le site web ou son dépôt s'il se trouve sur GitLab ou une autre plateforme.
    }
    
    
    
    
    
    
    // ... add more projects as needed
  ];

  constructor() { }

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number) {
    if (id >= 0 && id < this.projects.length) {
      return this.projects[id];
    }
    return null;
  }
}
