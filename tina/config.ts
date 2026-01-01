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
        path: "src/data",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: 'products'
        },
        fields: [
          {
            type: "object",
            name: "products",
            label: "Product List",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.name || "New Product" };
              },
            },
            fields: [
              {
                type: "number",
                name: "id",
                label: "Product ID",
                required: true,
                description: "Unique identifier for the product",
              },
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
                  defaultValue: "USD",
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
                name: "vibe",
                label: "Vibe Description",
                required: true,
                ui: {
                  component: "textarea",
                },
                description: "Emotional/aspirational description of the scent",
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
                type: "string",
                name: "images",
                label: "Product Images",
                list: true,
                description: "Image paths (e.g., /images/product-name.jpg)",
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
        ],
      },
      {
        name: "testimonials",
        label: "Testimonials",
        path: "src/data",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: 'testimonials'
        },
        fields: [
          {
            type: "object",
            name: "testimonials",
            label: "Testimonial List",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.name || "New Testimonial" };
              },
            },
            fields: [
              {
                type: "number",
                name: "id",
                label: "ID",
                required: true,
              },
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
                type: "string",
                name: "product",
                label: "Product",
                required: true,
                options: [
                  "Savage",
                  "Tommy-B",
                  "Rihanna",
                  "Belle",
                  "One Million",
                  "Nag Champa",
                  "Unscented Body Butter",
                ],
              },
              {
                type: "string",
                name: "text",
                label: "Testimonial Text",
                required: true,
                ui: {
                  component: "textarea",
                },
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
        ],
      },
      {
        name: "faq",
        label: "FAQ",
        path: "src/data",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: 'faq'
        },
        fields: [
          {
            type: "object",
            name: "faqs",
            label: "FAQ List",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.question || "New Question" };
              },
            },
            fields: [
              {
                type: "number",
                name: "id",
                label: "ID",
                required: true,
              },
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
              {
                type: "string",
                name: "answer",
                label: "Answer",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
        ],
      },
    ],
  },
});