// tina/config.tsx
import { defineConfig } from "tinacms";
var config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  branch: "main",
  token: process.env.TINA_TOKEN || "",
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads"
    }
  },
  build: {
    publicFolder: "public",
    outputFolder: "admin"
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Homepage",
        path: "content/home",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          // ── HERO ──────────────────────────────────────────────
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "badge_en", label: "Badge (EN)" },
              { type: "string", name: "badge_nl", label: "Badge (NL)" },
              { type: "string", name: "title_en", label: "Title (EN)" },
              { type: "string", name: "title_nl", label: "Title (NL)" },
              { type: "string", name: "description_en", label: "Description (EN)", ui: { component: "textarea" } },
              { type: "string", name: "description_nl", label: "Description (NL)", ui: { component: "textarea" } },
              { type: "string", name: "cta_en", label: "CTA Button (EN)" },
              { type: "string", name: "cta_nl", label: "CTA Button (NL)" },
              { type: "string", name: "connect_en", label: "Avatar text (EN)" },
              { type: "string", name: "connect_nl", label: "Avatar text (NL)" },
              { type: "string", name: "experts_en", label: "Experts label (EN)" },
              { type: "string", name: "experts_nl", label: "Experts label (NL)" }
            ]
          },
          // ── ABOUT ─────────────────────────────────────────────
          {
            type: "object",
            name: "about",
            label: "About Section",
            fields: [
              { type: "string", name: "title_en", label: "Title (EN)" },
              { type: "string", name: "title_nl", label: "Title (NL)" },
              { type: "string", name: "intro_en", label: "Intro (EN)", ui: { component: "textarea" } },
              { type: "string", name: "intro_nl", label: "Intro (NL)", ui: { component: "textarea" } },
              { type: "string", name: "stat1_label_en", label: "Stat 1 Label (EN)" },
              { type: "string", name: "stat1_label_nl", label: "Stat 1 Label (NL)" },
              { type: "string", name: "stat2_label_en", label: "Stat 2 Label (EN)" },
              { type: "string", name: "stat2_label_nl", label: "Stat 2 Label (NL)" },
              { type: "string", name: "stat3_label_en", label: "Stat 3 Label (EN)" },
              { type: "string", name: "stat3_label_nl", label: "Stat 3 Label (NL)" },
              { type: "string", name: "stat4_label_en", label: "Stat 4 Label (EN)" },
              { type: "string", name: "stat4_label_nl", label: "Stat 4 Label (NL)" }
            ]
          },
          // ── FOCUS ─────────────────────────────────────────────
          {
            type: "object",
            name: "focus",
            label: "Focus Section",
            fields: [
              { type: "string", name: "title_en", label: "Title (EN)" },
              { type: "string", name: "title_nl", label: "Title (NL)" },
              { type: "string", name: "intro_en", label: "Intro (EN)", ui: { component: "textarea" } },
              { type: "string", name: "intro_nl", label: "Intro (NL)", ui: { component: "textarea" } },
              { type: "string", name: "card1_title_en", label: "Card 1 Title (EN)" },
              { type: "string", name: "card1_title_nl", label: "Card 1 Title (NL)" },
              { type: "string", name: "card1_text_en", label: "Card 1 Text (EN)", ui: { component: "textarea" } },
              { type: "string", name: "card1_text_nl", label: "Card 1 Text (NL)", ui: { component: "textarea" } },
              { type: "string", name: "card2_title_en", label: "Card 2 Title (EN)" },
              { type: "string", name: "card2_title_nl", label: "Card 2 Title (NL)" },
              { type: "string", name: "card2_text_en", label: "Card 2 Text (EN)", ui: { component: "textarea" } },
              { type: "string", name: "card2_text_nl", label: "Card 2 Text (NL)", ui: { component: "textarea" } },
              { type: "string", name: "card3_title_en", label: "Card 3 Title (EN)" },
              { type: "string", name: "card3_title_nl", label: "Card 3 Title (NL)" },
              { type: "string", name: "card3_text_en", label: "Card 3 Text (EN)", ui: { component: "textarea" } },
              { type: "string", name: "card3_text_nl", label: "Card 3 Text (NL)", ui: { component: "textarea" } }
            ]
          },
          // ── SERVICES ──────────────────────────────────────────
          {
            type: "object",
            name: "services",
            label: "Services Section",
            fields: [
              { type: "string", name: "title_en", label: "Title (EN)" },
              { type: "string", name: "title_nl", label: "Title (NL)" },
              { type: "string", name: "sub_en", label: "Subtitle (EN)" },
              { type: "string", name: "sub_nl", label: "Subtitle (NL)" },
              { type: "string", name: "service1_en", label: "Service 1 (EN)" },
              { type: "string", name: "service1_nl", label: "Service 1 (NL)" },
              { type: "string", name: "service2_en", label: "Service 2 (EN)" },
              { type: "string", name: "service2_nl", label: "Service 2 (NL)" },
              { type: "string", name: "service2_text_en", label: "Service 2 Text (EN)", ui: { component: "textarea" } },
              { type: "string", name: "service2_text_nl", label: "Service 2 Text (NL)", ui: { component: "textarea" } },
              { type: "string", name: "service3_en", label: "Service 3 (EN)" },
              { type: "string", name: "service3_nl", label: "Service 3 (NL)" }
            ]
          },
          // ── GOVERNANCE / CTA ──────────────────────────────────
          {
            type: "object",
            name: "governance",
            label: "Governance & CTA Section",
            fields: [
              { type: "string", name: "title_en", label: "Title (EN)" },
              { type: "string", name: "title_nl", label: "Title (NL)" },
              { type: "string", name: "text_en", label: "Text (EN)", ui: { component: "textarea" } },
              { type: "string", name: "text_nl", label: "Text (NL)", ui: { component: "textarea" } },
              { type: "string", name: "cta_heading_en", label: "CTA Heading (EN)" },
              { type: "string", name: "cta_heading_nl", label: "CTA Heading (NL)" },
              { type: "string", name: "cta_sub_en", label: "CTA Sub (EN)" },
              { type: "string", name: "cta_sub_nl", label: "CTA Sub (NL)" },
              { type: "string", name: "cta_btn_en", label: "CTA Button (EN)" },
              { type: "string", name: "cta_btn_nl", label: "CTA Button (NL)" }
            ]
          },
          // ── FOOTER ────────────────────────────────────────────
          {
            type: "object",
            name: "footer",
            label: "Footer",
            fields: [
              { type: "string", name: "desc_en", label: "Description (EN)" },
              { type: "string", name: "desc_nl", label: "Description (NL)" }
            ]
          }
        ]
      }
    ]
  }
});
var config_default = config;
export {
  config_default as default
};
