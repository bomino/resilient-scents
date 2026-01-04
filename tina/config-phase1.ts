import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master",
  clientId: process.env.TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "products",
        label: "Products",
        path: "src/content/products",
        format: "md",
        ui: {
          filename: {
            slugify: (values) => {
              return `${values?.slug || ''}`;
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "slug",
            label: "URL Slug",
            required: true,
            description: "Used in the product URL (e.g., 'savage' for /shop/savage)",
          },
          {
            type: "string",
            name: "name",
            label: "Product Name",
            required: true,
            description: "Display name of the product",
          },
          {
            type: "string",
            name: "tagline",
            label: "Tagline",
            required: true,
            description: "Short catchy phrase for the product",
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
            options: [
              { value: "women", label: "Women" },
              { value: "men", label: "Men" },
              { value: "unisex", label: "Unisex" },
            ],
          },
          {
            type: "string",
            name: "type",
            label: "Product Type",
            required: true,
            options: [
              { value: "fragrance-oil", label: "Fragrance Oil" },
              { value: "body-butter", label: "Body Butter" },
            ],
          },
          {
            type: "number",
            name: "price",
            label: "Base Price ($)",
            required: true,
            description: "Default price in USD",
          },
          {
            type: "string",
            name: "currency",
            label: "Currency",
            required: true,
            options: ["USD"],
            ui: {
              component: "select",
            },
          },
          {
            type: "object",
            name: "sizes",
            label: "Size Options",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.size || "New Size" };
              },
            },
            fields: [
              {
                type: "string",
                name: "size",
                label: "Size",
                required: true,
              },
              {
                type: "number",
                name: "price",
                label: "Price ($)",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "scent_notes",
            label: "Scent Profile",
            fields: [
              {
                type: "string",
                name: "top",
                label: "Top Notes",
                list: true,
                description: "Initial scents (first 15 minutes)",
              },
              {
                type: "string",
                name: "middle",
                label: "Heart/Middle Notes",
                list: true,
                description: "Main body of the fragrance (2-4 hours)",
              },
              {
                type: "string",
                name: "base",
                label: "Base Notes",
                list: true,
                description: "Long-lasting foundation notes",
              },
            ],
          },
          {
            type: "string",
            name: "best_for",
            label: "Best For",
            list: true,
            description: "Occasions or situations where this product shines",
          },
          {
            type: "string",
            name: "ingredients",
            label: "Ingredients",
            required: true,
            ui: {
              component: "textarea",
            },
            description: "Full ingredient list",
          },
          {
            type: "string",
            name: "how_to_use",
            label: "How to Use",
            required: true,
            ui: {
              component: "textarea",
            },
            description: "Application instructions",
          },
          {
            type: "string",
            name: "warnings",
            label: "Warnings",
            required: true,
            ui: {
              component: "textarea",
            },
            description: "Safety warnings and precautions",
          },
          {
            type: "image",
            name: "images",
            label: "Product Images",
            list: true,
            description: "Upload or select product images",
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured Product",
            description: "Show this product in featured sections",
          },
          {
            type: "string",
            name: "badge",
            label: "Badge",
            options: [
              { value: "", label: "None" },
              { value: "Bestseller", label: "Bestseller" },
              { value: "New", label: "New" },
              { value: "Limited", label: "Limited Edition" },
              { value: "Popular", label: "Popular" },
              { value: "Essential", label: "Essential" },
            ],
            description: "Optional product badge",
          },
        ],
      },
      {
        name: "testimonials",
        label: "Testimonials",
        path: "src/content/testimonials",
        format: "md",
        ui: {
          filename: {
            slugify: (values) => {
              const name = values?.name || 'testimonial';
              return `${name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "name",
            label: "Customer Name",
            required: true,
          },
          {
            type: "string",
            name: "location",
            label: "Location",
            required: true,
          },
          {
            type: "reference",
            name: "product",
            label: "Product",
            collections: ["products"],
            required: true,
          },
          {
            type: "number",
            name: "rating",
            label: "Rating (1-5)",
            required: true,
            ui: {
              parse: (val) => Number(val),
              format: (val) => String(val),
            },
          },
        ],
      },
      {
        name: "faq",
        label: "FAQ",
        path: "src/content/faq",
        format: "md",
        ui: {
          filename: {
            slugify: (values) => {
              const category = values?.category || 'general';
              return `${category.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
            options: [
              "Products",
              "Application",
              "Skin & Safety",
              "Shipping & Returns",
              "Orders",
            ],
          },
          {
            type: "string",
            name: "question",
            label: "Question",
            required: true,
          },
        ],
      },
    ],
  },
});
