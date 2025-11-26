# Google Search Console Setup Guide for Angeli Gardens

## Domain: www.angeligardens.co.uk

### Step 1: Verify Property Ownership

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Choose "URL prefix" and enter: `https://www.angeligardens.co.uk`
4. Verify ownership using one of these methods:
   - **HTML file upload** (recommended)
   - **HTML tag** (add to index.html)
   - **DNS record** (if you have domain access)
   - **Google Analytics** (if connected)

### Step 2: Submit Sitemap

1. Once verified, go to **Sitemaps** in the left menu
2. Enter: `sitemap.xml`
3. Click **Submit**
4. Wait for Google to process (usually within a few hours)

**Sitemap URL:** `https://www.angeligardens.co.uk/sitemap.xml`

### Step 3: Request Indexing for Homepage

1. Go to **URL Inspection** tool (top search bar)
2. Enter: `https://www.angeligardens.co.uk/`
3. Click **Test Live URL**
4. If it shows "URL is on Google" - great!
5. If not, click **Request Indexing**
6. Repeat for key pages:
   - `https://www.angeligardens.co.uk/services`
   - `https://www.angeligardens.co.uk/reviews`
   - `https://www.angeligardens.co.uk/contact`
   - `https://www.angeligardens.co.uk/areas/london`
   - `https://www.angeligardens.co.uk/areas/surrey`
   - `https://www.angeligardens.co.uk/areas/berkshire`

### Step 4: Verify robots.txt

**Current robots.txt location:** `https://www.angeligardens.co.uk/robots.txt`

**Expected content:**
```
User-agent: *
Allow: /

Sitemap: https://www.angeligardens.co.uk/sitemap.xml
```

**To check:**
1. Go to **Settings** > **robots.txt Tester** in Search Console
2. Verify it shows "Allowed" for all pages

### Step 5: Check for Crawl Errors

1. Go to **Coverage** report
2. Check for any errors (404s, server errors, etc.)
3. Fix any issues found
4. Request re-indexing after fixes

### Step 6: Monitor Indexing Status

1. Go to **Coverage** report
2. Check "Valid" pages - should show all 10 pages from sitemap
3. Monitor over next few days

### Step 7: Check Mobile Usability

1. Go to **Mobile Usability** report
2. Ensure all pages pass mobile-friendly test
3. Fix any issues found

### Step 8: Submit All Pages for Indexing

Use the **URL Inspection** tool to request indexing for:
- `/` (Home)
- `/about`
- `/services`
- `/portfolio`
- `/reviews`
- `/contact`
- `/faq`
- `/areas/london`
- `/areas/surrey`
- `/areas/berkshire`

### Important Notes for React SPA (Single Page Application)

Since this is a React SPA with client-side routing:

1. **Ensure server returns 200 status** for all routes
2. **Server should serve index.html** for all routes (not 404)
3. **Meta tags are in index.html** - Google should be able to read them
4. **JavaScript must be enabled** - Google can execute JavaScript, but it may take longer

### Troubleshooting

**If pages aren't indexing:**

1. Check server configuration - ensure all routes return index.html
2. Verify robots.txt is accessible
3. Check sitemap.xml is accessible
4. Ensure no "noindex" meta tags
5. Check for JavaScript errors in browser console
6. Use "Fetch as Google" tool in Search Console to see what Google sees

**If Search Console shows errors:**

1. **"Discovered - currently not indexed"** - Request indexing manually
2. **"Crawl anomaly"** - Check server logs, ensure site is accessible
3. **"Mobile usability issues"** - Fix responsive design issues
4. **"Page with redirect"** - Ensure canonical URLs are correct

### Expected Timeline

- **Initial crawl:** 1-3 days
- **Sitemap processing:** 1-7 days
- **Full indexing:** 1-2 weeks
- **Rankings appearing:** 2-4 weeks

### Quick Checklist

- [ ] Property verified in Search Console
- [ ] Sitemap submitted and processed
- [ ] Homepage requested for indexing
- [ ] robots.txt verified (allows crawling)
- [ ] All pages return 200 status
- [ ] No crawl errors in Coverage report
- [ ] Mobile usability passed
- [ ] Internal links added throughout site
- [ ] Meta tags present on all pages

### External Links to Build

To help with indexing, get links from:
1. Checkatrade profile (already linked)
2. Facebook page (already linked)
3. Local business directories
4. Industry associations
5. Local community websites

