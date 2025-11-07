// Function to get greeting based on time of day
function getGreeting() {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 12) {
        return "Good Morning! ☀️";
    } else if (hour >= 12 && hour < 17) {
        return "Good Afternoon! 🌤️";
    } else if (hour >= 17 && hour < 21) {
        return "Good Evening! 🌆";
    } else {
        return "Good Night! 🌙";
    }
}

// Function to format the current date
function getFormattedDate() {
    const date = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

// Update the page content
function updateContent() {
    const greetingElement = document.getElementById('greeting');
    const dateElement = document.getElementById('date');
    
    if (greetingElement) {
        greetingElement.textContent = getGreeting();
    }
    
    if (dateElement) {
        dateElement.textContent = getFormattedDate();
    }
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', updateContent);

// Update every minute to keep the greeting accurate
setInterval(updateContent, 60000);

// Function to change background color to yellow
function changeBackgroundToYellow() {
    document.body.style.background = '#ffd700';
    document.body.style.backgroundSize = '100% 100%';
    document.body.style.animation = 'none';
}

// Add event listener to the button
document.addEventListener('DOMContentLoaded', function() {
    const bgButton = document.getElementById('bgButton');
    if (bgButton) {
        bgButton.addEventListener('click', changeBackgroundToYellow);
    }
});

