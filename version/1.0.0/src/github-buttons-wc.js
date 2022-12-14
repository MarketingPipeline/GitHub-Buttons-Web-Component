
class Repository extends HTMLElement {
  constructor() {
    super();
     this.icon = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='12 12 40 40'%3e%3cpath fill='%23333' d='M32 13.4c-10.5 0-19 8.5-19 19 0 8.4 5.5 15.5 13 18 1 .2 1.3-.4 1.3-.9v-3.2c-5.3 1.1-6.4-2.6-6.4-2.6-.9-2.1-2.1-2.7-2.1-2.7-1.7-1.2.1-1.1.1-1.1 1.9.1 2.9 2 2.9 2 1.7 2.9 4.5 2.1 5.5 1.6.2-1.2.7-2.1 1.2-2.6-4.2-.5-8.7-2.1-8.7-9.4 0-2.1.7-3.7 2-5.1-.2-.5-.8-2.4.2-5 0 0 1.6-.5 5.2 2 1.5-.4 3.1-.7 4.8-.7 1.6 0 3.3.2 4.7.7 3.6-2.4 5.2-2 5.2-2 1 2.6.4 4.6.2 5 1.2 1.3 2 3 2 5.1 0 7.3-4.5 8.9-8.7 9.4.7.6 1.3 1.7 1.3 3.5v5.2c0 .5.4 1.1 1.3.9 7.5-2.6 13-9.7 13-18.1 0-10.5-8.5-19-19-19z'/%3e%3c/svg%3e"
    this.repoDetails = null;

    this.name = this.getAttribute("repo");
   var apiRoute ="repos/"
    this.endpoint = `https://api.github.com/repos/${this.name}`;
    
        if (this.getAttribute("type") == "followers"){
       apiRoute = "users/"
  this.endpoint = `https://api.github.com/users/${this.name}/followers`;
    }
     
 
            if (this.getAttribute("type") == "pulls"  ){
    
  this.endpoint = `https://api.github.com/repos/${this.name}/pulls`;
              this.icon= "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='40'  height='16' viewBox='0 0 16 16'  %3e%3cpath fill='%23333' d='M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z'/%3e%3c/svg%3e"
    }
    
   
   
    this.getDetails = this.getDetails.bind(this);

    this.innerHTML = this.style + ` <span class="github-btn github-stargazers github-btn-large"><a class="gh-btn" rel="noopener noreferrer" target="_blank" aria-label="Star twbs/bootstrap on GitHub"><span class="gh-text">Loading</span> </a><a class="gh-count" href="https://github.com/twbs/bootstrap/stargazers" rel="noopener noreferrer" target="_blank" aria-label="159,078 stargazers on GitHub" style="display: block;">....</a></span>`;
     
  }

  async connectedCallback() {
    
    if(this.getAttribute("type")  != "custom" && this.getAttribute("type")  != "sponsor"){
     let repo = await this.getDetails();
    this.repoDetails = repo;
    this.initShadowDom();
   } else{
          let repo = "";
    this.repoDetails = repo;
    this.initShadowDom();
   }
    
  
  }

  initShadowDom() {
    let shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = this.template;
  }

  get style() {
  
     if (this.getAttribute("icon")){
       this.icon = this.getAttribute("icon")
    }
    return `
      <style>
 .github-btn {
  height: 20px;
  overflow: hidden;
     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
    font-size: 16px;
    line-height: 1.5;
}
.gh-btn,
.gh-count,
.gh-ico {
  float: left;
}
.gh-btn,
.gh-count {
  padding: 2px 5px 2px 4px;
  color: #333;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 3px;
}
.gh-btn {
  background-color: #eee;
  /* stylelint-disable-next-line function-no-unknown */
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fcfcfc), to(#eee));
  background-image: linear-gradient(to bottom, #fcfcfc 0, #eee 100%);
  background-repeat: no-repeat;
  border: 1px solid #d5d5d5;
}
.gh-btn:hover,
.gh-btn:focus {
  text-decoration: none;
  background-color: #ddd;
  /* stylelint-disable-next-line function-no-unknown */
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #eee), to(#ddd));
  background-image: linear-gradient(to bottom, #eee 0, #ddd 100%);
  border-color: #ccc;
}
.gh-btn:active {
  background-color: #dcdcdc;
  background-image: none;
  border-color: #b5b5b5;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, .15);
}
.gh-ico {
  width: 14px;
  height: 14px;
  margin-right: 4px;
  background: url("${this.icon}") 0 0 / 100% 100% no-repeat;
}
.gh-count {
  position: relative;
  display: none; /* hidden to start */
  margin-left: 4px;
  background-color: #fafafa;
  border: 1px solid #d4d4d4;
}
.gh-count:hover,
.gh-count:focus {
  color: #0366d6;
}
.gh-count::before,
.gh-count::after {
  position: absolute;
  display: inline-block;
  width: 0;
  height: 0;
  content: "";
  border-color: transparent;
  border-style: solid;
}
.gh-count::before {
  top: 50%;
  left: -3px;
  margin-top: -4px;
  border-width: 4px 4px 4px 0;
  border-right-color: #fafafa;
}
.gh-count::after {
  top: 50%;
  left: -4px;
  z-index: -1;
  margin-top: -5px;
  border-width: 5px 5px 5px 0;
  border-right-color: #d4d4d4;
}
.github-btn-large {
  height: 30px;
}
.github-btn-large .gh-btn,
.github-btn-large .gh-count {
  padding: 3px 10px 3px 8px;
  font-size: 16px;
  line-height: 22px;
  border-radius: 4px;
}
.github-btn-large .gh-ico {
  width: 20px;
  height: 20px;
}
.github-btn-large .gh-count {
  margin-left: 6px;
}
.github-btn-large .gh-count::before {
  left: -5px;
  margin-top: -6px;
  border-width: 6px 6px 6px 0;
}
.github-btn-large .gh-count::after {
  left: -6px;
  margin-top: -7px;
  border-width: 7px 7px 7px 0;
}
.octicon-star{
position:relative;
top:2px;
}
body{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
    font-size: 16px;
    line-height: 1.5;
}
      </style>
    `;
  }

