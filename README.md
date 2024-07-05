# React Dynamic Parser

A React library for dynamic content parsing and form input, allowing you to embed editable dynamic content into your React applications easily.

## Features

- **Dynamic Content Parsing:** Parse dynamic content embedded within text.
- **Customizable Inputs:** Support for different input types (text, URL, number) based on the content type.
- **Custom Parsers:** Ability to define custom parsers to fit specific needs.
- **Context-based State Management:** Manage state seamlessly with React Context API.

## Installation

Install the library using npm:
```bash
npm install react-dynamic-parser
```

## Usage

```jsx
import React from 'react';
import { DynamicContentProvider, DynamicContentDisplay, DynamicContentForm } from 'react-dynamic-parser';

const App = () => {
  const initialContent = "This is a sample content with [text:editable text] and [url:https://example.com]";

  return (
    <DynamicContentProvider initialContent={initialContent}>
      <DynamicContentDisplay />
      <DynamicContentForm />
    </DynamicContentProvider>
  );
};

export default App;
```

## Custom Parsers

You can define custom parsers to parse content based on your requirements. Here's an example of a custom parser that parses content within square brackets:

```jsx
const customParseContent = (content) => {
  // Custom parsing logic
  // Example: parse [bold:text] and [italic:text]
  const regex = /\[([^\]:]*):([^\]]+)\]/g;
  let match;
  const keyValuePairs = [];

  while ((match = regex.exec(content)) !== null) {
    keyValuePairs.push({ type: match[1], value: match[2], original: match[0] });
  }

  return keyValuePairs;
};

const App = () => {
  const initialContent = "This is a sample content with [bold:important text] and [italic:emphasized text]";

  return (
    <DynamicContentProvider initialContent={initialContent} parseContent={customParseContent}>
      <DynamicContentDisplay />
      <DynamicContentForm />
    </DynamicContentProvider>
  );
};

export default App;
```

## Componnets

### DynamicContentProvider

The provider component that initializes the context with the parsed content and manages state.

#### Props
- `initialContent` (string): The initial content string to be parsed.
- `parseContent` (function): Optional custom parser function.

```jsx
<DynamicContentProvider 
    initialContent={initialContent} 
    parseContent={customParseContent}
>
  {children}

</DynamicContentProvider>
```

### DynamicContentDisplay
The component responsible for rendering the dynamically generated content.

```jsx
<DynamicContentDisplay />
```

### DynamicContentForm

The component that renders the form inputs for editing the dynamic content.

```jsx
<DynamicContentForm />
```

### Example

#### Using Different Input Types

```jsx
const initialContent = "Name: [text:John Doe], Age: [number:30], Website: [url:https://example.com]";

const App = () => {
  return (
    <DynamicContentProvider initialContent={initialContent}>
      <DynamicContentDisplay />
      <DynamicContentForm />
    </DynamicContentProvider>
  );
};

export default App;
```

### Styling the Components

You can style the components by passing custom class names or using CSS modules.

```css
/* App.css */
.input-container {
  margin-bottom: 1rem;
}

.input-container label {
  font-weight: bold;
}
```

```js
import './App.css';

const App = () => {
  const initialContent = "Edit this text: [text:click to edit]";

  return (
    <DynamicContentProvider initialContent={initialContent}>
      <DynamicContentDisplay />
      <DynamicContentForm />
    </DynamicContentProvider>
  );
};

export default App;
```


### API
 
#### DynamicContentProvider

| Prop | Type | Description |
| --- | --- | --- |
| initialContent | string | The initial content string to be parsed. |
| parseContent | function | Optional custom parser function. |

#### DynamicContentDisplay
No props. Uses context to display the generated content.

#### DynamicContentForm
No props. Uses context to display and manage form inputs.

### Contributing 

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or feedback.

### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Acknowledgements Note
By following this detailed README, users will have a clear understanding of how to install, use, and customize the `ReactDynamicParser` library.
