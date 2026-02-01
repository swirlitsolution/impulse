# Impulse Academy React - Setup Guide

## Quick Start Guide

### 1. Prerequisites Installation

Before starting, ensure you have Node.js and npm installed:

```bash
# Check Node.js version (should be v14 or higher)
node --version

# Check npm version
npm --version
```

If not installed, download from: https://nodejs.org/

### 2. Project Setup

```bash
# Navigate to the project directory
cd e:\client-project\WebApp\impulse\react-impulse

# Install all dependencies
npm install
```

### 3. Image Setup

The application requires images from the original project:

1. Create `public` folder structure:
   - `public/img/` directory

2. Copy images from the original htmlonly folder:
   - Copy all files from: `e:\client-project\WebApp\impulse\htmlonly\img\`
   - Paste into: `e:\client-project\WebApp\impulse\react-impulse\public\img\`

Required images:
- logo.png
- hero.png
- webdev.jpeg
- mern.png
- python.jpg
- graphics.jpg
- tally.jpg
- dca.jpg
- 40908801699.png
- inaugration.jpg
- bagbeda.avif
- birsanagar.jpg
- global.jpg
- disha.jpg
- mohit.jpeg
- mihir.avif
- facebook.png
- instagram.png
- linkedin.png
- youtube.png

### 4. Start Development Server

```bash
npm start
```

The application will automatically open in your default browser at `http://localhost:3000`

### 5. Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### 6. Available Scripts

```bash
# Start development server with hot reload
npm start

# Build for production
npm run build

# Run tests (if configured)
npm test

# Eject configuration (one-way operation, not recommended)
npm run eject
```

## Project Structure Explanation

```
react-impulse/
├── public/
│   ├── index.html          # Main HTML file
│   └── img/                # All image assets
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx      # Navigation + Hero
│   │   ├── Courses.jsx     # Courses section
│   │   ├── WhyJoin.jsx     # Why join section
│   │   ├── Timeline.jsx    # Company journey
│   │   ├── Testimonial.jsx # Student reviews
│   │   ├── AboutUs.jsx     # About section
│   │   ├── ContactUs.jsx   # Contact form
│   │   └── Footer.jsx      # Footer section
│   ├── styles/
│   │   └── globals.css     # Global styles & animations
│   ├── App.jsx             # Main App component
│   ├── index.js            # React entry point
│   └── App.css             # App styles
├── package.json            # Dependencies & scripts
└── README.md              # Documentation
```

## Component Hierarchy

```
App
├── Header
│   ├── Navigation
│   └── Hero
├── Courses
├── WhyJoin
├── Timeline
├── Testimonial
├── AboutUs
├── ContactUs
└── Footer
```

## Features Implemented

### ✅ Navigation
- Smooth scroll links to all sections
- "Join Free 3 Day Demo Class" button

### ✅ Hero Section
- Large headline and description
- Animated hero image
- Call-to-action button

### ✅ Courses
- 6 course cards in responsive grid
- Course images and descriptions
- Learn More buttons
- Gradient border animations

### ✅ Why Join Us
- 9 key benefits
- Grid layout with hover effects
- Animated text

### ✅ Timeline
- 5 milestone events
- Alternating layout
- Images and descriptions
- Smooth animations

### ✅ Testimonials
- 3 student reviews
- Profile images
- Quote formatting
- Responsive grid

### ✅ About Us
- Company description
- Professional typography
- Call-to-action link

### ✅ Contact Us
- Working contact form with React state management
- Contact information
- Social media links
- Form validation

### ✅ Footer
- Logo and branding
- Navigation links
- Contact details
- Social media links
- Copyright

## Styling Features

### Color Palette
```css
--primary-color: #EEAB2E      (Gold)
--secondary-color: #3399ff    (Blue)
--dark-bg: #1E324A           (Dark Blue)
```

### Animations
- Text fade and slide in (on scroll)
- Blur effects
- Hover transformations
- Image floating effects
- Border rotations

### Responsive Breakpoints
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: Below 768px

## Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
# Windows - Kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Images Not Loading
1. Check if `public/img/` folder exists
2. Verify all image files are copied
3. Check browser console for 404 errors
4. Images should be accessed from `./img/filename.ext`

## Deployment

### Using Vercel (Recommended)
1. Push code to GitHub
2. Connect GitHub to Vercel
3. Vercel auto-deploys on push

### Using GitHub Pages
```bash
# Add to package.json: "homepage": "https://yourusername.github.io/impulse"
npm run build
npm install -g gh-pages
npx gh-pages -d build
```

### Using Traditional Hosting
1. Run `npm run build`
2. Upload `build/` folder to your hosting
3. Configure server to serve `public/index.html` for all routes

## Next Steps

1. ✅ Copy images to `public/img/`
2. ✅ Run `npm install`
3. ✅ Run `npm start`
4. ✅ Test all sections
5. ✅ Customize as needed
6. ✅ Deploy when ready

## Support & Questions

For any issues or questions:
- Email: impulsebirsanagar@gmail.com
- Phone: +91 7979815545

Enjoy your new React application! 🚀
