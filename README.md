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
│   └── wdio.conf.ts                 # WebdriverIO configuration
├── .gitignore                       # Git ignore rules
├── README.md                        # Project documentation
├── package.json                     # All project dependencies
├── package-lock.json                # Dependency lock file
├── node_modules/                    # Installed dependencies
└── tsconfig.json                    # TypeScript configuration
```

### Simplified Structure
This project uses a **consolidated dependency structure**:
- **Single package.json** - All dependencies managed at root level
- **Single node_modules** - One central location for all packages  
- **Single tsconfig.json** - Unified TypeScript configuration
- **Clean organization** - Test files organized in config/test/ directory

This simplified structure eliminates duplicate files and makes dependency management easier.

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
