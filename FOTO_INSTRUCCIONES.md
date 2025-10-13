# 📸 Instructions for Adding Your Professional Photo

## 🎯 How to add your photo to the portfolio

### Step 1: Prepare the image
1. **Format**: JPG, PNG or WebP
2. **Recommended size**: 400x400 pixels (minimum)
3. **Quality**: High resolution for crisp display
4. **Style**: Professional photo, preferably neutral background

### Step 2: Name the file
- Rename your photo as: `image.png`
- Make sure it's in PNG format

### Step 3: Place in the correct folder
```
PortafolioDavid/
├── public/
│   ├── image.png  ← Your photo goes here
│   └── vite.svg
```

**Note:** Your photo will appear centered on the page for optimal visual balance.

### Step 4: Verify
1. Run `npm run dev`
2. Go to `http://localhost:3000`
3. Your photo should appear in the Hero section

---

## 🎨 Alternatives if you don't have a photo

If you don't have a professional photo ready, the portfolio will automatically show a placeholder with an emoji 👨‍💻 until you add your photo.

---

## 📱 Mobile optimization

The photo automatically adapts to different screen sizes:
- **Desktop**: 300x300px
- **Mobile**: 250x250px

---

## 🔧 Additional customization

If you want to change the filename or path, edit in `src/components/Hero.jsx`:

```jsx
<img 
  src="/your-filename.png"  // Change here
  alt="David Herrera - Full-Stack Developer"
  className="hero-photo"
/>
```

---

## 💡 Tips for a good photo

- **Lighting**: Good natural or studio lighting
- **Background**: Neutral (white, light gray, or blurred)
- **Expression**: Professional and confident smile
- **Clothing**: Formal or business casual
- **Focus**: Make sure your face is well focused

---

**Ready! Your professional photo will make your portfolio look even more impressive! 📸✨**
