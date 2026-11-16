const rawCampuses = [
  {
    image: "/institutions/poonch/Ruihss-main.jpeg",
    location: "RAZA UL ULOOM ISLAMIA HSS - POONCH, JAMMU & KASHMIR",
    url: "https://www.youtube.com/watch?v=BvDkJ22pt7I",
  },
  {
    image: "/institutions/poonch/RUIHSS_ALLAPIR.jpg",
    location: "YES RUIHSS ALLAPIR",
    url: "",
  },
  {
    image: "/institutions/poonch/ec-yes-prelife.png",
    location: "YES RUIHSS STAR CAMPUS ",
    url: "",
  },
  {
    image: "/institutions/poonch/cresent.jpeg",
    location: "YES RUIHSS CRESCENT CAMPUS",
    url: "",
  },
  {
    image: "/institutions/poonch/terwan.jpg",
    location: "YASEEN ENGLISH SCHOOL - TERWAN",
    url: "",
  },
  {
    image: "/institutions/poonch/maldayan.jpg",
    location: "YASEEN ENGLISH SCHOOL - MALDIYALAN",
    url: "",
  },
  {
    image: "/institutions/poonch/daraschool.jpeg",
    location: "YES JAMEEL PUBLIC ACADEMY - DARADULLIAN",
    url: "",
  },
  {
    image: "/institutions/surankote/drogian.jpg",
    location: "MODEL INSTITUTE OF EDUCATION - DROGIAN",
    url: "",
  },
  {
    image: "/institutions/surankote/surankote.jpg",
    location: "YASEEN ENGLISH SCHOOL - SURANKOTE",
    url: "",
  },
  {
    image: "/institutions/surankote/seri.jpg",
    location: "YASEEN ENGLISH SCHOOL - SERIKHAWAJA",
    url: "",
  },
  {
    image: "/institutions/surankote/dhundak.jpg",
    location: "YASEEN ENGLISH SCHOOL - DHUNDAK",
    url: "",
  },
  {
    image: "/institutions/surankote/tranawali.jpg",
    location: "YASEEN ENGLISH SCHOOL - TRARANWALI",
    url: "",
  },
  {
    image: "/institutions/surankote/dawa.jpg",
    location: "YASEEN COLLEGE OF INTEGRATED STUDIES - DHUNDAK ",
    url: "",
  },
  {
    image: "/institutions/mandi/nps.jpg",
    location: "NATIONAL PUBLIC SCHOOL - RAJPURA MANDI ",
    url: "",
  },
  {
    image: "/institutions/mandi/sawjian.jpeg",
    location: "YASEEN ISLAMIA ENGLISH MEDIUM SCHOOL - SAWJIAN ",
    url: "",
  },
  {
    image: "/institutions/mandi/chaktro.jpeg",
    location: "BABA NAZAM UD DIN EDU TRUST - CHACKTROO ",
    url: "",
  },
  {
    image: "/institutions/mandi/loran.jpeg",
    location: "YASEEN ENGLISH SCHOOL - LORAN ",
    url: "",
  },
  {
    image: "/institutions/jammu/jammu.jpg",
    location: "NEW TAJ PUBLIC HIGH SCHOOL - BATHINDI, JAMMU ",
    url: "",
  },
  {
    image: "/institutions/srinagar/maloora.jpeg",
    location: "YASEEN ENGLISH SCHOOL - MALOORA, SRINAGAR ",
    url: "",
  },
  {
    image: "/institutions/srinagar/narbal.jpeg",
    location: "YES SOLIAH IDARATUL ALOOM - NARBAL, SRINAGAR ",
    url: "",
  },
  {
    image: "/institutions/srinagar/pahalgam.jpeg",
    location: "YASEEN COLLEGE OF INTEGRATED STUDIES - PAHALGAM, SRINAGAR ",
    url: "",
  },
  {
    image: "/institutions/mendar/mendar.jpg",
    location: "YASEEN ENGLISH SCHOOL - MENDHAR ",
    url: "",
  },
  {
    image: "/institutions/mendar/harni.jpg",
    location: "YASEEN ENGLISH SCHOOL - HARNI-GALHUTTA ",
    url: "",
  },
  {
    image: "/institutions/rajouri/ds.jpg",
    location: "YES DS HIGHER SECONDARY SCHOOL - RAJOURI ",
    url: "",
  },
  {
    image: "/institutions/rajouri/",
    location: "NEW YASEEN ENGLISH MEDIUM SCHOOL - RAJOURI ",
    url: "",
  },
  {
    image: "/institutions/rajouri/shadra.jpg",
    location: "YASEEN ENGLISH SCHOOL - SHAHDRA SHARIEF ",
    url: "",
  },
  {
    image: "/institutions/north/karishal.jpeg",
    location: "YASEEN ENGLISH SCHOOL - KARISHAL, WEST BENGAL ",
    url: "",
  },
  {
    image: "/institutions/north/bisfi.jpeg",
    location: "YES HASAN FATIMA ENGLISH SCHOOL - BISFI, BIHAR ",
    url: "",
  },
  {
    image: "/institutions/north/matha.jpeg",
    location: "YES INDIA PUBLIC SCHOOL - MATHABHANGA, WEST BENGAL ",
    url: "",
  },
  {
    image: "/institutions/rajasthan/desert.jpg",
    location: "YES DESERT BLOOM SCHOOL - PHALODI, RAJASTHAN ",
    url: "",
  },
  {
    image: "/institutions/rajasthan/serwa.jpg",
    location: "YES SARWAR SHIKSHAN SANSTHAN SEN.SEC SCHOOL - SERWA, RAJASTHAN ",
    url: "",
  },
  {
    image: "/institutions/rajasthan/balothra.jpg",
    location: "YES PUBLIC SCHOOL - BALOTRA, RAJASTHAN ",
    url: "",
  },
  {
    image: "/institutions/maharashtra/ang.jpeg",
    location: " YES PA INAMDAR ENGLISH MEDIUM SCHOOL - AHAMEDNAGAR, MAHARASHTRA",
    url: "",
  },
  {
    image: "/institutions/maharashtra/nanded.jpeg",
    location: "YES RAZA ENGLISH MEDIUM SCHOOL - NAIGAON-NANDED, MAHARASHTRA ",
    url: "",
  },
  {
    image: "/institutions/maharashtra/huh.jpg",
    location: "H.U.H MUNDIA PUBLIC SCHOOL - CHALISGOAN, MAHARASHTRA ",
    url: "",
  },
  {
    image: "/institutions/south/ana.jpeg",
    location: "YASEEN COLLEGE OF INTEGRATED STUDIES - ANANTAPUR, ANDHRA PRADESH ",
    url: "",
  },
  {
    image: "/institutions/south/yesuq.jpg",
    location: "UMMMUL QURA HIGHER SECONDARY SCHOOL - MONGAM, KERALA ",
    url: "",
  },
  {
    image: "/institutions/south/lax.jpg",
    location: "YES SOOFI ENGLISH MEDIUM SCHOOL - LAXMESHWAR, KARNATAKA ",
    url: "",
  },
  {
    image: "/institutions/south/mlb.jpg",
    location: "YES INDIA PUBLIC SCHOOL - MALABENNUR, KARNATAKA ",
    url: "",
  },
  {
    image: "/institutions/south/",
    location: "YASEEN COLLEGE OF INTEGRATED STUDIES - TADIPATRI, ANDHRA PRADESH ",
    url: "",
  },
];




export const campuses = rawCampuses.map((campus, index) => ({
  id: index + 1, // auto increment IDs starting from 1
  ...campus, // keep all other properties
}));
