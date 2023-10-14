let marked;

import("https://cdn.jsdelivr.net/npm/marked/marked.min.js")
  .then((module) => {
    marked = module.marked;
    // rest of your code...
  })
  .catch((error) => console.error("Error importing marked:", error));

async function fetchRepoFiles() {
  const repoOwner = "cmoskvitin";
  const repoName = "moskvit.in";
  const branchName = "main"; // or 'master' or whatever your branch name is

  try {
    const response = await fetch(
      `https://api.github.com/repos/${repoOwner}/${repoName}/git/trees/${branchName}?recursive=1`
    );
    const data = await response.json();

    const markdownFiles = data.tree.filter((item) => {
      return (
        item.type === "blob" &&
        item.path.startsWith("notes/") &&
        item.path.endsWith(".md")
      );
    });

    // Map markdownFiles to an array of objects with the desired structure
    const notes = markdownFiles.map((file) => {
      const title = file.path.split("/").pop().replace(".md", "");
      const url = `https://github.com/${repoOwner}/${repoName}/blob/${branchName}/${file.path}`;
      return { title, url };
    });

    // Create the result object
    const result = {
      notesCount: markdownFiles.length,
      notes,
    };

    // Return the result object
    return result;
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

fetchRepoFiles().then((result) => console.log(result));
