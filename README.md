![Logo](https://media.discordapp.net/attachments/1099544174577078396/1208567363658580038/logo_modalia.png?ex=65e3c111&is=65d14c11&hm=774284171013e76b05411be5a18ac3906e1a47a1e915cf7948f71880ee491292&=&format=webp&quality=lossless&width=1440&height=480)

# Modalia

Modalia is a React library designed for displaying textual messages consisting of a title and a commentary. Multiple parameters are available for customizing the modal to suit your specific requirements.

## Usage/Examples

Install Modalia as a dependency in your project using npm:

```bash
npm install modalia
```

Import the Modal library in the file where you want to use it:

```javascript
import React from "react";
import Modal from "modalia";
```

Utilize the Modal component within your React component, providing necessary props:

```javascript
const YourComponent = () => {
  constructor() {
    super();
    this.state = {
      showingModal: false,
    };
  }

  closeModal = () => {
    this.setState({ showingModal: false });
  };

  return (
    <div>
      {/* Your existing components */}
      <Modal
        show={true}
        title="Example Modal"
        commentary="Example commentary"
        onClose={() => this.closeModal}
        // Additional props...
      />
    </div>
  );
};
```

## Customizing and parameters

The Modal component provides various props for customization:

- `show` (boolean): Controls the visibility of the modal.
- `title` (string): Specifies the title of the modal.
- `onClose` (function): Defines a callback function when the modal is closed.
- `commentary` (string): Adds additional text or commentary to the modal.
- `showCloseButton` (boolean): Determines whether to display a close button.
- `autoCloseTime` (number): Sets the auto-close time for the modal in milliseconds.
- `showLoadingBar` (boolean): Displays a loading bar indicating the auto-close progress.
- `fillColor` (string): Custom background color for the loading bar.
- `position` (string): Defines the position of the modal.
  Note: `autoCloseTime` must be defined to set `showCloseButton` as `false`.

`position` possibilities :

(Default set as center even with properties defined as null.)

- `center`
- `top`
- `bottom`
- `corner-top-left`
- `corner-top-right`
- `corner-bottom-left`
- `corner-bottom-right`

Example :

```javascript
<Modal
  show={true}
  title="Custom Modal"
  onClose={() => this.closeModal}
  commentary="This is a custom modal."
  showCloseButton={true}
  autoCloseTime={5000}
  showLoadingBar={true}
  fillColor="#aabbcc"
  position="corner-top-right"
/>
```

## Authors

- [Anthony Daccarett](https://github.com/AnthonyDac)

## License

[MIT](https://choosealicense.com/licenses/mit/)
