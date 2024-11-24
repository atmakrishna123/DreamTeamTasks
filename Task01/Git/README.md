#                                                                                           GIT EXCERCISES

Task 01: //Commands used:                                                                   //Explanation
		//git start									                                                            //Automatically creates a commit
		//git verify                 							                                              //To verify the commit created by git start
		
Task 02: //Commands used:									                                                  //Explanation
		//git add filename.txt(A.txt/B.txt)						                                          //To stage the file whcih will be commited soon
		//git commit -m "msg"								                                                    //To commit the specified file
		//git verify									                                                          //Git verify to check whether excercise requirements are met
		
Task 03: //Commands used:									                                                  //Explanation
		//git status									                                                          //To see which files are staged
		//git restore --staged B.txt							                                              //To replace file which we dont want to commmit
		//git commit -m "msg"								                                                    //To commit 1 file
		//git verify									                                                          //Git verify to check whether exercise requirements are met
		
Task 04: //Commands used:									                                                  //Explanation
		//touch.gitignore								                                                        //creates .ignore file
		//echo "*.exe">>.gitignore							                                                //appends string to .gitignore
		//echo "*.o">>.gitignore							                                                  //appends string to .gitignore
		//echo "*.jar">>.gitignore							                                                //appends string to .gitignore
		//echo "*libraries/">>.gitignore						                                            //appends string to .gitignore
		//git add .gitignore								                                                    //stages the .gitignore file
		//git commit -m "msg"								                                                    //Commits the .gitignore file
		//git check -ignore RqShT052.exe						                                            //checks if .gitignore is working properly. If it is so  it will return the filename.
		//git verify									                                                          //Git verify to check whether excercise requirements are met
		
Task 05: //Commands used:									                                                  //Explanation
		//git rebase escaped								                                                    //merge 2 commits
		//git verify									                                                          //Git verify to check whether excercise requirements are met
		
Task 06: //Commands used: 									                                                //Explanation
		//git merge another-piece-of-work 						                                          //merges another-piece-of-work to the current branch
		//nano equation.txt								                                                      //Opens text editor allowing to edit texts
		//git add equation.txt								                                                  //Stages the changes made in equation.txt
		//git commit -m "da"								                                                    //creates a new commit with the satged changes
		//git verify									                                                          //Git verify to check whether exercise requirements are met
		
Task 07: //Commands used:									                                                  //Explanation
		//git start save-your-work							                                                //Starts the new git exercises
		//git stash									                                                            //Saves the current work
		//nano bug.txt									                                                        //Opens text editor allowing to edit texts
		//git commit -am "fix bug"							                                                //Commits the file without unergoing staging
		//git stash pop									                                                        //Retrieves the most recent stashed changes from the stash and applies them to the working directory.
		//echo "Finally, finished it!" >> bug.txt					                                      //Appends the text "Finally, finished it!" to the end of the text file
		//git commit -am "done"								                                                  //Commits the file without undergoing staging
		//git verify									                                                          //Git verify to check whether exercise requirements are met
		
Task 08: //Commands used:									                                                  //Explanation
		//git start change-branch-history						                                            //Starts the new git exercise
		//git rebase hot-bugfix								                                                  //Reapply the commits from the current branch on top of the hot-bugfix branch				
		//git verify									                                                          //Git verify to check whether exercise requirements are met
		
Task 09: //Commands used:									                                                  //Explanation
		//git start remove-ignored							                                                //Starts the new git exercise
		//git rm ignored.txt								                                                    //Removes the ignored.txt file
		//git commit -am "removed ignored"						                                          //Commits the changes without staging
		//git verify									                                                          //Git verify to check whether exercise requirements are met
		
Task 10: //Commands used:									                                                  //Explanation
		//git start case-sensitive-filename						                                          //Starts the new git exercise
		//git mv File.txt file.txt							                                                //Renames the file
		//git commit -am "Renamed file"							                                            //Commits the changes without staging
		//git verify									                                                          //Git verify to check whether excercise requirements are met
		
