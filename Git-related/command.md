## install git in vscode terminal
 - in `Open User Settings`
 - Open `Terminal`
 - Set the extrernal path as `C:\Program Files\Git\bin\bash.exe`

## Git swtich branches
```
$ git checkout <existing_branch>

$ git checkout -b <new_branch>
```

## Git commit 
 1. `git add.` : add all the pending changes to staging
 2. `git commit -m "some msg"`: git commit and adding the message

## Git rebase to master workflow
 1. git commit the change
 2. in the `master` branch, `git rebase <feature_branch>`