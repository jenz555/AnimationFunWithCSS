
#UI Toolkit Boilerplate Git Work Flow

###UI Toolkit Boilerplate Repository

The repository will contain two main branches

 - **Master** – which will be the released code into production
 - **Development** – which will contain features and bug fixes

Also there will be short-lived branches

 - **Hotfix** – branched from Master and merged back into Master and Development


###Feature and Bug Fix Branches

In order to begin work on a feature branch or bug fix branch the following conventions will apply.

  1.	Enter a new GitHub Issue detailing the new feature to be developed or the behavior of the bug including images or a video if possible	
  2.	Fork the development branch to your own repository
  3.	Clone your version of the UIToolkit locally
  4.	Set your clone to upstream back to the original repository
  5.	Checkout your cloned development branch and create a branch from the development branch
  6.	Your feature or bug fix branch should be named **Issue#001Feature-yourntid-short-description** or **Issue#002BugFix-yourntid-short-description**
  7.	Once finished with your work commit your changes into your Feature/BugFix branch
  8. 	Push your feature branch to origin (your forked branch)
  9.	Then create a pull request
  10.	Await your Feature/BugFix to be merged or continue the discussion with the related Issue thread



###Hot Fix Branches

In order to begin work on a hot fix branch the following conventions will apply.

  1.	Enter a new GitHub Issue detailing the hot fix
  2.	Fork the master branch to your own repository
  3.	Clone your version of the UIToolkit locally
  4.	Set your clone to upstream back to the original repository
  5.	Checkout your cloned master branch and create a branch off of the version tag from which you are making the hotfix updates.
  6.	Your hot fix branch should be named **Issue#003HotFix-yourntid-short-description**
  7.	Once finished with your work commit your changes into your hot fix branch
  8. 	Push your feature branch to origin (your forked branch)
  9.	Then create a pull request
  10.	Await your Feature/BugFix to be merged or continue the discussion with the related Issue thread



#Github Workflow Commands

The following commands are for Git Bash



###GitHub Issues

Log Feature or Bug in Github Issues



###Fork

Fork UIToolkitBoilerplate to your own repository



###Clone and Remote to origin

    cd /c/inetpub/wwwroot

    git clone git@github.allstate.com:*your-nt-id*/UIToolkitBoilerplate.git

    cd UIToolkitBoilerplate

    git status

    git remote -v

    git remote add upstream git@github.allstate.com:UIEngineering/UIToolkitBoilerplate.git


##Feature or BugFixes



###Checkout Development Branch and create Feature Branch

    git checkout development

    git checkout -b Issue#001Feature-yourntid-short-description development

make changes for your feature

    git status

    git add -A

    git commit -m "Added changes for the new feature described in Issue #001"



###Create a pull request

    git checkout development

    git push --set-upstream origin Issue#001Feature-yourntid-short-description

Open feature branch of *fork* on github.allstate.com

Complete pull request


**NOTE: NEVER MERGE YOUR FEATURE OR BUG FIX BRANCHES LOCALLY INTO THE DEVELOPMENT BRANCH. THIS WILL CAUSE OTHER BRANCHES TO INHERIT CHANGES FROM OTHER FEATURES THAT DO NOT BELONG IN THAT BRANCH. ONLY MERGE FROM MASTER WHEN AFTER APPROVED FEATURES HAVE BEEN APPROVED AND MERGED INTO MASTER BY SOMEONE WITH THE APPROPRIATE PERMISSIONS.**


###Merge Pull Request

*For contributors with merge permissions*

Open development branch of origin on github.allstate.com 

Accept or Reject with comments pull request



##Release



###Create A Release Tag

    git checkout master

    git tag -a v1.0 -m "Now on Version 1.0"

    git push --tags

open the ReadMe file and change the version number

    notepad ReadMe.md

    git commit -a -m "Bumped version number to 1.0"

    git push


##HotFixes



###Create HotFix Branch off of Appropriate Version Tag

    git checkout master

    git checkout -b Issue#003HotFix-yourntid-short-description v1.0 

make changes for your HotFix

    git status

    git add -A

    git commit -m "Added changes to address Hotfix described in Issue #003"

Hotfix branches can be merged directly back into the master branch.


###Update Release Tag to Reflect Hotfix Changes

	git tag v1.0 5668b205db88 -f
	git push --tags -f


####Useful Links

https://guides.github.com/activities/forking/

http://nvie.com/posts/a-successful-git-branching-model/







