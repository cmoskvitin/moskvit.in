async function fetchRepoFiles() {
  const repoOwner = "cmoskvitin";
  const repoName = "moskvit.in";
  const branchName = "main"; // or 'master' or whatever your branch name is

  try {
    const response = await fetch(
      `https://api.github.com/repos/${repoOwner}/${repoName}/git/trees/${branchName}/notes?recursive=1`
    );
    const data = await response.json();

    const markdownFiles = data.tree.filter((item) => {
      return item.type === "blob" && item.path.endsWith(".md");
    });

    const fileNames = markdownFiles.map((file) =>
      file.path.split("/").pop().replace(".md", "")
    );
    const fileUrls = markdownFiles.map(
      (file) =>
        `https://github.com/${repoOwner}/${repoName}/blob/${branchName}/notes/${file.path}`
    );

    console.log("Filenames without .md:", fileNames);
    console.log("URLs to files:", fileUrls);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

fetchRepoFiles();
