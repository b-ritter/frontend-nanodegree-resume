
var bio = {
  "name": "Benjamin Ritter",
  "role": "Front-end Developer",
  "biopic": "http://dev.benjaminritter.com/_images/br_portrait.jpg",
  "welcomeMessage": "I develop websites.",
  "contacts": {
    "mobile": "(213) 555 - 5785",
    "twitter": "@benjam1nr",
    "email": "ben@benjaminritter.com",
    "github": "github.com/b-ritter",
    "location": "Los Angeles, CA"
  },
  "skills": ["JavaScript", "HTML/CSS", "Adobe Creative Suite", "Rhino", "Maya"],
  display: function() {
    var formattedName = HTMLheaderName.replace('%data%', this.name);
    var formattedRole = HTMLheaderRole.replace('%data%', this.role);
    var formattedContacts = '';
    var header = $('#header');
    for (var contact in this.contacts) {
      formattedContacts = HTMLcontactGeneric.replace('%contact%', contact);
      formattedContacts = formattedContacts.replace('%data%', this.contacts[contact]);
      header.find('#topContacts').add('#footerContacts').append(formattedContacts);
    }
    header.prepend(formattedName, formattedRole);
    var formattedBioPic = HTMLbioPic.replace('%data%', this.biopic);
    header.find('#portrait').html(formattedBioPic);
    header.find('#skills-container').append(HTMLskillsStart);
    for (var i = 0; i < this.skills.length; i++) {
      var formattedSkill = HTMLskills.replace('%data%', this.skills[i]);
      $('#skills').append(formattedSkill).addClass('skills-box');
    }
  }
};

