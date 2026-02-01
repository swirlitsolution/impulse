# Project Structure Documentation

## Complete File Tree

```
e:\client-project\WebApp\impulse\react-impulse\
│
├── public/
│   ├── index.html                 # Main HTML entry point
│   └── img/                        # Image assets (to be populated)
│       ├── logo.png
│       ├── hero.png
│       ├── webdev.jpeg
│       ├── mern.png
│       ├── python.jpg
│       ├── graphics.jpg
│       ├── tally.jpg
│       ├── dca.jpg
│       ├── 40908801699.png
│       ├── inaugration.jpg
│       ├── bagbeda.avif
│       ├── birsanagar.jpg
│       ├── global.jpg
│       ├── disha.jpg
│       ├── mohit.jpeg
│       ├── mihir.avif
│       ├── facebook.png
│       ├── instagram.png
│       ├── linkedin.png
│       └── youtube.png
│
├── src/
│   │
│   ├── components/                # React Components
│   │   ├── Header.jsx            # Main header wrapper
│   │   ├── Header.css
│   │   │
│   │   ├── Navigation.jsx        # Navigation bar
│   │   ├── Navigation.css
│   │   │
│   │   ├── Hero.jsx              # Hero section
│   │   ├── Hero.css
│   │   │
│   │   ├── Courses.jsx           # Courses listing
│   │   ├── Courses.css
│   │   │
│   │   ├── WhyJoin.jsx           # Why join us section
│   │   ├── WhyJoin.css
│   │   │
│   │   ├── Timeline.jsx          # Company timeline
│   │   ├── Timeline.css
│   │   │
│   │   ├── Testimonial.jsx       # Student testimonials
│   │   ├── Testimonial.css
│   │   │
│   │   ├── AboutUs.jsx           # About section
│   │   ├── AboutUs.css
│   │   │
│   │   ├── ContactUs.jsx         # Contact form
│   │   ├── ContactUs.css
│   │   │
│   │   ├── Footer.jsx            # Footer section
│   │   └── Footer.css
│   │
│   ├── styles/                    # Global styles
│   │   └── globals.css            # Global animations & variables
│   │
│   ├── App.jsx                    # Main App component
│   ├── App.css
│   │
│   └── index.js                   # React entry point
│
├── node_modules/                  # Dependencies (created after npm install)
│
├── .env.example                   # Environment variables template
├── .gitignore                     # Git ignore rules
├── package.json                   # Project metadata & dependencies
├── package-lock.json              # Dependency lock file
│
├── README.md                      # Complete documentation
├── SETUP_GUIDE.md                 # Setup instructions
├── QUICK_REFERENCE.md             # Quick reference guide
├── CONVERSION_SUMMARY.md          # Conversion details
│
└── PROJECT_STRUCTURE.md           # This file
```

## Detailed Component Information

### 1. Header Component
**Location**: `src/components/Header.jsx`
**Dependencies**: Navigation, Hero
**Purpose**: Main header wrapper combining nav and hero
**Height**: 100vh (full viewport)
**Layout**: Grid (10% nav, 90% hero)

### 2. Navigation Component
**Location**: `src/components/Navigation.jsx`
**Purpose**: Top navigation bar
**Contains**:
- Logo and brand name
- Navigation menu (5 items)
- Demo class CTA button
**Styling**: Flexbox layout with hover effects

### 3. Hero Component
**Location**: `src/components/Hero.jsx`
**Purpose**: Main hero section with CTA
**Contains**:
- Headline
- Subtitle
- Hero image
- Get Started button
**Animation**: Floating image effect
**Layout**: Two-column grid

### 4. Courses Component
**Location**: `src/components/Courses.jsx`
**Purpose**: Display all courses
**Features**:
- 6 course cards
- Gradient border animations
- Responsive grid
- Course images
**Grid Layout**:
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column

### 5. WhyJoin Component
**Location**: `src/components/WhyJoin.jsx`
**Purpose**: List benefits of joining
**Contains**: 9 benefit items
**Layout**: Responsive grid
**Animation**: Scroll-triggered fade/blur

### 6. Timeline Component
**Location**: `src/components/Timeline.jsx`
**Purpose**: Show company journey
**Events**: 5 milestones (2020-2028)
**Layout**: Alternating left/right
**Features**:
- Timeline images
- Dates and descriptions
- Responsive adaptation

