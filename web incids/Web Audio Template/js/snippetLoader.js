// snippetLoader.js
async function loadSnippet(snippetPath, targetElementId) {
  try {
    const response = await fetch(snippetPath);
    if (!response.ok) {
      throw new Error(`Failed to fetch snippet from ${snippetPath}`);
    }
    const snippetHTML = await response.text();
    document.getElementById(targetElementId).innerHTML = snippetHTML;
  } catch (error) {
    console.error('Error loading snippet:', error);
  }
}
