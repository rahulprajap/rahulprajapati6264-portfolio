# My Portfolio - Modern React Portfolio Website

A beautiful, modern, and fully responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- ✨ **Modern UI/UX Design** - Clean, professional, and visually appealing interface
- 🌓 **Dark/Light Mode** - Toggle between dark and light themes with persistent storage
- 📱 **Fully Responsive** - Optimized for all screen sizes (mobile, tablet, desktop)
- 🎭 **Smooth Animations** - Powered by Framer Motion for engaging user experience
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🔍 **SEO Friendly** - Semantic HTML and proper meta tags

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Material Symbols** - Google's Material Design icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
my-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation bar with theme toggle
│   │   ├── Hero.jsx        # Hero section with introduction
│   │   ├── About.jsx       # About me section
│   │   ├── Services.jsx    # Services offered
│   │   ├── Projects.jsx    # Portfolio projects
│   │   ├── Contact.jsx     # Contact form and social links
│   │   └── Footer.jsx      # Footer component
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles and Tailwind imports
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## Customization

### Update Personal Information

1. **Header/Logo**: Edit `src/components/Header.jsx`
2. **Hero Section**: Update name, title, and description in `src/components/Hero.jsx`
3. **About Section**: Modify content and skills in `src/components/About.jsx`
4. **Projects**: Update project details in `src/components/Projects.jsx`
5. **Contact**: Update social media links in `src/components/Contact.jsx`

### Change Colors

Edit the `tailwind.config.js` file to customize the color scheme:

```javascript
colors: {
  primary: "#1dbf73",  // Your primary color
  "background-light": "#f6f8f7",
  "background-dark": "#112119",
}
```

### Add/Remove Sections

Simply add or remove component imports in `src/App.jsx` and update the navigation links in `src/components/Header.jsx`.

## Features in Detail

### Dark/Light Mode

The theme toggle persists user preference in localStorage and respects system preferences on first visit.

### Animations

- Scroll-triggered animations using Framer Motion's `useInView` hook
- Hover effects on interactive elements
- Smooth page transitions
- Staggered animations for lists and grids

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Mobile menu for navigation on small screens
- Optimized typography and spacing for all devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions, feel free to reach out!

---

Built with ❤️ using React and Tailwind CSS

