# Development stages

## Step 1

> ### Product
> A platform designed for small business owners
> to analyze marketing data and gain valuable insights
#### Features
- Authentication via username/password
- Connectors to Universal Analytics and Yandex Metrics
- Connectors to Yandex Direct and Google Ads
- All key metrics on one screen
- Option to add your insight and tasks for it

### To-do List

#### Design
- [x] Dashboard template
- [x] Sign in/Sign up pages
- [x] Inner pages

#### Backend
###### Authentication
- [x] User registration via email/password
- [x] User login
- [x] Create and refresh access token
###### Income endpoint
- [x] Add income (defined period of time)
- [x] Get income data (total and daily)
###### Connectors to third-party API
- [ ] Create connector to Yandex ID API (and Metric and Direct inside)

#### Frontend
###### Registration and logging in
- [x] Create welcome page (Desktop)
- [x] Create sign-up page (Desktop)
- [x] Create sign-in page (Desktop)
###### Main page
- [x] Dashboard page (Desktop)
###### Analytics pages
- [x] Insights page (Desktop)
- [x] Tasks page (Desktop)
- [x] SEO traffic page (Desktop)
- [x] PPC traffic page (Desktop)
###### Entry form
- [x] Income entry page with a form to post data (Desktop)

## Branch Naming Convention

- **main** for the current version of site
- **develop** is for developing new features, test and refactor them

## Commit Naming Convention

A commit message should start with a category of change. You can pretty much use the following 4 categories for everything: feat, fix, refactor, and chore.

- **feat** is for adding a new feature
- **fix** is for fixing a bug
- **refactor** is for changing code for peformance or convenience purpose (e.g. readibility)
- **chore** is for everything else (writing documentation, formatting, adding tests, cleaning useless code etc.)
- e.g. ```git commit -m 'feat: add new button component; add new button components to templates'```
