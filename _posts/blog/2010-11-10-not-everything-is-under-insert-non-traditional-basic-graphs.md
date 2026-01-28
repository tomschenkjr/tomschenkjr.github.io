---
id: 850
title: 'Not Everything is Under &#8220;Insert&#8221;: Non-traditional Basic Graphs'
date: 2010-11-10T13:22:34+00:00
author: tom_schenk
layout: post
guid: http://tomschenkjr.net/?p=850
permalink: /blog/not-everything-is-under-insert-non-traditional-basic-graphs/
share: true
comment: true
jabber_published:
  - "1289416956"
enclosure:
  - |
    http://media.juiceanalytics.com/screeningroom/ny_times_cancer_in_excel.mov
    12361478
    video/quicktime
    
superawesome:
  - 'false'
categories: blog 
tags:
  - lecture notes
  - tutorial
---
Bar charts, line charts, and pie charts...oh, my. Even improving these charts can still lead to a pretty dull layout. Data visualization has gained in popularity, for the most, because eye-catching charts are, well, eye-catching. Usually a graphic designer or statistician needs to create something outside of the traditional basic plots, something outside your Excel's "Insert" menu. Yet, these graphs need to stay simple, with the same feel as a basic plot.
<h2><strong>Bullet Chart</strong></h2>
Pop quiz, you need to compare your local college's graduation rate to the national graduation rate. What chart do you use? Question 2; you need to compare your actual expenditures to budgeted expenditures. What chart is utilized? If you answered bar graph, then congratulations. But that is so dull.

<figure class="align-center">
<a href="http://en.wikipedia.org/wiki/Bullet_graph"><img src="http://upload.wikimedia.org/wikipedia/en/e/e1/Bullet_graph_labeled.png" alt="Bullet Graph" width="585" height="186" /></a>
<figcaption>Raising the bar</figcaption>
</figure>

<!--more-->Bullet charts, envisioned by <a href="http://www.perceptualedge.com/articles/misc/Bullet_Graph_Design_Spec.pdf">Stephen Few</a> [pdf], provides a much more interesting take. It is a simple idea, as most good ideas are, that simply overlays a skinny bar within a thicker bar, providing a very easy comparison between the two. It is also relatively easy to create in Excel.
<p style="padding-left:30px;">Start with a bar plot, there should be at least two bars.</p>


<figure class="align-center">
<a href="/images/two-column-chart.png"><img src="/images/two-column-chart.png" alt="Basic two column chart" width="600" height="314" /></a>
<figcaption>Basic two column chart</figcaption>
</figure>
<p style="padding-left:30px;">Right click on the bar you want to be the "bullet"--the slender bar "inside" the larger bar. Right click on that data series and choose "Format Data Series..."</p>


<figure class="align-center">
<a href="/images/two-column-chart-format-data.png"><img src="/images/two-column-chart-format-data.png" alt="Choose the series you want to be on top of the other bar" width="600" height="314" /></a>
<figcaption>Choose the series you want to be on top of the other bar.</figcaption>
</figure>
<p style="padding-left:30px;">Choose to plot the data on the "Secondary Axis". A secondary axis will appear, right click on the secondary or primary axis to adjust the scales. The minimum, maximums, and major unit need to be the <em>same</em>.</p>


<figure class="align-center">
<a href="/images/two-column-chart-secondary-axis.png"><img src="/images/two-column-chart-secondary-axis.png" alt="Make sure the secondary axis and the primary axis have the same range" width="600" height="516" /></a>
<figcaption>Make sure the secondary axis and the primary axis have the same range.</figcaption>
</figure>
<p style="padding-left:30px;">Right-click on the bars, use the slider to adjust the gap to make wider or narrower. Here, I have made the green bar wider.</p>


<figure class="align-center">
<a href="/images/two-column-chart-gap.png"><img src="/images/two-column-chart-gap.png" alt="You may need to make the bullet smaller first" width="600" height="482" /></a>
<figcaption>You may need to make the bullet smaller first.</figcaption>
</figure>
<p style="padding-left:30px;">Delete the secondary axis, but ensure the minimum and maximum values are the exact same.</p>


