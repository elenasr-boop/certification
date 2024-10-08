import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: "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",
});

export async function getUsers(request, isIncrease) {
    const res = await octokit.request(`GET /search/users?q=${request};sort=repositories;order=${isIncrease ? "asc" : "desc"}`, {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
        per_page: 50,
      });
    return {data: res.data, links: res.headers.link};
}

export async function changePage(link) {
  const res = await octokit.request(`GET ${link}`, {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    }
  });
  return {data: res.data, links: res.headers.link};
}
