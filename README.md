# React Component Library Documentation

This document provides usage guidelines for the five reusable React components in this library.

## Table of Contents
1. [InputField](#inputfield)
2. [Button](#button)
3. [Table](#table)
4. [Modal](#modal)
5. [Notification System](#notification-system)

---

## InputField

A customizable input field component with support for labels, icons, error messages, and helper text.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | string | "" | Input type (text, email, password, etc.) |
| name | string | "" | Name attribute for the input |
| label | string | "" | Label text for the input |
| placeholder | string | "" | Placeholder text |
| helperText | string | "" | Additional help text below input |
| icon | ReactNode | null | Icon to display inside input |
| errormsg | string | "" | Error message to display |
| required | boolean | false | Whether the field is required |
| value | string | "" | Controlled input value |
| onChange | function | () => {} | Change handler |

### Example Usage
```jsx
import { Inputfield } from './components/Inputfield';

function FormExample() {
  const [email, setEmail] = useState('');
  
  return (
    <Inputfield
      type="email"
      name="email"
      label="Email Address"
      placeholder="Enter your email"
      helperText="We'll never share your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  );
}
```

---

## Button

A customizable button component with multiple variants, sizes, and loading state.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | string | "button" | Button type (button, submit, reset) |
| size | string | "medium" | Button size (small, medium, large) |
| variant | string | "tertiary" | Button style (primary, secondary, tertiary) |
| icon | ReactNode | `<MdTransitEnterexit />` | Icon to display |
| text | string | "Submit" | Button text |
| loading | boolean | false | Whether to show loading spinner |
| disabled | boolean | false | Whether button is disabled |
| onClick | function | () => {} | Click handler |

### Example Usage
```jsx
import { Button } from './components/Button';

function ButtonExample() {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleClick = () => {
    setIsLoading(true);
    // Perform async action
    setTimeout(() => setIsLoading(false), 2000);
  };
  
  return (
    <div className="space-x-4">
      <Button variant="primary" text="Primary" />
      <Button 
        variant="secondary" 
        size="large" 
        text="Loading Button"
        loading={isLoading}
        onClick={handleClick}
      />
    </div>
  );
}
```

---

## Table

A feature-rich table component with sorting, pagination, and search functionality.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| columns | array | - | Array of column definitions |
| data | array | - | Array of data objects |
| itemsPerPage | number | 5 | Number of items per page |

### Column Definition
Each column object should have:
- `accessor` (string): Key to access in data objects
- `label` (string): Column header text

### Example Usage
```jsx
import Table from './components/Table';

function TableExample() {
  const columns = [
    { accessor: 'name', label: 'Name' },
    { accessor: 'age', label: 'Age' },
    { accessor: 'email', label: 'Email' }
  ];
  
  const data = [
    { name: 'John Doe', age: 28, email: 'john@example.com' },
    { name: 'Jane Smith', age: 32, email: 'jane@example.com' }
  ];
  
  return (
    <Table columns={columns} data={data} itemsPerPage={10} />
  );
}
```

---

## Modal

An animated modal dialog component with optional actions.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| isOpen | boolean | - | Whether modal is open |
| onClose | function | - | Function to close modal |
| title | string | - | Modal title |
| children | ReactNode | - | Modal content |
| onConfirm | function | - | Confirm button handler |
| showActions | boolean | true | Whether to show action buttons |

### Example Usage
```jsx
import Modal from './components/Modal';
import { useState } from 'react';

function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Example Modal"
        onConfirm={() => {
          alert('Confirmed!');
          setIsOpen(false);
        }}
      >
        <p>This is modal content</p>
      </Modal>
    </>
  );
}
```

---

## Notification System

A context-based notification system with different message types.

### Setup
First, wrap your app with the provider:
```jsx
import { NotificationProvider } from './context/NotificationContext';

function App() {
  return (
    <NotificationProvider>
      {/* Your app components */}
    </NotificationProvider>
  );
}
```

### Usage
In any component:
```jsx
import { useNotification } from './context/NotificationContext';

function NotificationExample() {
  const { showNotification } = useNotification();
  
  return (
    <div className="space-x-2">
      <button 
        onClick={() => showNotification({ 
          type: 'success', 
          message: 'Operation succeeded!' 
        })}
      >
        Show Success
      </button>
      
      <button 
        onClick={() => showNotification({ 
          type: 'error', 
          message: 'Something went wrong!',
          duration: 5000 // 5 seconds
        })}
      >
        Show Error
      </button>
    </div>
  );
}
```

### Notification Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| type | string | "info" | Notification type (info, success, error) |
| message | string | - | Notification message |
| duration | number | 3000 | How long to display (ms) |

---

## Installation

1. Install required dependencies:
```bash
npm install react-icons  
```

2. Copy the component files into your project.

3. Import and use components as needed.

## Styling
Components use Tailwind CSS classes. Make sure you have Tailwind CSS configured in your project.
