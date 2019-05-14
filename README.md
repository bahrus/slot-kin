# slot-kin

Allow your web component to provide its own default light children.

## Syntax

```html
<my-web-component>
    #ShadowDom
        <slot-kin name="mySlot">
            <template>
                <div>My Default Slot Content</div>
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






