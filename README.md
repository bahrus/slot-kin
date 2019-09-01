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

**NB II**  Dynamically adding DOM light children to itself might run into issues if hosted with a framework that uses VDOM implementation.



 








