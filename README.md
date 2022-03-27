# `@syed-ahmed/plugin-react-pdf`

Docusaurus Plugin to render PDF as images using react-pdf.

## Installation

```sh
yarn add @syed-ahmed/plugin-react-pdf
```

Modify your `docusaurus.config.js`

```diff
module.exports = {
  ...
+ plugins: ['@syed-ahmed/plugin-react-pdf'],
  ...
}
```

## Usage

```jsx
import ReactPdf from '@theme/ReactPdf';

<ReactPdf pdf={require('./path/to/doc.pdf').default}/>
```