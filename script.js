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
        document.getElementById('music').style.display = 'none'; // Hide the music app icon
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
        document.getElementById('music').style.display = 'block'; // Display the music app icon
        document.getElementById('notes_content').style.display = 'none';

        // Delay to allow the slide-down animation to take effect before reverting
        setTimeout(function() {
            document.getElementById('notes').style.opacity = '1'; // Show the notes app icon
            document.getElementById('notes_content').style.transform = 'translateY(0)';
        }, 500);
    });
});

// MUSIC APP!!!!!!! //

// MUSIC APP!!!!!!! //

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for clicking on the music app icon
    document.getElementById('music').addEventListener('click', function() {
        // Slide up the music content and fade in
        document.getElementById('music_content').style.opacity = '0';
        document.getElementById('music_content').style.transform = 'translateY(50px)';
        document.getElementById('music_content').style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Turn screen white and display music content, hide music icon
        document.querySelector('.screen').style.transition = 'background-color 0.5s ease';
        document.querySelector('.phone').style.transition = 'background-color 0.5s ease';
        document.querySelector('.keyboard').style.transition = 'background-color 0.5s ease';
        
        document.querySelector('.screen').style.backgroundColor = '#222';
        document.querySelector('.phone').style.backgroundColor = '#222';
        document.querySelector('.keyboard').style.backgroundColor = '#222';
        document.getElementById('music_content').classList.remove('hidden');
        document.getElementById('back_button').style.display = 'block'; // Display the back button
        document.getElementById('notes').style.display = 'none'; // Hide the notes app icon
        document.getElementById('music').style.display = 'none'; // Hide the music app icon
        document.getElementById('music_content').style.display = 'block';
        // Delay to allow the slide-up animation to take effect before fading in
        setTimeout(function() {
            document.getElementById('music_content').style.opacity = '1';
            document.getElementById('music_content').style.transform = 'translateY(0)';
        }, 100);

         // Apply animation to show the music content
         setTimeout(function() {
            document.getElementById('music_content').style.opacity = '1';
            document.getElementById('music_content').style.transform = 'translateY(0)';
        }, 100);

        // Show the play/pause button when entering the Music app
        document.getElementById('play-pause-button').style.display = 'block';

        // Show the forward and back buttons when entering the Music app
        document.getElementById('forward-button').style.display = 'block';
        document.getElementById('back-button').style.display = 'block';
    });

    // Add event listener for clicking on the back button
    document.getElementById('back_button').addEventListener('click', function() {
        // Slide down the music content and fade out
        document.getElementById('music_content').style.opacity = '0';
        document.getElementById('music_content').style.transform = 'translateY(50px)';
        document.getElementById('music_content').style.transition = 'opacity 0.5s ease, transform 0.5s ease';


        // Turn screen back to default color, hide music content, display music app icon
        document.querySelector('.screen').style.transition = 'background-color 0.5s ease';
        document.querySelector('.phone').style.transition = 'background-color 0.5s ease';
        document.querySelector('.keyboard').style.transition = 'background-color 0.5s ease';
        
        document.querySelector('.screen').style.backgroundColor = '#111';
        document.querySelector('.phone').style.backgroundColor = '#111';
        document.querySelector('.keyboard').style.backgroundColor = '#111';
        document.getElementById('music_content').classList.add('hidden');
        document.getElementById('back_button').style.display = 'none'; // Hide the back button
        document.getElementById('notes').style.display = 'block'; // Display the notes app icon
        document.getElementById('music_content').style.display = 'none';

        // Hide the play/pause button when exiting the Music app
        document.getElementById('play-pause-button').style.display = 'none';
        
        // Hide the forward and back buttons when exiting the Music app
        document.getElementById('forward-button').style.display = 'none';
        document.getElementById('back-button').style.display = 'none';

        // Delay to allow the slide-down animation to take effect before reverting
        setTimeout(function() {
            document.getElementById('music').style.opacity = '1'; // Show the music app icon
            document.getElementById('music_content').style.transform = 'translateY(0)';
        }, 500);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('myAudio');
    const playPauseButton = document.getElementById('play-pause-button');
    const forwardButton = document.getElementById('forward-button');
    const backButton = document.getElementById('back-button');
    const songNameElement = document.getElementById('song-name'); // Add this line
    let currentSongIndex = 0;
    const playlist = [
        'ffx1.mp3',
        'How Do You Like Me There.wav',
    ];
    const songs = [
        'FFX1',
        'How Do You Like Me There?',
    ];

    function updateSongName() {
        songNameElement.textContent = songs[currentSongIndex];
    }

    playPauseButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playPauseButton.classList.add('rotate-animation'); // Add rotation animation class
        } else {
            audio.pause();
            playPauseButton.classList.remove('rotate-animation'); // Remove rotation animation class
            playPauseButton.classList.add('rotate-animation-reverse'); // Add reverse rotation animation class
            // Remove the reverse rotation animation class after the animation ends
            playPauseButton.addEventListener('animationend', function() {
                playPauseButton.classList.remove('rotate-animation-reverse');
            }, { once: true });
        }
    });

    forwardButton.addEventListener('click', function() {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        audio.src = playlist[currentSongIndex];
        audio.play();
        updateSongName(); // Update song name when skipping forward
    });

    backButton.addEventListener('click', function() {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        audio.src = playlist[currentSongIndex];
        audio.play();
        updateSongName(); // Update song name when skipping backward
    });

    updateSongName(); // Initial song name display
});




// MUSIC MUSIC MSUIC //