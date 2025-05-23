# 🕹️ Endgame: Assembly

**Endgame: Assembly** is a Hangman-style word guessing game built with React. The theme centers around defending the programming world from the menace of Assembly — guess the word before all friendly languages are eliminated!

The site is live at (https://assembly-endgame-orpin.vercel.app/)

## 🚀 Features

- 🔤 Word guessing with visual feedback per letter
- 💀 Each wrong guess eliminates a friendly language
- 🎉 Confetti celebration on winning the game
- 🎨 Color-coded keyboard: 
  - 🟡 Not yet guessed
  - 🟢 Correct guess
  - 🔴 Incorrect guess
- ☠️ Animated skull for lost languages
- 🆕 New game button after game ends

## 🧠 How It Works

- A random word is selected from a predefined list
- You have 8 chances (based on number of programming languages listed) to guess the letters
- On each wrong guess, a language is "killed"
- Game ends when either the word is fully guessed or all attempts are used

## 🛠️ Tech Stack

- React (with Hooks)
- CSS Flexbox for layout
- `react-confetti` for celebration effect

## 📁 Project Structure

```
/src
  ├──components
    ├── Main.jsx            # Main game component
    ├── languages.js        # List of languages with styles
    ├── utils.js            # Utility function for farewell messages
    ├── words.js            # Word list generator
  └── index.css             # Global styles
  └── App.jsx
```

## 📦 Installation & Running Locally

1. Clone the repo

```bash
git clone https://github.com/yourusername/endgame-assembly.git
cd endgame-assembly
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

> You should see the game running at `http://localhost:5173`

## 📸 Screenshots

![Assembly Endgame Screenshot](./public/1.png)
![Game Won Screenshot](./public/2.png)
![Game Lose Screenshot](./public/3.png)

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- Inspired by the Scrimba's React tutorial
- Confetti effect via [react-confetti](https://www.npmjs.com/package/react-confetti)

---

## ✍️ Author

Made with ❤️ by [Devjeet Sahu](https://github.com/DevjeetSahu)
