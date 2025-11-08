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

// Function to show hello greeting
function showHello() {
    alert("Hello! 👋\n\nNice to meet you!");
}

// Function to show goodbye message
function showGoodbye() {
    alert("Goodbye! 👋\n\nSee you later!");
}

// Function to interpolate between two colors
function interpolateColor(color1, color2, factor) {
    const result = color1.slice();
    for (let i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return result;
}

// Function to convert RGB array to CSS color string
function rgbToCss(rgb) {
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

// Function to update background color based on slider value
function updateBackgroundColor(value) {
    // Normalize value to 0-1 range
    const factor = value / 100;
    
    // Cool colors (blues, purples, cyans) - RGB values
    const coolColor1 = [102, 126, 234];  // #667eea
    const coolColor2 = [118, 75, 162];    // #764ba2
    const coolColor3 = [79, 172, 254];   // #4facfe
    const coolColor4 = [0, 242, 254];     // #00f2fe
    
    // Warm colors (reds, oranges, yellows) - RGB values
    const warmColor1 = [255, 107, 107];  // #ff6b6b
    const warmColor2 = [255, 159, 64];   // #ff9f40
    const warmColor3 = [255, 206, 84];   // #ffce54
    const warmColor4 = [255, 220, 0];    // #ffdc00
    
    // Interpolate between cool and warm colors
    const color1 = interpolateColor(coolColor1, warmColor1, factor);
    const color2 = interpolateColor(coolColor2, warmColor2, factor);
    const color3 = interpolateColor(coolColor3, warmColor3, factor);
    const color4 = interpolateColor(coolColor4, warmColor4, factor);
    
    // Create gradient string
    const gradient = `linear-gradient(135deg, ${rgbToCss(color1)} 0%, ${rgbToCss(color2)} 25%, ${rgbToCss(color3)} 50%, ${rgbToCss(color4)} 75%, ${rgbToCss(color1)} 100%)`;
    
    // Apply to body
    document.body.style.background = gradient;
    document.body.style.backgroundSize = '400% 400%';
    document.body.style.animation = 'none';
}

// Add event listeners to buttons
document.addEventListener('DOMContentLoaded', function() {
    const helloButton = document.getElementById('helloButton');
    const goodbyeButton = document.getElementById('goodbyeButton');
    const colorSlider = document.getElementById('colorSlider');
    
    if (helloButton) {
        helloButton.addEventListener('click', showHello);
    }
    
    if (goodbyeButton) {
        goodbyeButton.addEventListener('click', showGoodbye);
    }
    
    // Handle color slider
    if (colorSlider) {
        // Set initial background
        updateBackgroundColor(0);
        
        // Update on slider change
        colorSlider.addEventListener('input', function() {
            updateBackgroundColor(this.value);
        });
    }
});

