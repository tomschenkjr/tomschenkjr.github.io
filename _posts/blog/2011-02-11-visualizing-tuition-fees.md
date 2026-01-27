---
id: 1039
title: 'Visualizing Tuition &amp; Fees'
date: 2011-02-11T14:27:16+00:00
author: tom_schenk
layout: post
guid: http://tomschenkjr.net/?p=1039
permalink: /blog/visualizing-tuition-fees/
share: true
comment: true
jabber_published:
  - "1297456037"
email_notification:
  - "1297456038"
tagazine-media:
  - 'a:7:{s:7:"primary";s:69:"http://tomschenkjr.net/wp-content/uploads/2009/12/cc-funding-scatter.png";s:6:"images";a:3:{s:85:"http://tomschenkjr.net/wp-content/uploads/2011/02/chronicle-tuition-fees-interactive.png";a:6:{s:8:"file_url";s:85:"http://tomschenkjr.net/wp-content/uploads/2011/02/chronicle-tuition-fees-interactive.png";s:5:"width";s:3:"590";s:6:"height";s:3:"524";s:4:"type";s:5:"image";s:4:"area";s:6:"309160";s:9:"file_path";s:0:"";}s:72:"http://tomschenkjr.net/wp-content/uploads/2011/02/ide-revenue-by-source.png";a:6:{s:8:"file_url";s:72:"http://tomschenkjr.net/wp-content/uploads/2011/02/ide-revenue-by-source.png";s:5:"width";s:3:"600";s:6:"height";s:3:"382";s:4:"type";s:5:"image";s:4:"area";s:6:"229200";s:9:"file_path";s:0:"";}s:69:"http://tomschenkjr.net/wp-content/uploads/2009/12/cc-funding-scatter.png";a:6:{s:8:"file_url";s:69:"http://tomschenkjr.net/wp-content/uploads/2009/12/cc-funding-scatter.png";s:5:"width";s:3:"741";s:6:"height";s:3:"593";s:4:"type";s:5:"image";s:4:"area";s:6:"439413";s:9:"file_path";s:0:"";}}s:6:"videos";a:0:{}s:11:"image_count";s:1:"3";s:6:"author";s:6:"176156";s:7:"blog_id";s:7:"8375094";s:9:"mod_stamp";s:19:"2011-02-11 20:27:16";}'
categories: blog 
tags:
  - community colleges
  - Data Visualization
  - funding
  - iowa
---
The <em>Chronicle of Higher Education</em> has put together an <a href="http://chronicle.com/article/Interactive-Chart-Tuition/126265/">interactive chart</a> showing tuition and fees at Iowa community colleges. Play through the timeline and you can see tuition and fees becoming a larger share of revenue for the 15 colleges, while state funding declined. There are a couple of notes along the way to highlight majors shifts.

<a href="/images/chronicle-tuition-fees-interactive.png"><img class="aligncenter size-full wp-image-1040" title="Chronicle-Tuition-Fees-Interactive" src="/images/chronicle-tuition-fees-interactive.png" alt="" width="590" height="524" /></a>

We've tried a few other methods to display this same data at the Iowa Department of Education. Below is a the standard image that shows up in our <em>Tuition and Fees Report</em> and <em>Condition of Iowa's Community Colleges</em>. We use a similar, static plot, with one major difference is we plot on dollar amounts, not percentage.

<a href="/images/ide-revenue-by-source.png"><img class="aligncenter size-full wp-image-1041" title="IDE-Revenue-by-Source" src="/images/ide-revenue-by-source.png" alt="" width="600" height="382" /></a>

I've <a href="http://tomschenkjr.net/2009/12/25/preview-community-college-finances-tufte-scatterplot/">previously</a> highlighted a Tufte scatterplot of the same data. Below we use shading to represent the approximate decade of data. The lighest points represent the 1970s, which grows darker until the black points represent the 2000s and the red point is the most recent data:

<a href="/images/cc-funding-scatter.png"><img class="aligncenter size-full wp-image-474" title="Share of Funding for Iowa Community Colleges: 1967-2008" src="/images/cc-funding-scatter.png" alt="" width="600" height="480" /></a>

I like the interactive nature of the Chronicle data, but I don't like that you cannot see all of the data without having to scroll. I'm not sure why the Chronicle chose to especially highlight Iowa data--it was <a href="http://chronicle.com/article/As-State-Funds-Dry-Up/126240/">accompanied</a> by an article about funding in general which talked with a lot of Iowa leaders--but it is always nice to see someone else using our data.