document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('run-button').addEventListener('click', function() {
        const code = document.getElementById('code-editor').value;
        const outputArea = document.getElementById('output-area');
        
        // Clear previous output
        outputArea.textContent = '';

        try {
            // Run the code and capture the output
            const result = eval(code);
            outputArea.textContent = result;
        } catch (error) {
            // Show error message if there's an error in the code
            outputArea.textContent = error;
        }
    });
});
