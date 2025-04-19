# 🚀 Custom Button Component

A flexible and reusable `<Button />` component built with **React** and **Tailwind CSS**. Supports various styles, sizes, icons, and loading states for building great UIs.

---

## 📦 Installation

Make sure your project has:

- `react`
- `react-icons`
- `tailwindcss`

Install `react-icons` if not already installed:

```bash
npm install react-icons
✨ Features
✅ Three design variants: primary, secondary, tertiary

📏 Three sizes: small, medium, large

🔁 Loading spinner state

🖼️ Optional icon support

🚫 Disabled state

⚡ Smooth hover transitions with Tailwind

🧱 Props

Prop	Type	Default	Description
type	string	"button"	HTML button type (button, submit, etc.)
size	string	"medium"	Button size: small, medium, or large
variant	string	"tertiary"	Style variant: primary, secondary, tertiary
icon	ReactNode	<MdTransitEnterexit />	Icon displayed before the text
text	string	"Submit"	Text shown inside the button
loading	boolean	false	If true, shows a loading spinner
disabled	boolean	false	If true, disables the button
onClick	function	() => {}	Function triggered on click
📌 Usage
jsx
Copy
Edit
import React from "react";
import { Button } from "./components/Button";
import { MdTransitEnterexit } from "react-icons/md";

export default function App() {
  return (
    <div className="p-6 space-y-4">

      {/* Your Example */}
      <Button
        variant="secondary"
        size="small"
        text="Submit"
        icon={<MdTransitEnterexit />}
        loading={false}
        disabled={false}
      />

      {/* Additional Examples */}

      {/* Primary Button */}
      <Button
        variant="primary"
        size="large"
        text="Send"
        icon={<MdTransitEnterexit />}
        onClick={() => alert("Primary Button Clicked")}
      />

      {/* Loading Button */}
      <Button
        variant="tertiary"
        size="medium"
        text="Loading..."
        loading={true}
      />

      {/* Disabled Button */}
      <Button
        variant="primary"
        size="medium"
        text="Can't Click"
        disabled={true}
      />
    </div>
  );
}
🖌️ Styling Overview
Tailwind CSS is used for styling. Here's how variants and sizes are mapped:

🎨 Variant Styles

Variant	Color Scheme
primary	Red background
secondary	Green background
tertiary	Black background
📐 Size Styles

Size	Padding & Font Size
small	Small padding & font
medium	Default padding & font
large	Large padding & font
📁 Suggested File Structure
css
Copy
Edit
components/
│
├── Button.jsx
└── ...
