# `@syed-ahmed/docusaurus-plugin-react-pdf`

Docusaurus Plugin to render PDF as images using react-pdf.

## Installation

```sh
yarn add @syed-ahmed/docusaurus-plugin-react-pdf
```

Modify your `docusaurus.config.js`

```diff
module.exports = {
  ...
+ plugins: ['@syed-ahmed/docusaurus-plugin-react-pdf'],
  ...
}
```

## Usage

```jsx
import ReactPdf from '@syed-ahmed/docusaurus-plugin-react-pdf/lib/theme/ReactPdf';

<ReactPdf pdf={require('./path/to/doc.pdf').default}/>
```
