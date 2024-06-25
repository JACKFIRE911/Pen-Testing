// Prompt the user for a URL
const userURL = prompt('Enter a URL:');

// Validate the input (optional)
if (userURL) {
    // Open the URL in the same window
    window.location.href = userURL;
} else {
    alert('Invalid URL or no input provided.');
}
