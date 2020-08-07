![](headerProject_t05.png)

# Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

> - How to create an HTML5 form
> - How to choose the right input type
> - How to constrain a form field with regular expressions
> - How to style inputs for invalid, valid, and required fields
> - How to build a a comment form
> - How to build a simple search form
> - How to create usable and accessible forms

# Requirements

> - A README.md file at the root of the folder of the project is mandatory
> - Your code should be W3C compliant and validate with W3C-Validator

# Tasks

**0. basic comment structure**
File: [01-article.html](01-article.html/)
File: [01-styles.css](01-styles.css/)
## 00-article.html
```sh
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <title>Article - Techium</title>
    <meta name="description" content="Description of the page less than 150 characters">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="icon" type="image/png" href="/favicon.png">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Raleway:700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="00-styles.css">
  </head>
  <body>
    <!– Header –>
    <header class="header" data-section-theme="dark">
      <div class="container">
        <div class="header-container">
          <div class="header-logo">
            <a href="/">
              <img src="images/logo-white.png" alt="Techium logo" width="160" height="40">
            </a>
          </div>
          <nav class="navbar-menu">
            <ul class="nav">
              <li class="nav-item">
                <a href="/" class="nav-link">Home</a>
              </li>
              <li class="nav-item">
                <a href="#services" class="nav-link">Services</a>
              </li>
              <li class="nav-item">
                <a href="#works" class="nav-link">Works</a>
              </li>
              <li class="nav-item">
                <a href="#about" class="nav-link">About</a>
              </li>
              <li class="nav-item">
                <a href="#latest_news" class="nav-link">Latest news</a>
              </li>
              <li class="nav-item">
                <a href="#testimonials" class="nav-link">Testimonials</a>
              </li>
              <li class="nav-item">
                <a href="#contact" class="nav-link">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <!– Main –>
    <main>
      <!– Hero section –>
      <header class="section-hero hero-article" data-section-theme="dark" style="background-image: url('images/pic-article-02.jpg')">
        <div class="container">
          <div class="section-body">
            <section class="section-inner">
              <span class="section-category">Digital Life</span>
              <h1 class="section-title">Ut alios omittam, hunc appello, quem ille unum secutus est.</h1>
            </section>
          </div>
        </div>
      </header>
      <div class="main-article">
        <div class="container">
          <div class="post">
            <article class="post-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum mihi Piso: Quid ergo? Tum ille: Ain tandem? Non autem hoc: igitur ne illud quidem. Sed quod proximum fuit non vidit. Nos commodius agimus. An nisi populari fama?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed haec omittamus; <b>Hoc Hieronymus summum bonum esse dixit.</b> Duo Reges: constructio interrete.</p>
              <h2>Prioris generis est docilitas, memoria</h2>
              <ol>
                <li>Nec enim, dum metuit, iustus est, et certe, si metuere destiterit, non erit;</li>
                <li>Quid enim de amicitia statueris utilitatis causa expetenda vides.</li>
              </ol>
              <p>Morbi pharetra congue ante ac tincidunt. Donec euismod eu mauris nec laoreet. Praesent id sodales ipsum. Aliquam erat volutpat. Ut porta sem eget libero faucibus, eget convallis nisi finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum accumsan euismod nunc quis viverra.</p>
              <figure>
                <img src="images/the-honest-company-j69c0Q650Hw-unsplash.jpg" alt="Glasses, baby converse shoes, black bag, wipper on a dresser with a open drawer" width="620" height="350">
                <figcaption class="img-caption">Pugnant Stoici cum Peripateticis. Prioris generis est docilitas</figcaption>
              </figure>
              <p>Quare conare, quaeso. Dici enim nihil potest verius. Primum divisit ineleganter; Suam denique cuique naturam esse ad vivendum ducem.</p>
              <blockquote cite="https://www.holbertonschool.com/">
                <p>Ego autem tibi, Piso, assentior usu hoc venire, ut acrius aliquanto et attentius de claris viris locorum admonitu cogitemus.</p>
              </blockquote>
              <p>Omnia contraria, quos etiam insanos esse vultis. Tibi hoc incredibile, quod beatissimum.</p>
              <h2>Piso igitur hoc modo, vir optimus tuique, ut scis, amantissimus.</h2>
              <p><a href="http://loripsum.net/" target="_blank" rel="noopener">Apparet statim, quae sint officia, quae actiones.</a> Quae in controversiam veniunt, de iis, si placet, disseramus.</p>
              <ul>
                <li>Tubulum fuisse, qua illum, cuius is condemnatus est rogatione, P.</li>
                <li>Quis est autem dignus nomine hominis, qui unum diem totum velit esse in genere isto voluptatis?</li>
                <li>Sed in rebus apertissimis nimium longi sumus.</li>
              </ul>
              <p>Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant. Atqui, inquam, Cato, si istud optinueris, traducas me ad te totum licebit. Nemo nostrum istius generis asotos iucunde putat vivere. Res enim se praeclare habebat, et quidem in utraque parte. Qui autem esse poteris, nisi te amor ipse ceperit? Ita fit cum gravior, tum etiam splendidior oratio. De vacuitate doloris eadem sententia erit. Sin tantum modo ad indicia veteris memoriae cognoscenda, curiosorum.</p>
            </article>
            <!– Aside section –>
            <aside class="post-aside">
              <div class="post-meta">
                <ul class="post-meta-list row">
                  <li class="post-meta-author">
                    <strong>Written by:</strong>
                    <a href="#" rel="author">William Attaway</a>
                  </li>
                  <li class="post-meta-date">
                    <strong>Posted on:</strong>
                    <time datetime="2019-10">October 2019</time>
                  </li>
                  <li class="post-meta-tag">
                    <strong>Tags:</strong>
                    <ul class="tag-list">
                      <li>
                        <a href="#" rel="tag">Web Design</a>
                      </li>
                      <li>
                        <a href="#" rel="tag">UX</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="post-share">
                <ul class="social nav">
                  <li class="social-item nav-item">
                    <a href="#" class="social-link">
                      <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                        <title>
                          Facebook icon
                        </title>
                        <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"/>
                      </svg>
                    </a>
                  </li>
                  <li class="social-item nav-item">
                    <a href="#" class="social-link">
                      <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                        <title>
                          Twitter icon
                        </title>
                        <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"/>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
    <!– Footer –>
    <footer class="footer" data-section-theme="dark">
      <div  class="container">
        <div class="row">
          <div class="col-1-2">
            <img src="images/logo-white.png" alt="Techium logo" width="160" height="40">
            <address class="footer-address">
              234 Washington Street<br>
              Urbana, Illinois
            </address>
          </div>
          <div class="col-1-2">
            <ul class="social nav">
              <li class="social-item nav-item">
                <a href="https://www.facebook.com/HolbertonSchool/" class="social-link">
                  <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                    <title>
                      Facebook icon
                    </title>
                    <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"/>
                  </svg>
                </a>
              </li>
              <li class="social-item nav-item">
                <a href="https://twitter.com/holbertonschool" class="social-link">
                  <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                    <title>
                      Twitter icon
                    </title>
                    <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"/>
                  </svg>
                </a>
              </li>
              <li class="social-item nav-item">
                <a href="https://www.instagram.com/holbertonschool/" class="social-link">
                  <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
                    <title>
                      Instagram icon
                    </title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-1-2">
            <p class="footer-copyright">© 2020 Techium, made with ♥ by students at Holberton School.</p>
          </div>
          <div class="col-1-2">
            <ul class="footer-nav nav">
              <li class="footer-nav-item nav-item">
                <a href="#" class="footer-nav-link">Terms of use</a>
              </li>
              <li class="footer-nav-item nav-item">
                <a href="#" class="footer-nav-link">Privacy Policy</a>
              </li>
              <li class="footer-nav-item nav-item">
                <a href="#" class="footer-nav-link">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </body>
</html>
```
## 00-styles.css

