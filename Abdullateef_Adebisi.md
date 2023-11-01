Most common and useful commands to use
Now that we have a foundation of how the CLI works, let's dive into the most useful commands you can start to use for your daily tasks.

Keep in mind that these examples will be based on my current configuration (Bash on a Linux OS). But most commands should apply to most configurations anyway.

Echo prints in the terminal whatever parameter we pass it.
echo Hello Shina! // Output: Hello Shina!
pwd stands for print working directory and it prints the "place" or directory we are currently at in the computer.
pwd // Output: /home/German
ls presents you the contents of the directory you're currently in. It will present you with both the files and other directories your current directory contains.
For example, here I'm on a React project directory I've been working on lately:

ls // Output:
node_modules package.json package-lock.json public README.md src
If you pass this command the flag or paremter -a It will also show you hidden files or directories. Like .git or .gitignore files

ls -a // Output:
. .env .gitignore package.json public src
.. .git node_modules package-lock.json README.md
cd is short for Change directory and it will take you from your current directory to another.
While on my home directory, I can enter cd Desktop and it will take me to the Desktop Directory.

If I want to go up one directory, meaning go to the directory that contains the current directory, I can enter cd ..

If you enter cd alone, it will take you straight to your home directory.

mkdir stands for make directory and it will create a new directory for you. You have to pass the command the directory name parameter.
If I wanted to create a new directory called "Test" I would enter mkdir test.

rmdir stands for Remove directory and it does just that. It needs the directory name parameter just as mkdir: rmdir test.

touch allows you to create an empty file in your current directory. As parameters it takes the file name, like touch test.txt.

rm allows you to delete files, in the same way rmdir allows you to remove directories.
rm test.txt

cp allows you to copy files or directories. This command takes two parameters: the first one is the file or directory you want to copy, and the second one is the destination of your copy (where do you want to copy your file/directory to).

If I want to make a copy of my txt file in the same directory, I can enter the following:

cp test.txt testCopy.txt
See that the directory doesn't change, as for "destination" I enter the new name of the file.

If I wanted to copy the file into a diferent directory, but keep the same file name, I can enter this:

cp test.txt ./testFolder/
And if I wanted to copy to a different folder changing the field name, of course I can enter this:

cp test.txt ./testFolder/testCopy.txt
mv is short for move, and lets us move a file or directory from one place to another. That is, create it in a new directory and delete it in the previous one (same as you could do by cutting and pasting).
Again, this command takes two paremers, the file or directory we want to move and the destination.

mv test.txt ./testFolder/
We can change the name of the file too in the same command if we want to:

mv test.txt ./testFolder/testCopy.txt
head allows you to view the beginning of a file or piped data directly from the terminal.
head test.txt // Output:
this is the beginning of my test file
tail works the same but it will show you the end of the file.
tail test.txt // Output:

this is the end of my test file
The --help flag can be used on most commands and it will return info on how to use that given command.
cd --help // output:
cd: cd [-L|[-P [-e]] [-@]] [dir]
Change the shell working directory.
Change the current directory to DIR. The default DIR is the value of the HOME shell variable.

The variable CDPATH defines the search path for the directory containing DIR. Alternative directory names in CDPATH are separated by a colon :.

A null directory name is the same as the current directory if DIR begins with ....

In a similar way, the man command will return info about any particular command.
man cp // output:

    CP(1)                            User Commands                           CP(1)

    NAME
           cp - copy files and directories

    SYNOPSIS
           cp [OPTION]... [-T] SOURCE DEST
           cp [OPTION]... SOURCE... DIRECTORY
           cp [OPTION]... -t DIRECTORY SOURCE...

    DESCRIPTION
           Copy SOURCE to DEST, or multiple SOURCE(s) to DIRECTORY.

           Mandatory  arguments  to  long  options are mandatory for short options
           too.

           -a, --archive
                  same as -dR --preserve=all

           --attributes-only
                  don't copy the file data, just the attributes
    ...

You can even enter man bash and that will return a huge manual about everything there's to know about this shell. ;)

code will open your default code editor. If you enter the command alone, it just opens the editor with the latest file/directory you opened.
You can also open a given file by passing it as parameter: code test.txt.

Or open a new file by passing the new file name: code thisIsAJsFile.js.

