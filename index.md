<link rel="stylesheet" href="https://unpkg.com/@primer/css/dist/primer.css">
<style>
github-button{
  position:absolute;
  margin-left:15px;
  margin-top:-2px;
}
</style>
<div class="color-bg-canvas-inset pb-6">
  <header class="container-lg mx-auto p-responsive d-flex flex-items-center flex-wrap flex-md-nowrap pt-3 pb-6">
   

<div class="container-lg mx-auto py-6 p-responsive">
        <!--<p>Docs / GitHub Buttons</p> wonder whats coming ;) --> 
      <h1>GitHub Buttons Web Component</h1>
      <p>Showcase your GitHub success with GitHub star buttons, follower buttons & more.</p>
      <p>A web component made by <a href="https://github.com/MarketingPipeline">@MarketingPipeline</a>. Source code is available on <a href="https://github.com/mdo/github-buttons">GitHub</a>. Licensed <a href="https://www.apache.org/licenses/LICENSE-2.0">MIT</a>.</p>

  <hr>
  
  <div class="markdown-body">
    <h2 class="no_toc" id="contents">Contents</h2>
<md>
  - [Example and Usage](#example-and-usage)
     * [How to show Star Button](#howtoshowstarbuttongithubbuttonrepomarketingpipelinemarkdowntaggithubbutton)
     * [How to show Watch Button ](#howtoshowwatchbuttongithubbuttontypewatchrepomarketingpipelinemarkdowntaggithubbutton)
     * [How to show Fork Button](#howtoshowforkbuttongithubbuttontypeforkrepomarketingpipelinemarkdowntaggithubbutton)
     * [How to show Followers Button ](#howtoshowfollowersbuttongithubbuttontypefollowersrepomarketingpipelinegithubbutton)
     * [How to show Sponsor Button](#howtoshowsponsorbuttongithubbuttontypesponsorrepomarketingpipelinegithubbutton)
     * [How to show Pull Requests Button ](#howtoshowpullrequestsbuttongithubbuttontypepullsrepomarketingpipelinemarkdowntaggithubbutton)
     * [How to show Issues Button](#howtoshowissuesbuttongithubbuttontypeissuesrepomarketingpipelinemarkdowntaggithubbutton)
     * [How to show Custom Button](#howtoshowcustombuttongithubbuttononclickalerthelloworldiconhttpsuploadwikimediaorgwikipediacommonsthumbee0snicesvg800pxsnicesvgpngtypecustomtextgithubbuttonsbymarketingpipelinegithubbutton)
- [Options](#options)


    </md> 
<md>


## Example and Usage


  
How to use <b><i>GitHub Buttons</b></i>:

   include this [script](https://github.com/MarketingPipeline/GitHub-Buttons-Web-Component/blob/main/version/1.0.0/src/github-buttons-wc.js)  in your HTML document.
  
  
<pre>&lt;script src="https://cdn.jsdelivr.net/gh/MarketingPipeline/GitHub-Buttons-Web-Component/version/1.0.0/src/github-buttons-wc.js">&lt;/script&gt;</pre>
   



  
### How to show Star Button <github-button repo="MarketingPipeline/Markdown-Tag"></github-button>
     
    <github-button repo="MarketingPipeline/Markdown-Tag"></github-button>


### How to show Watch Button <github-button type="watch" repo="MarketingPipeline/Markdown-Tag"></github-button>

    <github-button type="watch" repo="MarketingPipeline/Markdown-Tag"></github-button>
  

### How to show Fork Button <github-button type="fork" repo="MarketingPipeline/Markdown-Tag"></github-button>

    <github-button type="fork" repo="MarketingPipeline/Markdown-Tag"></github-button>


### How to show Followers Button <github-button type="followers" repo="MarketingPipeline"></github-button>

    <github-button type="followers" repo="MarketingPipeline"></github-button>


### How to show Sponsor Button <github-button type="sponsor" repo="MarketingPipeline"></github-button>

    <github-button type="sponsor" repo="MarketingPipeline"></github-button>  

### How to show Pull Requests Button <github-button type="pulls" repo="MarketingPipeline/Markdown-Tag"></github-button>

    <github-button type="pulls" repo="MarketingPipeline/Markdown-Tag"></github-button>
  
  
### How to show Issues Button <github-button type="issues" repo="MarketingPipeline/Markdown-Tag"></github-button>
        
    <github-button type="issues" repo="MarketingPipeline/Markdown-Tag"></github-button>
  
### How to show Custom Button <github-button onclick="alert('Hello World ♥')" icon="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png" type="custom" text="GitHub Buttons by @MarketingPipeline"></github-button>

    <github-button type="custom" text="Custom Button Text"></github-button>  

 
  
##                                                       Options



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
</github-md>

  </div>
</div>


</body>
  <script src="https://cdn.jsdelivr.net/gh/MarketingPipeline/Markdown-Tag/markdown-tag.js"></script> 