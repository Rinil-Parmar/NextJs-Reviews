// "use client";

import Heading from "../../../../components/Heading";
import { getReview, getSlugs } from "../../../../lib/reviews";
import ShareButtons from "../../../../components/ShareButtons";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}

export default async function ReviewPage({ params: { slug } }) {
  const review = await getReview(slug);
  console.log("[ReveiwPage] rendering:", slug);
  return (
    <>
      <Heading>{review.title}</Heading>
      <div className="flex gap-3 items-baseline">
        <p className="pb-2 italic">{review.date}</p>
        <ShareButtons />
      </div>
      <img
        src={review.image}
        alt=""
        width="640"
        height="360"
        className="mb-2 rounded-xl"
      />
      {/* <p>
        This will be the review for the Stardew Valley.
        {html}
      </p> */}

      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="prose max-w-screen-sm prose-slate"
      />
    </>
  );
}
