# Automation Testing Assessment on nopCommerce

Here is an Automation Testing task in UI level. The main focus is system testing process in an e-commerce platform.

## Recuirments

Before setting this porject, Please ensure this tools in your computer

- **Node.js** v20.18.0
- **npm** v10.9.2
- **Google Chrome** (latest version)

### Verify Installations

Run the following commands to check required dependencies are installed or not:

```bash
node -v   # Verify Node.js 
npm -v    # Verify npm
```

# Install & Setup

### 1. Install playWright

```bash
npm init -y
npm init playwright@latest
npx playwright install
npm install @playwright/test
npm install -D @playwright/test@latest

```


#Running Test

###Run All test

```bash
npm run test
```

### Run Single Test

```bash
node filename.format
node login.spec.js
```

#Generate Test Report

### 1. Generate the Report and show it

```bash
npx playwright test --reporter=html
npx playwright show-report

```
### 1. single file run & show it's report

```bash
npx playwright test tests/Newsletter.spec.js --reporter=html
```


Clone the project

```bash
    git clone https://github.com/sabbircse3/automation-saucedemo.git 
```