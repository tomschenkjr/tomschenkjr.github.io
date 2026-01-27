---
id: 126
title: To standardize or not standardize?
date: 2009-07-13T00:47:26+00:00
author: tom_schenk
layout: post
guid: http://tomschenkjr.net/?p=126
permalink: /blog/to-standardize-or-not-standardize/
share: true
comment: true
categories: blog 
tags:
  - regression
  - Statistics
---
<a href="http://www.stat.columbia.edu/~cook/movabletype/archives/2009/07/when_to_standar.html" target="_blank">Andrew Gelman</a> compares standardized and unstandardized coefficients. <a href="http://www.stat.columbia.edu/~gelman/research/published/standardizing7.pdf" target="_blank">Gelman</a> has previously <a href="http://www.stat.columbia.edu/~cook/movabletype/archives/2009/07/when_to_standar.html" target="_blank"><img class="alignleft size-full wp-image-127" title="derivative" src="/images/derivative.png" alt="derivative" width="109" height="203" /></a>written a paper which addresses most of the shortcomings to unstandarized coefficients (e.g., raw coefficients, the stuff you see as a default) and addresses the issues brought up in the post. Unfortunately, he didn't address the problems I was most interested in seeing. He writes:
<p style="padding-left:30px;">"What bugs me the most is regression coefficients defined on scales that are uninterpretable or nearly so: for example, coefficients for age and age-squared (In a political context, do we really care about the difference between a 51-year-old and a 52-year-old? How are we supposed to understanding the resulting coefficients such as 0.01 and 0.003?) or, worse still, a predictor such as the population of a country (which will give nicely-interpretable coefficients on the order of 10^-8)? I used to deal with these problems by rescaling by hand, for example using age/10 or population in millions. But big problems remained: manual scaling is arbitrary (why not age/20? Should we express income in thousands or tens of thousands of dollars?); still left difficulties in comparing coefficients (if we're typically standardizing by factors of 10, this leaves a lot of play in the system); is difficult to give as general advice."</p>

Those are actually the stuff that I like about unstandarized regressions, namely, the derivative <em>does</em> mean something substantial. Q: "How are we supposed to understanding the resulting coefficients such as 0.01" A: Each year increases the outcome 0.01 which is flexible enough to let someone interpret the difference between a 52- and 51-year old (-0.01), a 52- and 42-year old (0.10) and 52- and 22-year old (0.30). When it's standardized it's harder to convey that information directly to others (unless they're familiar with standardized coefficients).

Second, one of the main arguments for standardized coefficients is the gender argument. You can't change gender, so the unstandardized coefficient doesn't contain much policy information. However, the unstandardized coefficient conveys the gap between male and females while conditioning on all other variables in the units of interest. For instance in regressions on wages it's easier to convey the gap between men and women in the units of dollars or percentages.

Third, the method is dependent on the discipline. In education of economics, that unstandardized coefficients of years of schooling on the log of earnings can be interpreted as the return to education. I once read a handful of papers where the authors used standardized coefficients. All the good policy information was lost! I knew education had a positive effect, but couldn't simply say education had an "<em>x </em>percent" per year.

Gelman seems to focus on comparing coefficients (inta- or inter-models). Comparing coefficients within a regression  is more intuitive with standardized coefficients, but I feel unstandardized coefficients are more pliable for various interpretations (e.g., different age gaps, very direct interpretation).  I suppose that my models usually have very specific one or two variables I need to interprete (e.g., intervention effect), the other coefficients simply inform me what else is happening (e.g., gender gaps).