/* SUMMARY
    1. GLOBAL
    2. LAYOUT
    3. SECTION
    4. CARD
*/


/*** 1. GLOBAL ***/

/* Reset / Normalize
   ============================= */

/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}

/* Variables
   ============================= */

:root {
  --color-primary: #D73953;
  --color-black:  #090909;
  --color-white: #ffffff;
  --color-grey: #a0a0a0;
  --color-light-grey: #f3f3f3;
  --color-dark-grey: #353535;

  --text-color: var(--color-black);

  --font-family-base: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --font-family-title: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;

  --font-size-small: 1.2rem;
  --font-size-medium: 1.6rem;
  --font-size-large: 1.8rem;
  --font-size-x-large: 2.3rem;
  --font-size-xx-large: 4.8rem;

  --font-weight-regular: 400;
  --font-weight-bold: 700;

  --line-height-small: 1.2;
  --line-height-base: 1.5;
  --line-height-big: 1.8;

  /** SECTION **/
  --section-padding: 5rem 0;
  --section-header-padding: 0 0 3rem;
  --section-header-align: center;
  --section-title-font-size: var(--font-size-xx-large);
  --section-title-font-weight: var(--font-weight-bold);
  --section-title-line-height: var(--line-height-small);
  --section-title-margin: 0;
  --section-title-color: var(--color-black);
  --section-tagline-transform: uppercase;
  --section-tagline-color: var(--color-primary);
  --section-tagline-font-family: var(--font-family-headings);
  --section-tagline-font-weight: var(--font-weight-bold);
  --section-tagline-margin: 0;
  --section-body-padding: 2rem 0 4rem;
  --section-footer-padding: 3rem 0 0;
  --section-footer-align: center;

  /** HEADER **/
  --header-padding: 4rem 0 0;

  /** FOOTER **/
  --footer-padding: 5rem 0 1rem;

  /** NAVBAR **/
  --nav-item-font-family: var(--font-family-headings);
  --nav-item-font-weight: var(--font-weight-bold);
  --nav-item-font-size: var(--font-size-medium);
  --nav-item-letter-spacing: .04rem;
  --nav-item-display: inline-block;
  --nav-item-margin: 0 0 0 2rem;
  --nav-item-link-hover: var(--color-white);

  /** BUTTON **/
  --button-display: inline-block;
  --button-padding: 1.5rem 3rem;
  --button-border: var(--color-primary) solid 0.2rem;
  --button-color: var(--color-black);
  --button-text-decoration: none;
  --button-font-size: var(--font-size-large);
  --button-hover-color: var(--color-white);
  --button-hover-text-decoration: none;
  --button-hover-background: var(--color-primary);

  /** MOTION **/
  --transition-duration: .3s;
  --transition-cubic-bezier: cubic-bezier(0.17, 0.67, 0, 1.01);
}

