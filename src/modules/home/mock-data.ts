import type { TemplateItem } from "@/components/templates/template-card";

export const categories = ["卡片", "歌单", "海报", "语音厅"];

export const quickActions = [
  { label: "素材提取", mark: "◇" },
  { label: "歌单识别", mark: "T" },
  { label: "图片拼接", mark: "▦" },
  { label: "AI抠图", mark: "✦" },
];

export const recommendGroups = [
  {
    title: "冠歌卡",
    layout: "square",
    items: [
      { title: "星梦冠歌卡", imageSrc: "/mock/templates/guange-demo.JPG" },
      { title: "紫雾冠歌卡", imageSrc: "/mock/templates/guange-demo.JPG" },
      { title: "限定冠歌卡", imageSrc: "/mock/templates/guange-demo.JPG" },
    ],
  },
  {
    title: "冠名卡",
    layout: "square",
    items: [
      { title: "粉玫冠名卡", imageSrc: "/mock/templates/guanming-demo.JPG" },
      { title: "情绪冠名卡", imageSrc: "/mock/templates/guanming-demo.JPG" },
      { title: "双人冠名卡", imageSrc: "/mock/templates/guanming-demo.JPG" },
    ],
  },
  {
    title: "歌单",
    layout: "portrait",
    items: [
      { title: "粉甜歌单", imageSrc: "/mock/templates/songlist-demo.JPG" },
      { title: "长图歌单", imageSrc: "/mock/templates/songlist-demo.JPG" },
      { title: "房间歌单", imageSrc: "/mock/templates/songlist-demo.JPG" },
    ],
  },
  {
    title: "海报",
    layout: "portrait",
    items: [
      { title: "清恬活动海报", imageSrc: "/mock/templates/poster-demo.JPG" },
      { title: "签约海报", imageSrc: "/mock/templates/poster-demo.JPG" },
      { title: "任务海报", imageSrc: "/mock/templates/poster-demo.JPG" },
    ],
  },
];

export const templates: TemplateItem[] = [
  {
    id: "party-vip",
    title: "帅卡 Vip Party",
    category: "冠名卡",
    views: "8.9k",
    vip: true,
    height: "tall",
    accent: "bg-[linear-gradient(160deg,#08080b,#5b1026_45%,#ef4444)]",
  },
  {
    id: "songlist-pink",
    title: "甜粉歌单",
    category: "歌单",
    views: "6.2k",
    vip: true,
    height: "medium",
    accent: "bg-[linear-gradient(160deg,#ffe4f0,#f472b6_48%,#43102b)]",
  },
  {
    id: "blue-angel",
    title: "月度考核活动",
    category: "海报",
    views: "12.4k",
    vip: true,
    height: "medium",
    accent: "bg-[linear-gradient(160deg,#09111f,#2563eb_50%,#93c5fd)]",
  },
  {
    id: "silver-card",
    title: "银白冠歌卡",
    category: "卡片",
    views: "4.1k",
    height: "short",
    accent: "bg-[linear-gradient(160deg,#111827,#e5e7eb_48%,#64748b)]",
  },
  {
    id: "green-room",
    title: "语音厅公告",
    category: "语音厅",
    views: "7.6k",
    vip: true,
    height: "tall",
    accent: "bg-[linear-gradient(160deg,#051916,#14b8a6_48%,#a7f3d0)]",
  },
  {
    id: "purple-card",
    title: "限定双人卡",
    category: "卡片",
    views: "9.8k",
    vip: true,
    height: "medium",
    accent: "bg-[linear-gradient(160deg,#12061f,#8b5cf6_52%,#f0abfc)]",
  },
];

export const filterOptions = {
  颜色: ["红", "橙", "黄", "绿", "青", "蓝", "紫", "粉", "黑", "白"],
  版式: ["横版", "竖版", "方形"],
  风格: ["简约", "清新", "活力", "梦幻", "时尚", "欢快", "浪漫", "甜美", "酷炫", "复古", "可爱", "奢华"],
  价格: ["免费模板", "会员专属"],
  排序: ["综合排序", "最新发布", "最多浏览"],
};
