# Difference Between Git Merge And Rebase

It is widely advised that git merge should be used rather than git rebase because of the inconsistent repositories that would be caused by git rebase. 
1. When you rebase a feature branch onto a main, you move the base of the feature branch to the main branch’s ending point.
2. Merging takes the contents of the feature branch and integrates it with the main branch. As a result, only the main branch is changed. The feature branch history remains the same.


# Git Commands
* git clone
This command creates a copy of an existing repository on a local machine.
* git add
This command moves all changes within a working directory to the staging before committing to the repository.
* git commit
This command commits all changes to the cloned repository and a message will be attached.
* git commit --amend
This commands allows a user to amend the most recent commit.
* git config
This command is used to set configurations when git is installed.
* git fetch
This command fetches a branch from another repository.
* git merge
This command is used to merge changes from different branches into the main branch.
* git push
This command moves changes from a local repository to the remote repository.
* git pull
This command downloads a branch from a remote repository then merges it into the local branch.