/* Base
    ============================= */

*, *:before, *:after {
  box-sizing: border-box;
}

html {
scroll-behavior: smooth;
font-size: 62.5%;
}

body {
  color: var(--text-color);
  font-family: var(--font-family-base);
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-base);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-family-title);
  font-weight: var(--font-weight-bold);
}

a {
  color: var(--text-color);
  text-decoration: none;
}

a:visited {
  font-style: italic;
}

a:hover {
  text-decoration: underline;
}

a:active {
  background-color: var(--color-light-grey);
}

.button {
  display: var(--button-display);
  padding: var(--button-padding);
  border: var(--button-border);
  font-size: var(--button-font-size);
  color: var(--button-color);
  text-decoration: var(--button-text-decoration);
}

.button:hover {
  color: var(--button-hover-color);
  text-decoration: var(--button-hover-text-decoration);
  background: var(--button-hover-background);
  transition-duration: var(--transition-duration);
  transition-property: color, background-color;
}

/* Helpers
    ============================= */

.visually-hidden:not(:focus):not(:active) {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}

/*** 2. LAYOUT ***/

/* Layout
    ============================= */

.container {
  width: 960px;
  margin-left: auto;
  margin-right: auto;
}

/* Grid
    ============================= */

ul.row {
  margin: -1rem;
  padding: 0;
  list-style: none;
}

.row {
  display: flex;
}

[class*='col-'] {
  margin: 1rem;
}

.col-1-3 {
  width: calc((100% / 3) - 2rem);
}

.col-1-2 {
  width: calc((100% / 2) - 2rem);
}

/* Navbar
    ============================= */

.nav {
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  display: flex;
}

.nav .nav-item {
  font-family: var(--nav-item-font-family);
  font-weight: var(--nav-item-font-weight);
  font-size: var(--nav-item-font-size);
  letter-spacing: var(--nav-item-letter-spacing);
}

