# Covid Warrior Game

Covid Warrior is a simple browser-based arcade game where you play as a vaccine defender, stopping viruses from reaching the end of their tracks. The game is built using HTML, CSS, and JavaScript, and features custom graphics and sound effects.

## Game Description
- **Objective:** Defend against incoming viruses by moving the vaccine defender left and right. Score points by intercepting viruses before they reach the end. Try to maximize your win ratio!
- **Theme:** The game is themed around the fight against COVID-19, with virus and vaccine imagery.

## How to Play
1. **Start the Game:**
   - Open `index.html` in your web browser.
   - Press any key to start the game.
2. **Controls:**
   - Use the **Left Arrow** (`←`) and **Right Arrow** (`→`) keys to move the vaccine defender between the three tracks.
3. **Gameplay:**
   - Viruses will appear at the top and move down each track.
   - Position the defender to intercept viruses. If a virus reaches the bottom on the same track as the defender, you score a point.
   - If a virus reaches the bottom on a different track, you lose a point.
   - The game displays your **Score**, **Lost** (missed viruses), and **Win Ratio**.
4. **Audio:**
   - The game features background music and sound effects for actions like intercepting viruses and missing them.

## Features
- Simple and intuitive controls.
- Animated virus movement and defender.
- Real-time score, lost count, and win ratio display.
- Custom background, images, and sound effects.

## Project Structure
```
index.html           # Main HTML file
css/
  index.css          # Game styles
img/
  bg.jpg             # Background image
  covid.png          # Virus image
  warriors/
    men.jpg          # (Unused, for future expansion)
    women.jpg        # (Unused, for future expansion)
js/
  index.js           # Game logic
music/
  click.wav          # Sound for defender movement
  hit.wav            # Sound for missed virus
  lose.wav           # (Unused, for future expansion)
  music.wav          # (Unused, for future expansion)
  music2.mp3         # Background music
  treasure.wav       # Sound for intercepting virus
```

## Setup & Running
1. **Requirements:**
   - Any modern web browser (Chrome, Firefox, Edge, etc.)
   - No installation required.
2. **Steps:**
   - Download or clone the repository.
   - Open `index.html` in your browser.
   - Enjoy the game!

## Customization
- You can replace images in the `img/` folder or sounds in the `music/` folder to personalize the game.
- Modify `js/index.js` to tweak game speed, scoring, or add new features.

## Credits
- Game developed by aadvikswaraj.
- Images and sounds are included for educational/demo purposes. Replace with your own assets for production use.

## License
This project is for educational and personal use. Please credit the author if you share or modify the game.
