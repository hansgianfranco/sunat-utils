# Contributing to sunat-util

First of all, thanks for your interest in contributing! 🎉 Your help makes this tool better for the entire developer community in Peru.

---

## Getting Started

To start contributing, follow these steps:

1.  **Fork** the repository.
2.  **Clone** your fork locally:
    ```bash
    git clone https://github.com/hansgianfranco/sunat-utils.git
    cd sunat-utils
    ```
3.  **Install** dependencies:
    ```bash
    npm install
    ```

---

## Development Workflow

### Useful Commands
* **Build the project:**
    ```bash
    npm run build
    ```
* **Run tests:**
    ```bash
    npm test
    ```

### Project Structure
The logic is organized within the `src/` directory:

* `validators/`: Validation logic (RUC, DNI, etc.).
* `ruc/`: RUC-specific utilities.
* `tax/`: Tax calculations (VAT/IGV, detractions, etc.).
* `format/`: String, currency, and document formatting.
* `normalize/`: Data cleaning and normalization.
* `constants/`: Shared data types and constants.

---

## Contribution Guidelines

To maintain project quality, please follow these guidelines:

* **No dependencies:** The library must remain lightweight. Avoid adding external packages unless strictly necessary.
* **TypeScript:** Write clean, readable, and strictly typed code.
* **Testing:** Any new feature or fix **must** include its corresponding tests.
* **Style:** Respect the existing code style and CamelCase naming convention.

### Commit Convention
We use clear messages to keep the history readable:
* `feat:` for new features.
* `fix:` for bug fixes.
* `docs:` for documentation changes.
* `refactor:` for code improvements that do not change functionality.

---

## Pull Requests

Before submitting your PR, make sure:
1. All tests pass (`npm test`).
2. The PR is focused (avoid mixing changes from different topics in a single PR).
3. Clearly describe what you changed and why it is necessary.

---

## Project Philosophy

* **Simplicity:** Easy solutions for complex SUNAT processes.
* **Performance:** Optimized and fast code.
* **Universality:** Full compatibility with both **Node.js** and the **Browser**.

---

## Disclaimer

> [!IMPORTANT]
> This is **not** an official SUNAT project. It is a community initiative. Always verify critical calculations with a certified accountant.

**Thanks for being part of the Peruvian Open Source ecosystem! 🙌**