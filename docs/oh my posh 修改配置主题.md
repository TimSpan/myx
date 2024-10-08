# oh my posh 修改配置主题

使用 nano 编辑器打开编辑 `.zshrc` 文件：，当然你也可以使用 vim 编辑器 或者 VScode进行编辑

1. 打开 `.zshrc` 文件：

   ```sh
   nano ~/.zshrc
   ```

2. 在文件的末尾添加 Oh My Posh 初始化命令：

3. 这里以`1_shell`示例

   ```sh
   eval "$(oh-my-posh init zsh --config $(brew --prefix oh-my-posh)/themes/1_shell.omp.json)"
   ```

   **请确保这一行位于 `.zshrc` 文件的末尾。**

4. 保存文件并退出。

   - 对于 nano 编辑器，按下 `Ctrl + X`，然后按 `Y`，最后按 `Enter`。
   - 对于 vim 编辑器，按下 `Esc`，然后输入 `:wq`，最后按 `Enter`。

5. 关闭并重新打开终端，或者输入以下命令使更改生效：

   ```sh
   source ~/.zshrc
   ```

> 注意一定要放在`.zshrc` 文件的末尾

官网所有主题：https://ohmyposh.dev/docs/themes

官网参考配置：https://ohmyposh.dev/docs/installation/customize

