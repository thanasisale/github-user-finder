class GitHub {
    constructor() {
        this.client_id = 'e31304c254ac95e75d4e';
        this.client_secret = '5d39c38e3b035632cf02407a88d85c3c355c7da0';
        this.repos_count = 5;
        this.repos_short = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&short=${this.repos_short}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}