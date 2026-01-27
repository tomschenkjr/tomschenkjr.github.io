---
id: 2884
title: Not the time for standards in Open Data, yet
date: 2016-04-10T09:57:03+00:00
author: tom_schenk
layout: post
guid: http://tomschenkjr.net/?p=2884
permalink: /blog/not-the-time-for-standards-in-open-data-yet/
share: true
comment: true
categories: blog 
tags:
  - data portal
  - data standards
  - open data
---
It seems with the rise of a new technology, it soon follows on the discussion on how to standardize it. This is true for open data and the call for standards of key data sets where data on a particular topic would share the same schema across cities, states, counties, and countries. The promise is civic apps, which help bring data from rarefied portals to every day people, could be built-once and used-everywhere ("frictionless"). This provided a tremendous value for governments who can see the value in their work for open data. Standards on <a href="https://sites.google.com/site/housefactsdatastandard/home/city-data">building inspections</a>, <a href="http://www.yelp.com/healthscores">food inspections</a>, <a href="https://www.codeforamerica.org/specifications/trails/spec.html">parks/trails</a>, and <a href="https://openreferral.org/">social service directory</a> have been proposed.

<!--more-->

There is good reason to believe this can be useful. The <a href="https://developers.google.com/transit/gtfs/">GTFS </a>data standard (initially Google Transit Feed Specification then dubbed General Transit Feed Specification) unified bus and train directions that was into Google Maps and other programs. The integration made it possible to use Google Maps to get directions to a location with public transportation. But for most topics, open data standards will not provide the same benefit. While open data standards promise a better experience with apps that can easily connect to multiple portals, they will ultimately degrade the user experience for non-technical users unless some approaches to open data are fundamentally changed.

First, open data standards often rely on relational data models. For instance, data standards for inspections would depend on multiple tables: an inspection table, a table listing entities/business/buildings, a violation table, and so on.

[caption id="attachment_2893" align="alignright" width="208"]<img class="wp-image-2893" src="/images/hdscores-national.jpg" alt="hdscores-national" width="208" height="370" /> HDScores for food inspections[/caption]

But data portals do not handle relational data very well. So, as a result, a relational structure requires the first step to download or view all tables to be combined in an external program or programming language. While developers and programmers can handle those steps, it is significantly harder for non-technical users. Open Data has, rightly, been criticized for being too technical and this would not make it easier.

This puts user friendliness at conflict with the promise of universal, frictionless apps. The former provides immediate usefulness to a non-programmer where as the latter as a <em>promise</em> for user friendliness. Programmers though have proven to be quite adept at handling differences in schemas. Apps like <a href="http://hdscores.com/">HDScores</a>, <a href="https://github.com/open-city/look-at-cook">Look at Cook</a>, <a href="http://plenar.io/">Plenario</a>/<a href="http://opengrid.io">OpenGrid</a> (disclosure: a project I've led), and others are able to get around this issue.

Data portals need to serve multiple audiences so the format needs to be both accessible to technical and non-technical audiences. Often, that leads to a format that tries to be readable as a spreadsheet (i.e., every row is a violation) and useful for a programmer. That often results in a "flat" format that can includes a lot of columns. These are obviously not ideal, normalized schemas, but are able to strike a balance for all audiences.

GTFS is an excellent example for the usefulness of data standards. However, GTFS is unique since it has existed purely as a technical specification since its inception. Bus and train schedules have been readily available as maps and people did not rely on machine-readable formats. But data such as business licenses, crimes, salaries, and more have been useful in their "spreadsheet" format. Moving to a relational model for these topics would degrade the experience while gambling on the hope for user-friendly apps.

[caption id="attachment_2897" align="aligncenter" width="640"]<img class="wp-image-2897 size-large" src="/images/portal-vs-standard-1024x480.png" alt="portal-vs-standard" width="640" height="300" /> Neither are perfect, but portals can serve programmers and non-technical users better than a relational schema[/caption]

Flexible solutions, such as RDF/RDFa/schema.org have not been able to gain traction in the larger web development community, so also unlikely to gain traction in open data.

Finally, the development of schemas has lagged the publication of data in most cases. Working to release a standard schema requires work. For existing open data, that means conforming data to a standard, communicating with developers, and making the transition to a new schema. When facing a decision on publishing <em>more</em> data or <em>re-releasing </em>data in a different schema, I believe the movement should still focus on expanding transparency and adding more open data.

Of course, each one of these concerns can be addressed:
<ul>
	<li>Portals could better-accommodate data standards by allowing technical users to access the relational schema through the API while providing a unified interface for non-technical users. That will help provide full technical robustness with user friendliness.</li>
	<li>Focus a few hackathons to focus the transition of existing data into data standards (a "FTFY" solution with the public)</li>
	<li>It could be easier to publish these through "off-the-shelf" ETLs. Many cities use similar programs for "big" topics like inspections, financials, 311, etc. Reducing ETL development allows for less time spent on (re)-writing ETLs to permit <em>growth</em> of portals and releasing as standards.</li>
</ul>
And that's the hope behind data standards for open data. While there are structural issues that need to be resolved before standards can take hold, there are potential solutions available that just require some work to complete. This is a partial list of concerns, but other concerns--such as definitions of items, like "violation", are not the same across cities--are not a crucial.

Fortunately, there is a robust conversation on data standards for open data. I hope they can be resolved in order to advance open data.

&nbsp;

&nbsp;