// src/utils/blog.ts

import type {
  Post,
  Category,
  CategoryResponse,
  ApiResponse,
} from "../types/payload";

// Define API URL - make sure this environment variable is set in your .env file
export const PAYLOAD_URL =
  import.meta.env.PUBLIC_PAYLOAD_URL || "http://localhost:3000";

// Transform post data to include full URLs
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

// Format date helper
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Fetch categories helper
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

// Render content based on node type
export function renderContentNode(node: any): string {
  if (!node) return "";

  switch (node.type) {
    case "paragraph":
      return `<p class="mb-6 text-gray-700 leading-relaxed">${node.children
        ?.map((child) => child.text)
        .join("")}</p>`;

    case "upload":
      if (node.value) {
        return `<div class="my-8">
          <img
            src="${PAYLOAD_URL}${node.value.url}"
            alt="${node.value.alt || ""}"
            class="w-full h-auto rounded-lg"
            style="max-height: 500px; object-fit: cover;"
          />
        </div>`;
      }
      return "";

    case "blockquote":
      return `<blockquote class="border-l-4 border-gray-300 pl-4 my-6 italic">
        ${node.children?.map((child) => child.text).join("")}
      </blockquote>`;

    default:
      return "";
  }
}
