import { readdir, readFile } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";


export async function getFeaturedReview() {
    const reviews = await getReviews();
    return reviews[0];
}

export async function getReview(slug) {
    const text = await readFile(`./content/reviews/${slug}.md`, "utf-8");
    const {
        content,
        data: { title, date, image },
    } = matter(text);
    const body = marked(content);

    return { slug, title, date, image, body };
}


export async function getReviews() {
    const slugs = await getSlugs();

    const reviews = [];
    for (const slug of slugs) {
        const review = await getReview(slug);
        reviews.push(review);
    }
    // console.log("Slugs:", slugs);
    // console.log("Files:", files);
    reviews.sort((a, b) => b.date.localeCompare(a.date));
    return reviews;
}

export async function getSlugs() {
    const files = await readdir("./content/reviews");
    const slugs = files.filter((file) => file.endsWith(".md")).map
        ((file) => file.slice(0, -'.md'.length));
    return slugs;
}