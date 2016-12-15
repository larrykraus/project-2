# project-2

https://vast-reaches-60853.herokuapp.com/index

technologies used:
I utilized bootstrap for the first time to style my nav bar and about section on my homepage. Bootstrap is great because it adds a lot of style with little effort, the drawback is adding bootstrap takes us further from CSS reset (more things happening in the background). Mongo is used to house my user models. This is the first project which I use .ejs files and partials - my understanding of .ejs and views changed dramatically this week.

approach taken:
I started with the content of the passport lab as my foundation. This seemed to be the logical choice rather than retro-fitting the passport lab content with a newly created structure. I found inspiration from a website that had a honeycomb design with my little hexagonal images. I tweaked a clip-path maker and fiddled around with margins for a while to achieve my own honeycomb design. I'm most proud of this element - it brings the website to life and reminds users of the joy associated with the band and their experiences. Then I got the login functionality and hosted my site on heroku. In hindsight, I definitely should have paid more attention to my API. It would have been better off experimenting with it more before project week and not letting other priorities get in the way during project week.

unsolved problems:
I still need to progress the conversation with my API. The data on myShows and mySongs pages were manually added. I have two main issues: 1) On Phish.net, the URL to reach a specific show is not particularly formulaic. 2) The content has proven very challenging to parse into managable data. 

data models:
I have data models for each user. This content includes a username and password. Once I'm communicating with my API as desired, each user will then have an array which contains the shows they've attended. This will then populate the myShows page.