edit will open text files on your default command line text editor (which if you're on Mac or Linux will likely be either Nano or Vim).
If you open your file and then can't exit your editor, first look at this meme:

![vimExit](https://www.freecodecamp.org/news/content/images/2022/03/vimExit.png)
And then type :q! and hit enter.

The meme is funny because everyone struggles with CLI text editors at first, as most actions (like exiting the editor) are done with keyboard shortcuts. Using these editors is a whole other topic, so go look for tutorials if you're interested in learning more. ;)

ctrl+c allows you to exit the current process the terminal is running. For example, if you're creating a react app with npx create-react-app and want to cancel the build at some point, just hit ctrl+c and it will stop.

Copying text from the terminal can be done with ctrl+shift+c and pasting can be done with ctrl+shift+v

clear will clear your terminal from all previous content.

exit will close your terminal and (this is not a command but it's cool too) ctrl+alt+t will open a new terminal for you.

By pressing up and down keys you can navigate through the previous commands you entered.

By hitting tab you will get autocompletion based on the text you've written so far. By hitting tab twice you'll get suggestions based on the text you've written so far.

For example if I write edit test and tab twice, I get testFolder/ test.txt. If I write edit test. and hit tab my text autocompletes to edit test.txt

Git commands
Besides working around the file system and installing/uninstalling things, interacting with Git and online repos is probably the most common things you're going to use the terminal for as a developer.

It's a whole lot more efficient to do it from the terminal than by clicking around, so let's take a look at the most useful git commands out there.

git init will create a new local repository for you.
git init // output:
Initialized empty Git repository in /home/German/Desktop/testFolder/.git/
git add adds one or more files to staging. You can either detail a specific file to add to staging or add all changed files by typing git add .

git commit commits your changes to the repository. Commits must always be must be accompanied by the -m flag and commit message.

git commit -m 'This is a test commit' // output:
[master (root-commit) 6101dfe] This is a test commit
1 file changed, 0 insertions(+), 0 deletions(-)
create mode 100644 test.js
git status tells you what branch are you currently on and whether you have changes to commit or not.
git status // output:
On branch master
nothing to commit, working tree clean
git clone allows you to clone (copy) a repository into the directory you're currently in. Keep in mind you can clone both remote repositories (in GitHub, GitLab, and so on) and local repositories (those that are stored in your computer).
git clone https://github.com/coccagerman/MazeGenerator.git // output:
Cloning into 'MazeGenerator'...
remote: Enumerating objects: 15, done.
remote: Counting objects: 100% (15/15), done.
remote: Compressing objects: 100% (15/15), done.
remote: Total 15 (delta 1), reused 11 (delta 0), pack-reused 0
Unpacking objects: 100% (15/15), done.
git remote add origin is used to detail the URL of the remote repository you're going to use for your project. In case you'd like to change it at some point, you can do it by using the command git remote set-url origin.
git remote add origin https://github.com/coccagerman/testRepo.git
Keep in mind you need to create your remote repo first in order to get its URL. We'll see how you can do this from the command line with a little script later on. ;)

git remote -v lets you list the current remote repository you're using.
git remote -v // output:
origin https://github.com/coccagerman/testRepo.git (fetch)
origin https://github.com/coccagerman/testRepo.git (push)
git push uploads your commited changes to your remote repo.
git push // output:
Counting objects: 2, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 266 bytes | 266.00 KiB/s, done.
Total 2 (delta 0), reused 0 (delta 0)
git branch lists all the available branches on your repo and tells you what branch you're currently on. If you want to create a new branch, you just have to add the new branch name as parameter like git branch <branch name>.
git branch // output:

- main
  git checkout moves you from one branch to another. It takes your destination branch as paremeter.
  git checkout newBranch // output:
  Switched to branch 'newBranch'
  git pull pulls (downloads) the code from your remote repository and combines it with your local repo. This is particularly useful when working in teams, when many developers are working on the same code base. In this case each developer periodically pulls from the remote repo in order to work in a code base that includes the changes done by all the other devs.
  If there's new code in your remote repo, the command will return the actual files that were modified in the pull. If not, we get Already up to date.

git pull // output:
Already up to date.
git diff allows you to view the differences between the branch you're currently in and another.
git diff newBranch // output:
diff --git a/newFileInNewBranch.js b/newFileInNewBranch.js
deleted file mode 100644
index e69de29..0000000
As a side comment, when comparing differences between branches or repos, ussually visual tools like Meld are used. It's not that you can't visualize it directly in the terminal, but this tools are greate for a clearer visualization.

git merge merges (combines) the branch you're currently in with another. Keep in mind the changes will be incorporated only to the branch you're currently in, not to the other one.
git merge newBranch // output:
Updating f15cf51..3a3d62f
Fast-forward
newFileInNewBranch.js | 0
1 file changed, 0 insertions(+), 0 deletions(-)
create mode 100644 newFileInNewBranch.js
git log lists all previous commits you've done in the repo.
git log // output:
commit 3a3d62fe7cea7c09403c048e971a5172459d0948 (HEAD -> main, tag: TestTag, origin/main, newBranch)
Author: German Cocca <german.cocca@avature.net>
Date: Fri Apr 1 18:48:20 2022 -0300

    Added new file

commit f15cf515dd3ec398210108dce092debf26ff9e12
Author: German Cocca <german.cocca@avature.net>
...
The --help flag will show you information about a given command, exactly the same way it works with bash.
git diff --help // output:
GIT-DIFF(1) Git Manual GIT-DIFF(1)

NAME
git-diff - Show changes between commits, commit and working tree, etc

SYNOPSIS
git diff [options] [<commit>] [--] [<path>...]
git diff [options] --cached [<commit>] [--] [<path>...]
...
