import { Octokit } from "@octokit/core";
import config from "./config.json";

const octokit = new Octokit({
  auth: config.githubToken,
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
