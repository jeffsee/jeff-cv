const events = [
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
      {type: "p", text: "For the HSC (Higher School Certificate), I received a UAI (Universities Admission Index) score of 91.2 out of 100. My subjects were: 3 unit mathematics, 3 unit Computing Studies, 2 unit English, 2 unit Economics and 2 unit Physics."}
    ],
    skills: [],
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
      {type: "p", text: "The crowning achievement of my time at Uni was a high distinction in Computing 1A - so if anyone needs a Haskell programmer, I'm your man. In other software engineering related courses, I also obtained distinctions for Computing 1B, Business Data Management, and Professional Issues and Ethics for Computer Science. And credits in Discrete Mathematics, Software Implementation, Human Computer Interaction, and Requirements Elicitation."}
    ],
    skills: [],
    tags: ["Education"],
    backColor: "#FFFF99",
    color: "#000000",
    priority: 1
  },
  {
    id: "Princeton Property Group",
    type: "text",
    icon: "",
    backgroundImage: "",
    shortHeading: "Telemarketer",
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
    shortHeading: "Field Marketer",
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
    type: "position",
    icon: "./images/sema_logo.webp",
    backgroundImage: "",
    shortHeading: "SecurityMail",
    heading: "SecurityMail / SEMA Group",
    subHeading: "Developer in the Rapid Development and Implementation team",
    dateString: "January 2005 to March 2008",
    startDate: "2005-01-10",
    endDate: "2008-03-20",
    detailParagraphs: [
      {type: "p", text: "The SEMA Group (née SecurityMail) was a marketing company, primarily focused on providing direct mail promotional services for their clients. My role was mostly as part of their Rapid Development and Implementation team. Which mostly involved taking client data and formatting for mail outs and for use with Exstream Dialogue - a third party document composition tool."},
      {type: "p", text: "Beyond the day to day business as usual data processing, I quickly advanced to the more technically advanced work the team was involved in. These projects included:"},
      {type: "ul", listItems: [
        "Updating the shell scripts which sorted mail out records into Australia Post approved sort codes",
        "Updating other internal processing tools - such as those to generate mailing barcodes for Australia Post",
        "Composing the documents to be mailed out (both hard copy and electronic formats) using Exstream Dialogue",
        "Performing layout testing on the industrial class printers"
      ]}
    ],
    skills: [
      { type: "C", text: "Anything more advanced than a simple data filtering or restructuring tended to utilise custom C programs" },
      { type: "Perl", text: "Used for basic data transformation"},
      { type: "Shell Scripting", text: "Basic automation scripts to prepare data for production"},
      { type: "DOS Batch Files", text: "Other automation scripts were written in DOS Batch Files" },
      { type: "Exstream Dialogue", text: "Composed documents for client mail outs"},
      { type: "Java", text: "Maintaining various internal tools"},
      { type: "Screenmaster", text: ""}
    ],
    tags: ["Work"],
    backColor: "#FFCC99",
    color: "#000000",
    priority: 1
  },
  {
    id: "Converga",
    type: "position",
    icon: "./images/converga_logo.webp",
    backgroundImage: "",
    shortHeading: "Converga",
    heading: "Converga",
    subHeading: "Senior Developer",
    dateString: "March 2008 to September 2013",
    startDate: "2008-03-26",
    endDate: "2013-08-30",
    detailParagraphs: [
      {type: "p", text: "Converga is a business services provider. I was brought into their development team, which largely looked after their Paperless Accounts Payable solution. This consisted of a .NET web application, MS SQL backend and several small 'agents', which were windows console apps to perform integration and workflow functions."},
      {type: "p", text: "Starting out as a junior developer, I progressed into a senior position within the team, and would be involved in all aspects of the software development lifecycle. This included being embedded on site with clients during implementation periods."},
      {type: "p", text: "Eventually, Converga shifted to be a more services-oriented company and rather than developing their in-house solution, partnered with third-parties to provide their software solutions. This would lead to me (and the majority of the then named 'Product' team) being made redundant."},
    ],
    skills: [
      { type: ".NET Framework (C# and VB.NET)", text: "" },
      { type: "MS SQL", text: "" },
      { type: "ASP.NET", text: "" },
      { type: "Web Services", text: "A large part of the role was integrating with the client's systems - SOAP-based web services were commonly used for this purpose"},
      { type: "Source Control", text: "SVN" },
      { type: "Prodagio and Palette", text: "Converga experimented with a few different third party accounts payable solutions"},
      { type: "Documentum", text: "Was used as the back-end content management system for Prodagio" }
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
      {type: "p", text: "I was awarded Employee of the Year at Converga for 2010 for my work done to retain a client threatening to leave."},
      {type: "p", text: "At the time, Converga was experimenting with third-party off-shore development teams, and this project was being developed by one of these. Unfortunately (for them), they were struggling with the work and timelines - resulting in me being brought in to help get them over the line."},
      {type: "p", text: "I'd like to say that it was a mammoth effort by me, combining genius and hard work to help get the client back on-side, but in reality, I didn't have to do anything spectacular - all I did was give them clear timelines and descriptions on what I was going to do, and then deliver as promised (with a few late nights)."}
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
    type: "position",
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
      {type: "p", text: "Unfortunately, I wasn't learning (or was going to learn) much in this position. So when I got a cold call from a DWS recruiter - who added that they would be able to assist me in moving back up to Sydney when the time came - I was happy to explore the opportunity and move on."}
    ],
    skills: [
      { type: ".NET Framework (C# and VB.NET)", text: "" },
      { type: "MS SQL", text: "" },
      { type: "ASP.NET", text: "" },
      { type: "Web Services", text: "SOAP based web services were commonly used in our integration activities" },
      { type: "Source Control", text: "TFS" }
    ],
    tags: ["Work"],
    backColor: "#99CCFF",
    color: "#000000",
    priority: 1
  },
  {
    id: "DWS",
    type: "text",
    icon: "./images/dws_logo.png",
    backgroundImage: "",
    shortHeading: "DWS",
    heading: "DWS",
    subHeading: "Hired as IT Consultant",
    dateString: "Started November 2015",
    startDate: "2015-11-09",
    endDate: "2015-11-09",
    detailParagraphs: [
      {type: "p", text: "DWS is a technology consultancy, providing IT services of all types to a large range of blue-chip and government clients. Brought on as a Consultant Developer, I was expected to go client to client to assist them in all facets of the Software Development process."},
      {type: "p", text: "In reality though, it didn't work out like that, as I spent the vast majority of my time with DWS on client - JBWere. Obviously, I was doing something right there, as my contract there was renewed for over four years - only ending as the COVID-19 pandemic began to affect business conditions."},
      {type: "p", text: "Unfortunately, this also extended to a lot of DWS' other clients and after dodging two rounds of redundancy, third time ultimately proved the charm as I was made redundant from my position there in July 2020."},
    ],
    skills: [],
    tags: ["Work"],
    backColor: "#4D8EFF",
    color: "#000000",
    priority: 2
  },
  {
    id: "JBWere",
    type: "position",
    icon: "./images/jbwere_logo.png",
    backgroundImage: "",
    shortHeading: "JBWere",
    heading: "JBWere (as DWS Consultant)",
    subHeading: ".NET Developer",
    dateString: "November 2015 to January 2020",
    startDate: "2015-11-30",
    endDate: "2020-01-31",
    detailParagraphs: [
      {type: "p", text: "JBWere is one of Australia's leading wealth managers. As a part of the NAB family, it was my first real experience in working for a big corporate - definitely a change of pace from the smaller companies of before."},
      {type: "p", text: "I was engaged through DWS to their application delivery team for a short stint to uplift old applications (from a variety of sources; including Access databases, VB 6 and other .NET Frameworks) into a new system built using .NET and SQL Server."},
      {type: "p", text: "From that initial engagement, I had my contract renewed several times, and pretty much became a part of the team - working along side the other developers to update, maintain and support the new system (and all other BAU activities)."},
    ],
    skills: [
      { type: ".NET Framework (C# and VB.NET)", text: "" },
      { type: "MS SQL (and Entity Framework)", text: "" },
      { type: "React and .NET Core", text: "Towards the end of my tenure, I helped to write a proof of concept to further uplift the application into a React based web-application, using .NET Core microservices as a backend" },
      { type: "nUnit (and Moq)", text: "I led the introduction of unit testing into the JBWere code base" },
      { type: "Source Control", text: "TFS, Git" },
      { type: "CI/CD", text: "Jenkins" },
      { type: "Collaboration Tools", text: "Jira, Confluence" },
      { type: "Scheduler", text: "Control-M" },
    ],
    tags: ["Work"],
    backColor: "#99DDFF",
    color: "#000000",
    priority: 1
  },
  {
    id: "LexisNexis",
    type: "position",
    icon: "./images/lexisnexis_logo.png",
    backgroundImage: "",
    shortHeading: "LexisNexis",
    heading: "LexisNexis (as DWS Consultant)",
    subHeading: ".NET Developer and RPA Developer",
    dateString: "March 2020 to July 2020",
    startDate: "2020-03-04",
    endDate: "2020-07-13",
    detailParagraphs: [
      {type: "p", text: "LexisNexus is a leading provider of legal, regulatory and business information and analytics. I was engaged by their product team for two separate projects."},
      {type: "p", text: "The first was to upgrade an existing C# application, which merged together information from several sources into a single Excel spreadsheet, with some extensive VBA macros."},
      {type: "p", text: "The second project was to create a UIPath bot, which automated the process of updating several thousand records within their Content Management System due to legislation changes."},
    ],
    skills: [
      { type: ".NET Framework (C#)", text: "" },
      { type: "Microsoft Excel and VBA", text: "" },
      { type: "UiPath", text: "I got a good grounding in UiPath, and whilst I wouldn't consider myself an expert (yet), it certainly laid the groundwork for further learning. Should the opportunity arise." },
    ],
    tags: ["Work"],
    backColor: "#FFA3A3",
    color: "#000000",
    priority: 1
  },
  {
    id: "CreditCorp",
    type: "position",
    icon: "./images/creditcorp_logo.png",
    backgroundImage: "",
    shortHeading: "Credit Corp",
    heading: "Credit Corp Group",
    subHeading: "Senior Business Systems Developer",
    dateString: "August 2020 to present",
    startDate: "2020-08-17",
    detailParagraphs: [
      {type: "p", text: "CreditCorp is Australia's largest debt purchaser and collector. I was initially engaged on a one year contract to their collections development team. This team was responsible for quite a few of Credit Corp's Solutions and Business Applications. These included:"},
      {type: "ul", listItems: [
        "The Debt Management system. This was a WinForms application written in .NET code",
        "Many data integrations for payment processing and contact tracing - these were performed in many different ways, from flat file transfer to SOAP based and RESTful web services",
        "Customer facing self-service website to allow clients to manage their accounts. Mainly written in ASP.NET code with .NET web services, but also utilising AngularJS in parts"
      ]}
    ],
    skills: [
      { type: ".NET Framework (C# and VB.NET)", text: "" },
      { type: "MS SQL", text: "" },
      { type: "Web Services", text: "SOAP based and RESTful" },
      { type: "nUnit", text: "" },
      { type: "Source Control", text: "TFS, Git" },
      { type: "CI/CD", text: "Team City, Octopus" },
      { type: "Collaboration Tools", text: "Jira, Confluence" },
      { type: "Scheduler", text: "JAMS" },
    ],
    tags: ["Work"],
    backColor: "#E0DCDC",
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