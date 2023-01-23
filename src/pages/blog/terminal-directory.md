---
layout: "../../layouts/BlogPost.astro"
title: "How to update your default terminal in macOS"
description: "When starting up a terminal on your Mac, are you annoyed with always having to `cd` wherever you go? Here’s where to start to make your default folder open whenever you open terminal!"
pubDate: "Jan 18 2023"
heroImage: "/src/data/blog/images/terminal-directory.png"
heroImageAlt: "Image of woman screaming with text that states can't update terminal directory"
---

When starting up a terminal on your Mac, are you annoyed with always having to `cd` wherever you go? Here’s where to start to make your default folder open whenever you open terminal! 

## Start by ensuring that you’re using zsh

- There are a two ways to check your shell. `ps -p $$` or `echo "$SHELL"`


`ps -p $$` You'll see under CMD /bin/zsh
```zsh
~ % ps -p $$
  PID TTY           TIME CMD
 8434 ttys001    0:00.14 -zsh
```

`echo "$SHELL"` to check your shell which will return /bin/zsh
```zsh
~ % echo "$SHELL"
/bin/zsh
~ % 
```

- Seeing ‘zsh’ will tell you you’re good to go. 
  - [If you’re not using zsh, check out how to change your default directory in bash](https://www.shellhacks.com/git-bash-change-default-directory/)
- You can then go to the bottom of the .zschrc file and add the path to the default folder, for example, `cd Desktop/code` Keep reading to find steps on how to show and find your .zschrc file

## Find the .zschrc file:

- Open Finder > View > Select Show Path Bar 
- Once the path bar is updated at the bottom, select the first item. in this example, it is ‘Macintosh HD’

![Screenshot of where the "Select Show Path Bar" is under the view option](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/17yh1x7zxstxwt0i7r99.png)

![Screenshot example of what the Path Bar looks like at the bottom of the finder window](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bu0fzv9j7ta243bdlhok.png)




## Show all file types:

- At the same time press the “Command” + “Shift” + “.” (period) keys. That will show all file types to be able to find and update your .zschrc
- In this example, it is located ‘Macintosh HD > Users > jennjunod > .zshrc

![Screenshot of what the hidden files look like after doing “Command” + “Shift” + “.”](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3984plmxe1lgfjeiocwy.png)




## Open the .zshrc file

- If having issues, change the application to open with to TextEdit

## Add the default directory 
- Add the default directory at the bottom of the file


![screenshot of .zshrc file and adding cd Desktop/code at the bottom](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0cwf0l5bn4thkd6amqea.png)

- Check the code sample below to see where it would be added into the .zshrc file. All .zshrc files may look different mattering on what has been installed to the system.

```bash
# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
# ZSH_THEME="robbyrussell"
ZSH_THEME=mgutz

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in $ZSH/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment one of the following lines to change the auto-update behavior
# zstyle ':omz:update' mode disabled  # disable automatic updates
# zstyle ':omz:update' mode auto      # update automatically without asking
# zstyle ':omz:update' mode reminder  # just remind me to update when it's time

# Uncomment the following line to change how often to auto-update (in days).
# zstyle ':omz:update' frequency 13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# You can also set it to another string to have that shown instead of the default red dots.
# e.g. COMPLETION_WAITING_DOTS="%F{yellow}waiting...%f"
# Caution: this setting can cause issues with multiline prompts in zsh < 5.7.1 (see #5765)
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
#see 'man strftime' for details.
 #HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

cd Desktop/code
```



## Save, and Restart Terminal

- The folder will be updated to your preferred starting folder

![Screenshot of terminal opening with new default directory](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/clxbom8i117ctcxynw8k.png)

