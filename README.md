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
                <div>My Default Slot Content</div>
            </template>
        </slot-kin>
</my-web-component>
```






