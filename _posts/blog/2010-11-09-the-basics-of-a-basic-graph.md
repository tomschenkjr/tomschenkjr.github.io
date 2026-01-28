---
id: 848
title: The Basics of a Basic Graph
date: 2010-11-09T19:18:07+00:00
author: tom_schenk
layout: post
guid: http://tomschenkjr.net/?p=848
permalink: /blog/the-basics-of-a-basic-graph/
share: true
comment: true
jabber_published:
  - "1289350752"
superawesome:
  - 'false'
categories: blog 
tags:
  - lecture notes
  - tutorial
---
<figure class="align-left">
<a href="http://en.wikipedia.org/wiki/Piet_Mondrian#Paris_1919.E2.80.931938"><img src="/images/mondrian_composition_ii_in_red_blue_and_yellow.jpg?w=300" alt="Piet Mondrian, Composition II in Red, Blue, and Yellow, 1930" width="300" height="300" /></a>
<figcaption>Piet Mondrian, Composition II in Red, Blue, and Yellow, 1930</figcaption>
</figure>

Minimalism is the predominant art form in data visualization, especially for the basic graph. It may bore from Excel's--the workhorse of almost all basic graphs--not-so-minimalist approach to basic graphs. Formally, minimalism is really meant to minimize <a href="http://en.wikipedia.org/wiki/Chartjunk">chart junk</a>. Glyphs, labels, colors, grid lines, axises are all elements of the graph that are meant to help the reader comprehend the graph. Gratuitous use of chart junk, however, has the opposite effect of making a simple graph unreadable.

Excel 2003 and prior versions produced horrendous versions of graphs. Extra shading and thick lines produced unattractive versions of graphs. The default graphs in Excel 2007 and 2010 improved the quality tremendously, but leave some room for tweaks. Below we'll review how to transform default graphs to more readable graphs with less chart junk.

<!--more--><strong>Bar/Column Chart</strong>

If not already, bar and column charts should be your workhorse. These graphs are usually the appropriate chart, especially if you are using pie graphs. Even sometimes, these graphs should be used in place of line charts. Default Excel settings produce nice, but produces some chart junk:

<figure class="align-center">
<a href="/images/chartjunk.png"><img src="/images/chartjunk.png" alt="Excel's default graph produces some chart junk" width="457" height="369" /></a>
<figcaption>Excel's default graph produces some chart junk</figcaption>
</figure>

Let's clean out the identified chart junk. Starting with the border line, right click in a blank area and click "Format Chart Area". In the dialog box change the <a href="http://en.wikipedia.org/wiki/Radio_button">radio button</a> to "No line".

<figure class="align-center">
<a href="/images/column-borderline.png"><img src="/images/column-borderline.png" alt="Removing the border line around Excel graphs" width="600" height="439" /></a>
<figcaption>Removing the border line around Excel graphs</figcaption>
</figure>

Removing the legend is quick easy. Click on the legend and hit the delete key. The legend will disappear and the graph will readjust itself.

Next, we need to remove the unnecessary y- and x-axis lines. Right-click on the vertical (y-axis) and click on "Format Axis". Select Line Color in the dialog box and choose the "No line" radio button. Repeat this operation for the horizontal axis.

<figure class="align-center">
<a href="/images/column-removingaxisline.png"><img src="/images/column-removingaxisline.png" alt="Removing extraneous axis lines" width="600" height="529" /></a>
<figcaption>Removing extraneous axis lines</figcaption>
</figure>

Your graph should be cleaned-up. Change fonts and colors to your liking, but the result should resemble this:

<figure class="align-center">
<a href="/images/column-final.png"><img src="/images/column-final.png" alt="Minimal chart junk" width="599" height="429" /></a>
<figcaption>Minimal chart junk</figcaption>
</figure>

<strong>Labels</strong>

Let's pause for a moment to discuss labels. And let's clear up something else. I can't see the number in <a href="http://www.toledo-bend.com/colorblind/Color29.jpg">this</a> nor any shapes <a href="http://colorvisiontesting.com/online%20test.htm#Test%20Card%20Number%203">here</a>. I see a yellow square <a href="http://colorvisiontesting.com/online%20test.htm#Test%20Card%20Number%201">here</a> and a circle <a href="http://colorvisiontesting.com/online%20test.htm#Test%20Card%20Number%202%20answer">here</a>. I lack that appropriate pigmentation in the cone cells located in the rear of my eye, or something. I am colorblind.

