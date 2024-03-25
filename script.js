// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for clicking on the notes app icon
    document.getElementById('notes').addEventListener('click', function() {

        // Slide up the notes content and fade in
        document.getElementById('notes_content').style.opacity = '0';
        document.getElementById('notes_content').style.transform = 'translateY(50px)';
        document.getElementById('notes_content').style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Turn screen white and display notes content, hide notes icon
        document.querySelector('.screen').style.transition = 'background-color 0.5s ease';
        document.querySelector('.phone').style.transition = 'background-color 0.5s ease';
        document.querySelector('.keyboard').style.transition = 'background-color 0.5s ease';
        
        document.querySelector('.screen').style.backgroundColor = '#FFF';
        document.querySelector('.phone').style.backgroundColor = '#FFF';
        document.querySelector('.keyboard').style.backgroundColor = '#FFF';
        document.getElementById('notes_content').classList.remove('hidden');
        document.getElementById('back_button').style.display = 'block'; // Display the back button
        document.getElementById('notes').style.display = 'none'; // Hide the notes app icon
        document.getElementById('notes_content').style.display = 'block';

        // Delay to allow the slide-up animation to take effect before fading in
        setTimeout(function() {
            document.getElementById('notes_content').style.opacity = '1';
            document.getElementById('notes_content').style.transform = 'translateY(0)';
        }, 100);
    });

    // Add event listener for clicking on the back button
    document.getElementById('back_button').addEventListener('click', function() {
        // Slide down the notes content and fade out
        document.getElementById('notes_content').style.opacity = '0';
        document.getElementById('notes_content').style.transform = 'translateY(50px)';
        document.getElementById('notes_content').style.transition = 'opacity 0.5s ease, transform 0.5s ease';


        // Turn screen back to default color, hide notes content, display notes app icon
        document.querySelector('.screen').style.transition = 'background-color 0.5s ease';
        document.querySelector('.phone').style.transition = 'background-color 0.5s ease';
        document.querySelector('.keyboard').style.transition = 'background-color 0.5s ease';
        
        document.querySelector('.screen').style.backgroundColor = '#111';
        document.querySelector('.phone').style.backgroundColor = '#111';
        document.querySelector('.keyboard').style.backgroundColor = '#111';
        document.getElementById('notes_content').classList.add('hidden');
        document.getElementById('back_button').style.display = 'none'; // Hide the back button
        document.getElementById('notes').style.display = 'block'; // Display the notes app icon
        document.getElementById('notes_content').style.display = 'none';

        // Delay to allow the slide-down animation to take effect before reverting
        setTimeout(function() {
            document.getElementById('notes').style.opacity = '1'; // Show the notes app icon
            document.getElementById('notes_content').style.transform = 'translateY(0)';
        }, 500);
    });
});