Task 11: //Commands used:									                                                  //Explanation
		//git start fix-typo								                                                    //Starts the new git exercise
		//ls										                                                                //Shows the available files in the directory
		//cat file.txt									                                                        //reads the txt file file.txt
		//nano file.txt									                                                        //Opens text editor allowing to edit texts
		//add file.txt									                                                        //Stages the edited file
		//git commit -a --amend								                                                  //creates a commit through which we can edit the file where we failed to give correct word
		//git verify									                                                          //Git verify to check whether exercise requirements are met
		
Task 12: //Commands used: 									                                                //Explanation
		//git start forge-date								                                                  //Starts the new git exercise
		//git commit --amend --date="1987-12-11"					                                      //Changes the date to the specified date
		//git verify									                                                          //Git verify to check whether exercise requirements are met
		
Task 13: //Commands used:									                                                  //Explanation
		//git start fix-old-typo							                                                  //Starts the new git exercise
		//git rebase -i HEAD~2(the line with typo is changed from pick to edit)		              //The interactive rebase is opened and in the last 2 commits, the line with typo is changed from pick to edit.
		//nano file.txt									                                                        //Edit the typo in text editor
		//git add file.txt								                                                      //Stages the file
		//git rebase --continue(merge-conflict)						                                      //This command will leave us with a merge-conflict
		//nano file.txt									                                                        //Edit the typo if any in text editor
		//git add file.txt								                                                      //Stages the file
		//git rebase --continue(resolve merge-conflict)					                                //Resolves the merge-conflict 
		//git verify									                                                          //Git verify to check whether exercise requirements are met
		
Task 14: //Commands used:									                                                  //Explanation
		//git start commit-lost								                                                  //Starts the new git exercise
		//git reflog									                                                          //Tracks the changes of HEAD even though we cant see the visual commit history
		//git reset --hard HEAD@{1}							                                                //it goes back to  previous point in time and remove changes that weren't committed
		//git verify									                                                          //Git verify to check whether exercise requirements are met
		
Task 15: //Commands used:									                                                  //Explanation
		//git start split-commit							                                                  //Starts the new git exercise
		//git reset HEAD^								                                                        //Undos the most recent commit by but keeps all the changes in the directory
		//git add first.txt								                                                      //stages the file 
		//git commmit -m"Msg1"								                                                  //It commits the first.txt file
		//git add second.txt								                                                    //stages the file
		//git commit -m"Msg2"								                                                    //It commits the second.txt file
		//git verify									                                                          //Git verify to check whether exercise requirements are met

Task 16: //Commands used:									                                                  //Explanation
		//git start too-many-commits							                                              //Starts the new git exercise
		//git rebase -i HEAD~4(last line changed to squash)				                              //replace "pick" with "squash" for the commit with the message "Crap, I have forgotten to add this line."
		//git add file.txt								                                                      //stages the file
		//git commit -m"Msg"								                                                    //It commits the file file.txt
		//git verify									                                                          //Git verify to check whether exercise requirements are met
		
Task 17: //Commands used:									                                                  //Explanation
		//git start									                                                            //Starts the new git exercise
		//git add --chmod=+x script.sh							                                            //Adds the script.sh file to staging and also give permissions for execute
		//git commit -m"Msg"								                                                    //It commits the script.sh file					
		//git verify									                                                          //Git verify to check whether the excercise requirements are met
		
Task 18: //Commands used:									                                                  //Explanation
		//git start commit-parts							                                                  //Starts the new git exercise
		//git add -p file.txt								                                                    //Add the file.txt file and we will get a single hunk were we have lines for both task 1 and task 2
		//split the hunks, select those hunks were the task 1 is mentioned		                  //Select those hunks with task1 specified in the lines
		//git commit -m"Msg"								                                                    //Commit those lines 
		//git add -p file.txt								                                                    //Select those hunks unrelated to task1
		//git commit -m"Msg"								                                                    //Commit the remaining lines unrelated to task1 
		//git verify									                                                          //Git verify to check whether the exercise requirements are met
		
