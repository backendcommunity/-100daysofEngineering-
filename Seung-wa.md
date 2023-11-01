# Assignment

## Difference between git merge and git rebase

git rebase and git merge are two different methods for integrating changes from one branch into another in Git. They have different approaches and effects. Here's the key difference between them:

#### Git Merge:

- Merging is a straightforward way to integrate changes from one branch into another.
- When you merge a branch into another, Git creates a new merge commit that has two parent commits, representing the branch you're merging and the branch you're merging into.
- Merge commits preserve the entire history of both branches, making the branch history more explicit.
- Merging is a good choice when you want to maintain a clear and detailed history of all the changes made in different branches.
  Merge commits can sometimes result in a more complex and "noisy" commit history.

#### Git Rebase:

- Rebasing is a method to rewrite the commit history by moving or combining commits from one branch to another.
- When you rebase a branch onto another, Git applies each commit from the branch you're rebasing onto on top of the branch you're rebasing, effectively "replaying" your changes on top of the other branch's changes.
- Rebasing can lead to a linear, more streamlined commit history since it incorporates the changes as if they had been made directly on the target branch.
- It can make your commit history cleaner and easier to follow but might make it more challenging to trace the origin of specific changes.
- It's often used when you want to present a cleaner, more linear history to project maintainers or when you want to keep your branch up to date with the latest changes in the target branch.

In summary, the choice between git merge and git rebase depends on your goals and the desired commit history. If you want to maintain a clear and detailed history with merge commits, use git merge. If you want a cleaner, more linear history, or if you want to incorporate the latest changes from the target branch into your feature branch, use git rebase. Both have their use cases, and the decision should be based on your specific project's needs.

## Command Line Commands

pwd (Print Working Directory): Displays the current directory path.

ls (List): Lists the files and directories in the current directory.

cd (Change Directory): Allows you to change your current directory.

mkdir (Make Directory): Creates a new directory.

touch: Creates a new empty file or updates the timestamp of an existing file.

cp (Copy): Copies files or directories from one location to another.

mv (Move): Moves or renames files or directories.

rm (Remove): Deletes files or directories. Use with caution, as it's irreversible.

## Git Commands

git init: Initializes a new Git repository in the current directory.

git clone <repository-url>: Creates a local copy of a remote Git repository.

git add <file>: Stages changes in a file for the next commit.

git commit -m "message": Records staged changes in the repository with a commit message.

git status: Displays the status of the working directory, including untracked, modified, and staged files.

git diff: Shows the differences between the working directory and the last commit.

git log: Displays a log of all commits in the repository.

git branch: Lists all local branches and indicates the current branch.

git checkout <branch>: Switches to a different branch.

git merge <branch>: Combines changes from one branch into the current branch.

git pull: Fetches changes from a remote repository and merges them into the current branch.

git push: Pushes local commits to a remote repository.

git remote: Lists the remote repositories associated with the local repository.
