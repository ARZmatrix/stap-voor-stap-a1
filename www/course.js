/* Stap voor Stap A1 — cursusinhoud (Nederlands + Arabisch). Eén bron voor de app en het studieboek. */
(function (root) {
const COURSE = {
 "SCENES": {
  "street": {
   "icon": "🏙️",
   "label": "Op straat"
  },
  "school": {
   "icon": "🏫",
   "label": "Taalschool"
  },
  "phone": {
   "icon": "📞",
   "label": "Telefoongesprek"
  },
  "office": {
   "icon": "🏛️",
   "label": "Gemeente"
  },
  "home": {
   "icon": "🏠",
   "label": "Thuis"
  },
  "work": {
   "icon": "🏭",
   "label": "Op het werk"
  },
  "shop": {
   "icon": "🛒",
   "label": "Supermarkt"
  },
  "clothes": {
   "icon": "👕",
   "label": "Kledingwinkel"
  },
  "station": {
   "icon": "🚉",
   "label": "Station"
  },
  "doctor": {
   "icon": "🩺",
   "label": "Huisarts"
  },
  "library": {
   "icon": "📚",
   "label": "Bibliotheek"
  },
  "radio": {
   "icon": "📻",
   "label": "Radio"
  },
  "schoolyard": {
   "icon": "🧒",
   "label": "Schoolplein"
  },
  "market": {
   "icon": "🍅",
   "label": "Markt"
  },
  "dentist": {
   "icon": "🦷",
   "label": "Tandarts"
  }
 },
 "DAYS": [
  {
   "id": 1,
   "week": 1,
   "nl": "Hallo! Groeten en uitspraak",
   "ar": "مرحبًا! التحية والنطق",
   "can": "Ik kan groeten, afscheid nemen en bedanken. Ik kan de Nederlandse klanken uitspreken.",
   "canAr": "أستطيع أن ألقي التحية وأودّع وأشكر. أستطيع نطق أصوات اللغة الهولندية.",
   "vocab": [
    [
     "hallo",
     "مرحبًا"
    ],
    [
     "goedemorgen",
     "صباح الخير"
    ],
    [
     "goedemiddag",
     "نهارك سعيد (بعد الظهر)"
    ],
    [
     "goedenavond",
     "مساء الخير"
    ],
    [
     "tot ziens",
     "إلى اللقاء"
    ],
    [
     "dag / doei",
     "وداعًا (doei = غير رسمي)"
    ],
    [
     "Hoe gaat het?",
     "كيف الحال؟"
    ],
    [
     "goed",
     "جيد / بخير"
    ],
    [
     "dank u wel / dank je wel",
     "شكرًا جزيلًا (رسمي / غير رسمي)"
    ],
    [
     "graag gedaan",
     "على الرحب والسعة"
    ],
    [
     "alstublieft / alsjeblieft",
     "من فضلك / تفضّل"
    ],
    [
     "ja / nee",
     "نعم / لا"
    ],
    [
     "sorry / pardon",
     "آسف / عفوًا"
    ],
    [
     "meneer / mevrouw",
     "السيد / السيدة"
    ],
    [
     "u / jij (je)",
     "أنت (رسمي / غير رسمي)"
    ]
   ],
   "gram": {
    "t": "Uitspraak — klinkers en medeklinkers",
    "ar": "الإملاء الهولندي منتظم: إذا عرفت هذه الأصوات تستطيع قراءة أي كلمة. استعمل \"u\" مع الغرباء والموظفين والأطباء والمعلمين، واستعمل \"jij / je\" مع الأصدقاء والعائلة والأطفال.",
    "head": [
     "Letters",
     "Voorbeeld",
     "Tip (العربية)"
    ],
    "rows": [
     [
      "aa",
      "naam, maandag",
      "ألف طويلة مثل «باب»"
     ],
     [
      "ie",
      "niet, drie",
      "ياء طويلة: «ـِي»"
     ],
     [
      "oe",
      "goed, boek",
      "واو طويلة: «ـُو»"
     ],
     [
      "ij / ei",
      "wij, ijs / klein, eieren",
      "نفس الصوت: «ـَيْ»"
     ],
     [
      "ou / au",
      "oud / auto",
      "«ـَوْ» كما في «لَوْ»"
     ],
     [
      "ui",
      "huis, uit",
      "لا مقابل له: افتح الفم وقل «آو» مع ضمّ الشفتين"
     ],
     [
      "eu",
      "euro, deur",
      "لا مقابل له: قل «إي» مع ضمّ الشفتين"
     ],
     [
      "uu / u",
      "vuur, u",
      "قل «ـِي» مع ضمّ الشفتين"
     ],
     [
      "g / ch",
      "goed, acht",
      "مثل «خ» (في الجنوب أنعم، قريب من «غ»)"
     ],
     [
      "sch",
      "school",
      "س + خ"
     ],
     [
      "p ≠ b",
      "pen / ben",
      "لا يوجد p في العربية: أغلق الشفتين بدون صوت"
     ],
     [
      "v ≠ f",
      "vier / fiets",
      "v أنعم من f"
     ]
    ],
    "ex": [
     [
      "Goedemorgen, meneer.",
      "صباح الخير يا سيدي."
     ],
     [
      "Hoe gaat het met u?",
      "كيف حالك؟ (رسمي)"
     ],
     [
      "Hoe gaat het met jou?",
      "كيف حالك؟ (غير رسمي)"
     ]
    ],
    "nl": "De Nederlandse spelling is regelmatig. Ken je deze klanken, dan kun je elk woord lezen. Zeg \"u\" tegen onbekenden, ambtenaren, artsen en docenten. Zeg \"jij / je\" tegen vrienden, familie en kinderen."
   },
   "listen": {
    "scene": "street",
    "who": {
     "A": [
      "Mevrouw De Vries",
      "f"
     ],
     "B": [
      "Meneer Haddad",
      "m"
     ]
    },
    "lines": [
     [
      "A",
      "Goedemorgen, meneer Haddad."
     ],
     [
      "B",
      "Goedemorgen, mevrouw De Vries. Hoe gaat het met u?"
     ],
     [
      "A",
      "Goed, dank u wel. En met u?"
     ],
     [
      "B",
      "Ook goed, dank u."
     ],
     [
      "A",
      "Fijne dag! Tot ziens."
     ],
     [
      "B",
      "Dag, tot ziens!"
     ]
    ],
    "qs": [
     [
      "Welk deel van de dag is het?",
      [
       "de ochtend",
       "de middag",
       "de avond"
      ],
      0
     ],
     [
      "Hoe gaat het met mevrouw De Vries?",
      [
       "goed",
       "niet goed",
       "ze is ziek"
      ],
      0
     ],
     [
      "Zeggen ze \"u\" of \"jij\"?",
      [
       "u",
       "jij"
      ],
      0
     ]
    ]
   },
   "read": {
    "title": "Berichtjes op de telefoon",
    "text": "Sara: Hoi Ali! Hoe gaat het?\nAli: Hoi Sara! Goed, dank je. En met jou?\nSara: Ook goed! Tot morgen!\nAli: Doei!",
    "qs": [
     [
      "Zeggen Sara en Ali \"u\" of \"je/jij\"?",
      [
       "u",
       "je / jij"
      ],
      1
     ],
     [
      "Wat betekent \"Doei\"?",
      [
       "Dag (informeel)",
       "Dank je",
       "Goedemorgen"
      ],
      0
     ],
     [
      "Zien Sara en Ali elkaar morgen?",
      [
       "ja",
       "nee"
      ],
      0
     ]
    ]
   },
   "write": {
    "nl": "Schrijf wat u zegt.",
    "ar": "اكتب ماذا تقول: (1) الساعة 9:00 لجارك، (2) الساعة 20:00 لمعلّمك، (3) عندما تغادر.",
    "model": "1. Goedemorgen!\n2. Goedenavond, meneer / mevrouw.\n3. Tot ziens!",
    "check": [
     "3 antwoorden",
     "juiste groet bij de tijd",
     "\"meneer/mevrouw\" bij de docent"
    ],
    "task": "Wat zegt u? (1) Om 9.00 uur tegen uw buurman. (2) Om 20.00 uur tegen uw docent. (3) Als u weggaat."
   },
   "speak": [
    [
     "Goedemorgen! Hoe gaat het met u?",
     "صباح الخير! كيف حالك؟",
     "Goedemorgen. Goed, dank u wel. En met u?"
    ],
    [
     "Dank u wel!",
     "شكرًا جزيلًا!",
     "Graag gedaan."
    ],
    [
     "U gaat weg. Wat zegt u?",
     "أنت تغادر. ماذا تقول؟",
     "Tot ziens! Fijne dag!"
    ]
   ],
   "quiz": [
    [
     "9:00 uur. U zegt: …",
     [
      "Goedemorgen",
      "Goedenavond",
      "Goedemiddag"
     ],
     0
    ],
    [
     "20:00 uur. U zegt: …",
     [
      "Goedemorgen",
      "Goedenavond",
      "Goedemiddag"
     ],
     1
    ],
    [
     "Tegen de dokter zegt u: …",
     [
      "Hoe gaat het met jou?",
      "Hoe gaat het met u?"
     ],
     1
    ],
    [
     "Welk woord heeft dezelfde klank als \"ij\" in \"wij\"?",
     [
      "klein",
      "kleur",
      "koek"
     ],
     0
    ],
    [
     "Iemand zegt \"Dank u wel\". U zegt: …",
     [
      "Graag gedaan",
      "Goedemorgen",
      "Sorry"
     ],
     0
    ],
    [
     "Een informeel woord voor \"tot ziens\" is: …",
     [
      "doei",
      "meneer",
      "alstublieft"
     ],
     0
    ]
   ]
  },
  {
   "id": 2,
   "week": 1,
   "nl": "Ik ben … Mezelf voorstellen",
   "ar": "أنا … التعريف بالنفس",
   "can": "Ik kan zeggen hoe ik heet, waar ik vandaan kom, waar ik woon en welke talen ik spreek.",
   "canAr": "أستطيع أن أقول اسمي ومن أين أنا وأين أسكن وما هي اللغات التي أتكلمها.",
   "vocab": [
    [
     "de naam",
     "الاسم"
    ],
    [
     "heten",
     "يُسمّى"
    ],
    [
     "komen uit",
     "يأتي من"
    ],
    [
     "wonen in",
     "يسكن في"
    ],
    [
     "spreken",
     "يتكلّم"
    ],
    [
     "de taal",
     "اللغة"
    ],
    [
     "het land",
     "البلد"
    ],
    [
     "Arabisch",
     "العربية"
    ],
    [
     "Engels",
     "الإنجليزية"
    ],
    [
     "Nederlands",
     "الهولندية"
    ],
    [
     "een beetje",
     "قليلًا"
    ],
    [
     "getrouwd",
     "متزوّج"
    ],
    [
     "de man / de vrouw",
     "الرجل، الزوج / المرأة، الزوجة"
    ],
    [
     "het kind",
     "الطفل"
    ]
   ],
   "gram": {
    "t": "zijn en hebben",
    "ar": "أهم فعلين في اللغة. احفظهما. للعمر نستعمل zijn: Ik ben 30 jaar (وليس ik heb).",
    "head": [
     "",
     "zijn — يكون",
     "hebben — يملك"
    ],
    "rows": [
     [
      "ik",
      "ben",
      "heb"
     ],
     [
      "jij / je",
      "bent",
      "hebt"
     ],
     [
      "u",
      "bent",
      "hebt / heeft"
     ],
     [
      "hij / zij (ze) / het",
      "is",
      "heeft"
     ],
     [
      "wij / we",
      "zijn",
      "hebben"
     ],
     [
      "jullie",
      "zijn",
      "hebben"
     ],
     [
      "zij / ze (meervoud)",
      "zijn",
      "hebben"
     ]
    ],
    "ex": [
     [
      "Ik ben Ahmad.",
      "أنا أحمد."
     ],
     [
      "Zij heeft twee kinderen.",
      "لديها طفلان."
     ],
     [
      "Bent u getrouwd?",
      "هل أنت متزوج؟"
     ]
    ],
    "nl": "Dit zijn de twee belangrijkste werkwoorden. Leer ze uit je hoofd. Voor leeftijd gebruik je zijn: Ik ben 30 jaar (niet: ik heb 30 jaar)."
   },
   "listen": {
    "scene": "school",
    "who": {
     "A": [
      "Docent Anne",
      "f"
     ],
     "B": [
      "Ahmad",
      "m"
     ]
    },
    "lines": [
     [
      "A",
      "Goedemorgen. Ik ben Anne, de docent. Wat is uw naam?"
     ],
     [
      "B",
      "Mijn naam is Ahmad Khalil."
     ],
     [
      "A",
      "Waar komt u vandaan?"
     ],
     [
      "B",
      "Ik kom uit Syrië."
     ],
     [
      "A",
      "En waar woont u nu?"
     ],
     [
      "B",
      "Ik woon in Eindhoven."
     ],
     [
      "A",
      "Welke talen spreekt u?"
     ],
     [
      "B",
      "Ik spreek Arabisch en een beetje Engels."
     ]
    ],
    "qs": [
     [
      "Waar komt Ahmad vandaan?",
      [
       "Syrië",
       "Irak",
       "Marokko"
      ],
      0
     ],
     [
      "Waar woont hij?",
      [
       "Utrecht",
       "Eindhoven",
       "Tilburg"
      ],
      1
     ],
     [
      "Welke talen spreekt Ahmad?",
      [
       "Arabisch en Engels",
       "Arabisch en Nederlands",
       "alleen Arabisch"
      ],
      0
     ]
    ]
   },
   "read": {
    "title": "Wie is Fatima?",
    "text": "Hallo! Ik ben Fatima. Ik kom uit Irak. Ik woon in Veghel. Ik ben getrouwd. Mijn man heet Omar. Wij hebben twee kinderen. Ik spreek Arabisch en een beetje Nederlands.",
    "qs": [
     [
      "Waar woont Fatima?",
      [
       "in Irak",
       "in Veghel",
       "in Eindhoven"
      ],
      1
     ],
     [
      "Hoe heet haar man?",
      [
       "Omar",
       "Ahmad",
       "Ali"
      ],
      0
     ],
     [
      "Hoeveel kinderen hebben ze?",
      [
       "een",
       "twee",
       "drie"
      ],
      1
     ]
    ]
   },
   "write": {
    "nl": "Schrijf 4 zinnen over uzelf.",
    "ar": "اكتب 4 جمل عن نفسك: الاسم، البلد، المدينة، اللغات.",
    "model": "Mijn naam is Fatima. Ik kom uit Irak. Ik woon in Veghel. Ik spreek Arabisch en een beetje Nederlands.",
    "check": [
     "naam",
     "land",
     "woonplaats",
     "talen",
     "elke zin met een hoofdletter en een punt"
    ],
    "task": "Schrijf 4 zinnen over uzelf: naam, land, woonplaats en talen."
   },
   "speak": [
    [
     "Wat is uw naam?",
     "ما اسمك؟",
     "Mijn naam is … / Ik heet …"
    ],
    [
     "Waar komt u vandaan?",
     "من أين أنت؟",
     "Ik kom uit Syrië."
    ],
    [
     "Bent u getrouwd?",
     "هل أنت متزوج؟",
     "Ja, ik ben getrouwd. / Nee, ik ben niet getrouwd."
    ]
   ],
   "quiz": [
    [
     "Ik ___ Ahmad.",
     [
      "ben",
      "is",
      "bent"
     ],
     0
    ],
    [
     "Wij ___ twee kinderen.",
     [
      "heeft",
      "hebben",
      "hebt"
     ],
     1
    ],
    [
     "___ u getrouwd?",
     [
      "Ben",
      "Is",
      "Bent"
     ],
     2
    ],
    [
     "Zij (enkelvoud) ___ een dochter.",
     [
      "heeft",
      "hebben",
      "heb"
     ],
     0
    ],
    [
     "Hoe zegt u \"عمري 30 سنة\"?",
     [
      "Ik heb 30 jaar.",
      "Ik ben 30 jaar."
     ],
     1
    ],
    [
     "Jullie ___ in Nederland.",
     [
      "zijn",
      "is",
      "bent"
     ],
     0
    ]
   ]
  },
  {
   "id": 3,
   "week": 1,
   "nl": "Getallen, adres en telefoonnummer",
   "ar": "الأرقام والعنوان ورقم الهاتف",
   "can": "Ik kan getallen tot 100 zeggen en verstaan. Ik kan mijn adres, postcode en telefoonnummer geven en mijn naam spellen.",
   "canAr": "أستطيع أن أقول وأفهم الأرقام حتى 100، وعنواني ورمزي البريدي ورقم هاتفي، وأن أتهجّى اسمي.",
   "vocab": [
    [
     "nul, een, twee, drie, vier",
     "صفر، واحد، اثنان، ثلاثة، أربعة"
    ],
    [
     "vijf, zes, zeven, acht, negen, tien",
     "خمسة … عشرة"
    ],
    [
     "elf, twaalf, dertien, veertien",
     "أحد عشر … أربعة عشر"
    ],
    [
     "twintig, dertig, veertig, vijftig",
     "عشرون، ثلاثون، أربعون، خمسون"
    ],
    [
     "zestig, zeventig, tachtig, negentig, honderd",
     "ستون … مئة"
    ],
    [
     "het adres",
     "العنوان"
    ],
    [
     "de straat",
     "الشارع"
    ],
    [
     "het huisnummer",
     "رقم المنزل"
    ],
    [
     "de postcode",
     "الرمز البريدي"
    ],
    [
     "de woonplaats",
     "مكان الإقامة"
    ],
    [
     "het telefoonnummer",
     "رقم الهاتف"
    ],
    [
     "spellen",
     "يتهجّى"
    ],
    [
     "het e-mailadres",
     "البريد الإلكتروني"
    ]
   ],
   "gram": {
    "t": "Getallen en het alfabet",
    "ar": "من 21 إلى 99 نقول الآحاد أولًا مثل العربية تمامًا: 21 = eenentwintig (واحد وعشرون). الرمز البريدي الهولندي = 4 أرقام + حرفان، مثلًا 5462 AB.",
    "head": [
     "getal",
     "Nederlands",
     "العربية"
    ],
    "rows": [
     [
      "21",
      "eenentwintig",
      "واحد وعشرون"
     ],
     [
      "32",
      "tweeëndertig",
      "اثنان وثلاثون"
     ],
     [
      "45",
      "vijfenveertig",
      "خمسة وأربعون"
     ],
     [
      "58",
      "achtenvijftig",
      "ثمانية وخمسون"
     ],
     [
      "99",
      "negenennegentig",
      "تسعة وتسعون"
     ],
     [
      "100",
      "honderd",
      "مئة"
     ],
     [
      "250",
      "tweehonderdvijftig",
      "مئتان وخمسون"
     ]
    ],
    "ex": [
     [
      "A – B – C – D – E – F – G – H – I – J – K – L – M",
      "aa, bee, see, dee, ee, ef, gee, haa, ie, jee, kaa, el, em"
     ],
     [
      "N – O – P – Q – R – S – T – U – V – W – X – Y – Z",
      "en, oo, pee, kuu, er, es, tee, uu, vee, wee, iks, ij, zet"
     ]
    ],
    "nl": "Van 21 tot 99 zeg je eerst de eenheden, net als in het Arabisch: 21 = eenentwintig. Een Nederlandse postcode heeft 4 cijfers en 2 letters, bijvoorbeeld 5462 AB."
   },
   "listen": {
    "scene": "phone",
    "who": {
     "A": [
      "Medewerker taalschool",
      "f"
     ],
     "B": [
      "Omar",
      "m"
     ]
    },
    "lines": [
     [
      "A",
      "Taalschool De Brug, goedemiddag."
     ],
     [
      "B",
      "Goedemiddag. Ik wil graag Nederlandse les."
     ],
     [
      "A",
      "Prima. Wat is uw naam?"
     ],
     [
      "B",
      "Omar Saleh. Saleh: S – A – L – E – H.",
      "Omar Saleh. Saleh: es, aa, el, ee, haa."
     ],
     [
      "A",
      "En wat is uw adres?"
     ],
     [
      "B",
      "Kerkstraat 12, in Veghel.",
      "Kerkstraat twaalf, in Veghel."
     ],
     [
      "A",
      "Wat is uw postcode?"
     ],
     [
      "B",
      "5462 AB.",
      "vijf, vier, zes, twee, aa, bee."
     ],
     [
      "A",
      "En uw telefoonnummer?"
     ],
     [
      "B",
      "06 18 47 23 95.",
      "nul zes, achttien, zevenenveertig, drieëntwintig, vijfennegentig."
     ]
    ],
    "qs": [
     [
      "Wat is het huisnummer van Omar?",
      [
       "2",
       "12",
       "20"
      ],
      1
     ],
     [
      "Wat is de postcode?",
      [
       "5462 AB",
       "5426 AB",
       "5462 BA"
      ],
      0
     ],
     [
      "Wat is het telefoonnummer?",
      [
       "06 18 47 23 95",
       "06 18 74 23 95",
       "06 80 47 32 95"
      ],
      0
     ]
    ]
   },
   "read": {
    "title": "Kaartje van de huisarts",
    "text": "Huisartsenpraktijk De Linde\nHoofdstraat 45\n5461 JK Veghel\nTelefoon: 0413 - 36 52 10\nSpoed: bel 0413 - 36 52 11\nE-mail: info@delinde-voorbeeld.nl",
    "qs": [
     [
      "Wat is het huisnummer?",
      [
       "45",
       "54",
       "46"
      ],
      0
     ],
     [
      "Welk nummer belt u bij spoed?",
      [
       "0413 - 36 52 11",
       "0413 - 36 52 10"
      ],
      0
     ],
     [
      "In welke plaats is de praktijk?",
      [
       "Veghel",
       "Eindhoven",
       "De Linde"
      ],
      0
     ]
    ]
   },
   "write": {
    "nl": "Vul het formulier in.",
    "ar": "املأ الاستمارة ببياناتك (يمكنك أن تخترع بيانات للتدريب).",
    "form": [
     "Voornaam",
     "Achternaam",
     "Straat en huisnummer",
     "Postcode",
     "Woonplaats",
     "Telefoonnummer",
     "E-mailadres"
    ],
    "model": "Voornaam: Omar\nAchternaam: Saleh\nStraat en huisnummer: Kerkstraat 12\nPostcode: 5462 AB\nWoonplaats: Veghel\nTelefoonnummer: 06 18 47 23 95\nE-mailadres: omar.saleh@voorbeeld.nl",
    "check": [
     "alle velden ingevuld",
     "postcode: 4 cijfers + 2 letters",
     "namen met een hoofdletter"
    ],
    "task": "Vul het formulier in met uw gegevens. Voor de oefening mag u gegevens verzinnen."
   },
   "speak": [
    [
     "Wat is uw telefoonnummer?",
     "ما رقم هاتفك؟",
     "Mijn telefoonnummer is nul zes, achttien, …"
    ],
    [
     "Wat is uw adres?",
     "ما عنوانك؟",
     "Mijn adres is Kerkstraat 12 in Veghel."
    ],
    [
     "Kunt u uw achternaam spellen?",
     "هل يمكنك تهجئة اسم عائلتك؟",
     "Ja: S – A – L – E – H."
    ]
   ],
   "quiz": [
    [
     "27 =",
     [
      "zevenentwintig",
      "twintigzeven",
      "tweeënzeventig"
     ],
     0
    ],
    [
     "\"vierenvijftig\" =",
     [
      "45",
      "54",
      "44"
     ],
     1
    ],
    [
     "13 =",
     [
      "dertien",
      "dertig",
      "drieëntwintig"
     ],
     0
    ],
    [
     "80 =",
     [
      "achttien",
      "tachtig",
      "achtig"
     ],
     1
    ],
    [
     "Een Nederlandse postcode is …",
     [
      "4 cijfers + 2 letters",
      "5 cijfers",
      "2 letters + 4 cijfers"
     ],
     0
    ],
    [
     "Hoe spreekt u de letter \"J\" uit?",
     [
      "jee",
      "ie",
      "gee"
     ],
     0
    ]
   ]
  },
  {
   "id": 4,
   "week": 1,
   "nl": "De klok, dagen en een afspraak",
   "ar": "الساعة والأيام وتحديد موعد",
   "can": "Ik kan zeggen hoe laat het is, de dagen en maanden noemen en een eenvoudige afspraak maken.",
   "canAr": "أستطيع قراءة الساعة وتسمية الأيام والشهور وتحديد موعد بسيط.",
   "vocab": [
    [
     "maandag, dinsdag, woensdag",
     "الاثنين، الثلاثاء، الأربعاء"
    ],
    [
     "donderdag, vrijdag, zaterdag, zondag",
     "الخميس، الجمعة، السبت، الأحد"
    ],
    [
     "vandaag / morgen / gisteren",
     "اليوم / غدًا / أمس"
    ],
    [
     "de week / de maand / het jaar",
     "الأسبوع / الشهر / السنة"
    ],
    [
     "het uur",
     "الساعة"
    ],
    [
     "de minuut",
     "الدقيقة"
    ],
    [
     "half",
     "نصف"
    ],
    [
     "kwart",
     "ربع"
    ],
    [
     "over / voor",
     "بعد / إلا (في الوقت)"
    ],
    [
     "de afspraak",
     "الموعد"
    ],
    [
     "open / dicht (gesloten)",
     "مفتوح / مغلق"
    ],
    [
     "Hoe laat is het?",
     "كم الساعة؟"
    ]
   ],
   "gram": {
    "t": "Klokkijken",
    "ar": "انتبه: \"half vier\" تعني 3:30 (نصف الطريق إلى الرابعة) وليس 4:30. اللافتات والجداول تستعمل 24 ساعة (14.30 uur)، وفي الكلام يقول الناس عادةً \"half drie\". الشهور: يناير … ديسمبر (انظر النص الهولندي).",
    "head": [
     "tijd",
     "Nederlands",
     "العربية"
    ],
    "rows": [
     [
      "8:00",
      "acht uur",
      "الثامنة"
     ],
     [
      "8:05",
      "vijf over acht",
      "الثامنة وخمس دقائق"
     ],
     [
      "8:15",
      "kwart over acht",
      "الثامنة والربع"
     ],
     [
      "8:25",
      "vijf voor half negen",
      "الثامنة وخمس وعشرون دقيقة"
     ],
     [
      "8:30",
      "half negen",
      "الثامنة والنصف"
     ],
     [
      "8:35",
      "vijf over half negen",
      "الثامنة وخمس وثلاثون دقيقة"
     ],
     [
      "8:45",
      "kwart voor negen",
      "التاسعة إلا ربعًا"
     ],
     [
      "8:50",
      "tien voor negen",
      "التاسعة إلا عشر دقائق"
     ]
    ],
    "ex": [
     [
      "Het is half vier.",
      "الساعة الثالثة والنصف."
     ],
     [
      "De les begint om kwart over negen.",
      "يبدأ الدرس الساعة التاسعة والربع."
     ],
     [
      "Mijn afspraak is op dinsdag 3 november.",
      "موعدي يوم الثلاثاء 3 نوفمبر."
     ]
    ],
    "nl": "Let op: \"half vier\" is 3.30 uur (half op weg naar vier), niet 4.30 uur. Op borden en in schema's staat de tijd in 24 uur (14.30 uur). In gesprekken zeggen mensen meestal \"half drie\". De maanden: januari, februari, maart, april, mei, juni, juli, augustus, september, oktober, november, december."
   },
   "listen": {
    "scene": "phone",
    "who": {
     "A": [
      "Peter (gemeente)",
      "m"
     ],
     "B": [
      "Rana",
      "f"
     ]
    },
    "lines": [
     [
      "A",
      "Gemeente, goedemorgen. U spreekt met Peter."
     ],
     [
      "B",
      "Goedemorgen, met Rana Haddad. Ik wil graag een afspraak maken."
     ],
     [
      "A",
      "Dat kan. Kunt u dinsdag om half tien?"
     ],
     [
      "B",
      "Dinsdag? Nee, dan heb ik les. Kan het woensdag?"
     ],
     [
      "A",
      "Ja. Woensdag om kwart over twee. Is dat goed?"
     ],
     [
      "B",
      "Ja, dat is goed. Dank u wel."
     ]
    ],
    "qs": [
     [
      "Waarom kan Rana niet op dinsdag?",
      [
       "Ze heeft les.",
       "Ze is ziek.",
       "Ze werkt."
      ],
      0
     ],
     [
      "Wanneer is de afspraak?",
      [
       "dinsdag 9.30 uur",
       "woensdag 14.15 uur",
       "woensdag 14.45 uur"
      ],
      1
     ],
     [
      "Wie belt de gemeente?",
      [
       "Rana",
       "Peter"
      ],
      0
     ]
    ]
   },
   "read": {
    "title": "Openingstijden bibliotheek",
    "text": "Bibliotheek Centrum — openingstijden\nmaandag: gesloten\ndinsdag t/m vrijdag: 10.00 – 18.00 uur\nzaterdag: 10.00 – 14.00 uur\nzondag: gesloten\nLet op: op donderdag is er om 19.00 uur een taalcafé.",
    "qs": [
     [
      "Is de bibliotheek op maandag open?",
      [
       "ja",
       "nee"
      ],
      1
     ],
     [
      "Hoe laat gaat de bibliotheek op zaterdag dicht?",
      [
       "14.00 uur",
       "18.00 uur",
       "10.00 uur"
      ],
      0
     ],
     [
      "Wanneer is het taalcafé?",
      [
       "donderdagavond",
       "dinsdagochtend",
       "zaterdag"
      ],
      0
     ]
    ]
   },
   "write": {
    "nl": "Schrijf een bericht aan uw docent.",
    "ar": "لن تحضر الدرس يوم الأربعاء لأنك مريض. اكتب رسالة قصيرة لمعلّمك (تحية، اليوم، السبب، ختام).",
    "model": "Beste Anne,\nWoensdag kom ik niet naar de les. Ik ben ziek.\nTot volgende week!\nGroeten,\nRana",
    "check": [
     "aanhef (Beste …)",
     "dag",
     "reden",
     "groet en naam"
    ],
    "task": "U komt woensdag niet naar de les, want u bent ziek. Schrijf een kort bericht aan uw docent: aanhef, dag, reden en groet."
   },
   "speak": [
    [
     "Hoe laat is het? (🕗 8:30)",
     "كم الساعة؟",
     "Het is half negen."
    ],
    [
     "Welke dag is het vandaag?",
     "أي يوم هو اليوم؟",
     "Vandaag is het zondag."
    ],
    [
     "Hoe laat begint uw les? (🕘 9:15)",
     "متى يبدأ درسك؟",
     "Mijn les begint om kwart over negen."
    ]
   ],
   "quiz": [
    [
     "\"half vier\" =",
     [
      "4:30",
      "3:30",
      "4:15"
     ],
     1
    ],
    [
     "\"kwart voor zeven\" =",
     [
      "6:45",
      "7:15",
      "7:45"
     ],
     0
    ],
    [
     "10:20 =",
     [
      "twintig over tien",
      "tien voor half elf",
      "beide zijn goed"
     ],
     2
    ],
    [
     "De dag na maandag is …",
     [
      "zondag",
      "dinsdag",
      "woensdag"
     ],
     1
    ],
    [
     "\"gesloten\" betekent …",
     [
      "open",
      "dicht"
     ],
     1
    ],
    [
     "Welke maand komt na mei?",
     [
      "juni",
      "juli",
      "april"
     ],
     0
    ]
   ]
  },
  {
   "id": 5,
   "week": 1,
   "nl": "Mijn familie",
   "ar": "عائلتي",
   "can": "Ik kan over mijn familie praten, zeggen hoe oud iemand is en mijn, uw, zijn en haar gebruiken.",
   "canAr": "أستطيع التحدث عن عائلتي وذكر الأعمار واستعمال ضمائر الملكية.",
   "vocab": [
    [
     "de vader / de moeder",
     "الأب / الأم"
    ],
    [
     "de ouders",
     "الوالدان"
    ],
    [
     "de broer / de zus",
     "الأخ / الأخت"
    ],
    [
     "de zoon / de dochter",
     "الابن / الابنة"
    ],
    [
     "het kind / de kinderen",
     "الطفل / الأطفال"
    ],
    [
     "de baby",
     "الرضيع"
    ],
    [
     "de opa / de oma",
     "الجد / الجدة"
    ],
    [
     "de familie",
     "العائلة (الأقارب)"
    ],
    [
     "het gezin",
     "الأسرة"
    ],
    [
     "oud / jong",
     "كبير في السن / صغير"
    ],
    [
     "Hoe oud ben je?",
     "كم عمرك؟"
    ],
    [
     "heten",
     "يُسمّى"
    ]
   ],
   "gram": {
    "t": "Bezittelijke voornaamwoorden (mijn, uw …)",
    "ar": "استعمل ons مع كلمات het (ons huis) و onze مع كلمات de والجمع (onze zoon، onze kinderen).",
    "head": [
     "",
     "bezittelijk",
     "العربية"
    ],
    "rows": [
     [
      "ik",
      "mijn",
      "ـي (بيتي)"
     ],
     [
      "jij",
      "jouw / je",
      "ـكَ / ـكِ"
     ],
     [
      "u",
      "uw",
      "ـكَ / ـكِ (رسمي)"
     ],
     [
      "hij",
      "zijn",
      "ـه"
     ],
     [
      "zij (enkelvoud)",
      "haar",
      "ـها"
     ],
     [
      "wij",
      "ons / onze",
      "ـنا"
     ],
     [
      "jullie",
      "jullie",
      "ـكم"
     ],
     [
      "zij (meervoud)",
      "hun",
      "ـهم"
     ]
    ],
    "ex": [
     [
      "Mijn zoon heet Adam.",
      "ابني اسمه آدم."
     ],
     [
      "Ons huis is klein. Onze kinderen zijn jong.",
      "بيتنا صغير. أطفالنا صغار."
     ],
     [
      "Hoe heet uw vrouw?",
      "ما اسم زوجتك؟"
     ]
    ],
    "nl": "Gebruik ons bij het-woorden (ons huis). Gebruik onze bij de-woorden en bij het meervoud (onze zoon, onze kinderen)."
   },
   "listen": {
    "scene": "schoolyard",
    "who": {
     "A": [
      "Buurvrouw Els",
      "f"
     ],
     "B": [
      "Samir",
      "m"
     ]
    },
    "lines": [
     [
      "A",
      "Hoi Samir! Is dat jouw dochter?"
     ],
     [
      "B",
      "Ja, dat is mijn dochter. Ze heet Lina."
     ],
     [
      "A",
      "Wat een lief meisje! Hoe oud is ze?"
     ],
     [
      "B",
      "Ze is vier jaar. Mijn zoon Adam is zeven."
     ],
     [
      "A",
      "Gaan ze allebei naar school?"
     ],
     [
      "B",
      "Ja, ze gaan allebei naar De Regenboog."
     ]
    ],
    "qs": [
     [
      "Hoe heet de dochter van Samir?",
      [
       "Lina",
       "Els",
       "Adam"
      ],
      0
     ],
     [
      "Hoe oud is Adam?",
      [
       "4 jaar",
       "7 jaar",
       "11 jaar"
      ],
      1
     ],
     [
      "Hoeveel kinderen heeft Samir?",
      [
       "een",
       "twee",
       "drie"
      ],
      1
     ]
    ]
   },
   "read": {
    "title": "Mijn gezin",
    "text": "Ik ben Yasmin. Ik ben 32 jaar. Ik woon met mijn gezin in Tilburg. Mijn man heet Karim. Hij is 35 jaar. Wij hebben een zoon en een dochter. Onze zoon heet Sami. Hij is tien jaar. Onze dochter heet Nour. Zij is zes. Mijn ouders wonen in Jordanië. Mijn broer woont in Duitsland.",
    "qs": [
     [
      "Hoe oud is Karim?",
      [
       "32",
       "35",
       "10"
      ],
      1
     ],
     [
      "Waar wonen de ouders van Yasmin?",
      [
       "in Tilburg",
       "in Jordanië",
       "in Duitsland"
      ],
      1
     ],
     [
      "Wie woont in Duitsland?",
      [
       "de broer van Yasmin",
       "de zus van Yasmin",
       "Karim"
      ],
      0
     ]
    ]
   },
   "write": {
    "nl": "Schrijf 5 zinnen over uw familie.",
    "ar": "اكتب 5 جمل عن عائلتك: من هم، أسماؤهم، أعمارهم، أين يسكنون.",
    "model": "Ik woon met mijn vrouw en twee kinderen in Eindhoven. Mijn vrouw heet Rana. Onze zoon heet Adam. Hij is zeven jaar. Mijn ouders wonen in Syrië.",
    "check": [
     "5 zinnen",
     "minstens 2 namen",
     "een leeftijd",
     "mijn / onze goed gebruikt"
    ],
    "task": "Schrijf 5 zinnen over uw familie: wie, namen, leeftijd en waar ze wonen."
   },
   "speak": [
    [
     "Hebt u kinderen?",
     "هل لديك أطفال؟",
     "Ja, ik heb twee kinderen: een zoon en een dochter."
    ],
    [
     "Hoe oud bent u?",
     "كم عمرك؟",
     "Ik ben … jaar."
    ],
    [
     "Waar wonen uw ouders?",
     "أين يسكن والداك؟",
     "Mijn ouders wonen in …"
    ]
   ],
   "quiz": [
    [
     "Dat is ___ zus. (van mij)",
     [
      "mijn",
      "haar",
      "hun"
     ],
     0
    ],
    [
     "Karim en ___ vrouw. (van Karim)",
     [
      "haar",
      "zijn",
      "hun"
     ],
     1
    ],
    [
     "___ huis is groot. (van ons — het huis)",
     [
      "Ons",
      "Onze"
     ],
     0
    ],
    [
     "___ kinderen zijn jong. (van ons)",
     [
      "Ons",
      "Onze"
     ],
     1
    ],
    [
     "De moeder van mijn moeder is mijn …",
     [
      "zus",
      "oma",
      "tante"
     ],
     1
    ],
    [
     "Formeel: Hoe heet ___ man?",
     [
      "jouw",
      "uw",
      "zijn"
     ],
     1
    ]
   ]
  },
  {
   "id": 6,
   "week": 2,
   "nl": "Mijn dag — werkwoorden",
   "ar": "يومي — الأفعال في المضارع",
   "can": "Ik kan over mijn dag vertellen met werkwoorden in de tegenwoordige tijd.",
   "canAr": "أستطيع وصف يومي باستعمال الأفعال المنتظمة في الزمن الحاضر.",
   "vocab": [
    [
     "werken",
     "يعمل"
    ],
    [
     "leren",
     "يتعلّم"
    ],
    [
     "maken",
     "يصنع"
    ],
    [
     "eten",
     "يأكل"
    ],
    [
     "drinken",
     "يشرب"
    ],
    [
     "koken",
     "يطبخ"
    ],
    [
     "slapen",
     "ينام"
    ],
    [
     "lezen",
     "يقرأ"
    ],
    [
     "schrijven",
     "يكتب"
    ],
    [
     "luisteren",
     "يستمع"
    ],
    [
     "gaan",
     "يذهب"
    ],
    [
     "doen",
     "يفعل"
    ],
    [
     "beginnen",
     "يبدأ"
    ],
    [
     "'s ochtends / 's middags / 's avonds",
     "صباحًا / ظهرًا / مساءً"
    ],
    [
     "elke dag",
     "كل يوم"
    ]
   ],
   "gram": {
    "t": "Werkwoorden in de tegenwoordige tijd",
    "ar": "الجذر = المصدر بدون -en. مع ik الجذر فقط، ومع jij / u / hij الجذر + t، ومع wij / jullie / zij المصدر كاملًا. احتفظ بالصوت الطويل (ik maak)، الحرف المضاعف يصبح واحدًا (ik zit)، z تصبح s و v تصبح f (ik lees، ik schrijf). في السؤال مع jij تسقط t (Werk jij?).",
    "head": [
     "",
     "werken",
     "maken",
     "gaan"
    ],
    "rows": [
     [
      "ik",
      "werk",
      "maak",
      "ga"
     ],
     [
      "jij / je",
      "werkt",
      "maakt",
      "gaat"
     ],
     [
      "u",
      "werkt",
      "maakt",
      "gaat"
     ],
     [
      "hij / zij / het",
      "werkt",
      "maakt",
      "gaat"
     ],
     [
      "wij / jullie / zij",
      "werken",
      "maken",
      "gaan"
     ]
    ],
    "ex": [
     [
      "Ik werk elke dag.",
      "أعمل كل يوم."
     ],
     [
      "Zij leest een boek.",
      "هي تقرأ كتابًا."
     ],
     [
      "Werk jij morgen?",
      "هل تعمل غدًا؟"
     ]
    ],
    "nl": "De stam is het hele werkwoord min -en (werken → werk). Bij ik gebruik je de stam. Bij jij, u, hij en zij: stam + t. Bij wij, jullie en zij (meervoud): het hele werkwoord. Spelling: een lange klank blijft lang (maken → ik maak). Een dubbele medeklinker wordt enkel (zitten → ik zit). Een z wordt s en een v wordt f (lezen → ik lees, schrijven → ik schrijf). In een vraag met jij valt de t weg: Werk jij? Maar: Werkt u?"
   },
   "listen": {
    "scene": "work",
    "who": {
     "A": [
      "Collega Lisa",
      "f"
     ],
     "B": [
      "Yusuf",
      "m"
     ]
    },
    "lines": [
     [
      "A",
      "Yusuf, hoe laat begin je elke dag?"
     ],
     [
      "B",
      "Ik begin om zeven uur. Ik werk tot drie uur."
     ],
     [
      "A",
      "Wat doe je 's middags?"
     ],
     [
      "B",
      "'s Middags leer ik Nederlands. Ik ga naar school."
     ],
     [
      "A",
      "En 's avonds?"
     ],
     [
      "B",
      "'s Avonds kook ik voor mijn familie. Om elf uur slaap ik."
     ]
    ],
    "qs": [
     [
      "Hoe laat begint Yusuf?",
      [
       "om 7 uur",
       "om 8 uur",
       "om 3 uur"
      ],
      0
     ],
     [
      "Wat doet hij 's middags?",
      [
       "Hij leert Nederlands.",
       "Hij kookt.",
       "Hij slaapt."
      ],
      0
     ],
     [
      "Tot hoe laat werkt hij?",
      [
       "tot 3 uur",
       "tot 7 uur",
       "tot 11 uur"
      ],
      0
     ]
    ]
   },
   "read": {
    "title": "Een dag van Mariam",
    "text": "Mariam werkt in een bakkerij. Ze begint om zes uur. Ze maakt brood en taart. Om half elf drinkt ze koffie met haar collega's. Om twee uur gaat ze naar huis. 's Avonds leest ze een boek in het Nederlands.",
    "qs": [
     [
      "Waar werkt Mariam?",
      [
       "in een bakkerij",
       "in een school",
       "in een winkel"
      ],
      0
     ],
     [
      "Wat doet ze om half elf?",
      [
       "Ze drinkt koffie.",
       "Ze gaat naar huis.",
       "Ze leest."
      ],
      0
     ],
     [
      "Hoe laat gaat ze naar huis?",
      [
       "14.00 uur",
       "10.30 uur",
       "6.00 uur"
      ],
      0
     ]
    ]
   },
   "write": {
    "nl": "Schrijf over uw dag.",
    "ar": "اكتب 5 جمل عن يومك. استعمل 's ochtends و 's middags و 's avonds.",
    "model": "'s Ochtends drink ik thee. Om negen uur begint mijn les. 's Middags werk ik in de tuin. 's Avonds kook ik rijst met kip. Om elf uur slaap ik.",
    "check": [
     "5 zinnen",
     "3 delen van de dag",
     "werkwoord met de juiste vorm"
    ],
    "task": "Schrijf 5 zinnen over uw dag. Gebruik 's ochtends, 's middags en 's avonds."
   },
   "speak": [
    [
     "Wat doet u elke dag?",
     "ماذا تفعل كل يوم؟",
     "Elke dag leer ik Nederlands. Ik kook en ik …"
    ],
    [
     "Hoe laat gaat u slapen?",
     "متى تذهب إلى النوم؟",
     "Ik ga om elf uur slapen."
    ],
    [
     "Wat doet u 's avonds?",
     "ماذا تفعل في المساء؟",
     "'s Avonds kook ik en lees ik."
    ]
   ],
   "quiz": [
    [
     "Hij ___ in een supermarkt. (werken)",
     [
      "werk",
      "werkt",
      "werken"
     ],
     1
    ],
    [
     "Wij ___ Nederlands. (leren)",
     [
      "leert",
      "leer",
      "leren"
     ],
     2
    ],
    [
     "Ik ___ een boek. (lezen)",
     [
      "lees",
      "leez",
      "lezen"
     ],
     0
    ],
    [
     "___ jij koffie? (drinken)",
     [
      "Drinkt",
      "Drink",
      "Drinken"
     ],
     1
    ],
    [
     "Ik ___ om 8 uur. (beginnen)",
     [
      "beginn",
      "begin",
      "begint"
     ],
     1
    ],
    [
     "Zij (enkelvoud) ___ naar huis. (gaan)",
     [
      "gaat",
      "gaan",
      "ga"
     ],
     0
    ]
   ]
  },
  {
   "id": 7,
   "week": 2,
   "nl": "Vragen stellen en zinsbouw",
   "ar": "طرح الأسئلة وترتيب الجملة",
   "can": "Ik kan eenvoudige vragen stellen en beantwoorden. Ik zet het werkwoord op de goede plaats.",
   "canAr": "أستطيع طرح أسئلة بسيطة والإجابة عنها ووضع الفعل في مكانه الصحيح.",
   "vocab": [
    [
     "wie",
     "مَن"
    ],
    [
     "wat",
     "ماذا / ما"
    ],
    [
     "waar",
     "أين"
    ],
    [
     "waar … vandaan",
     "من أين"
    ],
    [
     "waar … naartoe",
     "إلى أين"
    ],
    [
     "wanneer",
     "متى"
    ],
    [
     "hoe",
     "كيف"
    ],
    [
     "hoe laat",
     "في أيّ ساعة"
    ],
    [
     "hoeveel",
     "كم"
    ],
    [
     "waarom",
     "لماذا"
    ],
    [
     "welk / welke",
     "أيّ"
    ],
    [
     "want",
     "لأنّ"
    ],
    [
     "ook",
     "أيضًا"
    ],
    [
     "nu",
     "الآن"
    ]
   ],
   "gram": {
    "t": "Het werkwoord staat op plaats 2",
    "ar": "الفعل دائمًا في المكان الثاني. إذا بدأت بالزمان أو المكان يأتي الفاعل بعد الفعل، مثل الجملة الفعلية في العربية. أسئلة نعم/لا تبدأ بالفعل.",
    "head": [
     "plaats 1",
     "plaats 2 (werkwoord)",
     "rest"
    ],
    "rows": [
     [
      "Ik",
      "werk",
      "vandaag."
     ],
     [
      "Vandaag",
      "werk",
      "ik."
     ],
     [
      "Om acht uur",
      "begint",
      "de les."
     ],
     [
      "Waar",
      "woont",
      "u?"
     ],
     [
      "—",
      "Woont",
      "u in Veghel?"
     ]
    ],
    "ex": [
     [
      "Morgen ga ik naar Utrecht.",
      "غدًا أذهب إلى أوترخت."
     ],
     [
      "Waarom leer je Nederlands?",
      "لماذا تتعلم الهولندية؟"
     ],
     [
      "Ik blijf thuis, want ik ben ziek.",
      "أبقى في البيت لأنني مريض."
     ]
    ],
    "nl": "Het werkwoord staat altijd op plaats 2. Begin je met een tijd of een plaats, dan komt het onderwerp na het werkwoord. Een ja/nee-vraag begint met het werkwoord."
   },
   "listen": {
    "scene": "office",
    "who": {
     "A": [
      "Sanne (uitzendbureau)",
      "f"
     ],
     "B": [
      "Hassan",
      "m"
     ]
    },
    "lines": [
     [
      "A",
      "Goedemiddag. Waar woont u, meneer?"
     ],
     [
      "B",
      "Ik woon in Helmond."
     ],
     [
      "A",
      "Wanneer kunt u werken?"
     ],
     [
      "B",
      "Ik kan op maandag, woensdag en vrijdag werken."
     ],
     [
      "A",
      "Waarom niet op dinsdag?"
     ],
     [
      "B",
      "Op dinsdag en donderdag heb ik les, want ik leer Nederlands."
     ],
     [
      "A",
      "Hoeveel uur per week wilt u werken?"
     ],
     [
      "B",
      "Twintig uur."
     ]
    ],
    "qs": [
     [
      "Op welke dagen kan Hassan werken?",
      [
       "maandag, woensdag en vrijdag",
       "dinsdag en donderdag",
       "maandag tot en met vrijdag"
      ],
      0
     ],
     [
      "Waarom kan hij niet op dinsdag?",
      [
       "Hij heeft les.",
       "Hij is ziek.",
       "Hij heeft een afspraak."
      ],
      0
     ],
     [
      "Hoeveel uur per week wil Hassan werken?",
      [
       "12",
       "20",
       "30"
      ],
      1
     ]
    ]
   },
   "read": {
    "title": "Een berichtje van Noor",
    "text": "Hoi Lisa,\nHoe gaat het? Waar ben je nu? Ik ben in de stad. Morgen ga ik met de trein naar Amsterdam. Wil je mee? Wanneer heb je tijd?\nGroetjes, Noor",
    "qs": [
     [
      "Waar is Noor nu?",
      [
       "in de stad",
       "in Amsterdam",
       "thuis"
      ],
      0
     ],
     [
      "Waar gaat Noor morgen naartoe?",
      [
       "naar Amsterdam",
       "naar de stad",
       "naar school"
      ],
      0
     ],
     [
      "Hoe gaat ze?",
      [
       "met de trein",
       "met de bus",
       "met de fiets"
      ],
      0
     ]
    ]
   },
   "write": {
    "nl": "Schrijf 5 vragen aan een nieuwe collega.",
    "ar": "اكتب 5 أسئلة لزميل جديد. استعمل أدوات استفهام مختلفة.",
    "model": "Hoe heet je?\nWaar kom je vandaan?\nWaar woon je?\nWanneer werk je?\nHeb je kinderen?",
    "check": [
     "5 vragen",
     "werkwoord op plaats 2 of 1",
     "vraagteken (?)"
    ],
    "task": "Schrijf 5 vragen aan een nieuwe collega. Gebruik verschillende vraagwoorden."
   },
   "speak": [
    [
     "Waarom leert u Nederlands?",
     "لماذا تتعلم الهولندية؟",
     "Ik leer Nederlands, want ik woon in Nederland en ik wil werken."
    ],
    [
     "Wanneer hebt u les?",
     "متى لديك درس؟",
     "Ik heb les op maandag en woensdag."
    ],
    [
     "Vraag aan uw buurman waar hij woont.",
     "اسأل جارك أين يسكن.",
     "Waar woont u?"
    ]
   ],
   "quiz": [
    [
     "Kies de goede zin:",
     [
      "Morgen ik werk.",
      "Morgen werk ik.",
      "Morgen ik werken."
     ],
     1
    ],
    [
     "___ woont u? — In Eindhoven.",
     [
      "Wie",
      "Waar",
      "Wanneer"
     ],
     1
    ],
    [
     "___ kost de jas? — 40 euro.",
     [
      "Hoeveel",
      "Hoe laat",
      "Welke"
     ],
     0
    ],
    [
     "___ jij in Veghel?",
     [
      "Woont",
      "Woon",
      "Wonen"
     ],
     1
    ],
    [
     "___ is dat? — Dat is mijn buurman.",
     [
      "Wat",
      "Wie",
      "Waar"
     ],
     1
    ],
    [
     "Ik blijf thuis, ___ ik ben ziek.",
     [
      "want",
      "en",
      "maar"
     ],
     0
    ]
   ]
  },
  {
   "id": 8,
   "week": 2,
   "nl": "Boodschappen doen",
   "ar": "التسوّق",
   "can": "Ik kan boodschappen doen, prijzen begrijpen, de / het / een gebruiken en het meervoud maken.",
   "canAr": "أستطيع شراء الطعام وفهم الأسعار واستعمال de / het / een وصياغة الجمع.",
   "vocab": [
    [
     "de supermarkt",
     "السوبرماركت"
    ],
    [
     "het brood",
     "الخبز"
    ],
    [
     "de melk",
     "الحليب"
    ],
    [
     "de kaas",
     "الجبن"
    ],
    [
     "de rijst",
     "الأرز"
    ],
    [
     "de kip",
     "الدجاج"
    ],
    [
     "de groente",
     "الخضار"
    ],
    [
     "het fruit",
     "الفاكهة"
    ],
    [
     "de appel",
     "التفاحة"
    ],
    [
     "het ei / de eieren",
     "البيضة / البيض"
    ],
    [
     "de kassa",
     "الصندوق"
    ],
    [
     "kosten",
     "يكلّف"
    ],
    [
     "betalen / pinnen",
     "يدفع / يدفع بالبطاقة"
    ],
    [
     "de bon",
     "الإيصال"
    ],
    [
     "de aanbieding",
     "العرض"
    ],
    [
     "halal",
     "حلال"
    ]
   ],
   "gram": {
    "t": "de / het, een en meervoud",
    "ar": "في الهولندية أداتا تعريف: de و het. كل الجموع تأخذ de، وكل كلمات التصغير (-je) تأخذ het. احفظ كل اسم مع أداته. أداة النكرة دائمًا een. الجمع غالبًا -en، و -s بعد -el, -er, -en, -je.",
    "head": [
     "de / het",
     "een",
     "meervoud",
     "regel"
    ],
    "rows": [
     [
      "het boek",
      "een boek",
      "de boeken",
      "-en"
     ],
     [
      "de tas",
      "een tas",
      "de tassen",
      "-en (ss)"
     ],
     [
      "de appel",
      "een appel",
      "de appels",
      "-s na -el"
     ],
     [
      "het meisje",
      "een meisje",
      "de meisjes",
      "-s na -je"
     ],
     [
      "het ei",
      "een ei",
      "de eieren",
      "onregelmatig"
     ],
     [
      "het kind",
      "een kind",
      "de kinderen",
      "onregelmatig"
     ]
    ],
    "ex": [
     [
      "Het brood kost twee euro negenentwintig.",
      "الخبز يكلّف 2,29 يورو."
     ],
     [
      "Ik koop drie appels.",
      "أشتري ثلاث تفاحات."
     ],
     [
      "Kan ik pinnen?",
      "هل يمكنني الدفع بالبطاقة؟"
     ]
    ],
    "nl": "Het Nederlands heeft twee lidwoorden: de en het. Alle meervouden krijgen de. Alle verkleinwoorden (-je) krijgen het. Leer elk zelfstandig naamwoord samen met de of het. Het onbepaalde lidwoord is altijd een. Meervoud: meestal -en; -s na -el, -er, -en en -je. Prijzen: € 2,50 = \"twee euro vijftig\"."
   },
   "listen": {
    "scene": "shop",
    "who": {
     "A": [
      "Kassamedewerker",
      "f"
     ],
     "B": [
      "Ali",
      "m"
     ]
    },
    "lines": [
     [
      "A",
      "Goedemiddag!"
     ],
     [
      "B",
      "Goedemiddag."
     ],
     [
      "A",
      "Dat is dan zeven euro vijfentwintig."
     ],
     [
      "B",
      "Kan ik pinnen?"
     ],
     [
      "A",
      "Ja hoor. Wilt u de bon?"
     ],
     [
      "B",
      "Nee, dank u. O, waar is de rijst?"
     ],
     [
      "A",
      "De rijst? Die ligt in gang vier, naast de pasta."
     ]
    ],
    "qs": [
     [
      "Hoeveel moet Ali betalen?",
      [
       "€ 7,25",
       "€ 7,52",
       "€ 25,07"
      ],
      0
     ],
     [
      "Hoe betaalt Ali?",
      [
       "met zijn pinpas",
       "contant"
      ],
      0
     ],
     [
      "Waar is de rijst?",
      [
       "in gang 4",
       "in gang 2",
       "bij de kassa"
      ],
      0
     ]
    ]
   },
   "read": {
    "title": "Folder supermarkt",
    "text": "Aanbiedingen deze week (maandag t/m zondag)\nAppels — 1 kilo — € 1,99\nKipfilet halal — 500 gram — € 4,49\nMelk — 1 liter — € 1,15\nVolkorenbrood — € 2,29\nAanbieding: 2 broden voor € 3,50!",
    "qs": [
     [
      "Wat kost 1 liter melk?",
      [
       "€ 1,15",
       "€ 1,99",
       "€ 2,29"
      ],
      0
     ],
     [
      "Wat betaalt u voor 2 broden?",
      [
       "€ 4,58",
       "€ 3,50",
       "€ 2,29"
      ],
      1
     ],
     [
      "Tot wanneer zijn de aanbiedingen?",
      [
       "tot zondag",
       "tot maandag",
       "een maand"
      ],
      0
     ]
    ]
   },
   "write": {
    "nl": "Schrijf een bericht aan uw partner.",
    "ar": "أنت في العمل وشريكك ذاهب إلى السوبرماركت. اكتب رسالة: ماذا يجب أن يشتري؟ (3 أشياء)",
    "model": "Hoi! Kun je melk, brood en zes eieren kopen? Dank je!\nGroetjes",
    "check": [
     "3 producten",
     "vraag of verzoek",
     "groet"
    ],
    "task": "U bent op uw werk. Uw partner gaat naar de supermarkt. Schrijf een bericht: wat moet uw partner kopen? Noem 3 dingen."
   },
   "speak": [
    [
     "De medewerker vraagt: \"Wilt u een tas?\"",
     "الموظف يسأل: \"هل تريد كيسًا؟\"",
     "Ja, graag. / Nee, dank u, ik heb een tas."
    ],
    [
     "U zoekt de kaas. Wat vraagt u?",
     "تبحث عن الجبن. ماذا تسأل؟",
     "Pardon, waar is de kaas?"
    ],
    [
     "Wat eet u vaak?",
     "ماذا تأكل غالبًا؟",
     "Ik eet vaak rijst met kip en groente."
    ]
   ],
   "quiz": [
    [
     "___ boek",
     [
      "de",
      "het"
     ],
     1
    ],
    [
     "het kind → twee …",
     [
      "kinds",
      "kinderen",
      "kinden"
     ],
     1
    ],
    [
     "de tas → twee …",
     [
      "tasen",
      "tassen",
      "tass"
     ],
     1
    ],
    [
     "het meisje → twee …",
     [
      "meisjes",
      "meisjen",
      "meisjeen"
     ],
     0
    ],
    [
     "€ 3,75 =",
     [
      "drie euro vijfenzeventig",
      "drie euro zevenenvijftig",
      "vijfenzeventig euro drie"
     ],
     0
    ],
    [
     "Alle meervouden krijgen …",
     [
      "de",
      "het"
     ],
     0
    ]
   ]
  },
  {
   "id": 9,
   "week": 2,
   "nl": "Wonen",
   "ar": "السكن",
   "can": "Ik kan mijn huis beschrijven, zeggen waar iets staat en een probleem in huis melden.",
   "canAr": "أستطيع وصف بيتي وتحديد أماكن الأشياء والإبلاغ عن عطل في البيت.",
   "vocab": [
    [
     "het huis",
     "البيت"
    ],
    [
     "het appartement",
     "الشقة"
    ],
    [
     "de kamer",
     "الغرفة"
    ],
    [
     "de woonkamer",
     "غرفة الجلوس"
    ],
    [
     "de slaapkamer",
     "غرفة النوم"
    ],
    [
     "de keuken",
     "المطبخ"
    ],
    [
     "de badkamer",
     "الحمّام"
    ],
    [
     "de wc",
     "المرحاض"
    ],
    [
     "de tuin",
     "الحديقة"
    ],
    [
     "de buurman / de buurvrouw",
     "الجار / الجارة"
    ],
    [
     "de huur",
     "الإيجار"
    ],
    [
     "kapot",
     "معطّل"
    ],
    [
     "groot / klein",
     "كبير / صغير"
    ],
    [
     "de tafel / de stoel / de bank",
     "الطاولة / الكرسي / الأريكة"
    ]
   ],
   "gram": {
    "t": "er is / er zijn + voorzetsels",
    "ar": "\"er is\" مع المفرد، و \"er zijn\" مع الجمع (يوجد / توجد). حروف الجر تحدد المكان.",
    "head": [
     "voorzetsel",
     "voorbeeld",
     "العربية"
    ],
    "rows": [
     [
      "in",
      "Het boek ligt in de tas.",
      "في"
     ],
     [
      "op",
      "Het bord staat op de tafel.",
      "على"
     ],
     [
      "onder",
      "De kat ligt onder de tafel.",
      "تحت"
     ],
     [
      "naast",
      "De bank staat naast het raam.",
      "بجانب"
     ],
     [
      "achter",
      "De fiets staat achter het huis.",
      "خلف"
     ],
     [
      "voor",
      "De auto staat voor het huis.",
      "أمام"
     ],
     [
      "tussen",
      "De stoel staat tussen de tafel en de bank.",
      "بين"
     ],
     [
      "bij",
      "Ik ben bij de dokter.",
      "عند"
     ]
    ],
    "ex": [
     [
      "Er is een tuin.",
      "توجد حديقة."
     ],
     [
      "Er zijn twee slaapkamers.",
      "توجد غرفتا نوم."
     ],
     [
      "De kat ligt onder de tafel.",
      "القطة مستلقية تحت الطاولة."
     ]
    ],
    "nl": "\"Er is\" gebruik je bij één ding, \"er zijn\" bij meer dingen. Voorzetsels zeggen waar iets is."
   },
   "listen": {
    "scene": "phone",
    "who": {
     "A": [
      "Bas (woningcorporatie)",
      "m"
     ],
     "B": [
      "Rana",
      "f"
     ]
    },
    "lines": [
     [
      "A",
      "Woningcorporatie, goedemiddag. U spreekt met Bas."
     ],
     [
      "B",
      "Goedemiddag, met Rana Haddad. De douche in mijn badkamer is kapot."
     ],
     [
      "A",
      "Wat vervelend. Wat is uw adres?"
     ],
     [
      "B",
      "Molenstraat 8, in Veghel.",
      "Molenstraat acht, in Veghel."
     ],
     [
      "A",
      "Er komt donderdag een monteur, tussen acht en twaalf uur. Bent u dan thuis?"
     ],
     [
      "B",
      "Ja, dan ben ik thuis. Dank u wel."
     ]
    ],
    "qs": [
     [
      "Wat is kapot?",
      [
       "de douche",
       "de wc",
       "de keuken"
      ],
      0
     ],
     [
      "Wanneer komt de monteur?",
      [
       "donderdagochtend",
       "dinsdagmiddag",
       "donderdagavond"
      ],
      0
     ],
     [
      "Wat is het huisnummer van Rana?",
      [
       "8",
       "18",
       "80"
      ],
      0
     ]
    ]
   },
   "read": {
    "title": "Te huur",
    "text": "Te huur: appartement in Eindhoven-Centrum\n- woonkamer met open keuken\n- 2 slaapkamers\n- badkamer met douche\n- balkon, geen tuin\nHuur: € 950 per maand\nHuisdieren zijn niet toegestaan.\nBezichtiging? Bel 040 - 123 45 67.",
    "qs": [
     [
      "Hoeveel slaapkamers zijn er?",
      [
       "1",
       "2",
       "3"
      ],
      1
     ],
     [
      "Is er een tuin?",
      [
       "ja",
       "nee"
      ],
      1
     ],
     [
      "Mag u een kat hebben in dit appartement?",
      [
       "ja",
       "nee"
      ],
      1
     ]
    ]
   },
   "write": {
    "nl": "Beschrijf uw huis.",
    "ar": "اكتب 4–5 جمل عن بيتك: النوع، الغرف، كبير أو صغير، حديقة أم لا.",
    "model": "Ik woon in een appartement. Er zijn twee slaapkamers. De woonkamer is groot, maar de keuken is klein. Er is geen tuin, maar er is een balkon.",
    "check": [
     "4–5 zinnen",
     "er is / er zijn",
     "minstens 3 kamers"
    ],
    "task": "Schrijf 4 of 5 zinnen over uw huis: soort huis, kamers, groot of klein, wel of geen tuin."
   },
   "speak": [
    [
     "Hoe ziet uw huis eruit?",
     "كيف يبدو بيتك؟",
     "Ik woon in een appartement. Er zijn twee slaapkamers. De keuken is klein."
    ],
    [
     "Waar staat de bank? (🛋️ naast het raam)",
     "أين توجد الأريكة؟",
     "De bank staat naast het raam."
    ],
    [
     "Uw verwarming is kapot. U belt. Wat zegt u?",
     "التدفئة عندك معطّلة. تتصل. ماذا تقول؟",
     "Goedemorgen, met … . Mijn verwarming is kapot. Mijn adres is …"
    ]
   ],
   "quiz": [
    [
     "Er ___ drie kamers.",
     [
      "is",
      "zijn"
     ],
     1
    ],
    [
     "Er ___ een tuin.",
     [
      "is",
      "zijn"
     ],
     0
    ],
    [
     "Het boek ligt ___ de tafel. (على)",
     [
      "op",
      "onder",
      "naast"
     ],
     0
    ],
    [
     "De fiets staat ___ het huis. (خلف)",
     [
      "voor",
      "achter",
      "tussen"
     ],
     1
    ],
    [
     "\"kapot\" betekent …",
     [
      "nieuw",
      "werkt niet",
      "groot"
     ],
     1
    ],
    [
     "U betaalt elke maand … voor uw huis.",
     [
      "huur",
      "huis",
      "kamer"
     ],
     0
    ]
   ]
  },
  {
   "id": 10,
   "week": 2,
   "nl": "Kleding en kleuren",
   "ar": "الملابس والألوان",
   "can": "Ik kan kleding kopen, naar een maat vragen en dingen beschrijven met kleuren en bijvoeglijke naamwoorden.",
   "canAr": "أستطيع شراء الملابس وطلب المقاس ووصف الأشياء بالألوان والصفات.",
   "vocab": [
    [
     "de jas",
     "المعطف"
    ],
    [
     "de broek",
     "البنطال"
    ],
    [
     "de trui",
     "الكنزة"
    ],
    [
     "het shirt",
     "القميص"
    ],
    [
     "de schoenen",
     "الحذاء"
    ],
    [
     "de jurk",
     "الفستان"
    ],
    [
     "de maat",
     "المقاس"
    ],
    [
     "passen",
     "يجرّب / يناسب"
    ],
    [
     "de paskamer",
     "غرفة القياس"
    ],
    [
     "duur / goedkoop",
     "غالٍ / رخيص"
    ],
    [
     "rood, blauw, groen, geel",
     "أحمر، أزرق، أخضر، أصفر"
    ],
    [
     "zwart, wit, grijs, bruin",
     "أسود، أبيض، رمادي، بنّي"
    ],
    [
     "warm / koud",
     "دافئ / بارد"
    ],
    [
     "ruilen",
     "يستبدل"
    ],
    [
     "dragen",
     "يرتدي"
    ]
   ],
   "gram": {
    "t": "Bijvoeglijk naamwoord + e",
    "ar": "قبل الاسم تأخذ الصفة -e. الاستثناء: een + كلمة het بدون -e (een wit shirt). بعد الفعل (is / zijn) لا -e.",
    "head": [
     "woord",
     "de / het + bn",
     "een + bn",
     "na het werkwoord"
    ],
    "rows": [
     [
      "de jas",
      "de rode jas",
      "een rode jas",
      "De jas is rood."
     ],
     [
      "het shirt",
      "het witte shirt",
      "een wit shirt",
      "Het shirt is wit."
     ],
     [
      "de schoenen",
      "de zwarte schoenen",
      "zwarte schoenen",
      "De schoenen zijn zwart."
     ]
    ],
    "ex": [
     [
      "Ik zoek een warme jas.",
      "أبحث عن معطف دافئ."
     ],
     [
      "Het blauwe shirt is duur.",
      "القميص الأزرق غالٍ."
     ],
     [
      "Mag ik deze broek passen?",
      "هل يمكنني تجربة هذا البنطال؟"
     ]
    ],
    "nl": "Voor een zelfstandig naamwoord krijgt het bijvoeglijk naamwoord een -e. Uitzondering: een + het-woord, dan geen -e (een wit shirt). Na het werkwoord (is / zijn) komt geen -e. Spelling: rood → rode, wit → witte."
   },
   "listen": {
    "scene": "clothes",
    "who": {
     "A": [
      "Verkoper",
      "m"
     ],
     "B": [
      "Noor",
      "f"
     ]
    },
    "lines": [
     [
      "A",
      "Goedemiddag. Kan ik u helpen?"
     ],
     [
      "B",
      "Ja, ik zoek een warme jas voor de winter."
     ],
     [
      "A",
      "Welke maat hebt u?"
     ],
     [
      "B",
      "Maat M.",
      "Maat em."
     ],
     [
      "A",
      "Deze blauwe jas is mooi. Hij kost negenenvijftig euro."
     ],
     [
      "B",
      "Hebt u hem ook in het zwart?"
     ],
     [
      "A",
      "Ja, hier. De paskamer is daar."
     ]
    ],
    "qs": [
     [
      "Wat zoekt Noor?",
      [
       "een warme jas",
       "een trui",
       "schoenen"
      ],
      0
     ],
     [
      "Welke maat heeft Noor?",
      [
       "S",
       "M",
       "L"
      ],
      1
     ],
     [
      "Hoeveel kost de jas?",
      [
       "€ 59",
       "€ 95",
       "€ 49"
      ],
      0
     ]
    ]
   },
   "read": {
    "title": "Ruilen en terugbrengen",
    "text": "U kunt kleding binnen 30 dagen ruilen. Neem de kassabon mee. Ondergoed en badkleding kunt u niet ruilen. Geld terug? Dat kan alleen met de bon.",
    "qs": [
     [
      "Binnen hoeveel dagen kunt u ruilen?",
      [
       "3",
       "13",
       "30"
      ],
      2
     ],
     [
      "Wat moet u meenemen?",
      [
       "de kassabon",
       "uw paspoort",
       "de tas"
      ],
      0
     ],
     [
      "Kunt u badkleding ruilen?",
      [
       "ja",
       "nee"
      ],
      1
     ]
    ]
   },
   "write": {
    "nl": "Schrijf een e-mail aan de winkel.",
    "ar": "اشتريت بنطالًا عبر الإنترنت وهو صغير. اكتب بريدًا للمتجر: ما المشكلة وماذا تريد؟",
    "model": "Beste meneer / mevrouw,\nIk heb een zwarte broek van uw winkel, maat 32. De broek is te klein. Ik wil graag een broek in maat 34. Kan ik de broek ruilen?\nMet vriendelijke groet,\nNoor Ali",
    "check": [
     "aanhef",
     "probleem",
     "wat u wilt",
     "afsluiting + naam"
    ],
    "task": "U hebt online een broek gekocht. De broek is te klein. Schrijf een e-mail aan de winkel: wat is het probleem en wat wilt u?"
   },
   "speak": [
    [
     "Wat draagt u vandaag?",
     "ماذا ترتدي اليوم؟",
     "Ik draag een blauwe broek en een witte trui."
    ],
    [
     "De jas is te groot. Wat zegt u tegen de verkoper?",
     "المعطف كبير جدًا. ماذا تقول للبائع؟",
     "Deze jas is te groot. Hebt u maat S?"
    ],
    [
     "Welke kleur vindt u mooi?",
     "أي لون تحب؟",
     "Ik vind blauw mooi."
    ]
   ],
   "quiz": [
    [
     "een ___ jas (rood)",
     [
      "rood",
      "rode"
     ],
     1
    ],
    [
     "een ___ shirt (wit)",
     [
      "wit",
      "witte"
     ],
     0
    ],
    [
     "het ___ shirt (wit)",
     [
      "wit",
      "witte"
     ],
     1
    ],
    [
     "De schoenen zijn ___ (zwart)",
     [
      "zwart",
      "zwarte"
     ],
     0
    ],
    [
     "Een jas van € 300 is …",
     [
      "goedkoop",
      "duur"
     ],
     1
    ],
    [
     "Waar past u kleding?",
     [
      "in de paskamer",
      "bij de kassa",
      "in de badkamer"
     ],
     0
    ]
   ]
  },
  {
   "id": 11,
   "week": 3,
   "nl": "Vervoer en de weg vragen",
   "ar": "المواصلات والسؤال عن الطريق",
   "can": "Ik kan met de bus en de trein reizen, een eenvoudige omroep begrijpen en de weg vragen en uitleggen.",
   "canAr": "أستطيع السفر بالحافلة والقطار وفهم إعلان بسيط والسؤال عن الطريق ووصفه.",
   "vocab": [
    [
     "de trein",
     "القطار"
    ],
    [
     "de bus",
     "الحافلة"
    ],
    [
     "de fiets",
     "الدراجة"
    ],
    [
     "het station",
     "المحطة"
    ],
    [
     "de bushalte",
     "موقف الحافلة"
    ],
    [
     "het spoor",
     "الرصيف"
    ],
    [
     "het kaartje",
     "التذكرة"
    ],
    [
     "vertrekken / aankomen",
     "يغادر / يصل"
    ],
    [
     "de vertraging",
     "التأخير"
    ],
    [
     "overstappen",
     "يبدّل (الوسيلة)"
    ],
    [
     "links / rechts",
     "يسار / يمين"
    ],
    [
     "rechtdoor",
     "إلى الأمام"
    ],
    [
     "de hoek",
     "الزاوية"
    ],
    [
     "ver / dichtbij",
     "بعيد / قريب"
    ]
   ],
   "gram": {
    "t": "Gebiedende wijs + met / naar",
    "ar": "صيغة الأمر = الجذر: Ga! Neem! Loop! وللتهذيب اسأل: Kunt u …؟ استعمل met de مع وسيلة النقل (met de bus) و naar للاتجاه (naar Utrecht).",
    "head": [
     "werkwoord",
     "gebiedende wijs"
    ],
    "rows": [
     [
      "gaan",
      "Ga rechtdoor."
     ],
     [
      "nemen",
      "Neem de tweede straat links."
     ],
     [
      "lopen",
      "Loop naar de hoek."
     ],
     [
      "stappen",
      "Stap uit bij het station."
     ]
    ],
    "ex": [
     [
      "Ik ga met de trein naar Utrecht.",
      "أذهب إلى أوترخت بالقطار."
     ],
     [
      "Waar is de bushalte?",
      "أين موقف الحافلة؟"
     ],
     [
      "Kunt u dat herhalen?",
      "هل يمكنك إعادة ذلك؟"
     ]
    ],
    "nl": "De gebiedende wijs is de stam: Ga! Neem! Loop! Beleefd vraag je: Kunt u …? Gebruik \"met de\" bij vervoer (met de bus) en \"naar\" bij een richting (naar Utrecht)."
   },
   "listen": {
    "scene": "station",
    "who": {
     "O": [
      "Omroep",
      "f"
     ],
     "A": [
      "Ahmad",
      "m"
     ],
     "B": [
      "Voorbijganger",
      "f"
     ]
    },
    "lines": [
     [
      "O",
      "De trein naar Utrecht Centraal van 10.14 uur vertrekt vandaag van spoor 3.",
      "De trein naar Utrecht Centraal van tien uur veertien vertrekt vandaag van spoor drie."
     ],
     [
      "O",
      "Deze trein heeft vijf minuten vertraging."
     ],
     [
      "A",
      "Pardon, mevrouw. Waar is het gemeentehuis?"
     ],
     [
      "B",
      "Ga hier rechtdoor. Neem dan de tweede straat links. Het gemeentehuis is op de hoek."
     ],
     [
      "A",
      "Is het ver?"
     ],
     [
      "B",
      "Nee, vijf minuten lopen."
     ]
    ],
    "qs": [
     [
      "Van welk spoor vertrekt de trein?",
      [
       "spoor 3",
       "spoor 4",
       "spoor 10"
      ],
      0
     ],
     [
      "Hoeveel minuten vertraging heeft de trein?",
      [
       "5",
       "10",
       "14"
      ],
      0
     ],
     [
      "Waar is het gemeentehuis?",
      [
       "tweede straat links, op de hoek",
       "eerste straat rechts",
       "naast het station"
      ],
      0
     ]
    ]
   },
   "read": {
    "title": "Let op: bushalte dicht",
    "text": "Let op!\nVan maandag 2 november tot en met vrijdag 6 november stopt bus 6 niet bij de halte Markt. Er zijn werkzaamheden. Gebruik de halte Stationsplein. Daar stopt de bus wel.",
    "qs": [
     [
      "Welke bus stopt niet bij de Markt?",
      [
       "bus 3",
       "bus 6",
       "bus 7"
      ],
      1
     ],
     [
      "Hoe lang duurt het?",
      [
       "van 2 tot en met 6 november",
       "één dag",
       "een maand"
      ],
      0
     ],
     [
      "Waar kunt u de bus nemen?",
      [
       "bij de halte Stationsplein",
       "bij de halte Markt",
       "nergens"
      ],
      0
     ]
    ]
   },
   "write": {
    "nl": "Schrijf hoe uw vriend bij uw huis komt.",
    "ar": "صديقك يأتي بالقطار. اكتب في 3–4 جمل كيف يصل من المحطة إلى بيتك.",
    "model": "Neem bus 6 bij het station. Stap uit bij de halte Kerkplein. Ga rechtdoor en neem de eerste straat rechts. Mijn huis is nummer 12.",
    "check": [
     "3–4 zinnen",
     "gebiedende wijs",
     "links / rechts / rechtdoor"
    ],
    "task": "Een vriend komt met de trein. Schrijf in 3 of 4 zinnen hoe hij van het station naar uw huis komt."
   },
   "speak": [
    [
     "Hoe gaat u naar de taalschool?",
     "كيف تذهب إلى مدرسة اللغة؟",
     "Ik ga met de fiets. Het is tien minuten."
    ],
    [
     "Iemand vraagt: \"Waar is de bushalte?\" (📍 rechtdoor, dan links)",
     "أحدهم يسأل عن موقف الحافلة. اشرح الطريق.",
     "Ga rechtdoor en dan links. De bushalte is daar."
    ],
    [
     "Uw trein heeft vertraging. U belt uw docent. Wat zegt u?",
     "قطارك متأخر. تتصل بمعلّمك. ماذا تقول؟",
     "Goedemorgen, met … . Mijn trein heeft vertraging. Ik ben tien minuten te laat."
    ]
   ],
   "quiz": [
    [
     "\"links\" =",
     [
      "يمين",
      "يسار"
     ],
     1
    ],
    [
     "De trein heeft vertraging. De trein is …",
     [
      "te laat",
      "te vroeg",
      "vol"
     ],
     0
    ],
    [
     "Ik ga ___ de trein naar Utrecht.",
     [
      "met",
      "naar",
      "in"
     ],
     0
    ],
    [
     "Gebiedende wijs van \"nemen\":",
     [
      "Neemt de bus.",
      "Neem de bus.",
      "Nemen de bus."
     ],
     1
    ],
    [
     "Van welk ___ vertrekt de trein?",
     [
      "spoor",
      "halte",
      "straat"
     ],
     0
    ],
    [
     "\"dichtbij\" is het tegenovergestelde van …",
     [
      "ver",
      "links",
      "rechtdoor"
     ],
     0
    ]
   ]
  },
  {
   "id": 12,
   "week": 3,
   "nl": "Bij de huisarts",
   "ar": "عند طبيب العائلة",
   "can": "Ik kan zeggen wat ik heb, een afspraak maken bij de huisarts en een etiket van de apotheek lezen.",
   "canAr": "أستطيع أن أقول ما يؤلمني وأحجز موعدًا عند طبيب العائلة وأقرأ ملصق دواء.",
   "vocab": [
    [
     "de huisarts",
     "طبيب العائلة"
    ],
    [
     "de assistente",
     "المساعدة"
    ],
    [
     "de apotheek",
     "الصيدلية"
    ],
    [
     "het ziekenhuis",
     "المستشفى"
    ],
    [
     "de tandarts",
     "طبيب الأسنان"
    ],
    [
     "ziek / beter",
     "مريض / أفضل"
    ],
    [
     "de pijn",
     "الألم"
    ],
    [
     "het hoofd / de buik / de keel / de rug",
     "الرأس / البطن / الحلق / الظهر"
    ],
    [
     "de koorts",
     "الحمّى"
    ],
    [
     "hoesten",
     "يسعل"
    ],
    [
     "het medicijn",
     "الدواء"
    ],
    [
     "het recept",
     "الوصفة الطبية"
    ],
    [
     "de geboortedatum",
     "تاريخ الميلاد"
    ],
    [
     "112",
     "رقم الطوارئ"
    ]
   ],
   "gram": {
    "t": "Pijn en klachten",
    "ar": "قل: Ik heb hoofdpijn (عندي صداع) أو Mijn … doet pijn. في هولندا تتصل عادةً بطبيب العائلة أولًا. في حالة خطر على الحياة اتصل بـ 112.",
    "head": [
     "lichaam",
     "klacht",
     "العربية"
    ],
    "rows": [
     [
      "het hoofd",
      "hoofdpijn",
      "صداع"
     ],
     [
      "de buik",
      "buikpijn",
      "ألم في البطن"
     ],
     [
      "de keel",
      "keelpijn",
      "ألم في الحلق"
     ],
     [
      "de rug",
      "rugpijn",
      "ألم في الظهر"
     ],
     [
      "de tand / de kies",
      "kiespijn",
      "ألم في الأسنان"
     ]
    ],
    "ex": [
     [
      "Ik heb sinds gisteren koorts.",
      "عندي حمّى منذ أمس."
     ],
     [
      "Mijn rug doet pijn.",
      "ظهري يؤلمني."
     ],
     [
      "Ik wil graag een afspraak met de huisarts.",
      "أريد موعدًا عند طبيب العائلة."
     ]
    ],
    "nl": "Ik heb hoofdpijn / buikpijn / keelpijn / rugpijn. Of: Ik heb pijn in mijn … / Mijn … doet pijn. In Nederland belt u bij klachten meestal eerst de huisarts. Bij levensgevaar belt u 112."
   },
   "listen": {
    "scene": "doctor",
    "who": {
     "A": [
      "Assistente Ilse",
      "f"
     ],
     "B": [
      "Samir",
      "m"
     ]
    },
    "lines": [
     [
      "A",
      "Huisartsenpraktijk De Linde, goedemorgen. U spreekt met Ilse."
     ],
     [
      "B",
      "Goedemorgen, met Samir Aziz. Ik ben ziek. Ik heb koorts en keelpijn."
     ],
     [
      "A",
      "Sinds wanneer hebt u koorts?"
     ],
     [
      "B",
      "Sinds zaterdag. Ik hoest ook veel."
     ],
     [
      "A",
      "Wat is uw geboortedatum?"
     ],
     [
      "B",
      "12 maart 1990.",
      "twaalf maart negentienhonderdnegentig."
     ],
     [
      "A",
      "U kunt vandaag om kwart over twee bij de dokter komen."
     ],
     [
      "B",
      "Om kwart over twee. Goed, dank u wel."
     ]
    ],
    "qs": [
     [
      "Wat zijn de klachten van Samir?",
      [
       "koorts en keelpijn",
       "hoofdpijn en buikpijn",
       "rugpijn"
      ],
      0
     ],
     [
      "Sinds wanneer is Samir ziek?",
      [
       "sinds zaterdag",
       "sinds maandag",
       "sinds vandaag"
      ],
      0
     ],
     [
      "Hoe laat is de afspraak?",
      [
       "14.15 uur",
       "14.45 uur",
       "13.45 uur"
      ],
      0
     ]
    ]
   },
   "read": {
    "title": "Etiket van de apotheek (oefentekst, geen echt medicijn)",
    "text": "Apotheek Centrum\nDhr. S. Aziz\nVoorbeeldmiddel 250 mg\nNeem 3 keer per dag 1 tablet.\nNeem de tablet na het eten, met een glas water.\nGebruik alle tabletten, ook als u zich beter voelt.\nVragen? Bel uw huisarts of de apotheek.",
    "qs": [
     [
      "Hoe vaak per dag neemt meneer Aziz een tablet?",
      [
       "1 keer",
       "2 keer",
       "3 keer"
      ],
      2
     ],
     [
      "Wanneer neemt hij de tablet?",
      [
       "na het eten",
       "voor het slapen",
       "voor het eten"
      ],
      0
     ],
     [
      "Na 2 dagen voelt hij zich beter. Wat doet hij volgens het etiket?",
      [
       "Hij neemt alle tabletten.",
       "Hij stopt."
      ],
      0
     ]
    ]
   },
   "write": {
    "nl": "Schrijf een e-mail aan uw docent.",
    "ar": "أنت مريض ولن تحضر الدرس غدًا. اكتب بريدًا لمعلّمك: ما مشكلتك، كم ستغيب، واسأل عن الواجب.",
    "model": "Beste Anne,\nIk ben ziek. Ik heb koorts en keelpijn. Morgen kom ik niet naar de les. Wat is het huiswerk?\nMet vriendelijke groet,\nSamir Aziz",
    "check": [
     "aanhef",
     "klacht",
     "wanneer u niet komt",
     "vraag over huiswerk",
     "afsluiting"
    ],
    "task": "U bent ziek en komt morgen niet naar de les. Schrijf een e-mail aan uw docent: wat hebt u, hoe lang blijft u weg, en vraag naar het huiswerk."
   },
   "speak": [
    [
     "De assistente vraagt: \"Wat zijn uw klachten?\"",
     "المساعدة تسأل: \"ما هي شكواك؟\"",
     "Ik heb sinds gisteren hoofdpijn en koorts."
    ],
    [
     "U bent bij de apotheek. Wat zegt u?",
     "أنت في الصيدلية. ماذا تقول؟",
     "Goedemiddag. Ik kom mijn medicijnen halen. Mijn naam is …"
    ],
    [
     "Iemand op straat valt en beweegt niet. Welk nummer belt u?",
     "شخص يسقط في الشارع ولا يتحرك. بأي رقم تتصل؟",
     "Ik bel 112."
    ]
   ],
   "quiz": [
    [
     "In Nederland belt u bij een gewone klacht eerst …",
     [
      "het ziekenhuis",
      "de huisarts",
      "de apotheek"
     ],
     1
    ],
    [
     "Levensgevaar. U belt …",
     [
      "112",
      "de huisarts",
      "de buurman"
     ],
     0
    ],
    [
     "Medicijnen haalt u bij de …",
     [
      "bakker",
      "apotheek",
      "gemeente"
     ],
     1
    ],
    [
     "Ik heb pijn ___ mijn rug.",
     [
      "op",
      "in",
      "aan"
     ],
     1
    ],
    [
     "\"koorts\" =",
     [
      "حمّى",
      "سعال",
      "ألم"
     ],
     0
    ],
    [
     "Mijn hoofd doet pijn = Ik heb …",
     [
      "buikpijn",
      "hoofdpijn",
      "keelpijn"
     ],
     1
    ]
   ]
  },
  {
   "id": 13,
   "week": 3,
   "nl": "Kunnen, willen, moeten, mogen",
   "ar": "يستطيع، يريد، يجب، يُسمح",
   "can": "Ik kan zeggen wat ik kan, wil, moet en mag. Ik kan vragen of iemand iets herhaalt of langzaam praat.",
   "canAr": "أستطيع أن أقول ما أستطيع وما أريد وما يجب وما يُسمح لي به، وأن أطلب الإعادة أو التكلم ببطء.",
   "vocab": [
    [
     "kunnen",
     "يستطيع"
    ],
    [
     "willen",
     "يريد"
    ],
    [
     "moeten",
     "يجب"
    ],
    [
     "mogen",
     "يُسمح"
    ],
    [
     "herhalen",
     "يكرّر"
    ],
    [
     "langzaam",
     "ببطء"
    ],
    [
     "begrijpen",
     "يفهم"
    ],
    [
     "helpen",
     "يساعد"
    ],
    [
     "wachten",
     "ينتظر"
    ],
    [
     "vragen",
     "يسأل"
    ],
    [
     "roken",
     "يدخّن"
    ],
    [
     "verboden",
     "ممنوع"
    ],
    [
     "het pasje",
     "البطاقة"
    ],
    [
     "invullen",
     "يملأ"
    ]
   ],
   "gram": {
    "t": "Modale werkwoorden",
    "ar": "الفعل المساعد في المكان الثاني، والفعل الأساسي (المصدر) في آخر الجملة: Ik wil een afspraak maken. جمل مفيدة جدًا: Kunt u dat herhalen? Kunt u langzaam praten? Ik begrijp het niet.",
    "head": [
     "",
     "kunnen",
     "willen",
     "moeten",
     "mogen"
    ],
    "rows": [
     [
      "ik",
      "kan",
      "wil",
      "moet",
      "mag"
     ],
     [
      "jij / je",
      "kunt (kan)",
      "wilt (wil)",
      "moet",
      "mag"
     ],
     [
      "u",
      "kunt",
      "wilt",
      "moet",
      "mag"
     ],
     [
      "hij / zij",
      "kan",
      "wil",
      "moet",
      "mag"
     ],
     [
      "wij / jullie / zij",
      "kunnen",
      "willen",
      "moeten",
      "mogen"
     ]
    ],
    "ex": [
     [
      "Ik wil een afspraak maken.",
      "أريد أن أحجز موعدًا."
     ],
     [
      "Mag ik hier parkeren?",
      "هل يُسمح لي بالوقوف هنا؟"
     ],
     [
      "U moet dit formulier invullen.",
      "يجب أن تملأ هذه الاستمارة."
     ]
    ],
    "nl": "Het modale werkwoord staat op plaats 2. Het hele werkwoord (infinitief) gaat naar het eind: Ik wil een afspraak maken. Handige zinnen: Kunt u dat herhalen? Kunt u langzaam praten? Ik begrijp het niet."
   },
   "listen": {
    "scene": "library",
    "who": {
     "A": [
      "Medewerker bibliotheek",
      "m"
     ],
     "B": [
      "Fatima",
      "f"
     ]
    },
    "lines": [
     [
      "B",
      "Goedemorgen. Ik wil graag een pasje voor de bibliotheek."
     ],
     [
      "A",
      "Dat kan. Dan moet u dit formulier invullen."
     ],
     [
      "B",
      "Sorry, ik begrijp het niet. Kunt u dat herhalen?"
     ],
     [
      "A",
      "Natuurlijk. U moet dit formulier invullen. En ik moet uw identiteitsbewijs zien."
     ],
     [
      "B",
      "Mag ik met een pen schrijven?"
     ],
     [
      "A",
      "Ja, dat mag. Kinderen tot achttien jaar krijgen het pasje gratis."
     ]
    ],
    "qs": [
     [
      "Wat wil Fatima?",
      [
       "een pasje",
       "een boek",
       "een afspraak"
      ],
      0
     ],
     [
      "Wat moet ze doen?",
      [
       "een formulier invullen",
       "betalen",
       "wachten"
      ],
      0
     ],
     [
      "Voor wie is het pasje gratis?",
      [
       "kinderen tot 18 jaar",
       "iedereen",
       "mensen boven 65"
      ],
      0
     ]
    ]
   },
   "read": {
    "title": "Regels van het zwembad",
    "text": "Regels zwembad De Golf\n- U moet douchen voor het zwemmen.\n- U mag niet rennen.\n- Eten en drinken mag alleen in het café.\n- Kinderen tot 8 jaar mogen alleen zwemmen met een volwassene.\n- Roken is verboden.",
    "qs": [
     [
      "Wat moet u doen voor het zwemmen?",
      [
       "douchen",
       "eten",
       "rennen"
      ],
      0
     ],
     [
      "Waar mag u eten?",
      [
       "in het café",
       "in het water",
       "overal"
      ],
      0
     ],
     [
      "Uw zoon is 6 jaar. Mag hij alleen zwemmen?",
      [
       "ja",
       "nee"
      ],
      1
     ]
    ]
   },
   "write": {
    "nl": "Schrijf een bericht aan uw buurvrouw.",
    "ar": "لا تستطيع حضور حفلة عيد ميلاد جارتك يوم السبت. اكتب رسالة: (1) اشكرها، (2) قل إنك لا تستطيع الحضور، (3) قل لماذا.",
    "model": "Hoi Els,\nBedankt voor de uitnodiging! Zaterdag kan ik helaas niet komen, want ik moet werken. Veel plezier!\nGroetjes,\nFatima",
    "check": [
     "bedanken",
     "niet kunnen komen",
     "reden met \"want\"",
     "groet"
    ],
    "task": "U kunt zaterdag niet naar het verjaardagsfeest van uw buurvrouw. Schrijf een bericht: (1) bedank haar, (2) zeg dat u niet kunt komen, (3) zeg waarom."
   },
   "speak": [
    [
     "U begrijpt de vraag niet. Wat zegt u?",
     "لا تفهم السؤال. ماذا تقول؟",
     "Sorry, ik begrijp het niet. Kunt u dat herhalen?"
    ],
    [
     "Wat wilt u later in Nederland doen?",
     "ماذا تريد أن تفعل لاحقًا في هولندا؟",
     "Ik wil werken en ik wil goed Nederlands spreken."
    ],
    [
     "U wilt hier parkeren. Wat vraagt u?",
     "تريد أن توقف سيارتك هنا. ماذا تسأل؟",
     "Mag ik hier parkeren?"
    ]
   ],
   "quiz": [
    [
     "Ik ___ goed zwemmen. (kunnen)",
     [
      "kan",
      "kunt",
      "kunnen"
     ],
     0
    ],
    [
     "___ u dat herhalen?",
     [
      "Kan",
      "Kunt",
      "Kunnen"
     ],
     1
    ],
    [
     "Hij ___ een nieuwe fiets kopen. (willen)",
     [
      "wilt",
      "wil",
      "willen"
     ],
     1
    ],
    [
     "Kies de goede zin:",
     [
      "Ik moet morgen werken.",
      "Ik moet werken morgen.",
      "Ik werken moet morgen."
     ],
     0
    ],
    [
     "\"Roken verboden\" betekent:",
     [
      "u mag hier roken",
      "u mag hier niet roken",
      "u moet hier roken"
     ],
     1
    ],
    [
     "Wij ___ hier niet parkeren. (mogen)",
     [
      "mag",
      "mogen",
      "moet"
     ],
     1
    ]
   ]
  },
  {
   "id": 14,
   "week": 3,
   "nl": "Werk",
   "ar": "العمل",
   "can": "Ik kan over werk praten, me ziek melden, een eenvoudige vacature lezen en niet en geen gebruiken.",
   "canAr": "أستطيع التحدث عن المهن والاعتذار عن العمل بسبب المرض وقراءة إعلان وظيفة واستعمال niet و geen.",
   "vocab": [
    [
     "het werk / de baan",
     "العمل / الوظيفة"
    ],
    [
     "de collega",
     "الزميل"
    ],
    [
     "de leidinggevende / de baas",
     "المدير / الرئيس"
    ],
    [
     "het rooster",
     "جدول العمل"
    ],
    [
     "vrij",
     "في إجازة"
    ],
    [
     "de vacature",
     "وظيفة شاغرة"
    ],
    [
     "solliciteren",
     "يتقدّم لوظيفة"
    ],
    [
     "de ervaring",
     "الخبرة"
    ],
    [
     "parttime / fulltime",
     "دوام جزئي / كامل"
    ],
    [
     "het salaris",
     "الراتب"
    ],
    [
     "de kok / de chauffeur",
     "الطبّاخ / السائق"
    ],
    [
     "de schoonmaker",
     "عامل النظافة"
    ],
    [
     "de verpleegkundige",
     "الممرّض"
    ],
    [
     "het cv",
     "السيرة الذاتية"
    ],
    [
     "Beterschap!",
     "أتمنى لك الشفاء!"
    ]
   ],
   "gram": {
    "t": "niet of geen?",
    "ar": "استعمل geen بدل een أو مع اسم بدون أداة. واستعمل niet في باقي الحالات: في آخر الجملة، قبل الصفة، قبل naar / in / op.",
    "head": [
     "positief",
     "negatief",
     "regel"
    ],
    "rows": [
     [
      "Ik heb een auto.",
      "Ik heb geen auto.",
      "een → geen"
     ],
     [
      "Ik heb tijd.",
      "Ik heb geen tijd.",
      "naamwoord zonder lidwoord → geen"
     ],
     [
      "Ik werk vandaag.",
      "Ik werk vandaag niet.",
      "niet aan het eind"
     ],
     [
      "De jas is duur.",
      "De jas is niet duur.",
      "niet voor een bijvoeglijk naamwoord"
     ],
     [
      "Ik ga naar school.",
      "Ik ga niet naar school.",
      "niet voor naar / in / op"
     ]
    ],
    "ex": [
     [
      "Ik kan vandaag niet werken.",
      "لا أستطيع العمل اليوم."
     ],
     [
      "Ervaring is niet nodig.",
      "الخبرة غير ضرورية."
     ],
     [
      "Wij hebben geen vacatures.",
      "ليس لدينا وظائف شاغرة."
     ]
    ],
    "nl": "Gebruik geen in plaats van een, of bij een zelfstandig naamwoord zonder lidwoord. Gebruik niet in alle andere gevallen: aan het eind van de zin, voor een bijvoeglijk naamwoord en voor naar / in / op."
   },
   "listen": {
    "scene": "phone",
    "who": {
     "A": [
      "Lisa (leidinggevende)",
      "f"
     ],
     "B": [
      "Yusuf",
      "m"
     ]
    },
    "lines": [
     [
      "A",
      "Met Lisa van Bakkerij Bol."
     ],
     [
      "B",
      "Hallo Lisa, met Yusuf. Ik ben ziek. Ik kan vandaag niet werken."
     ],
     [
      "A",
      "O, wat vervelend. Wat heb je?"
     ],
     [
      "B",
      "Ik heb buikpijn en ik heb geen energie."
     ],
     [
      "A",
      "Kun je morgen wel werken?"
     ],
     [
      "B",
      "Ik weet het niet. Ik bel morgenochtend om zeven uur."
     ],
     [
      "A",
      "Goed. Beterschap!"
     ]
    ],
    "qs": [
     [
      "Waarom belt Yusuf?",
      [
       "Hij is ziek.",
       "Hij is te laat.",
       "Hij wil vrij."
      ],
      0
     ],
     [
      "Wat heeft Yusuf?",
      [
       "buikpijn",
       "hoofdpijn",
       "koorts"
      ],
      0
     ],
     [
      "Wanneer belt hij weer?",
      [
       "morgenochtend om 7 uur",
       "vanavond",
       "morgen om 10 uur"
      ],
      0
     ]
    ]
   },
   "read": {
    "title": "Vacature",
    "text": "Vacature: medewerker supermarkt (parttime)\nWij zoeken een medewerker voor 20 uur per week.\nWat doe je? Je vult de vakken en je helpt klanten.\nWat vragen wij? Je spreekt een beetje Nederlands. Je kunt op zaterdag werken. Ervaring is niet nodig.\nInteresse? Stuur je cv naar werk@supermarkt-voorbeeld.nl.",
    "qs": [
     [
      "Hoeveel uur per week is het werk?",
      [
       "20",
       "40",
       "12"
      ],
      0
     ],
     [
      "Is ervaring nodig?",
      [
       "ja",
       "nee"
      ],
      1
     ],
     [
      "Op welke dag moet je kunnen werken?",
      [
       "zaterdag",
       "zondag",
       "maandag"
      ],
      0
     ]
    ]
   },
   "write": {
    "nl": "Reageer op de vacature.",
    "ar": "اكتب بريدًا قصيرًا ردًا على الوظيفة: من أنت، خبرتك، متى تستطيع العمل.",
    "model": "Beste meneer / mevrouw,\nMijn naam is Hassan Omar. Ik woon in Helmond. Ik wil graag bij uw supermarkt werken. Ik heb ervaring als verkoper. Ik kan op zaterdag en zondag werken. Mijn cv zit in de bijlage.\nMet vriendelijke groet,\nHassan Omar",
    "check": [
     "aanhef",
     "wie u bent",
     "ervaring",
     "wanneer u kunt werken",
     "afsluiting"
    ],
    "task": "Schrijf een korte e-mail als reactie op de vacature: wie bent u, welke ervaring hebt u en wanneer kunt u werken?"
   },
   "speak": [
    [
     "Wat is uw beroep?",
     "ما مهنتك؟",
     "Ik ben kok."
    ],
    [
     "Hebt u een auto?",
     "هل لديك سيارة؟",
     "Nee, ik heb geen auto. Ik heb een fiets."
    ],
    [
     "U kunt morgen niet werken. Wat zegt u tegen uw leidinggevende?",
     "لا تستطيع العمل غدًا. ماذا تقول لمديرك؟",
     "Ik kan morgen niet werken, want ik ben ziek."
    ]
   ],
   "quiz": [
    [
     "Ik heb ___ kinderen.",
     [
      "niet",
      "geen"
     ],
     1
    ],
    [
     "Ik werk vandaag ___.",
     [
      "niet",
      "geen"
     ],
     0
    ],
    [
     "De bus is ___ op tijd.",
     [
      "niet",
      "geen"
     ],
     0
    ],
    [
     "Hij heeft ___ tijd.",
     [
      "niet",
      "geen"
     ],
     1
    ],
    [
     "Een \"vacature\" is …",
     [
      "een vrije dag",
      "een vrije baan",
      "een salaris"
     ],
     1
    ],
    [
     "Uw collega is ziek. U zegt: …",
     [
      "Beterschap!",
      "Gefeliciteerd!",
      "Eet smakelijk!"
     ],
     0
    ]
   ]
  },
  {
   "id": 15,
   "week": 3,
   "nl": "De gemeente en formulieren",
   "ar": "البلدية والاستمارات",
   "can": "Ik kan een formulier invullen, een eenvoudige brief van de gemeente begrijpen en een formele brief beginnen en afsluiten.",
   "canAr": "أستطيع ملء استمارة وفهم رسالة بسيطة من البلدية وبدء رسالة رسمية وختمها.",
   "vocab": [
    [
     "de gemeente",
     "البلدية"
    ],
    [
     "het gemeentehuis",
     "مبنى البلدية"
    ],
    [
     "de balie",
     "مكتب الاستقبال"
    ],
    [
     "het formulier",
     "الاستمارة"
    ],
    [
     "de voornaam / de achternaam",
     "الاسم الأول / اسم العائلة"
    ],
    [
     "de geboortedatum",
     "تاريخ الميلاد"
    ],
    [
     "de geboorteplaats",
     "مكان الميلاد"
    ],
    [
     "de nationaliteit",
     "الجنسية"
    ],
    [
     "het identiteitsbewijs",
     "وثيقة الهوية"
    ],
    [
     "de handtekening",
     "التوقيع"
    ],
    [
     "het bsn (burgerservicenummer)",
     "رقم الخدمة المدنية"
    ],
    [
     "de brief",
     "الرسالة"
    ],
    [
     "meenemen",
     "يُحضِر معه"
    ],
    [
     "Geachte … / Met vriendelijke groet",
     "حضرة … / مع أطيب التحيات"
    ]
   ],
   "gram": {
    "t": "Formulieren en brieven",
    "ar": "يُكتب تاريخ الميلاد يوم-شهر-سنة: 12-03-1990. رقم bsn هو رقمك الشخصي للتواصل مع الحكومة، مثلًا للرعاية الصحية والضرائب. املأ كل خانات الاستمارة.",
    "head": [
     "situatie",
     "aanhef (begin)",
     "afsluiting (einde)"
    ],
    "rows": [
     [
      "formeel (gemeente, werk)",
      "Geachte mevrouw De Vries,",
      "Met vriendelijke groet,"
     ],
     [
      "neutraal",
      "Beste meneer Jansen,",
      "Met vriendelijke groet,"
     ],
     [
      "informeel (vriend, familie)",
      "Hoi Sara! / Beste Sara,",
      "Groetjes, / Liefs,"
     ]
    ],
    "ex": [
     [
      "Mag ik uw identiteitsbewijs?",
      "هل يمكنني رؤية وثيقة هويتك؟"
     ],
     [
      "Neem uw identiteitsbewijs mee.",
      "أحضر وثيقة هويتك معك."
     ],
     [
      "Vergeet uw handtekening niet.",
      "لا تنسَ توقيعك."
     ]
    ],
    "nl": "Een geboortedatum schrijf je als dag-maand-jaar: 12-03-1990. Het bsn is uw eigen persoonsnummer voor contact met de overheid, bijvoorbeeld voor zorg of belastingen. Vul op een formulier altijd alle vakjes in."
   },
   "listen": {
    "scene": "office",
    "who": {
     "A": [
      "Medewerker gemeente",
      "m"
     ],
     "B": [
      "Rana",
      "f"
     ]
    },
    "lines": [
     [
      "A",
      "Goedemorgen. Hebt u een afspraak?"
     ],
     [
      "B",
      "Ja, om tien uur. Mijn naam is Rana Haddad."
     ],
     [
      "A",
      "Mag ik uw identiteitsbewijs?"
     ],
     [
      "B",
      "Alstublieft."
     ],
     [
      "A",
      "Dank u. U komt voor een nieuw adres, toch?"
     ],
     [
      "B",
      "Ja, ik woon nu in de Molenstraat."
     ],
     [
      "A",
      "Wilt u dit formulier invullen? Vergeet uw handtekening niet."
     ]
    ],
    "qs": [
     [
      "Hoe laat is de afspraak van Rana?",
      [
       "10.00 uur",
       "10.30 uur",
       "9.00 uur"
      ],
      0
     ],
     [
      "Wat moet Rana laten zien?",
      [
       "haar identiteitsbewijs",
       "een brief",
       "haar bankpas"
      ],
      0
     ],
     [
      "Waarom is Rana bij de gemeente?",
      [
       "een nieuw adres",
       "een nieuw paspoort",
       "werk"
      ],
      0
     ]
    ]
   },
   "read": {
    "title": "Brief van de gemeente",
    "text": "Gemeente Voorbeeld\nAan: mevrouw R. Haddad, Molenstraat 8, Veghel\nDatum: 20 oktober\n\nBeste mevrouw Haddad,\nU hebt een afspraak bij de gemeente op dinsdag 3 november om 10.30 uur. Het adres is Markt 1. Neem uw identiteitsbewijs mee. Bent u te laat? Dan moet u een nieuwe afspraak maken. Kunt u niet komen? Bel ons dan op 012 - 345 67 89.\n\nMet vriendelijke groet,\nAfdeling Burgerzaken",
    "qs": [
     [
      "Wanneer is de afspraak?",
      [
       "dinsdag 3 november, 10.30 uur",
       "dinsdag 20 oktober, 10.30 uur",
       "maandag 3 november, 10.00 uur"
      ],
      0
     ],
     [
      "Wat moet mevrouw Haddad meenemen?",
      [
       "haar identiteitsbewijs",
       "een foto",
       "geld"
      ],
      0
     ],
     [
      "Ze is te laat. Wat gebeurt er?",
      [
       "Ze moet een nieuwe afspraak maken.",
       "Ze mag wachten.",
       "Ze moet bellen."
      ],
      0
     ]
    ]
   },
   "write": {
    "nl": "Vul het formulier in.",
    "ar": "املأ استمارة التسجيل (يمكنك اختراع البيانات).",
    "form": [
     "Voornaam",
     "Achternaam",
     "Geboortedatum (dd-mm-jjjj)",
     "Geboorteplaats",
     "Nationaliteit",
     "Adres",
     "Postcode en woonplaats",
     "Telefoonnummer",
     "Handtekening"
    ],
    "model": "Voornaam: Rana\nAchternaam: Haddad\nGeboortedatum: 05-04-1988\nGeboorteplaats: Aleppo\nNationaliteit: Syrisch\nAdres: Molenstraat 8\nPostcode en woonplaats: 5461 AB Veghel\nTelefoonnummer: 06 12 34 56 78\nHandtekening: R. Haddad",
    "check": [
     "alle velden",
     "datum als dd-mm-jjjj",
     "hoofdletters bij namen"
    ],
    "task": "Vul dit inschrijfformulier in. Voor de oefening mag u gegevens verzinnen."
   },
   "speak": [
    [
     "De medewerker vraagt: \"Wat is uw geboortedatum?\"",
     "الموظف يسأل: \"ما تاريخ ميلادك؟\"",
     "Mijn geboortedatum is vijf april negentienhonderdachtentachtig."
    ],
    [
     "U begrijpt een brief van de gemeente niet. Wat vraagt u?",
     "لا تفهم رسالة من البلدية. ماذا تسأل؟",
     "Ik begrijp deze brief niet. Kunt u mij helpen?"
    ],
    [
     "Hoe spelt u uw achternaam?",
     "كيف تتهجّى اسم عائلتك؟",
     "H – A – D – D – A – D."
    ]
   ],
   "quiz": [
    [
     "Een formele brief begint met …",
     [
      "Hoi!",
      "Geachte mevrouw …,",
      "Groetjes,"
     ],
     1
    ],
    [
     "Een formele brief eindigt met …",
     [
      "Liefs,",
      "Met vriendelijke groet,",
      "Doei!"
     ],
     1
    ],
    [
     "Geboortedatum 5 april 1988 =",
     [
      "05-04-1988",
      "04-05-1988",
      "1988-05-04"
     ],
     0
    ],
    [
     "\"de handtekening\" =",
     [
      "التوقيع",
      "الجنسية",
      "العنوان"
     ],
     0
    ],
    [
     "\"Neem uw paspoort mee.\" Wat doet u?",
     [
      "Ik laat mijn paspoort thuis.",
      "Ik neem mijn paspoort mee.",
      "Ik koop een nieuw paspoort."
     ],
     1
    ],
    [
     "\"achternaam\" =",
     [
      "اسم العائلة",
      "الاسم الأول"
     ],
     0
    ]
   ]
  },
  {
   "id": 16,
   "week": 4,
   "nl": "Het weer en vrije tijd",
   "ar": "الطقس ووقت الفراغ",
   "can": "Ik kan over het weer en de seizoenen praten en zeggen wat ik graag doe in mijn vrije tijd.",
   "canAr": "أستطيع التحدث عن الطقس والفصول وعمّا أحب أن أفعله في وقت الفراغ.",
   "vocab": [
    [
     "het weer",
     "الطقس"
    ],
    [
     "de zon / de regen / de wind",
     "الشمس / المطر / الريح"
    ],
    [
     "het regent / het sneeuwt",
     "إنها تمطر / إنها تثلج"
    ],
    [
     "het is warm / koud",
     "الجو حار / بارد"
    ],
    [
     "de graad (graden)",
     "درجة"
    ],
    [
     "de lente / de zomer",
     "الربيع / الصيف"
    ],
    [
     "de herfst / de winter",
     "الخريف / الشتاء"
    ],
    [
     "de hobby",
     "الهواية"
    ],
    [
     "sporten / voetballen",
     "يمارس الرياضة / يلعب كرة القدم"
    ],
    [
     "wandelen / fietsen / zwemmen",
     "يمشي / يركب الدراجة / يسبح"
    ],
    [
     "het weekend",
     "عطلة نهاية الأسبوع"
    ],
    [
     "graag",
     "بكل سرور / يحب أن"
    ],
    [
     "houden van",
     "يحبّ"
    ],
    [
     "leuk / saai",
     "ممتع / مملّ"
    ]
   ],
   "gram": {
    "t": "Wat vindt u leuk?",
    "ar": "ثلاث طرق للتعبير عن الحب: الفعل + graag؛ houden van + اسم؛ vinden + leuk / lekker.",
    "head": [
     "patroon",
     "voorbeeld",
     "العربية"
    ],
    "rows": [
     [
      "werkwoord + graag",
      "Ik fiets graag.",
      "أحبّ ركوب الدراجة"
     ],
     [
      "houden van + naamwoord",
      "Ik hou van voetbal.",
      "أحبّ كرة القدم"
     ],
     [
      "vinden + leuk / lekker",
      "Ik vind zwemmen leuk. Ik vind soep lekker.",
      "أجد السباحة ممتعة / أحب الحساء"
     ],
     [
      "niet graag",
      "Ik sport niet graag.",
      "لا أحبّ الرياضة"
     ]
    ],
    "ex": [
     [
      "Het regent vandaag.",
      "إنها تمطر اليوم."
     ],
     [
      "In de zomer is het warm.",
      "في الصيف الجو حار."
     ],
     [
      "In het weekend wandel ik graag.",
      "في عطلة نهاية الأسبوع أحب المشي."
     ]
    ],
    "nl": "Drie manieren om te zeggen dat u iets leuk vindt: werkwoord + graag; houden van + zelfstandig naamwoord; vinden + leuk / lekker."
   },
   "listen": {
    "scene": "radio",
    "who": {
     "R": [
      "Weerman",
      "m"
     ]
    },
    "lines": [
     [
      "R",
      "En dan het weer voor morgen. Morgenochtend regent het in het hele land. Het is koud: acht graden."
     ],
     [
      "R",
      "In de middag schijnt de zon. Aan de kust is er veel wind."
     ],
     [
      "R",
      "Zaterdag wordt het droog en iets warmer, met twaalf graden."
     ]
    ],
    "qs": [
     [
      "Hoe is het weer morgenochtend?",
      [
       "regen",
       "zon",
       "sneeuw"
      ],
      0
     ],
     [
      "Hoe warm wordt het zaterdag?",
      [
       "12 graden",
       "8 graden",
       "20 graden"
      ],
      0
     ],
     [
      "Waar is er veel wind?",
      [
       "aan de kust",
       "in de stad",
       "overal"
      ],
      0
     ]
    ]
   },
   "read": {
    "title": "Samen wandelen!",
    "text": "Hou je van wandelen? Wandel mee in Park De Wielewaal.\nWanneer? Elke zaterdag om 10.00 uur.\nHoe lang? Ongeveer een uur.\nWaar? Bij de ingang van het park.\nKosten? Gratis! Aanmelden is niet nodig.\nNeem een regenjas mee als het regent.",
    "qs": [
     [
      "Wanneer is de wandeling?",
      [
       "elke zaterdag om 10.00 uur",
       "elke zondag",
       "elke dag"
      ],
      0
     ],
     [
      "Wat kost de wandeling?",
      [
       "niets",
       "5 euro",
       "10 euro"
      ],
      0
     ],
     [
      "Moet u zich aanmelden?",
      [
       "ja",
       "nee"
      ],
      1
     ]
    ]
   },
   "write": {
    "nl": "Schrijf een bericht aan een vriend.",
    "ar": "تريد أن تفعل شيئًا مع صديق يوم السبت. اكتب: ماذا، في أي ساعة، أين.",
    "model": "Hoi Karim,\nZullen we zaterdag samen wandelen in het park? We kunnen om tien uur beginnen bij de ingang. Heb je tijd?\nGroetjes,\nAli",
    "check": [
     "wat",
     "hoe laat",
     "waar",
     "vraag"
    ],
    "task": "U wilt zaterdag iets doen met een vriend. Schrijf een bericht: wat gaan jullie doen, hoe laat en waar?"
   },
   "speak": [
    [
     "Wat doet u graag in het weekend?",
     "ماذا تحب أن تفعل في عطلة نهاية الأسبوع؟",
     "In het weekend wandel ik graag in het park met mijn kinderen."
    ],
    [
     "Hoe is het weer vandaag?",
     "كيف الطقس اليوم؟",
     "Vandaag is het koud en het regent."
    ],
    [
     "🚴 fietsen of 🏊 zwemmen: wat vindt u leuker? Waarom?",
     "ركوب الدراجة أم السباحة: ماذا تفضّل؟ ولماذا؟",
     "Ik vind fietsen leuker, want ik ben graag buiten."
    ]
   ],
   "quiz": [
    [
     "Het ___ . (regenen)",
     [
      "regent",
      "regen",
      "regenen"
     ],
     0
    ],
    [
     "Ik ___ graag. (fietsen)",
     [
      "fiets",
      "fietst",
      "fietsen"
     ],
     0
    ],
    [
     "Ik hou ___ voetbal.",
     [
      "van",
      "met",
      "voor"
     ],
     0
    ],
    [
     "Het seizoen na de zomer is …",
     [
      "de lente",
      "de herfst",
      "de winter"
     ],
     1
    ],
    [
     "Min 2 graden. Het is …",
     [
      "warm",
      "koud"
     ],
     1
    ],
    [
     "\"saai\" is het tegenovergestelde van …",
     [
      "leuk",
      "koud",
      "groot"
     ],
     0
    ]
   ]
  },
  {
   "id": 17,
   "week": 4,
   "nl": "Bellen, berichten en e-mails",
   "ar": "الاتصال والرسائل والبريد الإلكتروني",
   "can": "Ik kan de telefoon opnemen, een voicemail begrijpen en een kort bericht schrijven met alle gevraagde punten.",
   "canAr": "أستطيع الرد على الهاتف وفهم رسالة صوتية وكتابة رسالة قصيرة تتضمن كل النقاط المطلوبة.",
   "vocab": [
    [
     "bellen",
     "يتصل"
    ],
    [
     "terugbellen",
     "يعاود الاتصال"
    ],
    [
     "het bericht",
     "الرسالة"
    ],
    [
     "de voicemail",
     "البريد الصوتي"
    ],
    [
     "sturen",
     "يرسل"
    ],
    [
     "antwoorden",
     "يجيب"
    ],
    [
     "het onderwerp",
     "الموضوع"
    ],
    [
     "de bijlage",
     "المرفق"
    ],
    [
     "bereikbaar",
     "يمكن الوصول إليه"
    ],
    [
     "Met … (aan de telefoon)",
     "معك … (على الهاتف)"
    ],
    [
     "ophalen",
     "يأخذ / يُقلّ"
    ],
    [
     "Groetjes / Met vriendelijke groet",
     "تحياتي / مع أطيب التحيات"
    ]
   ],
   "gram": {
    "t": "Een kort bericht in 4 stappen",
    "ar": "هذه مهارة أساسية لامتحان الكتابة A2: أجب عن كل نقطة في المهمة. استعمل want للسبب مع الترتيب العادي.",
    "head": [
     "stap",
     "voorbeeld"
    ],
    "rows": [
     [
      "1. aanhef",
      "Beste juf Karin,"
     ],
     [
      "2. reden",
      "Mijn zoon Adam is ziek."
     ],
     [
      "3. informatie / vraag",
      "Hij komt vandaag niet naar school. Kunt u het huiswerk sturen?"
     ],
     [
      "4. afsluiting",
      "Met vriendelijke groet, Samir Aziz"
     ]
    ],
    "ex": [
     [
      "Met Samir.",
      "معك سمير."
     ],
     [
      "Wilt u mij terugbellen?",
      "هل يمكنك معاودة الاتصال بي؟"
     ],
     [
      "Ik stuur de foto in de bijlage.",
      "أرسل الصورة في المرفق."
     ]
    ],
    "nl": "Dit is heel belangrijk voor het examen Schrijven A2: geef antwoord op ALLE punten van de opdracht. Een reden geef je met \"want\" (gewone woordvolgorde): Ik kom niet, want ik ben ziek."
   },
   "listen": {
    "scene": "phone",
    "who": {
     "V": [
      "Juf Karin (voicemail)",
      "f"
     ]
    },
    "lines": [
     [
      "V",
      "Goedemiddag, u spreekt met juf Karin van basisschool De Regenboog. Ik bel over Adam. Adam heeft koorts."
     ],
     [
      "V",
      "Kunt u hem vandaag om één uur ophalen? Wilt u mij terugbellen?"
     ],
     [
      "V",
      "Mijn nummer is 0413 - 25 70 30. Dank u wel, tot ziens.",
      "Mijn nummer is nul vier dertien, vijfentwintig, zeventig, dertig. Dank u wel, tot ziens."
     ]
    ],
    "qs": [
     [
      "Wie belt?",
      [
       "de juf van school",
       "de huisarts",
       "de buurvrouw"
      ],
      0
     ],
     [
      "Wat is er met Adam?",
      [
       "Hij heeft koorts.",
       "Hij is gevallen.",
       "Hij is zijn huiswerk vergeten."
      ],
      0
     ],
     [
      "Wat moet de ouder doen?",
      [
       "Adam om 13.00 uur ophalen en terugbellen",
       "naar de huisarts gaan",
       "niets"
      ],
      0
     ]
    ]
   },
   "read": {
    "title": "E-mail van de sportclub",
    "text": "Van: info@sportclub-voorbeeld.nl\nOnderwerp: Training gaat niet door\n\nBeste leden,\nDe voetbaltraining van woensdag 11 november gaat niet door. Het veld is te nat. De volgende training is op zaterdag om 10.00 uur. Vragen? Stuur een e-mail of bel Marco: 06 - 12 34 56 78.\n\nSportieve groet,\nHet bestuur",
    "qs": [
     [
      "Waarom is er geen training?",
      [
       "Het veld is te nat.",
       "De trainer is ziek.",
       "Het is vakantie."
      ],
      0
     ],
     [
      "Wanneer is de volgende training?",
      [
       "zaterdag om 10.00 uur",
       "woensdag om 10.00 uur",
       "zondag"
      ],
      0
     ],
     [
      "Hoe kunt u een vraag stellen?",
      [
       "mailen of bellen",
       "alleen mailen",
       "langskomen"
      ],
      0
     ]
    ]
   },
   "write": {
    "nl": "Schrijf een bericht aan juf Karin.",
    "ar": "لا تستطيع أخذ آدم في الساعة 13.00 لكنك تستطيع في 14.00. اكتب رسالة للمعلّمة.",
    "model": "Beste juf Karin,\nBedankt voor uw bericht. Ik kan Adam niet om één uur ophalen, want ik moet werken. Ik kom om twee uur. Is dat goed?\nMet vriendelijke groet,\nSamir Aziz",
    "check": [
     "aanhef",
     "niet om 13.00 + reden",
     "wel om 14.00",
     "vraag of het goed is",
     "afsluiting"
    ],
    "task": "U kunt Adam niet om 13.00 uur ophalen. Om 14.00 uur kunt u wel. Schrijf een bericht aan de juf."
   },
   "speak": [
    [
     "U belt de school. Uw dochter is ziek. Wat zegt u?",
     "تتصل بالمدرسة. ابنتك مريضة. ماذا تقول؟",
     "Goedemorgen, met … , de vader van Lina. Lina is ziek. Ze komt vandaag niet naar school."
    ],
    [
     "De telefoon gaat. U neemt op. Wat zegt u?",
     "الهاتف يرن وترد. ماذا تقول؟",
     "Met … (uw naam)."
    ],
    [
     "U spreekt een voicemail in voor de tandarts: u wilt een afspraak.",
     "اترك رسالة صوتية لطبيب الأسنان: تريد موعدًا.",
     "Goedemiddag, met … . Ik wil graag een afspraak maken. Mijn nummer is … . Wilt u mij terugbellen?"
    ]
   ],
   "quiz": [
    [
     "Aan de telefoon zegt u: …",
     [
      "Ik ben Samir.",
      "Met Samir.",
      "Hier Samir is."
     ],
     1
    ],
    [
     "\"Wilt u mij terugbellen?\" betekent:",
     [
      "Bel mij later nog een keer.",
      "Stuur een brief.",
      "Kom naar school."
     ],
     0
    ],
    [
     "Een document bij een e-mail is een …",
     [
      "bijlage",
      "onderwerp",
      "bericht"
     ],
     0
    ],
    [
     "Ik kom niet, ___ ik ben ziek.",
     [
      "want",
      "omdat",
      "maar"
     ],
     0
    ],
    [
     "Formele afsluiting:",
     [
      "Doei!",
      "Met vriendelijke groet,",
      "Liefs,"
     ],
     1
    ],
    [
     "In het A2-examen Schrijven moet u …",
     [
      "op alle punten van de opdracht antwoorden",
      "alleen één zin schrijven",
      "een lang verhaal schrijven"
     ],
     0
    ]
   ]
  },
  {
   "id": 18,
   "week": 4,
   "nl": "School en kinderen",
   "ar": "المدرسة والأطفال",
   "can": "Ik kan met de juf praten, een brief van school begrijpen en scheidbare werkwoorden gebruiken.",
   "canAr": "أستطيع التحدث مع المعلّمة وفهم رسالة المدرسة واستعمال الأفعال المنفصلة.",
   "vocab": [
    [
     "de basisschool",
     "المدرسة الابتدائية"
    ],
    [
     "de juf / de meester",
     "المعلّمة / المعلّم"
    ],
    [
     "de klas",
     "الصف"
    ],
    [
     "het schoolplein",
     "ساحة المدرسة"
    ],
    [
     "de ouderavond",
     "اجتماع أولياء الأمور"
    ],
    [
     "brengen",
     "يوصل"
    ],
    [
     "meenemen",
     "يأخذ معه"
    ],
    [
     "meegeven",
     "يعطي ليأخذه معه"
    ],
    [
     "opstaan",
     "ينهض من النوم"
    ],
    [
     "opbellen",
     "يتصل هاتفيًا"
    ],
    [
     "de gymles",
     "حصة الرياضة"
    ],
    [
     "de schoolvakantie",
     "العطلة المدرسية"
    ],
    [
     "het huiswerk",
     "الواجب المنزلي"
    ],
    [
     "het rapport",
     "بطاقة العلامات"
    ]
   ],
   "gram": {
    "t": "Scheidbare werkwoorden",
    "ar": "الأفعال المنفصلة لها جزء أول (op, mee, terug, aan, uit …) ينتقل إلى آخر الجملة. مع فعل مساعد يبقى الفعل كاملًا في آخر الجملة.",
    "head": [
     "werkwoord",
     "zin",
     "met modaal werkwoord"
    ],
    "rows": [
     [
      "opstaan",
      "Ik sta om zeven uur op.",
      "Ik moet om zeven uur opstaan."
     ],
     [
      "ophalen",
      "Ik haal mijn zoon om drie uur op.",
      "Ik kan mijn zoon om drie uur ophalen."
     ],
     [
      "meenemen",
      "Neem je gymschoenen mee!",
      "Je moet je gymschoenen meenemen."
     ],
     [
      "opbellen",
      "Ik bel de school op.",
      "Ik wil de school opbellen."
     ]
    ],
    "ex": [
     [
      "Hoe laat sta je op?",
      "متى تنهض من النوم؟"
     ],
     [
      "Ik breng mijn dochter naar school.",
      "أوصل ابنتي إلى المدرسة."
     ],
     [
      "Wanneer is de ouderavond?",
      "متى اجتماع أولياء الأمور؟"
     ]
    ],
    "nl": "Scheidbare werkwoorden hebben een eerste deel (op, mee, terug, aan, uit …) dat naar het eind van de zin gaat. Met een modaal werkwoord blijft het hele werkwoord samen aan het eind."
   },
   "listen": {
    "scene": "schoolyard",
    "who": {
     "A": [
      "Juf",
      "f"
     ],
     "B": [
      "Vader van Adam",
      "m"
     ]
    },
    "lines": [
     [
      "A",
      "Goedemiddag! U bent de vader van Adam, toch?"
     ],
     [
      "B",
      "Ja, dat klopt."
     ],
     [
      "A",
      "Morgen heeft Adam gymles. Wilt u zijn gymschoenen meegeven?"
     ],
     [
      "B",
      "Natuurlijk. Hoe laat is de school morgen uit?"
     ],
     [
      "A",
      "Morgen is het woensdag. Dan is de school om twaalf uur uit."
     ],
     [
      "B",
      "Goed, dan haal ik hem om twaalf uur op."
     ]
    ],
    "qs": [
     [
      "Wat heeft Adam morgen?",
      [
       "gymles",
       "zwemles",
       "vrij"
      ],
      0
     ],
     [
      "Wat moet Adam meenemen?",
      [
       "gymschoenen",
       "zwemspullen",
       "huiswerk"
      ],
      0
     ],
     [
      "Hoe laat haalt de vader Adam op?",
      [
       "12.00 uur",
       "15.00 uur",
       "14.00 uur"
      ],
      0
     ]
    ]
   },
   "read": {
    "title": "Brief van school",
    "text": "Beste ouders,\nVolgende week is er veel te doen.\n- Maandag 16 november: de klas gaat naar de kinderboerderij (een kleine boerderij met dieren). Uw kind moet laarzen meenemen.\n- Woensdag 18 november: de school is om 12.00 uur uit.\n- Donderdag 19 november: ouderavond, van 19.00 tot 20.30 uur. U kunt met de juf of meester praten over het rapport.\nMet vriendelijke groet,\nTeam De Regenboog",
    "qs": [
     [
      "Wat moet uw kind maandag meenemen?",
      [
       "laarzen",
       "gymschoenen",
       "eten"
      ],
      0
     ],
     [
      "Wanneer is de ouderavond?",
      [
       "donderdag om 19.00 uur",
       "woensdag om 12.00 uur",
       "maandag"
      ],
      0
     ],
     [
      "Waarover kunt u op de ouderavond praten?",
      [
       "over het rapport",
       "over de vakantie",
       "over het eten"
      ],
      0
     ]
    ]
   },
   "write": {
    "nl": "Schrijf een bericht aan de juf.",
    "ar": "لا تستطيع حضور اجتماع أولياء الأمور. اكتب للمعلّمة: (1) لن تحضر، (2) لماذا، (3) اطلب موعدًا آخر.",
    "model": "Beste juf,\nIk kan donderdag niet naar de ouderavond komen, want ik moet werken. Kunnen we een andere afspraak maken? Ik kan op maandag of dinsdag na school.\nMet vriendelijke groet,\nSamir Aziz",
    "check": [
     "aanhef",
     "niet komen",
     "reden",
     "vraag om andere afspraak",
     "afsluiting"
    ],
    "task": "U kunt niet naar de ouderavond komen. Schrijf aan de juf: (1) u kunt niet komen, (2) waarom niet, (3) vraag om een andere afspraak."
   },
   "speak": [
    [
     "Hoe laat staat u op?",
     "متى تنهض من النوم؟",
     "Ik sta om half zeven op."
    ],
    [
     "Wie brengt uw kinderen naar school?",
     "من يوصل أطفالك إلى المدرسة؟",
     "Ik breng mijn kinderen naar school. Mijn vrouw haalt ze op."
    ],
    [
     "De juf vraagt: \"Kunt u donderdag naar de ouderavond komen?\"",
     "المعلّمة تسأل: \"هل يمكنك الحضور إلى اجتماع أولياء الأمور يوم الخميس؟\"",
     "Ja, ik kom graag. / Nee, dan moet ik werken."
    ]
   ],
   "quiz": [
    [
     "Kies de goede zin (opstaan):",
     [
      "Ik opsta om 7 uur.",
      "Ik sta om 7 uur op.",
      "Ik sta op om 7 uur op."
     ],
     1
    ],
    [
     "Kies de goede zin (ophalen + moeten):",
     [
      "Ik moet mijn dochter ophalen.",
      "Ik moet mijn dochter haal op.",
      "Ik moet ophalen mijn dochter."
     ],
     0
    ],
    [
     "\"de juf\" is …",
     [
      "een lerares op de basisschool",
      "een moeder",
      "een dokter"
     ],
     0
    ],
    [
     "Wie gaan er naar de ouderavond?",
     [
      "de ouders",
      "de kinderen",
      "de buren"
     ],
     0
    ],
    [
     "Neem je jas ___!",
     [
      "mee",
      "op",
      "uit"
     ],
     0
    ],
    [
     "Het huiswerk maakt u …",
     [
      "op school",
      "thuis"
     ],
     1
    ]
   ]
  },
  {
   "id": 19,
   "week": 4,
   "nl": "Plannen maken",
   "ar": "وضع الخطط",
   "can": "Ik kan over plannen praten met \"gaan + infinitief\", een uitnodiging aannemen of afslaan en iemand feliciteren.",
   "canAr": "أستطيع التحدث عن الخطط باستعمال gaan + المصدر وقبول دعوة أو رفضها وتهنئة شخص.",
   "vocab": [
    [
     "het plan",
     "الخطة"
    ],
    [
     "volgende week",
     "الأسبوع القادم"
    ],
    [
     "vanavond",
     "هذا المساء"
    ],
    [
     "de verjaardag",
     "عيد الميلاد"
    ],
    [
     "jarig zijn",
     "يحتفل بعيد ميلاده"
    ],
    [
     "het feest",
     "الحفلة"
    ],
    [
     "uitnodigen",
     "يدعو"
    ],
    [
     "de uitnodiging",
     "الدعوة"
    ],
    [
     "op bezoek gaan",
     "يزور"
    ],
    [
     "Gefeliciteerd!",
     "مبروك!"
    ],
    [
     "misschien",
     "ربما"
    ],
    [
     "zeker",
     "بالتأكيد"
    ],
    [
     "laten weten",
     "يُعلِم"
    ],
    [
     "het cadeau",
     "الهدية"
    ],
    [
     "samen",
     "معًا"
    ]
   ],
   "gram": {
    "t": "Toekomst: gaan + infinitief",
    "ar": "للخطط استعمل gaan + المصدر في آخر الجملة. ويمكن استعمال المضارع مع كلمة زمن. تمهيد لـ A2: ستتعلم هناك الماضي مثل Ik heb gewerkt.",
    "head": [
     "Nederlands",
     "العربية"
    ],
    "rows": [
     [
      "Ik ga morgen boodschappen doen.",
      "سأتسوّق غدًا."
     ],
     [
      "Wat ga je zaterdag doen?",
      "ماذا ستفعل يوم السبت؟"
     ],
     [
      "Volgende week bel ik je.",
      "سأتصل بك الأسبوع القادم."
     ],
     [
      "Wij gaan op bezoek bij oma.",
      "سنزور الجدّة."
     ]
    ],
    "ex": [
     [
      "Gefeliciteerd met je verjaardag!",
      "عيد ميلاد سعيد!"
     ],
     [
      "Ik kom zeker.",
      "سآتي بالتأكيد."
     ],
     [
      "Misschien kom ik later.",
      "ربما آتي لاحقًا."
     ]
    ],
    "nl": "Voor plannen gebruik je gaan + infinitief aan het eind: Ik ga morgen boodschappen doen. Je kunt ook de tegenwoordige tijd gebruiken met een tijdwoord: Volgende week bel ik je. Vooruitblik op A2: daar leer je ook de verleden tijd, bijvoorbeeld \"Ik heb gewerkt\" en \"Ik ben naar school gegaan\"."
   },
   "listen": {
    "scene": "street",
    "who": {
     "A": [
      "Sara",
      "f"
     ],
     "B": [
      "Karim",
      "m"
     ]
    },
    "lines": [
     [
      "A",
      "Hoi Karim! Wat ga je zaterdag doen?"
     ],
     [
      "B",
      "Zaterdag ga ik naar de verjaardag van mijn broer. Hij wordt dertig."
     ],
     [
      "A",
      "Leuk! Wat geef je hem?"
     ],
     [
      "B",
      "Ik geef hem een boek. En jij? Wat ga jij doen?"
     ],
     [
      "A",
      "Ik ga met mijn kinderen naar het zwembad. Zondag ga ik misschien bij mijn oma op bezoek."
     ]
    ],
    "qs": [
     [
      "Waar gaat Karim zaterdag naartoe?",
      [
       "naar de verjaardag van zijn broer",
       "naar het zwembad",
       "naar zijn oma"
      ],
      0
     ],
     [
      "Hoe oud wordt de broer van Karim?",
      [
       "30",
       "13",
       "33"
      ],
      0
     ],
     [
      "Wat doet Sara misschien op zondag?",
      [
       "bij haar oma op bezoek gaan",
       "zwemmen",
       "werken"
      ],
      0
     ]
    ]
   },
   "read": {
    "title": "Uitnodiging",
    "text": "Uitnodiging!\nLina wordt 5 jaar! Kom je naar haar feestje?\nWanneer: zaterdag 14 november, van 14.00 tot 16.30 uur\nWaar: Molenstraat 8, Veghel\nWat gaan we doen? Spelletjes, taart eten en knutselen.\nLaat je het weten voor woensdag 11 november? Bel of app Rana: 06 - 98 76 54 32.\nTot dan!",
    "qs": [
     [
      "Hoe oud wordt Lina?",
      [
       "4",
       "5",
       "15"
      ],
      1
     ],
     [
      "Hoe laat is het feestje afgelopen?",
      [
       "16.30 uur",
       "14.00 uur",
       "12.00 uur"
      ],
      0
     ],
     [
      "Wat moet u doen voor 11 november?",
      [
       "laten weten of u komt",
       "een cadeau kopen",
       "taart bakken"
      ],
      0
     ]
    ]
   },
   "write": {
    "nl": "Antwoord op de uitnodiging.",
    "ar": "ردّ على الدعوة: ستأتي مع ابنك، واسأل ماذا تحب لينا كهدية.",
    "model": "Hoi Rana,\nBedankt voor de uitnodiging! Mijn zoon Adam en ik komen graag. Wat wil Lina graag als cadeau?\nTot zaterdag!\nGroetjes,\nSamir",
    "check": [
     "bedanken",
     "wie komt",
     "vraag over cadeau",
     "groet"
    ],
    "task": "Antwoord op de uitnodiging: u komt met uw zoon, en u vraagt wat Lina graag als cadeau wil."
   },
   "speak": [
    [
     "Wat gaat u volgend weekend doen?",
     "ماذا ستفعل في عطلة نهاية الأسبوع القادمة؟",
     "Volgend weekend ga ik naar mijn familie in Utrecht."
    ],
    [
     "Uw buurman is jarig. Wat zegt u?",
     "جارك يحتفل بعيد ميلاده. ماذا تقول؟",
     "Gefeliciteerd met uw verjaardag!"
    ],
    [
     "Een vriend nodigt u uit voor een feest. U kunt niet. Wat zegt u?",
     "صديق يدعوك إلى حفلة ولا تستطيع الحضور. ماذا تقول؟",
     "Bedankt! Helaas kan ik niet komen, want ik moet werken."
    ]
   ],
   "quiz": [
    [
     "Morgen ___ ik naar de markt.",
     [
      "ga",
      "gaat",
      "gaan"
     ],
     0
    ],
    [
     "Wat ga je doen? — Ik ga ___.",
     [
      "zwemmen",
      "zwem",
      "zwemt"
     ],
     0
    ],
    [
     "Iemand is jarig. U zegt: …",
     [
      "Beterschap!",
      "Gefeliciteerd!",
      "Sorry!"
     ],
     1
    ],
    [
     "\"Laat het weten\" betekent:",
     [
      "Zeg of u komt.",
      "Kom niet.",
      "Bel niet."
     ],
     0
    ],
    [
     "\"misschien\" =",
     [
      "ربما",
      "بالتأكيد",
      "أبدًا"
     ],
     0
    ],
    [
     "\"de uitnodiging\" =",
     [
      "الدعوة",
      "الهدية",
      "الحفلة"
     ],
     0
    ]
   ]
  },
  {
   "id": 20,
   "week": 4,
   "nl": "Grote herhaling",
   "ar": "مراجعة شاملة",
   "review": true,
   "can": "Ik kan alles van week 1 tot en met 4 samen gebruiken. Vandaag: een gemengde toets met vragen van alle dagen. Luister daarna opnieuw naar elke dag met een score onder 2 van 3.",
   "canAr": "أستطيع استعمال كل ما تعلمته في الأسابيع 1–4. اليوم: اختبار مختلط من كل الأيام، ثم أعد الاستماع لأي يوم حصلت فيه على أقل من 2/3.",
   "vocab": [],
   "write": {
    "nl": "Schrijf een e-mail aan uw nieuwe buurvrouw.",
    "ar": "اكتب بريدًا لجارتك الجديدة (6–8 جمل): عرّف بنفسك وعائلتك ومن أين أنت، وادعُها لشرب الشاي يوم السبت (مع الساعة).",
    "model": "Beste buurvrouw,\nMijn naam is Rana Haddad. Ik woon op nummer 8. Ik kom uit Syrië. Ik woon hier met mijn man en twee kinderen. Mijn zoon is zeven en mijn dochter is vier. Wilt u zaterdag om drie uur thee drinken bij ons? Laat u het weten?\nMet vriendelijke groet,\nRana",
    "check": [
     "aanhef",
     "naam + adres",
     "land",
     "familie",
     "uitnodiging met dag en tijd",
     "afsluiting"
    ],
    "task": "Schrijf een e-mail aan uw nieuwe buurvrouw (6 tot 8 zinnen). Stel uzelf voor, vertel over uw familie en waar u vandaan komt, en nodig haar uit voor thee op zaterdag (met tijd)."
   },
   "speak": [
    [
     "Vertel iets over uzelf: naam, land, woonplaats, familie, werk of school.",
     "تحدث عن نفسك: الاسم، البلد، مكان السكن، العائلة، العمل أو الدراسة.",
     "Ik heet … . Ik kom uit … en ik woon in … . Ik ben getrouwd en ik heb … kinderen. Ik leer Nederlands op de taalschool."
    ],
    [
     "Wat doet u op een normale dag?",
     "ماذا تفعل في يوم عادي؟",
     "'s Ochtends breng ik mijn kinderen naar school. Daarna ga ik naar de les. 's Avonds kook ik."
    ],
    [
     "U bent ziek. U belt de huisarts. Wat zegt u?",
     "أنت مريض. تتصل بطبيب العائلة. ماذا تقول؟",
     "Goedemorgen, met … . Ik ben ziek. Ik heb sinds gisteren koorts. Kan ik vandaag komen?"
    ],
    [
     "Wat gaat u volgend jaar doen?",
     "ماذا ستفعل في السنة القادمة؟",
     "Volgend jaar ga ik werken en ik ga het examen doen."
    ]
   ]
  }
 ],
 "EXAM": {
  "note": "Dit proefexamen is onze eigen oefentoets op niveau A1, in de vorm van het inburgeringsexamen A2 van DUO (Lezen, Luisteren, Schrijven en Spreken als aparte onderdelen). Het is geen officieel examen van DUO. De richtlijnen voor de score zijn van ons, niet van DUO.",
  "noteAr": "هذا الامتحان التجريبي من إعدادنا بمستوى A1 وعلى شكل امتحان الاندماج A2 من DUO. ليس امتحانًا رسميًا، ونسب النجاح المذكورة إرشادية من عندنا وليست معايير DUO.",
  "lezen": {
   "minutes": 30,
   "pass": 9,
   "texts": [
    {
     "title": "Bord bij de apotheek",
     "text": "Apotheek De Brug\nmaandag t/m vrijdag: 8.30 – 17.30 uur\nzaterdag: 10.00 – 13.00 uur\nzondag: gesloten\nBuiten openingstijden: bel de dienstapotheek, 0900 - 123 45 67",
     "qs": [
      [
       "Het is zaterdag 14.00 uur. Is de apotheek open?",
       [
        "ja",
        "nee"
       ],
       1
      ],
      [
       "Het is zondag en u hebt een medicijn nodig. Wat doet u?",
       [
        "Ik bel de dienstapotheek.",
        "Ik wacht tot maandag.",
        "Ik ga naar Apotheek De Brug."
       ],
       0
      ]
     ]
    },
    {
     "title": "Bericht van Tom",
     "text": "Hoi Ahmad,\nIk ben morgen ziek. Kun jij mijn dienst doen? Mijn dienst begint om 7.00 uur en stopt om 15.00 uur. Ik werk vrijdag voor jou, dan ben jij vrij. Laat je het vandaag weten?\nGroetjes, Tom",
     "qs": [
      [
       "Wat vraagt Tom?",
       [
        "Of Ahmad morgen voor hem werkt.",
        "Of Ahmad ziek is.",
        "Of Ahmad vrijdag werkt."
       ],
       0
      ],
      [
       "Wanneer werkt Tom voor Ahmad?",
       [
        "morgen",
        "vrijdag",
        "vandaag"
       ],
       1
      ],
      [
       "Hoe laat stopt de dienst?",
       [
        "7.00 uur",
        "15.00 uur",
        "17.00 uur"
       ],
       1
      ]
     ]
    },
    {
     "title": "Taalcafé",
     "text": "Gratis taalcafé in de bibliotheek!\nOefen Nederlands met vrijwilligers.\nElke dinsdag van 19.00 tot 20.30 uur.\nVoor iedereen vanaf 18 jaar.\nKoffie en thee zijn gratis.\nAanmelden is niet nodig.",
     "qs": [
      [
       "Wat kost het taalcafé?",
       [
        "niets",
        "2 euro",
        "koffie kost geld"
       ],
       0
      ],
      [
       "Wie mag naar het taalcafé?",
       [
        "iedereen vanaf 18 jaar",
        "alleen kinderen",
        "alleen vrijwilligers"
       ],
       0
      ],
      [
       "Moet u zich aanmelden?",
       [
        "ja",
        "nee"
       ],
       1
      ]
     ]
    },
    {
     "title": "Brief over afval",
     "text": "Beste bewoner,\nVanaf 1 januari halen wij het groente-, fruit- en tuinafval (gft) op maandag op. Het oud papier halen wij elke tweede woensdag van de maand op. Zet de container voor 7.30 uur aan de straat.\nGemeente Voorbeeld",
     "qs": [
      [
       "Wanneer haalt de gemeente het gft op?",
       [
        "op maandag",
        "op woensdag",
        "elke dag"
       ],
       0
      ],
      [
       "Hoe laat moet de container aan de straat staan?",
       [
        "voor 7.30 uur",
        "na 7.30 uur",
        "om 12.00 uur"
       ],
       0
      ]
     ]
    },
    {
     "title": "Bericht van de docent",
     "text": "Hoi Sara,\nDe les van morgen is niet om 9.00 uur, maar om 10.30 uur. Neem je boek en je schrift mee.\nGroet, juf Anne",
     "qs": [
      [
       "Hoe laat begint de les morgen?",
       [
        "9.00 uur",
        "10.30 uur",
        "10.00 uur"
       ],
       1
      ],
      [
       "Wat moet Sara meenemen?",
       [
        "haar boek en schrift",
        "haar laptop",
        "niets"
       ],
       0
      ]
     ]
    }
   ]
  },
  "luisteren": {
   "pass": 7,
   "frags": [
    {
     "scene": "dentist",
     "who": {
      "A": [
       "Assistente tandarts",
       "f"
      ]
     },
     "lines": [
      [
       "A",
       "Goedemorgen, dit is de tandartspraktijk. U hebt morgen om half drie een afspraak. De tandarts is morgen ziek. Kunt u op vrijdag om tien uur komen? Wilt u ons terugbellen?"
      ]
     ],
     "qs": [
      [
       "Waarom belt de praktijk?",
       [
        "De tandarts is ziek.",
        "U bent te laat.",
        "U moet betalen."
       ],
       0
      ],
      [
       "Wat is de nieuwe afspraak?",
       [
        "vrijdag 10.00 uur",
        "morgen 14.30 uur",
        "vrijdag 14.30 uur"
       ],
       0
      ]
     ]
    },
    {
     "scene": "station",
     "who": {
      "O": [
       "Omroep",
       "m"
      ]
     },
     "lines": [
      [
       "O",
       "Attentie, reizigers naar Den Bosch. De trein van 8.42 uur rijdt vandaag niet. Neem de bus voor het station. De bus vertrekt om 8.50 uur.",
       "Attentie, reizigers naar Den Bosch. De trein van acht uur tweeënveertig rijdt vandaag niet. Neem de bus voor het station. De bus vertrekt om acht uur vijftig."
      ]
     ],
     "qs": [
      [
       "Wat is er met de trein van 8.42 uur?",
       [
        "Hij rijdt niet.",
        "Hij heeft 10 minuten vertraging.",
        "Hij vertrekt van een ander spoor."
       ],
       0
      ],
      [
       "Hoe laat vertrekt de bus?",
       [
        "8.50 uur",
        "8.42 uur",
        "9.50 uur"
       ],
       0
      ]
     ]
    },
    {
     "scene": "market",
     "who": {
      "A": [
       "Verkoper",
       "m"
      ],
      "B": [
       "Klant",
       "f"
      ]
     },
     "lines": [
      [
       "A",
       "Goedemorgen! Wat mag het zijn?"
      ],
      [
       "B",
       "Een kilo tomaten en een halve kilo uien, alstublieft."
      ],
      [
       "A",
       "Anders nog iets?"
      ],
      [
       "B",
       "Nee, dat is alles. Wat kost het?"
      ],
      [
       "A",
       "Dat is drie euro veertig."
      ]
     ],
     "qs": [
      [
       "Wat koopt de vrouw?",
       [
        "tomaten en uien",
        "tomaten en appels",
        "alleen uien"
       ],
       0
      ],
      [
       "Wat moet ze betalen?",
       [
        "€ 3,40",
        "€ 4,30",
        "€ 3,14"
       ],
       0
      ]
     ]
    },
    {
     "scene": "home",
     "who": {
      "A": [
       "Jeroen",
       "m"
      ],
      "B": [
       "Mariam",
       "f"
      ]
     },
     "lines": [
      [
       "A",
       "Hallo! Ik ben Jeroen, je nieuwe buurman van nummer tien."
      ],
      [
       "B",
       "Hallo, ik ben Mariam. Welkom!"
      ],
      [
       "A",
       "Dank je. Zaterdagavond geef ik een feestje. Het wordt misschien wat lawaaierig. Wil je ook komen?"
      ],
      [
       "B",
       "Leuk, dank je! Hoe laat?"
      ],
      [
       "A",
       "Vanaf acht uur."
      ]
     ],
     "qs": [
      [
       "Op welk nummer woont Jeroen?",
       [
        "8",
        "10",
        "12"
       ],
       1
      ],
      [
       "Hoe laat begint het feestje?",
       [
        "om 20.00 uur",
        "om 18.00 uur",
        "om 10.00 uur"
       ],
       0
      ]
     ]
    },
    {
     "scene": "work",
     "who": {
      "A": [
       "Leidinggevende",
       "f"
      ]
     },
     "lines": [
      [
       "A",
       "Welkom bij je eerste werkdag, Hassan. Je begint elke dag om half acht. Om tien uur heb je een kwartier pauze. Je werkkleding ligt in de kast in de kleedkamer. Heb je vragen? Dan kun je altijd naar Peter gaan."
      ]
     ],
     "qs": [
      [
       "Hoe laat begint Hassan elke dag?",
       [
        "7.30 uur",
        "8.30 uur",
        "10.00 uur"
       ],
       0
      ],
      [
       "Waar ligt de werkkleding?",
       [
        "in de kast in de kleedkamer",
        "bij Peter",
        "in de kantine"
       ],
       0
      ]
     ]
    }
   ]
  },
  "schrijven": {
   "minutes": 30,
   "tasks": [
    {
     "nl": "Opdracht 1 — Formulier",
     "ar": "تريد الاشتراك في نادٍ رياضي. املأ الاستمارة.",
     "form": [
      "Voornaam",
      "Achternaam",
      "Geboortedatum",
      "Adres",
      "Postcode en woonplaats",
      "Telefoonnummer",
      "Op welke dag wilt u sporten?"
     ],
     "model": "Voornaam: Rana\nAchternaam: Haddad\nGeboortedatum: 05-04-1988\nAdres: Molenstraat 8\nPostcode en woonplaats: 5461 AB Veghel\nTelefoonnummer: 06 12 34 56 78\nOp welke dag wilt u sporten? Op dinsdag en donderdag.",
     "check": [
      "alle 7 velden",
      "datum dd-mm-jjjj",
      "laatste veld als zin of dagen"
     ],
     "task": "U wilt lid worden van een sportclub. Vul het formulier in."
    },
    {
     "nl": "Opdracht 2 — Bericht",
     "ar": "غدًا عيد ميلادك وستقيم حفلة صغيرة. اكتب رسالة لصديقتك: متى، الساعة، أين. واسألها إن كانت ستأتي.",
     "model": "Hoi Sara,\nMorgen ben ik jarig! Ik geef een klein feestje bij mij thuis, Molenstraat 8. Het begint om drie uur. Kom je ook?\nGroetjes,\nRana",
     "check": [
      "wanneer",
      "hoe laat",
      "waar",
      "vraag of ze komt",
      "groet"
     ],
     "task": "Morgen bent u jarig en u geeft een klein feestje. Schrijf een bericht aan een vriendin. Schrijf: wanneer, hoe laat en waar. Vraag of ze komt."
    },
    {
     "nl": "Opdracht 3 — E-mail",
     "ar": "ابنك مريض ولن يذهب إلى المدرسة غدًا. اكتب بريدًا للمعلّمة: ما مشكلته، كم سيبقى في البيت (يومان)، واسأل عن الواجب.",
     "model": "Beste juf,\nMijn zoon Adam is ziek. Hij heeft koorts. Hij blijft twee dagen thuis. Kunt u mij het huiswerk sturen?\nMet vriendelijke groet,\nSamir Aziz",
     "check": [
      "aanhef",
      "wat er is",
      "hoe lang",
      "vraag over huiswerk",
      "afsluiting"
     ],
     "task": "Uw zoon is ziek. Hij gaat morgen niet naar school. Schrijf een e-mail aan de juf: wat heeft hij, hoe lang blijft hij thuis (2 dagen), en vraag naar het huiswerk."
    }
   ]
  },
  "spreken": {
   "tasks": [
    {
     "part": "Deel 1 — vraag in een filmpje",
     "scene": "doctor",
     "who": [
      "Assistente",
      "f"
     ],
     "q": "Goedemorgen, huisartsenpraktijk. Waarmee kan ik u helpen?",
     "model": "Goedemorgen, met … . Ik heb al drie dagen keelpijn. Kan ik een afspraak maken?",
     "ar": "تعاني من ألم في الحلق منذ ثلاثة أيام."
    },
    {
     "part": "Deel 1 — vraag in een filmpje",
     "scene": "street",
     "who": [
      "Buurvrouw",
      "f"
     ],
     "q": "Hallo! Hoe lang woont u al in Nederland?",
     "model": "Ik woon al twee jaar in Nederland. Eerst in Utrecht, nu in Veghel.",
     "ar": "أجب جارتك."
    },
    {
     "part": "Deel 1 — vraag in een filmpje",
     "scene": "work",
     "who": [
      "Collega",
      "m"
     ],
     "q": "Hé, wat doe jij in het weekend?",
     "model": "In het weekend ga ik met mijn kinderen naar het park. Zondag bezoek ik mijn familie.",
     "ar": "أخبر زميلك."
    },
    {
     "part": "Deel 1 — vraag in een filmpje",
     "scene": "office",
     "who": [
      "Medewerker gemeente",
      "m"
     ],
     "q": "Wat is uw adres en uw postcode?",
     "model": "Mijn adres is Molenstraat 8 in Veghel. Mijn postcode is 5461 AB.",
     "ar": "أعطِ عنوانك والرمز البريدي."
    },
    {
     "part": "Deel 2 — één plaatje",
     "pic": "🚲",
     "q": "U gaat elke dag naar de les. Hoe gaat u naar de les? Vertel.",
     "model": "Ik ga elke dag met de fiets naar de les. Het is vijftien minuten fietsen. Als het regent, neem ik de bus.",
     "ar": "انظر إلى الصورة وتحدث."
    },
    {
     "part": "Deel 2 — één plaatje",
     "pic": "🛒",
     "q": "U bent in de supermarkt. Wat koopt u? Noem drie dingen.",
     "model": "Ik koop brood, melk en rijst. Ik koop ook groente voor het eten.",
     "ar": "اذكر ثلاثة أشياء تشتريها."
    },
    {
     "part": "Deel 3 — twee plaatjes, kies er één",
     "pic": "🏠 / 🏢",
     "q": "Woont u liever in een huis of in een appartement? Waarom?",
     "model": "Ik woon liever in een huis, want dan heb ik een tuin voor mijn kinderen.",
     "ar": "اختر واحدة وأعطِ سببًا."
    },
    {
     "part": "Deel 3 — twee plaatjes, kies er één",
     "pic": "☕ / 🍵",
     "q": "Wat drinkt u liever: koffie of thee? Waarom?",
     "model": "Ik drink liever thee, want koffie vind ik te sterk.",
     "ar": "اختر واحدًا وأعطِ سببًا."
    }
   ]
  }
 },
 "ROADMAP": [
  {
   "phase": "Maand 1",
   "level": "A1",
   "title": "Dit programma",
   "focus": "Dag 1–21 van deze cursus: basiswoorden, tegenwoordige tijd, woordvolgorde en korte berichten.",
   "check": "Proefexamen: op elk onderdeel minstens de richtlijn.",
   "focusAr": "الأيام 1–21 من هذا المنهاج: الكلمات الأساسية، المضارع، ترتيب الجملة، الرسائل القصيرة."
  },
  {
   "phase": "Maand 2–3",
   "level": "A2",
   "title": "Naar A2",
   "focus": "Verleden tijd (perfectum en imperfectum), bijzinnen (omdat, als, dat) en vergelijken. Elke dag 20 minuten makkelijk luisteren en één korte tekst schrijven en laten nakijken.",
   "check": "De officiële A2-oefenexamens op inburgeren.nl.",
   "focusAr": "الماضي، الجمل الفرعية (omdat, als, dat)، المقارنة. كل يوم 20 دقيقة استماع سهل وكتابة نص قصير وتصحيحه."
  },
  {
   "phase": "Maand 4–5",
   "level": "B1",
   "title": "Naar B1",
   "focus": "Langere teksten (nieuws, brieven, instructies), je mening geven met een reden en een voorbeeld, de lijdende vorm en betrekkelijke bijzinnen.",
   "check": "Elke week één onderdeel in de officiële oefenomgeving van Staatsexamens NT2, Programma I.",
   "focusAr": "نصوص أطول (أخبار، رسائل، تعليمات)، إبداء الرأي مع سبب ومثال، المبني للمجهول، جمل الصلة."
  },
  {
   "phase": "Maand 6",
   "level": "B1",
   "title": "Examentraining Programma I",
   "focus": "Volledige officiële oefenexamens in examentijd: Lezen, Luisteren, Schrijven en Spreken.",
   "check": "Meld je aan voor het examen als je oefenscores op alle vier onderdelen stabiel zijn.",
   "focusAr": "امتحانات تجريبية رسمية كاملة في الوقت الحقيقي للامتحان."
  }
 ],
 "SOURCES": [
  [
   "Naar Nederland (DUO / OCW) — basisexamen A1 en oefenexamens",
   "https://www.naarnederland.nl"
  ],
  [
   "Inburgeren.nl — inhoud taalexamens A2, B1, B2",
   "https://www.inburgeren.nl/examen-doen/inhoud-taalexamens-a2-b1-b2.jsp"
  ],
  [
   "Inburgeren.nl — oefenexamens A2",
   "https://www.inburgeren.nl/examen-doen/oefenen.jsp"
  ],
  [
   "DUO — examens onder de Wet inburgering 2021",
   "https://duo.nl/zakelijk/inburgering-ketenpartners/wet-inburgering-2021/examens-wi2021/examen-doen-wi2021.jsp"
  ],
  [
   "Raad van Europa — ERK-niveaus (globale schaal)",
   "https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale"
  ],
  [
   "Rijksoverheid — wanneer 112 bellen",
   "https://www.rijksoverheid.nl/onderwerpen/alarmnummer-112/vraag-en-antwoord/wanneer-112-bellen"
  ],
  [
   "Rijksoverheid — wat is het burgerservicenummer (bsn)",
   "https://www.rijksoverheid.nl/onderwerpen/privacy-en-persoonsgegevens/vraag-en-antwoord/wat-is-het-burgerservicenummer-bsn"
  ],
  [
   "Staatsexamens NT2 — Programma I (B1) en II (B2)",
   "https://www.staatsexamensnt2.nl"
  ]
 ]
};
if (typeof module !== "undefined") module.exports = COURSE; else root.COURSE = COURSE;
})(typeof window !== "undefined" ? window : globalThis);
