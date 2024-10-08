export async function getUsers (login) {
    const res = await fetch(`https://api.github.com/search/users?q=${login}`);
    const data = await res.json();
    return data;
}
