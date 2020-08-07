import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from "react-images";

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
            <p>Like many others, I was made redundant during the COVID-19 related economic down turn. This did not come as a great shock, as I had already dodged two previous rounds of redundancies at DWS as the pandemic began to take hold. Unforunately though, third time proved to be the charm.</p>
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
            <p>In reality though, it didn't work out like that for me - for all but six months of my time at DWS, I was on a single client: JBWere, who are a high-value financial management arm of NAB. My initial engagement was supposed to be for a few months to assist their Application Development team in uplifting old legacy applications (everything from Excel Spreadsheets, MS Access databases, VB6 and VB.NET applications) to a new .NET Framework and SQL based windows application called SEAchange.</p>
            <p>I must have done something right there though, as I was extended several times to continue the development on this application, with my best achievement being a NAB nomination for my work on the ARMS (Adviser Remuneration Management System) module within SEAchange. Eventually, I became firmly embedded within the team, performing business as usual support, whilst continuing the development work.</p>
            <p>Unfortunately, my time with JBWere came to an end just as things were getting interesting (in a technical sense). I did get to play around with some proof of concepts for further uplifting - most notably a React front end / .NET Core microservice upgrade to SEAchange and the beginnings of CI/CD with some Jenkins Powershell scripting - but NAB started shedding external personel before it really started ramping up, and it was back to the bench for me.</p>
            <p>The only other client I worked with was LexisNexis - where I did some basic C# coding to add to an existing windows application, and was then re-engaged to work on some Robotic Process Automation. This was done using an application called UiPath, which was used to automate the updating of several thousand records within their CMS. Why we couldn't do it directly through the database I don't really know, but at least it gave me the opportunity to add a new string to my bow.</p>
        </div>
    );
}

export function DST(props) {
    return (
        <div className="eraDetails alignLeft">
            <p>DST Bluedoor is a global provider of wealth management software. I was a part of the Open Door team, which focused on integrating client data into the product suite.</p>
            <p>There were several developers working in each team, and each team had very clearly defined roles - meaning that the bulk of my work here was translating the business specifications into design documents for someone else, or to write the .NET code from someone else's specs.</p>
            <p>Honestly, there wasn't much to learn in this job - pure .NET coding, some SOAP based APIs and a little bit of front end ASP.NET work. So when I got a cold call from a DWS recruiter - who added that they would be able to assist me in moving back up to Sydney when the time came - I was happy to move on.</p>
        </div>
    );
}

export function Redundant2013(props) {

    return (
        <div className="eraDetails alignLeft">
            <p>It feels like almost everyone in IT has been laid off at some stage, and this was my first taste of it. Not amazing, but in hindsight, it worked out pretty well.</p>
            <p>Firstly, it allowed me to move down to Melbourne, with my now wife, who had recently gotten a position down there. Secondly, we had two destination weddings to attend in the upcoming months, so I now had time to attend both - and the payout gave us some welcome spending money.</p>
            <p>Luckily, once my jet-setting life style was over, I managed to find myself a position fairly quickly. So before I knew it, I was back into the 9-to-5 lifestyle.</p>
        </div>
    );

}

export function Converga(props) {

    return (
        <div className="eraDetails alignLeft">
            <p>Converga is a business services provider. I was brought into their development team, which largely looked after their Paperless Accounts Payable solution. This consisted of a .NET web application, MS SQL backend and several small "agents", which were windows console apps to perform integration and workflow functions.</p>
            <p>It's probably fair to say that this was my first real development job - and certainly my first full-stack role. Felt like I was thrown a bit in the deep end, as it was a small, busy team - so there was not a lot in the way of guidance or mentoring. The company was often in a state of flux as well - semi-frequent restructures meant that the company direction could change as often as the wind. Not to say that this was a bad thing; it definitely helped me grow in a lot of different ways;</p>
            <ul>
                <li>As part of such a small team (at times down to two of us), I got a great deal of exposure to all aspects of the software development life-cycle in a fast-paced environment</li>
                <li>Again, the small team helped me to develop my ability to work unsupervised, and resulted in me taking full ownership of any deliverables I was tasked with</li>
                <li>The flux meant that I reported to many different lines - technical, client services, sales - and helped me understand different audiences, and adjust accordingly</li>
                <li>Depending on the business area I reported into, I also got experience in dealing with clients - over the phone or email; face to face meetings; and even at one stage being embedded in their office</li>
                <li>I also got exposure to many third-party applications, such as Documentum, Prodagio and Palette</li>
            </ul>
            <p>Socially, it was a great team (I think I may have to say that, as a member of the social committee). But genuinely, I really enjoyed the social sports teams, fitness boot camps and crossword club - not to mention the usual monthly drinks and Christmas parties. And last, but definitely not least (also probably legally obliged to say that), I met my now wife through the company.</p>
        </div>
    );

}

