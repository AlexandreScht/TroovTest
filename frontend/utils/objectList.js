import validations from "@/utils/validations"

const { required, maxSize, Number } = validations

const bankList = ["BNP paribas","Société Générale","Banque Populaire","Caisse d’Epargne","Crédit Agricole","Crédit Mutuel","LCL"]
const nationalityList = ["British","Canadian","German","French","Italian","Japanese","Spanish","Australian","Chinese"]

const objectsList = [
  {
    image: "wallets.png",
    name: "Portefeuille, CB & argent",
    sousList: [
      {
        name: "Carte bleue",
        image: "CategoryA/blue_card.png",
        form: {
          Type_of_card: {
            items: ["Visa", "Masterd Card", "American Express"],
            rule: [required("Type of card")],
          },
          Bank: {
            items: bankList,
            rule: [required("Bank")]
          }
        }
      },
      {
        name: "Portefeuille, Porte-monnaie",
        image: "CategoryA/wallet.png",
        form: {
          Mark: {},
          Modal: {},
          Color: {
            rule: [required("Color")],
          },
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Porte-carte",
        image: "CategoryA/wallet_card.png",
        form: {
          Mark: {},
          Modal: {},
          Color: {
            rule: [required("Color")],
          },
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Argent, billet, monnaie",
        image: "CategoryA/money.png",
        form: {
          Amount: {
            rule: [Number("Amount")]
          },
          Mentioned_bank: {
            items: bankList,
          },
        }
      },
      {
        name: "chéquiers",
        image: "CategoryA/chequebooks.png",
        form: {
          Amount: {
            rule: [Number("Amount")]
          },
          Mentioned_bank: {
            items: bankList,
          },
        }
      },
      {
        name: "Autres",
        image: "autres.png",
        form: {
          Object: {
            rule: [required("Object")]
          }
        }
      }
    ]
  },
  {
    image: "identifications.png",
    name: "Papier et documents officiel",
    sousList: [
      {
        name: "Carte d'identité",
        image: "CategoryB/id_card.png",
        form: {
          Nationality: {
            items: nationalityList,
            rule: [required("Nationality")]
          },
          Birthday: {
            type: "date",
            rule: [required("Birthday")]
          },
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Passeport",
        image: "CategoryB/passeport.png",
        form: {
          Nationality: {
            items: nationalityList,
            rule: [required("Nationality")]
          },
          Birthday: {
            type: "date",
            rule: [required("Birthday")]
          },
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Permis de conduire",
        image: "CategoryB/driver_license.png",
        form: {
          Nationality: {
            items: nationalityList,
            rule: [required("Nationality")]
          },
          Birthday: {
            type: "date",
            rule: [required("Birthday")]
          },
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Carte nameinative diverse",
        image: "CategoryB/other_card.png",
        form: {
          Birthday: {
            type: "date",
            rule: [required("Birthday")]
          },
          Type: {},
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Lettre, papier",
        image: "CategoryB/letter.png",
        form: {
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Titre de transport",
        image: "CategoryB/transport_card.png",
        form: {
          Birthday: {
            type: "date",
            rule: [required("Birthday")]
          },
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Carte grise",
        image: "CategoryB/car_card.png",
        form: {
          Registration: {
            rule: [required("Registration")]
          },
          Nationality: {
            items: nationalityList,
          },
        }
      },
      {
        name: "Carte de santé",
        image: "CategoryB/health_card.png",
        form: {
          Birthday: {
            type: "date",
            rule: [required("Birthday")]
          },
          Type: {},
        }
      },
      {
        name: "Carte de fidélité",
        image: "CategoryB/fidelity_card.png",
        form: {
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          },
          Type: {}, 
        }
      },
      {
        name: "Autres",
        image: "autres.png",
        form: {
          Object: {
            rule: [required("Object")]
          }
        }
      }
    ]
  },
  {
    image: "bags.png",
    name: "Sacs & Bagages",
    sousList: [
      {
        name: "Sac",
        image: "CategoryC/bag.png",
        form: {
          Mark: {},
          Modal: {},
          Color: {
            rule: [required("Color")],
          },
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Petite valise cabine (< 10kg)",
        image: "CategoryC/cabin_bag.png",
        form: {
          Mark: {},
          Modal: {},
          Color: {
            rule: [required("Color")],
          },
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Grande valise soute (> 10kg)",
        image: "CategoryC/suitecase.png",
        form: {
          Mark: {},
          Modal: {},
          Color: {
            rule: [required("Color")],
          },
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Sacoche, étui, trousse",
        image: "CategoryC/case.png",
        form: {
          Mark: {},
          Modal: {},
          Color: {
            rule: [required("Color")],
          },
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Sac à main",
        image: "CategoryC/hand_bag.png",
        form: {
          Mark: {},
          Modal: {},
          Color: {
            rule: [required("Color")],
          },
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Sac de courses",
        image: "CategoryC/shopping_bag.png",
        form: {
          Mark: {},
          Modal: {},
          Color: {
            rule: [required("Color")],
          },
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Sac banane",
        image: "CategoryC/fanny_pack.png",
        form: {
          Mark: {},
          Modal: {},
          Color: {
            rule: [required("Color")],
          },
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Autres",
        image: "autres.png",
        form: {
          Object: {
            rule: [required("Object")]
          }
        }
      }
    ]
  },
  {
    image: "electronics.png",
    name: "Electronique",
    sousList: [
      {
        name: "Appareil photo / vidéo",
        image: "CategoryD/camera.png",
        form: {
          Mark: {},
          Modal: {},
          Color: {
            rule: [required("Color")],
          },
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Casque audio",
        image: "CategoryD/earphone.png",
        form: {
          Mark: {},
          Modal: {},
          Color: {
            rule: [required("Color")],
          },
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Ordinateur",
        image: "CategoryD/computer.png",
        form: {
          Mark: {},
          Modal: {},
          Color: {
            rule: [required("Color")],
          },
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Petit électronique",
        image: "CategoryD/usb_key.png",
        form: {
          Mark: {},
          Modal: {},
          Color: {
            rule: [required("Color")],
          },
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Tablette",
        image: "CategoryD/tablet.png",
        form: {
          Mark: {},
          Modal: {},
          Color: {
            rule: [required("Color")],
          },
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Téléphone",
        image: "CategoryD/mobile.png",
        form: {
          Mark: {},
          Modal: {},
          Color: {
            rule: [required("Color")],
          },
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Écouteurs",
        image: "CategoryD/listeners.png",
        form: {
          Mark: {},
          Modal: {},
          Color: {
            rule: [required("Color")],
          },
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Lecteur électronique",
        image: "CategoryD/e_reader.png",
        form: {
          Mark: {},
          Modal: {},
          Color: {
            rule: [required("Color")],
          },
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Montre connectée",
        image: "CategoryD/smartWatch.png",
        form: {
          Mark: {},
          Modal: {},
          Color: {
            rule: [required("Color")],
          },
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Console Portable",
        image: "CategoryD/game_console.png",
        form: {
          Mark: {},
          Modal: {},
          Color: {
            rule: [required("Color")],
          },
          Picture: {
            type: "file",
            rule: [maxSize("Picture", 2000000)]
          }
        }
      },
      {
        name: "Autres",
        image: "autres.png",
        form: {
          Object: {
            rule: [required("Object")]
          }
        }
      }
    ]
  }
]

export default objectsList
