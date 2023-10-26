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
