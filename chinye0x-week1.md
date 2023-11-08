## Question - What did you learn from the 28/10/2023 Class?
### Command Line and GitHub Basics
In our previous class held on the 28/10/2023, we were introduced to the basics of the command line interface. It was an interactive session where we had the opportunity to learn about CLI commands such as `cd`, `ls`, `ls -a`, `pwd`, etc, and also learn from other participants as well.

After spending time with the basics of the CLI interface, we were guided through the basics of git. We learnt what git was (versioning system) and how it is important during collaboration. We were able to experience the scenario of setting up git on your computer for the first time, initializing git in a project, making a change in the project file, commiting and staging that commit to the local version system and finally, pushing that commit to the online repository on GitHub. Alot of us in the class had their own opnions on how they understand git and GitHub and it was truly a learning experience.

## Question - What are the differences between git merge and git rebase?
#### Git Merge
- `git merge` is the command used to combine two branches into one unifield history.
- There are usually two branches; `feature-branch` and `main-branch`. In most use cases, developers always merge the `feature-branch` with the `main-branch`.
- This command takes two commits from the branches and creates a new `merge commit` in the `main-branch` that ties together the histories of both brances.
- It is considered to be the safest and non-destructive approach to integrates changes from one branch to another.
#### Git Rebase
- `git rebase` is also a command used to integrate changes from one branch to another.
- It moves the `feature-branch` to the tip of the `main-branch`, which adds the commits from `feature-branch` into `main-branch`.
- this command also rewrites the project history with new commits when adding the commits into `main-branch`.