(this["webpackJsonpmeta-tag-geterator"]=this["webpackJsonpmeta-tag-geterator"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,l){},,function(e,t,l){},function(e,t,l){},function(e,t,l){},function(e,t,l){},function(e,t,l){},,function(e,t,l){},function(e,t,l){},function(e,t,l){},function(e,t,l){},function(e,t,l){},function(e,t,l){},function(e,t,l){"use strict";l.r(t);var a=l(1),c=l.n(a),i=l(6),d=l.n(i),s=l(2),n=(l(12),l(0)),o=function(){return Object(n.jsx)("nav",{className:"navbar",children:Object(n.jsx)("ul",{className:"navbarLinks",children:Object(n.jsx)("li",{className:"navbarLink",children:Object(n.jsx)("img",{className:"navbarLinkImg",src:"/metaTagGenerator/assets/logo.png",alt:"Logo Meta Tag Generator"})})})})},u=(l(14),function(e){var t=e.section,l=e.isOpen,a=e.handlerClick,c=Object(s.a)(Object.entries(t)[0],2),i=c[0],d=c[1];return Object(n.jsxs)("details",{id:i,className:"Details",onClick:a,open:l,children:[Object(n.jsx)("summary",{className:"DetailsTitle",children:i}),Object(n.jsx)("form",{className:"formMeta",children:d.map((function(e){return e}))})]})}),r=l(3),v=c.a.createContext(null),m=(l(15),l(4)),p=function(e,t,l){var a={};Object.entries(e).forEach((function(e){var t=Object(s.a)(e,2),c=t[0],i=t[1],d=l.name.split("_"),n=Object(s.a)(d,2),o=n[0],u=n[1];a[c]=c===o?void 0!==u?Object(r.a)(Object(r.a)({},i),{},Object(m.a)({},u,l.value)):Object(r.a)(Object(r.a)({},i),{},{visible:!i.visible}):i})),t(a)},b=function(e){var t=e.defaultValue,l=e.inputType,c=e.labelText,i=e.name,d=e.placeholder,o=Object(a.useContext)(v),u=o.dataMetaTags,r=o.setDataMetaTags,m=Object(a.useState)(t),b=Object(s.a)(m,2),j=b[0],h=b[1],x=Object(a.useState)(0),g=Object(s.a)(x,2),O=g[0],T=g[1];return Object(n.jsxs)("div",{className:"input",children:[Object(n.jsx)("label",{className:"inputLabel",children:c}),Object(n.jsxs)("small",{className:"inputCounter",children:[O," characters"]}),Object(n.jsx)("input",{className:"inputBox",autoComplete:"off",type:l,name:i,value:j,placeholder:d,onChange:function(e){var t=e.target;p(u,r,t),h(t.value),T(t.value.length)}})]})};b.defaultProps={checked:!1,defaultValue:"",placeholder:""};var j=b,h=(l(16),function(e){var t=e.labelText,l=e.selectData,c=e.name,i=Object(a.useState)(l.find((function(e){return e.selected&&e}))),d=Object(s.a)(i,2),o=d[0],u=d[1],r=Object(a.useContext)(v),m=r.dataMetaTags,b=r.setDataMetaTags;return Object(n.jsxs)("div",{className:"select",children:[Object(n.jsx)("label",{className:"selectLabel",children:t}),Object(n.jsx)("select",{className:"selectBox",name:c,value:o.value,onChange:function(e){var t=e.target;p(m,b,t),u(t.value)},children:l.map((function(e){var t=e.id,l=e.value;return Object(n.jsx)("option",{className:"selectOption",value:l,children:l},t+"-"+l)}))})]})}),x=[{id:1,value:"af-ZA",selected:!1},{id:2,value:"af-ZA",selected:!1},{id:3,value:"ar-SA",selected:!1},{id:4,value:"ar-AE",selected:!1},{id:5,value:"ar-BH",selected:!1},{id:6,value:"ar-DZ",selected:!1},{id:7,value:"ar-EG",selected:!1},{id:8,value:"ar-IQ",selected:!1},{id:9,value:"ar-JO",selected:!1},{id:10,value:"ar-KW",selected:!1},{id:11,value:"ar-LB",selected:!1},{id:12,value:"ar-LY",selected:!1},{id:13,value:"ar-MA",selected:!1},{id:14,value:"ar-OM",selected:!1},{id:15,value:"ar-QA",selected:!1},{id:16,value:"ar-SA",selected:!1},{id:17,value:"ar-SY",selected:!1},{id:18,value:"ar-TN",selected:!1},{id:19,value:"ar-YE",selected:!1},{id:20,value:"az-Latn-AZ",selected:!1},{id:21,value:"az-Cyrl-AZ",selected:!1},{id:22,value:"az-Latn-AZ",selected:!1},{id:23,value:"be-BY",selected:!1},{id:24,value:"be-BY",selected:!1},{id:25,value:"bg-BG",selected:!1},{id:26,value:"bg-BG",selected:!1},{id:27,value:"bs-Latn-BA",selected:!1},{id:28,value:"ca-ES",selected:!1},{id:29,value:"ca-ES",selected:!1},{id:30,value:"cs-CZ",selected:!1},{id:31,value:"cs-CZ",selected:!1},{id:32,value:"cy-GB",selected:!1},{id:33,value:"da-DK",selected:!1},{id:34,value:"da-DK",selected:!1},{id:35,value:"de-DE",selected:!1},{id:36,value:"de-AT",selected:!1},{id:37,value:"de-DE",selected:!1},{id:38,value:"de-CH",selected:!1},{id:39,value:"de-LI",selected:!1},{id:40,value:"de-LU",selected:!1},{id:41,value:"dv-MV",selected:!1},{id:42,value:"dv-MV",selected:!1},{id:43,value:"el-GR",selected:!1},{id:44,value:"el-GR",selected:!1},{id:45,value:"en-US",selected:!0},{id:46,value:"en-029",selected:!1},{id:47,value:"en-AU",selected:!1},{id:48,value:"en-BZ",selected:!1},{id:49,value:"en-CA",selected:!1},{id:50,value:"en-GB",selected:!1},{id:51,value:"en-IE",selected:!1},{id:52,value:"en-JM",selected:!1},{id:53,value:"en-NZ",selected:!1},{id:54,value:"en-PH",selected:!1},{id:55,value:"en-TT",selected:!1},{id:56,value:"en-US",selected:!1},{id:57,value:"en-ZA",selected:!1},{id:58,value:"en-ZW",selected:!1},{id:59,value:"es-ES",selected:!1},{id:60,value:"es-AR",selected:!1},{id:61,value:"es-BO",selected:!1},{id:62,value:"es-CL",selected:!1},{id:63,value:"es-CO",selected:!1},{id:64,value:"es-CR",selected:!1},{id:65,value:"es-DO",selected:!1},{id:66,value:"es-EC",selected:!1},{id:67,value:"es-ES",selected:!1},{id:68,value:"es-GT",selected:!1},{id:69,value:"es-HN",selected:!1},{id:70,value:"es-MX",selected:!1},{id:71,value:"es-NI",selected:!1},{id:72,value:"es-PA",selected:!1},{id:73,value:"es-PE",selected:!1},{id:74,value:"es-PR",selected:!1},{id:75,value:"es-PY",selected:!1},{id:76,value:"es-SV",selected:!1},{id:77,value:"es-UY",selected:!1},{id:78,value:"es-VE",selected:!1},{id:79,value:"et-EE",selected:!1},{id:80,value:"et-EE",selected:!1},{id:81,value:"eu-ES",selected:!1},{id:82,value:"eu-ES",selected:!1},{id:83,value:"fa-IR",selected:!1},{id:84,value:"fa-IR",selected:!1},{id:85,value:"fi-FI",selected:!1},{id:86,value:"fi-FI",selected:!1},{id:87,value:"fo-FO",selected:!1},{id:88,value:"fo-FO",selected:!1},{id:89,value:"fr-FR",selected:!1},{id:90,value:"fr-BE",selected:!1},{id:91,value:"fr-CA",selected:!1},{id:92,value:"fr-FR",selected:!1},{id:93,value:"fr-CH",selected:!1},{id:94,value:"fr-LU",selected:!1},{id:95,value:"fr-MC",selected:!1},{id:96,value:"gl-ES",selected:!1},{id:97,value:"gl-ES",selected:!1},{id:98,value:"gu-IN",selected:!1},{id:99,value:"gu-IN",selected:!1},{id:100,value:"he-IL",selected:!1},{id:101,value:"he-IL",selected:!1},{id:102,value:"hi-IN",selected:!1},{id:103,value:"hi-IN",selected:!1},{id:104,value:"hr-HR",selected:!1},{id:105,value:"hr-BA",selected:!1},{id:106,value:"hr-HR",selected:!1},{id:107,value:"hu-HU",selected:!1},{id:108,value:"hu-HU",selected:!1},{id:109,value:"hy-AM",selected:!1},{id:110,value:"hy-AM",selected:!1},{id:111,value:"id-ID",selected:!1},{id:112,value:"id-ID",selected:!1},{id:113,value:"is-IS",selected:!1},{id:114,value:"is-IS",selected:!1},{id:115,value:"it-IT",selected:!1},{id:116,value:"it-CH",selected:!1},{id:117,value:"it-IT",selected:!1},{id:118,value:"ja-JP",selected:!1},{id:119,value:"ja-JP",selected:!1},{id:120,value:"ka-GE",selected:!1},{id:121,value:"ka-GE",selected:!1},{id:122,value:"kk-KZ",selected:!1},{id:123,value:"kk-KZ",selected:!1},{id:124,value:"kn-IN",selected:!1},{id:125,value:"kn-IN",selected:!1},{id:126,value:"ko-KR",selected:!1},{id:127,value:"kok-IN",selected:!1},{id:128,value:"kok-IN",selected:!1},{id:129,value:"ko-KR",selected:!1},{id:130,value:"ky-KG",selected:!1},{id:131,value:"ky-KG",selected:!1},{id:132,value:"lt-LT",selected:!1},{id:133,value:"lt-LT",selected:!1},{id:134,value:"lv-LV",selected:!1},{id:135,value:"lv-LV",selected:!1},{id:136,value:"mi-NZ",selected:!1},{id:137,value:"mk-MK",selected:!1},{id:138,value:"mk-MK",selected:!1},{id:139,value:"mn-MN",selected:!1},{id:140,value:"mn-MN",selected:!1},{id:141,value:"mr-IN",selected:!1},{id:142,value:"mr-IN",selected:!1},{id:143,value:"ms-MY",selected:!1},{id:144,value:"ms-BN",selected:!1},{id:145,value:"ms-MY",selected:!1},{id:146,value:"mt-MT",selected:!1},{id:147,value:"nb-NO",selected:!1},{id:148,value:"nl-NL",selected:!1},{id:149,value:"nl-BE",selected:!1},{id:150,value:"nl-NL",selected:!1},{id:151,value:"nn-NO",selected:!1},{id:152,value:"nb-NO",selected:!1},{id:153,value:"ns-ZA",selected:!1},{id:154,value:"pa-IN",selected:!1},{id:155,value:"pa-IN",selected:!1},{id:156,value:"pl-PL",selected:!1},{id:157,value:"pl-PL",selected:!1},{id:158,value:"pt-BR",selected:!1},{id:159,value:"pt-BR",selected:!1},{id:160,value:"pt-PT",selected:!1},{id:161,value:"quz-BO",selected:!1},{id:162,value:"quz-EC",selected:!1},{id:163,value:"quz-PE",selected:!1},{id:164,value:"ro-RO",selected:!1},{id:165,value:"ro-RO",selected:!1},{id:166,value:"ru-RU",selected:!1},{id:167,value:"ru-RU",selected:!1},{id:168,value:"sa-IN",selected:!1},{id:169,value:"sa-IN",selected:!1},{id:170,value:"se-FI",selected:!1},{id:171,value:"se-NO",selected:!1},{id:172,value:"se-SE",selected:!1},{id:173,value:"sk-SK",selected:!1},{id:174,value:"sk-SK",selected:!1},{id:175,value:"sl-SI",selected:!1},{id:176,value:"sl-SI",selected:!1},{id:177,value:"sma-NO",selected:!1},{id:178,value:"sma-SE",selected:!1},{id:179,value:"smj-NO",selected:!1},{id:180,value:"smj-SE",selected:!1},{id:181,value:"smn-FI",selected:!1},{id:182,value:"sms-FI",selected:!1},{id:183,value:"sq-AL",selected:!1},{id:184,value:"sq-AL",selected:!1},{id:185,value:"sr-Latn-CS",selected:!1},{id:186,value:"sr-Cyrl-BA",selected:!1},{id:187,value:"sr-Cyrl-CS",selected:!1},{id:188,value:"sr-Latn-BA",selected:!1},{id:189,value:"sr-Latn-CS",selected:!1},{id:190,value:"sv-SE",selected:!1},{id:191,value:"sv-FI",selected:!1},{id:192,value:"sv-SE",selected:!1},{id:193,value:"sw-KE",selected:!1},{id:194,value:"sw-KE",selected:!1},{id:195,value:"syr-SY",selected:!1},{id:196,value:"syr-SY",selected:!1},{id:197,value:"ta-IN",selected:!1},{id:198,value:"ta-IN",selected:!1},{id:199,value:"te-IN",selected:!1},{id:200,value:"te-IN",selected:!1},{id:201,value:"th-TH",selected:!1},{id:202,value:"th-TH",selected:!1},{id:203,value:"tn-ZA",selected:!1},{id:204,value:"tr-TR",selected:!1},{id:205,value:"tr-TR",selected:!1},{id:206,value:"tt-RU",selected:!1},{id:207,value:"tt-RU",selected:!1},{id:208,value:"uk-UA",selected:!1},{id:209,value:"uk-UA",selected:!1},{id:210,value:"ur-PK",selected:!1},{id:211,value:"ur-PK",selected:!1},{id:212,value:"uz-Latn-UZ",selected:!1},{id:213,value:"uz-Cyrl-UZ",selected:!1},{id:214,value:"uz-Latn-UZ",selected:!1},{id:215,value:"vi-VN",selected:!1},{id:216,value:"vi-VN",selected:!1},{id:217,value:"xh-ZA",selected:!1},{id:218,value:"zh-CN",selected:!1},{id:219,value:"zh-HK",selected:!1},{id:220,value:"(none)",selected:!1},{id:221,value:"(none)",selected:!1},{id:222,value:"zh-MO",selected:!1},{id:223,value:"zh-SG",selected:!1},{id:224,value:"zh-TW",selected:!1},{id:225,value:"zu-ZA",selected:!1}],g=[{Recommend:[Object(n.jsx)(h,{labelText:"Language",name:"recommend_lang",selectData:x},"recommend_lang"),Object(n.jsx)(h,{labelText:"Encoding",name:"recommend_encoding",selectData:[{id:0,value:"big5",selected:!1},{id:1,value:"euc-kr",selected:!1},{id:2,value:"iso-8859-1",selected:!1},{id:3,value:"iso-8859-2",selected:!1},{id:4,value:"iso-8859-3",selected:!1},{id:5,value:"iso-8859-4",selected:!1},{id:6,value:"iso-8859-5",selected:!1},{id:7,value:"iso-8859-6",selected:!1},{id:8,value:"iso-8859-7",selected:!1},{id:9,value:"iso-8859-8",selected:!1},{id:10,value:"koi8-r",selected:!1},{id:11,value:"shift-jis",selected:!1},{id:12,value:"x-euc",selected:!1},{id:13,value:"utf-8",selected:!0},{id:14,value:"windows-1250",selected:!1},{id:15,value:"windows-1251",selected:!1},{id:16,value:"windows-1252",selected:!1},{id:17,value:"windows-1253",selected:!1},{id:18,value:"windows-1254",selected:!1},{id:19,value:"windows-1255",selected:!1},{id:20,value:"windows-1256",selected:!1},{id:21,value:"windows-1257",selected:!1},{id:22,value:"windows-1258",selected:!1},{id:23,value:"windows-874",selected:!1}]},"recommend_encoding"),Object(n.jsx)(j,{labelText:"Title",name:"recommend_title",inputType:"text",placeholder:"Maximum length 50 characters"},"recommend_title"),Object(n.jsx)(j,{labelText:"Description",name:"recommend_description",inputType:"text",placeholder:"Maximum length 150 characters"},"recommend_description"),Object(n.jsx)(j,{labelText:"Author",name:"recommend_author",inputType:"text",placeholder:'Name and/or Email"'},"recommend_author"),Object(n.jsx)(j,{labelText:"Copyright",name:"recommend_copyright",inputType:"text",placeholder:"Company Name"},"recommend_copyright"),Object(n.jsx)(j,{labelText:"Color Theme",name:"recommend_colorTheme",inputType:"color"},"recommend_colorTheme"),Object(n.jsx)(h,{labelText:"Color Scheme",name:"recommend_colorScheme",selectData:[{id:0,value:"normal",selected:!0},{id:1,value:"light",selected:!1},{id:2,value:"dark",selected:!1},{id:3,value:"light dark",selected:!1}]},"recommend_colorScheme")]},{"Open Graph & Facebook":[Object(n.jsx)(j,{labelText:"Title",name:"ogAndFb_title",inputType:"text",placeholder:"The Name or Title"},"ogAndFb_title"),Object(n.jsx)(j,{labelText:"Description",name:"ogAndFb_description",inputType:"text",placeholder:"This is the page description"},"ogAndFb_description"),Object(n.jsx)(j,{labelText:"Image",name:"ogAndFb_image",inputType:"text",placeholder:"../path/to/image.png"},"ogAndFb_image"),Object(n.jsx)(h,{labelText:"Locale",name:"ogAndFb_locale",selectData:x.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{value:e.value.replaceAll("-","_")})}))},"ogAndFb_locale"),Object(n.jsx)(j,{labelText:"Site Name",name:"ogAndFb_siteName",inputType:"text",placeholder:"The Web Site Name"},"ogAndFb_siteName"),Object(n.jsx)(j,{labelText:"Url",name:"ogAndFb_url",inputType:"text",placeholder:"https://www.imdb.com/access/to/post"},"ogAndFb_url"),Object(n.jsx)(j,{labelText:"Type",name:"ogAndFb_type",inputType:"text",placeholder:""},"ogAndFb_type")]},{Twitter:[Object(n.jsx)(j,{labelText:"Title",name:"twitter_title",inputType:"text",placeholder:"The Name or Title"},"twitter_title"),Object(n.jsx)(j,{labelText:"Description",name:"twitter_description",inputType:"text",placeholder:"This is the page description"},"twitter_description"),Object(n.jsx)(j,{labelText:"Image",name:"twitter_image",inputType:"text",placeholder:"../path/to/image.jpg"},"twitter_image"),Object(n.jsx)(j,{labelText:"Imagen Alt",name:"twitter_imageAlt",inputType:"text",placeholder:"Alt text for image"},"twitter_imageAlt"),Object(n.jsx)(h,{labelText:"Card",name:"twitter_card",selectData:[{id:0,value:"summary",selected:!0},{id:1,value:"summary_large_image",selected:!1},{id:2,value:"app",selected:!1},{id:3,value:"player",selected:!1}]},"twitter_card")]},{"Google +":[Object(n.jsx)(j,{labelText:"Title",name:"googlePlus_title",inputType:"text",placeholder:"The Name or Title"},"googlePlus_title"),Object(n.jsx)(j,{labelText:"Description",name:"googlePlus_description",inputType:"text",placeholder:"This is the page description"},"googlePlus_description"),Object(n.jsx)(j,{labelText:"Image",name:"googlePlus_image",inputType:"text",placeholder:"../path/to/image.jpg"},"googlePlus_image")]},{iOS:[Object(n.jsx)(h,{labelText:"Captable",name:"ios_captable",selectData:[{id:0,value:"No",selected:!1},{id:1,value:"Yes",selected:!0}]},"ios_captable"),Object(n.jsx)(h,{labelText:"Status Bar Style",name:"ios_statusBarStyle",selectData:[{id:0,value:"Default",selected:!0},{id:1,value:"black",selected:!1},{id:2,value:"black-translucent",selected:!1}]},"ios_statusBarStyle")]},{Windows:[Object(n.jsx)(j,{labelText:"Color",name:"windows_color",inputType:"color"},"windows_color"),Object(n.jsx)(j,{labelText:"Image",name:"windows_image",inputType:"text",placeholder:"../path/to/image.png"},"windows_image")]},{Links:[Object(n.jsx)(j,{labelText:"Apple Icon",name:"links_appleTouchIcon",inputType:"text",placeholder:"../path/to/image.png"},"links_appleTouchIcon"),Object(n.jsx)(j,{labelText:"Apple Splash Image",name:"links_appleTouchStartupImage",inputType:"text",placeholder:"../path/to/image.png"},"links_appleTouchStartupImage"),Object(n.jsx)(j,{labelText:"Canonical",name:"links_canonical",inputType:"text",placeholder:"https://www.twitter.com/your/link/most/important"},"links_canonical"),Object(n.jsx)(j,{labelText:"Manifest",name:"links_manifest",inputType:"text",placeholder:"../path/to/manifest.json"},"links_manifest"),Object(n.jsx)(j,{labelText:"Favicon",name:"links_favicon",inputType:"text",placeholder:"../path/to/image.[ico|png]"},"links_favicon"),Object(n.jsx)(j,{labelText:"Site Map",name:"links_sitemap",inputType:"text",placeholder:"../path/to/sitemap.xml"},"links_sitemap")]}],O=(l(17),function(e){var t=e.checked,l=e.labelText,c=e.name,i=Object(a.useState)(t),d=Object(s.a)(i,2),o=d[0],u=d[1],r=Object(a.useContext)(v),m=r.dataMetaTags,b=r.setDataMetaTags;return Object(n.jsxs)("div",{className:"input",children:[Object(n.jsx)("label",{className:"inputLabel",children:l}),Object(n.jsx)("input",{type:"checkbox",className:"inputBox",name:c,value:o,checked:o,onChange:function(e){var t=e.target;p(m,b,t),u(!o)}})]})});O.defaultProps={checked:!1,name:"",labelText:""};var T=O,f=[Object(n.jsx)(T,{labelText:"Recommend",name:"recommend",checked:!0},"recommend"),Object(n.jsx)(T,{labelText:"Open Graph & Facebook",name:"ogAndFb"},"ogAndFb"),Object(n.jsx)(T,{labelText:"Twitter",name:"twitter"},"twitter"),Object(n.jsx)(T,{labelText:"Google +",name:"googlePlus"},"googlePlus"),Object(n.jsx)(T,{labelText:"iOS",name:"ios"},"ios"),Object(n.jsx)(T,{labelText:"Windows",name:"windows"},"windows"),Object(n.jsx)(T,{labelText:"Links",name:"links"},"links")],y=(l(18),function(){var e=Object(a.useState)({Recommend:!0,"Open Graph & Facebook":!1,Twitter:!1,"Google +":!1,iOS:!1,Windows:!1,Links:!1}),t=Object(s.a)(e,2),l=t[0],c=t[1],i=function(e){if(e.target.matches("summary")){e.preventDefault();var t={};Object.entries(l).forEach((function(l){var a=Object(s.a)(l,2),c=a[0],i=a[1];return c===e.target.parentElement.id?t[c]=!i:t[c]=!1})),c(t)}};return Object(n.jsxs)("section",{className:"form",children:[Object(n.jsxs)("section",{className:"checkMetaTags",children:[Object(n.jsx)("header",{className:"checkMetaTagsHeader",children:Object(n.jsx)("p",{className:"checkMetaTagsTitle",children:"Mark the sections you want to generate"})}),Object(n.jsx)("div",{className:"checkMetaTagsSections",children:f.map((function(e){return e}))})]}),g.map((function(e){return Object(n.jsx)(u,{section:e,isOpen:l[Object.keys(e)[0]],handlerClick:i},Object.keys(e).toString())}))]})}),w=l(7),N=l.n(w);l(20),l(21);var k=function(){var e=function(e){var t=e.recommend,l=e.ogAndFb,a=e.twitter,c=e.googlePlus,i=e.ios,d=e.windows,s=e.links;return'\n<!DOCTYPE html>\n<html lang="'.concat(t.lang,'">\n\n<head>\n  <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n  <meta name="viewport" content="').concat(t.viewport,'" />\n  ').concat(t.visible?'\n  \x3c!-- =================== RECOMMEND =================== --\x3e\n  <meta charset="'.concat(t.encoding,'" />\n  <title>').concat(t.title,'</title>\n  <meta name="description" content="').concat(t.description,'" />\n  <meta name="author" content="').concat(t.author,'" />\n  <meta name="copyright" content="').concat(t.copyright,'" />\n  <meta name="theme-color" content="').concat(t.colorTheme,'" />\n  <meta name="color-scheme" content="').concat(t.colorScheme,'" />\n    '):"").concat(l.visible?'\n  \x3c!-- ============= OPEN GRAPH & FACEBOOK ============= --\x3e\n  <meta property="og:title" content="'.concat(l.title,'" />\n  <meta property="og:description" content="').concat(l.description,'" />\n  <meta property="og:image" content="').concat(l.image,'" />\n  <meta property="og:locale" content="').concat(l.locale,'" />\n  <meta property="og:site_name" content="').concat(l.siteName,'" />\n  <meta property="og:url" content="').concat(l.url,'" />\n  <meta property="og:type" content="').concat(l.type,'" />\n    '):"").concat(a.visible?'\n  \x3c!-- ==================== TWITTER ==================== --\x3e\n  <meta name="twitter:title" content="'.concat(a.title,'" />\n  <meta name="twitter:description" content="').concat(a.description,'" />\n  <meta name="twitter:image" content="').concat(a.image,'" />\n  <meta name="twitter:image:alt" content="').concat(a.imageAlt,'" />\n  <meta name="twitter:card" content="').concat(a.card,'" />\n    '):"").concat(c.visible?'\n  \x3c!-- ==================== GOOGLE + ==================== --\x3e\n  <meta itemprop="name" content="'.concat(c.title,'" />\n  <meta itemprop="description" content="').concat(c.description,'" />\n  <meta itemprop="image" content="').concat(c.image,'" />\n    '):"").concat(i.visible?'\n  \x3c!-- ====================== iOS ====================== --\x3e\n  <meta name="apple-mobile-web-app-capable" content="'.concat(i.captable,'" />\n  <meta name="apple-mobile-web-app-status-bar-style" content="').concat(i.statusBarStyle,'" />\n    '):"").concat(d.visible?'\n  \x3c!-- ==================== Windows ==================== --\x3e\n  <meta name="msapplication-TileColor" content="'.concat(d.color,'" />\n  <meta name="msapplication-TileImage" content="').concat(d.image,'" />\n    '):"").concat(s.visible?'\n  \x3c!-- ===================== LINKS ===================== --\x3e\n  <link rel="apple-touch-icon" href="'.concat(s.appleTouchIcon,'" />\n  <link rel="apple-touch-startup-image" href="').concat(s.appleTouchStartupImage,'" />\n  <link rel="canonical" href="').concat(s.canonical,'" />\n  <link rel="manifest" href="').concat(s.manifest,'" />\n  <link rel="shortcut icon" type="image/x-icon" href="').concat(s.favicon,'" />\n  <link rel="sitemap" type="application/xml" title="Sitemap" href="').concat(s.sitemap,'" />\n    '):"","\n</head>\n\n<body>\n\n</body>\n\n</html>\n")}(Object(a.useContext)(v).dataMetaTags);return Object(a.useEffect)((function(){return N.a.highlightAll()}),[e]),Object(n.jsx)("div",{className:"previewCode",children:Object(n.jsx)("pre",{className:"previewCodePre",children:Object(n.jsx)("code",{className:"previewCodeCode language-html white-space",children:e})})})},_=(l(22),function(e){var t=e.bgColor,l=e.text,a=e.textColor,c=e.type,i=e.onClick,d={backgroundColor:t,color:a};return Object(n.jsx)("button",{className:"button",type:c,style:d,onClick:i,children:l})}),S=(l(23),function(){return Object(n.jsxs)("section",{className:"output",children:[Object(n.jsx)(_,{bgColor:"#FC0474",text:"Copy",textColor:"#FFFFFF",type:"button",onClick:function(){try{if(!navigator.clipboard)return alert("The copy function isn't support by your browser :(");var e=document.querySelector(".previewCodeCode.language-html");navigator.clipboard.writeText(e.textContent).then(alert("Copied to the clipboard :D"))}catch(t){alert("There was an error copying to the clipboard :'(")}}}),Object(n.jsx)(k,{})]})}),C=(l(24),function(){return Object(n.jsxs)("footer",{className:"footer",children:[Object(n.jsx)("img",{src:"./assets/logoFooter.svg",alt:"logo Leonel",className:"footer__logo"}),Object(n.jsx)("p",{className:"footer__text",children:" Leonel Espinoza \xa9 2021"})]})}),A={recommend:{visible:!0,lang:"en-US",encoding:"utf-8",title:"",viewport:"width=device-width, initial-scale=1, maximum-scale=2",description:"",copyright:"",author:"",colorTheme:"",colorScheme:""},ogAndFb:{visible:!1,title:"",description:"",image:"",locale:"en_US",siteName:"",url:"",type:"website"},twitter:{visible:!1,title:"",description:"",image:"",imageAlt:"",card:"summary"},googlePlus:{visible:!1,title:"",description:"",image:""},ios:{visible:!1,captable:"yes",statusBarStyle:"default"},windows:{visible:!1,color:"",image:""},links:{visible:!1,appleTouchIcon:"",appleTouchStartupImage:"",canonical:"",manifest:"",favicon:"",sitemap:""}},I=(l(25),function(){var e=Object(a.useState)(A),t=Object(s.a)(e,2),l=t[0],c=t[1];return Object(n.jsxs)(v.Provider,{value:{dataMetaTags:l,setDataMetaTags:c},children:[Object(n.jsx)(o,{}),Object(n.jsxs)("main",{className:"index",children:[Object(n.jsx)(y,{}),Object(n.jsx)(S,{})]}),Object(n.jsx)(C,{})]})});d.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(I,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.83f6afae.chunk.js.map