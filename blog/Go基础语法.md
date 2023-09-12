---
slug: Go
title: Go
authors:
  name: Kevin
  title: Go
  url: https://github.com/timspan
  image_url: https://foruda.gitee.com/avatar/1693540335318510496/5351116_timspan_1693540335.png!avatar100
tags: [hola, docusaurus]
---
# Go

## 定义变量

```go
package main

import (
	"fmt"
)

func main() {
	var a int
	var text string
	fmt.Printf("%d %q\n", a, text) //这样就可以打印出空字符串
	// 定义的变量必须使用掉
	fmt.Println(
		a, text, // 空字符串打印不出来
	)
	test()
	varShort()
}

func test() {
	//不固定类型可以写在一行
	var a, b, c, d = 3, 4, true, "def"
	fmt.Println(
		a, b, c, d,
	)
}

func varShort() { //更简洁的定义变量
	a, b, c := 1, 2, 3
	b = 10
	fmt.Println(
		a, b, c,
	)
}

```

