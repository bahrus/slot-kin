[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/slot-kin)

<a href="https://nodei.co/npm/slot-kin/"><img src="https://nodei.co/npm/slot-kin.png"></a>

<img src="https://badgen.net/bundlephobia/minzip/slot-kin">

# slot-kin

Allow your web component to provide its own default light children.

## (Probably wrong) web component kvetching

[Slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots#Adding_flexibility_with_slots) support a concept of default slot content.  But it doesn't behave at all like I would expect it to behave.  Unlike light children slot content, no slotchange event is fired, and outside styling can't reach this content.  For all intents and purposes, it feels like shadow DOM, rather than default light children. 

slot-kin is designed to behave like I would have wanted the default slot content to behave.

## The usefulness of default slot children

There may be other uses, but the one that I find most interesting is that the ability to provide default slot children would provide a way of "self-documenting" the component, so users could inspect the element and see exactly what they need to do to create the output they need.


## Syntax

```html
<my-web-component>
    #ShadowDom
        <slot-kin name="mySlot">
            <template>
                <div slot="mySlot">My Default Slot Content</div>
            </template>
        </slot-kin>
</my-web-component>
```
Does the following:

It checks whether a light child with slot="mySlot" exists.  If it does, slot-kin does nothing.  

If no such slot is found, it creates one:

```html
<my-web-component>
    <div slot="mySlot">My Default Slot Content</div>
    #ShadowDom
        <slot-kin name="mySlot">
            <template>
                <div slot="mySlot">My Default Slot Content</div>
            </template>
        </slot-kin>
</my-web-component>
```

**NB I** Knowing when to check whether user-provided slots are provided is a bit dicey currently.

I think [this proposal](https://github.com/w3c/webcomponents/issues/809) would go a long way to making this possible to do reliably.

**NB II**  Dynamically adding DOM light children to itself could get washed away if using an overly-controlling framework.

## The benefits and pitfalls of viewing DOM Elements anthropomorphically 

<details>
  <summary>Warning:  TMI</summary>

Just in case anyone actually read the previous sentence and made a connection I didn't intend:  The previous sentence was typed as a kind of afterthought.  

I was really focused at the time on a parallel issue of how to handle passing the same children downward through multiple slot elements without deleting / adding (still not sure what the proper way to do that is), which seems not good for performance reasons.  

I was going to give it the name "slot-nik", based on the Urban Dictionary definition:  

>Someone whose fanatical devotion to or reverent need for the deliberation of minutia slows you down, especially in some kind of line.

I decided against it, because it seemed it might have slightly negative overtones to a particular ethnic group.

This made me think about the opposite direction, so I thought it would make sense to name this element slot-kin, which seemed more friendly in nature to the same ethnic group, and actually fit the description of what this element is trying to achieve quite nicely.

I had no conscious intention of bringing up any other disturbing connotations, and it isn't at all fair to lay that on anyone.  I can't rule out the possibility that my subsconscious was playing tricks on me, so apologies.

I think it is quite natural, after working with the DOM for a number of years, to think of those elements as concious beings, as it makes reasoning about them quite a bit easier, at least for me.  I find it a nice way to add a little humor to the situation, too, when appropriate.  The fact that there are "parents" and "children" and "siblings" makes the comparison almost unavoidable, I would think.

This tendency only increases dramatically in our current situation, where names of custom elements need to be unique.  This kind of forces you to think long and hard about what the name should be, which is something any soon-to-be parent can relate to.  Perhaps this psychological attachment / malady will diminish as [Scoped Custom Element Registries](https://github.com/w3c/webcomponents/issues/716) allows you essentially only have to choose the [first and middle name of your baby](https://www.youtube.com/watch?v=QxbJJ995Vjo), closer to the situation with actual babies, more or less. 

I realize now that when you combine all these things together, all sorts of unfair comparisons can be made, like "hiding children in the shadows from a big bad framework", or comparisons to the frightning phrase "we will replace you".  Who knows if that's a factor in why I never developed a fondness for a popular framework of the day, perhaps irrationally so?  It's great when what feels right actually [is right](https://www.infoq.com/news/2019/04/real-world-framework-benchmark/?utm_source=sumome&utm_medium=twitter&utm_campaign=sumome_share).  All those dying DOM elements, all that tough programming prerequisites in order to achieve 1/16th the performance.  [Great job, developer community!](https://www.youtube.com/watch?v=YgYEuJ5u1K0)

Okay, that isn't fair either.  A large part of the blame lies with the [market failure](https://en.wikipedia.org/wiki/Vendor_lock-in) phenomena lack of widespread web component adoption should help smash.

Perhaps it has caused me to become overly biased in favor of hiding (via display:none) rather than deleting children when no longer needed at least for the moment, in order to hold on to their "memories".  This might not always be the right choice, especially on a low-memory device.  Polymer got that right -- [support both](https://polymer-library.polymer-project.org/2.0/docs/devguide/templates#dom-if).  It makes a world of a difference, in my experience, in a desktop setting (yes, even with caching of data), that they support hiding.  That is probably my pet peeve when it comes to the gas guzzler in the room.  

All this thinking brings me back to a personal story, and taking comfort in the observation that I'm probably not alone in this tendency of thinking  hyper-anthropomorphically, and that it isn't limited to DOM Elements.

When I was growing up, my fairly recently deceased mother used to recount a story where she had a pleasant dream where she was cutting me up into pieces, and wasn't worried about it at all, because she knew she would be able to put me back together again.  When she woke up, she (recursively) felt guilty about *not* feeling guilty about it.

Then she realized she was projecting me onto her Fortran program she was improving at work.  There was no word for it at the time -- I guess she was "refactoring" her program, and me both, which is a good representation of how devoted she was to raising me right.

So I guess this component, such as it is, is in loving memory to her.  

</details>

 








