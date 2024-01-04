
<br>

<div align = center >

# Shopify Theme Cart <br> API Wrapper

Wrapper functions & typings

</div>

<br>

<div align = center >

[![Button Installation]][Installation]  
[![Button Usage]][Usage]  
[![Button Examples]][Examples]


<br>

```sh
npm install @doomcommerce/shopify-theme-cart
```

</div>

<br>

## Showcase

```ts
import Cart from '@doomcommerce/shopify-theme-cart'

let cart = await Cart.query()

cart = await Cart.change({
    quantity : 10 ,
    line : 2
})
```

<br>

<!----------------------------------------------------------------------------->

[Button Installation]: https://img.shields.io/badge/Installation-539c3f?style=for-the-badge&logoColor=white&logo=docusign
[Button Examples]: https://img.shields.io/badge/Examples-14539a?style=for-the-badge&logoColor=white&logo=apacheparquet
[Button Usage]: https://img.shields.io/badge/Usage-b85b4a?style=for-the-badge&logoColor=white&logo=applearcade


[Installation]: https://github.com/DoomCommerce/Shopify-Theme-Cart/tree/Stable/Documentation/Installation.md
[Examples]: https://github.com/DoomCommerce/Shopify-Theme-Cart/tree/Stable/Examples
[Usage]: https://github.com/DoomCommerce/Shopify-Theme-Cart/tree/Stable/Documentation/Usage.md