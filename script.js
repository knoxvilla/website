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
        document.getElementById('video').style.display = 'none'; // Hide the video app icon
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
        document.getElementById('video').style.display = 'block'; // Display the video app icon
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
        document.getElementById('video').style.display = 'none'; // Hide the video app icon
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
        document.getElementById('video').style.display = 'block'; // Display the video app icon
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





// WELCOME SCREEN //

// Get the welcome screen element
const enterButton = document.getElementById("enter-button");
const welcomeScreen = document.getElementById("welcome-screen");

enterButton.addEventListener("click", function() {
  welcomeScreen.classList.add("fade-out"); // Add a class for animation

  // Wait for the animation to finish before removal (optional)
  welcomeScreen.addEventListener("transitionend", function() {
    welcomeScreen.remove(); // Remove the element after animation
  });
});


// WELCOME SCREEN //





//MT//


  // Flag for maintenance mode
  let isInMaintenanceMode = true; // Change to 'false' for normal operation

  // Get the necessary elements
  const passcodeInput = document.getElementById("passcode-input"); // Assuming this element exists

  // Define the correct passcode (replace with your desired code)
  const correctPasscode = "4541";

  // Function to handle successful passcode entry
  function handleCorrectPasscode() {
    welcomeScreen.classList.add("fade-out"); // Add class for animation
    welcomeScreen.addEventListener("transitionend", function() {
      welcomeScreen.remove(); // Remove the element after animation
    });
  }

  // Function to handle incorrect passcode entry
  function handleIncorrectPasscode() {
    passcodeInput.value = ""; // Clear the input after incorrect attempt
    passcodeInput.style.animation = "shake 0.5s ease-in-out"; // Add shake animation
    setTimeout(function() {
      passcodeInput.style.animation = ""; // Remove animation after shake
    }, 500);
  }

  // Update enter button and passcode input state based on maintenance mode
  if (isInMaintenanceMode) {
    enterButton.disabled = true; // Disable button in maintenance mode
    passcodeInput.disabled = false; // Enable passcode input
    passcodeInput.style.display = "block"; // Show passcode input
    enterButton.style.display = "none"; // Hide enter button
    document.body.classList.add("has-background-image");
  } else {
    enterButton.disabled = false; // Enable button in normal mode
    passcodeInput.disabled = true; // Disable passcode input
    passcodeInput.style.display = "none"; // Hide passcode input
    enterButton.style.display = "block"; // Show enter button
    document.body.classList.remove("has-background-image");
  }

  // Check passcode on enter key press (only if in maintenance mode)
  passcodeInput.addEventListener("keypress", function(event) {
    if (isInMaintenanceMode && event.key === "Enter") {
      const enteredPasscode = passcodeInput.value;
      if (enteredPasscode === correctPasscode) {
        handleCorrectPasscode();
      } else {
        handleIncorrectPasscode();
      }
    }
  });

//MT//

//VIDEO CLICK//

// Select the video app element
const videoApp = document.getElementById('video');

// Select the phone element
const phone = document.querySelector('.phone');

// Attach a click event listener to the video app
videoApp.addEventListener('click', function() {
    // Rotate the phone by adding the rotate class
    phone.classList.add('rotate');
});

videoApp.addEventListener('click', function() {
  // Enlarge the phone after a delay
  setTimeout(function() {
      phone.classList.toggle('enlarge');
  }, 1000); // Adjust the delay as needed
});
//VIDEO CLICK//

//VIDEO VIDEO//

// Function to show the video back button
function showVideoBackButton() {
  document.getElementById('video_back_button').classList.remove('hidden');
}

// Function to hide the video back button
function hideVideoBackButton() {
  document.getElementById('video_back_button').classList.add('hidden');
}

// Function to hide the video content
function hideVideoContent() {
  document.getElementById('video_content').classList.add('hidden');
}

// Function to apply the reverse scale down animation to the phone
function scaleDownPhone() {
  // Apply the scale down animation to the phone
  document.querySelector('.phone').style.animation = 'scaleDown 1s forwards';
}

// Function to apply the reverse rotate back animation to the phone
function rotateBackPhone() {
  // Apply the rotate back animation to the phone
  document.querySelector('.phone').style.animation = 'rotateBack 1s forwards';
}

// Function to reset phone element styles and remove reverse animation classes
function resetPhoneStyles() {
  const phone = document.querySelector('.phone');
  phone.style.animation = ''; // Remove inline animation style
  phone.classList.remove('scaleDown', 'rotateBack'); // Remove reverse animation classes
}

