# iTu Solutions image directory guide

All public image URLs use `https://www.it-u.co.za/assets/images/`. The matching files must exist in the GitHub repository at the paths below. GitHub Pages does not create images from URLs: upload your actual JPG/WebP files before publishing.

## Parallax backgrounds

`assets/images/parallax-images/it-support-and-networking (1).jpg` through `it-support-and-networking (9).jpg`
`assets/images/parallax-images/operating-systems-and-software (1).jpg` through `operating-systems-and-software (6).jpg`
`assets/images/parallax-images/website-design-and-development (1).jpg` through `website-design-and-development (10).jpg`
`assets/images/parallax-images/computer-repair-and-maintenance (1).jpg` through `computer-repair-and-maintenance (10).jpg`

## Carousel images

`assets/images/carousel-images/it-support-and-networking (1).jpg` through `it-support-and-networking (9).jpg`
`assets/images/carousel-images/operating-systems-and-software (1).jpg` through `operating-systems-and-software (6).jpg`
`assets/images/carousel-images/website-design-and-development (1).jpg` through `website-design-and-development (10).jpg`
`assets/images/carousel-images/computer-repair-and-maintenance (1).jpg` through `computer-repair-and-maintenance (10).jpg`

## Service gallery images

| Directory | Files |
|---|---|
| `it-support-and-networking/` | `it-support-and-networking (1).jpg` to `(9).jpg` |
| `operating-systems-and-software/` | `operating-systems-and-software (1).jpg` to `(6).jpg` |
| `website-design-and-development/` | `website-design-and-development (1).jpg` to `(10).jpg` |
| `computer-repair-and-maintenance/` | `computer-repair-and-maintenance (1).jpg` to `(10).jpg` |

## URL examples

Use URL-encoded spaces in HTML. The physical filenames in the repository retain normal spaces and parentheses:

```html
<img src="https://www.it-u.co.za/assets/images/it-support-and-networking/it-support-and-networking%20%281%29.jpg" alt="IT support and networking">
<div class="parallax-panel" style="background-image: url('https://www.it-u.co.za/assets/images/parallax-images/it-support-and-networking%20%281%29.jpg')"></div>
```

## Important

- Do not use Markdown link syntax inside `src` or `url()`. A `src` value must be a plain URL.
- Keep filename spelling, hyphens, spaces, brackets and extensions consistent.
- Prefer WebP for large backgrounds when you have converted images; update the filename and HTML reference together.
- The directories are included in this package, but your original JPG images were not attached to this conversation, so the image files themselves still need to be uploaded.
