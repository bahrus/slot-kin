[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/slot-kin)

<a href="https://nodei.co/npm/slot-kin/"><img src="https://nodei.co/npm/slot-kin.png"></a>

<img src="https://badgen.net/bundlephobia/minzip/slot-kin">

# slot-kin

Allow your web component to provide its own default light children.

## (Probably wrong) web component kvetching

[Slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots#Adding_flexibility_with_slots) support a concept of default slot content.  But it doesn't behave at all like I would expect it to behave.  Unlike light children slot content, no slotchange event is fired, and outside styling can't reach this content.  For all intents and purposes, it feels like shadow DOM, rather than default light children. 

slot-kin is designed to behave like I would have wanted the default slot content to behave.

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

**NB II**  Dynamically adding DOM light children to itself could get washed away if using an overly-controlling framework.

**NB III**  Just in case anyone actually read the previous sentence and made a connection I didn't intend:  The previous sentence was typed as a kind of afterthought.  I was really focused at the time on a parallel issue of how to handle passing the same children downward through multiple slot elements without deleting / adding (still not sure what the proper way to do that is), which seems not good for performance reasons.  I had no intention of bringing up any other disturbing connotations, and it isn't at all fair to lay that on anyone.  Apologies.






