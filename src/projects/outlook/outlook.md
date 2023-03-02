---
path: "/project/outlook"
date: "2021-03-01"
title: "Outlook"
tags: "Product Design"
projectImage: "./outlook-tile.png"
projectImageAltTag: "Illustration"
headerImage: "./outlook-tile.png"
headerImageAltTag: "Outlook Logo"
description: "Projects I've worked on as part of the Outlook team."
---

<div class="body-text">
    <h1 class="title">
        Smaller projects I've worked on at Outlook.
    </h1>
    <p className="description">
        Over my time at Microsoft I've worked on a lot of projects. This page contains a couple of smaller ones that I didn't feel deserved their own page but still wanted to share. 
    </p>
</div>

<div class="body-text">
    <h4>
        Product rendering.
    </h4>
    <p>
        For our hack week at microsoft, I wanted to spend some time learning more about rendering. I decided to spend a week composing environments that could be used to surface UI across our endpoints. The following images are the results of those experiments. The images were used in marketing explorations, and incorporated into the Outlook teams assets to use when presenting features internally. 
        <br><br>
        The devices that you see here were all modelled by hand in Rhino, and the scenes were composed and rendered in Keyshot 9. The monstera was borrowed from Grabcad.
    </p>
</div>

![Web and phone](./renders/web-and-phone.jpg)

![Mobile and tablet](./renders/mobile-and-tablet.jpg)

![Mobile and tablet](./renders/desktop-1.png)

<div class="body-text">
    <h4>
        Loading Animation
    </h4>
    <p>
        After wanting to learn more about animation, I took it upon myself to explore how we might create a loading animation for Outlook's new Logo. Motion has the amazing ability to change perception of time. With this, I was aiming to make the app feel more agile on boot. <br/><br/>This exploration (made in After Effects) was then used for inspiration by the dedicated Motion team at Outlook to help inspire their design for the loading animations across a variety of Outlook endpoints. 
    </p>
</div>

![Outlook logo loading animation on blue background](./loading-animation-blue.gif)

<div class="body-text">
    <h4>
        Resizing Outlook on the web
    </h4>
    <p>
        In 2018 I was tasked with making Outlook web responsive, down to a screen size of 320px. We came up with a prioritization framework for how content should be respected - what to keep on screen and what to hide at different stages when real estate becomes an issue. 
        <br><br>
        It was the reverse of your normal process. Standard practice would have you start small and scale up; this was doing the opposite which came with a lot of complexities and fun challenges.
        <br><br>
        Below is a recording of a prototype I coded using React and CSS media queries to define breakpoints and apply relevant layout changes. This prototype was essential in helping us land the final resize behaviour. 
    </p>
</div>


![Resizing Outlook](./resize.gif)