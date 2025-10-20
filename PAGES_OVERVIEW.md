# 📱 Website Pages Overview - NEEV Foundation

Visual guide to all pages and their content.

---

## 🏠 HOME PAGE (`/`)

**Route:** http://localhost:3000

### Sections:
1. **Hero Section**
   - Headline: "Building Strong Foundations for Success"
   - Subtext: "Personalized learning with expert faculty & proven results"
   - Brand image on right
   - 2 CTA buttons: "Join Now" & "Explore Courses"

2. **Stats Bar**
   - 2000+ Students Trained
   - 100+ Toppers Every Year  
   - 15+ Years of Excellence
   - 50+ Expert Faculty

3. **About Preview**
   - Brief intro to NEEV
   - 4 feature cards:
     - Expert Faculty (50+ experienced educators)
     - Small Batches (Personalized attention)
     - Proven Results (100+ toppers yearly)
     - Modern Methods (Innovative learning)

4. **Featured Courses** (4 courses)
   - Foundation Course (Classes 6-10)
   - JEE Preparation
   - NEET Preparation
   - Board Excellence Program
   - Button: "View All Courses"

5. **Top Performers Preview** (6 students)
   - Student cards with photos, ranks, exams
   - Testimonials from students
   - Button: "View All Results"

6. **Parent Testimonials** (4 reviews)
   - 5-star ratings
   - Parent testimonials
   - Parent photos and names

7. **Final CTA Section**
   - "Ready to Build Your Foundation?"
   - 2 buttons: "Enroll Now" & "Book Free Counselling"

---

## 📚 COURSES PAGE (`/courses`)

**Route:** http://localhost:3000/courses

### Content:
- **Hero:** "Our Courses" headline
- **6 Detailed Course Cards:**
  1. **Foundation Course (Classes 6-10)**
     - Duration, target audience
     - Full description
     - Subjects covered (chips)
     - Course features (checkmarks)
     - Batch types (badges)
     - Highlights section
     - "Enroll Now" button
  
  2. **JEE Preparation**
  3. **NEET Preparation**
  4. **Board Excellence Program**
  5. **Olympiad & NTSE**
  6. **Crash Course Programs**

- **Bottom CTA:** "Not Sure Which Course?" + "Book Free Counselling"

---

## 👨‍🏫 FACULTY PAGE (`/faculty`)

**Route:** http://localhost:3000/faculty

### Content:
- **Hero:** "Our Expert Faculty" headline
- **6 Faculty Profile Cards:**
  - Large photo (top half)
  - Name and subject (overlaid on photo)
  - Qualification (with graduation cap icon)
  - Experience (with book icon)
  - Specialization
  - Inspirational quote (in colored box)
  - Achievements list (with award icon)

- **Faculty Cards:**
  1. Dr. Rajesh Kumar - Physics
  2. Prof. Anjali Sharma - Chemistry
  3. Mr. Vikram Singh - Mathematics
  4. Dr. Priya Mehta - Biology
  5. Mr. Amit Verma - English & Social Studies
  6. Ms. Kavita Reddy - Mathematics (Foundation)

- **Why Our Faculty Section:**
  - 3 highlight cards:
    - Highly Qualified
    - Proven Track Record
    - Innovative Teaching

- **Bottom CTA:** "Meet Our Faculty in Person" + "Book Your Demo Class"

---

## 🏆 RESULTS PAGE (`/results`)

**Route:** http://localhost:3000/results

### Content:
- **Hero:** Trophy icon + "Our Star Achievers"
- **Stats Bar:**
  - 100+ Toppers
  - 50+ AIR Holders
  - 95%+ Success Rate
  - 2000+ Selections

- **Year Filter:** Buttons for "Batch 2024" & "Batch 2023"

- **10 Top Performer Cards:**
  - Badge ribbon with rank (top)
  - Student photo
  - Name and exam
  - Year and percentage
  - Course taken
  - Student testimonial (in box)

- **Hall of Fame:**
  - 3 colored cards:
    - JEE Success (50+ selections)
    - NEET Success (40+ selections)
    - Board Excellence (95%+ scorers)

- **Bottom CTA:** "Be the Next Success Story" + "Start Your Journey"

---

## ℹ️ ABOUT US PAGE (`/about`)

**Route:** http://localhost:3000/about

### Sections:
1. **Hero:** "About NEEV – THE FOUNDATION"

