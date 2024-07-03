document.addEventListener('DOMContentLoaded', () => {
    const profileTextElement = document.querySelector('.profile-text');
    const originalProfileText = profileTextElement.innerHTML;
    const icons = document.querySelectorAll('.icon');
    const plansButton = document.getElementById('plans-button');
    const profileButton = document.getElementById('profile-button');

    profileButton.classList.add('dimmed');

    const toggleActiveClass = (element) => {
        icons.forEach(icon => icon.classList.remove('active', 'dimmed'));
        element.classList.add('active');
        if (element === profileButton) {
            profileButton.classList.add('dimmed');
        } else {
            plansButton.classList.add('dimmed');
        }
    };

    icons.forEach(icon => {
        icon.addEventListener('click', function() {
            toggleActiveClass(this);
            if (this === plansButton) {
                updateProfileText("<b>My plans</b><br>1. Learn JavaScript.<br>2. Learn HTML and CSS.<br>3. Learn Bootstrap, React.<br>4. Learn SQL, Databases, Python, Java, PHP.<br>5. Learn Git, other frameworks and libraries in languages.");
            } else {
                updateProfileText(originalProfileText);
            }
        });
    });

    const updateProfileText = (text) => {
        profileTextElement.classList.add('hidden');
        setTimeout(() => {
            profileTextElement.innerHTML = text;
            profileTextElement.classList.remove('hidden');
        }, 300);
    };
});
