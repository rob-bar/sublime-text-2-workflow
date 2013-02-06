#Sublime Text 2:

##Quick introduction:
1. multiple cursors
2. Vintage mode
3. Lightning fast
4. Well Documentation
5. Command palet to avoid mouse
5. Plugin community is Huge


##Instalation and base settings:
* User settings go above default settings thes will not be overriden on update
* preferences > Settings user
* color schemes
* Settings are json

##Opening sublime from terminal MAC ONLY:
* Services-and-Open-From-Terminal
* Open-in-sublime automator
* `sudo ln -s "/Users/robbieb/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl" /usr/local/bin/`
* To call in sublime form terminal

##Multiple-Cursors-and-Incremental-Search:
* `cmd + D` = select word
* `cmd + D` = to select more occurences or select the word
* `ctrl + cmd + G` = To select all occurences
* `alt + selecting` = collumm selection
* `ctrl + cmd + L` = select line
* `cmd + I` = incremental search then ENTER

##The-Command-Palette:
* `shift + cmd + P` =  Bring up the command palet
* syntax setting
* `cmd + K, cmd + B` = toggle sidebar

##Instant-File-Changing:
* `cmd + P`= Goto Anything (search files by fuzzy searching)

##Symbols:
* all types of files even markdown
* `cmd + P , @` = Browse Symbols(Or methodnames)
* `cmd + R` = Browse symbols(Or methodnames)

##Key-Bindings:
* no more googling shortcuts
* Sublime > preferences > Keybindings Default
* Sublime > preferences > Keybindings user

##Package controll:
After installing package controll you can access a huge amount of plugins

###Aliases:
####BROWSE TO THE PACKAGES
`alias spack='cd ~/Library/Application Support/Sublime Text 2/Packages'`

Sublime xiki!!!

##Snippets:
* automactic syntax detection from folder
* default snippet container
* my snippets at git@github.com:rob-bar/sublime_snipkeysets.git
* examples ? ?? _ __ fass js

		<snippet>
			<content>
			<![CDATA[code]]>
			</content>
		    <tabTrigger>tabrigger</tabTrigger>
		    <scope> codescope </scope>
		    <description>Description of the snippet</description>
		</snippet>

##Zen coding and emmet:
* Zen coding

			ul>li*3
			.container>.header+.footer+.sectionextra
			ul>li*3>a
			ul>li*3>a[href=#]{somelink}

* Emmet instal via github or package control

##prefixer:
* Install prefixer by package control
* Prefix style `ctrl + cmd + x`

##Fetching
* Instantly fetching packages and or scripts from github or from the web

##advanced new file:
* Install package advanced new file package controll
	`cmd + alt + n`

##Sidebar enhancements & live linting:
* Install sidebar enhancements
* Live linting plugin

##gists:
* Managing code snippets with gist
	* `gist.github.com`

* Create open or update your gists or your organizations its gists
* Open: `cmd + K, cmd + O`

##DockBlockr:
* For easy documenting your frameworks.
Instal via package controll

##Http Requester:
Quick http requests from sublime text 2 `cmd + alt + r` on selected url text
Handy for route testing
`http://local.dev/___PRESENTATIONS___/subl%20_text_2_demo/lines.js`

##Regular expressions:
* Incremental search `cmd + i`
* `alt + return`
* running regular expressions in search window enable icon(`alt + cmd + R`)
* then select what you want in this case lets say al h2 tags

		<h2>.+</h2>
		. any carakter
		+ one ore more
		Revision
		(?<=<h2>).+(?=</h2>)

* Lower case `cmd + K, cmd + L`
* Upper case `cmd + K, cmd + U`

##Vintage mode:
Not yet covered

##Quicker file references
* `cmd + shift + p` then type copy

##Operations on lines
	edit line
	cmd + j
	selected tekst add in multiple cursors cmd + shift + L
	select line to end cmd ->
	select line to begin <-
	select line cmd + l

##Marked Mac only
* cmd + b to build
* Select github
* instantly view changes

##All about projects
* subl . that opens a folder
* save project as
* this will add two new files .sublime-project .sublime-workspace
* edit paths in this file to change the folder that is displaying
* cmd + ctr + p to switch projects
* file_exlude_patterns
* folder_exlude_patterns
* Project settings indenting etc
* You can apply all settings project based


##Split windows & moving files
	[
		{
			"keys": ["super+alt+shift+ctrl+down"],
			"command": "set_layout",
			"args":
			{
				"cols": [0.0, 0.2, 0.6, 1.0],
				"rows": [0.0, 1.0],
				"cells": [[0, 0, 1, 1], [1, 0, 2, 1], [2, 0, 3, 1]]
			}
		},
		{
			"keys": ["super+alt+shift+ctrl+left"],
			"command": "set_layout",
			"args":
			{
				"cols": [0.0, 0.2, 1.0],
				"rows": [0.0, 1.0],
				"cells": [[0, 0, 1, 1], [1, 0, 2, 1]]
			}
		},
		{
			"keys": ["super+alt+ctrl+left"],
			"command": "set_layout",
			"args":
			{
				"cols": [0.0, 0.33, 1.0],
				"rows": [0.0, 1.0],
				"cells": [[0, 0, 1, 1], [1, 0, 2, 1]]
			}
		},
		{
			"keys": ["super+alt+ctrl+right"],
			"command": "set_layout",
			"args":
			{
				"cols": [0.0, 0.66, 1.0],
				"rows": [0.0, 1.0],
				"cells": [[0, 0, 1, 1], [1, 0, 2, 1]]
			}
		},
		{
			"keys": ["super+alt+ctrl+down"],
			"command": "set_layout",
			"args":
			{
				"cols": [0.0, 0.5, 1.0],
				"rows": [0.0, 1.0],
				"cells": [[0, 0, 1, 1], [1, 0, 2, 1]]
			}
		},
		{
			"keys": ["super+alt+ctrl+space"],
			"command": "set_layout",
			"args":
			{
				"cols": [0.0, 1.0],
				"rows": [0.0, 1.0],
				"cells": [[0, 0, 1, 1]]
			}
		},
		{ "keys": ["alt+&"], "command": "focus_group", "args": { "group": 0 } },
		{ "keys": ["alt+é"], "command": "focus_group", "args": { "group": 1 } },
		{ "keys": ["alt+\""], "command": "focus_group", "args": { "group": 2 } },
		{ "keys": ["super+&"], "command": "move_to_group", "args": { "group": 0 } },
		{ "keys": ["super+é"], "command": "move_to_group", "args": { "group": 1 } },
		{ "keys": ["super+\""], "command": "move_to_group", "args": { "group": 2 } },
		{
			"keys": ["alt+space"],
			"command": "unexpand_tabs"
		},
		{
			"keys": ["ctrl+alt+space"],
			"command": "expand_tabs"
		}
	]

##Custom builds very handy
* You can add in your own commands like php or node and then build with that
* cmd + B
* Tools build system
* Tools new build system

## stackoverflow search
Search Stack Overflow