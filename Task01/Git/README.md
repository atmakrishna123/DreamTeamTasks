# GIT Exercises

## Task 01
### Commands Used:
- git start
- git verify

### Explanation:
- **git start**: Automatically creates a commit.
- **git verify**: Verifies that the commit created meets the exercise requirements.

---

## Task 02
### Commands Used:
- git add filename.txt (e.g., `A.txt`, `B.txt`)
- git commit -m "msg"
- git verify

### Explanation:
- **git add filename.txt**: Stages the specified file for committing.
- **git commit -m "msg"**: Commits the staged file with a message.
- **git verify**: Verifies that the commit meets the exercise requirements.

---

## Task 03
### Commands Used:
- git status
- git restore --staged B.txt
- git commit -m "msg"
- git verify

### Explanation:
- **git status**: Displays the current state of the working directory and staging area.
- **git restore --staged B.txt**: Unstages `B.txt` if it was staged accidentally.
- **git commit -m "msg"**: Commits the staged changes.
- **git verify**: Verifies the exercise requirements.

---

## Task 04
### Commands Used:
- touch .gitignore
- echo "*.exe" >> .gitignore
- echo "*.o" >> .gitignore
- echo "*.jar" >> .gitignore
- echo "*libraries/" >> .gitignore
- git add .gitignore
- git commit -m "msg"
- git check-ignore RqShT052.exe
- git verify

### Explanation:
- **touch .gitignore**: Creates a `.gitignore` file.
- **echo "*.exe" >> .gitignore**: Appends `.exe` files to `.gitignore`.
- **git check-ignore RqShT052.exe**: Validates if `RqShT052.exe` is being ignored.
- **git verify**: Checks the exercise requirements.

---

## Task 05
### Commands Used:
- git rebase escaped
- git verify

### Explanation:
- **git rebase escaped**: Reapplies the commits from the current branch on top of the `escaped` branch.
- **git verify**: Ensures exercise requirements are met.

---

## Task 06
### Commands Used:
- git merge another-piece-of-work
- nano equation.txt
- git add equation.txt
- git commit -m "msg"
- git verify

### Explanation:
- **git merge another-piece-of-work**: Merges changes from `another-piece-of-work` branch into the current branch.
- **nano equation.txt**: Opens the `equation.txt` file for editing.
- **git add equation.txt**: Stages the edited file.
- **git commit -m "msg"**: Commits the changes made to `equation.txt`.
- **git verify**: Verifies that the exercise requirements are met.

---

## Task 07
### Commands Used:
- git start save-your-work
- git stash
- nano bug.txt
- git commit -am "fix bug"
- git stash pop
- echo "Finally, finished it!" >> bug.txt
- git commit -am "done"
- git verify

### Explanation:
- **git stash**: Temporarily saves changes in the working directory.
- **git stash pop**: Applies stashed changes back to the working directory.
- **git commit -am "msg"**: Commits changes without explicitly staging them.
- **git verify**: Verifies the requirements.

---

## Task 08
### Commands Used:
- git start change-branch-history
- git rebase hot-bugfix
- git verify

### Explanation:
- **git rebase hot-bugfix**: Moves the current branch commits on top of `hot-bugfix`.
- **git verify**: Verifies the task completion.

---

## Task 09

### Commands Used:
- git start remove-ignored
-  git rm ignored.txt
- git commit -am "removed ignored"
- git verify

### Explanation:
- **git start remove-ignored**: Starts the new Git exercise.
- **git rm ignored.txt**: Removes the `ignored.txt` file.
- **git commit -am "removed ignored"**: Commits the removal of the file without needing to explicitly stage it.
- **git verify**: Verifies if the exercise requirements are met.

---

## Task 10

### Commands Used:
-  git start case-sensitive-filename
-  git mv File.txt file.txt
-  git commit -am "Renamed file"
-  git verify

### Explanation:
- **git start case-sensitive-filename**: Starts the new Git exercise.
- **git mv File.txt file.txt**: Renames the file from `File.txt` to `file.txt`.
- **git commit -am "Renamed file"**: Commits the changes without explicit staging.
- **git verify**: Verifies the exercise requirements.

---

## Task 11

### Commands Used:
- git start fix-typo
- ls
- cat file.txt
- nano file.txt
- git add file.txt
- git commit -a --amend
- git verify

