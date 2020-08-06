const cvEras = [
    {
        id: "Childhood",
        startDate: "1983-05-01",
        endDate: "1988-02-01",
        details: "My childhood",
        tags: ["Personal"],
        backColor: "#E0E0E0",
        shadowColor: "#000000"
    },
    {
        id: "Primary School",
        startDate: "1988-02-01",
        endDate: "1995-01-01",
        details: "Balmain Primary School",
        tags: ["Education"],
        backColor: "#FFFF66",
        shadowColor: "#000000"
    },
    {
        id: "High School",
        startDate: "1995-01-01",
        endDate: "2001-01-01",
        details: "Fort Street High School",
        tags: ["Education"],
        backColor: "#660033",
        shadowColor: "#000000"
    },
    {
        id: "University",
        startDate: "2001-01-01",
        endDate: "2005-01-10",
        details: "University of New South Wales",
        tags: ["Education"],
        backColor: "#FFFF99",
        shadowColor: "#000000"
    },
    {
        id: "SEMA Group",
        startDate: "2005-01-10",
        endDate: "2008-03-26",
        details: "Developer in the Rapid Implementation and Development team",
        tags: ["Work"],
        backColor: "#FFCC99",
        shadowColor: "#000000"
    },
    {
        id: "Converga",
        position: "Developer",
        component: "converga",
        positions: [
            { position: "Developer", startDate: "2008-03-26", endDate: "2011-01-01" },
            { position: "Senior Developer", startDate: "2011-01-01", endDate: "2013-08-31" }
        ],
        startDate: "2008-03-26",
        endDate: "2013-08-31",
        locations: [
            { location: "Sydney, NSW", startDate: "2008-03-26", endDate: "2008-11-24" },
            { location: "St. Leonards, NSW", startDate: "2008-11-24", endDate: "2013-08-31" }
        ],
        dateString: "March 2008 to September 2013",
        details: "Senior Developer at Converga",
        tags: [".NET", "MSSQL", "ASP.NET"],
        backColor: "#FF6666",
        shadowColor: "#000000"
    },
    {
        id: "Redundancy ",
        position: "(First Edition)",
        component: "redundant2013",
        locations: [
            { location: "Sydney, NSW", startDate: "2013-08-31", endDate: "2013-09-14" },
            { location: "Melbourne, VIC", startDate: "2013-09-14", endDate: "2014-03-31" }
        ],
        startDate: "2013-08-31",
        endDate: "2014-03-31",
        dateString: "September 2013 to March 2014",
        details: "Made redundant by Converga...",
        tags: ["Personal"],
        backColor: "#E0E0E0",
        shadowColor: "#000000"
    },
    {
        id: "DST Bluedoor",
        position: "Developer",
        component: "dst",
        startDate: "2014-03-31",
        endDate: "2015-11-09",
        dateString: "March 2014 to November 2015",
        location: "Melbourne, VIC",
        tags: [".NET", "ASP.NET", "MSSQL"],
        details: "In component - should not see this",
        backColor: "#99CCFF",
        shadowColor: "#000000"
    },
    {
        id: "DWS",
        position: "Consultant (Developer)",
        positions: [
            { position: "On the Bench as a Consultant", startDate: "2015-11-09", endDate: "2015-11-30" },
            { position: "Developer at JBWere", startDate: "2015-11-30", endDate: "2020-01-31" },
            { position: "On the Bench as a Consultant", startDate: "2020-01-31", endDate: "2020-03-04" },
            { position: ".NET Developer at LexisNexis", startDate: "2020-03-04", endDate: "2020-04-01" },
            { position: "Robotic Process Automation Developer at LexisNexis", startDate: "2020-04-01", endDate: "2020-07-13" }
        ],
        component: "dws",
        startDate: "2015-11-09",
        endDate: "2020-07-13",
        dateString: "November 2015 to July 2020",
        locations: [
            { location: "Melbourne, VIC", startDate: "2015-11-09", endDate: "2016-12-04" },
            { location: "Sydney, NSW", startDate: "2016-12-04", endDate: "2020-07-13" },
        ],
        details: "In component - should not see this",
        tags: [".NET", "MSSQL", "UiPath"],
        backColor: "#0080FF",
        shadowColor: "#000000"
    },
    {
        id: "Redundancy",
        position: "(COVID-19 edition)",
        component: "redundant2020",
        startDate: "2020-07-13",
        endDate: null,
        dateString: "July 2020 to present",
        location: "Sydney, NSW",
        details: "In component - should not see this",
        tags: ["React", "Azure"],
        backColor: "#E0E0E0",
        shadowColor: "#000000"
    }
]

export default cvEras;