// Small client-side helpers: confirm destructive actions and validate required fields.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-confirm]").forEach((el) =>
    el.addEventListener("submit", (e) => {
      if (!confirm(el.dataset.confirm)) e.preventDefault();
    })
  );
  document.querySelectorAll("form[data-validate]").forEach((form) =>
    form.addEventListener("submit", (e) => {
      const empty = [...form.querySelectorAll("[required]")].filter((i) => !i.value.trim());
      empty.forEach((i) => (i.style.borderColor = "#b42318"));
      if (empty.length) {
        e.preventDefault();
        alert("Please fill in all required fields.");
      }
    })
  );
});
