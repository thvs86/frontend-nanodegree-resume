/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: "Laur-Marian Mertea",
    role: "Web Developer",
    contacts: [{
        mobile: "+40721733506",
        email: "mertealaur@gmail.com",
        github: "thvs86",
        twitter: "@thvs86",
        location: "Budapest"
    }],
    welcomeMessage: "Knowledge is power!",
    skills: ["JS", "HTML", "CSS", "PHP", "Quality Control", "Information Security", "Bussiness Continuity"],
    biopic: "images/me.jpeg",
    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedHTMLcontactGeneric = HTMLcontactGeneric.replace("%contact%", bio.contacts)
        var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts[0].mobile);
        var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts[0].email);
        var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts[0].github);
        var formattedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts[0].twitter);
        var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts[0].location);
        var formattedHTMLwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $(formattedName).insertBefore("#topContacts");
        $(formattedRole).insertBefore("#topContacts");
        $("#topContacts").append(formattedHTMLmobile);
        $("#topContacts").append(formattedHTMLemail);
        $("#topContacts").append(formattedHTMLgithub);
        $("#topContacts").append(formattedHTMLtwitter);
        $("#topContacts").append(formattedHTMLlocation);
        $(formattedHTMLbioPic).insertAfter("#topContacts");
        $(formattedHTMLwelcomeMessage).insertAfter(".biopic");
        $(HTMLskillsStart).insertAfter(".welcome-message");
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedHTMLskills);
        }
    }
};

bio.display();

// Internationalize function (also works if the name is improperly introduced)
// function inName(name) {
//     var finalName = name;
//     var fPrenom = "0";
//     var sPrenom = "0";
//     var ds = 0;
//     var l = finalName.length;
//     var a = (finalName.slice(0, 1)).toUpperCase();
//     var d = finalName.search("-");
//     fPrenom = (finalName.slice(1, d)).toLowerCase();
//     var temp = finalName.slice(d + 1, l);
//     var ds = temp.search("-");
//     if (ds != -1) {
//         sPrenom = (temp.slice(1, ds)).toLowerCase();
//         var b = (temp.slice(0, 1)).toUpperCase();
//         var temps = temp.slice(ds + 1, l);
//     }
//     var n = finalName.search(" ");
//     var last = (finalName.slice(n, l)).toUpperCase();
//     if (fPrenom == "0") {
//         var _first = (finalName.slice(1, n)).toLowerCase();
//         var first = a.concat(_first);
//         finalName = first.concat(last);
//     } else {
//         if (sPrenom == "0") {
//             var first = a.concat(fPrenom);
//             fl = first.length;
//             _second = (temp.slice(1, n - fl)).toLowerCase();
//             var b = (temp.slice(0, 1)).toUpperCase();
//             var second = b.concat(_second);
//             finalName = first.concat("-", second, last)
//         } else {
//             var first = a.concat(fPrenom);
//             fl = first.length;
//             var second = b.concat(sPrenom);
//             sl = second.length;
//             var tl = fl + sl + 1;
//             _third = (temps.slice(1, n - tl)).toLowerCase();
//             var c = (temps.slice(0, 1)).toUpperCase();
//             var third = c.concat(_third);
//             finalName = first.concat("-", second, "-", third, last)
//         }
//     }
//     return finalName;
// }

// Internationalize button
// $("#main").append(internationalizeButton);

var work = {
    jobs: [{
        employer: "EventLink360",
        title: "Junior Programmer",
        location: "București",
        dates: "07.12.2015 - 07.12.2016",
        description: "Web development of applications. Building both back-end and front-end and all in between. HTML5/CSS3, JavaScript, jQuery, MySQL, PHP. Working especially with CakePHP and CodeIgniter frameworks."
    }, {
        employer: "Tend Construct",
        title: "System Engineer",
        location: "București",
        dates: "01.01.2012 - 05.12.2015",
        description: "Besides system engineer responsibilities, I also had: Quality Control Management Representative (3 and a half years) / Information Security Management Representative (3 years) / Bussiness Continuity Management Representative (2 years) roles."
    }, {
        employer: "KTech Electronics",
        title: "Service Engineer",
        location: "Constanța",
        dates: "02.2007 - 04.2007",
        description: "Usual responsibilities where: product reception - service reception point & transfer to a specialized service / product repairing or substitution."
    }, {
        employer: "Diverta Retail",
        title: "Sales Assistant",
        location: "Constanța",
        dates: "04.2006 - 12.2006",
        description: "Usual responsibilities where: product reception / merchandising / stock maintainance / asisstance & counseling for customers."
    }],
    display: function() {
        // for (job in work.jobs) {
        //     $("#workExperience").append(HTMLworkStart);
        //     var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        //     var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        //     var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        //     var formattedHTMLworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        //     var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        //     $(".work-entry:last").append(formattedHTMLworkEmployer.concat(formattedHTMLworkTitle, formattedHTMLworkLocation, formattedHTMLworkDates, formattedHTMLworkDescription));
        // }
        work.jobs.forEach(function(job, index) {
            $("#workExperience").append(HTMLworkStart);
            var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedHTMLworkDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedHTMLworkEmployer.concat(formattedHTMLworkTitle, formattedHTMLworkLocation, formattedHTMLworkDates, formattedHTMLworkDescription));
        })
    }
};

