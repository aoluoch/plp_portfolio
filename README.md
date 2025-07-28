# 🚀 Amos Oluoch - Portfolio Website

A modern, responsive portfolio website built with pure HTML, CSS, and JavaScript. This portfolio showcases the work and skills of Amos Oluoch, a Full Stack Developer specializing in Python, TypeScript, JavaScript, PostgreSQL, and Docker.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![Responsive](https://img.shields.io/badge/Responsive-Yes-blue) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎨 **Design & User Experience**
- **Modern Design**: Clean, professional layout with appealing color scheme
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop, ultra-wide)
- **Smooth Animations**: CSS animations and JavaScript interactions
- **Custom Favicon**: Personalized SVG favicon with "AO" initials
- **Typography**: Google Fonts (Poppins) for modern, readable text

### 📱 **Responsive Breakpoints**
- **Extra Small**: 320px - 480px (Mobile phones)
- **Small**: 481px - 768px (Large phones, small tablets)
- **Medium**: 769px - 1024px (Tablets, small laptops)
- **Large**: 1025px - 1440px (Laptops, desktops)
- **Extra Large**: 1441px+ (Large monitors, ultra-wide displays)

### 🧭 **Navigation**
- **Fixed Navigation Bar**: Stays visible while scrolling
- **Mobile Menu**: Hamburger menu with smooth animations
- **Active Page Highlighting**: Shows current page in navigation
- **Smooth Scrolling**: Animated scrolling to page sections
- **Keyboard Navigation**: Full accessibility support

### 🏠 **Home Page**
- **Hero Section**: Eye-catching introduction with animated avatar
- **Tech Stack Showcase**: Interactive skill cards
- **Statistics Section**: Professional achievements display
- **Call-to-Action**: Direct links to projects and contact

### 👨‍💻 **About Page**
- **Personal Story**: Detailed background and journey
- **Skills Visualization**: Animated progress bars for technical skills
- **Experience Timeline**: Interactive career progression
- **Highlights Section**: Key strengths and values

### 💼 **Projects Page**
- **Project Filtering**: Filter by category (All, Full Stack, Backend, Frontend)
- **Interactive Cards**: Hover effects and project details
- **Live Demo Links**: Direct access to project demos and code
- **Technology Tags**: Visual representation of tech stack used

### 📞 **Contact Page**
- **Contact Form**: Functional form with validation
- **Contact Information**: Multiple ways to get in touch
- **Social Media Links**: Professional networking profiles
- **FAQ Section**: Common questions with expandable answers

## 🛠️ **Technical Stack**

### **Frontend**
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Interactive functionality and form handling
- **Google Fonts**: Poppins font family for typography

### **Features & Functionality**
- **CSS Variables**: Consistent theming and easy customization
- **CSS Grid & Flexbox**: Modern layout techniques
- **Intersection Observer API**: Scroll-based animations
- **Form Validation**: Client-side form validation with feedback
- **Touch Gestures**: Mobile-specific interactions
- **Lazy Loading**: Performance optimization for images

## 📁 **Project Structure**

```
portfolio/
├── index.html              # Home page
├── about.html               # About page
├── projects.html            # Projects showcase
├── contact.html             # Contact form and information
├── favicon.svg              # Custom favicon
├── generate-favicon.html    # Favicon generator tool
├── css/
│   ├── main.css            # Global styles and utilities
│   ├── navigation.css      # Navigation component styles
│   ├── home.css            # Home page specific styles
│   ├── about.css           # About page specific styles
│   ├── projects.css        # Projects page specific styles
│   └── contact.css         # Contact page specific styles
├── js/
│   ├── main.js             # Core functionality and navigation
│   ├── about.js            # About page interactions
│   ├── projects.js         # Project filtering and animations
│   └── contact.js          # Contact form handling and FAQ
└── README.md               # Project documentation
```

## 🚀 **Getting Started**

### **Prerequisites**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs on static files

### **Installation**
1. **Clone the repository**
   ```bash
   git clone https://github.com/aoluoch/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   ```bash
   # Option 1: Direct file opening
   open index.html

   # Option 2: Using a local server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **For development**
   ```bash
   # Use Live Server extension in VS Code
   # Or any static file server
   npx serve .
   ```

## 🎨 **Customization**

### **Colors & Theming**
The website uses CSS variables for easy customization. Edit `css/main.css`:

```css
:root {
  --primary-color: #2563eb;      /* Main brand color */
  --secondary-color: #10b981;    /* Accent color */
  --text-primary: #1f2937;       /* Main text color */
  --background-primary: #ffffff; /* Background color */
  /* ... more variables */
}
```

### **Content Updates**
1. **Personal Information**: Update name, title, and bio in HTML files
2. **Projects**: Modify project cards in `projects.html`
3. **Contact Details**: Update contact information in `contact.html`
4. **Social Links**: Update social media URLs in footer sections

### **Adding New Sections**
1. Create HTML structure following existing patterns
2. Add corresponding CSS in appropriate stylesheet
3. Include JavaScript functionality if needed
4. Update navigation links

## 📱 **Mobile Optimization**

### **Touch-Friendly Features**
- **Minimum 44px touch targets** for all interactive elements
- **Swipe gestures** for mobile navigation
- **Optimized form inputs** to prevent zoom on iOS
- **Touch feedback** with scale animations

### **Performance Optimizations**
- **Throttled scroll events** for smooth performance
- **Lazy loading** support for images
- **Hardware acceleration** for animations
- **Optimized CSS** with efficient selectors

## 🔧 **Browser Support**

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 60+     | ✅ Full |
| Firefox | 60+     | ✅ Full |
| Safari  | 12+     | ✅ Full |
| Edge    | 79+     | ✅ Full |
| IE      | 11      | ⚠️ Limited |

## 🤝 **Contributing**

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 **Contact**

**Amos Oluoch** - Full Stack Developer

- **Email**: amos@example.com
- **LinkedIn**: [linkedin.com/in/amosoluoch](https://linkedin.com/in/amosoluoch)
- **GitHub**: [github.com/aoluoch](https://github.com/aoluoch)
- **Portfolio**: [Live Demo](https://aoluoch.github.io/portfolio)

## 🙏 **Acknowledgments**

- **Google Fonts** for the Poppins font family
- **CSS Grid** and **Flexbox** for modern layout capabilities
- **Intersection Observer API** for scroll animations
- **Modern CSS** features for responsive design

---

⭐ **Star this repository if you found it helpful!**
