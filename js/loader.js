function loadText(targetId, path) {
  fetch(path)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load text.");
      }
      return response.text();
    })
    .then(text => {
      document.getElementById(targetId).textContent = text;
    })
    .catch(error => {
      console.error(error);
      document.getElementById(targetId).textContent = "Error loading text.";
    });
}