  get template() {
    let repo = this.repoDetails;

    if (repo.message) {
      return this.style + this.cardError(repo);
    } else {
      return this.style + this.cardTemplate(repo);
    }
  }
 
  async getDetails() {
    return await fetch(this.endpoint, { mode: "cors" }).then(res => res.json());
  }
// TODO - remove junk HTML
  cardError({ message }) {
    if (message.includes("API rate limit")){
      
      // background: url("${this.icon}") 0 0 / 100% 100% no-repeat;
      return `   
      <span class="github-btn github-stargazers github-btn-large"><a class="gh-btn" rel="noopener noreferrer"><span class="gh-ico" aria-hidden="true"></span> <span class="gh-text">Error</span> </a><a class="gh-count" href="#" rel="noopener noreferrer"  aria-label="Github Button - Error" style="display: block;">API LIMIT</a></span>
      `
    } else{
    return ` <span class="github-btn github-stargazers github-btn-large"><a class="gh-btn" rel="noopener noreferrer" target="_blank" aria-label="Star twbs/bootstrap on GitHub"><span class="gh-ico" aria-hidden="true"></span> <span class="gh-text">Error</span> </a><a class="gh-count" href="https://github.com/twbs/bootstrap/stargazers" rel="noopener noreferrer" target="_blank" aria-label="159,078 stargazers on GitHub" style="display: block;">${message}</a></span>`;
    }
  }

  cardTemplate({ owner, full_name, description, html_url, language, topics, name, forks, stargazers_count, watchers_count}) {
 
    var Type = stargazers_count
    var Text = "Star"
   
    const format = n => n > 1000 ? `${(n / 1000).toFixed(1)}k` : n;
    this.icon = `<span class="gh-ico" aria-hidden="true"></span>`
    
    
    /// Allow user to set custom links for all buttons
    if (this.getAttribute("href")){
        html_url = `${this.getAttribute("href")}`
      }
    
    
    // Check if open in new window
      if (this.getAttribute("new-window") == "true"){
           var TargetBlank = `target="_blank"`
      } else{
        var TargetBlank = ``
      }
    
    
    if (this.getAttribute("type") == "fork"){
      Type = forks
      Text = "Fork"
       html_url = `https://github.com/${this.name}/fork`
    }
    
    
      if (this.getAttribute("type") == "watch"){
      Type = watchers_count
      Text = "Watch"
    }
    
        if (this.getAttribute("icon") == "none"){
      this.icon = ""
    }

     if (this.getAttribute("type") == "followers"){
     var repo = this.repoDetails;
       var followerCount = 0 
         html_url = `https://github.com/${this.name}/`
for (const follower in repo){

  followerCount += 1
}
  Text = `Follow @${this.name}`
  Type = followerCount
    }
    
       if (this.getAttribute("type") == "issues"){
       var issueCount = this.repoDetails.open_issues
         html_url = `https://github.com/${this.name}/issues`
 
         
         Text = "Issues"
  Type = issueCount
       }
       
        
    
    

    
    
       if (this.getAttribute("type") == "pulls"){
       var pullCount = 0 
       for (const pull in this.repoDetails){
         // ignore issues
        // console.log(this.repoDetails[pull])
        
          // do nothing
            pullCount +=1
            
          html_url = `https://github.com/${this.name}/pulls`
         Text = "Pull Requests"
  Type = pullCount
       }
       
        
    }
    

    
         if (this.getAttribute("type") == "sponsor"){

  
  Text = `Sponsor @${this.name}`
   if (this.getAttribute("text")){
       Text =  this.getAttribute("text")
       }
  html_url = `https://github.com/sponsors/${this.name}`
  return `
    <span class="github-btn github-stargazers github-btn-large"><a class="gh-btn" href="${html_url}" rel="noopener noreferrer" ${TargetBlank} aria-label="Sponsor ${this.name} on GitHub">${this.icon} <span class="gh-text">${Text}</span> </a></span>
    
   `
    }
    
    
    // Custom Button 
    
    
         if (this.getAttribute("type") == "custom"){

  
  Text = `${this.getAttribute("text")}`
  
  if (this.getAttribute("href")){
        html_url = `href="${this.getAttribute("href")}"`
      } else{
            html_url = ``
      }

  return `
    <span class="github-btn github-stargazers github-btn-large"><a class="gh-btn" ${html_url} ${TargetBlank} rel="noopener noreferrer">${this.icon} <span class="gh-text">${Text}</span> </a></span>
    
   `
    }
    
    
      if (this.getAttribute("text")){
       Text =  this.getAttribute("text")
       }
    
    
    return `
    <span class="github-btn github-stargazers github-btn-large"><a class="gh-btn" href="${html_url}" rel="noopener noreferrer" ${TargetBlank} aria-label="Star ${this.name} on GitHub">${this.icon} <span class="gh-text">${Text}</span> </a><a class="gh-count" href="${html_url}" rel="noopener noreferrer" target="_blank" aria-label="${format(Type)} stargazers on GitHub" style="display: block;">${format(Type)}</a></span>
    
   `;
  }
}
window.customElements.define("github-button", Repository);
