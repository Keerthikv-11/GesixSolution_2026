1. Architecture: 
    I chose a Component-Based Architecture organized by functional responsibility

Folder Structure 
public/             # (Images)
src/
├── components/     # Reusable UI elements (Navigation, Footer)
├── pages/          # View-level components (Home, AboutMe, Projects , Contact , TechStack)
├── assets/         # Static files (Images, Logos)
├── App.jsx         # Root component & Routing logic
└── main.jsx        # Entry point


2. AI Usage & Prompt Engineering :
   I utilized Gemini as a high-velocity pair-programmer. Rather than using AI to generate the entire project at once, I used it iteratively to build the base structure, refine the UI, and  mobile responsiveness

3. Challenges :
 The Problem:
While implementing the mobile responsiveness for the navigation bar, I encountered a critical "dead zone" issue. Although the FontAwesome hamburger icon was visually present on mobile screens (widths < 768px), it was unresponsive to touch and click events

Solution :
    with the help of the online documentation i got theh solution

During the development of the About Me page, I encountered a critical UI bug: The mobile "Hamburger" menu button was visible but completely unclickable. Additionally, as the "Hero Image" animated upwards, it appeared to blur the navigation bar

