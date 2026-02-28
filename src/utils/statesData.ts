import { label } from "framer-motion/client";

// utils/statesData.ts
export const statesData = [
  {
    name: "Jammu and Kashmir",
    mapImage: "/states/jammu.png",
    bannerImage: "/state_sample.png",
    demographics: {
      details: [
        { label: "Geographical Area", value: "222,236 sq. km" },
        { label: "Population", value: "1.25 Crores" },
        { label: "Literacy Rate", value: "67.16%" },
        { label: "Sex Ratio", value: "889 Females per 1000 Male" },
        {
          label: "Languages",
          value:
            "English, Urdu, Kashmiri, Hindi, Dogri, Gojri, Pahari, Panjabi",
        },
      ],
      religion: [
        { label: "Muslim", value: "68.31%" },
        { label: "Hindu", value: "28.43%" },
        { label: "Sikh", value: "2.03%" },
        { label: "Buddhist", value: "0.9%" },
        { label: "Christian", value: "0.28%" },
      ],
    },
    accessEducation: {
      enrollment: [
        { label: "Elementary School", value: "90.1%" },
        { label: "Secondary School", value: "60.5%" },
        { label: "Dropout Ratio", value: "25.33%" },
      ],
      higher: [
        { label: "Admission Ratio", value: "24.8%" },
        { label: "Major Professional Institutes", value: "IIMS, IIT, IIM, AIIMS, NIT" },
      ],
    },
    educational: [
      {
        title: "Number of Schools",
        data: [
          { label: "Primary", value: "14171" },
          { label: "Upper Primary", value: "6665" },
          { label: "High School", value: "1194" },
          { label: "Higher Secondary", value: "597" },
        ],
      },
      {
        title: "College and Universities",
        data: [
          { label: "Colleges", value: "460" },
          { label: "Universities", value: "11" },
        ],
      },
      {
        title: "Vocational & Skill Based Institution",
        data: [
          { label: "ITI", value: "88" },
          { label: "Polytechnics", value: "32" },
        ],
      },
    ],
  },
  {
    name: "Rajasthan",
    mapImage: "/states/rajasthan.png",
    bannerImage: "/state_sample.png",
    demographics: {
      details: [
        { label: "Geographical Area", value: "342,249 sq. km" },
        { label: "Population", value: "8.36 Crores" },
        { label: "Literacy Rate", value: "67.06%" },
        { label: "Sex Ratio", value: "928 Females per 1000 Male" },
        {
          label: "Languages",
          value: "Hindi, Rajasthani, Marwari, Sindhi, Punjabi, Jaipuri, Mewati, Malvi, Bagri, Shekhawati, Harauti",
        },
      ],
      religion: [
        { label: "Hindu", value: "88.5%" },
        { label: "Muslim", value: "9.1%" },
        { label: "Sikh", value: "1.3%" },
        { label: "Jain", value: "0.9%" },
        { label: "Christian", value: "0.1%" },
      ],
    },
    accessEducation: {
      enrollment: [
        { label: "Elementary School", value: "101.8%" },
        { label: "Secondary School", value: "79.2%" },
        { label: "Dropout Ratio", value: "43.2%" },
      ],
      higher: [
        { label: "Admission Ratio", value: "28.6%" },
        { label: "Major Professional Institutes", value: "AIIMS, IIT, IIM, MNIT, IIIT, NIFT" },
      ],
    },
    educational: [
      {
        title: "Number of Schools",
        data: [
          { label: "Primary", value: "38983" },
          { label: "Upper Primary", value: "19839" },
          { label: "Secondary Schools", value: "15522" },
        ],
      },
      {
        title: "College and Universities",
        data: [
          { label: "Colleges", value: "250" },
          { label: "Universities", value: "9" },
        ],
      },
      {
        title: "Vocational & Skill Based Institution",
        data: [
          { label: "ITI", value: "152" },
          { label: "Polytechnics", value: "23" },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    mapImage: "/states/bihar.png",
    bannerImage: "/state_sample.png",
    demographics: {
      details: [
        { label: "Geographical Area", value: "94163 sq. km" },
        { label: "Population", value: "13.10 Crores" },
        { label: "Literacy Rate", value: "61.82%" },
        { label: "Sex Ratio", value: "918 Females per 1000 Male" },
        {
          label: "Languages",
          value: "Hindi, Urdu, Bhojpuri, Maithili, Magahi, Angika, Bajjika",
        },
      ],
      religion: [
        { label: "Hindu", value: "82.69%" },
        { label: "Muslim", value: "16.87%" },
        { label: "Christian", value: "0.12%" },
        { label: "Buddhist", value: "0.02%" },
        { label: "Jain", value: "0.02%" },
        { label: "Sikh", value: "0.02%" },
        { label: "Others", value: "0.24%" },
      ],
    },
    accessEducation: {
      enrollment: [
        { label: "Elementary School", value: "96.2%" },
        { label: "Secondary School", value: "64.9%" },
        { label: "Dropout Ratio", value: "42.1%" },
      ],
      higher: [
        { label: "Admission Ratio", value: "17.1%" },
        { label: "Major Professional Institutes", value: "NIT, IIT, NSIT, IIIT, BIT, MIT" },
      ],
    },
    educational: [
      {
        title: "Number of Schools",
        data: [
          { label: "Primary", value: "42573" },
          { label: "Upper Primary", value: "25587" },
          { label: "Secondary School", value: "2286" },
          { label: "Senior Secondary", value: "2217" },
        ],
      },
      {
        title: "College and Universities",
        data: [
          { label: "Colleges", value: "1188" },
          { label: "Universities", value: "31" },
        ],
      },
      {
        title: "Vocational & Skill Based Institution",
        data: [
          { label: "ITI", value: "38" },
          { label: "Polytechnics", value: "136" },
        ],
      },
    ],
  },
  {
    name: "West Bengal",
    mapImage: "/states/westbengal.png",
    bannerImage: "/state_sample.png",
    demographics: {
      details: [
        { label: "Geographical Area", value: "88752 sq. km" },
        { label: "Population", value: "10.36 Crores" },
        { label: "Literacy Rate", value: "77.08%" },
        { label: "Sex Ratio", value: "950 Females per 1000 Male" },
        {
          label: "Languages",
          value: "Hindi, urdu, Nepali, Santali, Oriya, Kurukh",
        },
      ],
      religion: [
        { label: "Hindu", value: "71%" },
        { label: "Muslim", value: "27.01%" },
        { label: "Christian", value: "0.72%" },
        { label: "Buddhist", value: "0.31%" },
      ],
    },
    accessEducation: {
      enrollment: [
        { label: "Elementary School", value: "108.5%" },
        { label: "Secondary School", value: "88.2%" },
      ],
      higher: [
        { label: "Admission Ratio", value: "26.3%" },
        { label: "Major Professional Institutes", value: "IIT, IIEST, NIT, IEM, IIIT" },
      ],
    },
    educational: [
      {
        title: "Number of Schools",
        data: [
          { label: "Primary", value: "49851" },
          { label: "Upper Primary", value: "8839" },
          { label: "Secondary Schools", value: "10194" },
          { label: "Senior Secondary", value: "3954" },
        ],
      },
      {
        title: "College and Universities",
        data: [
          { label: "Colleges", value: "2519" },
          { label: "Universities", value: "43" },
        ],
      },
      {
        title: "Vocational & Skill Based Institution",
        data: [
          { label: "ITI", value: "123" },
          { label: "Polytechnics", value: "32" },
        ],
      },
    ],
  },
  {
    name: "Maharashtra",
    mapImage: "/states/maharashtra.png",
    bannerImage: "/state_sample.png",
    demographics: {
      details: [
        { label: "Geographical Area", value: "307,713 sq. km" },
        { label: "Population", value: "13.16 Crores" },
        { label: "Literacy Rate", value: "82.34%" },
        { label: "Sex Ratio", value: "929 Females per 1000 Male" },
        {
          label: "Languages",
          value: "Marathi, Hindi, Urdu, Gujarati, Ahirani, Banjari, Bhili, Telugu, Kannada, Marwari",
        },
      ],
      religion: [
        { label: "Hindu", value: "79.83%" },
        { label: "Muslim", value: "11.54%" },
        { label: "Buddhist", value: "5.81%" },
        { label: "Jain", value: "1.25%" },
        { label: "Christian", value: "0.96%" },
        { label: "Sikh", value: "0.2%" },
      ],
    },
    accessEducation: {
      enrollment: [
        { label: "Elementary School", value: "104.3%" },
        { label: "Secondary School", value: "93.7%" },
        { label: "Dropout Ratio", value: "10.7%" },
      ],
      higher: [
        { label: "Admission Ratio", value: "35.3%" },
        { label: "Major Professional Institutes", value: "IIT, ICT, VNIT, MIT, VJTI" },
      ],
    },
    educational: [
      {
        title: "Number of Schools",
        data: [
          { label: "Primary", value: "51152" },
          { label: "Upper Primary", value: "29448" },
          { label: "Secondary Schools", value: "21000" },
          { label: "Senior Secondary", value: "7000" },
        ],
      },
      {
        title: "College and Universities",
        data: [
          { label: "Colleges", value: "4692" },
          { label: "Universities", value: "45" },
        ],
      },
      {
        title: "Vocational & Skill Based Institution",
        data: [
          { label: "ITI", value: "966" },
          { label: "Polytechnics", value: "500" },
        ],
      },
    ],
  },
  {
    name: "Andhra Pradesh",
    mapImage: "/states/andhrapradesh.png",
    bannerImage: "/state_sample.png",
    demographics: {
      details: [
        { label: "Geographical Area", value: "162,970 sq. km" },
        { label: "Population", value: "5.34 Crores" },
        { label: "Literacy Rate", value: "67.02%" },
        { label: "Sex Ratio", value: "993 Females per 1000 Male" },
        {
          label: "Languages",
          value: "Telugu, Urdu, Hindi, Tamil, Kannada, English",
        },
      ],
      religion: [
        { label: "Hindu", value: "90.89%" },
        { label: "Muslim", value: "7.30%" },
        { label: "Christian", value: "1.38%" },
        { label: "Jain", value: "0.5%" },
        { label: "Others", value: "1.6%" },
      ],
    },
    accessEducation: {
      enrollment: [
        { label: "Elementary School", value: "100.1%" },
        { label: "Secondary School", value: "85.4%" },
        { label: "Dropout Ratio", value: "28.3%" },
      ],
      higher: [
        { label: "Admission Ratio", value: "36.5%" },
        { label: "Major Professional Institutes", value: "JNTUH, NIT, IISER" },
      ],
    },
    educational: [
      {
        title: "Number of Schools",
        data: [
          { label: "Primary", value: "38430" },
          { label: "Upper Primary", value: "10100" },
          { label: "Secondary Schools", value: "13823" },
          { label: "Senior Secondary", value: "2589" },
        ],
      },
      {
        title: "College and Universities",
        data: [
          { label: "Colleges", value: "3690" },
          { label: "Universities", value: "28" },
        ],
      },
      {
        title: "Vocational & Skill Based Institution",
        data: [
          { label: "ITI", value: "82" },
          { label: "Polytechnics", value: "234" },
        ],
      },
    ],
  },
  {
    name: "Karnataka",
    mapImage: "/states/karnataka.png",
    bannerImage: "/state_sample.png",
    demographics: {
      details: [
        { label: "Geographical Area", value: "191,791 sq. km" },
        { label: "Population", value: "7.1 Crores" },
        { label: "Literacy Rate", value: "75.36%" },
        { label: "Sex Ratio", value: "973 Females per 1000 Male" },
        {
          label: "Languages",
          value: "Kannada, Tulu, Kodava, Beary, Dakhani Urdu, Koraga, Sankethi, Navayati",
        },
      ],
      religion: [
        { label: "Hindu", value: "84%" },
        { label: "Muslim", value: "12.92%" },
        { label: "Christian", value: "1.87%" },
        { label: "Jain", value: "0.72%" },
        { label: "Buddhist", value: "0.16%" },
        { label: "Sikh", value: "0.05%" },
      ],
    },
    accessEducation: {
      enrollment: [
        { label: "Elementary School", value: "107.1%" },
        { label: "Secondary School", value: "94.7%" },
        { label: "Dropout Ratio", value: "14.6%" },
      ],
      higher: [
        { label: "Admission Ratio", value: "36.2%" },
        { label: "Major Professional Institutes", value: "IISc, IIIT, IIM,NITK" },
      ],
    },
    educational: [
      {
        title: "Number of Schools",
        data: [
          { label: "Junior Primary", value: "25278" },
          { label: "Senior Primary", value: "36951" },
          { label: "Secondary Schools", value: "15867" },
          { label: "PU Colleges", value: "2084" },
        ],
      },
      {
        title: "College and Universities",
        data: [
          { label: "Colleges", value: "4430" },
          { label: "Universities", value: "59" },
        ],
      },
      {
        title: "Vocational & Skill Based Institution",
        data: [
          { label: "ITI", value: "150" },
          { label: "Polytechnics", value: "281" },
        ],
      },
    ],
  },
  {
    name: "Kerala",
    mapImage: "/states/kerala.png",
    bannerImage: "/state_sample.png",
    demographics: {
      details: [
        { label: "Geographical Area", value: "38,863 sq. km" },
        { label: "Population", value: "3.51 Crores" },
        { label: "Literacy Rate", value: "94%" },
        { label: "Sex Ratio", value: "1084 Females per 1000 Male" },
        {
          label: "Languages",
          value: "Malayalam, English",
        },
      ],
      religion: [
        { label: "Hindu", value: "54.73%" },
        { label: "Muslim", value: "26.56%" },
        { label: "Christian", value: "18.38%" },
        { label: "Others", value: "0.33%" },
      ],
    },
    accessEducation: {
      enrollment: [
        { label: "Elementary School", value: "101%" },
        { label: "Secondary School", value: "97.9%" },
        { label: "Dropout Ratio", value: "0.8%" },
      ],
      higher: [
        { label: "Admission Ratio", value: "41.3%" },
        { label: "Major Professional Institutes", value: "KUSAT, IIST, NIT, IIT, KAU" },
      ],
    },
    educational: [
      {
        title: "Number of Schools",
        data: [
          { label: "Primary", value: "8424" },
          { label: "Upper Primary", value: "4020" },
          { label: "High School", value: "2790" },
          { label: "Higher Secondary", value: "1907" },
        ],
      },
      {
        title: "College and Universities",
        data: [
          { label: "Colleges", value: "1448" },
          { label: "Universities", value: "23" },
        ],
      },
      {
        title: "Vocational & Skill Based Institution",
        data: [
          { label: "ITI", value: "467" },
          { label: "Polytechnics", value: "83" },
        ],
      },
    ],
  },
];
