## FLEXBOX TASKS
# 0. Add display flex
Use the starter HTML and CSS files from this task to task 7. Copy the contents of the starter files into the files that you need to produce and make the necessary changes according to the task description.

When using display: flex; on a container, all direct children become flex-items (and no more inline or block elements).

With display flex, margins are not collapsing as they would with block items. Also remember that flexbox is 1-dimensional system (vs CSS Grid which is a 2 dimensional system)

In the /* Grid section within your CSS

    Add a selector for the row class
        Property: display, Value: flex

=> Now, all children from the row class are flex items

    Entirely remove the row::after declaration
    Remove the float: left inside [class*='col-']

=> All elements should appear same than before using the float

# 1. Add new classes on sections
Using the files from the previous task as the base for this task:

In the outermost section tag for services

    Add the class section-services

In the outermost section tag for works

    Add the class section-works

In the outermost section tag for about

    Add the class section-about-us

In the outermost section tag for latest_news

    Add the class section-latest-news

In the outermost section tag for testimonial

    Add the class section-testimonial

In the outermost section tag for contact

    Add the class section-contact

# 2. Reverse order Latest news cards
Using the files from the previous task for this task:

The flex-direction property says how flex items are placed on the main axis and their direction (normal or reversed).

flex-direction is sometimes used when doing responsive design. Some elements may appear better when they are in column mode on mobile and row when on desktop.

row-reverse and column-reverse should be used in specific situation. The visual order of elements should be the same visually and in the HTML code. Refer to flex-direction - CSS: Cascading Style Sheets | MDN for more information

In your CSS file:

Before /*** 4. CARD ***/, add a new comment: /* Section Latest news ============================= */

Under that comment section, target the row class inside section-latest-news class

    Property: flex-direction, Value: row-reverse

The Latest news should appear in a reverse order. 
