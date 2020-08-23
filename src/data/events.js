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
      {type: "p", text: "That being said, my biggest claim to fame at the time was that I was able to read before hitting school - which seemed to impress everyone greatly. Though again, this is according to my mum. Who also says I'm cool."}
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
      { ".NET Framework": "Does coding in BASIC count? It's the precursor to the precursor of VB.NET" }
    ],
    tags: ["Education"],
    backColor: "#FAFF70",
    priority: 1
  },
  {
    id: "Fort Street High School",
    type: "image",
    image: "./images/fortStreetReference.webp",
    imageCaption: "I spent six years at high school, and all I got was this lousy reference. And all those certificates and things.",
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
      { ".NET Framework": "I played around with both BASIC and Visual Basic; in both my spare time and at school" },
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
      {type: "p", text: "During the latter days of university, and during my post-graduation job hunt, I worked as a casual field marketer for Creative Field Marketing. This could actually be quite an interesting position, depending on which client I was assigned to."},
      {type: "p", text: "For instance, on an assignment for Mattel we were tasked with playing with... I mean setting up toy cars and race tracks for in-store demonstrations. Though on the other end of the scale, for Fairfax we had to wake up hideously early in the morning and stand in the cold to hand out their free Sydney Morning Herald lift out called Metro (mX before mX was around)."},
      {type: "p", text: "Unfortunately there was far more of the latter type of gig, but it was still a good way for a uni student / unemployed job seeker to pick up some cash. It also allowed me to get out of my shell a bit and interact with all sorts of clients, as well as the general public."}
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
  {
    id: "Converga",
    type: "text",
    icon: "./images/converga_logo.jpg",
    backgroundImage: "",
    shortHeading: "Converga",
    heading: "Converga",
    subHeading: "Senior Developer",
    dateString: "March 2008 to September 2013",
    startDate: "2008-03-26",
    endDate: "2013-08-30",
    detailParagraphs: [
      {type: "p", text: "Converga is a business services provider. I was brought into their development team, which largely looked after their Paperless Accounts Payable solution. This consisted of a .NET web application, MS SQL backend and several small 'agents', which were windows console apps to perform integration and workflow functions. As a fairly junior developer when I started, it felt like I was thrown a bit in the deep end, as it was a small, busy team - so there was not a lot in the way of guidance or mentoring. The company was often in a state of flux as well - semi-frequent restructures meant that the company direction could change as often as the wind. Not to say that this was a bad thing - it definitely helped me grow in a lot of different ways;"},
      {type: "ul", listItems: [
        "As part of such a small team (at times down to two of us), I got a great deal of exposure to all aspects of the software development life-cycle in a fast-paced environment",
        "The flux gave me the opportunity to report to many different business lines - such as technical, client services, sales - which helped me understand different audiences, and adjust accordingly",
        "Depending on the business area I reported into, I also got experience in dealing with clients - over the phone or email; face to face meetings; and even at one stage being embedded in their office"
      ]},
      {type: "p", text: "Socially, it was a great team (I think I may have to say that, as a member of the social committee). But genuinely, I really enjoyed the social sports teams, fitness boot camps and crossword club - not to mention the usual monthly drinks and Christmas parties. And last, but definitely not least (also probably legally obliged to say that), I met my now wife through the company."}
    ],
    skills: [
      { ".NET Framework": "" }
    ],
    tags: ["Work"],
    backColor: "#FF6666",
    color: "#000000",
    priority: 1
  },  
  {
    id: "Converga Employee of the Year",
    type: "image",
    icon: "./images/star.png",
    image: "./images/converga_employee_of_the_year.jpg",
    imageCaption: "",
    backgroundImage: "",
    shortHeading: "",
    heading: "Converga Employee of the Year 2010",
    subHeading: "",
    dateString: "Awarded February 2011",
    startDate: "2011-02-25",
    endDate: "2011-02-25",
    detailParagraphs: [
      {type: "p", text: "I won employee of the year 2010"}
    ],
    skills: [
    ],
    tags: ["Work"],
    backColor: "#FF6666",
    color: "#000000",
    priority: 2
  },
  {
    id: "DST Bluedoor",
    type: "text",
    icon: "./images/dst_logo.png",
    backgroundImage: "",
    shortHeading: "DST Bluedoor",
    heading: "DST Bluedoor",
    subHeading: "Developer",
    dateString: "March 2014 to November 2015",
    startDate: "2014-03-31",
    endDate: "2015-11-06",
    detailParagraphs: [
      {type: "p", text: "DST Bluedoor is a global provider of wealth management software. I was a part of the Open Door team, which focused on integrating client data into the product suite."},
      {type: "p", text: "There were several developers working in each team, and each team had very clearly defined roles - meaning that the bulk of my work here was translating the business specifications into design documents for someone else, or to write the .NET code from someone else's specs."},
      {type: "p", text: "Honestly, there wasn't much to learn in this job - pure .NET coding, some SOAP based APIs and a little bit of front end ASP.NET work. So when I got a cold call from a DWS recruiter - who added that they would be able to assist me in moving back up to Sydney when the time came - I was happy to move on."}
    ],
    skills: [
      { ".NET Framework": "" }
    ],
    tags: ["Work"],
    backColor: "#99CCFF",
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