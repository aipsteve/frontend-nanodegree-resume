var bio = {
    "name": "Steve Medley",
    "role": "Web Developer",
    "contacts": {
        "mobile": "323.508.1759",
        "email": "steve@atlantisitprofessionals.com",
        "github": "https://github.com/aipsteve",
        "twitter": "https://twitter.com/aipsteve",
        "location": "Los Angeles, CA"
    },
    "welcomeMessage": "Welcome to my online resume.",
    "skills": ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Angular", "CoffeeScript", "W3"],
    "biopic": "http://buzzlantic.com/wp-content/uploads/2015/11/kylo-ren-150x150.jpg",
    "display": function displayBio() {
        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
        var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

        $('#header').prepend(formattedRole);
        $('#header').prepend(formattedName);
        $('#header').append(formattedBioPic);
        $('#header').append(formattedWelcomeMsg);
        
        $('#topContacts, #footerContacts').prepend(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

        if (bio.skills.length > 0) {
            $('#header').append(HTMLskillsStart);

            bio.skills.forEach(function(val, i){
                var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
                $('#skills').append(formattedSkill);
            })

//            var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
//            $('#skills').append(formattedSkill);
//            var formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
//            $('#skills').append(formattedSkill);
//            var formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
//            $('#skills').append(formattedSkill);
//            var formattedSkill = HTMLskills.replace('%data%', bio.skills[3]);
//            $('#skills').append(formattedSkill);
//            var formattedSkill = HTMLskills.replace('%data%', bio.skills[4]);
//            $('#skills').append(formattedSkill);
//            var formattedSkill = HTMLskills.replace('%data%', bio.skills[5]);
//            $('#skills').append(formattedSkill);
//            var formattedSkill = HTMLskills.replace('%data%', bio.skills[6]);
//            $('#skills').append(formattedSkill);
        }
    }
};

var education = {
    "schools": [{
        "name": "The Tutoring School",
        "location": "LaCanada, CA",
        "degree": "N/A",
        "majors": "N/A",
        "dates": "1997 - 1999",
        "url": ""
    }, {
        "name": "CA CHSPE Examination",
        "location": "Los Angeles, CA",
        "degree": "G.E.D.",
        "majors": "N/A",
        "dates": "1999",
        "url": "https://www.chspe.net/"
    }],
    "onlineCourses": [{
        "title": "Front End Web Developer",
        "school": "Udacity",
        "dates": "In progress",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, {
        "title": "Intro to Programming",
        "school": "Udacity",
        "dates": "March 2016 - April 2016",
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }, {
        "title": "CCNA 2016 200-120 Video Boot Camp",
        "school": "Udemy",
        "dates": "March 2016",
        "url": "https://www.udemy.com/ccna-on-demand-video-boot-camp/learn/v4/overview"
    }],
    "display": function displayFunc() {
        education.schools.forEach(function(val, i) {
            $('#education').append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace('%data%', education.schools[i].name).replace('#', education.schools[i].url);
            var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
            var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
            var formattedMajors = HTMLschoolMajor.replace('%data%', education.schools[i].majors);
            var formattedDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
            var formattedNameDegree = formattedName + formattedDegree;


            $('.education-entry:last').append(formattedNameDegree);
            $('.education-entry:last').append(formattedDates);
            $('.education-entry:last').append(formattedLocation);
            $('.education-entry:last').append(formattedMajors);
        })

        $('.education-entry:last').append(HTMLonlineClasses);

        education.onlineCourses.forEach(function (val, o) {
            var formattedOnTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[o].title);
            var formattedOnSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[o].school);
            var formattedOnDates = HTMLonlineDates.replace('%data%', education.onlineCourses[o].dates);
            var formattedOnURL = HTMLonlineURL.replace('#', education.onlineCourses[o].url).replace('%data%', education.onlineCourses[o].url);
            var formattedOnTitleSchool = formattedOnTitle + formattedOnSchool;

            $('.education-entry:last').append(formattedOnTitleSchool);
            $('.education-entry:last').append(formattedOnDates);
            $('.education-entry:last').append(formattedOnURL);
        })
    }
};

var work = {
    "jobs": [{
        "employer": "Protek IT Solutions",
        "title": "IT Technician",
        "location": "Simi Valley, CA",
        "dates": "April 2015 - Present",
        "description": "System Administration, General Troubleshooting, IT Consulting."
    }, {
        "employer": "Atlantis IT Professionals",
        "title": "President",
        "location": "Los Angeles, CA",
        "dates": "March 2016 - Present",
        "description": "Startup company focusing on small business web development and business software."
    }, {
        "employer": "DeSyria",
        "title": "President",
        "location": "Los Angeles, CA",
        "dates": "May 2013 - Present",
        "description": "Startup company developing a game franchise for future release on mobile, Windows and Linux PCs."
    }, {
        "employer": "Self Employed",
        "title": "Self",
        "location": "Los Angeles, CA",
        "dates": "2005 - Present",
        "description": "Freelance computer assistance for individuals and small companies. Workstation setup, web design, server setup and maintenance."
    }, ],
    "display": function displayWork() {
        work.jobs.forEach(function(val, i) {
            $('#workExperience').append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
            var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
            var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);

            $('.work-entry:last').append(formattedEmployerTitle);
            $('.work-entry:last').append(formattedWorkDates);
            $('.work-entry:last').append(formattedWorkLocation);
            $('.work-entry:last').append(formattedWorkDescription);
        })
    }
};

var projects = {
    "projects": [{
        "title": "PremierFinishing.us",
        "dates": "June 2016 - Present",
        "description": "Bootstrap site for St. Louis painting and restoration company.",
        "images": [
            "https://i.imgsafe.org/b47376fecc.jpg"
        ]
    }, {
        "title": "SweetHartTreats.com",
        "dates": "May 2016 - Present",
        "description": "Website for a local bakery.",
        "images": [
            "https://i.imgsafe.org/b47364e806.jpg"
        ]
    }, {
        "title": "AtlantisITProfessionals.com",
        "dates": "June 2016 - Present",
        "description": "Homepage for my own small business.",
        "images": [
            "https://i.imgsafe.org/b473543d62.jpg"
        ]
    }],
    "display": function displayFunc() {
        projects.projects.forEach(function(val, i) {
            $('#projects').append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
            var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
            var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
            projects.projects[i].images.forEach(function(val, o){
                var formattedImages = HTMLprojectImage.replace('%data%', projects.projects[i].images[o]);
                $('.project-entry:last').append(formattedImages);
            })

            $('.project-entry:last').append(formattedTitle);
            $('.project-entry:last').append(formattedDates);
            $('.project-entry:last').append(formattedDescription);
        })

        
    }
};

// Takes locations of all jobs and puts them in an array
function locationizer(work_obj) {
    var locationArray = [];

    for (var job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}
console.log(locationizer(work));

//Function calls to display resume content
work.display();
bio.display();
projects.display();
education.display();

//Display map of work and home locations
$('#mapDiv').append(googleMap);