### 7. Testimonial Component
**Location**: `src/components/Testimonial.jsx`
**Purpose**: Display student reviews
**Contains**: 3 testimonials
**Features**:
- Student images
- Name and quote
- Card hover effects
**Layout**: Responsive grid

### 8. AboutUs Component
**Location**: `src/components/AboutUs.jsx`
**Purpose**: Company information
**Contains**:
- 3 descriptive paragraphs
- CTA button
**Layout**: Centered column

### 9. ContactUs Component
**Location**: `src/components/ContactUs.jsx`
**Purpose**: Contact form & info
**Features**:
- Working form with validation
- Contact information
- Social media links
**State Management**: useState hooks
**Layout**: Two-column (form + info)

### 10. Footer Component
**Location**: `src/components/Footer.jsx`
**Purpose**: Site footer
**Contains**:
- Brand info
- Navigation links
- Contact details
- Social media links
- Copyright

### 11. App Component
**Location**: `src/App.jsx`
**Purpose**: Main application wrapper
**Composes**: All other components
**Role**: Master component orchestrator

## Styling Architecture

### Global Styles
**File**: `src/styles/globals.css`
**Contains**:
- CSS variables
- Global animations
- Reset styles
- Keyframe definitions

### Component Styles
Each component has its own CSS file:
- Scoped styling
- Component-specific animations
- Responsive rules
- Hover states

### CSS Variables Used
```css
--primary-color: #EEAB2E        /* Gold */
--secondary-color: #3399ff      /* Blue */
--dark-bg: #1E324A              /* Dark background */
--text-white: white             /* Main text */
--text-light: rgb(202, 202, 202) /* Light text */
--text-muted: #d3d1d1           /* Muted text */
```

## File Statistics

| Category | Count | Files |
|----------|-------|-------|
| Components | 11 | .jsx |
| Stylesheets | 11 | .css |
| Global Styles | 1 | .css |
| Config | 3 | .json |
| Documentation | 4 | .md |
| Git Config | 1 | .gitignore |
| Env Template | 1 | .env.example |
| **Total** | **32** | |

## Dependencies (package.json)

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "5.0.1"
}
```

## Build Artifacts (After npm run build)

```
build/
├── index.html
├── css/
│   └── main.[hash].css
├── js/
│   ├── main.[hash].js
│   └── [other bundles]
├── img/                    (copied from public)
├── favicon.ico
└── manifest.json
```

## Data Flow

```
index.js
    ↓
App.jsx (Main Component)
    ├── Header (Nav + Hero)
    ├── Courses
    ├── WhyJoin
    ├── Timeline
    ├── Testimonial
    ├── AboutUs
    ├── ContactUs
    └── Footer
```

## State Management

### Components with State
1. **ContactUs**: Form state (name, email, message)

### Stateless Components (Props-based)
1. Header, Navigation, Hero
2. Courses (renders CourseCard children)
3. WhyJoin, Timeline, Testimonial
4. AboutUs, Footer

## Performance Considerations

### Optimizations
- Component splitting
- CSS animations (GPU)
- Modular code structure
- No unnecessary re-renders
- Image optimization ready

### Bundle Size
- React 18: ~40KB
- React DOM 18: ~130KB
- react-scripts: included
- Custom CSS: minimal (~50KB)

## Customization Paths

### To Add New Section
1. Create `src/components/NewSection.jsx`
2. Create `src/components/NewSection.css`
3. Import in `App.jsx`
4. Add to render

### To Modify Data
- Edit arrays in component files
- Update text in JSX
- Swap image paths
- Modify form fields

### To Change Colors
- Edit `src/styles/globals.css`
- Update CSS variable values
- Changes apply globally

### To Add Features
- Create new components
- Update App.jsx imports
- Add new routes if needed
- Update navigation links

## Testing Checklist

- [ ] All images load correctly
- [ ] Navigation links work
- [ ] Responsive on mobile/tablet
- [ ] Form submits and resets
- [ ] Animations play smoothly
- [ ] Hover effects work
- [ ] Footer links functional
- [ ] Social media links open
- [ ] No console errors
- [ ] Performance acceptable

---

**Document Version**: 1.0  
**Last Updated**: February 2026  
**Project**: Impulse Computer Academy React Conversion
