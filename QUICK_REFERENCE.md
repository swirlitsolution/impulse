# Quick Reference Guide - React Impulse

## 📁 Project Location
```
e:\client-project\WebApp\impulse\react-impulse\
```

## 🚀 Quick Start (3 Steps)

```bash
# 1. Navigate to project
cd e:\client-project\WebApp\impulse\react-impulse

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

## 📋 Essential Commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install all dependencies |
| `npm start` | Start dev server (port 3000) |
| `npm run build` | Create production build |
| `npm test` | Run tests |

## 🎨 Component Files Location

```
src/components/
├── Header.jsx + Header.css
├── Navigation.jsx + Navigation.css
├── Hero.jsx + Hero.css
├── Courses.jsx + Courses.css
├── WhyJoin.jsx + WhyJoin.css
├── Timeline.jsx + Timeline.css
├── Testimonial.jsx + Testimonial.css
├── AboutUs.jsx + AboutUs.css
├── ContactUs.jsx + ContactUs.css
└── Footer.jsx + Footer.css
```

## 🖼️ Images Required

Copy these to `public/img/`:
- `logo.png`
- `hero.png`
- `webdev.jpeg`
- `mern.png`
- `python.jpg`
- `graphics.jpg`
- `tally.jpg`
- `dca.jpg`
- `40908801699.png`
- `inaugration.jpg`
- `bagbeda.avif`
- `birsanagar.jpg`
- `global.jpg`
- `disha.jpg`
- `mohit.jpeg`
- `mihir.avif`
- `facebook.png`
- `instagram.png`
- `linkedin.png`
- `youtube.png`

## 🔧 Making Changes

### Edit a Component
```bash
# Open any component file in your editor
# src/components/YourComponent.jsx
```

### Edit Styling
```bash
# Component styles
src/components/YourComponent.css

# Global styles
src/styles/globals.css
```

### Update Colors
Edit in `src/styles/globals.css`:
```css
:root {
  --primary-color: #EEAB2E;      /* Gold */
  --secondary-color: #3399ff;     /* Blue */
  --dark-bg: #1E324A;             /* Dark */
}
```

### Add New Course
Edit `src/components/Courses.jsx` - modify the `courses` array:
```javascript
const courses = [
  {
    id: 1,
    title: 'Course Name',
    description: 'Description',
    image: './img/image.jpg',
    link: '#'
  },
  // Add more courses here
];
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and up
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🎨 Color Reference

| Variable | Color | Hex |
|----------|-------|-----|
| Primary | Gold | #EEAB2E |
| Secondary | Blue | #3399ff |
| Dark BG | Dark Blue | #1E324A |
| Text | White | #FFFFFF |
| Muted | Light Gray | #d3d1d1 |

## ⚡ Performance Tips

1. Images are loaded from `public/img/`
2. CSS animations use GPU acceleration
3. Components are reusable and modular
4. Minimal bundle size with React 18

## 🐛 Troubleshooting

### Images not showing?
- Check: `public/img/` folder exists
- Check: All image files copied
- Check: Browser console for 404 errors

### Port 3000 already in use?
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Dependencies missing?
```bash
rm -rf node_modules
npm install
```

## 📚 Component Details

### Header
- Combines Navigation + Hero
- Full viewport height
- Navigation at top 10%

### Courses
- 6 courses in grid
- 3 columns on desktop
- 2 columns on tablet
- 1 column on mobile

### Timeline
- 5 milestone events
- Alternating layout
- Responsive single column

### ContactUs
- Form with validation
- Maps contact info
- Social media links

## 🔗 Navigation Links

All links use hash-based routing:
- `#home` - Header
- `#courses` - Courses
- `#whyjoin` - Why Join
- `#timeline` - Timeline
- `#testimonial` - Testimonials
- `#about` - About Us
- `#contact` - Contact

## 📝 Form Handling

ContactUs component uses React useState:
```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
});
```

## 🌐 Deployment Ready

Build production version:
```bash
npm run build
```

Output: `build/` folder ready to deploy

## 📖 Documentation Files

- `README.md` - Full documentation
- `SETUP_GUIDE.md` - Setup instructions
- `CONVERSION_SUMMARY.md` - What was created
- `QUICK_REFERENCE.md` - This file

## 💡 Pro Tips

1. Use `.css` files for component-specific styles
2. Use `globals.css` for shared animations
3. Keep components small and focused
4. Use semantic HTML in JSX
5. Test on mobile devices

## 🎯 Next Actions

1. ✅ Copy images to `public/img/`
2. ✅ Run `npm install`
3. ✅ Run `npm start`
4. ✅ Test all sections
5. ✅ Customize colors/content
6. ✅ Build and deploy

---

**Happy coding! 🚀**

For detailed help, see: `SETUP_GUIDE.md` and `README.md`
