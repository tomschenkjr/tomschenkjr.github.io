---
id: 2372
title: What to post on open data portals? Let me Google, er, Bing that for you.
date: 2015-08-24T06:25:59+00:00
author: tom_schenk
layout: post
guid: http://tomschenkjr.net/?p=2372
permalink: /blog/what-to-post-on-open-data-portals-let-me-google-er-bing-that-for-you/
share: true
comment: true
categories: blog 
tags:
  - data portal
  - lmgtdfy
  - open data
---
Quick wins. An entire post--nay, novel--could be written about the life of quick wins. For data portals, quick wins are important. I've talked to a number of cities who have a fresh data portal and they wonder what should be posted first so they can get the quick wins needed to prove the data portal adds values. Generally, I hit some initial areas:
<ul>
	<li>Anything that is currently posted as a PDF</li>
	<li>Frequently FOIA'd data -- which helps the public and also saves staff time</li>
	<li>Anything that is currently posted as an Excel or CSV</li>
</ul>
The first two follow a different work path. For the last item, there is a great free, open-source tool which helps you identify Excel and other documents currently posted to a government website. <a href="http://lmgtdfy.usopendata.org/"><strong>L</strong>et <strong>M</strong>e <strong>G</strong>et <strong>T</strong>hat <strong>D</strong>ata <strong>F</strong>or <strong>Y</strong>ou</a> (lmgtdfy) leverages Microsoft Bing to find Excel, JSON, comma-separated (CSV), Shapefiles, and other documents that could be posted to the data portal.

Visit the website to enter a URL,  which scans all the websites (the entire domain) and subdomains for the applicable file types. You can browse the results to see if there are any files currently posted that can be posted on the portal. Below, a scan of <em>www.cityofchicago.org</em> shows some results. After further inspection, many of these files are "forms" in Excel and not a good fit for the open data portal. However, there are some promising leads for our team.

<a href="/images/Screen-Shot-2015-08-24-at-7.16.00-AM.png"><img class="aligncenter size-large wp-image-2373" src="/images/Screen-Shot-2015-08-24-at-7.16.00-AM-1024x615.png" alt="lmgtdfy" width="640" height="384" /></a>

This also a useful on-going strategy for mature data portals. Sometimes, data gets posted to a website without talking to the open data portal team. <em>C'est la vie</em>. Check this quarterly to try to capture any of these "mistakes".

Careful, though, if you already have a data portal. lmgtdfy will return the results from the portal as well. So, Excel and CSV files available on your <em>data.city.gov </em>(data portals are often on a subdomain) will also show up. To avoid this, enter <em>www.city.gov</em> to avoid those results.

This strategy has some limitations. The primary mission of open data is to provide data in a machine-readable format, and Excel documents do qualify as machine readable. To that extent, it's a relatively small win. But it does help you consolidate your data onto a data portal instead of documents across a sprawling government site. Portals also provide a quick way for users to visualize data--instead of opening in Excel--or for programmers to use an API.

lmgtdfy is a good way to get the quick wins to get data onto the data portal. Combine it with some other strategies and one or two big items in the early months to get a big win.