// Event listener for clicking on the video app icon
document.getElementById('video').addEventListener('click', function() {
  // Reset phone element styles
  resetPhoneStyles();

  // Hide the screen and notch
  document.querySelector('.screen').style.display = 'none';
  document.querySelector('.notch').style.display = 'none';

  // Show the video content
  document.getElementById('video_content').classList.remove('hidden');
  document.getElementById('video_content').classList.add('rotate');
  document.getElementById('notes').style.display = 'none'; // Hide the notes app icon
  document.getElementById('music').style.display = 'none'; // Hide the music app icon
  document.getElementById('video').style.display = 'none'; // Hide the video app icon
  
  // Show the video back button
  showVideoBackButton();
});

// Event listener for clicking on the back button
document.getElementById('video_back_button').addEventListener('click', function() {
  // Hide the video content and show the app icons
  document.getElementById('video_content').classList.add('hidden');
  document.getElementById('notes').style.display = 'block'; // Display the notes app icon
  document.getElementById('music').style.display = 'block'; // Display the music app icon
  document.getElementById('video').style.display = 'block'; // Display the video app icon
  document.querySelector('.notch').style.display = 'block';
  document.querySelector('.screen').style.display = 'block';

  // Hide the video content
  hideVideoContent();
  
  // Apply the reverse animations to the phone
  scaleDownPhone();
  setTimeout(rotateBackPhone, 1000); // Adjust the delay as needed to match the duration of the scale down animation
});

// Event listener to trigger showing the video back button
document.getElementById('video').addEventListener('click', function() {
  // Reset phone element styles
  resetPhoneStyles();

  // Hide the screen and notch
  document.querySelector('.screen').style.display = 'none';
  document.querySelector('.notch').style.display = 'none';

  // Show the video back button
  showVideoBackButton();
});



// Event listener for clicking on the video app icon
document.getElementById('video').addEventListener('click', function() {

  document.getElementById('video_back_button').style.display = 'block';

  document.querySelector('.phone').classList.add('fade-to-black');


  // Show the video content with opacity animation after a delay
  setTimeout(function() {
    document.getElementById('video_content').style.transition = 'opacity 1s'; // Apply transition
    document.getElementById('video_content').style.opacity = '1'; // Set opacity to 1
  }, 1000); // Adjust the delay as needed

  // Reset the video content visibility and opacity
  document.getElementById('video_content').style.display = 'block';
  document.getElementById('video_content').style.opacity = '0'; // Set initial opacity to 0

});


// Event listener for clicking the back button
document.getElementById('video_back_button').addEventListener('click', function() {

  document.getElementById('video_back_button').style.display = 'none';

  // Fade out the video content smoothly
  document.getElementById('video_content').style.transition = 'opacity 1s'; // Apply transition
  document.getElementById('video_content').style.opacity = '0'; // Set opacity to 0

  // Hide the video content after the fade out animation completes
  setTimeout(function() {
    document.getElementById('video_content').style.display = 'none';
  }, 1000); // Adjust the delay as needed to match the duration of the fade out animation

  // Remove the fade to black from the phone after the fade out animation completes
  setTimeout(function() {
    document.querySelector('.phone').classList.remove('fade-to-black');
    
  }, 1000)

  // Turn off the screen and notch after a delay
  setTimeout(function() {
    document.querySelector('.notch').style.display = 'none';
    document.querySelector('.screen').style.display = 'none';
  }, 0); // Adjust the delay as needed to match the duration of the fade out animation

  // Turn on the screen and notch after a delay
  setTimeout(function() {
    document.querySelector('.notch').style.display = 'block';
    document.querySelector('.screen').style.display = 'block';

  }, 2000); // Adjust the delay as needed to match the duration of the fade out animation + additional delay
});




// Function to reset the interface after animation
function resetInterface() {
  // Remove animation classes from the phone
  document.querySelector('.phone').classList.remove('rotate', 'enlarge', 'scaleDown', 'rotateBack');

  // Show the screen and notch
  document.querySelector('.screen').style.display = 'block';
  document.querySelector('.notch').style.display = 'block';

  // Hide the video content
  document.getElementById('video_content').classList.add('hidden');
}

// Event listener for animation end to reset interface
document.querySelector('.phone').addEventListener('animationend', function(event) {
  // Check if the animation ended is rotateBack
  if (event.animationName === 'rotateBack') {
    // Reset the interface
    resetInterface();
  }
});






//VIDEO VIDEO//