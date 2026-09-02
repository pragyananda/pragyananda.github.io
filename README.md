# pragyananda.github.io

Personal academic website of Pragyanand Sahoo, built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme and hosted on GitHub Pages.

## Editing content

| What | Where |
| --- | --- |
| Front page bio, photo, subtitle | `_pages/about.md` (photo: `assets/img/prof_pic.jpg`) |
| News items | `_news/YYYY-MM-DD-slug.md` |
| Publications | `_bibliography/papers.bib` (mark `selected = {true}` to show on the front page) |
| Projects | `_projects/*.md` |
| CV page | `_data/cv.yml`; PDF at `assets/pdf/cv.pdf` |
| Social icons | `_data/socials.yml` |
| GitHub repositories page | `_data/repositories.yml` |
| Site settings, name, URL | `_config.yml` |

## Deploying

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to the `gh-pages` branch. In the repository settings, under Pages, the source must be set to the `gh-pages` branch. The site then appears at https://pragyananda.github.io a few minutes after each push.

## Running locally

With Docker:

```bash
docker compose pull
docker compose up
```

With Ruby (Ruby 3.3, Bundler, and the `ruby-dev` build headers installed):

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000 (Docker serves on port 8080). See the al-folio [install guide](https://github.com/alshedivat/al-folio/blob/main/docs/INSTALL.md) for details.

## Credits

Theme: [al-folio](https://github.com/alshedivat/al-folio), MIT license (see `LICENSE`).