<figure class="align-center">
<a href="/images/two-column-chart-secondary-axis-delete.png"><img src="/images/two-column-chart-secondary-axis-delete.png" alt="Don't screw up, it's almost over" width="600" height="247" /></a>
<figcaption>Don't screw up, it's almost over.</figcaption>
</figure>
<p style="padding-left:30px;">Add any labels, change colors, fix fonts to taste.</p>


<figure class="align-center">
<a href="/images/finished-bullet-chart.png"><img src="/images/finished-bullet-chart.png" alt="Finished bullet chart" width="600" height="314" /></a>
<figcaption>Voila!</figcaption>
</figure>
<h2><strong>Bubble Plot
</strong></h2>
Bubble plots have increased in popularity, but are often mis-applied. The idea is to show bubbles--or circles-<strong>-</strong>relative in size.

<figure class="align-center">
<a href="/images/bubble-studentsuccess.png"><img src="/images/bubble-studentsuccess.png" alt="Bubble chart of student success" width="600" height="762" /></a>
<figcaption>Bubbles!</figcaption>
</figure>

Bubbles with a larger area, naturally, means more. But it's easy to misapply these types of charts. Remember the formula for area of a circle is Area = π * r<sup>2</sup>. If you want a circle that is 20 percent bigger, it's important not to only increase the diameter by 20 percent, but the <em>area</em>. You can use the formula Area /π = diameter.
<p style="padding-left:30px;"><em>Example 001:
</em></p>
<p style="padding-left:30px;"><em>The base bubble (with "8,596 Full-time Students" written in the center) has an area of 1 inch. What diameter does the bubble need to be to get this? Knowing our area needs to be 1 inch, then 1 = π * r<sup>2</sup>, which rearranges to √(1/π) = r, which calculates to 0.564. Set the width (diameter) of the bubble to (0.564<sup>2</sup> =) 0.318 inches and bingo.</em></p>
<p style="padding-left:30px;"><em>Example 002:</em></p>
<p style="padding-left:30px;"><em>Now you need a bubble that is 20% </em>bigger<em> than the 1 inch bubble. First, find the new desired area with 1" * 1.20 = 1.2". Now we need to find the needed diameter. Let's use the shorter equation, so Area = 1.2" will require a diameter of 1.2 / π = 0.382 inches.
</em></p>
Bubble plots also succumb to a similar problem as pie charts. It can be difficult for the human eye to distinguish between bubbles of similar size. The above chart--one I created--does not address this well. If possible, it's best to use bubble that sit side-by-side.
<h2><strong>Ladder Plot</strong></h2>
Another Tufte invention, and one of my absolute favorites. Suppose you need to track the change in average college tuition between five states for the past five years. Typically, one jumps to the line chart: one line for each state with five data points for each year. We all have done this and we all seem to ignore the graph looks messy. Dig deeper and you realize that people only care about two things: are we higher than five years ago and where do we rank--people <em>always</em> ask the latter. A ladder plot shows exactly that, and it is much cleaner. It is essentially a line plot, but the variation between has been eliminated and both sides are labeled.

<figure class="align-center">
<a href="/images/tufte-ladder-tuition.png"><img src="/images/tufte-ladder-tuition.png" alt="Tufte Ladder Plot" width="600" height="442" /></a>
<figcaption>The data that really matters</figcaption>
</figure>

This graph can be difficult to create. There are several options, the first is a <a href="http://www.juiceanalytics.com/writing/tufte-style-comparison-chart-generator/">program</a>--not Excel--that can create these charts. But this program provides little user control (unless you know <a href="http://en.wikipedia.org/wiki/Python_%28programming_language%29">Python</a>). An <a href="http://www.juiceanalytics.com/writing/tufte-style-comparison-chart-generator/">Excel template</a> is also available. The above chart was created using the Excel template provided by Juice Analytics.

<strong>Typography</strong>

Sometimes you can go crazy trying to think of a way to visualize data. You may struggle to contort an image to convey something, but sometimes a word is far more power--with some fancy typography, the mistress to all data-viz lovers. For yours truly, using a word or a single as a means to convey data was an eye-opening experience when I read <a href="http://www.r-project.org/">Nick Felton's</a> annual report--a report that describes his own life.

