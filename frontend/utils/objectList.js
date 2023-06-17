const objectsList = [
  {
    image: "wallets.png",
    name: "Portefeuille, CB & argent",
    sousList: [
      {
        name: "Carte bleue",
        image: "CategoryA/blue_card.png",
      },
      {
        name: "Portefeuille, Porte-monnaie",
        image: "CategoryA/wallet.png",
      },
      {
        name: "Porte-carte",
        image: "CategoryA/wallet_card.png",
      },
      {
        name: "Argent, billet, monnaie",
        image: "CategoryA/money.png",
      },
      {
        name: "chéquiers",
        image: "CategoryA/chequebooks.png",
      },
      {
        name: "Autres",
        image: "autres.png",
      }
    ]
  },
  {
    image: "identifications.png",
    name: "Papier et documents officiel",
    sousList: [
      {
        name: "Carte d'identité",
        image: "CategoryB/id_card.png"
      },
      {
        name: "Passeport",
        image: "CategoryB/passeport.png"
      },
      {
        name: "Permis de conduire",
        image: "CategoryB/driver_license.png"
      },
      {
        name: "Carte nameinative diverse",
        image: "CategoryB/other_card.png"
      },
      {
        name: "Lettre, papier",
        image: "CategoryB/letter.png"
      },
      {
        name: "Titre de transport",
        image: "CategoryB/transport_card.png"
      },
      {
        name: "Carte grise",
        image: "CategoryB/car_card.png"
      },
      {
        name: "Carte de santé",
        image: "CategoryB/health_card.png"
      },
      {
        name: "Carte de fidélité",
        image: "CategoryB/fidelity_card.png"
      },
      {
        name: "Carnet de vaccination",
        image: "CategoryB/vaccination.png"
      },
      {
        name: "Carte professionnelle",
        image: "CategoryB/professional_card.png"
      },
      {
        name: "Titre de séjour",
        image: "CategoryB/residence_permit.png"
      },
      {
        name: "Permis bateau",
        image: "CategoryB/boating_licence.png"
      },
      {
        name: "Carte d'étudiant",
        image: "CategoryB/student_card.png"
      },
      {
        name: "Livret de famille",
        image: "CategoryB/family_record_book.png"
      },
      {
        name: "Classeur, pochette",
        image: "CategoryB/binder.png"
      },
      {
        name: "Carnet scolaire",
        image: "CategoryB/school_notebook.png"
      },
      {
        name: "Attestation de demande d'asile",
        image: "CategoryB/asylum_certificate.png"
      },
      {
        name: "Autres",
        image: "autres.png",
      }
    ]
  },
  {
    image: "bags.png",
    name: "Sacs & Bagages",
    sousList: [
      {
        name: "Sac",
        image: "CategoryC/bag.png"
      },
      {
        name: "Petite valise cabine (< 10kg)",
        image: "CategoryC/cabin_bag.png"
      },
      {
        name: "Grande valise soute (> 10kg)",
        image: "CategoryC/suitecase.png"
      },
      {
        name: "Sacoche, étui, trousse",
        image: "CategoryC/case.png"
      },
      {
        name: "Sac à main",
        image: "CategoryC/hand_bag.png"
      },
      {
        name: "Sac de courses",
        image: "CategoryC/shopping_bag.png"
      },
      {
        name: "Sac banane",
        image: "CategoryC/fanny_pack.png"
      },
      {
        name: "Autres",
        image: "autres.png",
      }
    ]
  },
  {
    image: "electronics.png",
    name: "Electronique",
    sousList: [
      {
        name: "Appareil photo / vidéo",
        image: "CategoryD/camera.png"
      },
      {
        name: "Casque audio",
        image: "CategoryD/earphone.png"
      },
      {
        name: "Ordinateur",
        image: "CategoryD/computer.png"
      },
      {
        name: "Petit électronique",
        image: "CategoryD/usb_key.png"
      },
      {
        name: "Tablette",
        image: "CategoryD/tablet.png"
      },
      {
        name: "Téléphone",
        image: "CategoryD/mobile.png"
      },
      {
        name: "Écouteurs",
        image: "CategoryD/listeners.png"
      },
      {
        name: "Lecteur électronique",
        image: "CategoryD/e_reader.png"
      },
      {
        name: "Montre connectée",
        image: "CategoryD/smartWatch.png"
      },
      {
        name: "Console Portable",
        image: "CategoryD/game_console.png"
      },
      {
        name: "Autres",
        image: "autres.png",
      }
    ]
  },
  {
    image: "kids.png",
    name: "Affaires d'enfants",
    sousList: [
      {
        name: "Jouet",
        image: "CategoryE/toy.png"
      },
      {
        name: "Accessoire puériculture",
        image: "CategoryE/baby_tools.png"
      },
      {
        name: "Doudou",
        image: "CategoryE/doll.png"
      },
      {
        name: "Poussette",
        image: "CategoryE/stroller.png"
      },
      {
        name: "Autres",
        image: "autres.png",
      }
    ]
  },
  {
    image: "jewelries.png",
    name: "Bijoux, montres",
    sousList: [
      {
        name: "Montre",
        image: "CategoryF/watch.png"
      },
      {
        name: "Bague",
        image: "CategoryF/ring.png"
      },
      {
        name: "Boucle d'oreille",
        image: "CategoryF/earring.png"
      },
      {
        name: "Bracelet",
        image: "CategoryF/bracelet.png"
      },
      {
        name: "Collier",
        image: "CategoryF/necklace.png"
      },
      {
        name: "Autres bijoux",
        image: "CategoryF/other_jewelry.png"
      },
      {
        name: "Autres",
        image: "autres.png",
      }
    ]
  },
  {
    image: "clothes.png",
    name: "Vêtements et accessoires",
    sousList: [
      {
        name: "Ceinture",
        image: "CategoryG/belt.png"
      },
      {
        name: "Chapeau",
        image: "CategoryG/hat.png"
      },
      {
        name: "Chaussures",
        image: "CategoryG/shoes.png"
      },
      {
        name: "Écharpe, foulard",
        image: "CategoryG/scarf.png"
      },
      {
        name: "Gants",
        image: "CategoryG/gloves.png"
      },
      {
        name: "Manteau, blouson",
        image: "CategoryG/pullover.png"
      },
      {
        name: "Maillot de bain",
        image: "CategoryG/swimsuit.png"
      },
      {
        name: "Autres vêtements",
        image: "CategoryG/other_clothes.png"
      },
      {
        name: "Autres",
        image: "autres.png",
      }
    ]
  },
  {
    image: "pets.png",
    name: "Animaux",
    sousList: [
      {
        name: "Chat",
        image: "CategoryH/cat.png"
      },
      {
        name: "Chien",
        image: "CategoryH/dog.png"
      },
      {
        name: "Autres",
        image: "autres.png",
      }
    ]
  },
  {
    image: "valuables.png",
    name: "Effets personnels",
    sousList: [
      {
        name: "Clés, bips, badges",
        image: "CategoryI/key.png"
      },
      {
        name: "Lunettes",
        image: "CategoryI/glasses.png"
      },
      {
        name: "Autres",
        image: "autres.png",
      }
    ]
  },
  {
    image: "sport_accessories.png",
    name: "Accessoires de sport",
    sousList: [
      {
        name: "Club de golf",
        image: "CategoryJ/golf_club.png"
      },
      {
        name: "Sac et chariot de golf",
        image: "CategoryJ/golf_bag_and_trolley.png"
      },
      {
        name: "Accessoires de golf",
        image: "CategoryJ/golf_accessories.png"
      },
      {
        name: "Balle",
        image: "CategoryJ/ball.png"
      },
      {
        name: "Deux roues",
        image: "CategoryJ/two_wheels.png"
      },
      {
        name: "Ski ou bâtons",
        image: "CategoryJ/ski_or_pole.png"
      },
      {
        name: "Raquette de tennis",
        image: "CategoryJ/tennis_racket.png"
      },
      {
        name: "Casque",
        image: "CategoryJ/sport_helmet.png"
      },
      {
        name: "Autres",
        image: "autres.png",
      }
    ]
  },
  {
    image: "various.png",
    name: "Divers",
    sousList: [
      {
        name: "Objet non référencé",
        image: "CategoryK/other_item.png"
      },
      {
        name: "Cosmétique",
        image: "CategoryK/cosmetics.png"
      },
      {
        name: "Livre, papeterie",
        image: "CategoryK/book.png"
      },
      {
        name: "Bouteille",
        image: "CategoryK/bottle.png"
      },
      {
        name: "Médicaments",
        image: "CategoryK/drugs.png"
      },
      {
        name: "Nourriture",
        image: "CategoryK/food.png"
      },
      {
        name: "Outillage",
        image: "CategoryK/tools.png"
      },
      {
        name: "Stylo",
        image: "CategoryK/pen.png"
      },
      {
        name: "Parapluie",
        image: "CategoryK/umbrella.png"
      },
      {
        name: "Casque de moto",
        image: "CategoryK/helmet.png"
      },
      {
        name: "Coussin pour la nuque",
        image: "CategoryK/neck_cushion.png"
      },
      {
        name: "Canne de marche",
        image: "CategoryK/cane.png"
      },
      {
        name: "Couteaux",
        image: "CategoryK/knife.png"
      },
      {
        name: "Autres couverts",
        image: "CategoryK/other_utensils.png"
      },
      {
        name: "Ciseaux",
        image: "CategoryK/scissors.png"
      },
      {
        name: "Armes",
        image: "CategoryK/weapons.png"
      },
      {
        name: "Appareil Auditif",
        image: "CategoryK/hearing_aid.png"
      },
      {
        name: "Cigarettes",
        image: "CategoryK/cigarettes.png"
      },
      {
        name: "Autres",
        image: "autres.png",
      }
    ]
  }
]

export default objectsList
