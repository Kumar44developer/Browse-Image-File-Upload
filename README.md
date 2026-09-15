<div align="center">

# Browse Image File Upload

### Pick an image and preview it instantly

A lightweight image upload preview widget. Choose an image from your device and it fills the drop area right away, with a close button to clear it and start over. Built with vanilla HTML, CSS, and JavaScript, with no dependencies and no build step.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black)
![No Dependencies](https://img.shields.io/badge/Dependencies-None-brightgreen)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Overview

Browse Image File Upload is a front-end only component that runs entirely in the browser. It presents a bordered upload area with a browse button. When an image is selected, it is displayed as a full preview inside the area, and a close button lets the user clear the preview and choose another image.

## Features

- Select an image through a styled browse button
- Instant full-area preview of the chosen image
- Close button to clear the preview and reset the input
- Reliable behavior across repeated uploads
- Clean, centered layout with a dashed upload frame
- Zero dependencies and no build tooling

## Tech Stack

| Technology | Role |
| --- | --- |
| HTML5 | Structure and file input |
| CSS3 | Styling, layout, and preview states |
| JavaScript | File handling and preview logic |

## How It Works

The native file input is hidden and triggered by a styled label. When a file is chosen, the app creates an object URL for the selected image and applies it to the preview element, revealing the image and the close control. Clicking close hides the preview, clears the source, and resets the input so the same or a different file can be selected again.

## Project Structure

```
project40/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Getting Started

No installation or server is required.

Clone the repository:

```bash
git clone https://github.com/Kumar44developer/Browse-Image-File-Upload.git
```

Open `index.html` in any modern browser. For live reloading during development, the VS Code Live Server extension works well.

## Usage

1. Click Browse File and choose an image from your device.
2. See it appear as a full preview in the upload area.
3. Click the close icon to clear the preview and pick another image.

## Roadmap

- Drag and drop upload support
- Multiple image previews in a gallery
- File type and size validation
- Progress indicator for large images
- Light and dark theme options

## Contributing

Contributions are welcome. Fork the repository, create a feature branch, commit your changes, and open a pull request with a clear description.

## License

This project is released under the MIT License.

## Author

Created by [Kumar44developer](https://github.com/Kumar44developer).