### Explanation:
- **git start fix-typo**: Starts the new Git exercise.
- **ls**: Lists the files in the directory.
- **cat file.txt**: Displays the contents of `file.txt`.
- **nano file.txt**: Opens the file for editing.
- **git add file.txt**: Stages the edited file.
- **git commit -a --amend**: Amends the previous commit to correct the typo.
- **git verify**: Verifies if the exercise requirements are satisfied.

---

## Task 12

### Commands Used:
- git start forge-date
- git commit --amend --date="1987-12-11"
- git verify

### Explanation:
- **git start forge-date**: Starts the new Git exercise.
- **git commit --amend --date="1987-12-11"**: Amends the last commit with a specified date.
- **git verify**: Verifies if the exercise requirements are met.

---

## Task 13

### Commands Used:
- git start fix-old-typo
- git rebase -i HEAD~2
- nano file.txt
- git add file.txt
- git rebase --continue
- git verify

### Explanation:
- **git start fix-old-typo**: Starts the new Git exercise.
- **git rebase -i HEAD~2**: Opens an interactive rebase for the last two commits.
- **nano file.txt**: Edits the typo in `file.txt`.
- **git add file.txt**: Stages the edited file.
- **git rebase --continue**: Continues the rebase process, resolving any conflicts if necessary.
- **git verify**: Ensures the exercise requirements are met.

---

## Task 14

### Commands Used:
- git start commit-lost
- git reflog
- git reset --hard HEAD@{1}
- git verify

### Explanation:
- **git start commit-lost**: Starts the new Git exercise.
- **git reflog**: Displays a log of HEAD movements to track lost commits.
- **git reset --hard HEAD@{1}**: Resets the branch to the specified state in reflog, recovering the lost commit.
- **git verify**: Verifies that the task is complete.

---

## Task 15

### Commands Used:
- git start split-commit
-  git reset HEAD^
- git add first.txt
- git commit -m "First file commit"
- git add second.txt
- git commit -m "Second file commit"
- git verify

### Explanation:
- **git start split-commit**: Starts the new Git exercise.
- **git reset HEAD^**: Reverts the most recent commit while keeping changes in the working directory.
- **git add first.txt**: Stages `first.txt`.
- **git commit -m "First file commit"**: Creates a commit for the first file.
- **git add second.txt**: Stages `second.txt`.
- **git commit -m "Second file commit"**: Creates a commit for the second file.
- **git verify**: Verifies the exercise completion.

## Task 16  

### Commands used:
- git start too-many-commits
- git rebase -i HEAD~4 # (replace "pick" with "squash" for the commit with the message "Crap, I have forgotten to add this line.")
- git add file.txt
- git commit -m "Msg"
- git verify

### Explanation: 
- **git start too-many-commits**: Starts the new git exercise.  
- **git rebase -i HEAD~4 (last line changed to squash)**: Replace "pick" with "squash" for the commit with the message "Crap, I have forgotten to add this line."  
- **git add file.txt**: Stages the file.  
- **git commit -m"Msg"**: It commits the file `file.txt`.  
- **git verify**: Git verify to check whether exercise requirements are met.  

---

## Task 17  

### Commands used:
- git start
- git add --chmod=+x script.sh
- git commit -m "Msg"
- git verify

### Explanation:
- **git start**: Starts the new git exercise.  
- **git add --chmod=+x script.sh**: Adds the `script.sh` file to staging and also gives permissions for execution.  
- **git commit -m"Msg"**: It commits the `script.sh` file.  
- **git verify**: Git verify to check whether the exercise requirements are met.  

---

## Task 18  

### Commands used:
- git start commit-parts
- git add -p file.txt 
- git commit -m "Msg"
- git add -p file.txt 
- git commit -m "Msg"
- git verify

### Explanation:
- **git start commit-parts**: Starts the new git exercise.  
- **git add -p file.txt**: Add the `file.txt` file and we will get a single hunk where we have lines for both task 1 and task 2.  
- **split the hunks, select those hunks where the task 1 is mentioned**: Select those hunks with task 1 specified in the lines.  
- **git commit -m"Msg"**: Commit those lines.  
- **git add -p file.txt**: Select those hunks unrelated to task 1.  
- **git commit -m"Msg"**: Commit the remaining lines unrelated to task 1.  
- **git verify**: Git verify to check whether the exercise requirements are met.  

---

## Task 19  

### Commands used:
- git start pick-your-feature
- git cherry-pick feature-a
- git cherry-pick feature-b
- git cherry-pick feature-c
- git nano program.txt
- git add .
- git cherry-pick --continue
- git verify

