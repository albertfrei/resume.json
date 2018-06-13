function displayContact(resume) {
    var contactStr = '<h1>'+ resume.contact.name + '<br></h1><p>' + resume.contact.email + ' &#9646; ' + resume.contact.phone + '<br></p><hr>';
    $('#contact').html(contactStr);
}

function displayJobs(resume) {
    var jobs = resume.jobs;
    var jobsStr = '';
    for(job of jobs) {
        jobsStr += '<p><strong>' + job.position + ',</strong> ' + job.company + ', ' + job.location.city + ', ' + job.location.state + '. ' + job.date.beginningMonth 
            + ' ' + job.date.beginningYear + ' to ' + job.date.endingMonth + ' ' + job.date.endingYear + '. <br></p><ul>';
        for(duty of job.duties) {
            jobsStr += '<li>' + duty + '</li>';
        }
        jobsStr += '</ul>';
    }
    jobsStr += '<br>';
    $('#experienceSection').html(jobsStr);
}

function displaySchools(resume) {
    var schools = resume.schools;
    var schoolsStr = '';
    for(school of schools) {
        schoolsStr += '<p><strong>' + school.schoolName + ',</strong> ' + school.schoolLocation.city + ', ' + school.schoolLocation.state + '. ' 
            + school.date.beginningYear + ' to ' + school.date.endingYear + '. ' + school.major + ' Major.<br></p><ul><li>' + school.details + '</li></ul>';
    }
    schoolsStr += '<br>';
    $('#educationSection').html(schoolsStr);
}

function displaySkills(resume) {
    var languages = resume.skills.languages
    var skillsStr = '<p><strong>Languages</strong></p><ul>';
    for(language of languages) {
        skillsStr += '<li>' + language + '</li>';
    }
    skillsStr += '</ul><br>';
    $('#skillsSection').html(skillsStr);
}
var HIDE = 'none';
var resume;

$(document).ready(function() {
    $.getJSON('resume.json', function(data){
        resume = data;
        displayFromJSON(resume);
    })
    function displayFromJSON(resume) {
        displayContact(resume);
        displayJobs(resume);
        displaySchools(resume);
        displaySkills(resume);
    }
    $('#education').click(function() {
        if($('#educationSection').css('display') == HIDE) {
            $('#educationSection').show();
        }
        else {
            $('#educationSection').hide();
        }
    });

    $('#skills').click(function() {
        if($('#skillsSection').css('display') == HIDE) {
            $('#skillsSection').show()
        }
        else {
            $('#skillsSection').hide();
        }
    });
    
    $('#experience').click(function() {
        if($('#experienceSection').css('display') == HIDE) {
            $('#experienceSection').show();
        }
        else {
            $('#experienceSection').hide();
        }
    });
});

