# 🚀 Amos Oluoch - Portfolio Website

A modern, responsive portfolio website built with **pure HTML and CSS only**. This portfolio showcases the work and skills of Amos Oluoch, a Full Stack Developer specializing in Python, TypeScript, JavaScript, PostgreSQL, and Docker.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![Responsive](https://img.shields.io/badge/Responsive-Yes-blue) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![No JavaScript](https://img.shields.io/badge/JavaScript-Free-red)

## ✨ Features

### 🎨 **Design & User Experience**
- **Modern Design**: Clean, professional layout with appealing color scheme
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop, ultra-wide)
- **CSS-Only Animations**: Smooth animations and transitions using pure CSS
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
- **CSS-Only Mobile Menu**: Hamburger menu using checkbox hack
- **Active Page Highlighting**: Shows current page in navigation
- **Smooth Scrolling**: CSS-based smooth scrolling to page sections
- **Keyboard Navigation**: Full accessibility support

### 🏠 **Home Page**
- **Hero Section**: Eye-catching introduction with animated avatar
- **Tech Stack Showcase**: Interactive skill cards
- **Statistics Section**: Professional achievements display
- **Call-to-Action**: Direct links to projects and contact

### 👨‍💻 **About Page**
- **Personal Story**: Detailed background and journey
- **Skills Visualization**: CSS-animated progress bars for technical skills
- **Experience Timeline**: Interactive career progression
- **Highlights Section**: Key strengths and values

### 💼 **Projects Page**
- **CSS-Only Project Filtering**: Filter by category using radio buttons
- **Interactive Cards**: Hover effects and project details
- **Live Demo Links**: Direct access to project demos and code
- **Technology Tags**: Visual representation of tech stack used

### 📞 **Contact Page**
- **Contact Form**: Functional form with CSS validation styles
- **Contact Information**: Multiple ways to get in touch
- **Social Media Links**: Professional networking profiles
- **CSS-Only FAQ Section**: Expandable questions using checkbox hack

## 🛠️ **Technical Stack**

### **Frontend**
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **Google Fonts**: Poppins font family for typography

### **CSS-Only Features & Functionality**
- **CSS Variables**: Consistent theming and easy customization
- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Animations**: Keyframe animations and transitions
- **Checkbox Hack**: Mobile menu and FAQ accordion without JavaScript
- **Radio Button Filtering**: Project filtering using CSS selectors
- **Touch Gestures**: Mobile-specific interactions
- **Progressive Enhancement**: Works without any JavaScript

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
└── README.md               # Project documentation
```

## 🚀 **Getting Started**

### **Prerequisites**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs on static files
- No JavaScript dependencies

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
3. Use CSS-only interactions (checkbox hack, radio buttons)
4. Update navigation links

## 📱 **Mobile Optimization**

### **Touch-Friendly Features**
- **Minimum 44px touch targets** for all interactive elements
- **CSS-only mobile menu** using checkbox hack
- **Optimized form inputs** to prevent zoom on iOS
- **Touch feedback** with scale animations

### **Performance Optimizations**
- **No JavaScript overhead** - faster loading
- **CSS-only animations** for smooth performance
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

- **Email**: aoluoch271@gmail.com
- **LinkedIn**: [linkedin.com/in/amosoluoch](https://linkedin.com/in/amosoluoch)
- **GitHub**: [github.com/aoluoch](https://github.com/aoluoch)
- **Portfolio**: [Live Demo](https://amosplp.netlify.app/)

## 🙏 **Acknowledgments**

- **Google Fonts** for the Poppins font family
- **CSS Grid** and **Flexbox** for modern layout capabilities
- **CSS Animations** for smooth interactions
- **Modern CSS** features for responsive design
- **Checkbox Hack** technique for JavaScript-free interactions

---

⭐ **Star this repository if you found it helpful!**
