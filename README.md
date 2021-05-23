# React (TypeScript) with Material UI Theme POC

## Purpose
The purpose of this POC (Proof of Concept), is to demonstrate how to override the default Material UI styling by implementing [ThemeProvider](https://material-ui.com/customization/theming/#theme-provider) to provide a consistent look and feel to all styles in a single point as apposed to overriding per component/styles/… As an added bonus, I have also provided a strategy for overriding the styles for a HTML anchor in a manner that provides reuse of default values and the ability to further override as required per use case.

Overrides include Material UI's:

- Typography (h1 | h2 | body1): font size, colour & padding
- AppBar: background colour
- Non theme: Default anchor base styles configured to: text decoration underline only on hover and colour. Implemented and overridden in styles/app.ts. This can also be implemented on react-router-dom's Link

> Naming conventions whilst important, are not important to this POC. You can name it whatever you like. What is important, is the concept.

## Architecture

This is not rocket science. The only purpose is to demonstrate MUI's ThemeProvider overrides. All content resides in the App.tsx

```
+-- react-mui-theme-poc
|   +-- src
|       +-- index.tsx
|       +-- App.tsx
|       +-- components
|           +-- Header
|               +-- Header.tsx
|               +-- styles
|                   +-- header.ts
|       +-- theme
|           +-- overrides
|               +-- MuiAppBar.ts
|           +-- typeography
|               +-- body1.ts
|               +-- h1.ts
|           +-- theme.ts
|           +-- commonStyles.ts
|       +-- styles
|           +-- app.ts
```
## Other Styling Strategies
Using MUI's [Paper](https://material-ui.com/components/paper/) component as an example:

**Refer to the API**

Scroll to the bottom of the Paper component's page, where you will find the [API links](https://material-ui.com/components/paper/#api).

**[Paper API](https://material-ui.com/api/paper/)** Props & CSS are documented here. I highly recommend you utilise this functionality before attempting to reinvent the wheel, or in this case, the Paper component.

## Installation
Ensure you have the following installed:
- [NodeJS](https://nodejs.org/en/download/)
- Navigate to the directory of your choice with CommandPrompt / Terminal / … and run git command to clone the repository:
```
git clone https://github.com/lightspaceliam/react-mui-theme-poc.git
```
- Navigate into the folder ../react-mui-theme-poc 
- Install node modules:
```
npm install
```

## Run
- Start the application:
```
npm start
```
## Technology Stack 

- React v17.0.2
- Material UI v4.11.4