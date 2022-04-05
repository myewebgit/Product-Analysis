import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h4> Know book blogs</h4>
            <h3>#Question 01. What is Context API?</h3>

 <p>The Context API is a React structure that enables to exchange unique details and assists in solving prop-drilling from all levels of an application. The Context API can be used to share data with multiple components, without having to pass data through props manually. For example, some use cases it is ideal for: theming, user language, authentication, etc. It can solve a lot of problems that applications face related to state management and how they’re passing state to their components. Instead of installing a state management library in a project that will eventually cost a project performance and increase the bundle size that can easily go with Context API and be fine with it. The React Context API is a way for a React app to effectively produce global variables.</p>


<h3>#Question 02. What is semantic tag? Explain with example.</h3>

<p>Semantics is the study of the meanings of words and phrases in a language. Semantic elements = elements with a meaning. Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. Elements such as header, footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them. On the other hand div and span considered non-semantic because these tell nothing about their context.
 The semantic elements added in HTML5 are:
•	article
•	aside
•	details
•	figure
•	footer
•	header
•	main
•	mark
•	nav
•	section
</p>

<h3>#Question 03. Inline, block and inline-block elements?
</h3>

Every HTML element has a default display value, depending on what type of element it is.
There are two display values: block and inline.
________________________________________
Block-level Elements
A block-level element always starts on a new line, and the browsers automatically add some space or margin before and after the element. A block-level element always takes up the fully available. Two commonly used block elements are: p and div. The <p> element defines a paragraph in an HTML document.
The .div element defines a division or a section in an HTML document.
Here are the block-level elements in HTML:
<br></br>
1.address					
2.article
3.aside
4.blockquote
5.canvas
6.dd
7.div

Inline Elements
An inline element does not start on a new line. An inline element only takes up as much width as necessary.
Here are the inline elements in HTML:
1.a
2.abbr
3.acronym
4.b
5.bdo
6.big
7.br
8.button

An inline element cannot contain a block-level element

Inline-block:

Inline elements don’t take any extra spaces among them but essential, Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element. Also, with display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not.
Beside these, a block-level element always starts on a new line, add some space or margin before and after the element. Compared to display: block, the major difference is that display: inline-block does not add a line-break after the element, so the element can sit next to other elements.

</p>

        </div>
    );
};

export default Blogs;