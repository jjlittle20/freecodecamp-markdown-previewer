import { useState } from "react";
import { marked } from "marked";
import * as DOMPurify from "dompurify";
import "./App.css";

function App() {
  const defaultMarkdownText = `\
  # H1:
  ## H2
  [link](https://www.freecodecamp.org).
  <dl>
    <dt>list</dt>
    <dd>item1.</dd>
    <dt>list2</dt>
    <dd>**bold**.</dd>
  </dl>
  \`inline code\`
  \`\`\`
  function exampleOf() {
    return multiLineCodeBlock;
  }
  \`\`\`
  - list
  - items
  > block quote
  ![freecodecamp](https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png)`;

  const [textAreaContents, setTextAreaContents] = useState(defaultMarkdownText);
  const handleOnChange = (e) => {
    setTextAreaContents(e?.target?.value);
  };

  marked.setOptions({
    breaks: true,
  });
  return (
    <div>
      <textarea
        value={textAreaContents}
        id="editor"
        onChange={(e) => handleOnChange(e)}
      ></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(marked.parse(textAreaContents)),
        }}
      />
    </div>
  );
}

export default App;
