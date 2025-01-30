import type {
  Post,
  Category,
  CategoryResponse,
  ApiResponse,
} from "../types/payload";

export const PAYLOAD_URL =
  import.meta.env.PUBLIC_PAYLOAD_URL || "http://localhost:3000";

export function transformPost(post: Post): Post {
  return {
    ...post,
    featuredImage: post.featuredImage
      ? {
          ...post.featuredImage,
          url: `${PAYLOAD_URL}${post.featuredImage.url}`,
        }
      : undefined,
    author: post.author
      ? {
          ...post.author,
          profileImage: post.author.profileImage
            ? {
                ...post.author.profileImage,
                url: `${PAYLOAD_URL}${post.author.profileImage.url}`,
              }
            : undefined,
        }
      : undefined,
  };
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export async function fetchCategories(): Promise<Category[]> {
  try {
    const response = await fetch(`${PAYLOAD_URL}/api/categories`);
    if (!response.ok) throw new Error("Failed to fetch categories");
    const data: CategoryResponse = await response.json();
    return data.docs;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export function renderContentNode(node: any): string {
  if (!node) return "";

  const nodeTypes = {
    text: () => {
      let content = node.text;
      if (node.bold) content = `<strong>${content}</strong>`;
      if (node.italic) content = `<em>${content}</em>`;
      if (node.underline) content = `<u>${content}</u>`;
      if (node.code) content = `<code>${content}</code>`;
      return content;
    },

    heading: () => {
      const content = node.children
        .map((child: any) => renderContentNode(child))
        .join("");
      const tag = node.tag || "h3";
      return `<${tag} class="text-3xl font-bold my-6">${content}</${tag}>`;
    },

    paragraph: () => {
      const content = node.children
        .map((child: any) => renderContentNode(child))
        .join("");
      return `<p class="mb-6 text-gray-700 leading-relaxed">${content}</p>`;
    },

    list: () => {
      const items = node.children
        .map((item: any) => {
          const content = item.children
            .map((child: any) => renderContentNode(child))
            .join("");
          return `<li>${content}</li>`;
        })
        .join("");
      const type = node.listType === "numbered" ? "ol" : "ul";
      const className = type === "ul" ? "list-disc" : "list-decimal";
      return `<${type} class="my-6 ml-6 ${className}">${items}</${type}>`;
    },

    link: () => {
      const content = node.children
        .map((child: any) => renderContentNode(child))
        .join("");
      return `<a href="${node.url}" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">${content}</a>`;
    },

    upload: () => {
      if (!node.value) return "";
      return `
        <div class="my-8">
          <a href="${PAYLOAD_URL}${
        node.value.url
      }" target="_blank" rel="noopener noreferrer">
            <img
              src="${PAYLOAD_URL}${node.value.url}"
              alt="${node.value.alt || ""}"
              class="w-full h-auto rounded-lg cursor-pointer transition-opacity hover:opacity-90"
              style="max-height: 400px; object-fit: cover;"
            />
          </a>
        </div>
      `;
    },

    quote: () => {
      const content = node.children
        .map((child: any) => renderContentNode(child))
        .join("");
      return `<blockquote class="border-l-4 border-blue-700 pl-4 my-6 italic">${content}</blockquote>`;
    },
  };

  const renderer = nodeTypes[node.type as keyof typeof nodeTypes];
  if (renderer) return renderer();

  if (node.children) {
    return node.children.map((child: any) => renderContentNode(child)).join("");
  }

  return "";
}
