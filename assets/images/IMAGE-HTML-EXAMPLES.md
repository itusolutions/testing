# Image path examples

```html
<!-- Service image -->
<img src="https://www.it-u.co.za/assets/images/it-support-and-networking/it-support-and-networking%20%281%29.jpg" alt="IT support and networking" loading="lazy">

<!-- Parallax background -->
<section data-itu-parallax data-speed="0.12" style="background-image:url('https://www.it-u.co.za/assets/images/parallax-images/it-support-and-networking%20%281%29.jpg')">
  ...
</section>

<!-- Carousel -->
<div data-itu-carousel data-autoplay="true" data-interval="5000">
  <div data-carousel-track>
    <article data-carousel-slide><img src="https://www.it-u.co.za/assets/images/carousel-images/it-support-and-networking%20%281%29.jpg" alt="IT support"></article>
    <article data-carousel-slide hidden><img src="https://www.it-u.co.za/assets/images/carousel-images/website-design-and-development%20%281%29.jpg" alt="Website development"></article>
  </div>
  <button type="button" data-carousel-prev aria-label="Previous slide">Previous</button>
  <button type="button" data-carousel-next aria-label="Next slide">Next</button>
  <div data-carousel-dots aria-label="Choose slide"></div>
</div>
```

Load scripts with `defer`; the package pages already include them.