It is  very difficult to align colors in a graph to a legend to the side. It's frustrating. For aesthetic, color-blind friendliness, and other reasons, it is usually best to directly label your graphs. A perfect tool for direct labeling is a straight line or bent-line with a ball on one end. You can access these under Insert &gt; Shape:

<figure class="align-center">
<a href="/images/labels-start.png"><img src="/images/labels-start.png" alt="Choose the elbow arrow connector or the straight connector" width="462" height="265" /></a>
<figcaption>Choose the elbow arrow connector or the straight connector</figcaption>
</figure>

Draw the line, but you'll need to grab the yellow triangle and move it into place to create a bent line. Right click on the line and click on "Format Shape". Choose the Oval Arrow under Line Style:

<figure class="align-center">
<a href="/images/labels-ovalarrow.png"><img src="/images/labels-ovalarrow.png" alt="Choosing oval arrow" width="491" height="461" /></a>
<figcaption>Choosing oval arrow</figcaption>
</figure>

Pair this with a text box, also under Insert &gt; Shape. Align it over a column or bar and repeat.

<figure class="align-center">
<a href="/images/labels-final.png"><img src="/images/labels-final.png" alt="Column graph with labels" width="320" height="398" /></a>
<figcaption>Column graph with labels</figcaption>
</figure>

<strong>Scatter Plot / Line Plot</strong>

Excel includes a built-in line plot feature. Try to avoid it. Instead, you should approach line charts using scatter plots.

<strong>Pie Chart</strong>

<a title="Dilbert.com" href="http://dilbert.com/strips/comic/2009-03-07/"><img class="aligncenter" src="http://dilbert.com/dyn/str_strip/000000000/00000000/0000000/000000/40000/3000/500/43544/43544.strip.gif" alt="Dilbert.com" border="0" /></a>

Be careful mentioning pie charts at a party. They're either hated or despised. If you want to use a pie chart, first seriously consider a column or bar chart. They can almost convey the exact same message as a pie chart, but better. Pie charts are undesireable because: 1) they're overused and 2) the human eye perceives pie shapes with some amount of error. If two pie slices are similar, but not equal size, the eye still may think it is the same size. But humans are perceptive at comparing lengths. Bar and column charts, which are premised on the length of a bar, provide a more accurate perception of data.

<figure class="align-center">
<a href="/images/eye-pieslices.png"><img src="/images/eye-pieslices.png" alt="Eye and Pie Slices" width="600" height="197" /></a>
<figcaption>Which slice is bigger?</figcaption>
</figure>

But, as this course attempts to reinforce, it may be necessary to use a pie chart depending on your audience. At the very least, use a well-designed pie chart.

My favorite design is from Nick Felton, a uni-colored pie-graph that uses large labels to convey the data.

<figure class="align-center">
<a href="http://feltron.com/index.php?/content/2007_annual_report/P1/"><img src="/images/pie-felton.png" alt="A pie graph a graphic designer can love" width="515" height="557" /></a>
<figcaption>A pie graph a graphic designer can love</figcaption>
</figure>

Mr. Felton uses Adobe Illustrator, but we can do our best to replicate the same principals in Excel. Start with a basic pie graph. I used some ficticious data roughly based on Mr. Felton's original graph. Ugly, right?

<figure class="align-center">
<a href="/images/pie-start.png"><img src="/images/pie-start.png" alt="Excel's default pie graph" width="600" height="281" /></a>
<figcaption>Excel's default pie graph</figcaption>
</figure>

Identify the chart junk. Extraneous color,<del> pie-shaped object,</del> and labels. Labels are the easiest, just select and press delete. But we need to replace the labels, so let's label directly. Right-click on the pie itself and select "Add data labels".

<figure class="align-center">
<a href="/images/pie-addlabels.png"><img src="/images/pie-addlabels.png" alt="Adding labels" width="405" height="416" /></a>
<figcaption>Adding labels</figcaption>
</figure>

Labels have been added, but they're an absolute mess. Right-click on a label and select "Format Data Labels". In the dialog box, choose the options below:

<figure class="align-center">
<a href="/images/pie-formatlabels.png"><img src="/images/pie-formatlabels.png" alt="Format Labels dialog box" width="395" height="544" /></a>
<figcaption>Format Labels dialog box</figcaption>
</figure>

