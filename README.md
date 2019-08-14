[Reference](https://pusher.com/tutorials/instagram-clone-part-1)

## Setting up a React project

```
npx create-react-app instagram-clone

cd instagram-clone

npm start
```


---
### Initial commit error 1:
```
[master] $ git push
fatal: No configured push destination.
Either specify the URL from the command-line or configure a remote repository using

    git remote add <name> <url>
    
```

Solution
```
[master] $ git remote add origin https://github.com/Jabawack/instagram-clone.git
```


### Initial commit error 2:
```
[master] $ git push -u origin master
To https://github.com/Jabawack/instagram-clone.git
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'https://github.com/Jabawack/instagram-clone.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

Solution
```
[master] $ git pull --allow-unrelated-histories origin master
```

### Initial commit error 3:
```
[master] $ git push
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master
```

Solution
```
[master] $ git push --set-upstream origin master
```
---