var work = {
  "jobs": [{
    "employer": "Self",
    "location": "Brooklyn, NY",
    "dates": "2006 - Present",
    "title": "Freelance Designer/Developer",
    "description": "Book design, web design and development, 3d rendering and animation."
  }, {
    "employer": "New York City College of Technology",
    "location": "Brooklyn, NY",
    "dates": "2007 - 2009",
    "endDate": "2015",
    "title": "Adjunct Lecturer",
    "description": "Developed curriculum and taught Advanced HTML/CSS, Interactive Animation and Print Production classes."
  }, {
    "employer": "Asymptote Architecture",
    "location": "New York, NY",
    "dates": "2007 - 2009",
    "title": "Graphic Designer",
    "description": "Designed and developed branded materials across print, web and video platforms."
  }, {
    "employer": "Mackler+",
    "location": "New York, NY",
    "dates": "2007",
    "title": "Designer",
    "description": "Designed and developed print and web graphics and assisted with business administration."
  }, {
    "employer": "UCSB",
    "location": "Santa Barbara, CA",
    "dates": "2005 - 2006",
    "title": "Lecturer",
    "description": "Taught sculpture and developed curriculum for advanced undergraduate seminars as part of" +
      "a post-graduate fellowship."
  }],
  display: function() {
    for (var job in this.jobs) {
      $('#workExperience').append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace('%data%', this.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace('%data%', this.jobs[job].title);
      var formattedDates = HTMLworkDates.replace('%data%', this.jobs[job].dates);
      var formattedLocation = HTMLworkLocation.replace('%data%', this.jobs[job].location);
      var formattedDescription = HTMLworkDescription.replace('%data%', this.jobs[job].description);
      $('.work-entry:last').append(
        formattedEmployer+
        formattedTitle+
        formattedDates+
        formattedLocation+
        formattedDescription
      );
    }
  }
};

var education = {
  "schools": [{
    "name": "University of California, Santa Barbara",
    "location": "Santa Barbara, CA",
    "degree": "BA",
    "dates": "2002",
    "majors": ["Art"],
    "url": "http://www.arts.ucsb.edu/"
  }, {
    "name": "University of California, Santa Barbara",
    "location": "Santa Barbara, CA",
    "degree": "MFA",
    "dates": "2005",
    "majors": ["Art"],
    "url": "http://www.arts.ucsb.edu/"
  }],
  "onlineCourses": [{
    "school": "Udacity",
    "title": "Front-end Developer Nanodegree",
    "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
    "dates": "2015 — 2016"
  }, {
    "school": "edX",
    "title": "Introduction to Computer Science and Programming",
    "url": "https://s3.amazonaws.com/verify.edx.org/downloads/1de7b7f0354f45c584c0ca5303aa92aa/Certificate.pdf",
    "dates": "2012"
  }, {
    "school": "Stanford Online",
    "title": "Computer Science 101",
    "url": "https://verify.class.stanford.edu/SOA/06ad567ec3bb44d4978eb45770c0ccf0",
    "dates": "2014"
  }, {
    "school": "Stanford Online",
    "title": "How to Learn Math: For Students",
    "url": "https://verify.class.stanford.edu/SOA/9b173c13ee7d4e17bf8f1f933ed7b02b",
    "dates": "2014"
  }],
  display: function() {
    var education = $('#education');
    for(var school in this.schools ){
      education.append(HTMLschoolStart);
      var formattedSchool = HTMLschoolName.replace('%data%',this.schools[school].name);
      formattedSchool = formattedSchool.replace('#',this.schools[school].url);
      var formattedDegree = HTMLschoolDegree.replace('%data%',this.schools[school].degree);
      var formattedDates = HTMLschoolDates.replace('%data%',this.schools[school].dates);
      var formattedLocation = HTMLschoolLocation.replace('%data%',this.schools[school].location);
      var formattedMajors = '';
      this.schools[school].majors.forEach(function(m){
        formattedMajors += HTMLschoolMajor.replace('%data%',m);
      });
      $('.education-entry:last').append(
        formattedSchool+
        formattedDegree+
        formattedDates+
        formattedMajors+
        formattedLocation
      );
    }
    education.append(HTMLonlineClasses);
    for(var course in this.onlineCourses){
      education.append(HTMLschoolStart);
      var formattedOnlineCourse = HTMLonlineTitle.replace('%data%',this.onlineCourses[course].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace('%data%',this.onlineCourses[course].school);
      var formattedOnlineDates = HTMLonlineDates.replace('%data%',this.onlineCourses[course].dates);
      var formattedOnlineURL = HTMLonlineURL.replace('%data%',this.onlineCourses[course].url);
      $('.education-entry:last').append(
        formattedOnlineCourse+
        formattedOnlineSchool+
        formattedOnlineDates+
        formattedOnlineURL
      );
    }
  }
};

var projects = {
  "projects": [{
    "title": "MillNYC",
    "dates": "2014",
    "location": "Brooklyn, NY",
    "description": "Founded and developed curriculum for a digital fabrication workshop.",
    "images": ["http://dev.benjaminritter.com/images/mill-nyc-sm-1x.png"]
  }, {
    "title": "Now Hunters Point",
    "dates": "2015",
    "location": "Brooklyn, NY",
    "description": "Developed the website for nowhunterspoint.org.",
    "images": ["http://dev.benjaminritter.com/images/now-hunters_point-sm-1x.png"]
  }, {
    "title": "JFK Descendancy Chart",
    "dates": "2014",
    "location": "New York, NY",
    "description": "Designed and developed an interactive mobile presentation for a private client.",
    "images": ["http://dev.benjaminritter.com/images/family-tree-sm-1x.png"]
  }, {
    "title": "Alchemy Paintworks",
    "dates": "2010",
    "location": "New York, NY",
    "description": "Designed and developed website for fine art finishing company.",
    "images": ["http://dev.benjaminritter.com/images/alchemy-sm-1x.jpg"]
  }],
  display: function() {
    for (var proj in this.projects) {
      $('#projects').append(HTMLprojectStart);
      var formattedTitle = $(HTMLprojectTitle.replace('%data%', this.projects[proj].title));
      var current_entry = $('.project-entry:last');
      current_entry.append(formattedTitle);
      var formattedDates = $(HTMLprojectDates.replace('%data%', this.projects[proj].dates));
      current_entry.append(formattedDates);
      var formattedDescription = $(HTMLprojectDescription.replace('%data%', this.projects[proj].description));
      current_entry.append(formattedDescription);
      if (this.projects[proj].images.length > 0) {
        for (var i = 0; i < this.projects[proj].images.length; i++) {
          var formattedProjectImage = $(HTMLprojectImage.replace('%data%', this.projects[proj].images[0]));
          current_entry.append(formattedProjectImage);
        }
      }
    }
  }
};

work.display();
projects.display();
bio.display();
education.display();

$('#mapDiv').append(googleMap);