<figure class="align-center">
<a href="http://feltron.com/images/uploads/ar07_03.jpg"><img src="http://feltron.com/images/uploads/ar07_03.jpg" alt="Feltron 2007 Annual Report" width="581" height="384" /></a>
<figcaption>To the point</figcaption>
</figure>

His use of typography and simple words is quite interesting. Readers usually anticipate graphs, but this provides a refreshing break to the hum-drum of common plots. The report is so well received, he quickly sells 3,000 each year. And that's just to find out that Stella Artois is his favorite beer.

Below is an image of the implementation of typographical data boxes in the Iowa Department of Education's <em>Annual Condition of Iowa's Community Colleges</em>:
<div class="mceTemp mceIEcenter" style="text-align:left;">

<figure class="align-center">
<a href="/images/typography-condition2.png"><img src="/images/typography-condition2.png" alt="Typography in data visualization" width="346" height="186" /></a>
<figcaption>Mix words and numbers to give a quick view</figcaption>
</figure>

The beauty of this graph is usually derived from the font. Not everything on your computer is Times New Roman or Arial. Times New Roman is fine, but boring. Arial is a bit ugly, users should opt for Helvetica instead. I won't delve into the font fetish in detail, but I recommend reading <a href="http://www.typographyforlawyers.com/?p=587">Typography for Lawyers</a>. It describes good fonts for use in a professional setting. Usually these fonts cost money, so I also recommend browsing <a href="http://www.theleagueofmoveabletype.com/">The League of Moveable Type</a> for free fonts, especially <a href="http://www.theleagueofmoveabletype.com/fonts/8-goudy-bookletter-1911">Goudy Bookletter</a>.

</div>
<strong>Faceting</strong>

Bar and line graphs can quickly become overwhelmed and cluttered. When showing  more than 5 categories of data, and especially for any graph with more than 7, you should facet your graph. Faceting can also be called multiples or n-tuple graphs. Technically, faceting is a technique more than a graph.

<figure class="align-center">
<a href="/images/wages-by-cluster.png"><img src="/images/wages-by-cluster.png" alt="Wages by Cluster" width="600" height="799" /></a>
<figcaption>Faceted by major</figcaption>
</figure>

This is an extremely manual process, unless you use <a href="http://had.co.nz/ggplot2/">ggplot2</a> in the <a href="http://www.r-project.org/">R</a> statistical program. It requires the author to make each individual graph and to thread them together using, in Excel, the "group" command. You'll need to keep a few rules in mind:
<ol>
	<li>Make the <em>x</em> and <em>y</em> axis the exact same size.</li>
	<li>Use a consistent color theme, no need to make lines on each cell a different color.</li>
	<li>Align the graphs on a grid.</li>
</ol>
<strong>Graphical Suicide</strong>

I use the term "suicide" in the context of a <a href="http://en.wikipedia.org/wiki/Slush_Puppie#Varieties">slushy</a>, not the morbid context. That is, you can combine graphs to produce other non-traditional graphs. Below is an example from a <em>New York Times' </em>article on cancer deaths that combines a bullet chart with a tornado graph. This two-dimension graph displays three dimensions of data: gender, type of cancers, and new cases or deaths. This graph also uses direct labeling to distinguish between the two colors. A tutorial of this graph can be found <a href="http://media.juiceanalytics.com/screeningroom/ny_times_cancer_in_excel.mov">here</a> [.mov].

<figure class="align-center">
<a href="http://graphics8.nytimes.com/images/2007/07/29/health/cancergraphFull.gif"><img src="http://graphics8.nytimes.com/images/2007/07/29/health/cancergraphFull.gif" alt="Cancer Graph" width="596" height="498" /></a>
<figcaption>3-D data</figcaption>
</figure>

A report should consist of a blend of these chart types to keep the reader interested, but don't overwhelm her with a random array of graphs. This is also true for a basic infographic, which uses several basic graphs to create a poster to convey data. They're all the rage lately and the topic for the next section.<strong>
</strong>

<strong>
</strong>