# Impulse Computer Academy - React Application

A modern, component-based React application for Impulse Computer Academy website.

## Project Structure

```
react-impulse/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Navigation.jsx
│   │   ├── Navigation.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── Courses.jsx
│   │   ├── Courses.css
│   │   ├── WhyJoin.jsx
│   │   ├── WhyJoin.css
│   │   ├── Timeline.jsx
│   │   ├── Timeline.css
│   │   ├── Testimonial.jsx
│   │   ├── Testimonial.css
│   │   ├── AboutUs.jsx
│   │   ├── AboutUs.css
│   │   ├── ContactUs.jsx
│   │   ├── ContactUs.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Components Overview

### 1. **Header Component**
- Combines Navigation and Hero sections
- Full viewport height
- Responsive grid layout

### 2. **Navigation Component**
- Brand logo and academy name
- Navigation menu with links
- "Join Free 3 Day Demo Class" CTA button
- Responsive design

### 3. **Hero Section Component**
- Main headline and description
- Call-to-action button
- Hero image with floating animation
- Responsive layout

### 4. **Courses Component**
- Grid layout of all available courses
- Course cards with images and descriptions
- "Learn More" buttons for each course
- Gradient border animations on hover
- Responsive grid (3 columns on desktop, 2 on tablet, 1 on mobile)

### 5. **Why Join Us Component**
- Key reasons to join the academy
- Grid layout with hover effects
- Animated list items
- Responsive design

### 6. **Timeline Component**
- Academy's journey timeline
- Alternating image and content layout
- Timeline items with years and descriptions
- Smooth hover animations
- Fully responsive

### 7. **Testimonial Component**
- Student testimonials in card layout
- Student images with borders
- Quote formatting
- Hover effects with scaling
- Responsive grid

### 8. **About Us Component**
- Academy description and mission
- Multiple paragraphs with styling
- Call-to-action button
- Professional typography

### 9. **Contact Us Component**
- Contact form with validation
- Contact information display
- Social media links
- Responsive two-column layout
- Form state management with React hooks

### 10. **Footer Component**
- Brand information
- Navigation links
- Contact details
- Social media links
- Copyright information
- Dark theme styling

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps

1. **Navigate to project directory:**
   ```bash
   cd react-impulse
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Copy images:**
   - Create a `public/img` folder
   - Copy all image files from the original `htmlonly/img` folder to `public/img`

4. **Start development server:**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

5. **Build for production:**
   ```bash
   npm run build
   ```

## Features

✅ **Component-Based Architecture** - Each section is a separate, reusable component
✅ **Responsive Design** - Mobile, tablet, and desktop friendly
✅ **Modern Styling** - CSS3 animations and transitions
✅ **React Hooks** - useState for form management
✅ **Smooth Scrolling** - Navigation links with smooth scroll behavior
✅ **Animations** - Floating hero images, fade-in effects, hover animations
✅ **Contact Form** - Fully functional with form validation
✅ **Social Media Integration** - Links to all social platforms
✅ **Performance Optimized** - Efficient rendering and styling

## Styling Highlights

- **Color Scheme:**
  - Dark Background: #1E324A
  - Primary Color: #EEAB2E (Gold)
  - Secondary Color: #3399ff (Blue)
  - Text: White and light gray tones

- **Animations:**
  - Text fade and slide animations
  - Blur effects on scroll
  - Hover transformations
  - Floating and scaling effects

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add page routing with React Router for individual course pages
- Implement backend API integration for form submissions
- Add image lazy loading
- Implement service worker for offline support
- Add blog/news section
- Implement student dashboard

## Technologies Used

- **React** - UI Library
- **CSS3** - Styling and animations
- **React Hooks** - State management
- **Responsive Design** - Mobile-first approach

## License

All rights reserved © 2025 Impulse Computer Academy

## Support

For any queries or support, contact:
- Email: impulsebirsanagar@gmail.com
- Phone: +91 7979815545
- Address: 1st Floor Opposite Birsanagar Police Station, Jamshedpur, Jharkhand
