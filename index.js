document.addEventListener('DOMContentLoaded', function() {
    var originalProfileText = document.querySelector('.profile-text').innerHTML;

    var icons = document.querySelectorAll('.icon');
    var plansButton = document.getElementById('plans-button');
    var profileButton = document.getElementById('profile-button');

    icons.forEach(icon => {
        icon.addEventListener('click', function() {
            icons.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    plansButton.addEventListener('click', function() {
        var updateElement = document.querySelector('.profile-text');

        updateElement.classList.add('hidden');
        setTimeout(function() {
            updateElement.innerHTML = "<b>My plans</b><br>1. Learn JavaScript.<br>2. Learn HTML and CSS.<br>3. Learn Bootstrap, React.<br>4. Learn SQL, Databases, Python, Java, PHP.<br>5. Learn Git, other frameworks and libraries in languages.";
            updateElement.classList.remove('hidden');
        }, 300);
    });

    profileButton.addEventListener('click', function() {
        var updateElement = document.querySelector('.profile-text');

        updateElement.classList.add('hidden');
        setTimeout(function() {
            updateElement.innerHTML = originalProfileText;
            updateElement.classList.remove('hidden');
        }, 300);
    });
});
