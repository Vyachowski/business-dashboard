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
- [ ] Inner pages

#### Backend
###### Authentication
- [ ] User registration via email
- [ ] User login
###### Income endpoint
- [x] Backend part with income an income endpoint (total and daily)
###### Connectors to third-party API
- [ ] Create connector to Yandex Metrics
- [ ] Create connector to Yandex Direct

#### Frontend
###### Registration and logging in
- [ ] Create welcome page
- [ ] Create sign-up page
- [ ] Create sign-in page
###### Main page
- [ ] Dashboard page
###### Analytics pages
- [ ] Insights page
- [ ] Tasks page
- [ ] SEO traffic page
- [ ] PPC traffic page
###### Entry form
- [ ] Income entry page with a form to post data

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
