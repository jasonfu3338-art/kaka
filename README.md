# Kaka

Kaka 是面向语音厅生态的模板编辑平台。

当前阶段仅完成工程初始化：选择模板、快捷编辑、导出图片等业务能力暂不开发。

## Tech Stack

- Next.js App Router
- TypeScript
- TailwindCSS
- Fabric.js
- Zustand
- Prisma
- MySQL
- Cloudflare R2 reserved interface

## Local Setup

```bash
npm install
cp .env.example .env
npm run dev
```

## Environment

Configure MySQL in `.env`:

```bash
DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/kaka"
```

Configure Cloudflare R2 in `.env`:

```bash
R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET_NAME=
R2_PUBLIC_URL=
```

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run prisma:generate
```
