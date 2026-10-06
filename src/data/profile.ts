/* ==========================================================================
   PERSONAL DETAILS — edit this file for contact and profile links.
   Leave a value as "" to hide that item from the page.
   ========================================================================== */
export const profile = {
  name: "Shreevas M Karanth",
  role: "Associate Architect",
  company: "Tarento Technologies",
  location: "Bengaluru, India",          // e.g. "Bengaluru, India"

  email: "karanth.shree1990@gmail.com",  // personal email
  phone: "+91 7829014382",               // shown as text, "" to hide

  linkedin: "https://www.linkedin.com/in/shreevas-karanth-9005ba84",
  github: "https://github.com/Shreevas-Karanth",
  medium: "",                            // blog / Medium / Dev.to (optional)
  twitter: "",                           // X / Twitter URL (optional)

  // Put your resume PDF at public/resume.pdf and set this to "/resume.pdf" to show a download button
  resume: "",
};

export type IconName = "linkedin" | "github" | "email" | "phone" | "location" | "medium" | "twitter";

export const icons: Record<IconName, string> = {
  linkedin: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.83 0-2.1 1.43-2.1 2.9V21H9z"/>',
  github: '<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>',
  email: '<path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2L4 7.3V17h16V7.3l-8 4.9Z"/>',
  phone: '<path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/>',
  location: '<path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7Zm0 4.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"/>',
  medium: '<path d="M4 6h3l5 9 5-9h3v12h-3v-7l-5 8-5-8v7H4z"/>',
  twitter: '<path d="M17.7 3h3.1l-6.8 7.8L22 21h-6.3l-4.9-6.4L5.2 21H2.1l7.3-8.3L1.8 3h6.4l4.4 5.9L17.7 3Zm-1.1 16.2h1.7L7.5 4.7H5.7l10.9 14.5Z"/>',
};

export const prettyUrl = (u: string) => u.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