.nav .nav-item + .nav-item {
  margin: var(--nav-item-margin);
}

.nav .nav-link {
  display: block;
  padding: 0.5rem 0;
  position: relative;
}

.nav .nav-link:hover {
  color: var(--nav-item-link-hover);
  text-decoration: none;
}

.nav .nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: var(--color-white);
  width: 0;
  height: 0.2rem;
  transition: var(--transition-duration) var(--transition-cubic-bezier);
}

.nav .nav-item:hover .nav-link::before {
  background-color: var(--color-primary);
  width: 100%;
}

/* Header
    ============================= */

.header {
  padding: var(--header-padding);
  position: relative;
  z-index: 3;
  background: transparent;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Footer
    ============================= */

.footer {
  --nav-item-font-weight: normal;
  --nav-item-font-size: var(--font-size-small);
  padding: var(--footer-padding);
}

.footer-copyright {
  margin: 0;
  font-size: var(--font-size-small);
  color: var(--text-color);
}

.footer ul {
  text-align: right;
}

.footer-address {
  color: var(--text-color);
}

.social-link {
  display: block;
}

.social-link > svg {
  fill: var(--text-color);
}

/*** 3. SECTION ***/

/* Section (all styles)
    ============================= */

.section {
  padding: var(--section-padding);
}

.section-header {
  text-align: var(--section-header-align);
  padding: var(--section-header-padding);
}

.section-title {
  font-size: var(--section-title-font-size);
  font-weight: var(--section-title-font-weight);
  line-height: var(--section-title-line-height);
  margin: var(--section-title-margin);
  color: var(--section-title-color);
}

.section-tagline {
  color: var(--section-tagline-color);
  font-family: var(--section-tagline-font-family);
  text-transform: var(--section-tagline-transform);
  font-weight: var(--section-tagline-font-weight);
  margin: var(--section-tagline-margin);
}

.section-body {
  padding: var(--section-body-padding);
}

.section-footer {
  padding: var(--section-footer-padding);
  text-align: var(--section-footer-align);
}

/* Section theming
    ============================= */

[data-section-theme="dark"] {
  --button-color: var(--color-white);
  --text-color: var(--color-white);
  --section-title-color: var(--color-white);
  background: var(--color-black);
}

/* Section HERO
    ============================= */

.section-hero {
  position: relative;
  margin-top: -8.5rem;
}

.hero-homepage {
  background-image: url(images/banner-home.jpg);
  background-position: 75% 0;
  background-repeat: no-repeat;
  background-size: 90rem auto;
}

.section-hero .section-body {
  padding: 10rem 4rem;
}

.section-hero .section-category {
  color: var(--color-white);
  text-transform: uppercase;
}

.section-hero .section-title {
  margin-bottom: 5rem;
}

.section-hero .section-inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 50vh;
}
/* Section Latest news
    ============================= */

.section-latest-news .row {
  flex-direction: row-reverse;
}

/* Section SERVICES
    ============================= */

.section-services .row {
  flex-wrap: wrap;
}

/* Section ABOUT US
    ============================= */

.section-about-us [class*='col-'] {
  align-self: center;
}

/*** 4. CARD ***/

/* Card (all styles)
    ============================= */

.card-category {
  color: var(--color-primary);
}

/* Card WORK
    ============================= */

.card-work .card-outer {
  position: relative;
  overflow: hidden;
}

.card-work:hover .card-outer {
  transform: scale(0.95);
}

.card-work .card-image img {
  height: 30rem;
  width: 100%;
  object-fit: cover;
  vertical-align: bottom;
}

.card-work:hover .card-image {
  transform: scale(1.2);
  transition: var(--transition-duration) var(--transition-cubic-bezier);
}

.card-work .card-inner {
  position: absolute;
  top: -0.1rem;
  left: -0.1rem;
  right: -0.1rem;
  bottom: -0.1rem;
  z-index: 1;
  transition: var(--transition-duration) var(--transition-cubic-bezier);
}

.card-work:hover .card-inner {
  background-color: rgba(0, 0, 0, 0.7);
}

.card-work .card-title {
  text-align: center;
  margin: 0;
  opacity: 0;
  height: 100%;
  position: relative;
}

.card-work .card-title a {
  display: block;
  text-decoration: none;
  padding-top: 45%;
}

