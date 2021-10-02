# Contribution Guildelines

## Please follow these steps if you wish to contribute to the project

1. Go through the Issues to see if, what you want is already in discussion.

2. Open a new issue if you want to add a new component in the page.

3. Mention in the Issue that you want to work on it.

4. Wait for the approval from the Maintainers of this project before startig to work on it.

5. Create a pull request after making the changes and mention the Issue number that your pull request is related to.

6. Make the required changes if the reviewer asks for them. 

7. That's it! Your pull request will be merged once everything seems okay.

In this project, we have to make unique and animated components.

You can use bootstrap components, but don't use them as it is , add different styles and animations if you can.



## Steps

- Select an issue and ask to be *assigned* to it.
- **Star** the repository.
- On the [GitHub page for this repository](https://github.com/PCCoE-Hacktoberfest-21/animated-components), click on the Button "**Fork**".
   ![fork image](https://help.github.com/assets/images/help/repository/fork_button.jpg)
- Create clone ***your forked repository*** on your local machine.
   ![code ui](https://docs.github.com/assets/images/help/repository/code-button.png)

    For example, run this command inside your terminal:

    ```bash
    git clone https://github.com/<your-github-username>/animated-components.git
    ```

    **Replace \<your-github-username\>!**

    Learn more about [forking](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) and [cloning a repo](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).
    
- Once you clone the the repository, go into the folder on your machine and to install all the dependencies and packages run the following command:-

   ```bash
   npm install
   ```

- Before you make any changes, [keep your fork in sync](https://www.freecodecamp.org/news/how-to-sync-your-fork-with-the-original-git-repository/) to avoid merge conflicts:

    ```bash
    git remote add upstream https://github.com/PCCoE-Hacktoberfest-21/animated-components.git
    git fetch upstream
    git pull upstream main
    ```

- If you run into a **merge conflict**, you have to resolve the conflict. There are a lot of guides online, or you can try this one by [opensource.com](https://opensource.com/article/20/4/git-merge-conflict).

- Checkout to development branch (*name your branch according to the issue name*).

    ```bash
    git checkout -b <branch-name>
    ```

- Add the changes with `git add`, `git commit` ([write a good commit message](https://chris.beams.io/posts/git-commit/), if possible):

    ```bash
    git add -A
    git commit -m "<your message>"
    ```
    
- Pull the code from the upstream
   
  ```bash
  git pull upstream main

- Push the code *to your repository*.

    ```bash
    git push origin <branch-name>
    ```

- Go to the GitHub page of _your fork_, and **make a pull request**:

    ![pull request image](https://help.github.com/assets/images/help/pull_requests/choose-base-and-compare-branches.png)

    Read more about pull requests on the [GitHub help pages](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

- Now wait, until one of us *reviews your Pull Request*! If there are any conflicts, you will get a notification.

<hr>

## Note 🔴 :

- Create a new folder with the name of your component and add the html,css,js files in that folder (Don't add your component code to the index.html)
- Link the html file of your component to the link on the card created at index.html file.
- Create new cards each new component you make.




