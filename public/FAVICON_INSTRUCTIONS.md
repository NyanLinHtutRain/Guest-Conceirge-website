# How to Add Your Logo as Favicon

Your logo has been received! To make it appear in the browser tab next to your domain name, follow these steps:

## Steps:

1. **Save your logo image** (the red chat bubble) with these names in the `public` folder:
   - `favicon.ico` (16x16 or 32x32 pixels, .ico format)
   - `apple-icon.png` (180x180 pixels, for Apple devices)

2. **Quick way using online converter:**
   - Go to https://favicon.io/favicon-converter/
   - Upload your logo image
   - Download the generated favicon package
   - Extract and copy `favicon.ico` to the `public` folder
   - Rename one of the larger PNG files to `apple-icon.png` and copy to `public` folder

3. **The metadata has already been updated** in `app/layout.tsx` to reference these files.

4. **After adding the files**, commit and push:
   ```bash
   git add public/favicon.ico public/apple-icon.png
   git commit -m "Add HostFlow AI favicon"
   git push origin main
   ```

5. **Deploy to Vercel** - Your favicon will appear after the next deployment!

## File Structure:
```
public/
  ├── favicon.ico          (16x16 or 32x32)
  ├── apple-icon.png       (180x180)
  └── images/
```

Your logo will then appear in:
- Browser tabs
- Bookmarks
- Browser history
- Mobile home screen (when saved)
