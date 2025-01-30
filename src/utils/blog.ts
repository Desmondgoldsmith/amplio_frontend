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

// Helper function to handle text formatting
function applyTextFormatting(node: any): string {
  let content = node.text;

  // Handle text formats based on format property
  if (node.format) {
    switch (node.format) {
      case 1:
        content = `<strong>${content}</strong>`;
        break;
      case 2:
        content = `<em>${content}</em>`;
        break;
      case 3:
        content = `<u>${content}</u>`;
        break;
    }
  }

  // additional styling
  if (node.style) {
    if (node.style.includes("italic")) {
      content = `<em>${content}</em>`;
    }
    if (node.style.includes("underline")) {
      content = `<u>${content}</u>`;
    }
    if (node.style.includes("bold")) {
      content = `<strong>${content}</strong>`;
    }
  }

  return content;
}

export function renderContentNode(node: any): string {
  if (!node) return "";

  const nodeTypes = {
    text: () => {
      return applyTextFormatting(node);
    },

    heading: () => {
      const content = node.children
        .map((child: any) => renderContentNode(child))
        .join("");
      const tag = node.tag || "h3";
      const alignment = node.format === "center" ? "text-center" : "";
      return `<${tag} class="text-3xl font-bold my-6 ${alignment}">${content}</${tag}>`;
    },

    paragraph: () => {
      const content = node.children
        .map((child: any) => renderContentNode(child))
        .join("");
      // Handle text alignment
      const alignment =
        node.format === "center"
          ? "text-center"
          : node.format === "right"
          ? "text-right"
          : "text-left";

      const styleClasses = [];
      if (node.textStyle) {
        if (node.textStyle.includes("italic")) styleClasses.push("italic");
        if (node.textStyle.includes("underline"))
          styleClasses.push("underline");
        if (node.textStyle.includes("bold")) styleClasses.push("font-bold");
      }

      const classNames = [
        "mb-6",
        "text-gray-700",
        "leading-relaxed",
        alignment,
        ...styleClasses,
      ].join(" ");

      return `<p class="${classNames}">${content}</p>`;
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
      const alignment = node.format === "center" ? "text-center" : "";
      const className = `my-6 ml-6 ${
        type === "ul" ? "list-disc" : "list-decimal"
      } ${alignment}`;
      return `<${type} class="${className}">${items}</${type}>`;
    },

    link: () => {
      // Get the URL from the fields object, with a fallback to the url property
      const url = node.fields?.url || node.url;
      if (!url)
        return node.children
          .map((child: any) => renderContentNode(child))
          .join("");

      // Get link properties
      const newTab = node.fields?.newTab ?? true;
      const content = node.children
        .map((child: any) => renderContentNode(child))
        .join("");

      // Build link attributes
      const target = newTab ? "_blank" : "_self";
      const rel = newTab ? "noopener noreferrer" : "";

      return `<a 
        href="${url}" 
        target="${target}" 
        ${rel ? `rel="${rel}"` : ""} 
        class="text-blue-600 hover:underline"
      >${content}</a>`;
    },

    upload: () => {
      if (!node.value) return "";

      // Handle image alignment
      const alignment = node.format === "center" ? "mx-auto text-center" : "";

      // Process caption if it exists
      const caption = node.children?.[0]?.text
        ? `<p class="text-sm text-gray-500 mt-2 ${alignment}">${node.children[0].text}</p>`
        : "";

      // Generate a unique ID for the modal
      const modalId = `modal-${Math.random().toString(36).substr(2, 9)}`;

      return `
        <div class="my-8 ${alignment}">
          <!-- Image Container -->
          <div class="relative group cursor-zoom-in">
            <img
              src="${PAYLOAD_URL}${node.value.url}"
              alt="${node.value.alt || ""}"
              class="w-full h-auto rounded-lg transition-all duration-300"
              style="max-height: none; object-fit: contain;"
              onclick="document.getElementById('${modalId}').classList.remove('hidden')"
            />
            <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity rounded-lg"></div>
          </div>
          ${caption}
          
          <!-- Modal -->
          <div 
            id="${modalId}" 
            class="hidden fixed inset-0 z-50 bg-black bg-opacity-90 p-4 cursor-zoom-out"
            onclick="this.classList.add('hidden')"
          >
            <div class="absolute top-4 right-4 flex gap-4">
              <!-- Download button -->
              <a 
                href="${PAYLOAD_URL}${node.value.url}" 
                download
                class="p-2 bg-white rounded-full hover:bg-gray-100"
                onclick="event.stopPropagation()"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
              </a>
              <!-- Close button -->
              <button 
                class="p-2 bg-white rounded-full hover:bg-gray-100"
                onclick="document.getElementById('${modalId}').classList.add('hidden')"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            
            <!-- Modal Image -->
            <div class="h-full flex items-center justify-center">
              <img
                src="${PAYLOAD_URL}${node.value.url}"
                alt="${node.value.alt || ""}"
                class="max-h-full max-w-full object-contain"
                onclick="event.stopPropagation()"
              />
            </div>
          </div>
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
