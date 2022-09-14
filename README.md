# GitHub-Buttons-Web-Component

<p align="center">
  <img height="400" src="https://user-images.githubusercontent.com/86180097/187365958-218d0b59-9ca1-4650-b7b7-c82ea67080b1.png" />
</p>
                                                                     


   <p align="center">
    GitHub Buttons as a web component to show off your stars, followers & more!

  
  <br>
  <small> <b><i>Show your support!</i> </b></small>
  <br>
   <a href="https://github.com/MarketingPipeline/GitHub-Buttons-Web-Component">
    <img title="Star on GitHub" src="https://img.shields.io/github/stars/MarketingPipeline/GitHub-Buttons-Web-Component.svg?style=social&label=Star">
  </a>
  <a href="https://github.com/MarketingPipeline/GitHub-Buttons-Web-Component/fork">
    <img title="Fork on GitHub" src="https://img.shields.io/github/forks/MarketingPipeline/GitHub-Buttons-Web-Component.svg?style=social&label=Fork">
  </a>
   </p>  
   
   
> Note: contributor & pull request counts etc are currently not accurate. If you are a JavaScript developer & would like to address a fix for this see the [to-do](.github/TO-DO.md)

## Example and Usage

You can view a demo of the GitHub Buttons web component [here](https://marketingpipeline.github.io/GitHub-Buttons-Web-Component/)


How to use <b><i>GitHub Buttons</b></i>:

   include this [script](https://github.com/MarketingPipeline/GitHub-Buttons-Web-Component/blob/main/version/1.0.0/src/github-buttons-wc.js) in your HTML document.
         
    <script src="https://cdn.jsdelivr.net/gh/MarketingPipeline/GitHub-Buttons-Web-Component/version/1.0.0/src/github-buttons-wc.js" defer></script>    



### How to show Star Button

    <github-button repo="MarketingPipeline/Markdown-Tag"></github-button>
 
 
### How to show Watch Button
 
    <github-button type="watch" repo="MarketingPipeline/Markdown-Tag"></github-button>


### How to show Fork Button

    <github-button type="fork" repo="MarketingPipeline/Markdown-Tag"></github-button>



### How to show Followers Button

    <github-button type="followers" repo="MarketingPipeline"></github-button>



### How to show Sponsor Button

    <github-button type="sponsor" repo="MarketingPipeline"></github-button>


### How to show Pull Requests Button

    <github-button type="pulls" repo="MarketingPipeline/Markdown-Tag"></github-button>


### How to show Issues Button

    <github-button type="issues" repo="MarketingPipeline/Markdown-Tag"></github-button>
        

### How to show Custom Button

    <github-button type="custom" text="My super awesome custom button"></github-button>


## Options


<table>
<tr>
<th>Attribute</th>
<th>Meaning</th>
<th>Default</th>
<th>Required</th>
</tr>
<tr>
<td>repo</td>
 <td> Your GitHub username + repo or GitHub Profile <b>(Not Required For Custom Button)</b></td>
<td><code>Undefined</code></td>
<td>Yes</td>
</tr>


<tr>
<td>type</td>
              <td>The type of button to show </code></td>
<td><code>Star Count</code></td>
<td>No</td>
</tr>




<tr>
<td>icon</td>
<td>The icon to use in the button </td>
<td><code>GitHub Icon</code></td>
<td>No</td>
</tr>


<tr>
<td>href</td>
<td>The href / link for the button</td>
<td><code>Defined by Type</code></td>
<td>No</td>
</tr>


<tr>
<td>new-window</td>
<td>If                    <code>True</code>, button link will open in a new window</td>
<td><code>False</code></td>
<td>No</td>
</tr>


 
<tr>
<td>text</td>
<td>Text to show <b>(Custom Button's Have No Default Text)</b></td>
<td><code>Defined by Type</code></td>
<td>No</td>
</tr>





</table>




## Contributing ![GitHub](https://img.shields.io/github/contributors/MarketingPipeline/GitHub-Buttons-Web-Component)

Want to improve this? Create a pull request with detailed changes / improvements! If approved you will be added to the list of contributors of this awesome project!


See also the list of
[contributors](https://github.com/MarketingPipeline/GitHub-Buttons-Web-Component/graphs/contributors) who
participate in this project.

## License ![GitHub](https://img.shields.io/github/license/MarketingPipeline/GitHub-Buttons-Web-Component)

This project is licensed under the MIT License - see the
[LICENSE.md](https://github.com/MarketingPipeline/GitHub-Buttons-Web-Component/blob/main/LICENSE) file for
details.
