// Splash screen functionality
document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
        setTimeout(() => {
            splashScreen.style.opacity = '0';
            setTimeout(() => {
                splashScreen.style.display = 'none';
            }, 500);
        }, 1000); // Show for 1 second
    }
});

// Function to load publications from JSON
function loadPublications() {
    fetch('data/publications.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('publications-container');
            data.forEach(pub => {
                const card = `
                    <div class="card publication-card">
                        <div class="card-body">
                            <h5 class="card-title">${pub.title}</h5>
                            <p class="card-text"><strong>Authors:</strong> ${pub.authors.join(', ')}</p>
                            <p class="card-text"><strong>Publisher:</strong> ${pub.publisher}</p>
                            <a href="${pub.link}" class="btn btn-primary" target="_blank">View Publication</a>
                        </div>
                    </div>
                `;
                container.innerHTML += card;
            });
        })
        .catch(error => console.error('Error loading publications:', error));
}

// Function to load members from JSON
function loadMembers() {
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('members-container');
            data.forEach(member => {
                const card = `
                    <div class="card member-card text-center">
                        <div class="card-body">
                            <img src="${member.image}" alt="${member.name}" class="img-fluid mb-3">
                            <h5 class="card-title">${member.name}</h5>
                            <p class="card-text"><strong>Education:</strong> ${member.education}</p>
                            <p class="card-text"><strong>Email:</strong> <a href="mailto:${member.email}">${member.email}</a></p>
                            <p class="card-text"><strong>Research Interest:</strong> ${member.researchInterest}</p>
                            <a href="${member.portfolioLink}" class="btn btn-primary" target="_blank">Portfolio</a>
                        </div>
                    </div>
                `;
                container.innerHTML += card;
            });
        })
        .catch(error => console.error('Error loading members:', error));
}

// Load data on page load if containers exist
if (document.getElementById('publications-container')) {
    loadPublications();
}

if (document.getElementById('members-container')) {
    loadMembers();
}
