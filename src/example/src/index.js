import { example } from "../../declarations/example";

// Environment-specific logic
if (
  process.env.DFX_NETWORK === "staging" ||
  process.env.DFX_NETWORK === "local"
) {
  document.getElementById("pencil-banner").classList.remove("hidden");
}

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();

  button.setAttribute("disabled", true);

  // Interact with foo actor, calling the greet method
  const greeting = await example.greet(name);

  button.removeAttribute("disabled");

  document.getElementById("greeting").innerText = greeting;

  return false;
});
