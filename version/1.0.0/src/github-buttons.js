

class Repository extends HTMLElement {
  constructor() {
    super();

    this.repoDetails = null;

    this.name = this.getAttribute("repo");
   var apiRoute ="repos/"
    this.endpoint = `https://api.github.com/repos/${this.name}`;
    
        if (this.getAttribute("type") == "followers"){
       apiRoute = "users/"
  this.endpoint = `https://api.github.com/users/${this.name}/followers`;
    }
    
   
    this.getDetails = this.getDetails.bind(this);

    this.innerHTML = ` <span class="github-btn github-stargazers github-btn-large"><a class="gh-btn" rel="noopener noreferrer" target="_blank" aria-label="Star twbs/bootstrap on GitHub"><span class="gh-ico" aria-hidden="true"></span> <span class="gh-text">Blaze it</span> </a><a class="gh-count" href="https://github.com/twbs/bootstrap/stargazers" rel="noopener noreferrer" target="_blank" aria-label="159,078 stargazers on GitHub" style="display: block;">Loading</a></span>`;
      this.icon = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='12 12 40 40'%3e%3cpath fill='%23333' d='M32 13.4c-10.5 0-19 8.5-19 19 0 8.4 5.5 15.5 13 18 1 .2 1.3-.4 1.3-.9v-3.2c-5.3 1.1-6.4-2.6-6.4-2.6-.9-2.1-2.1-2.7-2.1-2.7-1.7-1.2.1-1.1.1-1.1 1.9.1 2.9 2 2.9 2 1.7 2.9 4.5 2.1 5.5 1.6.2-1.2.7-2.1 1.2-2.6-4.2-.5-8.7-2.1-8.7-9.4 0-2.1.7-3.7 2-5.1-.2-.5-.8-2.4.2-5 0 0 1.6-.5 5.2 2 1.5-.4 3.1-.7 4.8-.7 1.6 0 3.3.2 4.7.7 3.6-2.4 5.2-2 5.2-2 1 2.6.4 4.6.2 5 1.2 1.3 2 3 2 5.1 0 7.3-4.5 8.9-8.7 9.4.7.6 1.3 1.7 1.3 3.5v5.2c0 .5.4 1.1 1.3.9 7.5-2.6 13-9.7 13-18.1 0-10.5-8.5-19-19-19z'/%3e%3c/svg%3e"
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
      return ` <span class="github-btn github-stargazers github-btn-large"><a class="gh-btn"  rel="noopener noreferrer" target="_blank" aria-label="Star twbs/bootstrap on GitHub">${this.icon} <span class="gh-text"></span> </a><a class="gh-count" href="https://github.com/twbs/bootstrap/stargazers" rel="noopener noreferrer" target="_blank" aria-label="159,078 stargazers on GitHub" style="display: block;">API</a></span>`;
    }
    return `<div class="github-card">Error: ${message}</div>`;
  }

  cardTemplate({ owner, full_name, description, html_url, language, topics, name, forks, stargazers_count, watchers_count}) {
 
    var Type = stargazers_count
    var Text = "Star"
    const format = n => n > 1000 ? `${(n / 1000).toFixed(1)}k` : n;
    this.icon = `<span class="gh-ico" aria-hidden="true"></span>`
    
    if (this.getAttribute("type") == "fork"){
      Type = forks
      Text = "Fork"
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
         html_url = `https://github.com/${this.name}`
for (const follower in repo){

  followerCount += 1
}
  Text = "Follow"
  Type = followerCount
    }
    
    
         if (this.getAttribute("type") == "sponsor"){

  
  Text = `Sponsor @${this.name}`
  html_url = `https://github.com/sponsors/${this.name}`
  return `
    <span class="github-btn github-stargazers github-btn-large"><a class="gh-btn" href="${html_url}" rel="noopener noreferrer" target="_blank" aria-label="Star twbs/bootstrap on GitHub">${this.icon} <span class="gh-text">${Text}</span> </a></span>
    
   `
    }
    
    
    // Custom Button 
    
    
         if (this.getAttribute("type") == "custom"){

  
  Text = `${this.getAttribute("text")}`
  
  if (this.getAttribute("href")){
        html_url = `${this.getAttribute("href")}`
      } else{
            html_url = `#`
      }

  return `
    <span class="github-btn github-stargazers github-btn-large"><a class="gh-btn" href="${html_url}" rel="noopener noreferrer" target="_blank" aria-label="Star twbs/bootstrap on GitHub">${this.icon} <span class="gh-text">${Text}</span> </a></span>
    
   `
    }
    
    
    return `
    <span class="github-btn github-stargazers github-btn-large"><a class="gh-btn" href="${html_url}" rel="noopener noreferrer" target="_blank" aria-label="Star twbs/bootstrap on GitHub">${this.icon} <span class="gh-text">${Text}</span> </a><a class="gh-count" href="https://github.com/twbs/bootstrap/stargazers" rel="noopener noreferrer" target="_blank" aria-label="159,078 stargazers on GitHub" style="display: block;">${format(Type)}</a></span>
    
   `;
  }
}
window.customElements.define("github-button", Repository);
