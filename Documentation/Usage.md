
<br>

<div align = center >

[![Button Installation]][Installation]  
[![Button Usage]][Usage]  
[![Button Examples]][Examples]

</div>

<br>

# Usage

The module provides the following helper functions:

[<kbd> <br> query <br> </kbd>][Query]
[<kbd> <br> clear <br> </kbd>][Clear]
[<kbd> <br> add <br> </kbd>][Add]
[<kbd> <br> change <br> </kbd>][Change]
[<kbd> <br> update <br> </kbd>][Update]

<br>

## Query

Query the current cart contents.

```ts
const cart = await Cart.query()
```

<br>

## Clear

Clear the cart's contents.

```ts
const cart = await Cart.clear()
```

<br>

## Add

Add one or more items to the cart.

```ts
const cart = await Cart.add(items)
```

<br>

## Change

Modify a specific cart item.

```ts
const cart = await Cart.change(props)
```

<br>


## Update

Modify multiple cart items & cart properties.

```ts
const cart = await Cart.update(props)
```

<br>


<!----------------------------------------------------------------------------->

[Update]: #update
[Change]: #change
[Query]: #query
[Clear]: #clear
[Add]: #add

[Button Installation]: https://img.shields.io/badge/Installation-539c3f?style=for-the-badge&logoColor=white&logo=docusign
[Button Examples]: https://img.shields.io/badge/Examples-14539a?style=for-the-badge&logoColor=white&logo=apacheparquet
[Button Usage]: https://img.shields.io/badge/Usage-gray?style=for-the-badge&logoColor=white&logo=applearcade

[Installation]: https://github.com/DoomCommerce/Shopify-Theme-Cart/tree/Stable/Documentation/Installation.md
[Examples]: https://github.com/DoomCommerce/Shopify-Theme-Cart/tree/Stable/Examples
[Usage]: #