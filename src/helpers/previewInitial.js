/*
https://moz.com/blog/meta-data-templates-123
https://www.metatags.org/seo-tips/design-tips/xml-sitemap/
https://gist.github.com/lancejpollard/1978404
https://github.com/kevinSuttle/html-meta-tags
https://gist.github.com/whitingx/3840905
https://ogp.me/
https://developers.facebook.com/docs/sharing/webmasters/
https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started
https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html
https://webdesign.tutsplus.com/tutorials/how-to-add-windows-tiles-to-your-website--cms-23099
https://yoast.com/rel-canonical/
http://www.html-5.com/metatags/
*/

export default function previewInintial({ recommend, ogAndFb, twitter, googlePlus, ios, windows, links }) {
	return `
<!DOCTYPE html>
<html lang="${recommend.lang}">

<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="${recommend.viewport}" />
  ${
		recommend.visible
			? `
  <!-- =================== RECOMMEND =================== -->
  <meta charset="${recommend.encoding}" />
  <title>${recommend.title}</title>
  <meta name="description" content="${recommend.description}" />
  <meta name="author" content="${recommend.author}" />
  <meta name="copyright" content="${recommend.copyright}" />
  <meta name="theme-color" content="${recommend.colorTheme}" />
  <meta name="color-scheme" content="${recommend.colorScheme}" />
    `
			: ''
	}${
		ogAndFb.visible
			? `
  <!-- ============= OPEN GRAPH & FACEBOOK ============= -->
  <meta property="og:title" content="${ogAndFb.title}" />
  <meta property="og:description" content="${ogAndFb.description}" />
  <meta property="og:image" content="${ogAndFb.image}" />
  <meta property="og:locale" content="${ogAndFb.locale}" />
  <meta property="og:site_name" content="${ogAndFb.siteName}" />
  <meta property="og:url" content="${ogAndFb.url}" />
  <meta property="og:type" content="${ogAndFb.type}" />
    `
			: ''
	}${
		twitter.visible
			? `
  <!-- ==================== TWITTER ==================== -->
  <meta name="twitter:title" content="${twitter.title}" />
  <meta name="twitter:description" content="${twitter.description}" />
  <meta name="twitter:image" content="${twitter.image}" />
  <meta name="twitter:image:alt" content="${twitter.imageAlt}" />
  <meta name="twitter:card" content="${twitter.card}" />
    `
			: ''
	}${
		googlePlus.visible
			? `
  <!-- ==================== GOOGLE + ==================== -->
  <meta itemprop="name" content="${googlePlus.title}" />
  <meta itemprop="description" content="${googlePlus.description}" />
  <meta itemprop="image" content="${googlePlus.image}" />
    `
			: ''
	}${
		ios.visible
			? `
  <!-- ====================== iOS ====================== -->
  <meta name="apple-mobile-web-app-capable" content="${ios.captable}" />
  <meta name="apple-mobile-web-app-status-bar-style" content="${ios.statusBarStyle}" />
    `
			: ''
	}${
		windows.visible
			? `
  <!-- ==================== Windows ==================== -->
  <meta name="msapplication-TileColor" content="${windows.color}" />
  <meta name="msapplication-TileImage" content="${windows.image}" />
    `
			: ''
	}${
		links.visible
			? `
  <!-- ===================== LINKS ===================== -->
  <link rel="apple-touch-icon" href="${links.appleTouchIcon}" />
  <link rel="apple-touch-startup-image" href="${links.appleTouchStartupImage}" />
  <link rel="canonical" href="${links.canonical}" />
  <link rel="manifest" href="${links.manifest}" />
  <link rel="shortcut icon" type="image/x-icon" href="${links.favicon}" />
  <link rel="sitemap" type="application/xml" title="Sitemap" href="${links.sitemap}" />
    `
			: ''
	}
</head>

<body>

</body>

</html>
`;
}
