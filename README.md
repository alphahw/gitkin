#gitkin – a pointless 3D visualiser for your GitHub repo stats

That's all there is to it, really. You punch in a GitHub repo URL and get a snazzy visual consisting of towers for each contributor to the repo; with building blocks sized according to that week's activity.

[Give it a try.](http://alphahw.github.io/gitkin/)

##Why?

Bars and contributor graphs are cool, but 3D is cooler, ain't it?

##gitkin? What kind of a name is that?

I had a hard time coming up with the name. I thought of towers since that's what gitkin gives you, and since I'm currently in London, UK, my eyes fell quite naturally on [30 St Mary Axe](https://www.google.co.uk/maps/place/30+St+Mary+Axe+(The+Gherkin)/@51.514492,-0.080306,17z) – also known as [**The Gherkin**](http://en.wikipedia.org/wiki/30_St_Mary_Axe).

Boom – gitkin.

(You could also derive it from Anakin Gitwalker (Skywalker? Somethingwalker?) if you'd like.)

##Okay. What powers this "whacky hack"?

The awesome [three.js](http://threejs.org/) and the [GitHub API](https://developer.github.com), glued together by an unholy mix of HTML, CSS, and jQuery (yeah…).