//Init GitHub
const github = new GitHub;

// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get Input text
    const userText = e.target.value;

    if(userText != '') {
        // Make HTTP call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    // Show Alert
                    ui.showAlert('User Not Found', 'alert alert-danger')
                } else {
                    // Show Profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // Clear Profile
        ui.clearProfile();
    }
});