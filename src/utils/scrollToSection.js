export const scrollToSection = (sectionId, delay = 150) => {
  setTimeout(() => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, delay);
};
