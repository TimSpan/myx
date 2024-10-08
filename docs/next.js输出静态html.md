# next.js输出静态html

## next export

```json
"scripts": {
  "build": "next build && next export"
}
```

如果报错了

1. **Invalid next.config.js options:** 您的 `next.config.js` 文件中包含了一些不被允许的选项。特别是，它指出 `output` 属性的值必须是 `"standalone"`。请检查 `next.config.js` 文件，确保其中的配置选项是 Next.js 所支持的。
2. **Image Optimization API 不兼容:** 在使用 `next export` 导出时，默认的图像优化加载器与该命令不兼容。您可以通过两种方式解决这个问题，即通过使用 `next start` 运行服务器，或者在 `next.config.js` 中配置禁用图像优化。

以下是可能的解决方法：

**1. 修改 next.config.js:** 确保您的 `next.config.js` 文件中没有不支持的选项。以下是一个示例的 `next.config.js` 文件，其中包含了可能需要的一些配置：

```js
// next.config.js
module.exports = {
  // ...其他配置
  output: "standalone",
  images: {
    unoptimized: true,
  },
};

```

官方参看地址：https://www.nextjs.cn/docs/advanced-features/static-html-export