2. **Mission & Vision:** 2 large cards
   - Mission (bullseye icon)
   - Vision (eye icon)

3. **Our Story:**
   - Full narrative about institute
   - Founded 2008, growth story
   - Current status (50+ faculty, state-of-art)

4. **Core Values:** 4 cards
   - Excellence (star icon)
   - Integrity (heart icon)
   - Innovation (rocket icon)
   - Student-Centric (graduate icon)

5. **Timeline/Milestones:** 6 year circles
   - 2008: Foundation established
   - 2010: First batch
   - 2015: Expansion
   - 2018: First AIR 1
   - 2020: Online platform
   - 2024: Current stats

6. **Director's Message:**
   - Director photo (left)
   - Inspirational message (right)
   - Name and title

7. **Bottom CTA:** "Be Part of Our Success Story"

---

## 📞 CONTACT PAGE (`/contact`)

**Route:** http://localhost:3000/contact

### Layout:
**Left Column (1/3):**
- **Contact Information Card:**
  - Phone (with icon)
  - Email (with icon)
  - Address (with icon)
  
- **Social Media Card:**
  - Follow Us heading
  - 5 social buttons:
    - Facebook
    - Instagram
    - YouTube
    - Twitter
    - WhatsApp

**Right Column (2/3):**
- **Contact Form Card:**
  - "Send Us A Message" heading
  - Form fields:
    - Full Name*
    - Phone Number*
    - Email Address*
    - Course of Interest (dropdown)
    - Message*
  - Submit button: "Send Message"
  - Success message (after submit)

**Below:**
- **Google Maps Embed:** Full-width map
- **Office Hours Card:**
  - Monday-Friday: 8 AM - 8 PM
  - Saturday: 9 AM - 6 PM
  - Sunday: 10 AM - 4 PM

---

## 🧭 NAVIGATION

### Header (All Pages):
- **Top Bar (desktop only):**
  - Phone number
  - Email
  - Tagline (right side)

- **Main Navigation:**
  - Logo (left): NEEV - THE FOUNDATION
  - Links: Home | Courses | Faculty | Results | About Us | Contact
  - Button: "Enroll Now"
  - Mobile: Hamburger menu

### Footer (All Pages):
- **4 Columns:**
  1. About + Social icons
  2. Quick Links
  3. Our Courses
  4. Contact Info

- **Bottom Bar:**
  - Copyright
  - Privacy Policy | Terms & Conditions

### Floating Elements:
- **Bottom Right:**
  - WhatsApp button (green)
  - "📚 Enroll Now" button (blue/orange)
  
- **Bottom Right Corner:**
  - Scroll to top button (orange)

---

## 📊 Data Sources

Each page pulls data from JSON files:

| Page | Data File |
|------|-----------|
| All pages | `data/siteConfig.json` |
| Home | `courses.json`, `topPerformers.json`, `testimonials.json` |
| Courses | `data/courses.json` |
| Faculty | `data/faculty.json` |
| Results | `data/topPerformers.json` |
| About | Hardcoded + `siteConfig.json` |
| Contact | `data/siteConfig.json` |

---

## 🎨 Color Scheme

**Primary Colors:**
- Primary Blue: #0056e0 (main brand color)
- Light Blue: #e6f0ff (backgrounds)
- Dark Blue: #00337a (text, accents)

**Accent Colors:**
- Orange: #f59e0b (CTAs, highlights)
- Light Orange: #fbbf24 (hover states)

**Neutrals:**
- White: #ffffff (cards, backgrounds)
- Gray 50: #f9fafb (subtle backgrounds)
- Gray 600: #4b5563 (body text)
- Gray 900: #111827 (headings)

---

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

All pages are fully responsive and tested on all screen sizes.

---

## ✨ Interactive Elements

**Animations (Framer Motion):**
- Fade in on scroll
- Slide up on scroll
- Hover scale effects
- Page transitions

**Hover Effects:**
- Cards lift up
- Buttons scale up
- Links underline
- Colors change

**Click Actions:**
- Navigation links scroll
- CTA buttons link to contact
- Phone/email/WhatsApp open apps
- Social links open in new tabs

---

## 🔗 Internal Links Map

```
Home → Courses (Featured section)
Home → Results (Top Performers section)
Home → About (Learn More button)
Home → Contact (All CTAs)

Header → All pages
Footer → All pages
Footer → Social media (external)

All pages → Contact (CTA sections)
```

---

**Use this guide to understand your website structure!**
