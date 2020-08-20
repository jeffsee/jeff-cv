const events = [
  {
    id: "Birth",
    type: "text",
    shortHeading: "Birth",
    heading: "Birth",
    dateString: "May 1983",
    startDate: "1983-05-19",
    endDate: "1983-05-19",
    dateText: "May 1983",
    detailParagraphs: [
      {type: "p", text: "I was born in the Royal Prince Alfred hospital, located in Sydney's inner west."},
      {type: "p", text: "Growing up, we lived in the suburb of Balmain. Details are a little hazy, but I had a happy childhood as far as I recall, and by all reports I was a bright kid. Of course, this is all according to my mum, who may not be the most objective judge."},
      {type: "p", text: "That being said, my biggest claim to fame at the time was that I was able to read before hitting school - which seemed to impress everyone greatly. Though again, this is according to my mum."}
    ],
    tags: ["Personal"],
    priority: 1
  },
  {
    id: "Balmain Public School",
    type: "text",
    icon: "./images/balmainps_logo.webp",
    backgroundImage: "./images/balmainps_bg.webp",
    shortHeading: "Balmain P.S.",
    heading: "Balmain Public School",
    subHeading: "Kindergarten to Year 6",
    dateString: "1998 to 1994",
    startDate: "1988-02-01",
    endDate: "1994-12-16",
    detailParagraphs: [
      {type: "p", text: "I was a bright kid and acquitted myself well during my Balmain Primary days, eventually gaining admittance to Fort Street - an academically selective high school. I also proved to be a fairly well rounded student - outside of the classroom I represented the school at soccer, touch football, softball and cross-country running, as well as participating in the Maths Olympiad."},
      {type: "p", text: "With regards to my future career, this is probably when my interest in computing - and programming in particular - first developed. Using a second hand IBM 286, I dived head-first into the technical world, with my earliest memory being coding a working blackjack game using QBASIC."}
    ],
    skills: [
      { "VB.NET": "Does coding in BASIC count? It's the precursor to the precursor of VB.NET" }
    ],
    tags: ["Education"],
    backColor: "#FAFF70",
    priority: 1
  },
  {
    id: "Fort Street High School",
    type: "image",
    image: "./images/fortStreetReference.webp",
    icon: "./images/fshs_logo.webp",
    backgroundImage: "./images/fshs_bg.webp",
    shortHeading: "Fort Street H.S.",
    heading: "Fort Street High School",
    subHeading: "Year 7 to Year 12",
    dateString: "1995 to 2000",
    startDate: "1995-01-30",
    endDate: "2000-12-19",
    detailParagraphs: [
      {type: "p", text: "Fort Street High School is a selective co-educational secondary day school located in the inner west of Sydney. Entry was based off academic merit, based off the Selective High School Placement Test taken at the end of primary school."},
      {type: "p", text: "For the HSC (Higher School Certificate), I received a UAI (Universities Admission Index) score of 91.2 out of 100. My subjects were: 3 unit mathematics, 3 unit Computing Studies, 2 unit English, 2 unit Economics and 2 unit Physics."},
      {type: "p", text: "Career wise, this time was where I really developed my interest in the world of programming. Some of the projects I remember undertaking were a casino game written in QBASIC, A horse racing game in Visual Basic, and a dice cricket simulator in Pascal."}
    ],
    skills: [
      { "VB.NET": "I played around with both BASIC and Visual Basic; in both my spare time and at school" },
      { "Pascal": "Can't actually remember why I was using Pascal - I'd assume it was through school. The cricket dice simulator was something we used to play with real dice during class"}
    ],
    tags: ["Education"],
    backColor: "#802B37",
    color: "#FFFFFF",
    priority: 1
  },
  {
    id: "University of New South Wales",
    type: "text",
    icon: "./images/UNSW_logo.webp",
    backgroundImage: "",
    shortHeading: "UNSW",
    heading: "University of New South Wales",
    subHeading: "Bachelor of Science (B.S.), Computer Science",
    dateString: "2001 to 2003",
    startDate: "2001-02-26",
    endDate: "2003-12-02",
    detailParagraphs: [
      {type: "p", text: "The University of New South Wales is one Australia's leading universities. Continuing on from my interest in computer related topics from high school, I enrolled in a Bachelor of Science in Computer Science degree."},
      {type: "p", text: "The crowning achievement of my time at Uni was a high distinction in Computing 1A - so if anyone needs a Haskell programmer, I'm your man. In other software engineering related courses, I also obtained distinctions for Computing 1B, Business Data Management, and Professional Issues and Ethics for Computer Science. And credits in Discrete Mathematics, Software Implementation, Human Computer Interaction, and Requirements Elicitation."},
      {type: "p", text: "From a technical point of view, I got a good grounding in a fairly wide range of languages and techniques - notably C, Java, JavaScript, Python and SQL."}
    ],
    skills: [
      { "C": "Quite a few courses used C" },
      { "Java": "Quite a few courses used Java" },
      { "JavaScript": "Quite a few courses used JavaScript - mainly the business oriented ones"},
      { "Python": "Python was used for a few courses"},
      { "MSSQL": "SQL was the primary query language used throughout the uni courses"}
    ],
    tags: ["Education"],
    backColor: "#FFFF99",
    color: "#000000",
    priority: 1
  },
  {
    id: "Princeton Property Group",
    type: "text",
    icon: "./images/phone.png",
    backgroundImage: "",
    shortHeading: "",
    heading: "Princeton Property Group",
    subHeading: "Part Time Telemarketer",
    dateString: "August 2003 to October 2003",
    startDate: "2003-08-12",
    endDate: "2003-10-25",
    detailParagraphs: [
      {type: "p", text: "As many a poor university student before and after me, I tried my hand at Telemarketing. With the Princeton Property Group, I was tasked with cold calling people to offer them tickets to FREE property investment seminars. Let's not mince words, it can be pretty soul crushing work and it was not long before I left for greener grass."},
      {type: "p", text: "Even with such a short tenure, I did feel that my stint there massively helped improve my phone manner, as well as my composure under  (let's call it) verbal pressure. I also learnt that telemarketing is a thankless job, and to this day am always polite with cold callers. For the most part."}
    ],
    skills: [],
    tags: ["Work"],
    backColor: "#FFFFFF",
    color: "#000000",
    priority: 2
  },
  {
    id: "Creative Field Marketing",
    type: "text",
    icon: "",
    backgroundImage: "",
    shortHeading: "C.F.M.",
    heading: "Creative Field Marketing",
    subHeading: "Casual Field Marketer",
    dateString: "October 2003 to December 2014",
    startDate: "2003-10-27",
    endDate: "2004-12-13",
    detailParagraphs: [
      {type: "p", text: "Creative Field Marketing"}
    ],
    skills: [],
    tags: ["Work"],
    backColor: "#FFFFFF",
    color: "#000000",
    priority: 2
  },
  {
    id: "SecurityMail",
    type: "text",
    icon: "./images/sema_logo.webp",
    backgroundImage: "",
    shortHeading: "SecurityMail",
    heading: "SecurityMail / SEMA Group",
    subHeading: "Developer in the Rapid Development and Implementation team",
    dateString: "January 2005 to March 2008",
    startDate: "2005-01-10",
    endDate: "2008-03-20",
    detailParagraphs: [
      {type: "p", text: "The SEMA Group (née SecurityMail) was a marketing company, primarily focused on providing direct mail promotional services for their clients. My role was mostly as part of their Rapid Development and Implementation team. Which is an impressive name for what was a fairly standard role. Most of my work there involved taking the client data and formatting for use with Exstream Dialogue - a third party document composition tool."},
      {type: "p", text: "Beyond the day to day business as usual data processing, there was a fair bit of variety in the projects I was involved in:"},
      {type: "ul", listItems: [
        "Updating the shell scripts which sorted mail out records into Australia Post approved sort codes",
        "Updating other internal processing tools - such as those to generate mailing barcodes for Australia Post. These were written in a variety of languages - though predominantly Shell Scripts, Batch Files, Java and C",
        "Composing the documents to be mailed out (both hard copy and electronic formats) using Exstream Dialogue",
        "Performing layout testing on the industrial class printers"
      ]},
      {type: "p", text: "My time at the SEMA Group was a good introduction to the corporate world - whilst the technologies might not be totally related to what I'm doing now, I did get good experience in working in a high-paced, client focused environment and delivering quality work within tight time lines."}
    ],
    skills: [
      { "C": "Anything more advanced than a simple data re-ordering tended to utilise a C program" },
      { "Perl": "Used for basic data transformation"},
      { "Shell Scripting": "Basic automation scripts to prepare data for production"},
      { "Powershell": "Other automation scripts were written in DOS Batch Files - the precursor to Powershell (sort of)" },
      { "Exstream Dialogue": "Composed documents for client mail outs"},
      { "Java": "Maintaining various internal design tools"}
    ],
    tags: ["Work"],
    backColor: "#FFCC99",
    color: "#000000",
    priority: 1
  },  
];

// Wrap it in a function in case I ever decide to convert it into an API
function getEvents() {
  return events
}

// Gets a specific event
export function getEventByID(eventID) {
  return events.filter(e => e.eventID === eventID)[0];
}

export default getEvents;