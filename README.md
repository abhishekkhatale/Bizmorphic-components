🚀 Custom React Button Component
A flexible, reusable button component built with React and Tailwind CSS, supporting icons, sizes, variants, loading states, and more.

📦 Installation
bash
Copy
Edit
npm install react-icons
🛠️ Usage
jsx
Copy
Edit
import React from "react";
import { Button } from "./Button";
import { MdTransitEnterexit } from "react-icons/md";

export default function App() {
  return (
    <Button
      variant="secondary"
      size="small"
      text="Submit"
      icon={<MdTransitEnterexit />}
      loading={false}
      disabled={false}
      onClick={() => alert("Button clicked!")}
    />
  );
}
🧱 Props
<table> <thead> <tr> <th>Prop</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td><code>type</code></td> <td><code>string</code></td> <td><code>"button"</code></td> <td>HTML button type (<code>button</code>, <code>submit</code>, etc.)</td> </tr> <tr> <td><code>size</code></td> <td><code>string</code></td> <td><code>"medium"</code></td> <td>Button size: <code>small</code>, <code>medium</code>, or <code>large</code></td> </tr> <tr> <td><code>variant</code></td> <td><code>string</code></td> <td><code>"tertiary"</code></td> <td>Style variant: <code>primary</code>, <code>secondary</code>, or <code>tertiary</code></td> </tr> <tr> <td><code>icon</code></td> <td><code>ReactNode</code></td> <td><code>&lt;MdTransitEnterexit /&gt;</code></td> <td>Icon displayed before the text</td> </tr> <tr> <td><code>text</code></td> <td><code>string</code></td> <td><code>"Submit"</code></td> <td>Text shown inside the button</td> </tr> <tr> <td><code>loading</code></td> <td><code>boolean</code></td> <td><code>false</code></td> <td>If <code>true</code>, shows a loading spinner</td> </tr> <tr> <td><code>disabled</code></td> <td><code>boolean</code></td> <td><code>false</code></td> <td>If <code>true</code>, disables the button</td> </tr> <tr> <td><code>onClick</code></td> <td><code>function</code></td> <td><code>() =&gt; {}</code></td> <td>Function triggered on click</td> </tr> </tbody> </table>
🎨 Variants
primary – Red button with white text

secondary – Green button with white text

tertiary – Black button with white text

📏 Sizes
small – Smaller button

medium – Default button

large – Bigger button
