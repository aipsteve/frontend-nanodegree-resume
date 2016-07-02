var bio = {
	"name": "Steve Medley",
	"role": "Web Developer",
	"contacts":
		{
			"mobile": "323.508.1759",
			"email": "steve@atlantisitprofessionals.com",
			"github": "https://github.com/aipsteve",
			"twitter": "https://twitter.com/aipsteve",
			"location": "Los Angeles, CA"
		},
	"welcomeMessage": "Welcome to my online resume.",
	"skills": ["HTML5","CSS3","JavaScript","Bootstrap", "Angular", "CoffeeScript", "W3"],
	"biopic": "http://buzzlantic.com/wp-content/uploads/2015/11/kylo-ren-150x150.jpg",
	"display": function displayBio(){
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
		$('#topContacts').prepend(formattedLocation);
		$('#topContacts').prepend(formattedTwitter);
		$('#topContacts').prepend(formattedGithub);
		$('#topContacts').prepend(formattedEmail);
		$('#topContacts').prepend(formattedMobile);

		if(bio.skills.length > 0){
			$('#header').append(HTMLskillsStart);

			var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
			$('#skills').append(formattedSkill);
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
			$('#skills').append(formattedSkill);
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
			$('#skills').append(formattedSkill);
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[3]);
			$('#skills').append(formattedSkill);
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[4]);
			$('#skills').append(formattedSkill);
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[5]);
			$('#skills').append(formattedSkill);
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[6]);
			$('#skills').append(formattedSkill);
		};
	}
};

var education = {
	"schools" : [
		{
			"name": "The Tutoring School",
			"location": "LaCanada, CA",
			"degree": "N/A",
			"majors": "N/A",
			"dates": "1997 - 1999",
			"url": "N/A"
		},
		{
			"name": "CA CHSPE Examination",
			"location": "Los Angeles, CA",
			"degree": "G.E.D.",
			"majors": "N/A",
			"dates": "1999",
			"url": "https://www.chspe.net/"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Developer",
			"school": "Udacity",
			"dates": "In progress",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title": "Intro to Programming",
			"school": "Udacity",
			"dates": "March 2016 - April 2016",
			"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
		},
		{
			"title": "CCNA 2016 200-120 Video Boot Camp",
			"school": "Udemy",
			"dates": "March 2016",
			"url": "https://www.udemy.com/ccna-on-demand-video-boot-camp/learn/v4/overview"
		}
	],
	"display": function displayFunc(){

	}
};

var work = {
	"jobs": [
		{
			"employer": "Protek IT Solutions",
			"title": "IT Technician",
			"location": "Simi Valley, CA",
			"dates": "April 2015 - Present",
			"description": "System Administration, General Troubleshooting, IT Consulting."
		},
		{
			"employer": "Atlantis IT Professionals",
			"title": "President",
			"location": "Los Angeles, CA",
			"dates": "March 2016 - Present",
			"description": "Startup company focusing on small business web development and business software."
		},
		{
			"employer": "DeSyria",
			"title": "President",
			"location": "Los Angeles, CA",
			"dates": "May 2013 - Present",
			"description": "Startup company developing a game franchise for future release on mobile, Windows and Linux PCs."
		},
		{
			"employer": "Self Employed",
			"title": "Self",
			"location": "Los Angeles, CA",
			"dates": "2005 - Present",
			"description": "Freelance computer assistance for individuals and small companies. Workstation setup, web design, server setup and maintenance."
		},
	],
	"display": function displayWork(){
		for(i in work.jobs){
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
		}
	}
};

var projects = {
	"projects": [
		{
			"title": "PremierFinishing.us",
			"dates": "June 2016 - Present",
			"description": "Bootstrap site for St. Louis painting and restoration company.",
			"images": [
				"https://i.imgsafe.org/5edfaf3794.jpg"
			]
		},
		{
			"title": "SweetHartTreats.com",
			"dates": "May 2016 - Present",
			"description": "Website for a local bakery.",
			"images": [
				"https://i.imgsafe.org/5ed8d8cd97.png"
			]
		},
		{
			"title": "AtlantisITProfessionals.com",
			"dates": "June 2016 - Present",
			"description": "Homepage for my own small business.",
			"images": [
				"https://i.imgsafe.org/5ed8c01d7b.png"
			]
		}
	],
	"display": function displayFunc(){

	}
};

// Takes locations of all jobs and puts them in an array
function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}

console.log(locationizer(work));

//International version of my name
function inName(full_name) {
	full_name = full_name.trim().split(' ');
	full_name[1] = full_name[1].toUpperCase();
	full_name[0] = full_name[0].slice(0,1).toUpperCase() +
		full_name[0].slice(1).toLowerCase();
	return full_name[0] +' '+full_name[1];
};
$("#main").append(internationalizeButton);
//inName(bio.name);

// I have no idea why this is needed for this project
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});


work.display();
bio.display();