.card-work .card-title a::after {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: '';
}

.card-work:hover .card-title {
  opacity: 1;
}

/* Card SERVICES
    ============================= */

.card-services .card-title {
  margin: 0;
}

.card-services a {
  display: block;
  padding: 2rem;
  background-color: var(--color-light-grey);
}

.card-services a:hover {
  color: var(--color-white);
  background: var(--color-primary);
  text-decoration: none;
  transition-duration: 0.3s;
  transition-property: color, background-color;
}

/* Card TESTIMONIAL
    ============================= */

.card-testimonial {
  text-align: center;
}

.card-testimonial .card-avatar {
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
}

.card-testimonial .card-quote cite {
  display: block;
  padding-top: 1rem;
  color: var(--color-primary);
}

.card-testimonial .card-quote {
  position: relative;
}

.card-testimonial .card-quote::before {
  content: '\201C';
  position: absolute;
  top: -4.5rem;
  left: -1rem;
  color: #efeded;
  font-size: 10rem;
  z-index: -1;
}

/*** ARTICLE PAGE ***/

/* Section HERO (article)
    ============================= */

.hero-article {
  background-size: 150rem 100rem;
  background-position: 50% 0;
}

.hero-article::before {
  content: '';
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
}

.hero-article .section-inner {
  text-align: center;
  align-items: center;
  min-height: 40vh;
}

.hero-article .section-body {
  position: relative;
  padding: 7rem 0 0;
  z-index: 2;
}

.main-article {
  padding: 5rem 0;
}

/* Post
    ============================= */

.post {
  display: flex;
  align-items: baseline;
}

.post-content {
  width: 100%;
  padding-left: 7rem;
}

.post-aside {
  order: -1;
  min-width: 20%;
}

.post img {
  width: 100%;
  height: auto;
}

.post-content p:first-child {
  font-size: var(--font-size-x-large);
}

.post-content .img-caption {
  margin: 1rem 0;
  padding: 0 0.5rem;
  font-size: var(--font-size-small);
  color: var(--color-grey);
  text-align: center;
}

/* Post Meta
    ============================= */

.post-meta-list {
  flex-direction: column;
}

.post-meta-list strong {
  color: var(--color-primary);
  font-size: 1.3rem;
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: normal;
  display: block;
}

.post-meta-list [class*='post-meta'] {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 0.2rem solid var(--color-light-grey);
}

.post-meta-list [class*='post-meta']:last-child {
  border: none;
  margin-bottom: 3rem;
}

/* Tag list
    ============================= */

.tag-list {
  padding: 0;
  list-style: none;
}

.tag-list li {
  display: inline;
}

.tag-list li::after {
  content: ", ";
}

.tag-list li:last-child::after {
  content: "";
}
## Final rendering

![](Finalrendering1.png)

**1. more comment basic structure**
File: [02-article.html](02-article.html/)
File: [02-styles.css](02-styles.css/)

## Final rendering

![](Finalrendering2.png)

**2. create labels and input container**
File: [03-article.html](03-article.html/)
File: [03-styles.css](03-styles.css/)

## Final rendering

![](Finalrendering3.png)

**3. create the inputs**
File: [04-article.html](04-article.html/)
File: [04-styles.css](04-styles.css/)

## Final rendering

![](Finalrendering4_1.png)
![](Finalrendering4_2.png)

**4. add help messages**
File: [05-article.html](05-article.html/)
File: [05-styles.css](05-styles.css/)

## Final rendering

![](Finalrendering5.png)

**5. add pure HTML / CSS error handling**
File: [06-article.html](06-article.html/)
File: [06-styles.css](06-styles.css/)

## Final rendering

![](Finalrendering6.png)

**6. add the search form**
File: [07-article.html](07-article.html/)
File: [07-styles.css](07-styles.css/)

## Final rendering

![](Finalrendering7_1.png)
![](Finalrendering7_2.png)
![](Finalrendering7_3.png)

# Author

> Paula Sotelo Vandamme

> [E-mail](omeinsotelo@gmail.com)

> [Github](https://github.com/omeinsotelo)

> [Twiiter](https://twitter.com/omeinsotelo)

> [Linkedin](https://www.linkedin.com/in/paula-sotelo-ba733a70/)