Task 19: //Commands used:									                                                  //Explanation
		//git start pick-your-feature							                                              //Starts the new git exercise
		//git cherry-pick feature-a							                                                //Selects and applies the changes from the commit related to 'feature-a' onto the current branch.
		//git cherry-pick feature-b							                                                //Selects and applies the changes from the commit related to 'feature-a' onto the current branch.
		//git cherry-pick fetaure-c							                                                //Selects and applies the changes from the commit related to 'feature-a' onto the current branch.
		//git nano program.txt(Resolve merge-conflict)					                                //Resolve merge conflict bby removing <<<<<,======,>>>> lines
		//git add .									                                                            //Stages the program.txt file
		//git cherry-pick --continue							                                              //Adds all the changes to the staging area
		//git verify									                                                          //Git verify to check whether the exercise requirements are met
		
Task 20: //Commands used:									                                                  //Explanation
		//git start rebase-complex							                                                //Starts the new git exercise
		//git rebase --onto your-master issue-555 rebase-complex			                          //The commits after issue-555 from the rebase-complex will be moved to the branch your-master
		//git verify									                                                          //Git verify to check whether the excercise requirements are met
		
Task 21: //Commands used:									                                                  //Explanation
		//git start rebase-complex							                                                //Starts the new git exercise
		//git rebase -i HEAD~3								                                                  //Opens an interactive rebase for the last 3 commits
		//Switch the lines in the text-editor						                                        //Swap the 2 lines in the text-editor
		//git verify									                                                          //Git verify to check whether the exercise requirements are met
		
Task 22: //Commands used:									                                                  //Explanation
		//git start find-swearwords							                                                //Starts the new git exercise	
		//git log -s "shit"								                                                      //Lists all the commits where the word shit appears from the history
		//git rebase -i HEAD~100(#23,#46,#94 to change to edit from pick)		                    //Opens an interactive rebase for the last 100 commits
		//git log -p -1									                                                        //View the changes in the current commit
		//sed -i 's/shit/flower/g' list.txt						                                          //Replace shit with flower in the list.txt
		//git add list.txt								                                                      //Stage the file
		//git commit --amend								                                                    //Ammend the commmit
		//git rebase --continue								                                                  //Continue the rebase process
		//git log -p -1									                                                        //View the changes in the current commit
		//sed -i 's/shit/flower/g' words.txt						                                        //Replace shit with flower in the words.txt
		//git add words.txt								                                                      //Stage the file
		//git commit --amend								                                                    //Ammend the commmit
		//git rebase --continue								                                                  //Continue the rebase process
		//git log -p -1									                                                        //View the changes in the current commit
		//sed -i 's/shit/flower/g' words.txt						                                        //Replace shit with flower in the words.txt
		//git add words.txt								                                                      //Stage the file
		//git commit --amend								                                                    //Amend the commit
		//git rebase --continue								                                                  //Continue the rebase process
		//git verify									                                                          //Git verify to check whether the exercise requirements are met
		
Task 23: //Commands used:											                                              //Explanation
		//git start find-bug										                                                //Starts the new git exrecise
		//git bisect start HEAD 1.0									                                            //Starts the bisect process with the current HEAD as the bad commit and 1.0 as the good commit.
		//git bisect run sh -c "openssl enc -base64 -A -d < home-screen-text.txt | grep -v jackass" 	//Decodes the contents of home-screen-text.txt using openssl.The test looks for the absence of the word "jackass."git bisect iteratively narrows down the commit history to pinpoint the exact commit where the bug was introduced.
		//git push origin 3799f093a0a3cf6a6b326822f588777178321bd7:find-bug				              //Pushes the identified commit to the remote branch named find-bug.
		//git verify											                                                      //Git verify to check whether the exercise requirements are met
		
		
