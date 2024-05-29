# Spellbee
Practice spelling words or compete against other players to reach the top of the leaderboard for the most spelled words.

### Directions
- Navigate to practice nav link to spell words without score tracking
  - Practice with a set of 10 provided words
- Navigate to play nav link to challenge yourself with random words

Good luck!

### Tools/Libraries/Frameworks Used
- React
- Google Text-to-Speech API  
- RapidAPI provided words API with random words endpoint
- Custom API that provides a list of words to practice

This application also has a WordAPI associated with it built using Node.js and Express: [WordAPI](https://github.com/krzasa/unit3-spellingbee-backend)

### Planned Features
- Leaderboard
- Implementing backend JWT authentication/login

### Insights
- Functions that will be used multiple times should be scoped globally 
  - Always call functions in useEffect rather than defining functions within the useEffect scope
- Always test for edge cases
  - Utilize console logging to see if you're receiving the appopriate data
- Always focus on having readable and easy to follow variable names