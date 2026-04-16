# Web Navigator - 极简网址导航

## Project Overview
- **Name**: Web Navigator
- **Type**: 公开导航网站
- **Core**: 简洁极简风格，分类清晰，支持搜索、收藏、后台管理
- **Target**: 日常上网用户、效率控

## UI/UX Specification

### Visual Design

**Theme**: 极简白 / 浅灰为主

**Color Palette**:
```css
--bg-body: #f8f9fa
--bg-card: #ffffff
--bg-hover: #f0f0f0
--text-primary: #1a1a1a
--text-secondary: #666666
--text-muted: #999999
--accent: #0066cc
--accent-hover: #0052a3
--border: #e5e5e5
--shadow: 0 2px 8px rgba(0,0,0,0.06)
```

**Typography**:
- 标题: "Noto Sans SC", sans-serif (中文)
- 正文: "Noto Sans SC", sans-serif

**Spacing**: 8px 基准网格

### Layout
- 顶部: Logo + 搜索 + 分类 (固定)
- Hero: 简短标语
- 内容: 分类卡片 → 网站卡片网格
- Footer: 版权

### Components
1. 搜索框（简约边框）
2. 分类标签（横排点击切换）
3. 网站卡片（图标+名称+描述）
4. 收藏夹（侧边栏）
5. 管理后台（表格CRUD）

## Functionality
- 搜索过滤
- 分类筛选
- 收藏（localStorage）
- 后台增删改查
- 导入导出数据