Now let's make the graph a single color. Right-click the pie and select "Format Data Series". Under "Fill" select your desired color. To provide some contrast, select Border Color and a white line. I like thicker white lines, which can be adjusted under Border Styles--I chose 2pt. lines.

<figure class="align-center">
<a href="/images/pie-formatgraph.png"><img src="/images/pie-formatgraph.png" alt="Formatting color and lines" width="600" height="408" /></a>
<figcaption>Formatting color and lines</figcaption>
</figure>

Not everything is quite right, yet. The labels still look messy. Let's use a white font on the labels (select the label and adjust the font as normal) and rotate the text. Double-click on a data label you want to change, then right click &gt; Format Data Label. Under alignment we can adjust the text direction. Continue in this fashion until you're done.

<figure class="align-center">
<a href="/images/pie-rotatelabels.png"><img src="/images/pie-rotatelabels.png" alt="Rotating labels" width="600" height="409" /></a>
<figcaption>Rotating labels</figcaption>
</figure>

The representation won't be nearly as accurate. Advanced users should try Adobe Illustrator. Here is an example of a pie graph I created:

<figure class="align-center">
<a href="/images/pie-final.png"><img src="/images/pie-final.png" alt="Pie graph from Adobe Illustrator" width="448" height="510" /></a>
<figcaption>Pie graph from Adobe Illustrator</figcaption>
</figure>

<strong>Histogram</strong>

Histograms and column charts usually get confused. They're similar, but distinct in one key aspects--there is no space between the columns. You should use these graphs to get a better sense of distribution, especially for variables like age or income.

<figure class="align-center">
<a href="/images/histogram-age.png"><img src="/images/histogram-age.png" alt="Distribution of Student Ages" width="584" height="561" /></a>
<figcaption>Distribution of Student Ages</figcaption>
</figure>

The sides of each bar touches each other helps convey the idea that the data is continuous (e.g., age) and not distinct categories (e.g., race/ethnicity).

A good data set to start with is <a href="http://data.iowadatacenter.org/datatables/State/stagex12000.xls">age data</a>. To build a histogram, start with a column chart.

<figure class="align-center">
<a href="/images/histogram-start.png"><img src="/images/histogram-start.png" alt="The original column chart" width="600" height="372" /></a>
<figcaption>The original column chart</figcaption>
</figure>

Right click on any column to select all of the data points and select "Format Data Series"

<figure class="align-center">
<a href="/images/histogram-formatdataseries.png"><img src="/images/histogram-formatdataseries.png" alt="Format data series is a powerful option in Excel" width="600" height="474" /></a>
<figcaption>Format data series is a powerful option in Excel</figcaption>
</figure>

Eliminate the gap between the bars by using the second slider. Pull the slider over to "No Gap".

<figure class="align-center">
<a href="/images/histogram-nogap.png"><img src="/images/histogram-nogap.png" alt="Eliminating the gap transforms it from a column graph to a histogram" width="600" height="475" /></a>
<figcaption>Eliminating the gap transforms it from a column graph to a histogram</figcaption>
</figure>

Now let's add labels and highlight specific areas with color to replicate the final histogram. I've started by switching the color scheme to a pea green. Let's highlight the average age and median age to a brown color. Double-click on the bar for 23 years-old to highlight that specific data point. Right click and select "Format Data Point". Note: it says "data point" when formatting a single bar, and "data series" when you're formatting all of the data.

<figure class="align-center">
<a href="/images/histogram-formatdatapoint.png"><img src="/images/histogram-formatdatapoint.png" alt="You can select and edit single data points" width="600" height="484" /></a>
<figcaption>You can select and edit single data points.</figcaption>
</figure>

Use the fill option to change the color.

<figure class="align-center">
<a href="/images/histogram-filldatapoint.png"><img src="/images/histogram-filldatapoint.png" alt="Fill can change the look of the entire graph or just a data point" width="600" height="380" /></a>
<figcaption>"Fill" can change the look of the entire graph or just a data point.</figcaption>
</figure>

Repeat for 19-years-old, add data labels, and clean up other chart junk to finalize.

<strong>Rejoinder</strong>

Data visualization is usually associated with large, fancy designs. But recall the initial conversation in the introduction: good data visualization must involve basic graphs learned a long time ago and also more complicated infographs. These basic graphs are your workhorse, they'll be used more than any other graphic. Improving these graphs will drastically improve the quality of reports and increase comprehension.<strong></strong>