work.display();

var project = {
        projects: [{
            title: "Certifying a local administrative authority in the following ISO Management Systems: 9001, 27001, 22301.",
            dates: "2012-2015",
            description: "The certificates where obtained and mantained according to the ISO standards. ISO 9001:2008 was obtained in 2012, mantained and updated in 2015 to the ISO 9001:2015. ISO 27001:2013 was obtained in 2013 and mantained. ISO 22301:2012 was obtained in 2015.",
            images: ["images/standards.jpg"]
        }, {
            title: "Aerogels and the protection of the combustion chamber - paperwork",
            dates: "2010 - 2011",
            description: "My diploma paperwork on using aerogels as means of protection for the combustion chamber.",
            images: ["images/wiki_aerogel.jpg"]
        }, {
            title: "A rock music webshop made in VisualFox",
            dates: "2005",
            description: "A series of tests and a final project needed to obtain the Professional certificate at Informatics.",
            images: ["images/fox52.gif"]
        }],
        display: function() {
            // for (proj in project.projects) {
            //     $("#projects").append(HTMLprojectStart);
            //     var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", project.projects[proj].title);
            //     var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", project.projects[proj].description);
            //     var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", project.projects[proj].dates);
            //     var formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", project.projects[proj].images);
            //     $(".project-entry:last").append(formattedHTMLprojectTitle.concat(formattedHTMLprojectDates, formattedHTMLprojectDescription, formattedHTMLprojectImage));
            // }
            project.projects.forEach(function(proj, index) {
                    $("#projects").append(HTMLprojectStart);
                    var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", proj.title);
                    var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", proj.description);
                    var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", proj.dates);
                    var formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", proj.images);
                    $(".project-entry:last").append(formattedHTMLprojectTitle.concat(formattedHTMLprojectDates, formattedHTMLprojectDescription, formattedHTMLprojectImage));
                })
            }
        };

        project.display();

        var education = {
            schools: [{
                schoolName: "UPB - Facultatea de Inginerie Aerospațială",
                schoolDegree: "Engineering",
                schoolYears: "2007-2011",
                schoolLocation: "Bucharest",
                url: "http://www.aero.pub.ro/",
                schoolMajor: ["Propulsion systems"]
            }, {
                schoolName: "Liceul Teoretic Ovidius",
                schoolDegree: "Math-Info",
                schoolYears: "2001-2005",
                schoolLocation: "Constanța",
                url: "http://www.liceulovidius.ro/",
                schoolMajor: ["Informatics", "Mathematics"]
            }],
            onlineClasses: [{
                title: "Front-End Web Developer Nanodegree",
                school: "Udacity",
                dates: "January 2017",
                url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
            }, {
                title: "HTML&CSS / JavaScript / jQuery / PHP / Learn SQL / Learn AngularJS 1.X",
                school: "CodeAcademy",
                dates: "07.12.2015 - 11.02.2016",
                url: "https://www.codecademy.com/learn"
            }, {
                title: "Semaine intensif Erasmus - Le Defi Intercuturel Pose Par La Mobilite Des Travailleurs",
                school: "Haute Ecole de Liege",
                dates: "03.2009 - 04.2009",
                url: "http://www.provincedeliege.be/hauteecole"
            }],
            display: function(){
                education.schools.forEach(function(school, index) {
                    $("#education").append(HTMLschoolStart);
                    var formattedHTMLschoolName = HTMLschoolName.replace("%data%", school.schoolName);
                    var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", school.schoolDegree);
                    var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", school.schoolYears);
                    var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", school.schoolLocation);
                    var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", school.schoolMajor);
                    $(".education-entry:last").append(formattedHTMLschoolName.concat(formattedHTMLschoolDegree, formattedHTMLschoolDates, formattedHTMLschoolLocation, formattedHTMLschoolMajor));
                })
                $("#education").append(HTMLonlineClasses);
                education.onlineClasses.forEach(function(onlineClass, index) {
                    $("#education").append(HTMLschoolStart);
                    var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", onlineClass.title);
                    var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", onlineClass.school);
                    var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", onlineClass.dates);
                    var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", onlineClass.url);
                    $(".education-entry:last").append(formattedHTMLonlineTitle.concat(formattedHTMLonlineSchool, formattedHTMLonlineDates, formattedHTMLonlineURL));
                })
            }
        };
        
        education.display();

        $(document).click(function(loc) {
            var x = loc.pageX;
            var y = loc.pageY;
            logClicks(x, y);
        });

        // map
        $("#mapDiv").append(googleMap);
        var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts[0].mobile);
        var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts[0].email);
        var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts[0].github);
        var formattedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts[0].twitter);
        var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts[0].location);
        $("#footerContacts").append(formattedHTMLmobile);
        $("#footerContacts").append(formattedHTMLemail);
        $("#footerContacts").append(formattedHTMLgithub);
        $("#footerContacts").append(formattedHTMLtwitter);
        $("#footerContacts").append(formattedHTMLlocation);