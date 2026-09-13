// All project information is stored here.
// To add a new project in the future, copy the example project below
// and replace its details with your own project information.

/*
  HOW TO ADD A NEW PROJECT IN THE FUTURE:

  1. Copy the project object below.
  2. Paste it after the previous project.
  3. Change the following details:
     → title       = Your project name
     → description = Short description of the project
     → image       = Project screenshot path
     → tags        = Technologies used
     → link        = Live project website
     → github      = GitHub repository link

  4. Put the project screenshot inside:
     public/projects/

  5. Make sure the image path matches the filename exactly.

  IMPORTANT:
  → Add new projects ONLY in this file.
  → Do NOT add project information in Projects.jsx
    or AllProjects.jsx.
  → Projects.jsx and AllProjects.jsx automatically
    use the data from this file.

  EXAMPLE:

  {
    title: "My New Project",
    description: "A short description of my project.",
    image: "/projects/My-New-Project.png",
    tags: ["React", "JavaScript", "Tailwind"],
    link: "https://my-new-project.vercel.app/",
    github: "https://github.com/username/my-new-project",
  }
*/

export const projects = [
  {
    title: "Flower Shop Dashboard",
    description:
      "React + Tailwind flower shop frontend — product catalog with cart, discount pricing, reviews, and a contact form. This is only a dummy frontend; backend features like the form are not connected yet!",
    image: "/projects/Flower-shop.png",
    tags: ["React", "JavaScript", "Tailwind"],
    link: "https://flower-shop-by-dhruv.vercel.app/",
    github: "https://github.com/Dhruv-Poddar-07/Flower-Shop",
  },

  // ============================================================
  // EXAMPLE — COPY THIS FORMAT FOR FUTURE PROJECTS
  // Replace every value with your own project details.
  // ============================================================

  // {
  //   title: "My New Project",
  //   description:
  //     "A short description explaining what the project does and the technologies used.",
  //   image: "/projects/My-New-Project.png",
  //   tags: ["React", "JavaScript", "Tailwind"],
  //   link: "https://my-new-project.vercel.app/",
  //   github: "https://github.com/username/my-new-project",
  // },

  // ============================================================
  // FUTURE PROJECT:
  // 1. Copy the example above.
  // 2. Remove the // from each line.
  // 3. Change the title, description, image, tags, live link
  //    and GitHub link.
  // 4. Put the project image inside: public/projects/
  // ============================================================
];