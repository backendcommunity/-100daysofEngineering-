## Git Basics

### Initializing a Repository

To start tracking changes in your project, you need to initialize a Git repository.

```bash
git init
```

### Cloning a Repository
To create a copy of an existing Git repository on your local machine, you can use the **git clone** command.
```bash
git clone <repository-url>
```

### Checking Status
To see the status of your changes in a Git repository, use the following command.
```bash
git status
```

### Adding Changes
To stage changes for the next commit, use the **git add** command.
```bash
git add <filename>
```

### Committing Changes
To save the staged changes to the repository, use the **git commit** command.
```bash
git commit -m "Your commit message here"
```

### Pushing Changes
To push committed changes to a remote repository, use the **git push** command.
```bash
git push origin <branch-name>
```

### Pulling Changes
To fetch and merge changes from a remote repository, use the **git pull** command.
```bash
git pull origin <branch-name>
```

### Branching
```bash
git branch <branch-name>
```
To create a new branch, use the **git branch** command.
```bash
git branch <branch-name>
```
To switch to a different branch, use the **git checkout** command.
```bash
git checkout <branch-name>
```
Alternatively, you can use the **git checkout -b** command to create and switch to a new branch in one step.
```bash
git checkout -b <new-branch-name>
```

These are just a few basic Git commands to get you started. Git is a powerful version control system, and there are many more commands and features to explore.