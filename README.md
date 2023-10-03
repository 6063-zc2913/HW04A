# p5.js multi sketch template

I want to use the length of a bar to represent seconds, the width to represent minutes, and the moving position to represent hours.

So, I first let secondsNow, minutesNow, and hourNow be equal to second(), minute(), and hour() respectively.

At this time, I found that for second and minute, I need to divide the page into 60 equal parts, while hour is divided into 24 equal parts.

I thought that the map() I learned in class can be directly enlarged in equal proportions, so I mapped second, minute and hour respectively.

Then the stroke weight of this line is equal to minutesNow after being mapped. The x-axis coordinate of the starting point of the line is always 0, the x-axis of the end point is secondsNow after mapped, and the y-axis coordinate is always hourNow after mapped.

However! During my long testing and waiting process, I found that when the width is a relatively large minute, it will be obscured because of the web page canvas size.

So I found that the starting point of the height moved by hour cannot be 0, and the end point cannot be height. So I directly let the starting point of hour be minute and the maximum value after being mapped as the starting point(which is 100), and let the end point be height minus the maximum value of minute after being mapped(which is height - 100).
