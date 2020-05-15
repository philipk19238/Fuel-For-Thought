<h1 align="center"><b>Fuel for Thought</b></h1>
<p align="center">
 <a href="https://docs.google.com/presentation/d/1PoPpnQWL03I0f5uUWgAE82Fn5wdY2PZP37T7EDmsw54/edit?usp=sharing">
  <img src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/089/844/datas/gallery.jpg">
 </a
</p>
  
<p align="center">Fuel for Thought is an AI and hashgraph-based platform built for the Future of Work hackathon that allows energy workers to hone in on their technical skills while connecting them with other workers and large companies looking to hire.</p>

## Inspiration 
In the midst of an economic downturn that severely affected the O&G industry, we were inspired to create a platform that keeps energy workers' minds sharp so that they're ready to return to work with minimal barriers for reentry.

## What it Does
Fuel for Thought is a multistep, ongoing process that keeps employees connected. Employees have their personality and skills assessed through situation-based exercises, which is securely stored on the Hedera Hashgraph for employers to view. Then, the platform recommends training modules to the employees for them to improve their current skills and learn new skills that are hot in the job market. These employees are then matched to maximize synergy with new and existing teams, creating units that large energy companies and service providers can quickly hire.

## How we built it
We built Fuel for Thought by creating a website using HTML/CSS/jQuery/JavaScript, hosted on Flask. The site uses a custom-built REST API to access the Hedera Hashgraph for file storage and querying, as well as calling of the ML model that powers the team creation. We also used the p5.js to develop a demo game that assesses personality traits.

## Challenges we ran into
One of the main problems we ran into was connecting the Hedera SDK with Flask. Since the Hedera SDK was built primarily to support JavaScript and Java, we had to convert the JavaScript code into a NodeJS script and then execute it in Python using Naked to sent the results to Flask.

## Accomplishments that we're proud of
The team is extremely proud of being able to not only create a working website with demo games and dashboards, but also include a fully-fledge business-side presentation that presents the purpose and value of Fuel for Thought in an effective way.

## What we learned
We learned the following:

p5.js
development of REST APIs
fundamentals of Node.js
Hedera Hashgraph and Hedera File Service API

## Built With
 - css
 - html
 - bootstrap
 - flask
 - firebase
 - hedera hashgraph
 - nodejs
 - javascript/jQuery
 - sklearn

### Links
Devpost: https://devpost.com/software/fuel-for-thought

Slide Deck: https://docs.google.com/presentation/d/1PoPpnQWL03I0f5uUWgAE82Fn5wdY2PZP37T7EDmsw54/edit?usp=sharing
