# github notes

## git commands

the following are the most common git commands

### git init

to initialize a new git repository at the current directory

```bash
git init
```
after running this command, a new directory named `.git` will be created at the current directory

### git add

after adding some files to the current directory, we can add them to the staging area by running the following command

```bash
git add .
```

we can also add a specific file to the staging area by running the following command

```bash
git add <file>
```

we can also add multiple files to the staging area by running the following command

```bash
git add <file1> <file2> <file3>
```

if we want to remove a file from the staging area, we can run the following command

```bash
git rm --cached <file>
```

what is a stagin area?

In technical terms, the staging area is the middle ground between what you have done to your files (also known as the working directory) and what you had last committed (the HEAD commit). As the name implies, the staging area gives you space to prepare (stage) the changes that will be reflected on the next commit. This surely adds up some complexity to the process, but it also adds more flexibility to selectively prepare the commits as they can be modified several times in the staging area before committing.



### git commit

### git push

### git pull

### git clone

### git status

### git log

### git diff

### git branch

### git checkout

### git merge

### git reset

### git stash

### git rebase

### git tag

### git fetch

### git remote

### git show

### git config

### git rm

### git mv

### git grep

### gitk

### git instaweb

### git archive

### git fsck