### Explanation:
- **git start pick-your-feature**: Starts the new git exercise.  
- **git cherry-pick feature-a**: Selects and applies the changes from the commit related to 'feature-a' onto the current branch.  
- **git cherry-pick feature-b**: Selects and applies the changes from the commit related to 'feature-b' onto the current branch.  
- **git cherry-pick feature-c**: Selects and applies the changes from the commit related to 'feature-c' onto the current branch.  
- **git nano program.txt (Resolve merge-conflict)**: Resolve merge conflict by removing `<<<<<`, `======`, `>>>>>` lines.  
- **git add .**: Stages the `program.txt` file.  
- **git cherry-pick --continue**: Adds all the changes to the staging area.  
- **git verify**: Git verify to check whether the exercise requirements are met.  

---

## Task 20  

### Commands used:
- git start rebase-complex
- git rebase --onto your-master issue-555 rebase-complex
- git verify

### Explanation:
- **git start rebase-complex**: Starts the new git exercise.  
- **git rebase --onto your-master issue-555 rebase-complex**: The commits after `issue-555` from the `rebase-complex` will be moved to the branch `your-master`.  
- **git verify**: Git verify to check whether the exercise requirements are met.  

---

## Task 21  

### Commands used:
- git start rebase-complex
- git rebase -i HEAD~3 
- git verify

### Explanation: 
- **git start rebase-complex**: Starts the new git exercise.  
- **git rebase -i HEAD~3**: Opens an interactive rebase for the last 3 commits.  
- **Switch the lines in the text-editor**: Swap the 2 lines in the text editor.  
- **git verify**: Git verify to check whether the exercise requirements are met.  

---

## Task 22  

### Commands used:
- git start find-swearwords
- git log -s "shit"
- git rebase -i HEAD~100 # (#23, #46, #94 changed to edit from pick)
- git log -p -1
- sed -i 's/shit/flower/g' list.txt
- git add list.txt
- git commit --amend
- git rebase --continue
- git log -p -1
- sed -i 's/shit/flower/g' words.txt
- git add words.txt
- git commit --amend
- git rebase --continue
- git log -p -1
- sed -i 's/shit/flower/g' words.txt
- git add words.txt
- git commit --amend
- git rebase --continue
- git verify

### Explanation:
- **git start find-swearwords**: Starts the new git exercise.  
- **git log -s "shit"**: Lists all the commits where the word "shit" appears from the history.  
- **git rebase -i HEAD~100 (#23,#46,#94 to change to edit from pick)**: Opens an interactive rebase for the last 100 commits.  
- **git log -p -1**: View the changes in the current commit.  
- **sed -i 's/shit/flower/g' list.txt**: Replace "shit" with "flower" in the `list.txt`.  
- **git add list.txt**: Stage the file.  
- **git commit --amend**: Amend the commit.  
- **git rebase --continue**: Continue the rebase process.  
- **git log -p -1**: View the changes in the current commit.  
- **sed -i 's/shit/flower/g' words.txt**: Replace "shit" with "flower" in the `words.txt`.  
- **git add words.txt**: Stage the file.  
- **git commit --amend**: Amend the commit.  
- **git rebase --continue**: Continue the rebase process.  
- **git verify**: Git verify to check whether the exercise requirements are met.  

---

## Task 23  

### Commands used:
- git start find-bug
- git bisect start HEAD 1.0
- git bisect run sh -c "openssl enc -base64 -A -d < home-screen-text.txt | grep -v jackass"
- git push origin 3799f093a0a3cf6a6b326822f588777178321bd7:find-bug
- git verify

### Explanation:
- **git start find-bug**: Starts the new git exercise.  
- **git bisect start HEAD 1.0**: Starts the bisect process with the current HEAD as the bad commit and `1.0` as the good commit.  
- **git bisect run sh -c "openssl enc -base64 -A -d < home-screen-text.txt | grep -v jackass"**: Decodes the contents of `home-screen-text.txt` using openssl. The test looks for the absence of the word "jackass." Git bisect iteratively narrows down the commit history to pinpoint the exact commit where the bug was introduced.  
- **git push origin 3799f093a0a3cf6a6b326822f588777178321bd7:find-bug**: Pushes the identified commit to the remote branch named `find-bug`.  
- **git verify**: Git verify to check whether the exercise requirements are met.  
