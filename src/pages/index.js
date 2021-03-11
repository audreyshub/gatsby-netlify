import React from "react"

export default function Home() {
    return (<div class="content">
        <h1>Hello Netlify!</h1>
        <p>I'm Audrey Wong 👋.</p>
        <p>I'd like very much to join Netlify's Support Engineer team and help developers build a better Web.</p>
        <p>I love coding (I think it's poetry), art, nature, animals, especially squirrels! 🐿️ Like squirrel I am curious, resourceful, good at learning things and solving problems, and will not give up at the first sign of struggle as demonstrated by the squirrels in this
            <a href="https://www.youtube.com/watch?v=hFZFjoX2cGg" target="_blank">video</a>.</p>
        <h2>I didn't know what else to include on my site so I decided to write up my answers 👇.</h2>
        <h2>1. Talk about how you made your site and why you chose the tools you did. Briefly explain one challenge you experienced in setting up this site and how you solved it.</h2>
        <p class="answer">I chose Gatsby as my static site generator because I'm more familiar with JavaScript and React. I followed Gatsby's starter theme
            <a href="https://www.gatsbyjs.com/docs/tutorial/part-one/" target="_blank">tutorial</a>
            to create the site. I wasn't sure what build command to use but I found it in Netlify docs
            <a href="https://docs.netlify.com/configure-builds/common-configurations/gatsby/" target="_blank">here.</a>
        </p>
        <h2>2. What did you think of our service during the time you used it? Provide either some constructive criticism or some points that impressed you. Be honest! “It sucked” isn’t a wrong answer unless you don’t elaborate and provide some constructive criticism ;)</h2>
        <p class="answer">It was surprisingly simple to deploy my site to Netlify! I was amazed to see that changes to Git were automatically built and deployed by Netlify almost immediately 🙌. I was a bit amused to see that Netlify's dog mascot on the community<a href="https://answers.netlify.com/latest" target="_blank">
                forums</a>
            looks a little like the Dogecoin dog 🐶.</p>
        <h2>3. Rank your 5 favorite, and 5 least favorite, activities from this
            <a href="https://gist.github.com/fool/b0f254ff8c72a5765b6a9138249789d6" target="_blank">list</a>.</h2>
        <p class="answer">
            <b>Favorite 😃:</b>
            <ol>
                <li>Respond to 50+ support requests via email or chat most days</li>
                <li>Set up your own copy of several static site frameworks for debugging</li>
                <li>Debug a customer's build using a programming language and framework that you've never seen before</li>
                <li>Dig through server logs to troubleshoot a customer's website behavior</li>
                <li>Submit bug reports and potentially bug fixes to closed and open source projects that Netlify maintains on GitHub</li>
            </ol>
        </p>
        <p class="answer">
            <b>Least favorite ☺️:</b>
            <ol>
                <li>Deliver a talk to many people you don't know at a conference or meetup</li>
                <li>Manage a Support team</li>
                <li>Find and recruit teammates for the Support team</li>
                <li>Help manage communications during a service outage</li>
                <li>Engage multiple users at once via chat to answer their questions and troubleshoot problems</li>
            </ol>
        </p>
        <h2>4. Provide a link to documentation for a technical/developer-focused product, which you think are well done, and briefly explain why you think they are well done.</h2>
        <p class="answer">I really like Jekyll’s
            <a href="https://jekyllrb.com/docs/" target="_blank">docs</a>. The layout is clean and simple. The dark mode is easy on the eyes. I like that the first page you see is the Quickstart and they have a great Step by Step Tutorial. Everything appears to be broken down into small manageable chunks so it’s not overwhelming.</p>
        <h2>5. Why do you think SSL/HTTPS is important?</h2>
        <p class="answer">SSL/HTTPS is important because it protects server-client communication so that sensitive data like passwords and credit card numbers are protected against hackers. It verifies the authenticity of the website and helps improve user trust. And it improves search engine ranking.</p>
        <h2>6. Explain, in a couple of paragraphs, what you think 2 major challenges around DNS configuration are for less-technical internet end-users.</h2>
        <p class="answer">I think one major challenge less-technical internet end-users face around DNS configuration is not knowing what it is or where to go to configure it 🤷‍♀️. They may not know who their DNS provider is or have forgotten their login credentials.</p>
        <p class="answer">I also think the task itself can be daunting for less-technical end-users. In these cases, a video showing how to configure DNS settings may help or talking them through the process by phone or chat.</p>
        <h2>7. A customer writes in saying their “site won’t build”. Compose: - your best short (2-paragraph) customer-facing answer, - without any additional data, - that could be useful in the generic case, - but would also lead to a customer providing a more actionable response.</h2>
        <p class="answer">Hi there! Sorry to hear you’re having trouble with your build.
        </p>
        <p class="answer">Can you please share the build error from your logs? Also, please provide as much information as you can on what you’ve already tried, what your build settings are, and your package.json.</p>
        <p class="answer">With a little bit more information we can help take a closer look. Thanks!</p>
        <h2>8. (optional/bonus) Can you set up a redirect from “/netlify/anything” to https://www.google.com/search?q=anything ?</h2>
        <p class="answer">Yes, I can set up a redirect by saving a plain text file called _redirects to the publish directory of my site. The file syntax details would be:</p>
        <p class="answer">/netlify/anything &emsp; https://www.google.com/search?q=anything</p>
        <h2>9. (optional/bonus) Could you give us a suggestion to improve this test or the job posting?</h2>
        <p class="answer">On the job posting for APAC, the hours are listed as Monday through Friday, UTC+8-UTC+10. I believe that is an error as it appears there are only two hours in the shift 🕑. I also think sharing the salary range would help with transparency.</p>
        <footer>
            <p>Hand-crafted with 💗 by Audrey Wong</p>
        </footer>
    </div>);
}
