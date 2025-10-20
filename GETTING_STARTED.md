# Getting Started with Promptemployee Landing Page

## ✅ What's Been Built

Your Promptemployee landing page is now complete! Here's what you have:

### 🎨 Pages & Components

1. **Navigation Bar** (`components/navbar.tsx`)

   - Fixed position with black background (#171717)
   - Red accent color (#ef4444) for hover states
   - Mobile-responsive hamburger menu
   - Language toggle (ES/EN)
   - Smooth scroll navigation

2. **Hero Section** (`components/hero-section.tsx`)

   - Container scroll animation
   - Compelling headline highlighting "Fuerza de Trabajo Digital"
   - Embedded Streamable video (https://streamable.com/e/zyutnp)
   - Two CTA buttons with red primary action
   - Bilingual support (Spanish/English)

3. **Features Section** (`components/features-section.tsx`)

   - 6 feature cards covering core value propositions:
     - Panel de Orquestación Visual
     - Arquitectura Multi-Modelo
     - Servicio Integral
     - Empleados que Aprenden
     - Calidad de Respuesta Inigualable
     - Sin Dependencias
   - Red icon backgrounds on hover
   - White cards with subtle shadows

4. **How It Works** (`components/how-it-works-section.tsx`)

   - 3-step process visualization:
     - Conecta → Configura → Despliega
   - Red step number badges
   - Clear icons for each step

5. **Stats Section** (`components/stats-section.tsx`)

   - Dark background (#171717)
   - 4 key metrics with red accent numbers:
     - 80% reduction in repetitive tasks
     - 0 lines of code needed
     - 24/7 availability
     - Multi-model flexibility

6. **Testimonials Section** (`components/testimonials-section.tsx`)

   - 3 real client testimonials from different departments:
     - Operations Director
     - Sales Manager
     - HR Lead
   - Animated testimonial carousel
   - Red accent on navigation arrows

7. **CTA Section** (`components/cta-section.tsx`)

   - Dark gradient background
   - Strong call-to-action
   - Red primary button
   - Flexible subscription messaging

8. **Footer** (`components/footer.tsx`)
   - Black background (#0a0a0a)
   - Red accent on hover states
   - Company info with bilingual support
   - Social media links

### 🎨 Design System

- **Font**: Manrope (all weights loaded)
- **Primary Color**: Black (#171717)
- **Accent Color**: Red (#ef4444)
- **Background**: White (#ffffff)
- **Fully Responsive**: Mobile, tablet, desktop
- **Smooth Animations**: Framer Motion powered
- **Bilingual**: Spanish (default) and English

### 🌐 Internationalization (i18n)

All text content is managed through the i18n system (`lib/i18n.tsx`). To add or modify translations:

1. Open `lib/i18n.tsx`
2. Find the dictionaries object
3. Update both `es` (Spanish) and `en` (English) sections
4. Use translation keys in components with `t("key_name")`

### 🚀 Next Steps

#### 1. Install Dependencies

```bash
cd promptemployee-landing
npm install
```

#### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

#### 3. Customize Content

**Contact Email:**

- Update email in `components/ui/contact-modal.tsx` (line 81)
- Update email in `components/footer.tsx` (line 38)
- Replace `info@promptemployee.com` with your actual email

**Company Information:**

- Update metadata in `app/layout.tsx` (lines 13-31)
- Add your actual company description and keywords

**Video:**

- Video is already embedded from Streamable
- To change: edit `components/hero-section.tsx` (line 49)

#### 4. Deploy

**Option 1: Vercel (Recommended)**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Option 2: Netlify**

```bash
npm run build
# Upload .next folder to Netlify
```

### 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### 📱 Testing Responsiveness

The landing page is designed to be mobile-first. Test on:

- Mobile: 375px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

### 🎯 SEO Checklist

✅ Meta tags configured
✅ Open Graph tags added
✅ Proper heading hierarchy
✅ Semantic HTML
✅ Fast loading times
✅ Mobile responsive
✅ Bilingual support

### 💡 Tips

1. **Colors**: To change red accent, update `app/globals.css` (lines 7-9)
2. **Font**: To change from Manrope, update `app/layout.tsx` (lines 2, 7-11)
3. **Icons**: Using Lucide React - browse at https://lucide.dev
4. **Translations**: All text in `lib/i18n.tsx` for easy updates

### 🎨 Color Palette

- **Primary Black**: #171717
- **Accent Red**: #ef4444
- **Red Hover**: #dc2626
- **Background White**: #ffffff
- **Text Gray**: #6b7280

### 🐛 Troubleshooting

**Issue: Port already in use**

```bash
# Kill process on port 3000 (Windows)
npx kill-port 3000
# Or use a different port
npm run dev -- -p 3001
```

**Issue: Module not found**

```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

**Issue: Styling not updating**

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### 📞 Support

For any issues or questions, refer to:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

**Ready to launch? Install dependencies, run the dev server, and customize!** 🚀

