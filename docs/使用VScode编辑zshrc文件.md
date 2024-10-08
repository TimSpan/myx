# Mac使用VScode编辑zshrc文件

## 前提：

要将解压后的VSCODE，拖动到`应用程序`文件夹中

如果没有拖动到应用程序文件夹中，导致VSCODE并没有安装到安装在 `/Applications` 目录下，code命令无论怎么配置都无法使用

## 添加 VSCode 到 PATH 环境变量

```bash
echo 'export PATH="/Applications/Visual Studio Code.app/Contents/Resources/app/bin:$PATH"' >> ~/.zshrc

```

执行以下命令使更改生效：

```bash
source ~/.zshrc
```

## 使用VScode编辑zshrc文件

```bash
code ~/.zshrc
```

这将使用 Visual Studio Code 打开 `.zshrc` 文件。您可以进行编辑并保存更改。

以下是我的`.zshrc`文件

```bash
export ZSH="$HOME/.oh-my-zsh"
plugins=(git)
source $ZSH/oh-my-zsh.sh
export PATH="/opt/homebrew/opt/curl/bin:$PATH"
export PATH="$PATH:$HOME/.rvm/bin"
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH="/usr/local/mysql/bin:$PATH"
export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home
___MY_VMOPTIONS_SHELL_FILE="${HOME}/.jetbrains.vmoptions.sh"; if [ -f "${___MY_VMOPTIONS_SHELL_FILE}" ]; then . "${___MY_VMOPTIONS_SHELL_FILE}"; fi
eval "$(oh-my-posh init zsh --config $(brew --prefix oh-my-posh)/themes/1_shell.omp.json)"
export PATH="/Applications/Visual Studio Code.app/Contents/Resources/app/bin:$PATH"
```











