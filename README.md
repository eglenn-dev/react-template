# React + TS + SWC Template

This is a template for a React project with TypeScript and SWC. It uses Vite with React, TypeScript, and SWC. Origionally made to make ti easier to start and deploy simple projects to GitHub Pages.

## Resources

There are two methods for deployment and they are both found here:

-   [Deploying a Static Site (vite.dev)](https://vite.dev/guide/static-deploy)
-   [Deploying Vite / React App to GitHub Pages (dev.to)](https://dev.to/rashidshamloo/deploying-vite-react-app-to-github-pages-35hf)

## Deployment methods

### Option 1: Using GitHub Actions

1.  Create a new repository from this template, and clone the repo locally.
2.  Go to the repository settings and enable GitHub Pages.
3.  Set the correct base in `vite.config.js`, for example:

    ```js
    export default defineConfig({
        base: "/<YOUR_REPO_NAME>/",
        plugins: [react()],
    });
    ```

    -   If you are deploying to `https://<USERNAME>.github.io/` then set the base to `/`.
    -   If you are deploying to `https://<USERNAME>.github.io/<REPO_NAME>/` then set the base to `/<REPO_NAME>/`.

4.  In the repository settings under `Pages`, configure the 'Build and Deployment' source to use `GitHub Actions`.

### Option 2: Using GitHub Pages CLI

1. Clone the repo locally.
2. Run `npm install` from the project root.
3. Run `npm run deploy` to deploy the project to GitHub Pages.
    - This is not an automatic deployment, you will need to run this command every time you want to deploy.
