# garys tests for gds template test
Webdriver IO test framework for gds-template-test practice web app

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Chrome browser

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/garydawsonDEFRA/garys-tests-for-gds-template-test.git
cd garys-tests-for-gds-template-test
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up the Test Application

#### Get the gds-template-test web app:
```bash
# Clone the web app repository
git clone https://github.com/DEFRA/gds-template-test.git
cd gds-template-test

# Install dependencies
npm install

# Start the application
npm start
```

The web app should now be running on `http://localhost:3000`

### 4. Run Tests
```bash
# Run all tests
npm test

# Run specific test file
npx wdio run config/wdio.conf.ts --spec="config/test/specs/Test Automation Demo.ts"
```

## Project Structure

```
garys-tests-for-gds-template-test/
├── config/
│   ├── test/
│   │   ├── constants/
│   │   │   └── urls.ts              # URL constants
│   │   ├── pageobjects/
│   │   │   ├── page.ts              # Base page class
│   │   │   ├── home.page.ts         # Homepage interactions
│   │   │   ├── input.page.ts        # Input page form handling
│   │   │   ├── radio.page.ts        # Radio button selections
│   │   │   ├── checkbox.page.ts     # Checkbox interactions
│   │   │   ├── summary.page.ts      # Summary page validation
│   │   │   └── submit.page.ts       # Final submission page
│   │   └── specs/
│   │       └── Test Automation Demo.ts  # Main test suite
│   ├── wdio.conf.ts                 # WebdriverIO configuration
│   ├── tsconfig.json                # TypeScript config for tests
│   ├── package.json                 # Test dependencies
│   └── package-lock.json            # Dependency lock file
├── .gitignore                       # Git ignore rules
├── README.md                        # Project documentation
├── package.json                     # Root dependencies
├── package-lock.json                # Root dependency lock file
└── tsconfig.json                    # Root TypeScript config
```

### Package Structure Note
This project has duplicate npm files due to separate dependency management:
- **Root level** (`/package.json`, `/package-lock.json`, `/node_modules/`) - Main project dependencies
- **Config level** (`/config/package.json`, `/config/package-lock.json`, `/config/node_modules/`) - WebdriverIO specific dependencies

This structure was created when WebdriverIO was set up in a separate config directory. Both dependency trees are currently functional but could be consolidated in future refactoring to simplify the project structure.

## Test Structure

### Page Objects
- `home.page.ts` - Homepage interactions
- `input.page.ts` - Input page form handling
- `radio.page.ts` - Radio button selections
- `checkbox.page.ts` - Checkbox interactions
- `summary.page.ts` - Summary page validation
- `submit.page.ts` - Final submission page

### Test Scenarios
- Homepage loading
- Page navigation flow
- Form validation (input, radio, checkbox)
- Back link functionality
- Change links on summary page
- More TBD

### Constants
- `urls.ts` - Centralized URL management

## Configuration
- Tests run in Chrome by default
- Base URL: `http://localhost:3000`
- Timeout: 60 seconds per test
- Framework: Mocha with WebdriverIO

## Troubleshooting
- Ensure the web app is running before executing tests
- Check Chrome browser is installed and up to date
- Verify Node.js version compatibility
