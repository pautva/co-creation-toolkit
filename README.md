# Co-Design Toolkit

This toolkit is designed for anyone involved in creating environmental data services and products, including researchers, developers, designers, and project managers. The toolkit includes a variety of resources, such as case studies showcasing successful UX in environmental data products, templates for UX deliverables, and links to external tools. We are actively seeking your input to understand your needs and ensure the toolkit is tailored to address them effectively.

This toolkit is designed to be accessible to users with varying levels of UX experience. It includes resources for both beginners and experienced practitioners.

# GitHub Pages Link

https://nerc-eds.github.io/co-creation-toolkit/

# How to contribute to this toolkit

We encourage community contributions! You can share your own resources, case studies, or suggest improvements via our GitHub repository. You can also get in touch with us at ux@bgs.ac.uk

## Add new Case Studies

> Case studies showcase real-world examples of how UX (User Experience) methods have been successfully applied to address **environmental data** challenges. Your contributions should include a brief overview of the project, the specific UX methods used (e.g., design sprints, user research, prototyping), the outcomes achieved, and any key takeaways for others working on similar projects. Your case studies will inspire and guide others in the field, demonstrating the power of user-centered design.

1. Create a new markdown file in the [co-creation-toolkit/src/content/case-studies/](https://github.com/NERC-EDS/co-creation-toolkit/tree/main/src/content/case-studies) folder following [this template](https://github.com/NERC-EDS/co-creation-toolkit/blob/main/src/content/templates/case-study.md).
2. Update the case study description at the top of the page
3. Add content below the '---' line
4. Add images and other assets to the Case Studies Assets folder (https://github.com/NERC-EDS/co-creation-toolkit/tree/main/static/assets/case-studies)
5. Create a pull request into the main branch
6. Once the updated files are merged into the `main` branch, the website will be updated

## Add new tools to the UX Toolkit

> Toolkit includes templates, guides, and documents that can help others implement effective UX practices in their **environmental data** projects. Think of things like persona templates, interview guides, product requirement documents, usability testing scripts, and any other tools you've found valuable. Your contributions will empower others to gather user insights, design user-friendly solutions, and create impactful environmental data products and services.

1. Create a new markdown file in the [co-creation-toolkit/src/content/toolkit/](https://github.com/NERC-EDS/co-creation-toolkit/tree/main/src/content/toolkit) folder following this [template](https://github.com/NERC-EDS/co-creation-toolkit/blob/main/src/content/templates/toolkit-method.md).
2. Update the toolkit description at the top of the page
3. Specify the [category](https://pautva.github.io/co-creation-toolkit/toolkit/) under which the method/tool should be shown in the markdown file: 
    * **User Research**
    * **Design and Prototyping**
    * **Evaluation**
    * **Collaboration**
4. Add content below the '---' line
5. Add images and other assets to the Toolkit Assets folder (https://github.com/NERC-EDS/co-creation-toolkit/tree/main/static/assets/toolkit)
6. Create a pull request into the main branch
7. Once the updated files are merged into the `main` branch, the website will be updated

## Markdown Cheat Sheet

Learn how to format documents using markdown https://www.markdownguide.org/cheat-sheet/

---

## Tooling

* [Astro](https://astro.build/) - a modern static site generator for creating content-driven websites
* [Tailwind CSS](https://tailwindcss.com/) - a utility-first CSS framework
* [Preline UI](https://preline.co/) - open-source Tailwind CSS components library 
* [Markdown](https://www.markdownguide.org/cheat-sheet/) - markdown syntax for content creation
* [GitHub Actions](https://docs.astro.build/en/guides/deploy/github/) - CI/CD pipeline for publishing on GitHub Pages
* [GitHub Pages](https://docs.github.com/en/pages/quickstart) - hosting

---

## 👀 Want to learn more about Astro?

Check [Astro documentation](https://docs.astro.build).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
