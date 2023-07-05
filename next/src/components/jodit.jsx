import React from "react";
import "jodit";
import "jodit/build/jodit.min.css";
import JoditEditor from "jodit-react";
const buttons = [
  "undo",
  "redo",
  "|",
  "bold",
  "strikethrough",
  "underline",
  "italic",
  "|",
  "superscript",
  "subscript",
  "|",
  "align",
  "lineHeight",
  "|",
  "ul",
  "ol",
  "outdent",
  "indent",
  "|",
  "font",
  "fontsize",
  "brush",
  "paragraph",
  "file",
  "image",
  "video",
  "link",
  "table",
  "|",
  "cut",
  "copy",
  "paste",
  "selectall",
  "|",
  "hr",
  "eraser",
  "|",
  "find",
  "fullsize",
  "print",
  "|",
  "source",
  "preview"
];
const editorConfig = {
  readonly: false,
  toolbar: true,
  spellcheck: true,
  language: "en",
  toolbarButtonSize: "medium",
  toolbarAdaptive: false,
  showCharsCounter: true,
  showWordsCounter: true,
  showXPathInStatusbar: false,
  askBeforePasteHTML: true,
  askBeforePasteFromWord: true,
  buttons: buttons,
  uploader: {
    insertImageAsBase64URI: true,
  },
  width: 900,
  height: 800,
};
export default function Editor({ onChange, initValue = "" }) {
  return (
    <div
      className="App"
      style={{ maxWidth: editorConfig.width, margin: "0 auto" }}
    >
      <JoditEditor
        value={initValue}
        config={editorConfig}
        onChange={(value) => onChange(value)}
      />
    </div>
  );
}
