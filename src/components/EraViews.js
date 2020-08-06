import React from 'react';

import './cvStyles.css'

// For the dynamic component for each era
// Probably better ways to do this, but seemed like the easiest at the time to get nice html formatting for each

export function Generic(props) {
    return (
        <div>
            <p className="eraDetails alignLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.era.details}</p>
        </div>
    );
}

export function Redundant2020(props) {

    return (
        <div className="eraDetails alignLeft">
            <p>Like many others, I was made redundant during the COVID-19 related economic down turn. This did not come as a great shock, as I had already dodged two previous rounds of redundancies as the pandemic started to take hold. Unforunately though, third time proved to be the charm.</p>
            <p>So after picking myself up and dusting myself off, I dutifully updated my <a href="./resume.html" target="_blank" rel="noopener noreferrer">resume</a> and <a href="https://www.linkedin.com/in/jeffrey-see/" target="_blank" rel="noopener noreferrer">LinkedIn profile</a>. I then started applying for jobs in my wheelhouse. Obviously, this only fills so many hours of the day, so what to do with the rest of my newly gained free time?</p>
            <p>The answer came to me whilst I was updating my resume. Torn between calling it a resume or a CV, I did what any developer stuck for an answer would do - I googled it. From that rabbit hole, I came to the conclusion that the best path forward would be to continue to have the single page resume for job applications - but to also have a "master" CV, containing all the information about my life - staying true to the literal translation.</p>
            <p>Thus this page was born. Built using React and hosted in Azure, it's part job-seeking tool, part side hobby, part blog and part playground to uplift my development skills.</p>
        </div>
    );

}

export function DWS(props) {
    return (
        <div className="eraDetails alignLeft">
            <p>DWS is an IT Services Group, providing a wide range of services to several blue-chip corporate and Government agencies. As a consultant for the company I was expected to quickly adapt to a client, get the job done, and then move on to the next engagement.</p>
            <p>In reality though, it didn't work out like that for me - for all but six months of my time at DWS, I was on a single client: JBWere. Originally brought in for a few months to assist their Application Development team in uplifting old legacy applications (everything from Excel Spreadsheets, MS Access databases, VB6 and VB.NET applications) to a new .NET Framework and SQL based windows application called SEAchange.</p>
            <p>I must have done something right there, as I was extended several times to continue the development on this application, with my best achievement being a NAB nomination for my work on the ARMS (Adviser Remuneration Management System) module within SEAchange. Eventually, I became firmly embedded within the team, performing business as usual support, whilst continuing the development work.</p>
            <p>Unfortunately, my time there came to an end just as things were ramping up technically. I did get to play around with some proof of concepts for further uplifting - most notably a React front end / .NET Core microservice upgrade to SEAchange and the beginnings of CI/CD with some Jenkins Powershell scripting - but NAB started shedding external personel, so it was back to the bench for me.</p>
            <p>The only other client I worked with was LexisNexis - where I did some basic C# coding to add to an existing windows application, and was then re-engaged to work on some Robotic Process Automation. This was done using an application called UiPath, which was used to automate the updating of several thousand records within their CMS. Why we couldn't do it directly through the database I don't really know, but at least it gave me the opportunity to learn a new skill.</p>
        </div>
    );
}

export function DST(props) {
    return (
        <div className="eraDetails alignLeft">
            <p>My role at DST Bluedoor was as part of the development team that looked after their Open Door product, which was one aspect of their pension / superannuation management offering. My time there was fairly unmemorable - mostly writing .NET code to specs from the business analysts. Occasionally, I got involved in writing the specs themselves, but this was a pretty big team with well defined roles.</p>
            <p>That being said, the work was ok, and there was scope to grow into more senior positions. Only reason I left was due to a cold call from a DWS recruiter - who I tried to fob off by saying we were planning on relocating to Sydney soon. They said they'd be able to assist with that, and the rest is history.</p>
        </div>
    );
}

export function Redundant2013(props) {

    return (
        <div className="eraDetails alignLeft">
            <p>It feels like almost everyone in IT has been laid off at some stage, and this was my first taste of it. Not amazing, but in hindsight, it worked out pretty well.</p>
            <p>Firstly, it allowed me to move down to Melbourne, with my now wife, who had recently gotten a position down there. Secondly, we had two destination weddings to attend in the upcoming months, so I now had time to attend both - and the payout gave us some welcome spending money.</p>
            <p>Once those trips were out of the way, I got down to business and within a month or two found a position with DST Bluedoor.</p>
        </div>
    );

}

export function Converga(props) {

    return (
        <div className="eraDetails alignLeft">
            <p></p>
        </div>
    );

}

