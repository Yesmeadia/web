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
    url: "https://www.youtube.com/watch?v=lPnkh1hnt50",
  },
  {
    image: "/institutions/poonch/daraschool.jpeg",
    location: "YES JAMEEL PUBLIC ACADEMY - DARADULLIAN",
    url: "https://www.youtube.com/watch?v=3fZxDb1WmmE",
  },
  {
    image: "/institutions/surankote/drogian.jpg",
    location: "MODEL INSTITUTE OF EDUCATION - DROGIAN",
    url: "https://www.youtube.com/watch?v=NPjHZe7TJT4",
  },
  {
    image: "/institutions/surankote/surankote.jpg",
    location: "YASEEN ENGLISH SCHOOL - SURANKOTE",
    url: "https://www.youtube.com/watch?v=HMiwgou53vQ",
  },
  {
    image: "/institutions/surankote/seri.jpg",
    location: "YASEEN ENGLISH SCHOOL - SERIKHAWAJA",
    url: "https://www.youtube.com/watch?v=IAV9DdRT6AQ",
  },
  {
    image: "/institutions/surankote/dhundak.jpg",
    location: "YASEEN ENGLISH SCHOOL - DHUNDAK",
    url: "https://www.youtube.com/watch?v=tdSes1_8SbA",
  },
  {
    image: "/institutions/surankote/tranawali.jpg",
    location: "YASEEN ENGLISH SCHOOL - TRARANWALI",
    url: "https://www.youtube.com/watch?v=PZSFrOCjwGU",
  },
  {
    image: "/institutions/surankote/dawa.jpg",
    location: "YASEEN COLLEGE OF INTEGRATED STUDIES - DHUNDAK ",
    url: "",
  },
  {
    image: "/institutions/mandi/nps.jpg",
    location: "NATIONAL PUBLIC SCHOOL - RAJPURA MANDI ",
    url: "https://www.youtube.com/watch?v=hNygQAjfQa8",
  },
  {
    image: "/institutions/mandi/sawjian.jpeg",
    location: "YASEEN ISLAMIA ENGLISH MEDIUM SCHOOL - SAWJIAN ",
    url: "https://www.youtube.com/watch?v=Qe-A2oBqLuk",
  },
  {
    image: "/institutions/mandi/chaktro.jpeg",
    location: "BABA NAZAM UD DIN EDU TRUST - CHACKTROO ",
    url: "https://www.youtube.com/watch?v=UrhsEtBDr9E",
  },
  {
    image: "/institutions/mandi/loran.jpeg",
    location: "YASEEN ENGLISH SCHOOL - LORAN ",
    url: "https://www.youtube.com/watch?v=sKtogRFGPzM",
  },
  {
    image: "/institutions/jammu/jammu.jpg",
    location: "NEW TAJ PUBLIC HIGH SCHOOL - BATHINDI, JAMMU ",
    url: "https://www.youtube.com/watch?v=x_w7_dR290E",
  },
  {
    image: "/institutions/srinagar/maloora.jpeg",
    location: "YASEEN ENGLISH SCHOOL - MALOORA, SRINAGAR ",
    url: "https://www.youtube.com/watch?v=2H_jVQx3bxA",
  },
  {
    image: "/institutions/srinagar/narbal.jpeg",
    location: "YES SOLIAH IDARATUL ALOOM - NARBAL, SRINAGAR ",
    url: "https://www.youtube.com/watch?v=ggmdq0eypFg",
  },
  {
    image: "/institutions/srinagar/pahalgam.jpeg",
    location: "YASEEN COLLEGE OF INTEGRATED STUDIES - PAHALGAM, SRINAGAR ",
    url: "https://www.youtube.com/watch?v=8-sveC393yw",
  },
  {
    image: "/institutions/mendar/mendar.jpg",
    location: "YASEEN ENGLISH SCHOOL - MENDHAR ",
    url: "https://www.youtube.com/watch?v=Q418kQqeGs4",
  },
  {
    image: "/institutions/mendar/harni.jpg",
    location: "YASEEN ENGLISH SCHOOL - HARNI-GALHUTTA ",
    url: "https://www.youtube.com/watch?v=ZTf4OTH-fzQ",
  },
  {
    image: "/institutions/rajouri/ds.jpg",
    location: "YES DS HIGHER SECONDARY SCHOOL - RAJOURI ",
    url: "https://www.youtube.com/watch?v=O3ZhuypjAJ0",
  },
  {
    image: "/institutions/rajouri/ecrj.jpeg",
    location: "NEW YASEEN ENGLISH MEDIUM SCHOOL - RAJOURI ",
    url: "https://www.youtube.com/watch?v=8A-xxbUYA7I",
  },
  {
    image: "/institutions/rajouri/shadra.jpg",
    location: "YASEEN ENGLISH SCHOOL - SHAHDRA SHARIEF ",
    url: "https://www.youtube.com/watch?v=fF6A_jqIUtk",
  },
  {
    image: "/institutions/north/karishal.jpeg",
    location: "YASEEN ENGLISH SCHOOL - KARISHAL, WEST BENGAL ",
    url: "https://www.youtube.com/watch?v=6rOpMMM7BLA",
  },
  {
    image: "/institutions/north/bisfi.jpeg",
    location: "YES HASAN FATIMA ENGLISH SCHOOL - BISFI, BIHAR ",
    url: "https://www.youtube.com/watch?v=LfgBKay8rMk",
  },
  {
    image: "/institutions/north/matha.jpeg",
    location: "YES INDIA PUBLIC SCHOOL - MATHABHANGA, WEST BENGAL ",
    url: "https://www.youtube.com/watch?v=qt7EGzQWvy4",
  },
  {
    image: "/institutions/rajasthan/desert.jpg",
    location: "YES DESERT BLOOM SCHOOL - PHALODI, RAJASTHAN ",
    url: "",
  },
  {
    image: "/institutions/rajasthan/serwa.jpg",
    location: "YES SARWAR SHIKSHAN SANSTHAN SEN.SEC SCHOOL - SERWA, RAJASTHAN ",
    url: "https://www.youtube.com/watch?v=54H23E24K48",
  },
  {
    image: "/institutions/rajasthan/balothra.jpg",
    location: "YES PUBLIC SCHOOL - BALOTRA, RAJASTHAN ",
    url: "https://www.youtube.com/watch?v=-0GaLs-eN_Q",
  },
  {
    image: "/institutions/maharashtra/ang.jpeg",
    location: " YES PA INAMDAR ENGLISH MEDIUM SCHOOL - AHAMEDNAGAR, MAHARASHTRA",
    url: "https://www.youtube.com/watch?v=FvhNt6UTCGk",
  },
  {
    image: "/institutions/maharashtra/nanded.jpeg",
    location: "YES RAZA ENGLISH MEDIUM SCHOOL - NAIGAON-NANDED, MAHARASHTRA ",
    url: "https://www.youtube.com/watch?v=T8IW_VdVSyw",
  },
  {
    image: "/institutions/maharashtra/huh.jpg",
    location: "H.U.H MUNDIA PUBLIC SCHOOL - CHALISGOAN, MAHARASHTRA ",
    url: "https://www.youtube.com/watch?v=uwuf86hC9x4",
  },
  {
    image: "/institutions/south/ana.jpeg",
    location: "YASEEN COLLEGE OF INTEGRATED STUDIES - ANANTAPUR, ANDHRA PRADESH ",
    url: "https://www.youtube.com/watch?v=rsTt_8qXFZ0",
  },
  {
    image: "/institutions/south/yesuq.jpg",
    location: "UMMMUL QURA HIGHER SECONDARY SCHOOL - MONGAM, KERALA ",
    url: "https://www.youtube.com/watch?v=5SPJIr1Z8Z8",
  },
  {
    image: "/institutions/south/lax.jpg",
    location: "YES SOOFI ENGLISH MEDIUM SCHOOL - LAXMESHWAR, KARNATAKA ",
    url: "https://www.youtube.com/watch?v=Mp6qttMOah0",
  },
  {
    image: "/institutions/south/mlb.jpg",
    location: "YES INDIA PUBLIC SCHOOL - MALABENNUR, KARNATAKA ",
    url: "https://www.youtube.com/watch?v=ATwXLNe12QU",
  },
  {
    image: "/institutions/south/tadi.jpeg",
    location: "YASEEN COLLEGE OF INTEGRATED STUDIES - TADIPATRI, ANDHRA PRADESH ",
    url: "",
  },
];




export const campuses = rawCampuses.map((campus, index) => ({
  id: index + 1, // auto increment IDs starting from 1
  ...campus, // keep all other properties
}));
