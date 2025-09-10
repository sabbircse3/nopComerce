# Automation Testing Assessment on nopCommerce

Here is an Automation Testing task in UI level. The main focus is system testing process in an e-commerce platform.

## Recuirments

Before setting this porject, Please ensure this tools in your computer

- **Node.js** v22.17.1
- **npm** v10.9.2
- **Google Chrome** (latest version)

### Verify Installations

Run the following commands to check required dependencies are installed or not:

```bash
node -v   # Verify Node.js 
npm -v    # Verify npm
```

# Install & Setup

### Install playWright

```bash
npm init -y
npm init playwright@latest
npx playwright install
npm install @playwright/test
npm install -D @playwright/test@latest

```


#Running Test

### Generate the Report and show it
```bash
npx playwright test --reporter=html
npx playwright show-report

```
### single file run & show it's report
```bash
npx playwright test tests/Newsletter.spec.js --reporter=html
```

### Full test run
```bash
npx playwright test
```

### Clone the project

```bash
    git clone https://github.com/sabbircse3/automation-saucedemo.git 
```