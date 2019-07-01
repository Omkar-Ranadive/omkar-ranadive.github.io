---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
------
I am an incoming graduate student in the Master's in Computer Science program at [Northwestern University](https://www.mccormick.northwestern.edu/computer-science/). My areas of research include Machine Learning, Deep Learning and Reinforcement Learning. 

My goal is to make AI a tool which would be accessible to people of every discipline. I have always been enthralled by Computer Science as it is one of the few fields where practical results can be achieved quickly. I believe that by amalgamating AI with Computer Science,  people from all disciplines will be able to satisfy their curiosity, get practical results, perform better research and solve problems faster. 

I have completed my Bachelors in Technology (B.Tech) in Computer Engineering from [K.J Somaiya College of Engineering](https://kjsce.somaiya.edu/kjsce/). My final year project was titled "Simulation Environment for Development and Testing of Autonomous Learning Agents". You can check out the paper over [here.](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3367735)

Other than technology, I am an avid foodie and I love trying out new dishes. I also love travelling, reading manga and watching tv series and anime.   

My CV can be found [here.](add link later)

Experience
======
**Deep Learning Intern, K.J Somaiya College of Engineering** 
#### January 2018 to April 2018
------
![K.J Somaiya logo](https://kjsce.somaiya.edu/media/images/cropadd0c5d9-6273-4047-898e-61a0079134b6.jpg)

I have worked under Prof. Grishma Sharma and we researched different methodologies of k-shot learning for facial recognition system. We developed a facial recognition system which can be trained on a small number of samples (k samples) to perform fast and accurate recognition of faces. The link to the paper can be found [here.](https://www.ijcaonline.org/archives/volume181/number18/29966-2018917871)

Getting started
======
1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this repository](https://github.com/academicpages/academicpages.github.io) by clicking the "fork" button in the top right. 
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

I have also created [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the academicpages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring academicpages can be found in [the guide](https://academicpages.github.io/markdown/). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful.