export function SEMA(props) {

    return (
        <div className="eraDetails alignLeft">
            <p>The SEMA Group (née SecurityMail) was a marketing company, primarily focused on providing direct mail promotional services for their clients. My role was mostly as part of their Rapid Development and Implementation team. Which is an impressive name for what was a fairly standard role. Most of my work there involved taking the client data and formatting for use with Exstream Dialogue - a third party document composition tool.</p>
            <p>That being said, I did get to do a fair bit of interesting work on top of that:</p>
            <ul>
                <li>In my first few weeks there, I was tasked with updating the shell script that sorted addresses into the Australia Post required formats and categories (for discounted bulk mailing)</li>
                <li>Used Dialogue to design the layout and composition of the client mail outs and reports</li>
                <li>Got to use industrial class printers to create test mailouts for sign off</li>
                <li>My most important project was working on the NSW Department of Education primary school literacy and numeracy results. These were quite demanding as they had to be millimeter perfect, which was quite difficult as each printer had slightly different configurations</li>
            </ul>
            <p>All in all, SecurityMail was a good introduction to the corporate world - whilst unfortunately there were not too many full stack skills in use - I got to experience working in a high-paced environment, dealing with clients (and client services) and delivering under pressure with tight timelines.</p>
        </div>
    );

}

export function UNSW(props) {

    return (
        <div className="eraDetails alignLeft">
            <p>The University of New South Wales is one Australia's leading universities. Continuing on from my interest in computer related topics from high school, I enrolled in a Bachelor of Science in Computer Science degree.</p>
            <p>The crowning achievement of my time at Uni was a high distinction in Computing 1A - so if anyone needs a Haskell programmer, I'm your man. In other software engineering related courses, I also obtained distinctions for Computing 1B, Business Data Management, and Professional Issues and Ethics for Computer Science. And credits in Discrete Mathematics, Software Implementation, Human Computer Interaction, and Requirements Elicitation.</p>
            <p>From a language point of view, I got a good grounding in a fairly wide range of languages and techniques - notably Java, JavaScript, C, Python and SQL.</p>
        </div>
    );

}

export function FortStreet(props) {

    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function toggleModal(e) {
        e.preventDefault();
        setModalIsOpen(prevState => !prevState);
    }

    const referenceImage = [
        { id: 1, source: "./images/fortStreetReference.webp", caption: "Reference from Fort Street High School" }
    ];

    return (
        <div className="eraDetails alignLeft">
            <p>Fort Street High School is a selective co-educational secondary day school located in the inner west of Sydney. Entry was based off academic merit, based off the Selective High School Placement Test taken at the end of primary school.</p>
            <p>For the HSC (Higher School Certificate), I received a UAI (Universities Admission Index) score of 91.2 out of 100. My subjects were: 3 unit mathematics, 3 unit Computing Studies, 2 unit English, 2 unit Economics and 2 unit Physics.</p>
            <p>Obviously this was a while ago, so my memory of it is a little hazy, but I'll let this <a href="" onClick={toggleModal}>reference</a> do the talking:</p>
            <p style={{fontStyle: "italic", textIndent: "0"}}>
                Jeffrey is a confident young man who demonstrates initiative. His communication skills, both written and oral, are outstanding. He handles pressure very well and is self-motivated. He has a very good sense of humour and relates to others very well. He is punctual, reliable and he is more than willing to take on responsiblity.<br /><br />
                Jeffrey has participated in the Australian Mathematics, Australian Science and Australian Computer Competitions. He has gained numerous High Distinctions and Distinctions in all three competitions and received two prizes in the Australian Mathematics Competition.<br /><br />
                Jeffrey has been involved in organisations such as Amnesty International. He has represented his school in grade soccer, rugby and touch football and was also part of the zone cross-country in Years 7 and 8.<br /><br />
                The school has pleasure in recommending Jeffrey for any position in which he may choose to undertake.
            </p>
            <p style={{textAlign: "right", paddingRight: "20px"}}>Ms Roslynne Moxham<br />Principal<br />01/11/2000</p>
            <p>Couldn't have said it better myself.</p>
            <ModalGateway>
                {modalIsOpen ? (
                    <Modal onClose={toggleModal}>
                        <Carousel views={referenceImage} />
                    </Modal>
                ) : null} 
            </ModalGateway>
        </div>
    );

}