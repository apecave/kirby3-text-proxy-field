# Kirby3 Text Proxy Field

Text field that can optionally proxy the placeholder value using the kirby query language.

## Overview

- [1. Use Case](#1-use-case)
- [2. Installation](#2-installation)
- [3. Configuration](#3-configuration)
- [4. Template Usage](#4-template-usage)

## 1. Use Case

A developer wishes to make a meta_description field allowing the user customize the page meta description for better seo. The default fallback value would be from the `$page->lede()`. In this case it would be nice to be able to show the user data from the `$page->lede()` field as a placeholder value so the user can see what the fallback value would be.

## 2. Installation

Download and copy this repository to ```/site/plugins/kirby3-text-proxy-field```

Alternatively, you can install it with composer: ```composer require apecave/kirby3-text-proxy-field```


## 3. Configuration

The blueprint field would look something like this:

```yaml
fields:
  meta_description:
    type: text-proxy
    placeholder: page.lede()
```

## 4. Template Usage
The header code of the page we could do something like:

```php
$meta_description = $page->meta_description()->or( $page->lede() );
```
