var toggleSkillsButton = document.getElementById('toggleSkills') as HTMLButtonElement;
var skillsSection = document.getElementById('skills') as HTMLElement;

toggleSkillsButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
}
});