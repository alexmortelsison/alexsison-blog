import { client, urlFor } from "@/app/lib/sanity";
import { fullBlog } from "@/lib/interface";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidae = 30;

async function getData(slug: string) {
  const query = `*[_type == "blog" && slug.current == '${slug}'] {
  "currentSlug": slug.current,
    title,
    content,
    titleImage
}[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);
  return (
    <div className="mt-8">
      <h1>
        <span className="block text-base text-center font-semibold tracking-wide uppercase">
          Alex<span className="text-primary">Sison - Blog</span>
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        alt={"title image"}
        width={800}
        height={800}
        priority
        className="rounded-lg mt-8 mx-auto"
      />

      <div className="mt-16 prose-blue prose-xl prose-h4:text-primary prose-h4:font-bold prose-h4:text-2xl">
        <PortableText value={data.content}></PortableText>
      </div>
    </div>
  );
}
