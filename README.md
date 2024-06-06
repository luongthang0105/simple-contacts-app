# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Deployed on Netlify
Link: https://luongthang-contacts-resonate.netlify.app/

# Instructions to run
- npm install
- npm run dev

# Assumptions
- This contact app is aimed to be used by businesses, as I have chosen to display their professional headshot, working email, websites, phone numbers, and social media.
- As for responsiveness, I assume the website works resonable on desktop.

# What I could have improved
- Responsiveness on mobile phones. Cards are already responsive but the search bar is still too large and navbar is too packed when the width is low (around < 500px).
- Hover effects on website links, email, and social media.
- The transition of cards when searching for contacts is a bit too rigid. It would be better if the filter transition is as smooth as the contact hover transition.
