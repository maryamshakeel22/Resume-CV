var toggleSkillsButton = document.getElementById('toggleSkills');
var skillsSection = document.getElementById('skills');
toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
