var summary = 'After nine years as a graphic design generalist in New York,'+
' I am relocating to Los Angeles to seek a full-time position in front-end web development.'+
' With a background in print, motion as well as web design and development, '+
'this career change is a rebalancing of my existing skill set. To this end I have '+
'been studying in the Udacity Front End Web Developer Nanodegree program, focusing '+
'on learning current industry standard production practices such as Git and GitHub, '+
'Sass, task running with node.js and object-oriented JavaScript. '+
'These new skills are highly complimentary to my advanced knowledge of '+
'digital imaging, responsive web design and jQuery.';

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
  "skills": ["JavaScript","HTML/CSS","Adobe Creative Suite","Rhino","Maya","Digital Fabrication"],
  display: function(){
    //locations.push(work_obj.jobs[job].location);
  }
};

var work = {
  "jobs": [
    {
      "employer": "Asymptote Architecture",
      "location": "New York, NY",
      "dates": "2007 - 2009",
      "title": "Graphic Designer",
      "description": "Designed and developed branded materials across print, web and video platforms."
    },
    {
      "employer": "New York City College of Technology",
      "location": "Brooklyn, NY",
      "dates": "2007 - 2009",
      "endDate": "2015",
      "title": "Adjunct Lecturer",
      "description": "Developed curriculum and taught Advanced HTML/CSS, Interactive Animation and Print Production classes."
    },
    {
      "employer": "Mackler+",
      "location": "New York, NY",
      "dates": "2007",
      "title": "Designer",
      "description": "Designed and developed print and web graphics and assisted with business administration."
    },
    {
      "employer": "Self",
      "dates": "2006 - Present",
      "title": "Freelance Designer/Developer",
      "description": "Book design, web design and development, 3d rendering and animation."
    },
    {
      "employer": "UCSB",
      "dates": "2005 - 2006",
      "title": "Lecturer",
      "description": "Taught sculpture and developed curriculum for advanced undergraduate seminars as part of"+
      "a post-graduate fellowship."
    }
  ],
  display: function(){}
};
var education = {
  "schools": [
    {
      "name": "UCSB",
      "location": "Santa Barbara, CA",
      "degree": "BA",
      "dates": "2002",
      "majors": ["Art"],
      "url": "http://www.arts.ucsb.edu/"
    },
    {
      "name": "UCSB",
      "location": "Santa Barbara, CA",
      "degree": "MFA",
      "dates": "2005",
      "majors": ["Art"],
      "url": "http://www.arts.ucsb.edu/"
    }
  ],
  "onlineCourses": [
    {
      "school": "Udacity",
      "title": "Front-end Developer Nanodegree",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
      "dates": "2015 — 2016"
    },
    {
      "school": "edX",
      "title": "Introduction to Computer Science and Programming",
      "url": "https://s3.amazonaws.com/verify.edx.org/downloads/1de7b7f0354f45c584c0ca5303aa92aa/Certificate.pdf",
      "dates": "2012"
    },
    {
      "school": "Stanford Online",
      "title": "Computer Science 101",
      "url": "https://verify.class.stanford.edu/SOA/06ad567ec3bb44d4978eb45770c0ccf0",
      "dates": "2014"
    },
    {
      "school": "Stanford Online",
      "title": "How to Learn Math: For Students",
      "url": "https://verify.class.stanford.edu/SOA/9b173c13ee7d4e17bf8f1f933ed7b02b",
      "dates": "2014"
    }
  ],
  display: function(){}
};
var projects = {
  "projects": [
    {
      "title": "MillNYC",
      "dates": "2014",
      "location": "Brooklyn, NY",
      "description": "Founded and developed curriculum for a digital fabrication workshop.",
      "images": ["http://dev.benjaminritter.com/images/mill-nyc-sm-1x.png"]
    },
    {
      "title": "Now Hunters Point",
      "dates": "2015",
      "location": "Brooklyn, NY",
      "description": "Developed the website for nowhunterspoint.org.",
      "images": ["http://dev.benjaminritter.com/images/now-hunters_point-sm-1x.png"]
    },
    {
      "title": "JFK Descendancy Chart",
      "dates": "2014",
      "location": "New York, NY",
      "description": "Designed and developed an interactive mobile presentation for a private client.",
      "images": ["http://dev.benjaminritter.com/images/family-tree-sm-1x.png"]
    },
    {
      "title": "Alchemy Paintworks",
      "dates": "2010",
      "location": "New York, NY",
      "description": "Designed and developed website for fine art finishing company.",
      "images": ["http://dev.benjaminritter.com/images/alchemy-sm-1x.jpg"]
    }
  ],
  display: function(){
    for(var proj in this.projects){
      $('#projects').append(HTMLprojectStart);
      var formattedTitle = $(HTMLprojectTitle.replace('%data%',this.projects[proj].title));
      var current_entry = $('.project-entry:last');
      current_entry.append(formattedTitle);
      var formattedDates = $(HTMLprojectDates.replace('%data%',this.projects[proj].dates));
      current_entry.append(formattedDates);
      var formattedDescription = $(HTMLprojectDescription.replace('%data%',this.projects[proj].description));
      current_entry.append(formattedDescription);
      if(this.projects[proj].images.length > 0){
        for(var i = 0; i < this.projects[proj].images.length; i++ ){
          var formattedProjectImage = $(HTMLprojectImage.replace('%data%',this.projects[proj].images[0]));
          current_entry.append(formattedProjectImage);
        }
      }
    }
  }
};


projects.display();

$('#mapDiv').append(googleMap);
