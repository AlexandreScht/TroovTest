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
        id: "cat00",
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
        id: "cat01",
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
        id: "cat02",
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
        id: "cat03",
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
        id: "cat04",
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
        id: "cat000",
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
        id: "cat10",
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
        id: "cat11",
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
        id: "cat12",
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
        id: "cat13",
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
        id: "cat14",
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
        id: "cat15",
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
        id: "cat16",
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
        id: "cat17",
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
        id: "cat18",
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
        id: "cat000",
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
        id: "cat20",
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
        id: "cat21",
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
        id: "cat22",
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
        id: "cat23",
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
        id: "cat24",
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
        id: "cat25",
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
        id: "cat26",
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
        id: "cat000",
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
        id: "cat30",
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
        id: "cat31",
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
        id: "cat32",
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
        id: "cat33",
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
        id: "cat34",
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
        id: "cat35",
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
        id: "cat36",
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
        id: "cat37",
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
        id: "cat38",
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
        id: "cat39",
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
        id: "cat000",
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
